import styled, { keyframes } from 'styled-components';
const spacingS = "8px";
const spacingL = "24px";
const colorParticle = "#ffa500";

const glowing_button_85 = keyframes`
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
`

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
  position: relative;
  padding: ${spacingL};
  height: 100%;
  visibility: hidden;  
  z-index: 11;
  box-sizing: border-box;
  pointer-events: none;
  transition: 0s;
  opacity: 0;
  color: white;
  & h1{
    -webkit-text-stroke: thin;
    text-transform: uppercase;
    text-align: center;
    color: #FFA600;
    padding-bottom: 16px;
  }
  & p {
    -webkit-text-stroke: thin;
    text-align: center;
    color: #00E09D;
  }
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
  position: absolute;
  top: 280px;
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${spacingS};    
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
  border-radius: 1rem 0 1rem 0;
  box-shadow: 0 2px 4px rgba(#000000, 0.2);
  transition: 0.5s;
  cursor: pointer;
  z-index: 10;  
  &::before {
    text-align: center;
    content: "More info!";
    color: #FFA600;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 0.02em;
  }
  &:hover,
  &:focus{
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
    & ~ button {
      opacity: 1;
      visibility: visible;
    }
  }  
`

export const ButtonDeploy = styled.button`
  position: absolute;  
  justify-content: flex-end;
  background-image: linear-gradient(#272727, #222);
  width: 50px;
  height: 80px;
  border: none;
  outline: none;
  right: 0px;
  bottom: 80px;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  box-shadow: rgba(56, 56, 56, 0.4) 0 2px 4px,rgba(46, 46, 46, 0.3) 0 7px 13px -3px,#080808 0 -3px 0 inset;
  cursor: pointer;  
  &::before {
    content: "";
    background: linear-gradient(
    45deg,
    #08FDB3,
    #00A97F,
    #FFA600,
    #898989,
    #898989,
    #B07200,
    #363636,
    #008C69,
    #EC9A00
    );
    position: absolute;
    top: -3px;
    left: -3px;
    background-size: 400%;    
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing-button-85 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px 0 0 10px;    
  }
  &::after{    
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(#272727, #222);
    left: 0;
    top: 0;
    border-radius: 10px 0 0 10px;
    box-shadow: rgba(56, 56, 56, 0.4) 0 2px 4px,rgba(46, 46, 46, 0.3) 0 7px 13px -3px,#080808 0 -3px 0 inset;
  }
  & img {
    height: 100px;
    z-index: 9;
    position: absolute;
    right: -28px;
    bottom: -13px;
    transition: 0.3s;
  }
  &:hover img {
    transform: scale(1.1) translateY(-5px);
  }
`

export const ButtonCode = styled.button`
  position: absolute;  
  justify-content: flex-end;
  background-image: linear-gradient(#272727, #222);
  width: 50px;
  height: 80px;
  border: none;
  outline: none;
  right: 0px;
  bottom: 180px;
  border-radius: 10px 0 0 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  box-shadow: rgba(56, 56, 56, 0.4) 0 2px 4px,rgba(46, 46, 46, 0.3) 0 7px 13px -3px,#080808 0 -3px 0 inset;
  cursor: pointer;  
  &::before {
    content: "";
    background: linear-gradient(
      45deg,
      #08FDB3,
      #00A97F,
      #FFA600,
      #898989,
      #898989,
      #B07200,
      #363636,
      #008C69,
      #EC9A00
    );
    position: absolute;
    top: -3px;
    left: -3px;
    background-size: 400%;    
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: ${glowing_button_85} 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;  
  }
  &::after{  
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(#272727, #222);
    box-shadow: rgba(56, 56, 56, 0.4) 0 2px 4px,rgba(46, 46, 46, 0.3) 0 7px 13px -3px,#080808 0 -3px 0 inset;
    left: 0;
    top: 0;
    border-radius: 10px 0 0 10px;
  }
  & img {
    height: 85px;
    z-index: 9;
    position: absolute;
    right: -17px;
    bottom: -3px;
    transition: 0.3s;
  }
  &:hover img {
    transform: scale(1.1) rotate3d(0.2, 0.2, 0.7, 18deg);
  }
`

export const GoSite = styled.button`
  width: 120px;
  height: 50px;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  font-size: 1.5rem;
  bottom: 24px;
  right: calc(50% - 60px);
  background-image: linear-gradient(#464d55, #25292e);
  border-radius: 5px;
  letter-spacing: 3px;
  font-weight: bold;
  color: #EBEBEB;
  z-index: 200;
  &:hover .card__overlay {
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    box-shadow: none;
    border-radius: 1rem;
    opacity: 0.99;
  }
`

export const Button = styled.button`
  cursor: pointer;
  box-sizing: border-box;
  font-size: 1.5rem;
  font-weight: bold;
  background-image: linear-gradient(#272727, #222);
  color: white;
  border-radius: 0 50% 0.5rem 0rem;
  width: 3rem;
  height: 3rem;    
  border-width: 0;
  box-shadow: rgba(56, 56, 56, 0.4) 0 2px 4px,rgba(46, 46, 46, 0.3) 0 7px 13px -3px,#080808 0 -3px 0 inset;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  &.active {
    background-image: linear-gradient(#009B6D, #008C69);
    box-shadow: #343434 0 3px 7px inset;
    transform: translateY(2px);
  }
`

export const ContainerGridIconSVG = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-column-gap: 10px;
  grid-row-gap: 24px;
  width: 100%;
  padding-top: 24px;
  & div {    
    width: 50px;
    height: 50px;
    margin: auto;
  }
  & div img {    
    width: 50px;    
    margin: auto;
  }
`
