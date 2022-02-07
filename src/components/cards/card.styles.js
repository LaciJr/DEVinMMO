import styled from "styled-components";
import { myTheme } from "../../themes/themes";

export const Card = styled.div`
    width: 20vw;
    height: 400px;
    background-color: ${myTheme.colors.primary.main};
    margin: 1vw;
    padding: 5px;
    text-align: center;
    border-style: outset;
    border-color: ${myTheme.colors.primary.main};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        border-style: inset;
        border-color: ${myTheme.colors.primary.main};
    }
    
    p {
        text-align: justify;
        margin-top: 10px;
        font-size: 0.8rem;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
    }

    span {
        padding: 5px;
        background-color: ${myTheme.colors.secondary.main};
        font-size: 0.6rem;
        border-radius: 20px;
        border-style: solid;
        border-width: 1px;
        border-color: ${myTheme.colors.secondary.light};
    }

    &:hover {
        background-color: ${myTheme.colors.primary.light};
        border-color: ${myTheme.colors.primary.light};

        img {
            border-color: ${myTheme.colors.primary.light};
        }
    }

    section {
        display: flex;
        flex-direction: column;
        height: 50%;
        
        div {
            margin: 4px;
        }
    }
`
export const CardNews = styled.div`
    width: 90vw;
    background-color: ${myTheme.colors.primary.main};
    margin: 1vw;
    padding: 5px;
    border-style: outset;
    border-color: ${myTheme.colors.primary.main};
    display: flex;

    * {
        margin: 3px;
    }

    img {
        height: 95%;
        border-style: inset;
        border-color: ${myTheme.colors.primary.main};
    }

    &:hover {
        background-color: ${myTheme.colors.primary.light};
        border-color: ${myTheme.colors.primary.light};

        img {
            border-color: ${myTheme.colors.primary.light};
        }
    }

    a {
        color:${myTheme.colors.secondary.main};
        text-decoration: none;

        &:hover {
            color:${myTheme.colors.secondary.light};
            border: 2px inset ${myTheme.colors.secondary.light};
        }
    }

`

export const DivButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10%;
`

export const DivImagem = styled.div`
        display: flex;
        height: 50%;
`