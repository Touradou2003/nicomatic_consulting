import "../styles/halo.css"
import halo from "../assets/groupe1.jpg"
import Debut from "./debut.js"




export default function Halo()
{
    return(
        <>
        <section id="halo">
            <div className="container">
                <img src={halo} alt="Avatar" class="image"></img>
                 <div class="overlay">
                <div ><h1 class="text">Nicomatic Sénégal Consulting : Votre Partenaire pour des Solutions Industrielles Innovantes</h1></div>
                <p>Chez Nicomatic Sénégal, nous offrons des services de consulting spécialisés pour répondre aux besoins complexes et variés de nos clients industriels. Notre expertise se décline en trois domaines clés : Informatique, Ingénierie Électro Mécanique, et Achat Industriel.</p>
                 </div>
                </div>
        </section>
                <Debut />
            
        </>
    )
}