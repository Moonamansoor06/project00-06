require("dotenv").config({path:".env"});
module.exports = {
  
  plugins: [
   
    {
      resolve: 'gatsby-plugin-snipcartv3',
      options: {
        apiKey: process.env.SNIPCART_KEY    
        }
    
    },
    `gatsby-plugin-netlify`
    
  ],
}
