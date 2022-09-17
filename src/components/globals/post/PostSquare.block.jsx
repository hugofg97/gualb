import React, { Component } from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

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

class PostSquare extends Component {
  render() {
    const { image, excerpt, width, height } = this.props;

    return (
      <Block width={width} height={height}>
        <GatsbyImage image={image} alt={"alt"}></GatsbyImage>
        <h3> {excerpt}</h3>
      </Block>
    );
  }
}
export default PostSquare;
