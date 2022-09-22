import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Block = styled.article`
  width: ${(props) => (props?.width ? `${props.width}px` : "300px")};
  height: ${(props) => (props?.height ? `${props.height}px` : "300px")};
  padding: 15px;
  display: flex;
  background-color: #f5f5f5;
  gap: 4px;
  margin: 5px;
  border-radius: 5px;
  flex-direction: column;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  align-items: center;
  @media (max-width: 740px) {
    height: 200px;

    h3 {
      font-size: 0.8rem;
    }
  }
`;

const PostSquare = (props) => {
  const { image, excerpt, width, height, animated } = props;

  return (
    <Block ref={animated} width={width} height={height}>
      <GatsbyImage image={image} alt={"alt"}></GatsbyImage>
      <h3> {excerpt}</h3>
    </Block>
  );
};

export default PostSquare;
