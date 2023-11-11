import { styled } from "styled-components";
import Container from "../../components/Container";


export const CardContainer = styled.div`
    color: black;
    text-decoration: none;

    display: grid;
    grid-template-columns: 100px 300px;
    grid-auto-flow: row;
    grid-auto-rows: 100px;
    padding: 1rem;
`

export const CardInfoContainer = styled.div`
    background-color: #eed8aa;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding-block: 10px;
`

export const OrangeContainer = styled(Container)`
    width: fit-content;
    max-width: 35%;
    padding: 15px;
    background-color: #deb45c;
    gap: 0;
`