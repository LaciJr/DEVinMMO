import { useGames } from "../../contexts"
import { CardNews } from "./card.styles";

export const News = () => {
    const { gamesLista } = useGames();

    return (
        <main>
            {gamesLista.length === 0 ? 'Nenhuma notícia encontrada' : gamesLista.map((news) => <NewsCard key={news.id} news={news}/>)
            }
        </main>
    )
}

const NewsCard = ({news}) => {
    return (
        <CardNews key={news.id}>
            <div>
                <img src={news.thumbnail} alt={news.title}></img>
            </div>
            <section>
                <h3>{news.title}</h3>
                <br/>
                <p>
                    {news.short_description}...
                </p>
                <a href={news.article_url} target="_blank" rel="noopener noreferrer"><b>Ver notícia...</b></a>
            </section>
        </CardNews>
        )
}