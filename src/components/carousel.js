import "../styles/carousel.css"
import carousel from "../assets/carousel.png"



export default function Carousel()
{
    return(
        <>
        <section id="carousel">
            <div class="texteCarousel">
                <h1  class="titreCarousel">Nos machines</h1>
            </div>
                <p class="paragrapheCarousel">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quidem.</p>
        </section>
        <section className="body">
        <div class="carousel">
        <div class="carousel-inner">
            <div class="carousel-item">
                <img src={carousel} alt=" 1"/>
                <div class="rectangle2">
                 <h1>Machine Arraw</h1>
                 </div>
                 <p>Optimisez la transformation de vos céréales avec les machines de Nicomatic Sénégal...</p>
            </div>
            <div class="carousel-item">
                <img src={carousel} alt=" 2"/>
                <div class="rectangle2">
        <h1>Machine Mangue</h1>
    </div>
        <p>Transformez vos mangues avec les machines de transformation de mangue de Nicomatic Sénégal...</p>
            </div>
            <div class="carousel-item">
                <img src={carousel} alt=" 3"/>
                <div class="rectangle2">
        <h1>Machine Cajoux</h1>
    </div>
        <p>Découvrez les machines de fabrication de jus de cajou de Nicomatic Sénégal, conçues pour ...</p>
            </div>
        </div>
    </div>
    </section>
        </>

   

   

    )
}