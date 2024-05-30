import Decouvrir from "./components/decouvrir.js"
import Carousel from "./components/carousel.js"
import Header from "./components/header.js"
import Footer from "./components/footer.js"
import Etape from "./components/etape.js"
import Halo from "./components/halo.js"


export default function App() {
  return (
    <>
    <div class="body"></div>
          <Header />
          <Halo />
          <Etape />
          <Carousel />
          <Decouvrir />
          <Footer />

    </>

    
  )
}
