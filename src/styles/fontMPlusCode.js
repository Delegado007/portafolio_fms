import { css } from 'styled-components';
import Font700 from './fonts/m-plus-code-latin-v6-latin-700.woff2'
import Font500 from './fonts/m-plus-code-latin-v6-latin-500.woff2'



export const MPlusCodeLatin = css`
  @font-face {
    font-family: 'M PLUS Code Latin';
    src: url(${Font700}) format('woff2'); /* IE9 Compat Modes */
    font-style: bold;
    font-weight: 700;
    font-display: fallback;
  }

  @font-face {
    font-family: 'M PLUS Code Latin';
    src: url(${Font500}) format('woff2'); /* IE9 Compat Modes */
    font-style: normal;
    font-weight: 500;
    font-display: fallback;
  }
  /* m-plus-code-latin-500 - latin */

`