import React, { Component } from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

const Block = styled.article`
  width: 400px;
  height: 400px;
  padding: 20px;
`;

class PostSquare extends Component {
  render() {
    console.log(this.props, "_____+++++++");
    const { title, image, excerpt } = this.props;
    return (
      <Block>
        <GatsbyImage image={image} alt="iae"></GatsbyImage>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
      </Block>
    );
  }
}
export default PostSquare;
