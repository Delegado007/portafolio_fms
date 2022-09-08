import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Burguer } from '@components/Burguer/index'
import { MenuVertical } from '@components/MenuVertical'
import { ListOfProjects } from '@components/ListOfProjects'
import { ParticlesComponent } from '@components/Particles'
import { ContactForm } from '@components/ContactForm'
import { GlobalStyles } from '@styles/GloglaStyles';
import { SpinerLoading } from '../../components/SpinerLoading';
import jsonDataProjects from './../../../projects.json';
import { setLoading } from "../../slices/uiSlice";
import { useDispatch } from 'react-redux';
import { Skills } from '@components/Skills';

export const App = () => {
  const [loadDataProjects, setDataProjects] = useState([])
  const dispatch = useDispatch()
  const open = useSelector((state) => state.ui.openMenu)
  const loading = useSelector((state) => state.ui.loading)
  useEffect(() => {
    setDataProjects(jsonDataProjects.projects);
    setTimeout(() => {
      dispatch(setLoading(false))
    }, 2000)
  }, []);

  return (
    <>
      <GlobalStyles />
      {loading
        ? <SpinerLoading />
        : <>
          <MenuVertical open={open} />
          <div className="App">
            <ParticlesComponent />
            <Burguer open={open} />
            <ListOfProjects loadDataProjects={loadDataProjects} />
            <Skills />
            <ContactForm />
          </div>
        </>
      }
    </>
  );
}
