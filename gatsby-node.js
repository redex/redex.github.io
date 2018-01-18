const path = require(`path`);
const crypto = require(`crypto`)
const remark = require('remark');
const html = require('remark-html');
const visit = require(`unist-util-visit`);
const hljs = require('./hljs');
    
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
          .use(() => ast => {
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
          })
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