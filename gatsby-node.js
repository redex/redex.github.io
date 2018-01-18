const path = require(`path`);
const crypto = require(`crypto`)
const remark = require('remark');
const html = require('remark-html');
const visit = require(`unist-util-visit`);
const hljs = require('./hljs');
const toString = require(`mdast-util-to-string`)
const slugs = require(`github-slugger`)()

const highlightSyntax = () => ast => {
  visit(ast, 'code', node => {
    const language = node.lang && node.lang.toLowerCase();

    const html =
      hljs.getLanguage(language) ?
        hljs.highlight(language, node.value).value :
        hljs.highlightAuto(node.value).value;

    node.type = 'html'
    node.value = `<div class="gatsby-highlight">
      <pre class="hljs lang-${language || 'none'}"><code>${html}</code></pre>
      </div>`
  });

  return ast;
};

const addHeadingLinks = () => ast => {
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
      const package = parsed;
      package.slug = path.join("packages", decodeURIComponent(package.id))

      await new Promise(resolve => 
        remark()
          .use(highlightSyntax)
          .use(addHeadingLinks)
          .use(html)
          .process(package.readme, function (err, file) {
            package.readme = file.contents;
            transformObject(package, "Packages");
            resolve();
          })
        );
    } else if (node.sourceInstanceName === "keywords") {
      parsed.forEach(keyword => {
        keyword.id = "keywords/" + keyword.name;
        keyword.slug = path.join("keywords", decodeURIComponent(keyword.name));
        transformObject(keyword, "Keywords")
      });
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

exports.createPages = async ({ graphql, boundActionCreators: { createPage } }) => {
  {
    let result = await graphql(`
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
    result.data.allPackages.edges.map(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/Package.js`),
        context: {
          id: node.id,
        },
      })
    })
  }

  {
    let result = await graphql(`
      {
        allKeywords {
          edges {
            node {
              name
              slug
            }
          }
        }
      }
    `)
    result.data.allKeywords.edges.map(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/Keyword.js`),
        context: {
          keyword: node.name,
        },
      })
    })
  }
}