import React, { Component } from "react";
import styled from "styled-components";
import PostSquare from "../globals/post/PostSquare.block";
import "../../global.css";

const Container = styled.section`
  width: 1200px;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PresentationBox = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
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
  font-size: 20px;
`;
const FeaturedWord = styled.b`
  color: #4b4870;
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
          <Paragraph>
            Desenvolva softwares para Web completos. <br></br>
            Tanto back-end quanto front-end utilizando de tecnologias atuais:
          </Paragraph>

          <GridBlocks>
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
          </GridBlocks>
        </PresentationBox>
      </Container>
    );
  }
}
export default FinanceSection;
