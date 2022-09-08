import styled from "styled-components";
import { glitch } from './../../styles/glitchAnimation';

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

export const Box = styled.div`  
  position: relative;
  width: 100%; 
`

export const Card = styled.div`
  margin: 24px auto;
  position: relative;
  width: 300px;
  background: linear-gradient(0deg,#1b1b1b,#222,#1b1b1b);
  display: flex;
  align-items: center;
  height: 180px;
  border-radius: 4px;
  text-align: center;
  overflow: hidden;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, .5);
  }
  &:hover .change__color {
    color: white;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, .03);
    pointer-events: none;
    z-index: 1;
  }
`
export const Percent = styled.div`
  position: absolute;
  width: 90px;
  height: 90px;
  top: calc(50% - 50px);
  right: calc(25% - 45px);
  border-radius: 50%;
  box-shadow: inset 0 0 50px #000;
  background:#222;
  z-index: 1000;
`

export const Number = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`

export const H2 = styled.h2`
  color:#777;
  font-weight: 700;
  font-size: 2rem;
  transition: 0.5s;
  &:hover {
    color: #fff;
    font-size: 60px;
  }
`

export const Span = styled.span`
  color:#777;
  font-size: 1.2rem;
  transition: 0.5s;
`

export const Technology = styled.div`
  position: absolute;
  width: 150px;
  top: calc(50% - 50px);
  right: calc(75% - 75px);
  display: flex;  
  flex-direction: column;
  max-width: 150px;
  & img {
    margin: auto;
    height: 80px;
    width: fit-content;
  }
`

export const SVG = styled.svg`
  position: relative;
  width: 90px;
  height: 90px;
  z-index: 1000;
  & circle {
    width: 100%;
    height: 100%;
    fill: none;
    stroke:#191919;
    stroke-width:6;
    stroke-linecap: round;
    transform: translate(3px, 3px);
  }
  & circle:nth-child(2) {
    stroke-dasharray: 264;
    stroke-dashoffset: 264;
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
  & {
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
