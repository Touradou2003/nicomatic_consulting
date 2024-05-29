import "../styles/decouvrir.css"
import campus from "../assets/campus.png"
import consulting from "../assets/consulting.png"
import studio from "../assets/studio.png"



export default function Decouvrir()
{
    return(
        <>
        <h2>Découvrez nos autres services</h2>
        
          <div class="container">
        <button class="box">
            <img src={consulting} alt=""/>
            <h1>Consulting <p>Expertise en développement de logiciels et applications, gestion de projets Big Data, sourcing industriel mondial, et ingénierie pour des solutions sur mesure et performantes.</p></h1>
            
        </button>
        <button class="box">
            <img src={campus} alt=""/>
            <h1 class="titreCampus">Campus<p>Programme d'acquisition d'expertise internationale pour jeunes ingénieurs diplômés, avec des missions de deux ans chez des industriels matures, revenant ensuite renforcer notre équipe consulting.</p></h1>
        </button>
        <button class="box">
            <img src={studio} alt=""/>
            <h1>Studio<p>Accompagnement des startups innovantes dans le développement de produits et services, stratégie d'entreprise, et mise en réseau avec des experts pendant trois ans.</p></h1>
        </button>
    </div>
       </>
    )
}