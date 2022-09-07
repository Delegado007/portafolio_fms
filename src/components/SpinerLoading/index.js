import React from "react";
import { ContainerSpiner, Spinner, Span, Dots } from "./styles";

export const SpinerLoading = () => {
  return (
    <ContainerSpiner>
      <Spinner>
        <Dots>Loading</Dots>
        <Span></Span>
      </Spinner>
    </ContainerSpiner>
  )
}