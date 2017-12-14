module.exports = {
  siteMetadata: {
    title: `re:index`,
  },
  mapping: {
    "Keywords.packages": "Packages"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "packages",
        path: `${__dirname}/data/generated/packages`
      }
    }, {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "keywords",
        path: `${__dirname}/data/generated/keywords.json`
      }
    }
  ],
}
