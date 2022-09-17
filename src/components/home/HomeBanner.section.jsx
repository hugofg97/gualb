import React, { Component } from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import "../../global.css";

const Container = styled.div`
  background: linear-gradient(225deg, #5250ff 0%, #1c0b2b 70%);
  width: 100%;
  display: flex;
  padding: 5px;
  padding-top: 100px;
  justify-content: center;
  // height: 400px;
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
  font-weight: bold;
  font-size: 48px;
`;
const ParagraphPosH1 = styled.p`
  color: white;
  font-weight: bold;
  font-size: 20px;
`;
const FeaturedWord = styled.b`
  color: #6f95ff;
`;
const FeaturedSubWord = styled.b`
  color: #4b4870;
`;
const ButtonSubscriber = styled.button`
  border-radius: 5px;
  color: white;
  background-color: #6f95ff;
  cursor: pointer;
  border: none;
  font-size: 20px;
  padding: 10px;
`;

class HomeBanner extends Component {
  render() {
    return (
      <Container>
        <PresentationBox>
          <TitleH1>
            <FeaturedWord>Desenvolvimento de software</FeaturedWord> web,
            desktop e mobile
          </TitleH1>
          <ParagraphPosH1></ParagraphPosH1>
          <ParagraphPosH1>
            Seja bem-vindo a <FeaturedWord> Gualb</FeaturedWord>. Aqui você
            encontra o treinamento completo para criação de softwares que
            atendem todas as demandas.
          </ParagraphPosH1>
          <ParagraphPosH1>
            Temos cursos de desenvolvimento web, desktop e mobile gratuitos para
            você começar
          </ParagraphPosH1>
          <ButtonSubscriber> Inscreva-se</ButtonSubscriber>
        </PresentationBox>
        <ImageBox>
          <StaticImage
            height={400}
            src="../../assets/images/banner-1.png"
          ></StaticImage>
        </ImageBox>
      </Container>
    );
  }
}
export default HomeBanner;
