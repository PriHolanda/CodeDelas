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
                        <li><a href="#faq">Faq</a></li>
                    </ul>
                </div>

                <a className="header-button" href="" target="_blank" rel="noreferrer">
                    Quero me inscrever
                </a>
            </div>
        </header>
    )
}

export default Header