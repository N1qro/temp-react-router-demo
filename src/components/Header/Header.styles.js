import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    box-shadow: 0 0 10px black;
    padding: 36px 50px;

`

export const SiteBrand = styled(Link)`
    color: black;
    text-decoration: none;
    font-size: 2rem;
    font-weight: 900;
`

export const Navigation = styled.nav`
    display: flex;
    gap: 1rem;
`

export const StyledLink = styled(NavLink)`
    color: #222;
    text-decoration: none;

    &.active {
        text-decoration: underline;
    }
`