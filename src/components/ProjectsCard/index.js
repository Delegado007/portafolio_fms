import React, { useEffect, useState } from "react";
import { Card, CardBackground, CardContent, CardFooter, Button, CardOverlay, ButtonDeploy, ButtonCode, ContainerGridIconSVG, StackContainer } from './styles'

export const ProjectCard = ({ id, cardHeading, background, resume, urlSite, urlCode, stack }) => {
  const code = "assets/code.png";
  const rocket = "assets/rocket.png";
  const [openMoreInfo, setOpenMoreInfo] = useState(false);
  const [indexImg, setIndexImg] = useState(0);
  const handleOpenInfo = () => {
    setOpenMoreInfo(!openMoreInfo);
  }

  useEffect(() => {
    const firstButtons = document.querySelector(`.button_change_img_${id}`);
    if (firstButtons !== null) {
      firstButtons.className += " active"
    }
  }, [])

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
    <div>
      <Card className="card animate__fadeInUp"  >
        <CardBackground className="card__background" >
          <img src={background[indexImg]}></img>
        </CardBackground>
        <CardOverlay className="card__overlay"
          open={openMoreInfo}
        >
          <button onClick={() => handleOpenInfo()}>
            {!openMoreInfo ? "More info!" : "Less info"}
          </button>
        </CardOverlay>
        <CardContent className="card__content" open={openMoreInfo} >
          <h1>{cardHeading}</h1>
          <p>{resume}</p>
          <ContainerGridIconSVG>
            {stack.map((technology) => {
              return (
                <StackContainer key={technology}>
                  <img src={technology} alt="technology used" />
                </StackContainer>
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