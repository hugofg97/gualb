import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FeaturedWord = styled.b`
  color: ${({ color }) => (color ? color : "#28203e")};
`;
export const StyledDiv = styled.div`
  width: 100%;
  background-color: transparent;
  margin-top: -50px;
  z-index: 9;
`;
export const Container = styled.section`
  z-index: 2;
  width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const GridParagraph = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const PresentationBox = styled.div`
  display: flex;
  align-items: start;
  background-color: white;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  width: 100%;
  height: 100%;
`;
export const SubTitle = styled.h2`
  ${({ color }) => (color ? color : "#04d361")};
  text-transform: uppercase;

  font-weight: bold;
  text-align: center;
  font-size: 48px;
`;
export const SubTitleWithBackground = styled.h2`
  ${({ color }) => (color ? color : "#04d361")};
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  // background-color: #FFFFFF;
  font-size: 48px;
`;
export const Paragraph = styled.p`
  color: #4a5568;
  font-weight: bold;
  font-size: 40px;
`;
export const GridBlocks = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 1200px;
  flex-direction: row;
`;
