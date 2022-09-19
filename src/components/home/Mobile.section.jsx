import React, { Component } from "react";
import styled from "styled-components";
import PostSquare from "../globals/post/PostSquare.block";
import "../../global.css";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

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
  // background-color: white;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  width: 100%;
  height: 100%;
`;
const SubTitle = styled.h2`
  color: #04d361;
  // line-height: 4px;
  text-align: center;
  font-weight: bold;
  font-size: 48px;
`;
const Paragraph = styled.p`
  // color: #4a5568;
  color: white;
  font-weight: bold;
  font-size: 40px;
`;
const FeaturedWord = styled.b`
  // color: #ed6a5a;
  // color: #8257e5;
  // color: #4b4870;
  // color: #262438;
  color: #04d361;
  // text-tranform: uppercase;
`;
const GridBlocks = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 1200px;
  flex-direction: row;
`;

class MobileSection extends Component {
  render() {
    const blocks = this.props.images;
    return (
      <div
        style={{
          backgroundColor: "#f5f8ff",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: -3,
          paddingTop: 0,
        }}
      >
        <Container>
          <PresentationBox>
            <GridParagraph>
              <div style={{ width: "30%" }}>
                <StaticImage
                  width={400}
                  src="../../assets/images/banner-3.png"
                />
              </div>
              <div style={{ width: "50%" }}>
                <SubTitle style={{ textAlign: "start" }}>
                  <FeaturedWord>Desenvolvimento Mobile</FeaturedWord>:
                </SubTitle>
                <Paragraph>
                  Neste modulo você irá aprender Flutter para criação de
                  aplicativos IOS e ANDROID. <br />
                  <br />
                  Teremos desafios ao decorrer do curso, que serão:
                </Paragraph>
              </div>
            </GridParagraph>
          </PresentationBox>
        </Container>
      </div>
    );
  }
}
export default MobileSection;
