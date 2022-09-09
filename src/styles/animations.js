import { keyframes } from "styled-components";

export const glitch = keyframes`
  0% {
    text-shadow: 0.05em 0 0 rgba(182, 146, 2, 0.75),
      -0.05em -0.025em 0 rgba(20, 16, 0, 0.75),
      -0.025em 0.05em 0 rgba(255, 255, 255, 0.75);
  }
  14% {
    text-shadow: 0.05em 0 0 rgba(182, 146, 2, 0.75),
      -0.05em -0.025em 0 rgba(20, 16, 0, 0.75),
      -0.025em 0.05em 0 rgba(255, 255, 255, 0.75);
  }
  15% {
    text-shadow: -0.05em -0.025em 0 rgba(182, 146, 2, 0.75),
      0.025em 0.025em 0 rgba(20, 16, 0, 0.75),
      -0.05em -0.05em 0 rgba(255, 255, 255, 0.75);
  }
  49% {
    text-shadow: -0.05em -0.025em 0 rgba(182, 146, 2, 0.75),
      0.025em 0.025em 0 rgba(20, 16, 0, 0.75),
      -0.05em -0.05em 0 rgba(255, 255, 255, 0.75);
  }
  50% {
    text-shadow: 0.025em 0.05em 0 rgba(182, 146, 2, 0.75),
      0.05em 0 0 rgba(20, 16, 0, 0.75),
      0 -0.05em 0 rgba(255, 255, 255, 0.75);
  }
  99% {
    text-shadow: 0.025em 0.05em 0 rgba(182, 146, 2, 0.75),
      0.05em 0 0 rgba(20, 16, 0, 0.75),
      0 -0.05em 0 rgba(255, 255, 255, 0.75);
  }
  100% {
    text-shadow: -0.025em 0 0 rgba(182, 146, 2, 0.75),
      -0.025em -0.025em 0 rgba(20, 16, 0, 0.75),
      -0.025em -0.05em 0 rgba(255, 255, 255, 0.75);
  }
`
export const FadeInMadeDelegado = keyframes`
  0% {
    transform: translateY(5rem);
    opacity: 0;
  }
  1% {
    opacity: 0;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

export const animateRubberBand = keyframes`  
  from,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
`
export const rubberBand = keyframes`
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
`

export const animateBackInUp = keyframes`
  0% {
    -webkit-transform: translateY(1200px) scale(0.7);
    transform: translateY(1200px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateY(0px) scale(0.7);
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
`

export const backInUp = keyframes`
  0% {
    -webkit-transform: translateY(1200px) scale(0.7);
    transform: translateY(1200px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateY(0px) scale(0.7);
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
`

export const jackInTheBox = keyframes`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
` 
