module.exports = {
  siteMetadata: {
    title: `Covid19 Gatsby`,
    author: `Hamaar`,
    description: `A blog about Covid19`,
    siteUrl: `http://hamaar.com/`,
    social: {
      facebook: `hsillabub`,
    },
  },
  plugins: [
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content-card`,
        path: `${__dirname}/src/content-card`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content-blog`,
        path: `${__dirname}/src/content-blog`,
      },
    },
    "gatsby-plugin-react-leaflet",
  ],
};
