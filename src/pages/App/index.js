import React from 'react';
import { useSelector } from 'react-redux';
import { Burguer } from '@components/Burguer/index'
import { MenuVertical } from '@components/MenuVertical'
import { ListOfProjects } from '@components/ListOfProjects'
import { ParticlesComponent } from '@components/Particles'
import { ContactForm } from '@components/ContactForm'
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
        <ListOfProjects />
        <ContactForm />
      </div>
    </>
  );
}
