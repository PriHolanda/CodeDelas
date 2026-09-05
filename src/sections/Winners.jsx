import WindowCard from '../components/WindowCard'
import medalha1 from '../assets/images/icons/medal-1.png'
import medalha2 from '../assets/images/icons/medal-2.png'
import medalha3 from '../assets/images/icons/medal-3.png'
import '../styles/winners.css'

function Winners() {
    return (
        <section id="winners" className="winners">
            <div className="winners-content">
                <h3 className="winners-title">etapa final</h3>
                <h1 className="winners-heading">as 3 equipes vencedoras</h1>
                <p className="winners-description">A cada edição, os três melhores projetos apresentados na avaliação final ganham este espaço.</p>
            </div>

            <div className="winners-container">
                <WindowCard title='1° Lugar' className='winners-window-card'>
                    <img src={medalha1} alt="1° Lugar" className="winners-image" />
                    <h3 className="title-winners-card">1° Lugar</h3>
                    <p className="description-winners-card">Descrição do projeto a ser publicada após a etapa final</p>

                    <div className="winners-informations-card">
                        <div className="winners-project">
                            <span className='heading-project'>Projeto:</span>
                            <span className='text-project'>a definir</span>
                        </div>

                        <div className="winners-project">
                            <span className='heading-project'>Integrantes:</span>
                            <span className='text-project'>a definir</span>
                        </div>
                    </div>

                    <a className="winners-button" href="" target="_blank" rel="noreferrer">Ver Projeto</a>
                </WindowCard>

                <WindowCard title='2° Lugar' className='winners-window-card'>
                    <img src={medalha2} alt="2° Lugar" className="winners-image" />
                    <h3 className="title-winners-card">2° Lugar</h3>
                    <p className="description-winners-card">Descrição do projeto a ser publicada após a etapa final</p>

                    <div className="winners-informations-card">
                        <div className="winners-project">
                            <span className='heading-project'>Projeto:</span>
                            <span className='text-project'>a definir</span>
                        </div>

                        <div className="winners-project">
                            <span className='heading-project'>Integrantes:</span>
                            <span className='text-project'>a definir</span>
                        </div>
                    </div>

                    <a className="winners-button" href="" target="_blank" rel="noreferrer">Ver Projeto</a>
                </WindowCard>

                <WindowCard title='3° Lugar' className='winners-window-card'>
                    <img src={medalha3} alt="3° Lugar" className="winners-image" />
                    <h3 className="title-winners-card">3° Lugar</h3>
                    <p className="description-winners-card">Descrição do projeto a ser publicada após a etapa final</p>

                    <div className="winners-informations-card">
                        <div className="winners-project">
                            <span className='heading-project'>Projeto:</span>
                            <span className='text-project'>a definir</span>
                        </div>

                        <div className="winners-project">
                            <span className='heading-project'>Integrantes:</span>
                            <span className='text-project'>a definir</span>
                        </div>
                    </div>

                    <a className="winners-button" href="" target="_blank" rel="noreferrer">Ver Projeto</a>
                </WindowCard>
            </div>
        </section>
    )
}

export default Winners