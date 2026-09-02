import WindowCard from '../components/WindowCard'
import InfoCard from '../components/InfoCard'
import IconHappy from '../assets/images/icons/icon-feliz.png'
import '../styles/about.css'

function About() {
    return (
        <section id="about" className="about">
            <div className="about-content">
                <h3 className="about-title">sobre o projeto</h3>
                <h1 className="about-heading">o que é o codedelas</h1>
                <p className="about-description">Um projeto de extensão do PET-SI, na Universidade Federal do Ceará — Campus Quixadá, criado para meninas e mulheres que querem dar o primeiro passo na tecnologia ou aprofundar o que já sabem.</p>
            </div>

            <div className="about-container">
                <WindowCard title='sobre.txt' className='about-window-card' >
                    <div className="about-card-content">
                        <p>O programa acontece de forma 100% online e gratuita, com encontros ao vivo com profissionais que atuam na área. Cada encontro foca em um tema diferente da tecnologia, com aulas práticas e conteúdos que você pode acessar depois.</p>
                        <p>No final, você cria e apresenta um projeto real — algo que você construiu com o que aprendeu, do zero.</p>

                        <img src={IconHappy} alt="Mascote feliz" className="about-icon-happy" />
                    </div>
                </WindowCard>

                <div className="info-card-container">
                    <InfoCard className="about-info-card" >
                        <h1>Conhecimento</h1>
                        <p>Ensinar fundamentos reais de tecnologia com profissionais da área</p>
                    </InfoCard>

                     <InfoCard className="about-info-card" >
                        <h1>Representatividade</h1>
                        <p>Mulheres reais contanto como chegaram onde estão.</p>
                    </InfoCard>

                     <InfoCard className="about-info-card" >
                        <h1>Protagonismo</h1>
                        <p>Meninas e mulheres de 16 a 25 anos, sem necessidade de experiência prévia.</p>
                    </InfoCard>

                     <InfoCard className="about-info-card" >
                        <h1>Tecnologia</h1>
                        <p>Da curiosidade à prática: construir é o melhor jeito de aprender.</p>
                    </InfoCard>
                </div>
            </div>
        </section>
    )
}

export default About