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
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: myCustomQueries,
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: "[data-sal]", // Selector of the elements to be animated
        animateClassName: "sal-animate", // Class name which triggers animation
        disabledClassName: "sal-disabled", // Class name which defines the disabled state
        rootMargin: "0% 50%", // Corresponds to root's bounding box margin
        enterEventName: "sal:in", // Enter event name
        exitEventName: "sal:out", // Exit event name
      },
    },
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
