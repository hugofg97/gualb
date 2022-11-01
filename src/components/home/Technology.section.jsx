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

const TechnologySection = (props) => {
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
  const { techs } = props;

  return (
    <Container>
      {/* <PresentationBox>
        <h3>Mobile</h3>

        <GridBlocks>
          {techs.map(
            (tech) =>
              tech.frontend?.gatsbyImageData && (
                <PostSquare
                  image={tech.frontend?.gatsbyImageData}
                  excerpt={tech.frontend.excerpt}
                  width={350}
                  height={450}
                  animated={addSlideUpAnim}
                >
                  Teoria
                </PostSquare>
              )
          )}
        </GridBlocks>
      </PresentationBox> */}
    </Container>
  );
};
// };
// ref={addSlideUpAnim}
// ref={addSlideUpAnim}
// ref={addSlideUpAnim}

export default withBreakpoints(TechnologySection);
