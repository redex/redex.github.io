const path = require(`path`);
const crypto = require(`crypto`);
const remark = require('remark');
const html = require('remark-html');
const visit = require(`unist-util-visit`);
const hljs = require('./hljs');
const toString = require(`mdast-util-to-string`);
const slugs = require(`github-slugger`)();
const refmt = require('reason');

const reToML = code => {
  try {
    return refmt.printML(refmt.parseRE(code));
  } catch (e) {
    return e.message || "unknown refmt error";
  }
};

const mlToRE = code => {
  try {
    return refmt.printRE(refmt.parseML(code));
  } catch (e) {
    return e.message || "unknown refmt error";
  }
};

const highlight = (language, code) => {
  const html =
    hljs.getLanguage(language) ?
      hljs.highlight(language, code).value :
      hljs.highlightAuto(code).value;

  return (
    `<pre class="hljs lang-${language || 'none'}"><code>${html}</code></pre>`
  );
};

const tabbedCodeBlock = (reason, ml) => {
  return `
    <div class="redex-codeblock m-tabbed">
      <ul>
        <li class="reason s-selected"> RE
        <li class="ml"> ML
      </ul>
      <div class="codeblock reason s-selected">
        ${highlight('reason', reason)}
      </div>
      <div class="codeblock ml">
        ${highlight('ml', ml)}
      </div>
    </div>
  `;
};

const codeBlock = code =>
  `<div class="redex-codeblock">${code}</div>`;

const codeBlocks = () => ast => {
  visit(ast, 'code', node => {
    const language = node.lang && node.lang.toLowerCase();

    node.type = 'html'

    if (language === 'reason') {
      node.value = tabbedCodeBlock(node.value, reToML(node.value));
    } else if (language === 'ml') {
      node.value = tabbedCodeBlock(mlToRE(node.value), node.value);
    } else {
      node.value = codeBlock(highlight(language, node.value));
    }

  });

  return ast;
};

const headingAnchors = () => ast => {
  slugs.reset()

  function patch(context, key, value) {
    if (!context[key]) {
      context[key] = value
    }

    return context[key]
  }

  visit(ast, `heading`, node => {
    const id = slugs.slug(toString(node))
    const data = patch(node, `data`, {})

    patch(data, `id`, id)
    patch(data, `htmlAttributes`, {})
    patch(data, `hProperties`, {})
    patch(data.htmlAttributes, `id`, id)
    patch(data.hProperties, `id`, id)

    node.children.unshift({
      type: `link`,
      url: `#${id}`,
      title: null,
      data: {
        hProperties: {
          "aria-hidden": true,
          class: `anchor`,
        },
        hChildren: [
          {
            type: `raw`,
            // The Octicon link icon.
            value: `<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
          },
        ],
      },
    })
  });

  return ast;
};
    
exports.onCreateNode = async ({ node, loadNodeContent, boundActionCreators: { createNode, createParentChildLink } }) => {
  function transformObject(obj, type) {
    const objStr = JSON.stringify(obj)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(objStr)
      .digest(`hex`);
    const jsonNode = {
      ...obj,
      children: [],
      parent: node.id,
      internal: {
        contentDigest,
        type,
      },
    }

    createNode(jsonNode)
    createParentChildLink({ parent: node, child: jsonNode })
  }

  if (node.internal.mediaType === "application/json") {
    const content = await loadNodeContent(node);
    const parsed = JSON.parse(content);
    
    if (node.sourceInstanceName === "packages") {
      const pkg = parsed;
      pkg.slug = path.join("/package", decodeURIComponent(pkg.id))

      await new Promise((resolve, reject) => 
        remark()
          .use(codeBlocks)
          .use(headingAnchors)
          .use(html)
          .process(pkg.readme, function (err, file) {
            if (err) {
              reject(err);
            } else {
              pkg.readme = file.contents;
              transformObject(pkg, "Packages");
              resolve();
            }
          })
        );
    } else {
      throw "unknown source " + node.sourceInstanceName;
    }
  }
};

exports.onCreatePage = async ({ page, boundActionCreators: { createPage} }) => {
  return new Promise(resolve => {
    if (page.path === "/") {
      page.layout = "FrontPageLayout";
      createPage(page);
    }
    resolve();
  });
};

exports.createPages = async ({ graphql, boundActionCreators: { createPage, createRedirect } }) => {
  {
    const packages = await graphql(`
      {
        allPackages {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `);
    packages.data.allPackages.edges.map(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/Package.js`),
        context: {
          id: node.id
        },
      });
      createRedirect({
        fromPath: path.join("/package", decodeURIComponent(node.id)),
        toPath: node.slug,
        isPermananet: true,
        redirectInbrowser: true
      });
    })
  }

  {
    const keywords = await graphql(`
      {
        keywords: allPackages {
          distinct(field: keywords)
        }
      }
    `)
    keywords.data.keywords.distinct.map(keyword => {
      createPage({
        path: "/keyword/" + keyword,
        component: path.resolve(`./src/templates/Keyword.js`),
        context: {
          keyword
        },
      });
      createRedirect({
        fromPath: "/keywords/" + keyword,
        toPath: "/keyword/" + keyword,
        isPermananet: true,
        redirectInbrowser: true
      });
    })
  }

  {
    const categories = await graphql(`
      {
        categories: allPackages {
          distinct(field: category)
        }
      }
    `)
    categories.data.categories.distinct.map(category => {
      createPage({
        path: '/category/' + category,
        component: path.resolve(`./src/templates/Category.js`),
        context: {
          category
        },
      })
    })
  }

  {
    const platforms = await graphql(`
      {
        platforms: allPackages {
          distinct(field: platforms)
        }
      }
    `)
    platforms.data.platforms.distinct.map(platform => {
      createPage({
        path: '/platform/' + platform,
        component: path.resolve(`./src/templates/Platform.js`),
        context: {
          platform
        },
      })
    })
  }
}

exports.modifyWebpackConfig = ({ config }) => {
  config.loader("js", {
    exclude: [/(node_modules|bower_components|bs-typed-css)/],
  });

  return config;
};