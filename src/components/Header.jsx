import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"

const Header = ({presupuesto, setPresupuesto, isValidPrespuesto, setIsValidPresupuesto, gastos}) => {
    return (
        <header>
            <h1>Planificador de <span className="hero">Gastos</span></h1>
            {isValidPrespuesto ? (
                <ControlPresupuesto 
                    presupuesto = {presupuesto}
                    gastos = {gastos}
                />
            ) : (
                <NuevoPresupuesto 
                    presupuesto = {presupuesto}
                    setPresupuesto = {setPresupuesto}
                    setIsValidPresupuesto = {setIsValidPresupuesto}
                />
                )
            }

        </header>

    )
}

export default Header
