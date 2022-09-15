import React, { useEffect, useState } from "react";
import { Container, ContainerTitle, Article, H2Title, SpanTitle, H3 } from "./styles";
import dataSkills from './../../../stack.json';
import { useNearScreen } from '@hooks/useNearScreen.js';
import { CardSkill } from "@components/CardSkill";

export const ListOfSkills = () => {
  const [show, elem] = useNearScreen();
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    setSkills(dataSkills.stack)
  }, [])
  return (
    <>
      <ContainerTitle id="skills" ref={elem}>
        {show &&
          <>
            <Article className="rubberBand">
              <H2Title>
                <SpanTitle aria-hidden="true">M</SpanTitle>
                M
                <SpanTitle aria-hidden="true">M</SpanTitle>
              </H2Title>
              <H2Title>
                <SpanTitle aria-hidden="true">y</SpanTitle>
                y&nbsp;
                <SpanTitle aria-hidden="true">y</SpanTitle>
              </H2Title>
              <H2Title>
                <SpanTitle aria-hidden="true">S</SpanTitle>
                S
                <SpanTitle aria-hidden="true">S</SpanTitle>
              </H2Title>
              <H2Title>
                <SpanTitle aria-hidden="true">k</SpanTitle>
                k
                <SpanTitle aria-hidden="true">k</SpanTitle>
              </H2Title>
              <H2Title>
                <SpanTitle aria-hidden="true">i</SpanTitle>
                i
                <SpanTitle aria-hidden="true">i</SpanTitle>
              </H2Title>
              <H2Title>
                <SpanTitle aria-hidden="true">l</SpanTitle>
                l
                <SpanTitle aria-hidden="true">l</SpanTitle>
              </H2Title>
              <H2Title>
                <SpanTitle aria-hidden="true">l</SpanTitle>
                l
                <SpanTitle aria-hidden="true">l</SpanTitle>
              </H2Title>
              <H2Title>
                <SpanTitle aria-hidden="true">s</SpanTitle>
                s
                <SpanTitle aria-hidden="true">s</SpanTitle>
              </H2Title>
            </Article>
            <Article className="backInUp">
              <H3>
                The skill percentage represents the experience and deepening on the bases of the technologies shown below.
              </H3>
            </Article>
          </>
        }
      </ContainerTitle>
      <Container>
        {skills.map((skill) => {
          return (
            <CardSkill key={skill.id} {...skill} />
          )
        })}
      </Container>
    </>
  )
}
