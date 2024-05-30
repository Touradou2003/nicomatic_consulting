import "../styles/decouvrir.css"
import { Link } from "react-router-dom"



export default function Decouvrir()
{
    return(
        < >
        <h2  id="decouverte">Découvrez nos autres services</h2>
        
          <div class="container">
            <Link to="https://consulting.nicomaticsenegal.com">
        <button class="box">
            <img src="./images/consulting.png" alt=""/>
            <h1>Consulting <p>Expertise en développement de logiciels et applications, gestion de projets Big Data, sourcing industriel mondial, et ingénierie pour des solutions sur mesure et performantes.</p></h1>
            
        </button>
        </Link>
        <Link to="https://campus.nicomaticsenegal.com">
        <button class="box">
            <img src="./images/campus.png" alt=""/>
            <h1 class="titreCampus">Campus<p>Programme d'acquisition d'expertise internationale pour jeunes ingénieurs diplômés, avec des missions de deux ans chez des industriels matures, revenant ensuite renforcer notre équipe consulting.</p></h1>
        </button>
        </Link>
        <Link to="https://factory.nicomaticsenegal.com">
        <button class="box">
            <img src="./images/studio.png" alt=""/>
            <h1>Factory<p>Découvrez notre offre unique au Sénégal de fabrication sur mesure de machines de transformation agricole. Nous prenons en charge le design, la conception, la réalisation et la maintenance de machines performantes, parfaitement adaptées aux besoins de chaque client.</p></h1>
        </button>
        </Link>
    </div>
       </>
    )
}