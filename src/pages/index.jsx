import React, { Component } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { excerptsImg } from "../shared/mocks";
import { filterExcerptImages } from "../shared/helpers";

import Header from "../templates/Header";
import HommeBanner from "../components/home/HomeBanner.section";
import FullStack from "../components/home/FullStack.section";
import ChallengeSection from "../components/home/Challenge.section";
import TechnologySection from "../components/home/Technology.section";
import { Main, StyledDiv, SubTitle } from "../components/globals/Blocks";

import "../global.css";
import "../components/home/skew.css";

class Homepage extends Component {
  render() {
    const data = this.props.data;
    const { allImageSharp } = data;

    const imagesFront = allImageSharp.edges.map((image) => {
      const { node } = image;

      return {
        ...filterExcerptImages(node.fluid.originalName, excerptsImg, node),
      };
    });
    console.log(imagesFront);
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
          <ChallengeSection></ChallengeSection>
          <div
            style={{
              marginTop: "-60px",
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "10px",
              height: "100px",

              // position: "static",
              zIndex: 1,
            }}
          >
            <SubTitle style={{ margin: "auto", textAlign: "center" }}>
              Conteudo sobre Desenvolvimento de Software e Tecnologia
            </SubTitle>
          </div>
          <TechnologySection techs={imagesFront}></TechnologySection>
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
              "dart.png"
              "node.png"
              "html.png"
              "css.png"
              "nest.png"
              "aws.png"
              "graphql.png"
              "flutter.png"
              "graphql.png"
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
          gatsbyImageData(
            height: 300
            breakpoints: [750, 1080, 1366, 1920]
            layout: FULL_WIDTH
            formats: WEBP
          )
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
