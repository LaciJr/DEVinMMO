import { Link } from "react-router-dom";
import logommo from "./logommo.png"

 
export const NavBar = () => {
     return (
         <nav>
            <img src={logommo} alt="logo"/>
            <Link to="/">Games</Link>
            <Link to="/news">Noticias</Link>
         </nav>
     )
}