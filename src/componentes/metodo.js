function Metodos() {
    //NOS DECLARAMOS UN METODO PARA
    //MOSTRAR UN MENSAJE POR CONSOLA
    const mostrarMensaje = () => {
        console.log("Botón pulsado")
    }

    return (<div>
        <h1>Ejemplo métodos React</h1>
        <button onClick={() => mostrarMensaje()}>Pulsar para cosas...</button>
        <hr />
    </div>)
}

export default Metodos;