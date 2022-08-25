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
  padding-bottom: 150%;
  width: 100%;
  & {
    animation-duration: 1s;
  }
  &:hover .card__background{
  transform: scale(1.05) translateZ(0);
  filter: brightness(1) contrast(1);
  }
  /* &:hover + .card:not(:hover) .card__background{
    filter: brightness(0.5) saturate(0) contrast(1.2) blur(20px);
  } */
`

export const CardBackground = styled.div`
  background-size: cover;
  background-position: center;
  border-radius: ${spacingL};
  bottom: 0;
  filter: brightness(0.85) contrast(0.90);
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform-origin: center;
  transform: scale(1) translateZ(0);
  transition: 
    filter 200ms linear,
    transform 200ms linear;
  overflow: hidden;
  & img {
    height: 100%;
    transition: 2s;
    &:hover {
      transform: translateX(-41%);
    }
  }
`

export const CardContent = styled.div`
  left: 0;
  padding: ${spacingL};
  position: absolute;
  top: 0;
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
  margin: ${spacingL};
  position: absolute;
  bottom: 0;
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${spacingS};
    background-color: ${backgroundColor};
    border-radius: 50%;
    width: 35px;
    height: 35px;
  }
`
export const Button = styled.button`
  color: white;
`