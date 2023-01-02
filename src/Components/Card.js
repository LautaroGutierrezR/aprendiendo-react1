export default function Card({info}) {
    const mostrar =()=>{
        console.log(info)
    }

return(
    <div className="tarjeta">
        <img src={info.image} alt=""/>
        <h2 className="titulo-tarjeta">{info.name}</h2>
        <button className="boton-tarjeta" onClick={mostrar}>Now More...</button>
    </div>
)
}