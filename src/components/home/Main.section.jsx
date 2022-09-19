import React, { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { StaticImage } from "gatsby-plugin-image";

import PostSquare from "../globals/post/PostSquare.block";
import {
  Container,
  FeaturedWord,
  GridBlocks,
  GridParagraph,
  Paragraph,
  PresentationBox,
  SubTitle,
} from "../globals/Blocks";

import "../../global.css";

gsap.registerPlugin(ScrollTrigger);

const FinanceSection = (props) => {
  const revealBlockRefs = useRef([]);

  revealBlockRefs.current = [];

  useEffect(() => {
    revealBlockRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          x: index <= 2 || index >= 6 ? 100 : -100,
        },
        {
          duration: 1,
          autoAlpha: 1,
          ease: "power4.out",
          x: 0,
          scrollTrigger: {
            className: `blocks`,
            trigger: el,

            start: "top center+=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const addBlockToRefs = (el) => {
    if (el && !revealBlockRefs.current.includes(el)) {
      revealBlockRefs.current.push(el);
    }
  };
  const revealRefs = useRef([]);

  revealRefs.current = [];

  useEffect(() => {
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          x: 100,
        },
        {
          duration: 1,
          autoAlpha: 1,
          ease: "power4.out",
          x: 0,
          scrollTrigger: {
            className: `blocks`,
            trigger: el,
            start: "top center+=200",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);
  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };
  const blocks = props.images;
  return (
    <Container>
      <PresentationBox>
        <SubTitle>Seja um Desenvolvedor Full Stack</SubTitle>
        <GridParagraph>
          <div style={{ width: "50%" }}>
            <Paragraph>
              Você irá aprender a desenvolver softwares completos <br></br>
              Tanto back-end quanto front-end e mobile utilizando de tecnologias
              atuais:
            </Paragraph>
          </div>
          <div style={{ width: "30%" }} ref={addToRefs}>
            <StaticImage width={400} src="../../assets/images/banner-2.png" />
          </div>
        </GridParagraph>

        <GridBlocks>
          {blocks.map((value) => {
            return (
              <div ref={addBlockToRefs}>
                <PostSquare
                  height={250}
                  className="blocks"
                  width={300}
                  image={value.gatsbyImageData}
                  excerpt={value.excerpt}
                ></PostSquare>
              </div>
            );
          })}
        </GridBlocks>
      </PresentationBox>
    </Container>
  );
};

export default FinanceSection;
