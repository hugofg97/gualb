import React, { Component } from "react";
import { graphql } from "gatsby";
import Header from "./Header";
import { Main } from "../components/globals/Blocks";
import Image from "../assets/images/backblog.webp";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

const ArticleH1 = styled.h1``;
const Article = styled.article`
  & img {
    border-radius: 16px;
  }
  @media (max-width: 400px) {
    & img {
      width: 300px;
    }
  }
`;
const ContainerArticle = styled.div`
  background-color: rgba(41, 37, 88, 1);
  text-align: center;
  width: 400px;
  box-shadow: 1px 1px 10px 1px rgba(1, 1, 1, 0.6);
  border-radius: 16px;
  padding: 16px;
  height: 450px;
  @media (max-width: 400px) {
    width: 100%;

    // min-height: 600px;
  }
`;
const ArticlesBlog = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 16px 16px 16px 16px;

  gap: 24px;
  justify-content: space-start;
`;

class Page extends Component {
  render() {
    const StaticPage = this.props.data.wpPage;
    console.log(this.props.data);
    const posts = this.props.data.allWpPost.edges;
    return (
      <div
        style={{
          margin: "0 auto",
          backgroundImage: `url(${Image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundAttachment: "fixed",
          height: "100vh",
        }}
      >
        <Header></Header>
        {/* <div
          style={{
            display: "flex",
            width: 200,
            height: 200,
            background: "red",
          }}
        >
          aasas
        </div> */}
        <div
          style={{
            background: "rgba(255,255,255,0.2)",
            overflowY: "scroll",
            height: "100vh",
          }}
        >
          <Main>
            <div style={{}}>
              <h1
                style={{
                  color: "white",
                  marginTop: "100px",
                  textAlign: "start",
                }}
              >
                Artigos recentes
              </h1>
            </div>
            <ArticlesBlog>
              {posts.map((el) => (
                <ContainerArticle>
                  <Article>
                    <GatsbyImage
                      style={{ bordeRadius: "8px" }}
                      image={el.node.featuredImage.node.gatsbyImage}
                    ></GatsbyImage>
                    <h1 style={{ color: "white" }}>{el.node.title}</h1>
                    <p style={{ color: "white" }}>
                      {el.node.excerpt.replace("<p>", "").replace("</p>", "")}
                    </p>
                    <span style={{ color: "white" }}>
                      {el.node.author.node.firstName}
                    </span>
                    <span style={{ color: "white" }}>
                      {el.node.commentCount}
                    </span>
                  </Article>
                </ContainerArticle>
              ))}
            </ArticlesBlog>
            <ArticlesBlog>
              {posts.map((el) => (
                <ContainerArticle>
                  <Article>
                    <GatsbyImage
                      style={{ bordeRadius: "8px" }}
                      image={el.node.featuredImage.node.gatsbyImage}
                    ></GatsbyImage>
                    <h1 style={{ color: "white" }}>{el.node.title}</h1>
                    <p style={{ color: "white" }}>
                      {el.node.excerpt.replace("<p>", "").replace("</p>", "")}
                    </p>
                    <span style={{ color: "white" }}>
                      {el.node.author.node.firstName}
                    </span>
                    <span style={{ color: "white" }}>
                      {el.node.commentCount}
                    </span>
                  </Article>
                </ContainerArticle>
              ))}
            </ArticlesBlog>
          </Main>
        </div>
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
          commentCount
          commentStatus
          date
          excerpt
          title
          featuredImage {
            node {
              gatsbyImage(
                width: 1920
                height: 1080
                formats: WEBP
                aspectRatio: 5
              )
              template {
                templateName
              }
              title
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
          author {
            node {
              avatar {
                default
              }
              slug
              nickname
              firstName
            }
          }
        }
      }
    }
  }
`;
