import styled from "styled-components";
import { glitch } from './../../styles/glitchAnimation';

export const Nav = styled.nav`
  width: 100%;  
  justify-content: center;
  display: flex;
  margin-top: 150px;
  padding: 0 20px;
`

export const Lista = styled.ul`
  display: inline-flex;  
`

export const Li = styled.li`
  position: relative;  
  font-size: 1.25rem;
  font-weight: bold;
  /* letter-spacing: 2px; */
  text-transform: uppercase;
  margin-right: 30px;
  &:hover{
    cursor: pointer;
    -webkit-box-reflect: below 0px linear-gradient(transparent, #0002);
    & span:first-child{
      animation: ${glitch} 650ms infinite;
      clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
      transform: translate(-0.025em, -0.0125em);
      /* color: green; */
      opacity: 0.8;
    }
    & span:last-child{
      animation: ${glitch} 375ms infinite;
      clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
      transform: translate(0.025em, 0.025em);
      /* color: red; */
      opacity: 0.8;
    }  
  }  
`

export const Span = styled.span`
  position: absolute;
  font-size: 1.25rem;
  font-weight: bold;
  /* letter-spacing: 2px; */
  text-transform: uppercase;
  top: 0;
  left: 0;
  text-shadow: 
    0.05em 0 0 rgba(255,0,0,.75),
    -0.025em -0.05em 0 rgba(0,255,0,.75),
    0.025em 0.05em 0 rgba(0,0,255,.75);  
`


