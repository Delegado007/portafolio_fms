import React from "react";
import { ProjectCard } from '@components/ProjectsCard';
import { useNearScreen } from '@hooks/useNearScreen.js';
import { ContainerTitle, Article, H2Title, SpanTitle, Section, Container, CardGrid } from "./styles";

export const ListOfProjects = ({ loadDataProjects }) => {
  const [showTitle, projectsTitle] = useNearScreen();
  return (
    <>
      <ContainerTitle id="list_projects" ref={projectsTitle}>
        {showTitle &&
          <Article className="rubberBand">
            <H2Title>
              <SpanTitle aria-hidden="true">M</SpanTitle>
              M
              <SpanTitle aria-hidden="true">M</SpanTitle>
            </H2Title>
            <H2Title>
              <SpanTitle aria-hidden="true">y</SpanTitle>
              y&nbsp;
              <SpanTitle aria-hidden="true">y</SpanTitle>
            </H2Title>
            <H2Title>
              <SpanTitle aria-hidden="true">P</SpanTitle>
              P
              <SpanTitle aria-hidden="true">P</SpanTitle>
            </H2Title>
            <H2Title>
              <SpanTitle aria-hidden="true">r</SpanTitle>
              r
              <SpanTitle aria-hidden="true">r</SpanTitle>
            </H2Title>
            <H2Title>
              <SpanTitle aria-hidden="true">o</SpanTitle>
              o
              <SpanTitle aria-hidden="true">o</SpanTitle>
            </H2Title>
            <H2Title>
              <SpanTitle aria-hidden="true">j</SpanTitle>
              j
              <SpanTitle aria-hidden="true">j</SpanTitle>
            </H2Title>
            <H2Title>
              <SpanTitle aria-hidden="true">e</SpanTitle>
              e
              <SpanTitle aria-hidden="true">e</SpanTitle>
            </H2Title>
            <H2Title>
              <SpanTitle aria-hidden="true">c</SpanTitle>
              c
              <SpanTitle aria-hidden="true">c</SpanTitle>
            </H2Title>
            <H2Title>
              <SpanTitle aria-hidden="true">t</SpanTitle>
              t
              <SpanTitle aria-hidden="true">t</SpanTitle>
            </H2Title>
            <H2Title>
              <SpanTitle aria-hidden="true">s</SpanTitle>
              s
              <SpanTitle aria-hidden="true">s</SpanTitle>
            </H2Title>
          </Article>

        }
      </ContainerTitle>
      <Section>
        <Container>
          <CardGrid className="card-grid">
            {loadDataProjects.map((project) => {
              return (
                <ProjectCard key={project.id} {...project} />
              )
            })}
          </CardGrid>
        </Container>
      </Section>
    </>
  )
}
