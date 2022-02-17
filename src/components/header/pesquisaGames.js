import { useApi } from "../../contexts";
import { PesquisaInput } from "./header.styles";

export const PesquisaGames = () => {
    const { setPesquisa } = useApi();

    return (
        <PesquisaInput type="text" onChange={(e) => {setPesquisa(e.target.value);}} placeholder="Pesquisar..."/>
    );
};