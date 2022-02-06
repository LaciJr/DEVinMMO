import { useEffect, useReducer } from "react";
import { KEY_LOCALSTORAGE } from "./form";

export const Comentario = ({value, idGame, comment}) => {

    const reducer = (state,action) => {
        switch(action.type) {
            case 'like':
                return {...state, likes: state.likes+1}
            case 'dislike':
                return {...state, likes: state.likes-1}
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer,value)
    
    useEffect(() => {atualizaLikeStorage()},[state]);

    const atualizaLikeStorage = () => {
            const position = comment?.comments?.indexOf(value,0);
            const getComments = localStorage.getItem(KEY_LOCALSTORAGE);
            const storageComments = JSON.parse(getComments);
            const otherGameComments = storageComments.filter((item) => item.id !== idGame)
            let filteredGameComments = storageComments.find((item) => item.id === idGame)
            filteredGameComments.comments[position] = state;
            localStorage.setItem(KEY_LOCALSTORAGE,JSON.stringify([...otherGameComments, filteredGameComments]))
        }

    return (
        <div>
            <div>
                {value.name}
                <p>{value.comment}</p>
            </div>
            <div>
                <button onClick={() => dispatch({type: 'like'})}>▲</button>
                {state.likes}
                <button onClick={() => dispatch({type: 'dislike'})}>▼</button>
            </div>
        </div>
    )
}