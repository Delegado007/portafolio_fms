import React from "react";
import { Section, Container, CardGrid, Card, CardBackground, CardContent, CardCategory, CardHeading } from './styles'
import car1 from '@assets/car1.jpg'
import car2 from '@assets/car2.jpg'
import car3 from '@assets/car3.jpg'
import car4 from '@assets/car4.jpg'

// import './stylesCSS.css';
export const ContainerProjects = () => {
  console.log("ContainerProjects")
  return (
    <Section>
      <Container>
        <CardGrid className="card-grid">
          <Card className="card animate__bounceInUp">
            <CardBackground className="card__background" style={{ backgroundImage: `url(${car1})` }} />
            <CardContent className="card__content">
              <CardCategory className="card__category">Ruadis Librería</CardCategory>
              <CardHeading className="card__heading">Example Card Heading</CardHeading>
            </CardContent>
          </Card>
          <Card className="card animate__bounceInUp">
            <CardBackground className="card__background" style={{ backgroundImage: `url(${car2})` }} />
            <CardContent className="card__content">
              <CardCategory className="card__category">Petgram</CardCategory>
              <CardHeading className="card__heading">Example Card Heading 2</CardHeading>
            </CardContent>
          </Card>
          <Card className="card animate__bounceInUp">
            <CardBackground className="card__background" style={{ backgroundImage: `url(${car3})` }} />
            <CardContent className="card__content">
              <CardCategory className="card__category">Pokedux</CardCategory>
              <CardHeading className="card__heading">Example Card Heading 3</CardHeading>
            </CardContent>
          </Card>
          <Card className="card animate__bounceInUp">
            <CardBackground className="card__background" style={{ backgroundImage: `url(${car4})` }} />
            <CardContent className="card__content">
              <CardCategory className="card__category">OyeMusica</CardCategory>
              <CardHeading className="card__heading">Example Card Heading 4</CardHeading>
            </CardContent>
          </Card>
        </CardGrid>
      </Container>
    </Section>
  )
}