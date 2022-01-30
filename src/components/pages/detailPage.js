import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useState } from "react/cjs/react.development";
import { FetchGames } from "../../services/fetchGames";
import { NavBar } from "../header/navBar";

export const DetailPage = () => {
    const { id } = useParams();
    const [game, setGame] = useState({});

    useEffect(() => {
        (async () => {
            const lista = await FetchGames(`game?id=${id}`); 
            setGame(lista);
        })();
    }, [id])

    return (
        <>
            <NavBar />
            <main>
                <h1>{game.title}</h1>
                <img src={game.thumbnail} alt={`${game.title} thumbnail`}></img>
                <div>
                {/* {game.screenshots.length === 0 ? null : game.screenshots.map((game,i) => <img src={game.image} alt={`Screenshot ${i}`}/>)
                } */}
                </div>
                <div>
                    <span><b>Gêneros</b><br/>{game.genre}</span>
                    <span><b>Plataforma</b><br/>{game.platform}</span>
                </div>
                <div>
                    <h3>Descrição</h3>
                    <p>{game.short_description}</p>
                </div>
                <div>
                    Requisitos do sistema
                    <div>
                        <span>
                            <p><b>Sistema Operacional:</b></p>
                            <p><b>Processador:</b></p>
                            <p><b>Memory:</b></p>
                            <p><b>Gráficos:</b></p>
                            <p><b>Espaço em disco:</b></p>
                        </span><span>
                            <p>{game.minimum_system_requirements.os}</p>
                            <p>{game.minimum_system_requirements.processor}</p>
                            <p>{game.minimum_system_requirements.memory}</p>
                            <p>{game.minimum_system_requirements.graphics}</p>
                            <p>{game.minimum_system_requirements.storage}</p>
                        </span>
                    </div>
                </div>
            </main>
        </>
    )

}