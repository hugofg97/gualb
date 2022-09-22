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
          <Paragraph width="60%">
            <SubTitle>
              Porque escolher a <FeaturedWord>Gualb</FeaturedWord> ?
            </SubTitle>
            Nosso curso irá acelerar o seu processo de aprendizado, focando na
            prática e nas tecnologias mais utilizadas do mercado. Você irá
            desenvolver aplicações profissionais de alto nível
          </Paragraph>

          <div
            style={{
              overflow: "hidden",
              width: "30%",
            }}
            ref={addSlideRightAnim}
          >
            <StaticImage width={400} src="../../assets/images/banner-2.png" />
          </div>
        </GridParagraph>
        <div
          style={{
            width: "1.5px",
            height: "80px",
            background: "linear-gradient(180deg,#093366,rgba(153,109,255,0))",
          }}
        ></div>

        <GridBlocks>
          <BlockLearning>Teoria</BlockLearning>
          <BlockLearning>Prática</BlockLearning>
          <BlockLearning>Desafios</BlockLearning>
        </GridBlocks>
      </PresentationBox>
    </Container>
  );
};
// };
// ref={addSlideUpAnim}
// ref={addSlideUpAnim}
// ref={addSlideUpAnim}

export default withBreakpoints(FullStackSection);
