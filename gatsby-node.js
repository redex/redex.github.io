const path = require(`path`);
const crypto = require(`crypto`)
var remark = require('remark');
var html = require('remark-html');
    
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
            package.readme = "";

      await new Promise(resolve => 
        remark()
          .use(html)
          .process(package.readme, function (err, file) {
            package.readme = file.contents;
            transformObject(package, "Packages");
            resolve();
          })
        );
    } else if (node.sourceInstanceName === "keywords") {
      parsed.forEach(keyword => {
        keyword.id = "keywrods/" + keyword.name;
        keyword.slug = path.join("keywords", decodeURIComponent(keyword.name));
        transformObject(keyword, "Keywords")
      });
    } else {
      throw "unknown source " + node.sourceInstanceName;
    }
  }
};

exports.createPages = async ({ graphql, boundActionCreators: { createPage } }) => {
  {
    let result = await graphql(`
      {
        allPackages {
          edges {
            node {
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
          slug: node.slug,
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