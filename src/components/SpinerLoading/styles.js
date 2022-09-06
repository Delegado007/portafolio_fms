import styled from "styled-components";

const black = "#000";
const white = "#fff";

// @mixin pseudo ($content: '') {
//   position: absolute;
//   content: $content;
// }

export const ContainerSpiner = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  transform: scale(0.725);
`


export const Divider = styled.div`
  position: absolute;
  z-index: 2;
  top: 65px;
  left: 200px;
  width: 50px;
  height: 15px;
  background: ${white};
`

export const LoadingText = styled.p`
  position: relative;
  font-size: 3.75rem;
  font-weight: 300;
  margin: 0;
  white-space: nowrap;
  &::before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 40px;
    left: 115px;
    width: 6px;
    height: 6px;
    background: $black;
    border-radius: 50%;
    animation: ${dotMove} 1800ms cubic-bezier(0.25, 0.25, 0.75, 0.75) infinite;
  }
  & .letter {
    display: inline-block;
    position: relative;
    color: ${black};
    letter-spacing: 8px;
      &:nth-child(1) {
      // For the letter "L"
      transform-origin: 100% 70%;
      transform: scale(1, 1.275);
        &::before {
        content: '';
        position: absolute;
        top: 22px;
        left: 0;
        width: 14px;
        height: 36px;
        background: $white;
        transform-origin: 100% 0;
        animation: ${lineStretch} 1800ms cubic-bezier(0.25, 0.25, 0.75, 0.75) infinite;
      }
    }
      &:nth-child(5) {
      // For the letter "i"
      transform-origin: 100% 70%;
      animation: ${letterStretch} 1800ms cubic-bezier(0.25, 0.23, 0.73, 0.75) infinite;
        &::before {
          content: '';
          position: absolute;
          top: 15px;
          left: 2px;
          width: 9px;
          height: 15px;
          background: $white;
      }
    }
  }

`

const dotMove = keyframes`
  0%, 100% {
    transform: rotate(180deg) translate(-110px, -10px) rotate(-180deg);
  }
  50% {
    transform: rotate(0deg) translate(- 111px, 10px) rotate(0deg);
	}
`

// For the letter "i"
const letterStretch = keyframes`
  0%, 100% {
    transform: scale(1, 0.35);
    transform-origin: 100% 75%;
  }
  8%, 28% {
    transform: scale(1, 2.125);
    transform-origin: 100% 67%;
  }
  37% {
    transform: scale(1, 0.875);
    transform-origin: 100% 75%;
  }
  46% {
    transform: scale(1, 1.03);
    transform-origin: 100% 75%;
  }
  50% ,97% {
    transform: scale(1);
    transform-origin: 100% 75%;
  }
`


// For the letter "L"
const lineStretch = keyframes`
  0%, 45%, 70%, 100% {
    transform: scaleY(0.125);
  }
  49% {
    transform: scaleY(0.75);
  }
  50% {
    transform: scaleY(0.875);
  }
  53% {
    transform: scaleY(0.5);
  }
  60% {
    transform: scaleY(0);
  }
  68% {
    transform: scaleY(0.18);
  }
`


// @media(min - width: 48rem) {
//   #container {
//     transform: scale(0.725rem);
//   }
// }

// @media(min - width: 62rem) {
//   #container {
//     transform: scale(0.85);
//   }
// }