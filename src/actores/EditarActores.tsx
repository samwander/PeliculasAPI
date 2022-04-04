import FormularioActores from "./FormularioActores";

export default function EditarActores() {

    return (

        <>
        <h3>Editar Actores</h3>
        <FormularioActores 
        modelo={{nombre: '', fechaNacimiento: undefined}}
        onSubmit={valores =>console.log(valores)}
        />
        </>

        
    )
}