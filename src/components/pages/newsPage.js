import { NewsProvider } from "../../contexts/contextNews"
import { News } from "../cards/newsCard"
import { NavBar } from "../header/navBar"
import { PesquisaNews } from "../header/pesquisaNews"

export const NewsPage = () => {
    return (
        <NewsProvider>
            <NavBar/>
            <PesquisaNews/>
            <News />
        </NewsProvider>
    )
}