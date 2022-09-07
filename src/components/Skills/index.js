import React, { useEffect, useState } from "react";
import { Container, Card, Percent, Number, H2, Span, Technology, SVG, Box } from "./styles";
import dataSkills from './../../../stack.json'

export const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    setSkills(dataSkills.stack)
  }, [])
  console.log(skills)
  return (
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

  )
}