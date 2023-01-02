export default function Filters({nombreFiltro,datoFiltro,muestraValor}) {
    return(
        <div>
        
        <section className="filtros">
        <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id={datoFiltro} value={datoFiltro} onChange={muestraValor}/>
  <label className="form-check-label" htmlFor={nombreFiltro} >{nombreFiltro}</label>
</div>
   </section> 
   </div>)
}