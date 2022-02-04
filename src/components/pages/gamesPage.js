import { GamesProvider } from "../../contexts"
import { Games } from "../cards"
import { NavBar, PesquisaGames } from "../header"


export const GamesPage = () => {
    return (
        <GamesProvider url='games'>
            <NavBar/>
            <PesquisaGames/>
            <Games/>
        </GamesProvider>
    )
}