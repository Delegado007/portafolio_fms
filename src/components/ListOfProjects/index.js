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
      stack: "React.js, TailwindCSS, JSON Web Tokens, ",
      background: ["assets/captures/ruadis1.png", "assets/captures/ruadis2.png", "assets/captures/ruadis3.png"]
    },
    {
      id: 2,
      cardCategory: "Front End",
      cardHeading: "Petgram",
      resume: "¿Una red social para mascotas? Así es. Esta red social fue creada con el fin de practicar y replicar la red social Instagram. Fue creada con React.js aplicando customs hooks, lazy loading, import dinámicos, useMemo, useRef, styled-components, GraphQL, testing con Cypress y mucho mas.",
      urlSite: "https://petgram-delegado.netlify.app",
      urlCode: "https://github.com/Delegado007/petgram",
      stack: "React.js, styled-components, GraphQL, Cypress, Webpack,",
      background: ["assets/captures/petgram1.png", "assets/captures/petgram2.png", "assets/captures/petgram3.png"]
    },
    {
      id: 3,
      cardCategory: "Front End",
      cardHeading: "Pokedux",
      resume: "Con Pokedux buscá todos tus pokemones favoritos. Practica y demostración del uso de Redux en React.js consumiento la PokéAPI con Axios. Tambien aplico el usos de Middlewares, asincronismo de petición con redux-Thunk, uso de slices para separar el estado de pokemons y UI, estilados con styles-components, empaquetado con webpack y uso de Redux DevTools.",
      urlSite: "https://pokedux-delegadodev.netlify.app",
      urlCode: "https://github.com/Delegado007/pokedux/tree/styles_component",
      background: ["assets/captures/pokedux1.png", "assets/captures/pokedux2.png"]
    },
    {
      id: 4,
      cardCategory: "Front End",
      cardHeading: "OyeMusica",
      resume: "Primera Web realizada con React.js y Bootstrap 5, esta web fue creada con el fin de practicar validación de formularios, simulación de loggin, registro, manejo de estados globales con Context API, useState, useEffect, etc.",
      urlSite: "https://oye-musica-delegado.netlify.app",
      urlCode: "https://github.com/Delegado007/OyeMusica",
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
            />
          ))}
        </CardGrid>
      </Container>
    </Section>
  )
}