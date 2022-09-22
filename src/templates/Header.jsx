import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useBreakpoint, withBreakpoints } from "gatsby-plugin-breakpoints";

import { menuListAcademy } from "../shared/mocks";

import {
  Container,
  MenuIcon,
  MenuLi,
  MenuList,
} from "../components/styled/Header.styled";

const Header = () => {
  const breakpoints = useBreakpoint();
  return breakpoints.md ? (
    <Container>
      <MenuIcon>
        <div></div>
        <div></div>
        <div></div>
      </MenuIcon>
      <StaticImage src="../assets/logo.png" width={120} />
      <div>search</div>
    </Container>
  ) : (
    <Container>
      <StaticImage src="../assets/logo.png" width={120} />
      <MenuList>
        {menuListAcademy.map((itemMenu) => (
          <Link to={itemMenu.path}>
            <MenuLi>{itemMenu.name}</MenuLi>
          </Link>
        ))}
      </MenuList>
      <div>search</div>
    </Container>
  );
};

export default withBreakpoints(Header);
