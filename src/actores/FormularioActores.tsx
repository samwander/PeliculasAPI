import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";
import { actoresDTO } from "./actores.model";

export default function FormularioActores(props: formularioActoresProps){

    return(
        <Formik 
        inicialValues={props.modelo}
        onSubmit={props.onSubmit}
        >
            {(formikProps)=>(
                <Form>
                    <FormGroupText campo="nombre" label="nombre"/>
                    <Button disabled={formikProps.isSubmitting} type="submit" 
                    >Salvar</Button>
                    <Link className="btn btn-secundary" to="/actores">Cancelar</Link>
                </Form>
            )}

        </Formik>
    )
}

interface formularioActoresProps{
    modelo: actoresDTO;
     onSubmit(valores: actoresDTO, acciones:FormikHelpers<actoresDTO>): void;

}