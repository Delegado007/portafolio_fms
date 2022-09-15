import styled from "styled-components";
import { glitch, rubberBand, animateRubberBand, animateBackInUp, backInUp } from './../../styles/animations.js';

export const Container = styled.div`
  position:relative;
  margin: auto;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);  
  width: 100%;
  margin-bottom: 90px;
  @media(min-width: 625px){  
    grid-template-columns: repeat(2, 1fr);  
  } 
  @media(min-width: 1140px){  
    grid-template-columns: repeat(3, 1fr);  
  }  
`

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-align-items: flex-start;
  -webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  align-items: flex-start;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 0 24px 24px 24px;
  max-width: 1200px;
  margin: auto;
`

export const Article = styled.article`  
  overflow: hidden;
  display: flex;    
  &.rubberBand {
    animation: ${animateRubberBand}, ${rubberBand};
    animation-duration: 1.1s;
  }
  &.backInUp {
    animation: ${animateBackInUp}, ${backInUp};
    animation-duration: 1.1s;
  }
`

export const H2Title = styled.h2`
  position: relative;  
  font-size: 3rem;  
  letter-spacing: 3px;
  &:hover{
    cursor: pointer;
    color: #FDD942;
    text-shadow: 
    0.05em 0 0 rgba(182, 146, 2,.75),
    -0.025em -0.05em 0 rgba(20, 16, 0,.75),
    0.025em 0.05em 0 rgba(255, 255, 255,.75);
    & span:first-child{
      color: #FDD942;
      animation: ${glitch} 650ms infinite;      
      clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
      transform: translate(-0.015em, -0.0125em);      
      opacity: 0.8;
    }
    & span:last-child{
      color: #FDD942;
      animation: ${glitch} 375ms infinite;      
      clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
      transform: translate(0.015em, 0.018em);      
      opacity: 0.8;
    }  
  }  
`

export const SpanTitle = styled.span`
  font-size: 3rem;
  position: absolute;
  top: 0;
  left: 0;  
  font-weight: bold;
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