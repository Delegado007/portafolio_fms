import styled from "styled-components";

const backgroundDark = "#2d3548";
const textLight = "rgba(255,255,255,0.6)";
const textLighter = "rgba(255,255,255,0.9)";
const spacingS = "8px";
const spacingM = "16px";
const spacingL = "24px";
const spacingXl = "32px";
const spacingXxl = "64px";
const widthContainer = "1200px";

export const Section = styled.section`
  display: block;
  position: relative;
  background-color: transparent;
  margin-bottom: 90px;
`

export const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  align-items: flex-start;
  display: flex;
  min-height: 100%;
  justify-content: center;
  padding: ${spacingXxl} ${spacingL};
`

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: ${spacingL};
  grid-row-gap: ${spacingL};
  max-width: ${widthContainer};
  width: 100%;
  
  @media(min-width: 540px){  
    grid-template-columns: repeat(2, 1fr); 
  
  }
  @media(min-width: 960px){  
    grid-template-columns: repeat(3, 1fr);
  }
  /* &:hover .card:not(:hover) .card__background{
    filter: brightness(0.5) saturate(0) contrast(1.2) blur(4px);
  } */
`