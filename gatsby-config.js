/* require("dotenv").config({
  path: `.env`,
})
 */
module.exports = {
  siteMetadata: {
    title: `My Mart`,
    author: {
      name: `Moona Mansoor`,
      summary: `Creating this site as my project`,
    },
    description: `Web developments tools`,
    siteUrl: `https://project12A-blog.netlify.app/`,
    social: {
      twitter: `MMansoor06`,
    },
  },
  plugins: [
  
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
  

  ],
}
