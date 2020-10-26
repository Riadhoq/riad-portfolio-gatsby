const autoprefixer = require("autoprefixer");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Riadul Hoque | Full Stack Web Developer`,
    description: `Riadul Hoque Portfolio Site`,
    author: `@hoqriad`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
        postCssPlugins: [autoprefixer({ browsers: ["last 2 versions"] })],
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
      resolve: "gatsby-plugin-svgr",
      options: {
        svgo: true,
        svgoConfig: {
          removeViewBox: true,
          cleanupIDs: true,
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `mix3daqukv5j`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
