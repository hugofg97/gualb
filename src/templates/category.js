import React, { Component } from "react";
import { graphql } from "gatsby";
import Header from "./Header";

class Category extends Component {
  render() {
    const StaticPage = this.props.data.wpCategory;

    return (
      <>
        <Header></Header>
        <h1>{StaticPage.name}</h1>
        <main>
          <h2>{StaticPage.description}</h2>
        </main>
      </>
    );
  }
}

export default Category;

export const categoryQuery = graphql`
  query($id: String!) {
    wpCategory(id: { eq: $id }) {
      name
      description
    }
    site {
      id
      siteMetadata {
        title
        description
      }
    }
  }
`;
