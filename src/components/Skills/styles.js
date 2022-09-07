import styled from "styled-components";

export const Container = styled.div`
  position:relative;
  margin: auto;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);  
  width: 100%;
  @media(min-width: 625px){  
    grid-template-columns: repeat(2, 1fr);  
  } 
  @media(min-width: 1140px){  
    grid-template-columns: repeat(3, 1fr);  
  }
  
`

export const Box = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around
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
  position: relative;
  width: 90px;
  height: 90px;
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

// .card: hover.percent.num h2 span
// {
//   color: #fff;
// }

export const Technology = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  max-width: 150px;
  & img {
    margin: auto;
    height: 80px;
    width: fit-content;
  }
`

// .card: hover.text
// {
//   color: #fff;
// }
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

