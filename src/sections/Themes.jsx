import WindowCard from '../components/WindowCard'
import '../styles/themes.css'

function Themes() {
    return (
        <section id="themes" className="themes">
            <div className="themes-content">
                <div className="themes-heading">
                    <h3 className="themes-subtitle">O que você vai aprender</h3>
                    <h1 className="themes-title">Temas</h1>
                </div>

                 <a className="theme-button" href="" target="_blank" rel="noreferrer">
                   Ver todos os encontros
                   <i class="fa-solid fa-arrow-right-long"></i>
                </a>
            </div>

            <div className="themes-container">
                <WindowCard title='encontro_02'headerColor='#ff007b' className="themes-window-card" >
                    <h1 className="theme-card-title">Identificação de Problemas</h1>
                    <p className="theme-card-description">Como observar problemas do dia a dia, entender suas causas e identificar oportunidades para criar soluções.</p>

                    <ul className="theme-card-list"> Você vai aprender:
                        <li className="theme-card-item"><i class="fa-solid fa-caret-right"></i>Identificação e definição de problemas</li>
                        <li className="theme-card-item"><i class="fa-solid fa-caret-right"></i>Análise de causas e necessidades</li>
                        <li className="theme-card-item"><i class="fa-solid fa-caret-right"></i>Levantamento de requisitos</li>
                    </ul>
                </WindowCard>

                <WindowCard title='encontro_07' className="themes-window-card" >
                    <h1 className="theme-card-title">Desenvolvimento Web</h1>
                    <p className="theme-card-description">Como transformar uma ideia em uma aplicação web e conhecer as principais tecnologias por trás da web.</p>

                    <ul className="theme-card-list"> Você vai aprender:
                        <li className="theme-card-item"><i class="fa-solid fa-caret-right"></i>HTML</li>
                        <li className="theme-card-item"><i class="fa-solid fa-caret-right"></i>CSS</li>
                        <li className="theme-card-item"><i class="fa-solid fa-caret-right"></i>APIs e bancos de dados</li>
                    </ul>
                </WindowCard>

                <WindowCard title='encontro_9' headerColor='#ff007b' className="themes-window-card" >
                    <h1 className="theme-card-title">Integração e Publicação</h1>
                    <p className="theme-card-description">Como conectar diferentes partes de uma aplicação e colocá-la no ar para que possam ser utilizadas.</p>

                    <ul className="theme-card-list"> Você vai aprender:
                        <li className="theme-card-item"><i class="fa-solid fa-caret-right"></i>Integração de sistemas</li>
                        <li className="theme-card-item"><i class="fa-solid fa-caret-right"></i>Deploy e hospedagem</li>
                        <li className="theme-card-item"><i class="fa-solid fa-caret-right"></i>Git e GitHub</li>
                    </ul>
                </WindowCard>
            </div>
        </section>
    )
}

export default Themes

