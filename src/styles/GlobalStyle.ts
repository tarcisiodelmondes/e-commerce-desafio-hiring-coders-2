import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 93.75%
    }

    body {
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
    }

    button {
        cursor: pointer;
    }

    a, a:link, a:visited {
        text-decoration: none;
    }

    .sr-only {
        overflow: hidden;
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
}
`;
