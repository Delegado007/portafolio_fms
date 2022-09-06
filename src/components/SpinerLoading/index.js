import React from "react";
import { ContainerSpiner, Divider } from "./styles";

export const SpinerLoading = () => {
  return (
    <ContainerSpiner>
      <Divider aria-hidden="true"></Divider>
      <p class="loading-text" aria-label="Loading">
        <span class="letter" aria-hidden="true">L</span>
        <span class="letter" aria-hidden="true">o</span>
        <span class="letter" aria-hidden="true">a</span>
        <span class="letter" aria-hidden="true">d</span>
        <span class="letter" aria-hidden="true">i</span>
        <span class="letter" aria-hidden="true">n</span>
        <span class="letter" aria-hidden="true">g</span>
      </p>
    </ContainerSpiner>
  )
}