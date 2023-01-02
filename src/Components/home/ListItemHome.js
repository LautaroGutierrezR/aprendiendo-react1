

export default function ListItemHome ({dato,otraData,info}){
  
const mostrar =()=>{
    console.log(info)
    alert(otraData)
}

    return(
       <button> <li onClick={mostrar} className="boton-inicio">
            {dato}
        </li>
        </button>
        
    )
} 
