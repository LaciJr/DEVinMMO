import React, { useContext, useEffect, useRef, useState } from "react";
import { filtrarPesquisa } from "../helper/helper";
import { FetchGames } from "../services/fetchGames";

const GamesContext = React.createContext();
export const useGames = () => useContext(GamesContext);

export const GamesProvider = ({children, url}) => {
    const [gamesLista, setGames] = useState([]);
    const games = useRef([]);
    const [pesquisa, setPesquisa] = useState('');

    useEffect(() => {
        (async () => {
            const lista = await FetchGames(url); 
            games.current = lista;
            setGames(games.current);
        })();
    }, [url])

    useEffect(() => {
        setGames(filtrarPesquisa(games.current, pesquisa));
    }, [pesquisa])

    return (
        <GamesContext.Provider value ={{gamesLista, games, pesquisa, setPesquisa}}>
            {children}
        </GamesContext.Provider>
    );
}
