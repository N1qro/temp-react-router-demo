import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    gap: 2rem;

    margin-block: 2rem;
    margin-inline: auto;
    width: min(
        100% - 4rem,
        ${props => (props.maxWidth || 1300).toString() + "px"}
    )
`

export default Container;