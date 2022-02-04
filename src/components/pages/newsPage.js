import { GamesProvider } from "../../contexts"
import { News } from "../cards"
import { NavBar, PesquisaGames } from "../header"

export const NewsPage = () => {
    return (
        <GamesProvider url='latestnews'>
            <NavBar/>
            <PesquisaGames/>
            <News />
        </GamesProvider>
    )
}