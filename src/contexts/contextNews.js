import React, { useContext, useEffect, useRef, useState } from "react";
import { filtrarPesquisa } from "../helper/helper";
import { FetchGames } from "../services/fetchGames";

const NewsContext = React.createContext();
export const useNews = () => useContext(NewsContext);

export const NewsProvider = ({children}) => {
    const [newsLista, setNews] = useState([]);
    const news = useRef([]);
    const [pesquisa, setPesquisa] = useState('');

    useEffect(() => {
        (async () => {
            const outraLista = await FetchGames('latestnews');
            news.current = outraLista;
            setNews(news.current);
        })();
    }, [])

    useEffect(() => {
        setNews(filtrarPesquisa(news.current, pesquisa));
    }, [pesquisa])

    return (
        <NewsContext.Provider value ={{newsLista, news, pesquisa, setPesquisa}}>
            {children}
        </NewsContext.Provider>
    );
}
