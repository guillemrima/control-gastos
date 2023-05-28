import { useState } from 'react'
import Header from './components/header'



function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPrespuesto, setIsValidPresupuesto] = useState(false)

  return (
      <div>
        <Header 
          presupuesto = {presupuesto}
          setPresupuesto = {setPresupuesto}
          isValidPrespuesto = {isValidPrespuesto}
          setIsValidPresupuesto = {setIsValidPresupuesto}
        />
      </div>
  )
}

export default App
