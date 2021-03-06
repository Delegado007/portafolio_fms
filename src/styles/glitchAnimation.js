import { keyframes } from "styled-components";

export const glitch = keyframes`
  0% {
    text-shadow: 0.05em 0 0 rgba(228, 238, 137, 0.75),
      -0.05em -0.025em 0 rgba(129, 216, 247, 0.75),
      -0.025em 0.05em 0 rgba(253, 33, 85, 0.75);
  }
  14% {
    text-shadow: 0.05em 0 0 rgba(228, 238, 137, 0.75),
      -0.05em -0.025em 0 rgba(129, 216, 247, 0.75),
      -0.025em 0.05em 0 rgba(253, 33, 85, 0.75);
  }
  15% {
    text-shadow: -0.05em -0.025em 0 rgba(228, 238, 137, 0.75),
      0.025em 0.025em 0 rgba(129, 216, 247, 0.75),
      -0.05em -0.05em 0 rgba(253, 33, 85, 0.75);
  }
  49% {
    text-shadow: -0.05em -0.025em 0 rgba(228, 238, 137, 0.75),
      0.025em 0.025em 0 rgba(129, 216, 247, 0.75),
      -0.05em -0.05em 0 rgba(253, 33, 85, 0.75);
  }
  50% {
    text-shadow: 0.025em 0.05em 0 rgba(228, 238, 137, 0.75),
      0.05em 0 0 rgba(129, 216, 247, 0.75),
      0 -0.05em 0 rgba(253, 33, 85, 0.75);
  }
  99% {
    text-shadow: 0.025em 0.05em 0 rgba(228, 238, 137, 0.75),
      0.05em 0 0 rgba(129, 216, 247, 0.75),
      0 -0.05em 0 rgba(253, 33, 85, 0.75);
  }
  100% {
    text-shadow: -0.025em 0 0 rgba(228, 238, 137, 0.75),
      -0.025em -0.025em 0 rgba(129, 216, 247, 0.75),
      -0.025em -0.05em 0 rgba(253, 33, 85, 0.75);
  }
`
