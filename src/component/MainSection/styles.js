import styled from "styled-components";
import { glitch } from './../../styles/glitchAnimation';
import { MPlusCodeLatin } from './../../styles/fontMPlusCode';

export const Article = styled.article`
  height: 100vh;
  overflow: hidden;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding-left: 3.5rem;
  @media (max-width: 670px) {
    padding-left: 0;
  }
`
export const H1 = styled.h1`
  font-size: 5rem;
  @media (max-width: 670px) {
    font-size: 3rem;
  }
`

export const Span = styled.span`
  font-family: 'M PLUS Code Latin';
  font-weight: bold;
  ${MPlusCodeLatin};
  /* letter-spacing: 2px; */
  
  &:hover{
    cursor: pointer;
    animation: ${glitch} 650ms infinite;
    text-shadow: 
    0.05em 0 0 rgba(255,0,0,.75),
    -0.025em -0.05em 0 rgba(0,255,0,.75),
    0.025em 0.05em 0 rgba(0,0,255,.75);
  } 
`
