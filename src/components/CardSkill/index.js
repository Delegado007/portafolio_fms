import React from "react";
import { ContainerSkills, Card, Percent, Number, H2, Span, Technology, SVG, Box } from "./styles";
import { useNearScreen } from '@hooks/useNearScreen.js'

export const CardSkill = ({ urlFile, technology, percent, fill }) => {
  const [showSkill, refSkill] = useNearScreen();
  return (
    <ContainerSkills ref={refSkill}>
      {showSkill &&
        <Card className="rubberBand">
          <Box>
            <Technology>
              <img src={urlFile} alt={technology}></img>
              <Span className="change__color">{technology}</Span>
            </Technology>
            <Percent>
              <SVG number={percent}>
                <circle cx="42" cy="42" r="42"></circle>
                <circle cx="42" cy="42" r="42" style={{ stroke: `${fill}`, strokeDashoffset: `calc(264px - (264px * ${percent} ) / 100)` }} ></circle>
              </SVG>
              <Number>
                <H2 className="change__color">{percent}<Span className="change__color">%</Span></H2>
              </Number>
            </Percent>
          </Box>
        </Card>
      }
    </ContainerSkills>
  )
}
