import { useGames } from "../../contexts"

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
        <div key={news.id}>
            <div>
                <img src={news.thumbnail} alt={news.title}></img>
            </div>
            <section>
                <h1>{news.title}</h1>
                <p>
                    {news.short_description}
                </p>
                <a href={news.article_url} target="_blank" rel="noopener noreferrer">VER NOTÍCIA</a>
            </section>
        </div>
        )
}