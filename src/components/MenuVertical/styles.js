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
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  @media (max-width: 745px) {
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    justify-content: center;
    right: 0;
    height: 100vh;
    width: 100%;    
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
  & a {
    border-bottom: 1px solid #282828;    
  }
  & a:nth-child(1) {
    border-top: 1px solid #282828;
  }
`

export const Li = styled.li`
  color: #cfcccc; 
  width: 8rem;
  text-align: center;
  display: block;  
  line-height: 3.8rem;  
  position: relative;  
  font-size: 1rem;
  font-weight: bold;  
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
    color: #fdd942;
    cursor: pointer;   
  }
  @media (max-width: 745px) {
    font-size: 1.25rem;
  } 
`


export const ProfilePicture = styled.div`
  overflow: hidden;
  height: 180px;
  width: 100%;
  & img {
    width: 8rem;
  }
  & h1 {
    text-align: center;
    font-size: 1.1rem;
    color: #fdd942;
    &::first-letter {
      font-size: 1.3rem;
      color: #e92a3b;
    }
  }
  @media (max-width: 745px) {
    margin-bottom: 20px;
    & img {
      display:block;
      margin:auto;
    }
  } 
  `

export const LinksSVG = styled.div`
  display: flex;
  justify-content: space-evenly;
  min-width: 100%;
  min-height: 50px;
  z-index: 1002;
  @media (max-width: 745px) {
    z-index: 1002;
    max-width: 128px;
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


