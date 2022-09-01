import React from "react";
import { GitHub } from "@components/GitHub";
import { Linkedin } from "@components/Linkedin";
import { Menu, Lista, Li, Span, LinksSVG, ProfilePicture } from "./styles";
import profilePicture from '@assets/profile.jpeg';
import { useDispatch } from 'react-redux';
import { setOpenMenu } from '@actions';

export const MenuVertical = ({ open }) => {
  console.log("MenuVertical");
  const dispatch = useDispatch();
  const handleSetOpen = () => {
    dispatch(setOpenMenu(!open));
  }
  return (
    <Menu open={open}>
      <ProfilePicture>
        <img src={profilePicture} alt="Profile picture"></img>
      </ProfilePicture>
      <Lista>
        <Li>
          <Span href="#main_section" onClick={handleSetOpen} >About me</Span>
        </Li>
        <Li>
          <Span href="#list_projects" onClick={handleSetOpen} >Proyects</Span>
        </Li>
        <Li>
          <Span href="#contact_form" onClick={handleSetOpen} >Contact me</Span>
        </Li>
      </Lista>
      <LinksSVG>
        <GitHub />
        <Linkedin />
      </LinksSVG>
    </Menu>
  );
};
