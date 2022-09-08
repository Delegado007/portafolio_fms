import styled from "styled-components";

export const ContainerModal = styled.div`
  display: flex;
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.75);
  justify-content: center;
  align-items: center;
  &.disable {
    display: none;
    opacity: 0;
  }
  & div h1 {
    padding-right: 8px;
    color: #00E09D;    
  }  
`

export const Box = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  width: 300px;
  height: 150px;
  background-color: #272727;
`

export const ButtonClose = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #151612;
  padding: 6px;
  border-radius: 5px;
  top: 5px;
  right: 5px;
  width: 10px;
  height: 10px;
  color: #EBEBEB;
  cursor: pointer;
`