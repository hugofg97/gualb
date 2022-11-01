import React, { Component } from "react";
import { graphql } from "gatsby";
// import styled from "styled-components";
// import { excerptsImg } from "../shared/mocks";
import { filterExcerptImages } from "../shared/helpers";

import Header from "../templates/Header";
import HommeBanner from "../components/home/HomeBanner.section";
// import FullStack from "../components/home/FullStack.section";
// import ChallengeSection from "../components/home/Challenge.section";
// import TechnologySection from "../components/home/Technology.section";
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
        ...filterExcerptImages(node.fluid.originalName, node),
      };
    });
    return (
      <div style={{ margin: "0 auto" }}>
        <Header></Header>

        <Main>
          <StyledDiv>
            <HommeBanner images={imagesFront}></HommeBanner>
            <div className="skewk">.</div>
          </StyledDiv>

          {/* <FullStack
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
          <TechnologySection techs={imagesFront}></TechnologySection> */}
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
              "moldura.webp"
              "mobile-icon.png"
              "web-icon.png"
              "infra-icon.png"
              "back-icon.png"
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
            blurredOptions: { toFormat: WEBP }
            formats: WEBP
            layout: FULL_WIDTH
            quality: 3
            backgroundColor: "transparent"
            placeholder: NONE
            sizes: "(max-width: 512px , min-width:5px) 40px, 512px, 100vw"
            webpOptions: { quality: 3 }
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
