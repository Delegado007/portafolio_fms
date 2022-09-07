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
