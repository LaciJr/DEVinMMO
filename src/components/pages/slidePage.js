import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import { FetchGames } from "../../services/fetchGames";
import 'react-slideshow-image/dist/styles.css'

export const SlideShow = () => {
    const { id } = useParams();
    const [image, setImage] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const lista = await FetchGames(`game?id=${id}`);
            setImage(lista?.screenshots);
        })();
    }, [id])


    return (
        <div className="slide-container">
            <button onClick={() => navigate(-1)}>Voltar</button>
            <Slide>
                {image?.map((slideImages,i) => (
                    <div className="each-slide" key={i}>
                        <div style={{'backgroundImage': `url(${slideImages.image})`}}>
                            <span>{slideImages.id}</span>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}