import styled from "styled-components"
import { myTheme } from "../../themes/themes"

export const PesquisaInput = styled.input`
    font-size: 1.2rem;
    width: 50vw;
    margin-left: 20vw;
    margin-right: 20vw;
    margin-top: 65px;
    border-style: inset;
    border-color: ${myTheme.colors.secondary.light};
`

export const NavBarDiv = styled.nav`
    width: 100%;
    padding: 3px;
    background-color: ${myTheme.colors.primary.main};
    position: fixed;
    border-style: outset;
    border-color: ${myTheme.colors.primary.main};
    display: table;

    ul {
        display: table-cell;
        text-align: center;
        vertical-align: middle;
        list-style-type: none;
    }

    li {
        float: right;
        display: inline;
    }

    li a {
        margin: 5px;
        padding: 14px;
        font-size: 1.5rem;
        color:${myTheme.colors.secondary.main};
        text-align: center;
        text-decoration: none;
    }

    li a:hover {
        color: ${myTheme.colors.primary.light};
    }

`