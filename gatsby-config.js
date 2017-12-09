module.exports = {
  siteMetadata: {
    title: `re:index`,
  },
  plugins: [`gatsby-plugin-react-helmet`, {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "packages",
      path: `${__dirname}/data/packages/`
    }
  },
  "gatsby-transformer-json"],
}
