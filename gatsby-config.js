const myCustomQueries = {
  xs: "(max-width: 420px)",
  sm: "(max-width: 720px)",
  md: "(max-width: 1024px)",
  l: "(max-width: 1536px)",
  portrait: "(orientation: portrait)",
};
module.exports = {
  siteMetadata: {
    title: `Desenvolvimento de Software | Gualb`,
    description: `Aprenda a desenvolver softwares, e torne-se um desenvolvedor full-stack web, desktop e mobile`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "pt-BR",
      },
    },
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: myCustomQueries,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: false,
      },
    },
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
        url: `http://3.239.218.175/graphql`,
        baseUrl: `http://3.239.218.175/graphql`,
        protocol: `http`,
        hostingWPCOM: false,
        useACF: false,
      },
    },
  ],
};
