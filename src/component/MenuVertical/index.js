import React from "react";
import { Menu, Nav, Lista, Li, Span } from "./styles";

export const MenuVertical = () => {
  return (
    <Menu>
      <Lista>
        <Li>
          <Span>About to me</Span>
        </Li>
        <Li>
          <Span>Proyects</Span>
        </Li>
        <Li>
          <Span>Resume</Span>
        </Li>
      </Lista>
    </Menu>
  );
};
