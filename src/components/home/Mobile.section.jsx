import React, { Component } from "react";
import styled from "styled-components";
import PostSquare from "../globals/post/PostSquare.block";
import "../../global.css";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import {
  Container,
  FeaturedWord,
  GridParagraph,
  Paragraph,
  StyledDiv,
  SubTitle,
} from "../globals/Blocks";

class AdventureSection extends Component {
  render() {
    const blocks = this.props.images;
    return (
      <div
        style={{
          backgroundColor: "#131328",
          // marginTop: "10px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // marginTop: -3,
          paddingTop: 0,
        }}
      >
        <Container>
          <SubTitle>
            <FeaturedWord color="white">
              {"Desafios baseados em aplicações reais".toUpperCase()}
            </FeaturedWord>
          </SubTitle>

          <StaticImage width={600} src="../../assets/images/desafio.png" />
          <Paragraph style={{ textAlign: "center", color: "white" }}>
            Durante o curso iremos desenvolver um marketplace do zero <br />
          </Paragraph>
          <GridParagraph>
            <div style={{ width: "13%" }}>
              <StaticImage
                width={200}
                src="../../assets/images/astro-back.png"
              />
            </div>
            <div style={{ width: "20%" }}>
              <SubTitle
                style={{ textAlign: "start", fontSize: "25px", color: "white" }}
              >
                <FeaturedWord color="white">Backend</FeaturedWord>:
              </SubTitle>
              <Paragraph style={{ textAlign: "start", fontSize: "20px" }}>
                Iremos desenvolver o back-end da aplicação em Nest.js e Graphql,
                utilizando o banco de dados Postgres
              </Paragraph>
            </div>
            <div style={{ width: "15%" }}>
              <StaticImage width={200} src="../../assets/images/banner-3.png" />
            </div>
            <div style={{ width: "20%" }}>
              <SubTitle style={{ textAlign: "start", fontSize: "25px" }}>
                <FeaturedWord>Mobile</FeaturedWord>:
              </SubTitle>
              <Paragraph style={{ textAlign: "start", fontSize: "20px" }}>
                Você irá desenvolver a versão mobile utilizando Flutter e
                Graphql, integrando com o back-end construido
              </Paragraph>
            </div>
            <div style={{ width: "15%" }}>
              <StaticImage
                width={200}
                src="../../assets/images/astro-front.png"
              />
            </div>
            <div style={{ width: "20%" }}>
              <SubTitle style={{ textAlign: "start", fontSize: "25px" }}>
                <FeaturedWord>Front-End</FeaturedWord>:
              </SubTitle>
              <Paragraph style={{ textAlign: "start", fontSize: "20px" }}>
                Iremos desenvolver a versão WEB em Next.js e integraremos com
                nosso backend utilizando Graphql
              </Paragraph>
            </div>
          </GridParagraph>
        </Container>
      </div>
    );
  }
}
export default AdventureSection;
