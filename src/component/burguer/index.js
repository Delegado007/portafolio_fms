import React, { useContext, useState } from "react";
import { StyledBurger } from './styled'
import { DelegadoContext } from './../../context/index'

export const Burguer = () => {
  const { open, setOpen } = useContext(DelegadoContext);
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)} >
        <div />
        <div />
        <div />
      </StyledBurger>
    </>
  )
}