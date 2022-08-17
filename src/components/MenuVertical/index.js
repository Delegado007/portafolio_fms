import React from "react";
import { Menu, Lista, Li, Span } from "./styles";

export const MenuVertical = ({ open }) => {
  console.log("MenuVertical");
  return (
    <Menu open={open}>
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
