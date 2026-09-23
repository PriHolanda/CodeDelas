import { Link } from "react-router-dom";
import Footer from '../../components/Footer'
import InfoCard from "../../components/InfoCard";
import EncounterCard from '../../components/EncounterCard';
import Logo from "../../assets/images/logo.png";

import { encounters } from '../../data/encounters'

import './meetings.css'

const palette = [
    { main: "#ff1a8c", tint: "#ffe6f2" },
    { main: "#5a189a", tint: "#ece8fd" },
];

function Meetings() {
    return (
        <>
            <main className="meetings-page">
                <header className="mh">
                    <div className="mh-inner">
                        <Link to="/" className="mh-brand" aria-label="Voltar para o início">
                            <img src={Logo} alt="Logo do CodeDelas" className="mh-logo" />
                            <span className="mh-name">
                                CODEDELAS
                            </span>
                        </Link>

                        <nav className="mh-nav" aria-label="Informações da página">
                            <span className="mh-item-enconters">Encontros</span>
                            <span className="mh-item-institution">PET-SI · UFC Quixadá</span>
                            <span className="mh-item-tam">{encounters.length} encontros</span>
                        </nav>
                    </div>
                </header>

                <section className="encounters-hero">
                    <div className="encounters-hero-content" >
                        <Link to="/" className="encounters-back">
                            <i className="fa-solid fa-arrow-left-long"></i>
                            Início
                        </Link>

                        <h1 className="encounters-hero-title">Encontros</h1>

                        <p className="encounters-hero-description">
                            Aqui você vai poder ter acesso aos vídeos de cada encontro, conhecer os <br /> temas abordados, a trajetória de cada convidada e tudo que precisa para <br /> desenvolver o seu projeto final.
                        </p>
                    </div>

                    <div className="encounters-container">
                        <InfoCard className="card-encounters-hero">
                            <h1 className="card-title-hero">
                                {String(encounters.length).padStart(2, "0")}
                            </h1>
                            <span className="card-subtitle-hero" >Encontros</span>
                        </InfoCard>

                        <InfoCard className="card-encounters-hero">
                            <h1 className="card-title-hero-middle">100%</h1>
                            <span className="card-subtitle-hero" >gratuito</span>
                        </InfoCard>

                        <InfoCard className="card-encounters-hero">
                            <h1 className="card-title-hero">online</h1>
                            <span className="card-subtitle-hero" >ao vivo</span>
                        </InfoCard>
                    </div>
                </section>

                <section className="encounters-list">
                    {encounters.map((encounter, index) => (
                        <EncounterCard
                            key={encounter.id}
                            encounter={encounter}
                            color={palette[index % palette.length]}
                        />
                    ))}
                </section>

                <section className="help-card" >
                    <div className="hb-wrap">
                        <InfoCard className="hb">
                            <span className="hb-icon">💬</span>

                            <div className="hb-text">
                                <strong className="hb-title">FICOU COM DÚVIDA?</strong>
                                <p className="hb-desc">
                                    Fale com a gente em{" "}
                                    <a href="mailto:petufc.quixada@gmail.com" className="hb-link hb-link--pink">
                                        petufc.quixada@gmail.com
                                    </a>{" "}
                                    ou manda uma mensagem no Instagram{" "}

                                    
                                    <a href="https://www.instagram.com/petsi.ufc/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hb-link hb-link--purple">
                                        @petsi.ufc
                                    </a>
                                </p>
                            </div>

                            <a href="mailto:petufc.quixada@gmail.com" className="hb-btn">
                                Falar com a gente
                            </a>

                        </InfoCard>
                    </div>
                </section>

                <Footer showMeetingsLink={false} />
            </main >

        </>
    )
}

export default Meetings