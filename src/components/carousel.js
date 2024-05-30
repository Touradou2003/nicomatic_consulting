import "../styles/carousel.css"
import carousel from "../assets/carousel.png"







export default function Carousel()
{
    return(
        <>
        <section id="carousel">
            <div class="texteCarousel">
                <h1  class="titreCarousel">Nos machines</h1>
                <p class="paragrapheCarousel">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quidem.</p>
            </div>
        </section>
        <section className="body">
        <div class="carousel">
        <div class="carousel-inner">
            <div class="carousel-item">
                <img src={carousel} alt=" 1"/>
                <div class="rectangle2">
                 <h1>Machine Arraw</h1>
                 <p>Paragraphe ici.</p>
                 </div>
            </div>
            <div class="carousel-item">
                <img src={carousel} alt=" 2"/>
                <div class="rectangle2">
        <h1>Machine jus mangue</h1>
        <p>Paragraphe ici.</p>
    </div>
            </div>
            <div class="carousel-item">
                <img src={carousel} alt=" 3"/>
                <div class="rectangle2">
        <h1>Machine jus cajoux</h1>
        <p>Paragraphe ici.</p>
    </div>
            </div>
        </div>
    </div>
    </section>
        </>

   

   

    )
}