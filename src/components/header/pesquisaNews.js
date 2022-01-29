import { useNews } from "../../contexts/contextNews";

export const PesquisaNews = () => {
    const { setPesquisa } = useNews;

    return (
        <div>
            <input type="text" onChange={(e) => {setPesquisa(e.target.value);}} placeholder="Pesquisar..."/>
        </div>
    );
};