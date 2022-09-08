import { createGlobalStyle } from 'styled-components';
import { MPlusCodeLatin } from './fontMPlusCode';

export const GlobalStyles = createGlobalStyle`
  ${MPlusCodeLatin}
  html {
    font-family: 'M PLUS Code Latin';
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  
  a {
    text-decoration: none;
  }
          
  ul, li, h1, h2, h3, p, button, input, textarea {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  button {
    background: transparent;
    border: 0;
    outline: 0;
  }

  body {
    background-image: linear-gradient(to right bottom, #1d1d1d, #1f1f1f, #222222, #242424, #272727, #272627, #272527, #282427, #281f21, #271a1a, #24170f, #1f1400);    
    margin: 0px;
    width: 100%;
    color: white;
  }
  
.App {
  padding-left: 8rem;
  @media (max-width: 745px) {
    padding-left: 0;
  }
}
`



