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

class Homepage extends Component {
  render() {
    const data = this.props.data;
    console.log(data);

    return (
      <div style={{ margin: "0 auto" }}>
        <Header></Header>
        <Main>
          <HommeBanner></HommeBanner>
          <FinanceSection posts={data.allWpPost.edges}></FinanceSection>
          <FinanceSection posts={data.allWpPost.edges}></FinanceSection>
          <FinanceSection posts={data.allWpPost.edges}></FinanceSection>
        </Main>
      </div>
    );
  }
}

export default Homepage;

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
