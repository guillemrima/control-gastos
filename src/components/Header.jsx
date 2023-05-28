import NuevoPresupuesto from "./NuevoPresupuesto"

const Header = ({presupuesto, setPresupuesto, isValidPrespuesto, setIsValidPresupuesto}) => {
    return (
        <header>
            <h1>Planificador de Gastos</h1>
            {isValidPrespuesto ? (
                <p>Control Presupuesto</p>
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
