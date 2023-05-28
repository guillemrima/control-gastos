import { useState } from "react"
import Mensaje from "./Mensaje"

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

    const [mensaje, setMensaje] = useState("")

    const handlePresupuesto = (e) => {
        e.preventDefault()

        if(!presupuesto || Number(presupuesto) < 0) {
            setMensaje("No es un presupuesto válido")

            return
        }
        setMensaje("")
        setIsValidPresupuesto(true)
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form onSubmit={handlePresupuesto} className="formulario">
                <div className="campo">
                    <label>Definir presupuesto</label>
                    <input 
                        className="nuevo-presupuesto"
                        type="number"
                        placeholder="Añade tu presupuesto"
                        value={presupuesto}
                        onChange={ e => setPresupuesto(Number(e.target.value))}
                    />
                </div>
                <input 
                    type="submit"
                    value="ANADIR"
                />

                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            </form>
        </div>
    )
}

export default NuevoPresupuesto
