import React, { Component } from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import "../../global.css";

const Container = styled.div`
  background: #131328;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 180px;
  overflow: hidden;
  justify-content: center;
  z-index: 10;
`;
const ImageBox = styled.div`
  border-radius: 150px;
  width: 600px;
  height: 100%;
`;
const PresentationBox = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  border-radius: 5px;
  width: 600px;
  height: 100%;
`;
const TitleH1 = styled.h1`
  color: white;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 48px;
`;
const ParagraphPosH1 = styled.p`
  color: white;

  font-weight: bold;
  font-size: 25px;
`;
const FeaturedWord = styled.b`
  color: #04d361;
  // color: white;
`;
const FeaturedSubWord = styled.b`
  color: #04d361;
`;
const ButtonSubscriber = styled.button`
  border-radius: 5px;
  color: white;
  margin-top: 10px;
  margin-bottom: 15px;
  font-weight: bold;
  background-color: #8257e5;
  cursor: pointer;
  border: none;
  font-size: 20px;
  padding: 10px;
  z-index: 10;
`;

class HomeBanner extends Component {
  render() {
    return (
      <Container>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PresentationBox>
            <TitleH1>
              Desenvolvimento de software <FeaturedSubWord>web</FeaturedSubWord>
              , e <FeaturedSubWord>Mobile</FeaturedSubWord>
            </TitleH1>
            <ParagraphPosH1></ParagraphPosH1>
            <ParagraphPosH1>
              Seja bem-vindo a <FeaturedWord> GUALB</FeaturedWord>. Aqui você
              encontra o treinamento completo para criação de softwares que
              atendem todas as demandas.
            </ParagraphPosH1>
            <ParagraphPosH1>
              Temos cursos de desenvolvimento web, desktop e mobile gratuitos
              para você começar
            </ParagraphPosH1>
            <ButtonSubscriber> Eu quero!</ButtonSubscriber>
          </PresentationBox>
          <ImageBox>
            <StaticImage
              height={400}
              src="../../assets/images/banner-1.png"
            ></StaticImage>
          </ImageBox>
        </div>
      </Container>
    );
  }
}
export default HomeBanner;
