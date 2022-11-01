import React from "react";
import { withBreakpoints } from "gatsby-plugin-breakpoints";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  ButtonSubscriber,
  Container,
  FeaturedSubWord,
  Info,
  TecnologyCategoryGrid,
  TecnologyCategoryBlock,
  ImageBox,
  IconBox,
  ContentInfo,
  TitleH1,
} from "../styled/HommeBanner.styled";
import "../../global.css";

const HomeBanner = ({ images }) => {
  const { back } = images[0];
  const { infra } = images[1];
  const { mobile } = images[2];
  const { web } = images[3];
  const { moldura } = images[4];

  return (
    <Container>
      <TitleH1 className="title">
        Hugo Gualberto, Desenvolvedor de software{" "}
        <FeaturedSubWord>web</FeaturedSubWord> e{" "}
        <FeaturedSubWord>Mobile</FeaturedSubWord> profissional
      </TitleH1>

      <ImageBox>
        <GatsbyImage loading="eager" image={{ ...moldura }}></GatsbyImage>
        {/* <GatsbyImage image={{ ...moldura }}></GatsbyImage> */}
      </ImageBox>

      <TecnologyCategoryGrid>
        <TecnologyCategoryBlock>
          <IconBox>
            <div style={{ width: "40px" }}>
              <GatsbyImage
                style={{
                  opacity: "none",
                }}
                aria-placeholder="none"
                loading="eager"
                image={{ ...web }}
              ></GatsbyImage>
            </div>
            <Info>Front-end</Info>
          </IconBox>
          <ContentInfo>
            Especialista em aplicações WEB optmizadas para SEO como blogs e
            ecommerces, sistemas para gestão ERP
          </ContentInfo>
        </TecnologyCategoryBlock>
        <TecnologyCategoryBlock>
          <IconBox>
            <div style={{ width: "40px" }}>
              <GatsbyImage
                style={{
                  opacity: "none",
                }}
                aria-placeholder="none"
                loading="eager"
                image={{ ...mobile }}
              ></GatsbyImage>
            </div>
            <Info>Mobile</Info>
          </IconBox>
          <ContentInfo>
            Desenvolvimento mobile integrados com plataformas WEB, seu produto
            em todas as telas
          </ContentInfo>
        </TecnologyCategoryBlock>
        <TecnologyCategoryBlock>
          <IconBox>
            <div style={{ width: "40px" }}>
              <GatsbyImage
                style={{
                  opacity: "none",
                }}
                aria-placeholder="none"
                loading="eager"
                image={{ ...back }}
              ></GatsbyImage>
            </div>
            <Info>backend</Info>
          </IconBox>
          <ContentInfo>
            Especialista em aplicações back-end baseado em micro serviços e mult
            tenancy, serviços inteligentes para varias aplicações
          </ContentInfo>
        </TecnologyCategoryBlock>
        <TecnologyCategoryBlock>
          <IconBox>
            <div style={{ width: "40px" }}>
              <GatsbyImage
                style={{
                  opacity: "none",
                }}
                aria-placeholder="none"
                loading="eager"
                image={{ ...infra }}
              ></GatsbyImage>
            </div>
            <Info>Infraestrutura</Info>
          </IconBox>
          <ContentInfo>
            Gerencia de aplicações na Aws com Ec2, Amplify e bancos de dados
            Postgres, MySql e Mongo DB
          </ContentInfo>
        </TecnologyCategoryBlock>
      </TecnologyCategoryGrid>

      <ButtonSubscriber>Contate-me</ButtonSubscriber>
    </Container>
  );
};

export default withBreakpoints(HomeBanner);

{
  /* <ImageBox>
        <GatsbyImage
          height={400}
          src="../../assets/images/banner-1.png"
        ></GatsbyImage>
      </ImageBox> */
}
{
  /* <div style={{ width: "50%" }}>
            <ButtonSubscriber> Eu quero!</ButtonSubscriber>
          </div> */
}
{
  /* {breakpoints.xs ? (
            <div style={{ width: "50%" }}>
              <GatsbyImage
                height={600}
                width={400}
                src="../../assets/images/banner-1.png"
              ></GatsbyImage>
            </div>
          ) : null} */
}
