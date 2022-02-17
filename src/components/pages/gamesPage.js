import { GamesProvider } from "../../contexts"
import { Games } from "../cards"
import { PesquisaGames } from "../header"


export const GamesPage = () => {
    return (
        <GamesProvider url='games'>
            <PesquisaGames/>
            <Games/>
        </GamesProvider>
    )
}