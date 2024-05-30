import "../styles/debut.css"
import vector from "../assets/Vector.png"



export default function Debut(){
    return(
        <>
        <section id="Description">
    <div class="rectangle">
        <div class="section">
            <div class="header">
                <img class="minilogo" src={vector} alt=""/>
                <h1 class="titre">Expertise et Innovation</h1>
            </div>
            <p>Nos équipes sont composées de professionnels expérimentés, utilisant...</p>
        </div>
        <div class="section">
            <div class="header">
                <img class="minilogo" src={vector} alt=""/>
                <h1 class="titre">Solutions Personnalisées</h1>
            </div>
            <p>Nous offrons des solutions sur mesure adaptées spécifiquement à vos besoins, assurant...</p>
        </div>
        <div class="section">
            <div class="header">
                <img class="minilogo" src={vector} alt=""/>
                <h1 class="titre">Engagement et Fiabilité</h1>
            </div>
            <p>Nous respectons les délais et les budgets, tout en maintenant un haut niveau...</p>
        </div>
    </div>
    </section>

      
    </>
    )

}