export interface pelicula{

    id:number;
    titulo:string;
    poster:string;
}

export interface PageDTO{
enCartelera?: pelicula[];
proximosEstrenos?: pelicula[];
}


