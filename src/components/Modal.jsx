import { useState } from 'react'
import Mensaje from './Mensaje'
import CerrarModal from '../assets/img/cerrar.svg'

const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto}) => {

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] =useState('')
    const [mensaje, setMensaje] = useState('')

    const ocultarModal = () => {
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if([nombre, cantidad, categoria].includes('')){
            setMensaje("Todos los campos son necesarios")
            setTimeout (() => {
            setMensaje("")
            }, 3000)
            return
        }

        guardarGasto({nombre, cantidad, categoria})
    }

    return (
    <div className="modal">
        <div className="cerrar-modal">
            <img 
                src={CerrarModal} 
                alt="Cerrar modal"
                onClick={ocultarModal}
            />
        </div>

        <form 
                onSubmit={handleSubmit}
                className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
            <legend>Nuevo Gasto</legend>
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            <div className='campo'>
                <label htmlFor='nombre'>Nombre Gasto</label>
                <input
                    id='nombre'
                    value={nombre}
                    type='text'
                    placeholder='Añade el nombre del Gasto'
                    onChange={e => setNombre(e.target.value)}
                />
            </div>
            <div className='campo'>
                <label htmlFor='cantidad'>Cantidad</label>
                <input
                    id='cantidad'
                    type='text'
                    placeholder='ej. 20'
                    value={cantidad}
                    onChange={ e => {setCantidad(Number(e.target.value))}}
                />
            </div>
            <div className='campo'>
                <label htmlFor='categoria'>Categoria</label>
                <select
                    id='categoria'
                    value={categoria}
                    onChange={e => setCategoria(e.target.value)}
                >
                    <option value="">-- Selecciona --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos">Gastos varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                </select>
            </div>
            <input
                type='submit'
                value='AÑADIR GASTO'
            />
        </form>
    </div>
    )
}

export default Modal
