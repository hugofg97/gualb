import styled from "styled-components";
export const Container = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px 300px;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "title title mascot mascot"
    "block  block block block"
    "block  block block block"
    "subscribe none none none";
  background-image: radial-gradient(circle at 47% 59%, #093366, #051933 104%);
  padding-top: 180px;
  overflow: hidden;
  height: 80vh;
  justify-content: center;
  z-index: 10;
  @media (max-width: 450px) {
    padding: 120px 10px 10px 10px;
    display: flex;
    height: 100%;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
  }
`;
export const ImageBox = styled.div`
  grid-area: mascot;
  max-width: 600px;
  img {
    width: 620px;
    height: 400px;
  }
  @media (max-width: 450px) {
    img {
      padding: 10px;
      width: 250px;
      height: 150px;
    }
  }
`;
export const TecnologyCategoryGrid = styled.div`
  grid-area: block;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden;
  justify-content: space-between;
  @media (max-width: 450px) {
    display: flex;
  }
`;
export const TecnologyCategoryBlock = styled.div`
  display: grid;
  grid-template-columns: 200px;
  grid-template-areas: "icon info" "content content";
  grid-template-rows: 80px 150px;
  border-radius: 7px;
  width: 200px;
  height: 230px;
  padding: 25px 25px 0px 25px;
  background-color: #051d3b;
  border: 0.3px solid #0d4d9c;
  margin-top: 10px;
  border-radius: 10px;
  cursor: pointer;
  align-items: start;
  transition: margin-top 0.2s, height 0.2s;
  z-index: 999;
  &:hover {
    border: 0.3px solid #1371e6;
    margin-top: 0px;
    box-shadow: 1px 1px 1px 1px rgba(1, 1, 1, 0.3);
  }
  @media (max-width: 450px) {
    grid-template-columns: 200px;
    grid-template-rows: 30px 150px;
    height: 100px;
    gap: 5px;
    padding: 5px;
    width: 100%;
    margin-top: 8px;
    &:hover {
      border: 0.3px solid #1371e6;
      margin-top: 8px;
      box-shadow: 1px 1px 1px 1px rgba(1, 1, 1, 0.3);
    }
  }
`;
export const IconBox = styled.div`
  grid-area: icon;
  display: flex;
  align-items: center;
  border-radius: 150px;
  img {
    width: 50px !important;
    height: 50px !important;
  }
  @media (max-width: 700px) {
    img {
      width: 25px !important;
      height: 25px !important;
    }
  }
`;
export const Info = styled.h3`
  grid-area: info;
  text-align: start;
  padding: 0;
  margin: 03px;
  font-size: 1rem;
  color: #04d361;
`;
export const ContentInfo = styled.p`
  grid-area: content;
  color: white;
  @media (max-width: 450px) {
    font-size: 0.8rem;
  }
`;

export const TitleH1 = styled.h1`
  grid-area: title;
  color: white;
  max-width: 600px;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 4rem;
  @media (max-width: 720px) {
    margin-top: 0px;
    font-size: 1.5rem;
  }
`;
export const Paragraph = styled.p`
  grid-area: paragraph;
  font-size: 2rem;
  color: white;
`;

export const FeaturedSubWord = styled.b`
  color: #04d361;
`;
export const ButtonSubscriber = styled.button`
  grid-area: subscribe;
  border-radius: 5px;
  color: white;
  margin-top: 10px;
  margin-bottom: 15px;
  width: 150px;
  font-weight: bold;
  background-color: #8257e5;
  cursor: pointer;
  border: none;
  font-size: 20px;
  height: 50px;
  padding: 10px;
  z-index: 10;
`;
