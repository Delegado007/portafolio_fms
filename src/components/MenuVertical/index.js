import React from "react";
import { GitHub } from "@components/GitHub";
import { Linkedin } from "@components/Linkedin";
import { Menu, Lista, Li, Span, LinksSVG, ProfilePicture } from "./styles";
import profilePicture from '@assets/logo.png';
import { useDispatch } from 'react-redux';
import { setOpenMenu } from "../../slices/uiSlice";

export const MenuVertical = ({ open }) => {
  const dispatch = useDispatch();
  const handleSetOpen = () => {
    dispatch(setOpenMenu(!open));
  }

  return (
    <Menu open={open}>
      <ProfilePicture>
        <img src={profilePicture} alt="Profile picture"></img>
        <h1>Delegado_dev</h1>
      </ProfilePicture>
      <Lista>
        <a href="#main_section" onClick={handleSetOpen}>
          <Li>
            <Span >About me</Span>
          </Li>
        </a>
        <a href="#list_projects" onClick={handleSetOpen}>
          <Li>
            <Span>Projects</Span>
          </Li>
        </a>
        <a href="#skills" onClick={handleSetOpen}>
          <Li>
            <Span>My skills</Span>
          </Li>
        </a>
        <a href="https://drive.google.com/file/d/1A6Zuh8nJFGPbIBI-aTTPKZdIi-P7-x_E/view" target="_blank" onClick={handleSetOpen}>
          <Li>
            <Span>Resume</Span>
          </Li>
        </a>
        <a href="#contact_form" onClick={handleSetOpen}>
          <Li>
            <Span>Contact me</Span>
          </Li>
        </a>
      </Lista>
      <LinksSVG>
        <GitHub />
        <Linkedin />
      </LinksSVG>
    </Menu>
  );
};
