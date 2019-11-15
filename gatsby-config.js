require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `LK`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-apiserver',
      options: {
        url: 'https://gatest-83e0.restdb.io/rest/test',
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'cache-control': 'no-cache',
          'x-apikey': '6a1eff66b41b20e3b2a91376beea57adabe68',
        },
        typePrefix: 'internal__',
        name: `concerts`,
        // params: {
        //   results: 10,
        // },
        verboseOutput: false,
        entitiesArray: [
          {
            url: `https://gatest-83e0.restdb.io/rest/test`,
            method: 'get',
            headers: {
              'Content-Type': 'application/json',
            },
            name: `blaaaa`,
          },
        ],
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
