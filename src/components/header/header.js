import { useGames } from "../../contexts/contextGames"

 
 export const Pesquisa = () => {
     const { setPesquisa } = useGames();

     return (
         <div>
             <input type="text" onChange={(e) => {setPesquisa(e.target.value);}} placeholder="Pesquisar..."/>
         </div>
     );
 };