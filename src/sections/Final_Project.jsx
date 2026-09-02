import InfoCard from '../components/InfoCard';
import WindowCard from '../components/WindowCard';
import finalProjectImage from '../assets/images/icons/icon-encantado.png';
import '../styles/final-project.css';

function FinalProject() {
    return (
        <section id="final-project" className="final-project">
            <div className="final-project-content">
                <h3 className="final-project-title">Projeto final</h3>
                <h1 className="final-project-heading">O que você vai criar</h1>
                <p className="final-project-description">Ao final do programa, você desenvolve um projeto real de tecnologia que integra os conteúdos dos encontros. Você escolhe o foco pode ser uma solução de software, um protótipo, uma pesquisa aplicada ou uma proposta de produto digital.</p>
                <p className="final-project-description">O projeto é construído ao longo das semanas do programa. Cada encontro acrescenta ferramentas e perspectivas que você usa diretamente na construção, não é uma entrega isolada, é a soma do que você aprendeu.</p>
                <p className="final-project-description">No encerramento, você apresenta para a turma e para as profissionais convidadas.</p>

                <div className="final-project-cards">
                    <InfoCard className="final-project-info-card">
                        <i class="fa-solid fa-circle"></i>
                        <h4 className="final-project-card-title">Tema Livre</h4>
                        <p className="final-project-card-description">Produto digital, protótipo, aplicação ou pesquisa, você decide o foco.</p>
                    </InfoCard>

                    <InfoCard className="final-project-info-card">
                        <i class="fa-solid fa-circle"></i>
                        <h4 className="final-project-card-title">Sem pré-requisito técnico</h4>
                        <p className="final-project-card-description">O projeto pode ser entregue com qualquer nível de programação.</p>
                    </InfoCard>

                    <InfoCard className="final-project-info-card">
                        <i class="fa-solid fa-circle"></i>
                        <h4 className="final-project-card-title">Construído durante o programa</h4>
                        <p className="final-project-card-description">Desenvolvido semana a semana com o que você vai aprendendo.</p>
                    </InfoCard>

                    <InfoCard className="final-project-info-card">
                        <i class="fa-solid fa-circle"></i>
                        <h4 className="final-project-card-title">Apresentação final</h4>
                        <p className="final-project-card-description">Conheça os requisitos e as etapas para o desenvolvimento do seu projeto final.</p>
                    </InfoCard>
                </div>
            </div>

            <div className="final-project-container">
                <WindowCard title='projeto_final.pptx' className="final-project-window-card">
                    <img src={finalProjectImage} alt="Imagem do projeto final" className="final-project-image" />

                    <div className="item-final-project-card">
                        <span className="number-card">1</span>
                        <span className="title-card">Escolha o tema do seu projeto</span>
                    </div>

                    <div className="item-final-project-card">
                        <span className="number-card">2</span>
                        <span className="title-card">Use os conteúdos dos encontros</span>
                    </div>

                    <div className="item-final-project-card">
                        <span className="number-card">3</span>
                        <span className="title-card">Crie uma interface atraente</span>
                    </div>

                    <div className="item-final-project-card">
                        <span className="number-card">4</span>
                        <span className="title-card">Apresente na cerimômia final</span>
                    </div>
                </WindowCard>
            </div>

        </section>
    )
}

export default FinalProject