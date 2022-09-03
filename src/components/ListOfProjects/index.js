import React from "react";
import { ProjectCard } from '@components/ProjectsCard';
import { Section, Container, CardGrid } from "./styles";

export const ListOfProjects = () => {
  const rederProjects = [
    {
      id: 1,
      cardCategory: "Front End",
      cardHeading: "Ruadis Librería",
      resume: "Freelance project developed with the purpose of giving remote access to all merchandise and books for sale to customers. The Web has elaborate techniques for form validation, logging, registration, useContext, TailwindCSS, darkMode, and more.",
      urlSite: "https://webpack-ruadis.netlify.app",
      urlCode: "https://github.com/Delegado007/webpack-ruadis-react",
      stack: ["assets/html5.png", "assets/javascript.png", "assets/css3.png", "assets/react.png", "assets/tailwindCSS.png", "assets/webpack.png"],
      background: ["assets/captures/ruadis1.png", "assets/captures/ruadis2.png", "assets/captures/ruadis3.png"]
    },
    {
      id: 2,
      cardCategory: "Front End",
      cardHeading: "Petgram",
      resume: "A social network for pets? That's how it is. This social network was created to practice and replicate the Instagram social network. React.js technologies were used by applying customs hooks, lazy loading, dynamic import, useMemo, useRef, styled-components, GraphQL, testing with Cypress and more.",
      urlSite: "https://petgram-delegado.netlify.app",
      urlCode: "https://github.com/Delegado007/petgram",
      stack: ["assets/html5.png", "assets/javascript.png", "assets/react.png", "assets/styled-components.png", "assets/graphql.png", "assets/webpack.png"],
      background: ["assets/captures/petgram1.png", "assets/captures/petgram2.png", "assets/captures/petgram3.png"]
    },
    {
      id: 3,
      cardCategory: "Front End",
      cardHeading: "Pokedux",
      resume: "With Pokedux you can search for all your favorite pokemons. It is a practice and demonstration of the use of Redux in React.js. Using the PokéAPI with Axios. I also applied the use of Middlewares, request asynchrony with redux-Thunk, use of slices to separate the state of pokemons and UI, styling with styles-components, packaging with webpack and use of Redux DevTools.",
      urlSite: "https://pokedux-delegadodev.netlify.app",
      urlCode: "https://github.com/Delegado007/pokedux/tree/styles_component",
      stack: ["assets/html5.png", "assets/javascript.png", "assets/react.png", "assets/styled-components.png", "assets/webpack.png", "assets/redux.png"],
      background: ["assets/captures/pokedux1.png", "assets/captures/pokedux2.png"]
    },
    {
      id: 4,
      cardCategory: "Front End",
      cardHeading: "OyeMusica",
      resume: "First web made with React.js and Bootstrap 5, this web was created to practice form validation, loggin simulation, registration, handling of global states with Context API, useState, useEffect, local storage, routes with react-router-dom, etc.",
      urlSite: "https://oye-musica-delegado.netlify.app",
      urlCode: "https://github.com/Delegado007/OyeMusica",
      stack: ["assets/html5.png", "assets/javascript.png", "assets/css3.png", "assets/react.png", "assets/bootstrap.png", "assets/webpack.png"],
      background: ["assets/captures/oyemusica1.png", "assets/captures/oyemusica2.png"]
    }
  ];

  return (
    <Section id="list_projects">
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