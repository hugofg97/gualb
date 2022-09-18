import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Block = styled.article`
  width: ${(props) => (props?.width ? `${props.width}px` : "300px")};
  height: ${(props) => (props?.height ? `${props.height}px` : "300px")};
  padding: 25px;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  align-items: center;
`;

const PostSquare = (props) => {
  const { image, excerpt, width, height } = props;

  return (
    <Block width={width} height={height} className="blocks">
      <GatsbyImage image={image} alt={"alt"}></GatsbyImage>
      <h3> {excerpt}</h3>
    </Block>
  );
};

export default PostSquare;
