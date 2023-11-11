import styled from "styled-components";
import wallpaper from "../../assets/home_wallpaper.jpg"

export const HomeContainer = styled.div`
    flex-grow: 1;
    background: url(${wallpaper}) no-repeat center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: #fff;
    padding: 30px 25vw;

    & a {
        margin-top: 20px;
        width: 100%;
        text-align: center;
    }
`

export const Caption = styled.h3`
    font-size: 4rem;
    line-height: 116%;
    text-shadow: 0 0 0.3em black, 1px 1px 0.5em rgb(255, 0, 0);
    margin-bottom: 22px;
`

export const Description = styled.p`
    align-self: flex-start;
    width: 70%;
    font-size: 1.5rem;
    text-shadow: 0 0 0.5em black;
`