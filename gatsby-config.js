module.exports = {
  siteMetadata: {
    title: `Estudio Integra`,
    description: `Sitio del estudio de arquitectura Integra. Un estudio que provee un servicio flexible e integral. Ofreciendo una solución completa desde el proyecto hasta la ejecución de obra.`,
    
  },
  plugins: [
    {
        resolve: 'gatsby-source-contentful',
        options: {
          spaceId: process.env.CONTENTFUL_SPACE_ID,
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
        }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/static/assets`
      }
    }
    ,
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sass',
    `gatsby-plugin-react-helmet`,
    
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
