const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
var remark = require('remark');
var html = require('remark-html');
    

exports.onCreateNode = ({ node, getNode, boundActionCreators: { createNodeField } }) => {
  if (node.internal.type === "PackagesJson") {
    const slug = createFilePath({ node, getNode, trailingSlash: false });
    createNodeField({ node, name: `slug`, value: "/packages" + decodeURIComponent(slug) });

    remark()
      .use(html)
      .process(node.readme, function (err, file) {
        createNodeField({ node, name: `html`, value: file.contents });
      });
  }

  if (node.internal.type === "KeywordsJson") {
    createNodeField({ node, name: `slug`, value: "/keywords/" + node.name });
  }
};

exports.createPages = ({ graphql, boundActionCreators: { createPage } }) => {
  new Promise((resolve, reject) => {
    graphql(`
      {
        allPackagesJson {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allPackagesJson.edges.map(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/Package.js`),
          context: {
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })

  new Promise((resolve, reject) => {
    graphql(`
      {
        allKeywordsJson {
          edges {
            node {
              name
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allKeywordsJson.edges.map(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/Keyword.js`),
          context: {
            keyword: node.name,
          },
        })
      })
      resolve()
    })
  })
}