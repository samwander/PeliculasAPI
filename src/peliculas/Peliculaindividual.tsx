import { pelicula } from "./peliculas.model.d";
import css from './PeliculaIndividual.module.css';

export default function Peliculasindividual(props: peliculaIndividualProps){

    const construirlink=()=> `/pelicula/{props.pelicula.id}`

    return (
        <div className={css.div}>
            <a href={construirlink()}>
                <img src={props.pelicula.poster} alt="Poster" />
            </a>
            
            <p>
                <a href={construirlink()}>{props.pelicula.titulo}</a>
            </p>
        </div>
    )


}

interface peliculaIndividualProps{

    pelicula: pelicula;
}