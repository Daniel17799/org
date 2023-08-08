import { useState } from 'react';
import { v4 as uuidv4} from "uuid"
import './App.css';
import Header from "./componentes/Header/Header"
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
const [mostarFormulario, actualizarMostrar] = useState(true)
const [colaboradores, actualizarColaboradores] = useState([{
      id:uuidv4(),
      equipo:"Front End",
      foto:"https://github.com/harlandlohora.png",
      nombre:"Harland Lohora",
      puesto: "Instructor",
    },
    {
    id:uuidv4(),
    equipo:"Programación",
    foto:"https://github.com/harlandlohora.png",
    nombre:"Harland Lohora",
    puesto: "Instructor",
  },
  {
    id:uuidv4(),
    equipo:"Devops",
    foto:"https://github.com/harlandlohora.png",
    nombre:"Harland Lohora",
    puesto: "Instructor",
  },
  {
    id:uuidv4(),
    equipo:"Ux y Diseño",
    foto:"https://github.com/harlandlohora.png",
    nombre:"Harland Lohora",
    puesto: "Instructor",
  }
  ])

  const [equipos, actualizarEquipos] = useState([
    {
      id:uuidv4(),
      titulo:"Programación",
      colorPrimario:"#57C278",
      ColorSecundario:"#D9F7E9"
    },
    {
      id:uuidv4(),
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      ColorSecundario:"#E8F8FF",
    },
    {
      id:uuidv4(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      ColorSecundario:"#F0F8E2",
    },
    {
      id:uuidv4(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      ColorSecundario:"#FDE7E8",
    },
    {
      id:uuidv4(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      ColorSecundario:"#FAE9F5",
    },
    {
      id:uuidv4(),
      titulo:"Móvil",
      colorPrimario:"#FFBA05",
      ColorSecundario:"#FFF5D9",
    },
    {
      id:uuidv4(),
      titulo:"Innovación y Gestión",
      colorPrimario:"#FF8A29",
      ColorSecundario:"#FFEEDF",
    },
])

  //Ternario --> condicion ? SeMuestra :NoSeMuestra
  
  const cambiarMostrar = () => {
    actualizarMostrar(!mostarFormulario)
  }

  //Registrar colaborador

const registrarColaborador = (colaborador) =>{
  console.log("Nuevo colaborador ", colaborador)
  //Spread operator
  actualizarColaboradores([...colaboradores, colaborador])

}

//Eliminar colaborador
const eliminarColaborador = (id) =>{
  console.log("eliminarColaborador", id)
  const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
  actualizarColaboradores(nuevosColaboradores)
}

//Actualizar color de equipo
const actualizarColor =(color, id) =>{
  console.log("Actualizar: ", color, id)
  const equiposActualizados = equipos.map((equipo) =>{
    if(equipo.id === id){
      equipo.colorPrimario = color
    }
    return equipo
  })

  actualizarEquipos(equiposActualizados)
}

//Crear equipo
const crearEquipo = (nuevoEquipo) => {
  console.log(nuevoEquipo)
  actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuidv4() }])
}

  //Ternario --> condicion ? seMuestra: noSeMuestra  linea 21
  //CortoCircuito --> condicion && seMuestra linea 22
  return (
    <div>
      <Header />
      {/*mostarFormulario === true ? <Formulario /> : < ></>*/} 

      {mostarFormulario && <Formulario 
      equipos={equipos.map((equipo) => equipo.titulo)}
      registrarColaborador={registrarColaborador}
      crearEquipo={crearEquipo}
        />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo) => <Equipo
        datos={equipo} 
        key={equipo.titulo}
        colaboradores = {colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}  
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}

      />)
      }
      <Footer />
      
    </div>
    
  );
}



export default App;
