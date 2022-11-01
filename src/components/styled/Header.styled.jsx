import styled from "styled-components";

export const Container = styled.header`
  padding: 10px;
  background-image: radial-gradient(circle at 47% 59%, #292558, #15132e 104%);
  width: 100%;
  color: #111111;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  z-index: 999;
  @media (max-width: 1000px) {
    justify-content: space-between;
    align-items: center;
    padding: 0;
  }
`;
export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  color: black;
  list-style-type: none;
`;
export const MenuLi = styled.li`
  padding: 10px;
  color: white;
  font-size: 25px;
  font-weight: 900;
`;
export const MenuIcon = styled.div`
  width: 30px;
  height: 50px;
  background-color: transparent;
  border: none;
  div {
    background-color: white;
    height: 4px;
    width: 30px;
    margin: 8px;
  }
`;
