import React, { useContext, useEffect, useRef, useState } from "react";
import { filtrarPesquisa } from "../helper/helper";
import { FetchGames } from "../services/fetchGames";

const apiContext = React.createContext();
export const useApi = () => useContext(apiContext);

export const GamesProvider = ({children, url}) => {
    const [apiLista, setLista] = useState([]);
    const games = useRef([]);
    const [pesquisa, setPesquisa] = useState('');

    useEffect(() => {
        (async () => {
            const lista = await FetchGames(url); 
            games.current = lista;
            setLista(games.current);
        })();
    }, [url])

    useEffect(() => {
        setLista(filtrarPesquisa(games.current, pesquisa));
    }, [pesquisa])

    return (
        <apiContext.Provider value ={{apiLista, games, pesquisa, setPesquisa}}>
            {children}
        </apiContext.Provider>
    );
}
