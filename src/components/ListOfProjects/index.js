import React from "react";
import { ProjectCard } from '@components/ProjectsCard';
import { Section, Container, CardGrid } from "./styles";

export const ListOfProjects = () => {
  const rederProjects = [
    {
      cardCategory: "Ruadis Librería",
      cardHeading: "Example Card Heading",
      background: "assets/car1.jpg"
    },
    {
      cardCategory: "Petgram",
      cardHeading: "Example Card Heading",
      background: "assets/car2.jpg"
    },
    {
      cardCategory: "Pokedux",
      cardHeading: "Example Card Heading",
      background: "assets/car3.jpg"
    },
    {
      cardCategory: "OyeMusica",
      cardHeading: "Example Card Heading",
      background: "assets/car4.jpg"
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