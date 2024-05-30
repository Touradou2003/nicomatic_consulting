import Decouvrir from "./components/decouvrir.js"
import Footer from "./components/footer.js"
import Etape from "./components/etape.js"
import Halo from "./components/halo.js"
import vrailogo from "../src/assets/vrailogo.png"
import "../src/App.css"


export default function App() {
  return (
    <>
      <div className="body"></div>
      <section id="body">
        <header id="header">
          <img src={vrailogo} alt="logo" id="logo" />
          <nav>
            <ul>
              <li>Factory</li>
              <a href="#Service"><li>Service</li></a>
                <a href="#Descriptio">
              <li>
                  Decouvrir
              </li>
                  </a>
                <a href="#contactez">
                <li>
                  Contact
                  </li>
                  </a>
            </ul>
          </nav>
          <button id="cta">Prendre rendez-vous</button>
        </header>
      </section>
      
      <Halo />
      <Etape id="Service" />
      <Decouvrir id="Descriptio" />
      <Footer id="contactez" />
    </>
  );
}
