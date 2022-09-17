import React, { Component } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Container = styled.header`
  padding: 10px;
  background: #28203e;
  width: 100%;
  color: #111111;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  z-index: 999;
`;
const MenuList = styled.ul`
  display: flex;
  align-items: center;
  color: black;
  list-style-type: none;
`;
const MenuLi = styled.li`
  padding: 10px;
  color: white;
  font-size: 25px;
  font-weight: 900;
`;

class Header extends Component {
  render() {
    return (
      <Container>
        <StaticImage src="../assets/logo.png" width={120} />
        <MenuList>
          <Link to="/">
            <MenuLi>Inicio</MenuLi>
          </Link>
          <Link to="/noticias">
            <MenuLi>Blog</MenuLi>
          </Link>
          <Link to="/financas">
            <MenuLi>Serviços</MenuLi>
          </Link>
          <Link to="/web-stories">
            <MenuLi>Storys</MenuLi>
          </Link>
          <Link to="/sobre">
            <MenuLi>Sobre</MenuLi>
          </Link>
          <Link to="/contato">
            <MenuLi>Contato</MenuLi>
          </Link>
          <Link to="/politica-de-privacidade">
            <MenuLi>Privacidade</MenuLi>
          </Link>
        </MenuList>
        <div>search</div>
      </Container>
    );
  }
}
export default Header;
