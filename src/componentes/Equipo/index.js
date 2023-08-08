import "./Equipo.css"
import Colaborador from "../Colaborador"


const Equipo = (props) => {
    //Destructuración
    const {colorPrimario, ColorSecundario, titulo, id } = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor} = props
const obj = {
    backgroundColor: (ColorSecundario)
}

const estiloTitulo = {borderColor: colorPrimario}

    return < >
    { 
        colaboradores.length > 0 &&
        <section className="equipo" style={obj}>
        <input 
            type="color"
            className="input-color"
            value={ColorSecundario}
            onChange={(evento) =>{
                actualizarColor(evento.target.value, id)
            }}
        />
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">
            
            {
                colaboradores.map((colaborador,index) => <Colaborador
                datos={colaborador}
                key={index} 
                colorPrimario={colorPrimario}
                eliminarColaborador ={eliminarColaborador}
                /> )
            }

        </div>
    </section>
    }
</>
}

export default Equipo