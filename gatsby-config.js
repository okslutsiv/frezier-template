module.exports = {
  siteMetadata: {
    title: `Салон краси Фризієр`,
    description: `Таким може бути Ваш сайт - привабливим, швидким і функціональним :)`,
    author: `@okslutsiv`,
    phone: `+380 67 123 45 67`,
    adress: `Львів, вул.Болгарська, 1`,
    fblink: `https://facebook.com`,
  },
  pathPrefix: "/frezier-template",
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
        name: `frezier`,
        short_name: `frezier`,
        start_url: `/`,
        icon: `src/images/icons/favicons/favicon64.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
