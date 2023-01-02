import Navegation from "./Navegation/Navegation"
export default function Contact(){
    return(
        <div>
        <Navegation/>
        <div className="padre-form">
        <h2>Contact</h2>
        <h3> Leave us your information so we can contact you</h3>
        <form className="row g-3">
  <div className="col-md-6">
    <div className="nye">
    <div className="cosa">
    <label htmlFor="nombre" className="form-label">Nombre</label>
    <input type="text" className="form-control" id="nombre"/>
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