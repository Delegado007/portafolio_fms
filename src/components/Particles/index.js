import React, { useCallback } from "react";
import { MainSection } from '@components/MainSection'
import particlesOptions from './particles.json'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { ContainerMainSection, ContainerParticles } from "./styles";

export const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <ContainerMainSection>
      <MainSection />
      <ContainerParticles>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          style={{ position: "absolute", zIndex: 1, top: 0, left: 0 }}
        />
      </ContainerParticles>
    </ContainerMainSection>
  )
}