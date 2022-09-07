import React, { useEffect, useState } from "react";
import { ProjectCard } from '@components/ProjectsCard';
import { Section, Container, CardGrid } from "./styles";

export const ListOfProjects = ({ loadDataProjects }) => {

  console.log("ListOfProjects")
  return (
    <Section id="list_projects">
      <Container>
        <CardGrid className="card-grid">
          {loadDataProjects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              category={project.cardCategory}
              heading={project.cardHeading}
              background={project.background}
              resume={project.resume}
              urlSite={project.urlSite}
              urlCode={project.urlCode}
              stack={project.stack}
            />
          ))}
        </CardGrid>
      </Container>
    </Section>
  )
}