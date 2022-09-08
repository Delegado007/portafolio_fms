import React, { useEffect, useRef, useState } from "react";
import { Card, CardBackground, CardContent, CardFooter, Button, CardOverlay, ButtonDeploy, ButtonCode, ContainerGridIconSVG } from './styles'
import { useNearScreen } from '@hoocks/useNearScreen';

export const ProjectCard = ({ id, category, heading, background, resume, urlSite, urlCode, stack }) => {
  const code = "assets/code.png";
  const rocket = "assets/rocket.png";

  const [indexImg, setIndexImg] = useState(0);
  const [show, element] = useNearScreen()

  useEffect(() => {
    const firstButtons = document.querySelector(`.button_change_img_${id}`);
    if (firstButtons !== null) {
      firstButtons.className += " active"
    }
  }, [show])

  const handleImgChange = (posicion) => {
    const buttons = document.querySelectorAll(`.button_change_img_${id}`);
    const buttonsAsArray = [...buttons];

    buttonsAsArray.map((item, index) => {
      if (posicion === index) {
        item.className += " active";
      } else {
        item.classList.remove("active");
      }
    })
    setIndexImg(posicion);
  }

  return (
    <div ref={element}>
      <Card className="card animate__fadeInUp">
        <CardBackground className="card__background" >
          <img src={background[indexImg]}></img>
        </CardBackground>
        <CardOverlay className="card__overlay" />
        <CardContent className="card__content" >
          <h1>{heading}</h1>
          <p>{resume}</p>
          <ContainerGridIconSVG>
            {stack.map((technology) => {
              return (
                <div key={technology}>
                  <img src={technology} alt="technology used" />
                </div>
              )
            })}
          </ContainerGridIconSVG>
        </CardContent>
        <CardFooter className="card__footer">
          {background.map((img, index) => {
            return (
              <div key={index}>
                <Button className={`button_change_img_${id}`} onClick={() => handleImgChange(index)}>
                  {index + 1}
                </Button>
              </div>
            )
          })}
        </CardFooter>
        <ButtonCode onClick={() => { window.open(`${urlCode}`, '_blank') }} ><img src={code}></img></ButtonCode>
        <ButtonDeploy onClick={() => { window.open(`${urlSite}`, '_blank') }} ><img src={rocket}></img></ButtonDeploy>
      </Card>
    </div>
  )
}