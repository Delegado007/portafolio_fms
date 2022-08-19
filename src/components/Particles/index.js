import React, { useCallback } from "react";
import { MainSection } from '@components/MainSection'
import particlesOptions from './particles.json'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { ContainerMainSection, ContainerParticles } from "./styles";

export const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <ContainerMainSection>
      <MainSection />
      <ContainerParticles>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesOptions}
          style={{ position: "absolute", zIndex: 1, top: 0, left: 0 }}
        />
      </ContainerParticles>
    </ContainerMainSection>
  )
}