import React from "react";
import { Nav, Lista, Li } from './styles'

export const NavBar = () => {
  return (
    <Nav>
      <Lista>
        <Li>Home</Li>
        <Li>Proyects</Li>
        <Li>About to me</Li>
      </Lista>
    </Nav>
  );
};
