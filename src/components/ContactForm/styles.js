import styled from "styled-components";
import { glitch } from './../../styles/glitchAnimation';

export const ContainerGridForm = styled.div`
  min-height: 500px;  
`

export const ContactIn = styled.div`
  display: grid;
  align-self: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  max-width: 1200px;
  height: 100%;
  margin: auto;
  padding: 0 24px 100px;
  /* box-shadow: 0px 0px 10px 0px #666; */
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`

export const Article = styled.article`  
  overflow: hidden;
  display: flex;
  
  & {
    animation-duration: 1.1s;
  }
`

export const H2 = styled.h2`
  position: relative;  
  font-size: 3rem;
  
  letter-spacing: 3px;
  &:hover{
    cursor: pointer;
    text-shadow: 
    0.05em 0 0 rgba(60, 34, 2,.75),
    -0.025em -0.05em 0 rgba(251, 200, 136,.75),
    0.025em 0.05em 0 rgba(254, 236, 216,.75);
    & span:first-child{
      animation: ${glitch} 650ms infinite;      
      clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
      transform: translate(-0.015em, -0.0125em);      
      opacity: 0.8;
    }
    & span:last-child{
      animation: ${glitch} 375ms infinite;      
      clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
      transform: translate(0.015em, 0.018em);      
      opacity: 0.8;
    }   
  }  
  
`

export const Span = styled.span`
  font-size: 3rem;
  position: absolute;
  top: 0;
  left: 0;
  font-family: 'M PLUS Code Latin';
  font-weight: bold;
  
  /* letter-spacing: 2px; */
  
`

export const ContactMap = styled.div`  
  grid-area: 1 / 2 / 2 / 3;
  height: 100%;
  & iframe {
    filter: brightness(0.84) contrast(1.5) invert(0.90)  sepia(0.5);
    border: 0;    
    animation-duration: 3s;
  }
  @media (max-width: 960px) {
    grid-area: 2 / 1 / 3 / 2;
    padding: 24px 0;   
  }
`

export const Form = styled.form`
  grid-area: 1 / 1 / 2 / 2;
  margin-right: 24px;
  height: auto;  
  @media (max-width: 960px) {
    grid-area: 1 / 1 / 2 / 2;    
    
  }
  & form {
    animation-duration: 1.5s;   
  
  }
`

export const ContainerInput = styled.div`
  position: relative;
  width: 100%;
  & label {
    position: absolute;
    top:15px;
    left:8px;
    height: 30px;
    line-height: 30px;
    color:#cfcccc;
    cursor:text;
    transition: all 200ms ease-out;
    z-index:10;
  }
  & span {
    content:'';
    display: block;
    position: absolute;
    bottom:-1px;
    max-width: 600px;
    left:0;
    width: 0;
    height: 2px;
    background: #FDD942;
    transition: all 200ms ease-out;
  }
`

export const InputText = styled.input`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  line-height: 30px;
  font-size: 16px;
  border: 0;
  max-width: 600px;
  background-color: #2b2b2b;
  /* border-bottom: 1px solid #fff; */
  outline: none;
  border-radius: 0;
  -webkit-appearance: none;
  color: #fff;  
  padding: 8px;
  margin-bottom: 5px;
  margin-top: 10px;
  &:focus, &:valid{
    & ~ label{
      color: #FDD942;
      transform: translateY(-22px);
      font-size:0.825em;
      cursor:default;
    }
  }
  &:focus{
    &~.underline{
      width: 100%;
    }
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 130px;
  box-sizing: border-box;
  line-height: 30px;
  font-size: 16px;
  border: 0;
  max-width: 600px;
  background-color: #2b2b2b;
  min-height: 150px;
  resize: none;
  color: #fff;
  outline: none;
  
  margin-top: 10px;
  padding: 8px;
  &:focus, &:valid{
    & ~ label{
      color: #FDD942;
      transform: translateY(-22px);
      font-size:0.825em;
      cursor:default;
    }
  }
  &:focus{
    &~.underline{
      width: 100%;
    }
  }
`

export const InputButton = styled.button`
  position: relative;  
  box-sizing: border-box;
  width: 100%;
  max-width: 300px;
  appearance: none;
  background-color: #1d1d1d;
  border: 1px solid #FDD942;
  padding: 8px;
  margin-top: 15px;
  cursor: pointer;
  transition: opacity 300ms cubic-bezier(.694, 0, 0.335, 1),background-color 100ms cubic-bezier(.694, 0, 0.335, 1),color 100ms cubic-bezier(.694, 0, 0.335, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
  &:disabled {
    opacity: .3;
  }
  & span{
    position: relative;
    z-index: 100;
    font-size: 1.3rem;
    color: #fff;
    transition: 0.5s
  }
  &::before {    
    color: #000;       
    animation: opacityFallbackOut .5s step-end forwards;
    backface-visibility: hidden;
    background-color: #FDD942;
    clip-path: polygon(-1% 0, 0 0, -25% 100%, -1% 100%);
    content: "";
    height: calc(100% + 1px);
    left: -1px;
    position: absolute;
    top: 0px;
    transform: translateZ(0);
    transition: clip-path .5s cubic-bezier(.165, 0.84, 0.44, 1), -webkit-clip-path .5s cubic-bezier(.165, 0.84, 0.44, 1);
    width: calc(100% + 1px);
  }
  &:hover::before {     
    animation: opacityFallbackIn 0s step-start forwards;
    clip-path: polygon(0 0, 101% 0, 101% 101%, 0 101%);
  }
  &::after {
    background-color: #1d1d1d;
  }
  &:hover {
    & span {
      color: black;
    }
  }
`
