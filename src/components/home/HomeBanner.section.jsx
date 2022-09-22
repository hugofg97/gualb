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
        Desenvolvimento de software <FeaturedSubWord>web</FeaturedSubWord> e{" "}
        <FeaturedSubWord>Mobile</FeaturedSubWord> do zero ao profissional
      </TitleH1>

      <ImageBox>
        <StaticImage src="../../assets/images/banner-1.png"></StaticImage>
      </ImageBox>

      <TecnologyCategoryGrid>
        <TecnologyCategoryBlock>
          <IconBox>
            <StaticImage src="../../assets/images/web-icon.png"></StaticImage>
            <Info>Front-end</Info>
          </IconBox>
          <ContentInfo>
            Crie aplicações WEB optmizadas para SEO como blogs e ecommerces,
            sistemas para gestão entre outros com React.js, Next.js e Gatsby
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
            Desenvolva aplicações mobile com Flutter, framework preferido para
            desenvolvimento mobile, criado pelo Google
          </ContentInfo>
        </TecnologyCategoryBlock>
        <TecnologyCategoryBlock>
          <IconBox>
            <StaticImage src="../../assets/images/back-icon.png"></StaticImage>
            <Info>backend</Info>
          </IconBox>
          <ContentInfo>
            Desenvolva aplicações back-end com Node.js, Express, Nest.js e
            Graphql bem arquiteturadas de código limpo
          </ContentInfo>
        </TecnologyCategoryBlock>
        <TecnologyCategoryBlock>
          <IconBox>
            <StaticImage src="../../assets/images/infra-icon.png"></StaticImage>
            <Info>Infraestrutura</Info>
          </IconBox>
          <ContentInfo>
            Aprenda a hospedar suas aplicações na Aws Aws, Ec2, Amplify e
            gerenciar bancos de dados Postgres, MySql e Mongo DB
          </ContentInfo>
        </TecnologyCategoryBlock>
      </TecnologyCategoryGrid>

      <ButtonSubscriber> Eu quero!</ButtonSubscriber>
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
