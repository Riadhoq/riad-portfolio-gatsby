module.exports = {
  siteMetadata: {
    title: `Coming Soon`,
    description: ``,
    author: `@riadulhoque`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Riadul Hoque Portfolio Site`,
        short_name: `Riadul Hoque Portfolio Site`,
        start_url: `/`,
        background_color: `#425167`,
        theme_color: `#425167`,
        display: `minimal-ui`,
        icon: `src/images/Polygon-color.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
