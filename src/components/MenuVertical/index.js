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
        <a href="#main_section" onClick={handleSetOpen}>
          <Li>
            <Span  >About me</Span>
          </Li>
        </a>
        <a href="#list_projects" onClick={handleSetOpen}>
          <Li>
            <Span  >Projects</Span>
          </Li>
        </a>
        <a href="#contact_me" onClick={handleSetOpen}>
          <Li>
            <Span  >Contact me</Span>
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
