import React, { Component } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { excerptsImg } from "../shared/mocks";
import { filterExcerptImages } from "../shared/helpers";

import Header from "../templates/Header";
import bgbg from "../assets/images/space-bg.jpg";
import HommeBanner from "../components/home/HomeBanner.section";
import FullStack from "../components/home/FullStack.section";
import AdventureSection from "../components/home/Mobile.section";
import { Main, StyledDiv } from "../components/globals/Blocks";
import { BreakpointProvider } from "gatsby-plugin-breakpoints";

import "../global.css";
import "../components/home/skew.css";

class Homepage extends Component {
  render() {
    const data = this.props.data;
    const { allImageSharp } = data;

    const imagesFront = allImageSharp.edges.map((image) => {
      const { node } = image;

      return {
        ...node,
        excerpt: filterExcerptImages(node.fluid.originalName, excerptsImg),
      };
    });

    return (
      <div style={{ margin: "0 auto" }}>
        <Header></Header>

        <Main>
          <StyledDiv>
            <HommeBanner></HommeBanner>
            <div className="skewk">.</div>
          </StyledDiv>

          <FullStack
            posts={data.allWpPost.edges}
            images={imagesFront}
          ></FullStack>
          <div className="skewk2">.</div>
          {/* <AdventureSection></AdventureSection> */}
        </Main>
      </div>
    );
  }
}

export default Homepage;
export const Head = () => (
  <>
    <title>Desenvolvimento de Software | Gualb</title>
    <meta
      name="description"
      content="Curso de desenvolvimento de software, se torne um desenvolvedor de software e aprenda a criar aplicações web, desktop e mobile"
    />
  </>
);
export const pageQuery = graphql`
  query {
    allImageSharp(
      filter: {
        fluid: {
          originalName: {
            in: [
              "next.png"
              "reactjs.png"
              "gatsby.png"
              "html.png"
              "css.png"
              "nest.png"
              "aws.png"
              "graphql.png"
              "flutter.png"
            ]
          }
        }
      }
    ) {
      edges {
        node {
          fluid {
            originalName
          }
          gatsbyImageData(width: 100, height: 100, formats: WEBP)
        }
      }
    }

    allWpPage {
      edges {
        node {
          id
          title
          slug
        }
      }
    }

    allWpPost(
      limit: 4
      filter: {
        categories: { nodes: { elemMatch: { slug: { eq: "financas" } } } }
      }
    ) {
      edges {
        node {
          id
          title
          excerpt
          content
          featuredImage {
            node {
              altText
              link
              slug
              sourceUrl
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    quality: 65
                    width: 400
                    height: 250
                    formats: JPG
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`;
