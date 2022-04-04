import { useEffect, useState } from "react";
import ListadoPelicula from "./peliculas/ListadoPelicula";
import { PageDTO } from "./peliculas/peliculas.model.d";


export default function (){

    const [peliculas, setPeliculas] = useState<PageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setPeliculas({
        enCartelera: [
          {
            id: 1,
            titulo: "Spider-Man: Far from Home",
            poster:
              "https://www.muycomputer.com/wp-content/uploads/2019/05/Spider-Man-Far-From-Home-Marvel-e1557217345761.jpg",
          },

          {
            id: 2,
            titulo: "Moana",
            poster:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-U7-zar61dtOK8eiyn5rpqp-f_rSU9J8tL6wVc4YKhkIWqLM",
          },
        ],
        proximosEstrenos: [
          {
            id: 3,
            titulo: "Soul",
            poster:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlpTDboQY48WLzOcpTZ-FMy53DyYPL06WiAl9-w1_Wfv2iaNOt",
          },
        ],
      });
    }, 500);

    return () => clearTimeout(timerId);
  });


    return(
        <>
<h3>En Cartelera</h3>
              <ListadoPelicula peliculas={peliculas.enCartelera} />
              <h3>Proximos Extrenos</h3>
              <ListadoPelicula peliculas={peliculas.proximosEstrenos} />

              </>

    )
}