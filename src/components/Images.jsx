import styled from "styled-components"

export const MediumImage = styled.img`
    width: min(100% - 2rem, 800px);
`

export const SmallImage = styled.img`
    width: min(100% - 2rem, 250px);
`

export const SquareImage = styled.img`
    width: ${props => (props.Size || 250).toString() + "px"};
    height: ${props => (props.Size || 250).toString() + "px"};
`