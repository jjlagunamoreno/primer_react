function DobleNumero() {
    var ejemplo = "Soy una variable de jueves!!!";

    const cambiarVariable = () => {
        console.log("Valor Antes: " + ejemplo);
        ejemplo = "He cambiado de VALOR!!!";
        console.log("Valor Después: " + ejemplo);
    }

    const numeroDoble = (numero) => {
        var doble = numero * 2;
        console.log(doble)
    }

    var miEstilo = {
        color: "blue",
    }

    return (<div>
        <h1>Ejemplo métodos parámetros</h1>
        <h2 style={miEstilo}>{ejemplo}</h2>
        <button onClick={() => cambiarVariable()}>Cambiar Valor Ejemplo</button>
        <button onClick={() => numeroDoble(7)}>Doble 7</button>
        <button onClick={() => numeroDoble(199)}>Doble 199</button>
        <hr />
    </div>)
}

export default DobleNumero;