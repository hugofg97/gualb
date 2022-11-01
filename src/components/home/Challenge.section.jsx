import React from "react";

import "../../global.css";
import { StaticImage } from "gatsby-plugin-image";
import {
  Container,
  FeaturedWord,
  SubTitle,
} from "../globals/Blocks";
import {
  InfoChallenge,
  ChallengeBox,
} from "../styled/Challenge.styled";

const ChallengeSection = () => {


  return (
    <div
      style={{
        backgroundImage:
          "radial-gradient(circle at 47% 59%, #292558, #15132e 104%)",

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
            {"DESENVOLVIMENTO DE SOFTWARE PARA TODAS AS PLATAFORMAS".toUpperCase()}
          </FeaturedWord>
        </SubTitle>

        <StaticImage width={600} src="../../assets/images/desafio.png" />

        <InfoChallenge>
          <ChallengeBox>
            <p style={{ color: "#04d361" }}>Aplicações multi-plataformas</p>
            <p style={{ color: "white" }}>
              Seu negócio rodando em todas as plataformas, web, desktop e
              mobile. Com tecnologias atuais, seu projeto feito com a melhor
              qualidade do mercado
            </p>
          </ChallengeBox>
          <ChallengeBox>
            <p style={{ color: "#04d361" }}>Inovação digital</p>
            <p style={{ color: "white" }}>
              Analisamos e inovamos seu negócio para que esteja sempre a frente
              no mercado, analisando a concorrência e implementando novas
              soluções para que seu negócio dispare
            </p>
          </ChallengeBox>
          <ChallengeBox>
            <p style={{ color: "#04d361" }}>SEO e MARKETING</p>
            <p style={{ color: "white" }}>
              Gerenciamos seu tráfego, e ranqueamento nos motores de busca, para
              que alcance o público desejado
            </p>
          </ChallengeBox>
          <ChallengeBox>
            <p style={{ color: "#04d361" }}>Ecommerces</p>
            <p style={{ color: "white" }}>
              Sua loja online totalmente optmizada para os motores de busca, com
              sistema de gestão fluido e intuitivo para todas as plataformas
            </p>
          </ChallengeBox>
          <ChallengeBox>
            <p style={{ color: "#04d361" }}>Gatways de pagamentos</p>
            <p style={{ color: "white" }}>
              Integre o mesmo metodo de pagamentos em todas as suas aplicações e
              gerência tudo atrvés de apenas um software
            </p>
          </ChallengeBox>
          <ChallengeBox>
            <p style={{ color: "#04d361" }}>Micro serviços e Infraestrutura</p>
            <p style={{ color: "white" }}>
              Arquiteturamos todas infraestrutura e microserviços para seus
              projetos, de forma que a segurança e performace fique em primeiro
              lugar
            </p>
          </ChallengeBox>
        </InfoChallenge>
      </Container>
    </div>
  );
};

export default ChallengeSection;
