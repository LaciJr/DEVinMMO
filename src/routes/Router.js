import { Route, Routes } from "react-router-dom"
import { GamesPage } from "../components/pages/gamesPage"
import { NewsPage } from "../components/pages/newsPage"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<GamesPage />}/>
            <Route path="news" element={<NewsPage />}/>
        </Routes>
    )
}