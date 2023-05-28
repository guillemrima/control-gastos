
const ControlPresupuesto = ({presupuesto}) => {

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('de-DE', {
            style: 'currency', currency: 'EUR' });
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <p>Grafica</p>
            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
                </p>
                <p>
                    <span>Disponible: </span> 0
                </p>
                <p>
                    <span>Gastado: </span> 0
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto
