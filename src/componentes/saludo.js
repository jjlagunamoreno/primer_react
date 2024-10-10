// Esto es código JS, Podemos declarar múltiples variables
function Saludo(props) {
    var dato = "Mañana es viernes..."
    var nombre = props.nombre;
    var anos = props.edad
    return (
        <div>
            <h1>React en Juernes</h1>
            <h2>Hola mundo!{dato}</h2>
            <h1>Su nombre es "{nombre}" y tienes {anos} años.</h1>
            <hr/>
        </div>
        
    )
}

export default Saludo;