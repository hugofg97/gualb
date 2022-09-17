const path = require(`path`);
const { slash } = require(`gatsby-core-utils`);

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // The “graphql” function allows us to run arbitrary
  // queries against the local Gatsby GraphQL schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.

  const result = await graphql(`
    {
      allWpPage {
        edges {
          node {
            id
            slug
            status
            template {
              templateName
            }
          }
        }
      }
      allWpPost {
        edges {
          node {
            id
            slug
            status
            categories {
              nodes {
                slug
              }
            }
            template {
              templateName
            }
          }
        }
      }
      allWpCategory {
        edges {
          node {
            id
            slug
            link
            name
            description
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
  }

  const { allWpPage, allWpPost, allWpCategory } = result.data;

  const pageTemplate = path.resolve(`./src/templates/page.js`);

  allWpPage.edges.forEach((edge) => {
    createPage({
      path: `/${edge.node.slug}/`,
      component: slash(pageTemplate),
      context: {
        id: edge.node.id,
      },
    });
  });

  const postTemplate = path.resolve(`./src/templates/post.js`);

  allWpPost.edges.forEach((edge) => {
    createPage({
      path: `/${edge.node.categories.nodes[0].slug}/${edge.node.slug}/`,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    });
  });

  const categoryTemplate = path.resolve(`./src/templates/category.js`);

  allWpCategory.edges.forEach((edge) => {
    createPage({
      path: `/${edge.node.slug}/`,
      component: slash(categoryTemplate),
      context: {
        id: edge.node.id,
      },
    });
  });
};
