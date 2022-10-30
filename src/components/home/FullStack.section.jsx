import React, { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { StaticImage } from "gatsby-plugin-image";
import { useBreakpoint, withBreakpoints } from "gatsby-plugin-breakpoints";

import PostSquare from "../globals/post/PostSquare.block";
import {
  Container,
  BlockLearning,
  GridBlocks,
  GridParagraph,
  Paragraph,
  PresentationBox,
  SubTitle,
  FeaturedWord,
} from "../globals/Blocks";

import "../../global.css";
import SlideUpAnim from "../Animation/SlideUp.anim";
import SlideLeftAnim from "../Animation/SlideLeft.anim";
import SlideRightAnim from "../Animation/SlideRight.anim";
import SlideDownAnim from "../Animation/SlideDown.anim";

gsap.registerPlugin(ScrollTrigger);

const FullStackSection = (props) => {
  const brakpoints = useBreakpoint();

  const slideUpAnimRef = useRef([]);
  const slideRightAnimRef = useRef([]);
  const slideLeftAnimRef = useRef([]);
  const slideDownAnimRef = useRef([]);

  slideUpAnimRef.current = [];
  slideRightAnimRef.current = [];
  slideLeftAnimRef.current = [];
  slideDownAnimRef.current = [];

  useEffect(() => {
    SlideUpAnim(slideUpAnimRef);
    SlideLeftAnim(slideLeftAnimRef);
    SlideRightAnim(slideRightAnimRef);
    SlideDownAnim(slideDownAnimRef);
  }, []);

  const addSlideUpAnim = (el) => {
    if (el && !slideUpAnimRef.current.includes(el)) {
      slideUpAnimRef.current.push(el);
    }
  };
  const addSlideDownAnim = (el) => {
    if (el && !slideDownAnimRef.current.includes(el)) {
      slideDownAnimRef.current.push(el);
    }
  };
  const addSlideRightAnim = (el) => {
    if (el && !slideRightAnimRef.current.includes(el)) {
      slideRightAnimRef.current.push(el);
    }
  };
  const addSlideLeftAnim = (el) => {
    if (el && !slideLeftAnimRef.current.includes(el)) {
      slideLeftAnimRef.current.push(el);
    }
  };
  const blocks = props.images;
  return (
    <Container>
      <PresentationBox>
        <GridParagraph ref={addSlideLeftAnim}>
          <Paragraph>
            <SubTitle>Um pouco sobre mim...</SubTitle>
            <div
              style={{
                overflow: "hidden",
                display: "flex",
                justifyContent: "start",
                gap: "24px",
                // width: "700px",
              }}
              ref={addSlideRightAnim}
            >
              <StaticImage
                width="660"
                height="360"
                src="../../assets/images/banner-2.png"
              />
              <div>
                <p>
                  <FeaturedWord>7 Anos de experiência com:</FeaturedWord>
                </p>
                <p>
                  <FeaturedWord>Programação Web</FeaturedWord>
                </p>
                <p>
                  <FeaturedWord>
                    Programação Mobile Cross-Plataform
                  </FeaturedWord>
                </p>
                <p>
                  <FeaturedWord>Programação Web</FeaturedWord>
                </p>
                <p>
                  <FeaturedWord>SEO (SEARCH ENGINE OPTMIZATION)</FeaturedWord>
                </p>
                <p>
                  <FeaturedWord>MARKETING</FeaturedWord>
                </p>
                <p>
                  <FeaturedWord>MARKETING</FeaturedWord>
                </p>
              </div>
            </div>
            <br></br>
            <br />
            Comecei minha carreira como freelancer em 2015, criando ecommerces e
            blogs optmizados para SEO e ranqueamento nos motores de busca.{" "}
            <br /> <br />
            Em 2019 prestei serviço para o{" "}
            <FeaturedWord>
              IBFC "Instituto Brasileiro de Capacitação e Formação"
            </FeaturedWord>{" "}
            em sistemas internos como desenvolvedor Full-Stack. <br />
            <br />
            Em 2020 prestei serviço para{" "}
            <FeaturedWord>Infracommerce</FeaturedWord>, atuando na construção da
            <FeaturedWord>Finago</FeaturedWord>, uma Fintech "Carteira digital"
            para ecommerces e seu sistema interno{" "}
            <FeaturedWord>InfraCash</FeaturedWord> como desenvolvedor
            Full-Stack. <br /> <br />
            Tambem prestei Serviços para{" "}
            <FeaturedWord>Outmart Digital</FeaturedWord>, alocado na empresa
            <FeaturedWord>Quinto Andar</FeaturedWord>, em uma das suas
            aplicações de Chat com inteligência artificial.<br></br> <br />
            Atualmente presto serviços para{" "}
            <FeaturedWord>Accurate</FeaturedWord>, atuando em diversos projetos
            como <FeaturedWord>Mambo SuperMarket</FeaturedWord> em seu
            aplicativo ecommerce, <FeaturedWord>Claro</FeaturedWord> no
            aplicativo <FeaturedWord>Meu Técnico</FeaturedWord>, e sistemas
            internos da empresa
          </Paragraph>
        </GridParagraph>
        {/* <div
          ref={addSlideDownAnim}
          style={{
            width: "1.5px",
            height: "80px",
            background: "linear-gradient(180deg,#093366,rgba(153,109,255,0))",
          }}
        ></div> */}

        {/* <GridBlocks>
          <BlockLearning ref={addSlideUpAnim}>Teoria</BlockLearning>
          <BlockLearning ref={addSlideUpAnim}>Prática</BlockLearning>
          <BlockLearning ref={addSlideUpAnim}>Desafios</BlockLearning>
        </GridBlocks> */}
      </PresentationBox>
      <div
        ref={addSlideUpAnim}
        style={{
          width: "1.5px",
          height: "80px",
          background: "linear-gradient(180deg,#093366,rgba(153,109,255,0))",
        }}
      ></div>
    </Container>
  );
};
// };
// ref={addSlideUpAnim}
// ref={addSlideUpAnim}
// ref={addSlideUpAnim}

export default withBreakpoints(FullStackSection);
