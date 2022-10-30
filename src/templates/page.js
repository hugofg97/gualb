import React, { Component } from "react";
import { graphql } from "gatsby";
import Header from "./Header";
import { Main } from "../components/globals/Blocks";
import Image from "../assets/images/backblog.webp";

class Page extends Component {
  render() {
    const StaticPage = this.props.data.wpPage;
    console.log(this.props.data);
    const posts = this.props.data.allWpPost.edges;
    return (
      <div
        style={{
          margin: "0 auto",
          height: "100vh",
          backgroundImage: `url(${Image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <Header></Header>

        <h1>{StaticPage.title}</h1>
        <Main style={{ background: "rgba(44,44,44,0.5)", height: "100vh" }}>
          <div
            style={{
              marginTop: 80,
              display: "flex",
              justifyContent: "start",
              flexDirection: "column",
              width: "1140px",
            }}
          >
            <div></div>
            <h1>Artigos recentes</h1>
            {posts.map((el) => (
              <h1>{el.node.title}</h1>
            ))}
          </div>
        </Main>
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
    allWpPost {
      edges {
        node {
          id
          link
          slug
          template {
            templateName
          }
          title
          uri
          date
          excerpt
          content
        }
      }
    }
  }
`;
