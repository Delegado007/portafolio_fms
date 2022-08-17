import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;  
  justify-content: center;
  display: flex;
  margin-top: 25px;
`
export const Lista = styled.ul`
  display: inline-flex;
  padding: 0;
`
export const Li = styled.li`
  display: flex;
  align-items: center;  
  box-sizing: border-box;
  position: relative;  
  padding: 10px;
  margin: 0 10px;
  border: 2px solid #A610F7;  
  -webkit-box-reflect: below 0px linear-gradient(transparent, #0002);
  transition: 0.5s;
  transition-delay: 0s;

  &:hover{
    transition-delay: 1.5s;
    color: #000;
    box-shadow: 0 0 10px #A610F7,
    0 0 20px #A610F7,
    0 0 40px #A610F7,
    0 0 80px #A610F7,
    0 0 160px #A610F7;
  }
  &::before{
    content: '';
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 2px;
    background: #A610F7;
    box-shadow: 5px -8px 0 #A610F7,
                5px 8px 0 #A610F7;
    transition: width 0.5s, left 0.5s, height 0.5s,
    box-shadow 0.5s;
    transition-delay: 1s,0.5s,0s,0s;
  }
  &:hover::before{
    width: 60%;
    height: calc(100% + 2px);
    left: -2px;
    box-shadow: 5px 0 0 #A610F7,
                5px 0 0 #A610F7;
    transition-delay: 0s,0s,0.5s,1s;
  }
  &::after{
    content: '';
    position: absolute;
    right: -10px;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 2px;
    background: #A610F7;
    box-shadow: -5px -8px 0 #A610F7,
                -5px 8px 0 #A610F7;
    transition: width 0.5s, right 0.5s, height 0.5s,
    box-shadow 0.5s;
    transition-delay: 1s,0.5s,0s,0s;
  }
  &:hover::after{
    width: 60%;
    height: calc(100% + 2px);
    right: -2px;
    box-shadow: -5px 0 0 #A610F7,
                -5px 0 0 #A610F7;
    transition-delay: 0s,0s,0.5s,1s;
  }
`
export const Span = styled.span`
  text-align: center;
  font-size: 0.5rem;
  font-weight: 600;
  letter-spacing: 2px;  
  position: relative;
  z-index: 100;
  text-transform: uppercase;
`
