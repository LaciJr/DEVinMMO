import { useEffect, useReducer } from "react";
import { DivAllComments, DivLikes } from "./detail.styles";
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

    
    useEffect(() => {
        const position = comment?.comments?.indexOf(value,0);

        const getComments = localStorage.getItem(KEY_LOCALSTORAGE);
        const storageComments = JSON.parse(getComments);

        const otherGameComments = storageComments.filter((item) => item.id !== idGame);
        let filteredGameComments = storageComments.find((item) => item.id === idGame);
        filteredGameComments.comments[position] = state;

        localStorage.setItem(KEY_LOCALSTORAGE,JSON.stringify([...otherGameComments, filteredGameComments]

    ))},[state]);

    return (
        <DivAllComments>
            <div>
                <p><b>@{value.name} disse:</b></p>
                <p>{value.comment}</p>
            </div>
            <DivLikes>
                <button onClick={() => dispatch({type: 'like'})}>▲</button>
                <p style={state.likes > 0 ? {color: 'green'} : state.likes < 0 ? {color: 'red'} : null}>{state.likes}</p>
                <button onClick={() => dispatch({type: 'dislike'})}>▼</button>
            </DivLikes>
        </DivAllComments>
    )
}