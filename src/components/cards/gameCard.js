import { useNavigate } from "react-router-dom";
import { useApi } from "../../contexts"
import { Card, DivButton, DivImagem } from "./card.styles";

export const Games = () => {
    const { apiLista } = useApi();

    return (
        <main>
            {apiLista.length === 0 ? 'Nenhum jogo encontrado' : apiLista.map((game) => <GameCard key={game.id} games={game}/>)
            }
        </main>
    )
}

const GameCard = ({games}) => {
    const navigate = useNavigate();
    
    return (
    <Card  key={games.id}>
        <DivImagem>
            <img src={games.thumbnail} alt={games.title}></img>
        </DivImagem>
        <section>
            <h1>{games.title}</h1>
            <div>
                <span>{games.genre}</span><span>{games.platform}</span>
            </div>
            <p>
                {games.short_description}
            </p>
        </section>
        <DivButton>
        <button onClick={() => navigate(`game/${games.id}`)}>VER DETALHES</button>
        </DivButton>
    </Card>
    )
}