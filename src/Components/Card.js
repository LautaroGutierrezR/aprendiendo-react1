import { useState } from "react"
export default function Card({info}) {
    const[ocultar,setOcultar]=useState(true);
    const mostrar =()=>{
        console.log(info)
        setOcultar(false)
    }
    const ocultarInfo=()=>{
        setOcultar(true)
    }

return(
    <div className="supertarjeta">
        <div className="tarjeta">
        <div className="tarjetainicial">
        <img src={info.image} alt=""/>
        <h2 className="titulo-tarjeta">{info.name}</h2>
        {ocultar?<button className="boton-tarjeta" onClick={mostrar}>Now More...</button>:""}
         </div>
        {ocultar === false?
        <div className="tarjetosky">
            <button className="boton-tarjetosky" onClick={ocultarInfo}>X</button>
            <ul>
                <li className="listatarjetosky" id="negrito">Character Status  {info.status}</li>
                <li className="listatarjetosky">Species <li className="negrita"> {info.species}</li></li>
                <li className="listatarjetosky">Origin <li className="negrita"> {info.origin.name}</li></li>
                <li className="listatarjetosky">Gender <li className="negrita">{info.gender}</li> </li>
            </ul>
        </div>:''}
        </div>
    </div>
)
}