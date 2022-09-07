import styled, { keyframes } from "styled-components"

const colorSpinner = '#FFA600';

const animateC = keyframes`
  0% 
    {
      transform:rotate(0deg);
    }
  100%
    {
    transform:rotate(360deg);
    }
`
const animate = keyframes`
  0%
    {
      transform: rotate(45deg);
    }
  100%
    {
      transform: rotate(405deg);
    }
`

const fadeInOut = keyframes`
  0% {
    opacity: 1;
  }
  1% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  51% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const ContainerSpiner = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`

export const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width:180px;
  height:180px;
  background:transparent;
  border:5px solid #3c3c3c;
  border-radius:50%;
  text-align:center;
  line-height:150px;
  font-size:1.7rem;
  color: ${colorSpinner};
  letter-spacing:4px;
  text-transform:uppercase;
  text-shadow:0 0 10px #fff000;
  box-shadow:0 0 20px rgba(0,0,0,.5);  
  &::before {
    content:'';
    position:absolute;
    top:-3px;
    left:-3px;
    width:100%;
    height:100%;
    border:5px solid transparent;
    border-top:5px solid ${colorSpinner};
    border-right:5px solid ${colorSpinner};
    border-radius:50%;
    animation: ${animateC} 2s linear infinite;
  }
`

export const Span = styled.span`
  display:block;
  position:absolute;
  top:calc(50% - 2px);
  left:50%;
  width:50%;
  height:4px;
  background:transparent;
  transform-origin:left;
  animation: ${animate} 2s linear infinite;
  &::before {
    content:'';
    position:absolute;
    width:16px;
    height:16px;
    border-radius:50%;
    background: ${colorSpinner};
    top:-6px;
    right:-8px;
    box-shadow:0 0 20px ${colorSpinner};
  }
`
export const Dots = styled.span`
  position: absolute;
  opacity: 1;
  animation: ${fadeInOut} 1.5s ease-in-out infinite;
`