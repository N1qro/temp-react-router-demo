import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-size: 1.125rem;
        font-family: "Inter", sans-serif;
    }

    #root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
`
