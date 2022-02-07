import { Link } from "react-router-dom";
import { NavBarDiv } from "./header.styles";
import logommo from "./logommo.png"

 
export const NavBar = () => {
    return (
        <NavBarDiv >
            <img src={logommo} alt="logo"/>
            <ul>
                <li><Link to="/"><b>Games</b></Link></li>
                <li><Link to="/news"><b>News</b></Link></li>
            </ul>
        </NavBarDiv>
    )
}