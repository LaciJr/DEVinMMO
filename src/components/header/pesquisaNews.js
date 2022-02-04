import { useGames } from "../../contexts";

export const PesquisaNews = () => {
    const { setPesquisa } = useGames();

    return (
        <div>
            <input type="text" onChange={(e) => {setPesquisa(e.target.value);}} placeholder="Pesquisar..."/>
        </div>
    );
};