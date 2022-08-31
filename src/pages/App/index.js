import React from 'react';
import { useSelector } from 'react-redux';
import { Burguer } from '@components/burguer/index'
import { MenuVertical } from '@components/MenuVertical'
import { ListOfProjects } from '@components/ListOfProjects'
import { ParticlesComponent } from '@components/Particles'
import { ContactForm } from '@components/ContactForm'
import { BacgroundGradient } from '../../templates/BackgroundGradient';
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

        <BacgroundGradient>
        </BacgroundGradient>
      </div>
    </>
  );
}
