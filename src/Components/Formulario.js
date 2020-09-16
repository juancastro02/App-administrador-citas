import React, {Fragment, useState} from 'react';
import uuid from 'uuid/dist/v4'

const Formulario = ({agregarCita})=>{

  const [citas, actualizarCita] = useState({
      mascota:'',
      propietario:'',
      fecha:'',
      hora:'',
      sintomas:''
  })

  const [error, mostrarError ] = useState(false)

  const CambiarEstado =(e)=>{
     actualizarCita({
         ...citas,
         [e.target.name]: e.target.value
     })
  }

  const {mascota, propietario, fecha, hora, sintomas} = citas


  const submitCita =(e)=>{
    e.preventDefault()

    if(mascota.trim() ==='' || propietario.trim() ==='' || fecha.trim() ==='' || hora.trim() ==='' ||sintomas.trim() ==='' ){
        mostrarError(true)
        return
    }
    mostrarError(false)
       citas.id= uuid()
  
    agregarCita(citas)
 
    actualizarCita({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    })

  }


    return (
        <Fragment>
            <h1>Crear cita</h1>

            {error ? <p className='alerta-error' >Todos los campos son obligatorios</p> : null }
            <form onSubmit={submitCita} >
           <label>Nombre Mascota</label>
           <input
           type='text'
           className='u-full-width'
           name='mascota'
           placeholder='Tu mascota'
           onChange={CambiarEstado}
           value={mascota}
           />
            <label>Nombre Dueño</label>
           <input
           type='text'
           className='u-full-width'
           name='propietario'
           placeholder='Nombre del dueño'
           onChange={CambiarEstado}
           value={propietario}
           />
            <label>Fecha de Ingreso</label>
           <input
           type='date'
           className='u-full-width'
           name='fecha'
           onChange={CambiarEstado}
           value={fecha}
           />
            <label>Hora</label>
           <input
           type='time'
           className='u-full-width'
           name='hora'
           onChange={CambiarEstado}
           value={hora}
           />
           <label>Sintomas</label>
           <textarea
           
           className='u-full-width'
           name='sintomas'
           onChange={CambiarEstado}
           value={sintomas}
           ></textarea>
           <button type='submit' className='u-full-width button-primary' >Enviar</button>
            </form>
        </Fragment>
    )
}

export default Formulario