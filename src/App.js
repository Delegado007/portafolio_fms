import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { NavBar } from './component/NavBar/index'
import { NavBar2 } from './component/NavBar2/index'
import { loadFull } from "tsparticles";
import { GlobalStyles } from './styles/GloglaStyles';
import particlesOptions from "./particles.json";
import { MenuVertical } from './component/MenuVertical'
import { MainSection } from './component/MainSection'

function App() {
  const particlesInit = useCallback(main => {
    loadFull(main);
  }, [])

  return (
    <>
      <GlobalStyles />
      <MenuVertical />
      <div className="App">
        <Particles options={particlesOptions} init={particlesInit} />
        <MainSection />
      </div>
    </>
  );
}

export { App };
