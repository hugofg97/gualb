import React, { Component, useRef, useEffect } from "react";
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
import {
  InfoChallenge,
  ImgBox,
  InfoWeb,
  TechBox,
  ChallengeBox,
} from "../styled/Challenge.styled";
import SlideUpAnim from "../Animation/SlideUp.anim";

const ChallengeSection = () => {
  const SlideUpAnimRef = useRef([]);
  SlideUpAnimRef.current = [];
  useEffect(() => {
    SlideUpAnim(SlideUpAnimRef);
  }, []);
  const addSlideUpAnim = (el) => {
    if (el && !SlideUpAnimRef.current.includes(el)) {
      SlideUpAnimRef.current.push(el);
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "radial-gradient(circle at 47% 59%, #093366, #051933 104%)",

        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        paddingTop: 48,
        paddingBottom: 48,
      }}
    >
      <Container>
        <SubTitle style={{ textAlign: "center" }}>
          <FeaturedWord color="white">
            {"Desafios baseados em aplicações reais".toUpperCase()}
          </FeaturedWord>
        </SubTitle>

        <StaticImage width={600} src="../../assets/images/desafio.png" />

        <InfoChallenge>
          <ChallengeBox ref={addSlideUpAnim}>
            <h3 style={{ color: "#04d361" }}>Projetos iniciais</h3>
            <ul style={{ color: "white" }}>
              <li>Calculadora</li>
              <li>Jogo de perguntas</li>
              <li>Agenda telefonica</li>
              <li>Galeria de fotos</li>
              <li>Carteira de finanças</li>
              <li>Conversor de moedas</li>
              <li>Envio de emails</li>
            </ul>
          </ChallengeBox>
          <ChallengeBox ref={addSlideUpAnim}>
            <h3 style={{ color: "#04d361" }}>Projetos Intermediários</h3>
            <ul style={{ color: "white" }}>
              <li>Sistema de estoque (CRUD)</li>
              <li>Sistema de Relatórios</li>
              <li>Sistema de caixa (PDV)</li>
              <li>Galeria de fotos (Avançado)</li>
              <li>Sistema de Login (Autenticação)</li>
              <li>Landing Page</li>
            </ul>
          </ChallengeBox>
          <ChallengeBox ref={addSlideUpAnim}>
            <h3 style={{ color: "#04d361" }}>Projetos finais</h3>
            <ul style={{ color: "white" }}>
              <li>Réplica do Facebook</li>
              <li>Réplica da Netflix</li>
              <li>Réplica da OLX</li>
              <li>Réplica do Ifood</li>
            </ul>
          </ChallengeBox>
        </InfoChallenge>
      </Container>
    </div>
  );
};

export default ChallengeSection;
