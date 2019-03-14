module.exports = {
  siteMetadata: {
    title: `Салон краси Фризієр`,
    pathPrefix: "/frezier",
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@okslutsiv`,
    phone: `+380 67 123 45 67`,
    adress: `Львів, вул.Болгарська, 1`,
    fblink: `https://facebook.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-react-leaflet",
    "gatsby-transformer-json",

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
        name: `data`,
        path: `${__dirname}/src/data`,
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
        icon: `src/images/icons/favicons/favicon32.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
