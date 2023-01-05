import ListItemHome from "./ListItemHome"
import "./Home.css";
import { Link } from "react-router-dom";
export default function Home() {

    return(
        
        <header className="head">
            <div className="Home">
            <h1 >Proyect - Rick & Morty</h1>
            <nav className="navbar">
                <ul className="botones-home">

                   <Link to="/characters"> <ListItemHome dato="Characters" infoPath="/characters"/></Link>
                   <Link to="/contacto"> <ListItemHome dato="Contact" infoPath="/contact"/> </Link>
                    
                </ul>
            </nav>
            </div>
        </header>
    )
}