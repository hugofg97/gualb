import React, { Component } from "react";
import { graphql } from "gatsby";
import Header from "./Header";

class Page extends Component {
  render() {
    const StaticPage = this.props.data.wpPage;

    return (
      <div style={{ width: "1200px", margin: "auto" }}>
        <Header></Header>

        <h1>{StaticPage.title}</h1>
        <main dangerouslySetInnerHTML={{ __html: StaticPage.content }}></main>
      </div>
    );
  }
}

export default Page;

export const pageQuery = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      content
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
