import "../styles/decouvrir.css"
import campus from "../assets/campus.png"
import factory from "../assets/factory.png"
import studio from "../assets/studio.png"



export default function Decouvrir()
{
    return(
        <>
        <h2 id="Decouverte">Découvrez nos autres services</h2>
        
          <div class="container">
        <button class="box">
            <img src={factory} alt=""/>
            <h1>Factory</h1>
            
        </button>
        <button class="box">
            <img src={campus} alt=""/>
            <h1 class="titreCampus">Campus</h1>
        </button>
        <button class="box">
            <img src={studio} alt=""/>
            <h1>Studio</h1>
        </button>
    </div>
       </>
    )
}