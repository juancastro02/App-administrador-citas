import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './Components/Formulario'
import Cita from './Components/Cita'

function App() {

  let citasIniciales = JSON.parse(localStorage.getItem("citas"))
  if(!citasIniciales){
    citasIniciales=[]
  }


  const [citas, crearCitas] = useState(citasIniciales)

  useEffect(()=>{
   if(citasIniciales){
     localStorage.setItem('citas', JSON.stringify(citas))
   }else{
     localStorage.setItem('citas', JSON.stringify([]))
   }
  },[citas,citasIniciales ])



 const agregarCita = (cita)=>{
   crearCitas([
     ...citas,
     cita
   ])
 } 

 const eliminarCita = (id)=>{
   const nuevoArray = citas.filter((e)=> e.id !== id)
   crearCitas(nuevoArray)
 }

 const titulo = citas.length === 0 ? 'No hay citas': 'Administra tus citas'

  return (
    <Fragment>
    <h1>Administrador de Pacientes</h1>
    <div className='container' >
      <div  className='row' >
        <div  className='one-half column' >
          <Formulario agregarCita={agregarCita} />
        </div>
        <div  className='one-half column' >
           <h2>{titulo}</h2>
           {citas.map((cita)=>(
             <Cita
             key={cita.id}
             cita={cita}
             eliminarCita={eliminarCita}
             />
           ))}
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default App;
