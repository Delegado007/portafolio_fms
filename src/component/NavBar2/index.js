import React from "react";
import { Nav, Lista, Li, Span } from './styles'

export const NavBar2 = () => {
  return (
    <Nav>
      <Lista>
        <Li>
          <Span aria-hidden="true">Home</Span>
          Home
          <Span aria-hidden="true">Home</Span>
        </Li>
        <Li>
          <Span aria-hidden="true">Proyects</Span>
          Proyects
          <Span aria-hidden="true">Proyects</Span>
        </Li>
        <Li>
          <Span aria-hidden="true">CV</Span>
          CV
          <Span aria-hidden="true">CV</Span>
        </Li>
      </Lista>
    </Nav>
  );
};
