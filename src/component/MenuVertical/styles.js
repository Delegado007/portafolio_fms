import styled from "styled-components";
import { glitch } from './../../styles/glitchAnimation';

export const Menu = styled.menu`
  width: 8rem;
  background-color: #181818;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  right: auto;
  bottom: 0;
  display: flex;
  z-index: 3;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  @media (max-width: 670px) {
    display: none;
  }
`

export const Nav = styled.nav`
  width: 100%;  
  justify-content: center;
  display: flex;
`

export const Lista = styled.ul`
  width: 100%;
  display: flex; 
  margin: 0;
  padding: 0;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  border-top: 1px solid #282828;
`

export const Li = styled.li`
  color: #cfcccc; 
  width: 8rem;
  text-align: center;
  display: block;  
  line-height: 5rem;
  border-bottom: 1px solid #282828;
  position: relative;  
  font-size: 1rem;
  font-weight: bold;
  /* letter-spacing: 2px; */
  
`

export const Span = styled.span`  
  width: 8rem;
  text-align: center;
  margin: 0 auto;
  font-size: 1rem;
  font-weight: bold;
  top: 0;
  left: 0;
  &:hover{
    color: #08fdb3;
    cursor: pointer;   
  }  
`


