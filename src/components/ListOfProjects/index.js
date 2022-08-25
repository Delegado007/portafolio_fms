import React from "react";
import { ProjectCard } from '@components/ProjectsCard';
import { Section, Container, CardGrid } from "./styles";

export const ListOfProjects = () => {
  const rederProjects = [
    {
      cardCategory: "",
      cardHeading: "Ruadis Librería",
      background: ["assets/captures/ruadis1.png", "assets/captures/ruadis2.png", "assets/captures/ruadis3.png"]
    },
    {
      cardCategory: "",
      cardHeading: "Petgram",
      background: ["assets/captures/petgram1.png", "assets/captures/petgram2.png", "assets/captures/petgram3.png"]
    },
    {
      cardCategory: "",
      cardHeading: "Pokedux",
      background: ["assets/captures/pokedux1.png", "assets/captures/pokedux2.png"]
    },
    {
      cardCategory: "",
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
              key={project.cardCategory}
              category={project.cardCategory}
              heading={project.cardHeading}
              background={project.background}
            />
          ))}
        </CardGrid>
      </Container>
    </Section>
  )
}