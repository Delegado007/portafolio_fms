import React from "react";
import { Container, Grid } from "./styles";


export const ProjectsGrid = () => {
    return (
        <Container>
            <Grid>
                <div style={{backgroundColor: "white", gridArea: 1 / 1 / 2 / 2}}>Hola</div>
                <div style={{backgroundColor: "black", gridArea: 1 / 2 / 2 / 3}}>Hola</div>

            </Grid>
        </Container>
    )
}
