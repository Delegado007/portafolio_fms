import styled from 'styled-components'

const backgroundDark = "#2d3548";
const textLight = "rgba(255,255,255,0.6)";
const textLighter = "rgba(255,255,255,0.9)";
const spacingS = "8px";
const spacingM = "16px";
const spacingL = "24px";
const spacingXl = "32px";
const spacingXxl = "64px";
const widthContainer = "1200px";
const backgroundColor = "#1d1d1d";
const colorParticle = "#ffa500";


export const Card = styled.div`
  position: relative;  
  content: '';
  display: block;
  margin: 0 auto;
  height: 530px;
  width: 100%;
  max-width: 330px;
  border-radius: 1rem;
  -webkit-box-shadow: 10px 10px 39px 10px rgba(0,0,0,1);
  -moz-box-shadow: 10px 10px 39px 10px rgba(0,0,0,1);
  box-shadow: 10px 10px 39px 10px rgba(0,0,0,1);
  & {
    animation-duration: 1s;
  }
  &:hover .card__background{
  /* transform: scale(1.03) translateZ(0); */
  filter: brightness(1) contrast(1);  
  }
 
  
`

export const CardBackground = styled.div`
  background-size: cover;
  background-position: center;
  border-radius: 1rem;
  bottom: 0;
  filter: brightness(0.7) contrast(0.90);
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform-origin: center;
  transform: scale(1) translateZ(0);
  transition: 
    filter 0.5s linear,
    transform 200ms linear;
  overflow: hidden;
  & img {
    height: 100%;
    transition: 2s;
    &:hover {
      transform: translateX(-46%);
    }
  }
`

export const CardContent = styled.div`
  position: absolute;
  padding: ${spacingL};  
  visibility: hidden;  
  z-index: 11;
  box-sizing: border-box;
  pointer-events: none;
  transition: 0s;
  opacity: 0;
  color: white;  
`

export const CardCategory = styled.p`
  color: ${colorParticle};
  font-size: 0.9rem;
  margin-bottom: ${spacingS};
  text-transform: uppercase;
`

export const CardHeading = styled.h3`
  color: ${colorParticle};
  font-size: 1.9rem;
  text-shadow: 2px 2px 20px rgba(0,0,0,0.2);
  line-height: 1.4;
  word-spacing: 100vw;
`

export const CardFooter = styled.div`
  left: 0;
  /* margin: ${spacingL}; */
  position: absolute;
  top: 280px;
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${spacingS};
    
  }
`
export const Button = styled.button`
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: #181818;
  color: white;
  border-radius: 0 50% 0.5rem 1rem;
  width: 3rem;
  height: 3rem;
  &.active {
    background-color: #00A97F;
  }
`

export const CardOverlay = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65px;
  height: 65px;
  background-color: #181818;
  border-radius: 50% 0 1rem 0;
  box-shadow: 0 2px 4px rgba(#000000, 0.2);
  transition: 0.5s;
  cursor: pointer;
  z-index: 10;
  &::before {
    content: "Read";
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 0.02em;
  }
  &:hover,
  &:focus {
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    box-shadow: none;
    border-radius: 1rem;
    opacity: 0.99;
    
    &::before {
      content: none;
    }
  }
  &:hover ~ div {
    opacity: 1;
    visibility: visible;
    transition: 0.2s 0.3s;
  }
`