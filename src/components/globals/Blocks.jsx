import styled from "styled-components";
import imgUrl from "../../assets/images/space-bg.jpg";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  align-items: center;
`;
export const FeaturedWord = styled.b`
  color: ${({ color }) => (color ? color : "#8257e5")};
`;
export const StyledDiv = styled.div`
  width: 100%;
  background-color: transparent;
  // margin-top: -50px;
  z-index: 9;
`;
export const Container = styled.section`
  z-index: 2;
  width: 1200px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 740px) {
    width: 100%;
  }
`;
export const GridParagraph = styled.div`
  oveflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 740px) {
    // flex-direction: column-reverse;
  }
`;
export const PresentationBox = styled.div`
  display: flex;
  align-items: start;
  overflow: hidden;
  // margin-top: -50px;
  // padding-top: 120px;
  background-color: white;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  // background-image: url(${imgUrl});
`;
export const BoxSubtitle = styled.div`
&::after  {
  content: "";
  width: 20%;
  height: 6px;
  display:block;
  margin-left: 8px;
  // align-self: center;
  background-color:red;

}
}
`;
export const SubTitle = styled.h2`
  color: ${(props) => (props?.color ? props.color : "#093366")};
  text-transform: uppercase;
  font-weight: bold;
  // text-align: center;
  font-size: 48px;

  @media (max-width: 740px) {
    font-size: 1.5rem;
  }
}
`;

export const Paragraph = styled.p`
  color: #4a5568;
  font-weight: bold;
  font-size: 40px;
  width: ${(props) => (props?.width ? props.width : "50%")};
  @media (max-width: 740px) {
    font-size: 1rem;
    // width: 100%;
    // text-align: center;
  }
`;
export const GridBlocks = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 1200px;
  flex-direction: row;
  @media (max-width: 740px) {
    width: 100vw;
    flex-wrap: none;
    align-items: center;
    justify-content: center;
  }
`;
export const BlockLearning = styled.article`
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
