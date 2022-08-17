import React from "react";
import { Container, CardGrid, Card, CardBackground, CardContent, CardCategory, CardHeading } from './styles'
// import './stylesCSS.css';
export const ContainerProjects = () => {
  console.log("ContainerProjects")
  return (
    <Container>
      <CardGrid className="card-grid">
        <Card className="card">
          <CardBackground className="card__background" />
          <CardContent className="card__content">
            <CardCategory className="card__category">Category 1</CardCategory>
            <CardHeading className="card__heading">Example Card Heading</CardHeading>
          </CardContent>
        </Card>
        <Card className="card">
          <CardBackground className="card__background" />
          <CardContent className="card__content">
            <CardCategory className="card__category">Category 2</CardCategory>
            <CardHeading className="card__heading">Example Card Heading 2</CardHeading>
          </CardContent>
        </Card>
        <Card className="card">
          <CardBackground className="card__background" />
          <CardContent className="card__content">
            <CardCategory className="card__category">Category 3</CardCategory>
            <CardHeading className="card__heading">Example Card Heading 3</CardHeading>
          </CardContent>
        </Card>
        <Card className="card">
          <CardBackground className="card__background" />
          <CardContent className="card__content">
            <CardCategory className="card__category">Category 4</CardCategory>
            <CardHeading className="card__heading">Example Card Heading 4</CardHeading>
          </CardContent>
        </Card>
        <Card className="card">
          <CardBackground className="card__background" />
          <CardContent className="card__content">
            <CardCategory className="card__category">Category 5</CardCategory>
            <CardHeading className="card__heading">Example Card Heading 5</CardHeading>
          </CardContent>
        </Card>
      </CardGrid>
    </Container>
  )
}