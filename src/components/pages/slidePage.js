import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Fade } from "react-slideshow-image";
import { FetchGames } from "../../services/fetchGames";
import 'react-slideshow-image/dist/styles.css'
import { myTheme } from "../../themes/themes";

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
            <button style={{backgroundColor: myTheme.colors.primary.main}} onClick={() => navigate(-1)}>Voltar</button>
            <Fade>
                {image?.map((slideImages,i) => (
                    <div className="each-fade" key={i}>
                        <div className="image-container">
                            <img src={slideImages.image} alt={slideImages.id}/>
                        </div>
                    </div>
                ))}
            </Fade>
        </div>
    )
}