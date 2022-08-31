import React from "react";
import { ProjectCard } from '@components/ProjectsCard';
import { Section, Container, CardGrid } from "./styles";

export const ListOfProjects = () => {
  const rederProjects = [
    {
      id: 1,
      cardCategory: "Front End",
      cardHeading: "Ruadis Librería",
      resume: "Un proyecto Freelance desarrollado con el propósito de suplir una necesidad de poder dar acceso remoto a los clientes al repositorio de libros y mercadería que se encuentran disponibles a la venta.",
      background: ["assets/captures/ruadis1.png", "assets/captures/ruadis2.png", "assets/captures/ruadis3.png"]
    },
    {
      id: 2,
      cardCategory: "Front End",
      cardHeading: "Petgram",
      background: ["assets/captures/petgram1.png", "assets/captures/petgram2.png", "assets/captures/petgram3.png"]
    },
    {
      id: 3,
      cardCategory: "Front End",
      cardHeading: "Pokedux",
      background: ["assets/captures/pokedux1.png", "assets/captures/pokedux2.png"]
    },
    {
      id: 4,
      cardCategory: "Front End",
      cardHeading: "OyeMusica",
      background: ["assets/captures/oyemusica1.png", "assets/captures/oyemusica2.png"]
    }
  ];

  return (
    <Section>
      <Container>
        <CardGrid className="card-grid">
          {rederProjects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              category={project.cardCategory}
              heading={project.cardHeading}
              background={project.background}
              resume={project.resume}
            />
          ))}
        </CardGrid>
      </Container>
    </Section>
  )
}