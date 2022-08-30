import styled from "styled-components";
import { glitch } from './../../styles/glitchAnimation';

export const ContainerGridForm = styled.div`
  
`

export const ContactIn = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  max-width: 1200px;
  height: auto;
  margin: auto;
  padding: 0 24px 20px 24px;
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
  &:hover{
    cursor: pointer;
    text-shadow: 
    0.05em 0 0 rgba(255,0,0,.75),
    -0.025em -0.05em 0 rgba(0,255,0,.75),
    0.025em 0.05em 0 rgba(0,0,255,.75);
    & span:first-child{
      animation: ${glitch} 650ms infinite;
      clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
      transform: translate(-0.015em, -0.0125em);
      /* color: green; */
      opacity: 0.8;
    }
    & span:last-child{
      animation: ${glitch} 375ms infinite;
      clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
      transform: translate(0.015em, 0.018em);
      /* color: red; */
      opacity: 0.8;
    }  
  }
  @media (max-width: 670px) {
    font-size: 2.4rem;
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
  @media (max-width: 670px) {
    font-size: 2.4rem;
  }  
`

export const ContactMap = styled.div`  
  grid-area: 1 / 2 / 2 / 3;
  height: 100%;
  & iframe {
    /* filter: invert(95%); */
    filter: brightness(0.84) contrast(1.5) invert(0.90)  sepia(0.5);
    border: 0;    
    animation-duration: 3s;
  }
  & div {

  }
  @media (max-width: 960px) {
    grid-area: 1 / 1 / 2 / 2;
    
  }
`

export const Form = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  margin-right: 24px;
  height: auto;  
  @media (max-width: 960px) {
    grid-area: 2 / 1 / 3 / 2;
    margin-top: 24px;
  }
  & form {
    animation-duration: 1.5s;
    
  
  }
`

export const InputText = styled.input`
  font-size: 16px;
  box-sizing: border-box;
  width: 100%;
  max-width: 600px;
  height: 50px;
  background-color: #2b2b2b;
  color: #fff;  
  outline: none;  
  padding: 8px;
  border: none;
  margin-bottom: 5px;
`

export const TextArea = styled.textarea`
  font-size: 16px;
  box-sizing: border-box;
  width: 100%;
  max-width: 600px;
  min-height: 150px;
  background-color: #2b2b2b;
  resize: none;
  height: 130px;
  color: #fff;
  border: none;
  outline: none;
  margin-bottom: 20px;
  padding: 8px;
`

export const InputButton = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 300px;
  border: none;   
  background-color: #00A97F;
  text-transform: uppercase;
  padding: 8px;
  cursor: pointer;
  font-size: 1.3rem;
  color: #fff;
`