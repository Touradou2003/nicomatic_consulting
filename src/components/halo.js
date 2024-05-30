import "../styles/halo.css"
import halo from "../assets/groupe1.jpg"
import Debut from "./debut.js"




export default function Halo()
{
    return(
        <>
        <section id="halo">
            <div class="container">
                <img src={halo} alt="Avatar" class="image"></img>
                 <div class="overlay">
                <div ><h1 class="text">Entrez dans notre fabrique d'innovation!</h1></div>
                 </div>
                </div>
        </section>
                <Debut />
            
        </>
    )
}