import { useState } from "react"
import Navegation from "./Navegation/Navegation"
export default function Contact(){
    const[inputName,setInputName]= useState('')
    const changeInputName=(e)=>{
        setInputName(e.target.value)
       
    }
    const[incorrectCh,setIncorrectCh]=useState(false);
    const showData=()=>{
         if(inputName.length<8){
         setIncorrectCh(true)
        }
        else{ setIncorrectCh(false)

        }
    }

    return(
        <div>
        <Navegation/>
        <div className="padre-form">
        <h2 className="hcontact">Contact</h2>
        <h3 className="hleave"> Leave us your information so we can contact you</h3>
        <form className="row g-3">
  <div className="col-md-6">
    <div className="nye">
    <div className="cosa">
    <label htmlFor="nombre" className="form-label">Nombre</label>
    <input type="text" className="form-control" id="nombre" value={inputName} onChange={changeInputName} onBlur={showData}/>
    {incorrectCh === true? <p className="text-danger"> El nombre debe contener al menos 8 caracteres</p>:''}
  </div>
    <div className="cosa">
    <label htmlFor="correo" className="form-label">Email</label>
    <input type="email" className="form-control" id="correo"/>
    </div>
    </div>

    <div className="mensaje">
    <label htmlFor="mensaje" className="form-label">Mensaje</label>
    <textarea id="mensaje" className="form-control"></textarea>
    </div>
  
  
  <div class="col-12">
    <button type="submit" className="boton-contacto">Sign in</button>
  </div>
  </div>
</form>
</div>
        </div>
    )
        }