import{BrowserRouter,Routes,Route}from "react-router-dom"
import Home from "./home/Home";
import Characters from "./Characters";
import Contact from "./Contact";

export default function Routeo(){
    return(
        <BrowserRouter>

                 <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/characters" element={<Characters/>}/>
                        <Route path="/contacto" element={<Contact/>}/>
                 </Routes>

        </BrowserRouter>
    )
}