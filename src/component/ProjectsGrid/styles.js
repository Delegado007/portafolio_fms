import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    height: 300px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;    
`

export const Container = styled.div`
    padding: 5px;
`