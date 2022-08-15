import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { Burguer } from './component/burguer/index'
import { NavBar2 } from './component/NavBar2/index'
import { loadFull } from "tsparticles";
import { GlobalStyles } from './styles/GloglaStyles';
import particlesOptions from "./particles.json";
import { MenuVertical } from './component/MenuVertical'
import { MainSection } from './component/MainSection'
import { MPlusCodeLatin } from './styles/fontMPlusCode'
import { DelegadoProvider } from './context/index'
import { ProjectsGrid } from './component/ProjectsGrid'

function App() {
  console.log(MPlusCodeLatin);
  const particlesInit = useCallback(main => {
    loadFull(main);
  }, [])

  return (
    <>
      <DelegadoProvider>
        <GlobalStyles />
        <MenuVertical />
        <div className="App">
          <Particles options={particlesOptions} init={particlesInit} />
          <Burguer />
          <MainSection />
          <ProjectsGrid />
        </div>
      </DelegadoProvider>
    </>
  );
}

export { App };
