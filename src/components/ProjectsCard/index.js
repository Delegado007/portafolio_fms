import React, { useRef, useState } from "react";
import { Card, CardBackground, CardContent, CardCategory, CardHeading, CardFooter, Button } from './styles'
import { useNearScreen } from '@hoocks/useNearScreen';

// import './stylesCSS.css';
export const ProjectCard = ({ category, heading, background }) => {
  const [indexImg, setIndexImg] = useState(0);
  const [show, element] = useNearScreen()
  const handleImgChange = (index) => {
    console.log(index);
    setIndexImg(index);
  }
  console.log(show)
  console.log("ContainerProjects")
  // style={{ backgroundImage: `url(${background})` }}
  return (
    <div ref={element}>
      {show &&
        <Card className="card animate__fadeInUp">
          <CardBackground className="card__background" >
            <img src={background[indexImg]}></img>
          </CardBackground>
          <CardContent className="card__content">
            {/* <CardCategory className="card__category">{category}</CardCategory>
            <CardHeading className="card__heading">{heading}</CardHeading> */}
          </CardContent>
          <CardFooter>
            {background.map((img, index) => {
              return (
                <div>
                  <Button onClick={() => handleImgChange(index)}>
                    <h2>
                      {index + 1}
                    </h2>
                  </Button>
                </div>
              )
            })}

          </CardFooter>
        </Card>
      }
    </div>
  )
}