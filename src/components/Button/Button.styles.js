import styled, { css } from "styled-components"

const themes = {
    "simple": {
        "bgColor": "#FF8C38",
        "hoverColor": "#e96200"
    },
    "primary": {
        "bgColor": "#FF8C38",
        "hoverColor": "#e96200"
    },
    "secondary": {
        "bgColor": "#161616",
        "hoverColor": "#101010"
    },
    "luxury": {
        "bgColor": "#161616",
        "hoverColor": "#101010"
    },
    "rugged": {
        "bgColor": "#115E59",
        "hoverColor": "#0c4642"
    }
}

const getTheme = (variant) => themes[variant || "primary"]

export const Button = styled.button`
    color: #FFF;
    background-color: ${props => getTheme(props.variant).bgColor};
    text-decoration: none;

    padding: 10px 26px;
    font-size: 1.25rem;
    font-family: "Inter", sans-serif;
    
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: ${props => getTheme(props.variant).hoverColor};
        color: #FFEAD0;
    }

    &:active {
        background-color:${props => getTheme(props.variant).bgColor};
        color: #FFEAD0;
    }
`

export const FilterButton = styled(Button)`
    background-color: #FFEAD0;
    color: #4D4D4D;

    ${props => 
        props.IsActive &&
        css`
            background-color: ${getTheme(props.variant).bgColor};
            color: #FFEAD0;
        `
    }
`