import styled from "styled-components";
import { glitch } from './../../styles/glitchAnimation';
import 'animate.css'


export const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 24px 0 24px;
  max-width: 1200px;
  margin: auto;
  
  @media (max-width: 745px) {
    padding-right: 1rem;
  } 
`

export const Article = styled.article`  
  overflow: hidden;
  display: flex; 
  & {
    animation-duration: 1.1s;
  }
`

export const H1 = styled.h1`
  position: relative;
  z-index: 1000;
  font-size: 4.5rem;
  &:hover{
    color: #FDD942;
    cursor: pointer;
    text-shadow: 
    0.05em 0 0 rgba(182, 146, 2,.75),
    -0.025em -0.05em 0 rgba(20, 16, 0,.75),
    0.025em 0.05em 0 rgba(255, 255, 255,.75);
    & span:first-child{      
      color: #FDD942;
      animation: ${glitch} 650ms infinite;
      clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
      transform: translate(-0.015em, -0.0125em);
      /* color: green; */
      opacity: 0.8;
    }
    & span:last-child{
      color: #FDD942;
      animation: ${glitch} 375ms infinite;
      clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
      transform: translate(0.015em, 0.018em);
      /* color: red; */
      opacity: 0.8;
    }
  }
  @media (max-width: 540px) {
    font-size: 3rem;
  }
`

export const Span = styled.span`
font-size: 4.5rem;
  position: absolute;
  top: 0;
  left: 0;
  font-family: 'M PLUS Code Latin';
  font-weight: bold;
  /* letter-spacing: 2px; */
  @media (max-width: 540px) {
    font-size: 3rem;
  }  
`

export const H3 = styled.h3`
  max-width: 470px;
  text-align: justify;
  color: #FDD942;
  
  @media (max-width: 540px) {
    max-width: 310px;
    font-size: 1rem;
  } 
`
