import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Header from "../templates/Header";
import HommeBanner from "../components/home/HomeBanner.section";
import FinanceSection from "../components/home/Web.section";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledDiv = styled.div`
  background: #28203f;
  width: 100%;
  z-index: -1;
  margin-top: -68px;
  transform: rotate(-3deg);
  border: 100px solid #28203f;
`;

class Homepage extends Component {
  render() {
    const data = this.props.data;
    console.log(data);

    return (
      <div style={{ margin: "0 auto" }}>
        <Header></Header>
        <Main>
          <HommeBanner></HommeBanner>
          <StyledDiv></StyledDiv>
          <FinanceSection posts={data.allWpPost.edges}></FinanceSection>
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
