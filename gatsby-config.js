module.exports = {
  siteMetadata: {
    title: `An example to learn how to source data from WordPress`,
    description: `Sourcing data from WordPress`,
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
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Poppins`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
        ],

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
