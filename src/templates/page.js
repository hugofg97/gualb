import React, { Component } from "react";
import { graphql } from "gatsby";
import Header from "./Header";
import { Main } from "../components/globals/Blocks";
import Image from "../assets/images/backblog.webp";
import styled from "styled-components";
import GatsbyImage from "gatsby-image";
import { useBreakpoint, withBreakpoints } from "gatsby-plugin-breakpoints";

const ArticleH1 = styled.h1``;
const Article = styled.article`
  & img {
    border-radius: 16px;
  }
  @media (max-width: 400px) {
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

const ContinerPage = styled.div`
  margin: 0 auto;
  background-color: rgba(41, 37, 88, 0.4);
`;

const Page = (props) => {
  const breakpoints = useBreakpoint();
  const posts = props.data.allWpPost.edges;
  return (
    <ContinerPage style={{}}>
      <>{breakpoints.md ? <></> : <Header></Header>}</>

      <Main
        style={{
          display: "flex",
          backgroundAttachment: "fixed",
          backgroundImage: `url(${Image})`,

          backgroundSize: "100vw 100%",
          // height: "100vh",
        }}
      >
        <div>
          <h1
            style={{
              color: "white",
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
                  fadeIn="false"
                  critical={true}
                  fluid={
                    el.node.featuredImage.node.localFile.childImageSharp.fluid
                  }
                  style={{ bordeRadius: "8px" }}
                ></GatsbyImage>
                <h1 style={{ color: "white" }}>{el.node.title}</h1>
                <p style={{ color: "white" }}>
                  {el.node.excerpt.replace("<p>", "").replace("</p>", "")}
                </p>
                <span style={{ color: "white" }}>
                  {el.node.author.node.firstName}
                </span>
                <span style={{ color: "white" }}>{el.node.commentCount}</span>
              </Article>
            </ContainerArticle>
          ))}
        </ArticlesBlog>
        <ArticlesBlog>
          {posts.map((el) => (
            <ContainerArticle>
              <Article>
                <GatsbyImage
                  fadeIn="false"
                  fluid={
                    el.node.featuredImage.node.localFile.childImageSharp.fluid
                  }
                  style={{ bordeRadius: "8px" }}
                ></GatsbyImage>
                <h1 style={{ color: "white" }}>{el.node.title}</h1>
                <p style={{ color: "white" }}>
                  {el.node.excerpt.replace("<p>", "").replace("</p>", "")}
                </p>
                <span style={{ color: "white" }}>
                  {el.node.author.node.firstName}
                </span>
                <span style={{ color: "white" }}>{el.node.commentCount}</span>
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
                  fluid={
                    el.node.featuredImage.node.localFile.childImageSharp.fluid
                  }
                ></GatsbyImage>
                <h1 style={{ color: "white" }}>{el.node.title}</h1>
                <p style={{ color: "white" }}>
                  {el.node.excerpt.replace("<p>", "").replace("</p>", "")}
                </p>
                <span style={{ color: "white" }}>
                  {el.node.author.node.firstName}
                </span>
                <span style={{ color: "white" }}>{el.node.commentCount}</span>
              </Article>
            </ContainerArticle>
          ))}
        </ArticlesBlog>
      </Main>
    </ContinerPage>
  );
};

export default withBreakpoints(Page);
export const Head = () => (
  <>
    <title>Tecnologia e Programação | Gualb</title>
    <meta
      name="description"
      content="Curso de desenvolvimento de software, se torne um desenvolvedor de software e aprenda a criar aplicações web, desktop e mobile"
    />
  </>
);
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
              localFile {
                childImageSharp {
                  fluid(quality: 50, maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
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
