import { NewsProvider } from "../../contexts"
import { News } from "../cards"
import { NavBar, PesquisaNews  } from "../header"

export const NewsPage = () => {
    return (
        <NewsProvider>
            <NavBar/>
            <PesquisaNews/>
            <News />
        </NewsProvider>
    )
}