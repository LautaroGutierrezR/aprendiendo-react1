import { Link } from "react-router-dom"
export default function Navegation(){
    return(
        <header className="navegation">
            <h5>Rick & Morty</h5>
            <nav>
                <ul>
                    <Link to="/" ><li className="itemsnav">Home</li></Link>
                   <Link to="/characters"> <li className="itemsnav">Characters</li></Link>
                   <Link to="/contacto"> <li className="itemsnav">Contact</li></Link>
                </ul>
            </nav>
        </header>
    )
}