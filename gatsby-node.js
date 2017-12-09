const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
var remark = require('remark');
var html = require('remark-html');
    

exports.onCreateNode = ({ node, getNode, boundActionCreators: { createNodeField} }) => {
  if (node.internal.type === "PackagesJson") {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({ node, name: `slug`, value: slug });


    remark()
      .use(html)
      .process(node.readme, function (err, file) {
        createNodeField({ node, name: `html`, value: file.contents });
      });
  }
};

exports.createPages = ({ graphql, boundActionCreators: { createPage} }) =>
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
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })