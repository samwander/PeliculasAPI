import { Formik, Form, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";
import * as Yup from "yup";
import { GeneroCreacionDTO } from "./genero.model";

export default function FormularioGeneros (props: formularioGenerosProps){

    return(<Formik initialValues={props.modelo} 
    onSubmit={props.onSubmit}

        validationSchema={Yup.object({
            nombre: Yup.string().required("Este Campo es requerido").primeraLetraMayuscula()
        })}
    >
        {(fromikProps)=> (
            <Form>
            <FormGroupText campo="nombre" label="Nombre" placeholder="nombre genero"/>

            <Button disabled={fromikProps.isSubmitting}
            type="submit"> Salvar</Button>
            <Link className="btn btn-secondary" to="/generos">Cancelar</Link>
        </Form>
        )}
        

    </Formik>)
}

interface formularioGenerosProps{
    modelo: GeneroCreacionDTO;
    onSubmit(valores: GeneroCreacionDTO, accion: FormikHelpers<GeneroCreacionDTO>):void


}