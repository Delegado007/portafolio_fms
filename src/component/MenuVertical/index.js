import React, { useContext } from "react";
import { Menu, Nav, Lista, Li, Span } from "./styles";
import { DelegadoContext } from './../../context/index'

export const MenuVertical = () => {
  const { open } = useContext(DelegadoContext)
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
