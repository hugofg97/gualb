module.exports = {
  siteMetadata: {
    title: `Desenvolvimento de Software | Gualb`,
    description: `Aprenda a desenvolver softwares, e torne-se um desenvolvedor full-stack web, desktop e mobile`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
         * Example : 'dev-gatbsyjswp.pantheonsite.io' or 'www.example-site.com'
         */
        url: `https://www.c5noticias.com.br/graphql`,
        baseUrl: `https://www.c5noticias.com.br/graphql`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: false,
      },
    },
  ],
};
