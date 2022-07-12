import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
/* m-plus-code-latin-regular - latin */
@font-face {
  font-family: 'M PLUS Code Latin';
  font-style: normal;
  font-weight: 400;
  src: url('../assets/fonts/m-plus-code-latin-v6-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../assets/fonts/m-plus-code-latin-v6-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../assets/fonts/m-plus-code-latin-v6-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../assets/fonts/m-plus-code-latin-v6-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../assets/fonts/m-plus-code-latin-v6-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../assets/fonts/m-plus-code-latin-v6-latin-regular.svg#MPLUSCodeLatin') format('svg'); /* Legacy iOS */
}
/* m-plus-code-latin-500 - latin */
@font-face {
  font-family: 'M PLUS Code Latin';
  font-style: normal;
  font-weight: 500;
  src: url('../assets/fonts/fonts/m-plus-code-latin-v6-latin-500.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../assets/fonts/m-plus-code-latin-v6-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../assets/fonts/m-plus-code-latin-v6-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
       url('../assets/fonts/m-plus-code-latin-v6-latin-500.woff') format('woff'), /* Modern Browsers */
       url('../assets/fonts/m-plus-code-latin-v6-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../assets/fonts/m-plus-code-latin-v6-latin-500.svg#MPLUSCodeLatin') format('svg'); /* Legacy iOS */
}
/* m-plus-code-latin-700 - latin */
@font-face {
  font-family: 'M PLUS Code Latin';
  font-style: normal;
  font-weight: 700;
  src: url('../assets/fonts/m-plus-code-latin-v6-latin-700.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../assets/fonts/m-plus-code-latin-v6-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../assets/fonts/m-plus-code-latin-v6-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('../assets/fonts/m-plus-code-latin-v6-latin-700.woff') format('woff'), /* Modern Browsers */
       url('../assets/fonts/m-plus-code-latin-v6-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../assets/fonts//m-plus-code-latin-v6-latin-700.svg#MPLUSCodeLatin') format('svg'); /* Legacy iOS */
}
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
}
`
