import React from 'react';
import { useSelector } from 'react-redux';
import { Burguer } from '@components/burguer/index'
import { MenuVertical } from '@components/MenuVertical'
import { ContainerProjects } from '@components/SectionProjects'
import { ParticlesComponent } from '@components/Particles'


import { GlobalStyles } from '@styles/GloglaStyles';

export const App = () => {
  const open = useSelector((state) => state.openMenu)

  return (
    <>
      <GlobalStyles />
      <MenuVertical open={open} />
      <div className="App">
        <ParticlesComponent />
        <Burguer open={open} />
        <ContainerProjects />
      </div>
    </>
  );
}
