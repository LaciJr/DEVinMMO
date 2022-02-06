import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { Formulario } from "./form";
import { FetchGames } from "../../../services/fetchGames";

export const DetailCard = () => {
    const { id } = useParams();
    const [game, setGame] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const lista = await FetchGames(`game?id=${id}`);
            setGame(lista);
        })();
    }, [id])


    return (
        <main>
            <h1>{game.title}</h1>
            <img src={game.thumbnail} alt={`${game.title} thumbnail`}></img>
            <div>
            {game.screenshots ? game.screenshots.map((element,i) => <img onClick={()=> navigate(`slideshow/${id}`)} key={i} src={element.image} alt={`Screenshot ${i}`}/>) : null
            }
            </div>
            <div>
                <span><b>Gêneros</b><br/>{game.genre}</span>
                <span><b>Plataforma</b><br/>{game.platform}</span>
            </div>
            <div>
                <h3>Descrição</h3>
                <p>{game.short_description}</p>
            </div>
            {game?.minimum_system_requirements ? <Requirements list={game.minimum_system_requirements}/> : null}
            <Formulario idGame={ id } />
        </main>
    )
}

const Requirements = ({list}) => {
    return (
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
                    {Object.keys(list).map((e,i) => <p key={i}>{list[e]}</p>)}
                </span>
            </div>
        </div>
    )
}