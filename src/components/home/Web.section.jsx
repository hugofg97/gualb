import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import PostSquare from "../globals/post/PostSquare.block";
import "../../global.css";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Container = styled.section`
  z-index: 2;
  width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const GridParagraph = styled.div`
  // width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const PresentationBox = styled.div`
  display: flex;
  align-items: start;
  background-color: white;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  width: 100%;
  height: 100%;
`;
const SubTitle = styled.h2`
  color: #171923;
  // line-height: 2px;
  font-weight: bold;
  text-align: center;
  font-size: 48px;
`;
const Paragraph = styled.p`
  color: #4a5568;
  font-weight: bold;
  font-size: 40px;
`;
const FeaturedWord = styled.b`
  // color: #ed6a5a;
  // color: #8257e5;
  // color: #4b4870;
  color: #262438;
`;
const GridBlocks = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 1200px;
  flex-direction: row;
`;

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
        <SubTitle>
          Seja um <FeaturedWord>Desenvolvedor Full Stack </FeaturedWord>
        </SubTitle>
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
