import styled from "styled-components";
import { myTheme } from "../../../themes/themes";

export const Body = styled.div`
    padding-top: 75px;
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 180vh;
`

export const DivAll = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 65%;
`

export const DivMain = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    background-color: ${myTheme.colors.primary.main};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    border-style: outset;
    border-width: 8px;
    border-color: ${myTheme.colors.primary.main};

    p {
        text-align: justify;
    }
`

export const DivImagens = styled.div`
    height: 70%;
    display: flex;

    img {
        margin: 2px;
        width: 100%;
        border-style: inset;
        border-color: ${myTheme.colors.primary.main};
    }
`

export const DivScreenshot = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
`

export const DivMainImage = styled.div`
    display: flex;
    width: 80%;
`

export const DivSpan = styled.div`
    display: flex;
    font-size: 0.8rem;
    align-items: center;
    margin-bottom: 10px;

    span {
        width: 200px;
        text-align: center;
        background-color: ${myTheme.colors.secondary.main};
        padding: 4px;
        border: 2px inset ${myTheme.colors.primary.main};
        margin-right: 20px;
    }
`

export const DivReq = styled.div`
    justify-content: space-between;
    display: flex;
    margin-top: 10px;
    align-items: center;
    
    span {
        margin-right: 40px;
    }
`

export const DivReqAll = styled.div`
    padding: 10px;
    margin-top: 30px;
    margin-bottom: 20px;
    border-style: inset;
    border-color: ${myTheme.colors.secondary.main};
    background-color: ${myTheme.colors.secondary.main};
`
export const DivComments = styled.div`
    margin-top: 20px;
    padding: 10px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 100%;

    background-color: ${myTheme.colors.secondary.light};
    border-style: inset;
    border-color: ${myTheme.colors.secondary.main};

    Form {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        padding: 5px;
    }
`

export const DivTop = styled.div`
    margin-top: 10px;
    justify-content: space-between;
    display: flex;
    width: 100%;

    input {
        width: 20%;
    }
`

export const DivBot = styled.div`
    margin-top: 10px;
    display: flex;
    width: 100%;
    flex-direction: column;

    input {
        width: 100%;
        height: 50px;
    }
`
export const DivAllComments = styled.div`
    background-color: ${myTheme.colors.secondary.main};
    border-style: inset;
    border-color: ${myTheme.colors.secondary.main};
    margin-top: 5px;
    padding: 5px;
    display: flex;
    min-height: 80px;
    justify-content: space-between;

`
export const DivLikes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        margin: 2px;
        border: none;
    }
`