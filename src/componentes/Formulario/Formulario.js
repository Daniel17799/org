import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) =>{

const [nombre, actualizarNombre] = useState("")
const [puesto, actualizarPuesto] = useState("")
const [foto, actualizarFoto] = useState("")
const [equipo, actualizarEquipo] = useState("")

const [titulo, actualizarTitulo] = useState("")
const [color, actualizarColor] = useState("")

const {registrarColaborador, crearEquipo} = props

        const manejarEnvio = (e) => {
            e.preventDefault()
            console.log("manejar el envio",)
            let datosAEnviar = {
                nombre,
                puesto,
                foto,
                equipo,
            }
            registrarColaborador(datosAEnviar)
        }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({ titulo, color })
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el Formulario para crear el colaborador:</h2>
            <Campo 
                titulo="Nombre"
                placeholder="Ingresar puesto..." 
                requiered
                valor={nombre}
                actualizarValor={actualizarNombre}
            /> 
            <Campo 
                titulo="Puesto"
                placeholder="Ingresar nombre..." 
                requiered
                valor={puesto}
                actualizarValor={actualizarPuesto}

            /> 
            <Campo 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto..." 
                requiered
                valor={foto}
                actualizarValor={actualizarFoto}
            /> 
            <ListaOpciones 
                valor = {equipo} 
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton texto="Crear"/>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el Formulario para crear el equipo.</h2>
            <Campo 
                titulo="Titulo"
                placeholder="Ingresar titulo..." 
                requiered
                valor={titulo}
                actualizarValor={actualizarTitulo}
            /> 
            <Campo 
                titulo="Color"
                placeholder="Ingresar el color en Hex..." 
                requiered
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton texto="Registrar equipo"/>
        </form>
    </section>
}

export default Formulario