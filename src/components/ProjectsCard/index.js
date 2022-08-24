import React, { useRef } from "react";
import { Card, CardBackground, CardContent, CardCategory, CardHeading } from './styles'
import { useNearScreen } from '@hoocks/useNearScreen';
import car1 from '@assets/car1.jpg'
import car2 from '@assets/car2.jpg'
import car3 from '@assets/car3.jpg'
import car4 from '@assets/car4.jpg'

// import './stylesCSS.css';
export const ProjectCard = ({ category, heading, background }) => {
  const [show, element] = useNearScreen()
  console.log(show)
  console.log("ContainerProjects")

  return (
    <div ref={element}>
      {show &&
        <Card className="card animate__fadeInUp">
          <CardBackground className="card__background" style={{ backgroundImage: `url(${background})` }} />
          <CardContent className="card__content">
            <CardCategory className="card__category">{category}</CardCategory>
            <CardHeading className="card__heading">{heading}</CardHeading>
          </CardContent>
        </Card>
      }
    </div>
  )
}