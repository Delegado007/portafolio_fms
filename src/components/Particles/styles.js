import styled from "styled-components";

export const ContainerMainSection = styled.div`
  display: block;
  width: 100%;
  height: 100vh;
  position: relative;
  min-height: 100vh;
`

export const ContainerParticles = styled.div`
  & #tsparticles{    
    left: 0;
    z-index: 200;
    top: 0;
    height: 100vh;
  }
`