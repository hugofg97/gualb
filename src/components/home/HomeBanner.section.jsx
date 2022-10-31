import React from "react";
import { useBreakpoint, withBreakpoints } from "gatsby-plugin-breakpoints";
import { StaticImage } from "gatsby-plugin-image";
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

const HomeBanner = () => {
  const breakpoints = useBreakpoint();
  return (
    <Container>
      <TitleH1 className="title">
        Hugo Gualberto, Desenvolvedor de software{" "}
        <FeaturedSubWord>web</FeaturedSubWord> e{" "}
        <FeaturedSubWord>Mobile</FeaturedSubWord> profissional
      </TitleH1>

      <ImageBox>
        <StaticImage src="../../assets/images/moldura.webp"></StaticImage>
      </ImageBox>

      <TecnologyCategoryGrid>
        <TecnologyCategoryBlock>
          <IconBox>
            <StaticImage src="../../assets/images/web-icon.png"></StaticImage>
            <Info>Front-end</Info>
          </IconBox>
          <ContentInfo>
            Especialista em aplicações WEB optmizadas para SEO como blogs e
            ecommerces, sistemas para gestão ERP
          </ContentInfo>
        </TecnologyCategoryBlock>
        <TecnologyCategoryBlock>
          <IconBox>
            <StaticImage
              width="50"
              height="50"
              src="../../assets/images/mobile-icon.png"
            ></StaticImage>
            <Info>Mobile</Info>
          </IconBox>
          <ContentInfo>
            Desenvolvimento mobile integrados com plataformas WEB, seu produto
            em todas as telas
          </ContentInfo>
        </TecnologyCategoryBlock>
        <TecnologyCategoryBlock>
          <IconBox>
            <StaticImage src="../../assets/images/back-icon.png"></StaticImage>
            <Info>backend</Info>
          </IconBox>
          <ContentInfo>
            Especialista em aplicações back-end baseado em micro serviços e mult
            tenancy, serviços inteligentes para varias aplicações
          </ContentInfo>
        </TecnologyCategoryBlock>
        <TecnologyCategoryBlock>
          <IconBox>
            <StaticImage src="../../assets/images/infra-icon.png"></StaticImage>
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
        <StaticImage
          height={400}
          src="../../assets/images/banner-1.png"
        ></StaticImage>
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
              <StaticImage
                height={600}
                width={400}
                src="../../assets/images/banner-1.png"
              ></StaticImage>
            </div>
          ) : null} */
}
