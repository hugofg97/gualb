import React, { Component } from "react";
import { graphql } from "gatsby";
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
    const { allImageSharp } = data;
    const excerptsImg = {
      html:
        "Aprenda a organizar o conteúdo do seu sistema web com o HTML. Você aprenderá a criar Sections, Formulários, tocar Vídeos e mais.",
      react:
        "Domine a criação de aplicativos web com o React e Redux. Desde aplicações simples às mais complexas com usos de Rotas protegidas e muito mais",
      css:
        "Aprenda a dar estilo e design ao seu projeto com o mais atual do CSS. Você aprenderá Flexbox, Grid, animações e muito mais.",
      gatsby:
        "Aprenda a criar páginas estáticas optmizadas para SEO, com performace para rankeamento no google incluindo designs incriveis",
      vue:
        "Aprenda a criar sistemas WEB utilizando Vuejs, focando em arquiteturas profissionais",
      next:
        "Aprenda a criar sistemas WEB utilizando Nextjs, focando em arquiteturas profissionais",
    };
    const filterExcerptImages = (imgName) => {
      console.log("<>><<<<<<<");
      console.log(imgName);

      if (imgName.includes("react")) return excerptsImg.react;
      if (imgName.includes("html")) return excerptsImg.html;
      if (imgName.includes("css")) return excerptsImg.css;
      if (imgName.includes("gatsby")) return excerptsImg.gatsby;
      if (imgName.includes("vue")) return excerptsImg.vue;
      if (imgName.includes("next")) return excerptsImg.next;
      return "nada";
    };
    const imagesFront = allImageSharp.edges.map((image) => {
      const { node } = image;
      console.log(filterExcerptImages(node.fluid.originalName));
      return {
        ...node,
        excerpt: filterExcerptImages(node.fluid.originalName),
      };
    });

    return (
      <div style={{ margin: "0 auto" }}>
        <Header></Header>
        <Main>
          <HommeBanner></HommeBanner>
          <StyledDiv></StyledDiv>
          <FinanceSection
            posts={data.allWpPost.edges}
            images={imagesFront}
          ></FinanceSection>
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
              "vuejs.png"
              "html.png"
              "css.png"
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
