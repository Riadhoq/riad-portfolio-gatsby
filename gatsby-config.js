const autoprefixer = require('autoprefixer');
module.exports = {
  siteMetadata: {
    title: `Riadul Hoque | Full Stack Web Developer`,
    description: `Riadul Hoque Portfolio Site`,
    author: `@hoqriad`,
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
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
        postCssPlugins: [
          autoprefixer({ browsers: ['last 2 versions'] }),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Riadul Hoque Portfolio Site`,
        short_name: `Riadul Hoque Portfolio Site`,
        start_url: `/`,
        background_color: `#425167`,
        theme_color: `#425167`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        svgo: true,
        svgoConfig: {
          removeViewBox: true,
          cleanupIDs: true,
        },
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
