import React from "react";
import { Nav, Lista, Li, Span } from './styles'

export const NavBar2 = () => {
  return (
    <Nav>
      <Lista>
        <Li>
          <Span aria-hidden="true">About to me</Span>
          About to me
          <Span aria-hidden="true">About to me</Span>
        </Li>
        <Li>
          <Span aria-hidden="true">Proyects</Span>
          Proyects
          <Span aria-hidden="true">Proyects</Span>
        </Li>
        <Li>
          <Span aria-hidden="true">Resume</Span>
          Resume
          <Span aria-hidden="true">Resume</Span>
        </Li>
      </Lista>
    </Nav>
  );
};
