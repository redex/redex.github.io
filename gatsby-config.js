module.exports = {
  siteMetadata: {
    title: `redex`,
  },
  mapping: {
    "Keywords.packages": "Packages"
  },
  plugins: [
    'gatsby-plugin-react-next',
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-glamor',
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./static/favicon.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: true,
          favicons: true,
          firefox: true,
          twitter: true,
          yandex: true,
          windows: true
        }
      }
    }, {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "packages",
        path: `${__dirname}/data/generated/packages`
      }
    }
  ],
}
