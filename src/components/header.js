import vrailogo from "../assets/vrailogo.png"
import "../styles/header.css"

export default function Header(){
    return (
        <>

            <header id="header">
                <img src={vrailogo} alt="logo" id="logo"/>
                <nav>
                    <ul>
                        <li>
                            Factory
                        </li>
                                <li>Description</li>
                                <li>Process</li>
                                <li>Nos realisations</li>

                    </ul>
                </nav>

                <button id="cta">Prendre rendez-vous</button>

            </header>
        </>
    )

}
