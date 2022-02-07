import { createGlobalStyle } from "styled-components";
import { myTheme } from "./themes";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
}

html {
    background-color: ${myTheme.colors.secondary.main};
    font-size: 16px;
    color: white;
}

body {
    align-items: center;
    width: 100%;
    height: 100%;
    justify-content: center;
}

input {
    font-family: 'Montserrat', sans-serif;
    background-color: ${myTheme.colors.secondary.main};
    color: white;
}

main {
    margin-left: 4vw;
    margin-right: 4vw;
    display: flex;
    flex-wrap: wrap;
}

button {
    cursor: pointer;
    font-size: 0.7rem;
    background-color: ${myTheme.colors.secondary.main};
    color: white;
    padding: 5px;
    border-radius: 20px;
    border-style: solid;
    border-width: 1px;
    border-color: ${myTheme.colors.secondary.light};

    &:hover {
        background-color: ${myTheme.colors.secondary.light};
    }
}
`