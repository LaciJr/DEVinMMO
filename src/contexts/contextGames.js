import React, { useContext, useEffect, useRef, useState } from "react";
import { filtrarPesquisa } from "../helper/helper";
import { FetchGames } from "../services/fetchGames";

const GamesContext = React.createContext();
export const useGames = () => useContext(GamesContext);

export const GamesProvider = ({children}) => {
    const [gamesLista, setGames] = useState([]);
    const games = useRef([]);
    const [pesquisa, setPesquisa] = useState('');

    useEffect(() => {
        (async () => {
            const outraLista = await FetchGames('games'); 
            games.current = outraLista;
            setGames(games.current);
        })();
    }, [])

    useEffect(() => {
        setGames(filtrarPesquisa(games.current, pesquisa));
    }, [pesquisa])

    return (
        <GamesContext.Provider value ={{gamesLista, games, pesquisa, setPesquisa}}>
            {children}
        </GamesContext.Provider>
    );
}
