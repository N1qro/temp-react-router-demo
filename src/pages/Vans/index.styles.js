import styled from "styled-components";


export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: min(5rem, 10vw)
`

export const FilterText = styled.h2`
    font-weight: 500;
    margin-bottom: 0.5rem;
`

export const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: 300px 300px;
    grid-auto-flow: row;
    gap: 2rem;
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & > button {
        padding: 10px 15px;
        width: 50%;
    }

    & > a {
        all: unset;
        cursor: pointer;
    }
`