import { createGlobalStyle } from 'styled-components';
import { MPlusCodeLatin } from './fontMPlusCode';

export const GlobalStyles = createGlobalStyle`
/* m-plus-code-latin-regular - latin */
  ${MPlusCodeLatin}

  html {
    font-family: 'M PLUS Code Latin';
    box-sizing: border-box;
  }
  ::-webkit-scrollbar {
    display: none;
  }      
  *, *::before, *::after {
    box-sizing: inherit;
  }
        
  ul, li, h1, h2, h3, p, button {
    margin: 0;
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
    background-color: #1d1d1d;
    height: 100vh;
    margin: 0px;
    width: 100%;
    color: white;
  }
  #tsparticles {
    position: fixed;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    left: 0;
    top: 0;
    z-index: -1;
}
.App {
  padding-left: 8rem;
  @media (max-width: 670px) {
    padding-left: 0;
  }
}
`



