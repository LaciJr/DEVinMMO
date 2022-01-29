import { GamesProvider } from "../../contexts/contextGames"
import { Games } from "../cards/gameCard"
import { NavBar } from "../header/navBar"
import { PesquisaGames } from "../header/pesquisaGames"

export const GamesPage = () => {
    return (
        <GamesProvider>
            <NavBar/>
            <PesquisaGames/>
            <Games/>
        </GamesProvider>
    )
}