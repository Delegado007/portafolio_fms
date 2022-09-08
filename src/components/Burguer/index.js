import React from "react";
import { StyledBurger } from './styled'
import { useDispatch } from 'react-redux';
import { setOpenMenu } from "../../slices/uiSlice";

export const Burguer = ({ open }) => {
  const dispatch = useDispatch();
  const handleSetOpen = () => {
    dispatch(setOpenMenu(!open));
  }

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