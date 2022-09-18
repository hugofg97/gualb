import React, { Component } from "react";
import { graphql } from "gatsby";
import Header from "../templates/Header";
import HommeBanner from "../components/home/HomeBanner.section";
import WebSection from "../components/home/Web.section";
import MobileSection from "../components/home/Mobile.section";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledDiv = styled.div`
  width: 100%;
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
      nest:
        "Aprenda a criar sistemas WEB utilizando Nest.js, Framework back-end para node, que utiliza typescript",
      node:
        "Saiba como utilizar node.js como servidor e suas melhores práticas, etc etc",
      dart:
        "Aprenda dart para criar suas aplicações mobile, utilizando do framework Flutter criado pelo google",
      flutter:
        "Aprenda flutter, o framework mais querido do desenvolvimento mobile, adotado por empresas gigantes, criado pelo google",
      graphql:
        "Aprenda graphql, para tratar suas consultas feitas em seu banco de dados através de um backend",
      aws:
        "Por fim ensinaremos a hospedar sua aplicação em um dos melhores web services do mundo, AWS",
    };
    const filterExcerptImages = (imgName) => {
      if (imgName.includes("react")) return excerptsImg.react;
      if (imgName.includes("html")) return excerptsImg.html;
      if (imgName.includes("css")) return excerptsImg.css;
      if (imgName.includes("gatsby")) return excerptsImg.gatsby;
      if (imgName.includes("vue")) return excerptsImg.vue;
      if (imgName.includes("next")) return excerptsImg.next;
      if (imgName.includes("node")) return excerptsImg.node;
      if (imgName.includes("nest")) return excerptsImg.nest;
      if (imgName.includes("dart")) return excerptsImg.dart;
      if (imgName.includes("flutter")) return excerptsImg.flutter;
      if (imgName.includes("graphql")) return excerptsImg.graphql;
      if (imgName.includes("aws")) return excerptsImg.aws;
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
          <StyledDiv id="syled-div">
            <HommeBanner></HommeBanner>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="200 60 1240 150">
              <path
                fill="#28203f"
                fill-opacity="1"
                d="M0,32L48,37.3C96,43,192,53,288,90.7C384,128,480,192,576,192C672,192,768,128,864,122.7C960,117,1056,171,1152,181.3C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
          </StyledDiv>

          <WebSection
            posts={data.allWpPost.edges}
            images={imagesFront}
          ></WebSection>
          <StyledDiv id="syled-div">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 60 1440 130">
              <path
                fill="#28203f"
                fill-opacity="1"
                d="M0,192L60,160C120,128,240,64,360,69.3C480,75,600,149,720,154.7C840,160,960,96,1080,80C1200,64,1320,96,1380,112L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
            </svg>
            <MobileSection
              posts={data.allWpPost.edges}
              images={imagesFront}
            ></MobileSection>
          </StyledDiv>
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
              "nest.png"
              "aws.png"
              "node.png"
              "graphql.png"
              "dart.png"
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
