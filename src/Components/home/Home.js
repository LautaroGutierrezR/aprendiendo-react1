import ListItemHome from "./ListItemHome"
import "./Home.css";
export default function Home() {

    return(
        
        <header className="head">
            <div className="Home">
            <h1 >Proyect - Rick & Morty</h1>
            <nav className="navbar">
                <ul className="botones-home">

                    <ListItemHome dato="Characters" infoPath="/characters"/>
                    <ListItemHome dato="Contact" infoPath="/contact"/>
                    
                </ul>
            </nav>
            </div>
        </header>
    )
}