

const ControlPresupuesto = ({presupuesto}) => {

    const formatNumber = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            <p>Gráfica aquí</p>
        </div>
        <div className="contenido-presupuesto">
            <p>
                <span>Presupuesto: </span> {formatNumber(presupuesto)}
            </p>

            <p>
                <span>Disponible: </span> {formatNumber(presupuesto)}
            </p>

            <p>
                <span>Gastado: </span> {formatNumber(presupuesto)}
            </p>

        </div>
    </div>
  )
}

export default ControlPresupuesto