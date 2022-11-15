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
          </Box>
        </Card>
      }
    </ContainerSkills>
  )
}
