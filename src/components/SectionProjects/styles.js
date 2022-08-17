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
  &:hover .card:not(:hover) .card__background{
    filter: brightness(0.5) saturate(0) contrast(1.2) blur(20px);
  }
`

export const Card = styled.div`
  position: relative;  
  content: '';
  display: block;
  margin: 0 auto;
  padding-bottom: 150%;
  width: 100%;
  &:hover .card__background{
  transform: scale(1.05) translateZ(0);
  }
  /* &:hover + .card:not(:hover) .card__background{
    filter: brightness(0.5) saturate(0) contrast(1.2) blur(20px);
  } */
`

export const CardBackground = styled.div`
  background-image: url("https://elcomercio.pe/resizer/9Wd041tOZfS4K71f5e0fWvtyzOI=/1200x1200/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/NBHICKXFIFHPVJJE4G2TDDNMJQ.jpg");
  background-size: cover;
  background-position: center;
  border-radius: ${spacingL};
  bottom: 0;
  filter: brightness(0.75) saturate(1.2) contrast(0.85);
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform-origin: center;
  transform: scale(1) translateZ(0);
  transition: 
    filter 200ms linear,
    transform 200ms linear;
`

export const CardContent = styled.div`
  left: 0;
  padding: ${spacingL};
  position: absolute;
  top: 0;
`

export const CardCategory = styled.p`
  color: ${textLight};
  font-size: 0.9rem;
  margin-bottom: ${spacingS};
  text-transform: uppercase;
`

export const CardHeading = styled.h3`
  color: ${textLighter};
  font-size: 1.9rem;
  text-shadow: 2px 2px 20px rgba(0,0,0,0.2);
  line-height: 1.4;
  word-spacing: 100vw;
`