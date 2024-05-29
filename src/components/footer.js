import "../styles/footer.css"
import link from "../assets/linkedin.png"
import face from "../assets/facebook.png"
import twitter from "../assets/twitter.png"
import logo from "../assets/nico.png"



export default function Footer(){
    return(
        <>
         <div class="demi-cercle"></div>
            <section id="body">

            <footer>
        <div>
            <img src={logo} alt="Logo NICOMATIC SÉNÉGAL"></img>
            <p>Nos Contacts: 33 125 66 66 | <a href="mailto:nicomatic@gnis.sn">nicomatic@gnis.sn</a></p>
            <p>Nos Services: Dh Factory, Studio, Consulting, Campus</p>
        </div>
        <div class="social-icons">
            <img src={link} alt="LinkedIn"></img>
            <img src={face} alt="Facebook"></img>
            <img src={twitter} alt="twitter"></img>
          
        </div>
    </footer>

</section>
        </>
    );
}