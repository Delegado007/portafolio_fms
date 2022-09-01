import styled from "styled-components";

export const Menu = styled.menu`
  width: 8rem;
  background-color: #181818;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  right: auto;
  bottom: 0;
  display: flex;
  z-index: 1001;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  @media (max-width: 670px) {
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`

export const Nav = styled.nav`
  width: 100%;  
  justify-content: center;
  display: flex;
`

export const Lista = styled.ul`
  width: 100%;
  display: flex; 
  margin: 0;
  padding: 0;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  
  @media (max-width: 670px) {
    
  }
`

export const Li = styled.li`
  color: #cfcccc; 
  width: 8rem;
  text-align: center;
  display: block;  
  line-height: 5rem;
  border-bottom: 1px solid #282828;
  position: relative;  
  font-size: 1rem;
  font-weight: bold;
  /* letter-spacing: 2px; */
  &:first-child{
    border-top: 1px solid #282828;
  }
 
  
`

export const Span = styled.span`  
  width: 8rem;
  text-align: center;
  margin: 0 auto;
  font-size: 1rem;
  font-weight: bold;
  top: 0;
  left: 0;
  text-decoration: inherit;
  color: inherit;
  cursor: auto;
  &:hover{
    color: #08fdb3;
    cursor: pointer;   
  }
  @media (max-width: 670px) {
    font-size: 1.25rem;
  } 
`


export const ProfilePicture = styled.div`
  top: 0;
  position: absolute;
  overflow: hidden;
  height: 180px;
  width: 100%;
  & img {
    width: 8rem;
    filter: contrast(1.5) grayscale(0.8) sepia(0.6);
  }
  @media (max-width: 670px) {
    display: none;
  }
  @media (max-height: 670px) {
    display: none;
  }
  `

export const LinksSVG = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  bottom: 0;
  min-width: 100%;
  min-height: 50px;
  @media (max-width: 670px) {
    max-width: 128px;
    position: relative;
    justify-content: center;    
    & svg {
      margin: 25px 20px 0;
    }
  }
  & svg {
    cursor: pointer;
    width: 30px;
    padding-bottom: 20px;
    fill: white;
  }
`


