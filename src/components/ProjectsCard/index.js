import React, { useEffect, useRef, useState } from "react";
import { Card, CardBackground, CardContent, CardFooter, Button, CardOverlay, ButtonDeploy, ButtonCode } from './styles'
import { useNearScreen } from '@hoocks/useNearScreen';
import rocket from './assets/rocket.png';
import code from './assets/code.png';


export const ProjectCard = ({ id, category, heading, background, resume, urlSite, urlCode }) => {
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
        console.log("entra");
        item.className += " active";
      } else {
        item.classList.remove("active");
      }
    })
    setIndexImg(posicion);
  }

  console.log("ContainerProjects")
  console.log(urlSite)


  return (
    <div ref={element}>
      {show &&
        <Card className="card animate__fadeInUp">
          <CardBackground className="card__background" >
            <img src={background[indexImg]}></img>
          </CardBackground>
          <CardOverlay className="card__overlay" />
          <CardContent className="card__content" >
            {/* <CardCategory className="card__category">{category}</CardCategory>
            <CardHeading className="card__heading">{heading}</CardHeading> */}
            <h1>{heading}</h1>
            <p>{resume}</p>



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
          <ButtonCode onClick={() => { window.open(`${urlCode}`, '_blank') }} ><img src={code} /></ButtonCode>
          <ButtonDeploy onClick={() => { window.open(`${urlSite}`, '_blank') }} ><img src={rocket} /></ButtonDeploy>
        </Card>
      }
    </div>
  )
}