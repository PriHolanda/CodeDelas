import WindowCard from '../components/WindowCard'
import Logo from '../assets/images/logo.png'

import '../styles/hero.css'


function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <h2 className="hero-title">Pet-SI · ufc quixadá</h2>
                <h1 className='hero-heading'>Tecnologia também é lugar de mulher.</h1>
                <p className='hero-description'>O CodeDelas é uma iniciativa de extensão que aproxima meninas e mulheres da tecnologia por meio de conhecimento, representatividade e prática. Você assiste aos vídeos das convidadas e depois constrói o seu próprio projeto.</p>

                <div className='hero-content-buttons'>
                    <a className="hero-inscript-button" href="" target="_blank" rel="noreferrer">
                        Quero me inscrever
                    </a>

                    <a className="hero-movie-button" href="" target="_blank" rel="noreferrer">
                        Assistir aos vídeos
                    </a>
                </div>
            </div>

            <div id="hero-card-container">
                <WindowCard title="codedelas.exe" headerColor="#E91E63">
                    <div className="hero-card-content">
                        <img src={Logo} alt="Mascote CodeDelas" className="hero-mascot-img" />
                        <h3>Eu também consigo fazer isso.</h3>
                        <p>É exatamente essa a ideia.</p>
                    </div>
                </WindowCard>
            </div>
        </section>
    )
}

export default Hero