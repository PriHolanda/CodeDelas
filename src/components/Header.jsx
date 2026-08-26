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
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Como funciona</a></li>
                        <li><a href="#">Conteúdos</a></li>
                        <li><a href="#">Cronograma</a></li>
                        <li><a href="#">Projetos</a></li>
                        <li><a href="#">Vencedoras</a></li>
                    </ul>
                    <a className="header-button" href="https://forms.gle/seu-link-aqui" target="_blank" rel="noreferrer">
                        Quero me inscrever
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header