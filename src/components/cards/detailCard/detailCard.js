import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { Formulario } from "./form";
import { FetchGames } from "../../../services/fetchGames";
import { Body, DivAll, DivComments, DivImagens, DivMain, DivMainImage, DivReq, DivReqAll, DivScreenshot, DivSpan } from "./detail.styles";

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
        <Body>
            <DivAll>
                <DivMain>
                    <div>
                        <h1>{game.title}</h1>
                    </div>
                    <DivImagens>
                        <DivMainImage>
                            <img src={game.thumbnail} alt={`${game.title} thumbnail`}></img>
                        </DivMainImage>
                        <DivScreenshot>
                        {game.screenshots ? game.screenshots.map((element,i) => <img onClick={()=> navigate(`slideshow/${id}`)} key={i} src={element.image} alt={`Screenshot ${i}`}/>) : null
                        }
                        </DivScreenshot>
                    </DivImagens>
                    <DivSpan>
                        <span><b>Gêneros</b><br/>{game.genre}</span>
                        <span><b>Plataforma</b><br/>{game.platform}</span>
                        <span><b>Publisher</b><br/>{game.publisher}</span>
                    </DivSpan>
                    <div>
                        <h3>Descrição</h3>
                        <p>{game.description?.replaceAll('<p style="text-align: justify;">','').replaceAll('</p>','').replaceAll('<strong>','').replaceAll('</strong>','')}</p>
                    </div>
                    {game?.minimum_system_requirements ? <Requirements list={game.minimum_system_requirements}/> : null}
                </DivMain>

                <DivComments>
                    <Formulario idGame={ id } />
                </DivComments>
            </DivAll>
        </Body>
    )
}

const Requirements = ({list}) => {
    return (
        <DivReqAll>
            Requisitos do sistema
            <DivReq>
                <span>
                    <p><b>Sistema Operacional:</b></p>
                    <p><b>Processador:</b></p>
                    <p><b>Memory:</b></p>
                    <p><b>Gráficos:</b></p>
                    <p><b>Espaço em disco:</b></p>
                </span><span>
                    {Object.keys(list).map((e,i) => <p key={i}>{list[e]}</p>)}
                </span>
            </DivReq>
        </DivReqAll>
    )
}