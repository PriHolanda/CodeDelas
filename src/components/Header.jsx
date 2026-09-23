import '../styles/header.css'
import logo from '../assets/images/logo.png'

function Header() {
    return (
        <header>
            <div className="header-content">
                <div className="header-title">
                    <img className="header-logo" src={logo} alt="Logo da aplicação" />
                    <h1 className="header-heading">CODEDELAS</h1>
                </div>

                <div className="header-buttons">
                    <ul className="header-menu">
                        <li><a href="#hero">Início</a></li>
                        <li><a href="#about">O Projeto</a></li>
                        <li><a href="#journey">Como funciona</a></li>
                        <li><a href="#themes">Temas</a></li>
                        <li><a href="#final-project">Projeto Final</a></li>
                        <li><a href="#winners">Vencedoras</a></li>
                    </ul>
                </div>

                <a className="header-button" href="https://docs.google.com/forms/d/e/1FAIpQLSeQVCr-MbK8wlQRwILFza1Kqg7KNrivA836qImcWdqIUFp-5g/viewform?usp=sharing&ouid=110802464428585688094" target="_blank" rel="noreferrer">
                    Quero me inscrever
                </a>
            </div>
        </header>
    )
}

export default Header