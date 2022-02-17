import { GamesProvider } from "../../contexts"
import { News } from "../cards"
import { PesquisaGames } from "../header"

export const NewsPage = () => {
    return (
        <GamesProvider url='latestnews'>
            <PesquisaGames/>
            <News />
        </GamesProvider>
    )
}