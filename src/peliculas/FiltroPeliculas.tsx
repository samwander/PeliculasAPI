import { Field, Form, Formik } from "formik";
import { generoDTO } from "../generos/genero.model";
import Button from "../utils/Button";


export default function FiltroPeliculas () {

    const valorInicial:filtroPeliculas={
        titulo:"",
        generoId:0,
        proximosextrenos: false,
        enCines: false

    }

    const generos:generoDTO[]=[{id:1,nombre:"Accion"},{id:2, nombre:"comedia"},{id:3, nombre:"terror"}]

    return (

        <>
        <h3>Filtrar Peliculas</h3>

        <Formik initialValues={valorInicial}
        onSubmit={valores=> console.log(valores)}
        >
            {(formikProps)=>(

                <Form>
                    <div className="form-inline">

                        <div className="form-group mb-2">
                            <label htmlFor="titulo" className="sr-only">Título</label>
                            <input type="text" 
                            className="form-control" id="titulo"
                            placeholder="Titulo de la Pelicula"
                            {...formikProps.getFieldProps("titulo")}
            
                            
                            />
                            </div>

                            <div className="form-group mx-sm-3 mb-2">

                                <select className="form-control" 
                                {...formikProps.getFieldProps("generoId")}
                                >

                                <option value="0">---Seleccione un Género---</option>
                                {generos.map(generos=> 
                                <option key={generos.id}
                                value={generos.id}>{generos.nombre}</option>
                                )}

                                </select>

                            </div>

                            <div className="form-gruop mx-sm-3 mb-2">
                                <Field className="form-check-imput" id="proximos extrenos" name="proximosextrenos" type="checkbox"/>
                                <label className="form-check-label" htmlFor="proximosextrenos">Próximos Extrenos</label>

                            </div>

                            <div className="form-gruop mx-sm-3 mb-2">
                                <Field className="form-check-imput" id="en Cines" name="enCines" type="checkbox"/>
                                <label className="form-check-label" htmlFor="En Cines">En Cines</label>

                            </div>

                            <Button className="btn btn-primary mb-2 mx-sm-3" onClick={()=> formikProps.submitForm()}>Filtrar</Button>
                            <Button className="btn btn-danger mb-2" onClick={()=>formikProps.setValues(valorInicial)}>Limpiar</Button>

                    </div>
                </Form>
            )}

        </Formik>
        </>

        
    )
}

interface filtroPeliculas{

    titulo:string;
    generoId:number;
    proximosextrenos:boolean;
    enCines:boolean;
}