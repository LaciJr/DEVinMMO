import { useNews } from "../../contexts/contextNews"

export const News = () => {
    const { newsLista } = useNews();

    return (
        <main>
            {newsLista.length === 0 ? 'Nenhuma notícia encontrada' : newsLista.map((news) => <NewsCard news={news}/>)
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
            </section>
        </div>
        )
}