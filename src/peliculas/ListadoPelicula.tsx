import {pelicula} from './peliculas.model.d';
import Peliculasindividual from './Peliculaindividual';
import css from './ListadoPelicula.module.css';
import Cargando from '../utils/Cargando';
import ListadoGenerico from '../utils/ListadoGenerico';





export default function ListadoPelicula (props: ListadoPeliculaprops) {

    
    
        return (

            <ListadoGenerico cargandoUI={<>Cargando...</>} listado={props.peliculas}>
                
                
                <div className={css.div}>
            {props.peliculas?.map(pelicula =>
            <Peliculasindividual pelicula={pelicula}
                                key={pelicula.id}
            />)}
                 </div>
        
        </ListadoGenerico>
            
        )

    }


    




interface ListadoPeliculaprops {

    peliculas?: pelicula[]
}