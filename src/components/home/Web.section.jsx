import React, { Component } from "react";
import styled from "styled-components";
import PostSquare from "../globals/post/PostSquare.block";
import "../../global.css";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

const Container = styled.section`
  width: 1200px;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const GridParagraph = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const PresentationBox = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  width: 100%;
  height: 100%;
`;
const SubTitle = styled.h2`
  color: #171923;
  line-height: 1px;
  font-weight: bold;
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
  width: 1200px;
  flex-direction: row;
`;

class FinanceSection extends Component {
  render() {
    const posts = this.props.posts;
    return (
      <Container>
        <PresentationBox>
          <SubTitle>
            <FeaturedWord>Desenvolvimento Web Full Stack</FeaturedWord>:
          </SubTitle>
          <GridParagraph>
            <div style={{ width: "50%" }}>
              <Paragraph>
                Desenvolva softwares para Web completos. <br></br>
                Tanto back-end quanto front-end utilizando de tecnologias
                atuais:
              </Paragraph>
            </div>
            <div style={{ width: "30%" }}>
              <StaticImage width={400} src="../../assets/images/banner-2.png" />
            </div>
          </GridParagraph>

          {/* <GridBlocks>
            {posts.map((value) => {
              const image =
                value.node.featuredImage.node.localFile.childImageSharp
                  .gatsbyImageData;
              const { title, excerpt } = value.node;
              return (
                <PostSquare
                  title={title}
                  image={image}
                  excerpt={excerpt}
                ></PostSquare>
              );
            })}
          </GridBlocks> */}
        </PresentationBox>
      </Container>
    );
  }
}
export default FinanceSection;
