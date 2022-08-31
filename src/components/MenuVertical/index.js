import React from "react";
import { GitHub } from "@components/GitHub";
import { Linkedin } from "@components/Linkedin";
import { Menu, Lista, Li, Span, LinksSVG, ProfilePicture } from "./styles";
import profilePicture from '@assets/profile.jpeg';


export const MenuVertical = ({ open }) => {
  console.log("MenuVertical");
  return (
    <Menu open={open}>
      <ProfilePicture>
        <img src={profilePicture} alt="Profile picture"></img>
      </ProfilePicture>
      <Lista>
        <Li>
          <Span>About me</Span>
        </Li>
        <Li>
          <Span>Proyects</Span>
        </Li>
        <Li>
          <Span>Resume</Span>
        </Li>
      </Lista>
      <LinksSVG>
        <GitHub />
        <Linkedin />
      </LinksSVG>
    </Menu>
  );
};
