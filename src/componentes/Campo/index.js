import { useState } from "react"
import "./Campo.css"

const Campo = (props) => {


//Destructuracion
const {type = "text"} = props

const ManejarCambio = (e) =>{
    props.actualizarValor(e.target.value)
}

    return <div className={`campo campo-${type}`}>
        <label>{ props.titulo }</label>
        <input 
            placeholder={props.placeholder} 
            required={props.requiered} 
            value={props.valor}
            onChange={ManejarCambio}
            type = {type}
        />
    </div>
}

export default Campo