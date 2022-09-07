import React, { useEffect, useState } from "react";
import { Container, ContainerTitle, Article, H2Title, SpanTitle, Card, Percent, Number, H2, Span, Technology, SVG, Box } from "./styles";
import dataSkills from './../../../stack.json'

export const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    setSkills(dataSkills.stack)
  }, [])
  console.log(skills)
  return (
    <>
      <ContainerTitle>
        <Article className="animate__rubberBand">
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
      </ContainerTitle>
      <Container id="skills">
        {skills.map(skill => {
          return (
            <Card key={skill.id}>
              <Box>
                <Technology>
                  <img src={skill.urlFile} alt={skill.technology}></img>
                  <Span className="change__color">{skill.technology}</Span>
                </Technology>
                <Percent>
                  <SVG number={skill.percent}>
                    <circle cx="42" cy="42" r="42"></circle>
                    <circle cx="42" cy="42" r="42" style={{ strokeDashoffset: `calc(264 - (264 * ${skill.percent} ) / 100)`, stroke: `${skill.fill}` }} ></circle>
                  </SVG>
                  <Number>
                    <H2 className="change__color">{skill.percent}<Span className="change__color">%</Span></H2>
                  </Number>
                </Percent>
              </Box>
            </Card>
          )
        })}
      </Container>
    </>


  )
}