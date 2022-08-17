import React from "react";
import { StyledBurger } from './styled'
import { useDispatch } from 'react-redux';
import { setOpenMenu } from '@actions';

export const Burguer = ({ open }) => {
  const dispatch = useDispatch();

  const handleSetOpen = () => {
    dispatch(setOpenMenu(!open));
  }

  console.log("Burguer");
  return (
    <>
      <StyledBurger open={open} onClick={handleSetOpen} >
        <div />
        <div />
        <div />
      </StyledBurger>
    </>
  )
}