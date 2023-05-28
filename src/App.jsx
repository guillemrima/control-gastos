import { useState } from 'react'
import Header from './components/header'
import IconoNuevoGasto from './assets/img/nuevo-gasto.svg'
import Modal from './components/Modal'

function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const handleNuevoGasto = () => {
    setModal(true)

    setTimeout (() => {
      setAnimarModal(true)
    }, 300)
  }
  return (
      <div>
        <Header 
          presupuesto = {presupuesto}
          setPresupuesto = {setPresupuesto}
          isValidPrespuesto = {isValidPresupuesto}
          setIsValidPresupuesto = {setIsValidPresupuesto}
        />
        {isValidPresupuesto && (
          <div className='nuevo-gasto'>
            <img
              src={IconoNuevoGasto}
              alt="Icono nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        )}

        {modal && 
          <Modal 
            setModal = {setModal}
            animarModal = {animarModal}
            setAnimarModal = {setAnimarModal}
          />}
      </div>
  )
}

export default App
