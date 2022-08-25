import React, { useRef } from "react";
import { Card, CardBackground, CardContent, CardCategory, CardHeading } from './styles'
import { useNearScreen } from '@hoocks/useNearScreen';

// import './stylesCSS.css';
export const ProjectCard = ({ category, heading, background }) => {
  const [show, element] = useNearScreen()
  console.log(show)
  console.log("ContainerProjects")
  // style={{ backgroundImage: `url(${background})` }}
  return (
    <div ref={element}>
      {show &&
        <Card className="card animate__fadeInUp">
          <CardBackground className="card__background" >
            <img src={background[0]}></img>
          </CardBackground>
          <CardContent className="card__content">
            <CardCategory className="card__category">{category}</CardCategory>
            <CardHeading className="card__heading">{heading}</CardHeading>
          </CardContent>
        </Card>
      }
    </div>
  )
}