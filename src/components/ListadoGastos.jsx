import Gasto from "./Gasto"

const ListadoGastos = ({gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltrados}) => {
    console.log(filtro)
    return (
        <div className="listado-gastos contenedor">
            {
                filtro ? (
                    <>
                    <h2>{gastosFiltrados.length ? "Gastos actuales:" : "No hay gastos en esta cateroría"}</h2>
                        {gastosFiltrados.map(gasto => (
                            <Gasto 
                                key={gasto.id}
                                gasto={gasto}
                                setGastoEditar={setGastoEditar}
                                eliminarGasto={eliminarGasto}
                            /> 
                        ))}
                    </>
                ) : 
                <>
                <h2>{gastosFiltrados.length ? "Gastos actuales:" : "No hay gastos registrados"}</h2>
                    {(gastos.map(gasto => (
                        <Gasto 
                            key={gasto.id}
                            gasto={gasto}
                            setGastoEditar={setGastoEditar}
                            eliminarGasto={eliminarGasto}
                        /> 
                    )))}
                </>
            }
        </div>
    )
}

export default ListadoGastos
