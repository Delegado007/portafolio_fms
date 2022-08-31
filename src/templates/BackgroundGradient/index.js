import React from "react";
import { ContainerBG } from "./styles";
import { ContactForm } from '@components/ContactForm'
import { ListOfProjects } from '@components/ListOfProjects'

export const BacgroundGradient = () => {
  return (
    <ContainerBG>
      <ListOfProjects />
      <ContactForm />
    </ContainerBG>
  )
}