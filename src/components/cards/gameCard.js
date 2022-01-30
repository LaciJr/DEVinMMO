import { useNavigate } from "react-router-dom";
import { useGames } from "../../contexts/contextGames"

export const Games = () => {
    const { gamesLista } = useGames();

    return (
        <main>
            {gamesLista.length === 0 ? 'Nenhum jogo encontrado' : gamesLista.map((game) => <GameCard games={game}/>)
            }
        </main>
    )
}

const GameCard = ({games}) => {
    const navigate = useNavigate();
    
    return (
    <div key={games.id}>
        <div>
            <img src={games.thumbnail} alt={games.title}></img>
        </div>
        <section>
            <h1>{games.title}</h1>
            <span>{games.genre} | {games.platform}</span>
            <p>
                {games.short_description}
            </p>
        </section>
        <button onClick={() => navigate(`game/${games.id}`)}>VER DETALHES</button>
    </div>
    )
}