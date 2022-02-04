import { useGames } from "../../contexts";

export const PesquisaGames = () => {
    const { setPesquisa } = useGames();

    return (
        <div>
            <input type="text" onChange={(e) => {setPesquisa(e.target.value);}} placeholder="Pesquisar..."/>
        </div>
    );
};