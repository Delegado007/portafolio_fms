import React from "react";
import { Nav, Lista, Li, Span } from './styles'

export const NavBar = () => {
  return (
    <Nav>
      <Lista>
        <Li><Span>Home</Span></Li>
        <Li><Span>Proyects</Span></Li>
        <Li><Span>About to me</Span></Li>
      </Lista>
    </Nav>
  );
};
