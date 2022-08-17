import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import { Burguer } from '@components/burguer/index'
import { MenuVertical } from '@components/MenuVertical'
import { MainSection } from '@components/MainSection'
import { ContainerProjects } from '@components/SectionProjects'
import particlesOptions from '../../particles.json'
import { GlobalStyles } from '@styles/GloglaStyles';

export const App = () => {
  const open = useSelector((state) => state.openMenu)
  const particlesInit = useCallback(main => {
    loadFull(main);
  }, [])

  return (
    <>
      <GlobalStyles />
      <MenuVertical open={open} />
      <div className="App">
        <Particles options={particlesOptions} init={particlesInit} />
        <Burguer open={open} />
        <MainSection />
        <ContainerProjects />
      </div>
    </>
  );
}
