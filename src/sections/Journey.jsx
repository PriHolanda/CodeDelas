import InfoCard from '../components/InfoCard';
import '../styles/journey.css';

function Journey() {
    return (
        <section id="journey" className="journey">
            <div className="journey-content">
                <h3 className="journey-title">como funciona</h3>
                <h1 className="journey-heading">Sua jornada em 5 etapas</h1>
                <p className="journey-description">Do primeiro contato com a aréa até a apresentação do seu projeto.</p>
            </div>

            <div className="journey-container">
                <InfoCard className="journey-info-card" >
                    <h1 className="info-card-number">01</h1>
                    <h3 className="info-card-title">Inscrição</h3>
                    <p className="info-card-description">Preencha o formulário de inscrição com suas informações. Não precisa ter experiência em tecnologia.</p>
                </InfoCard>

                <InfoCard className="journey-info-card" >
                    <h1 className="info-card-number">02</h1>
                    <h3 className="info-card-title">Conteúdos em vídeo</h3>
                    <p className="info-card-description">Após cada encontro ao vivo, você recebe os vídeos das aulas para assistir no seu próprio ritmo.</p>
                </InfoCard>

                <InfoCard className="journey-info-card" >
                    <h1 className="info-card-number">03</h1>
                    <h3 className="info-card-title">Aprendizado</h3>
                    <p className="info-card-description">Assista aos vídeos das convidadas no seu ritmo, quantas vezes quiser.</p>
                </InfoCard>

                <InfoCard className="journey-info-card" >
                    <h1 className="info-card-number">04</h1>
                    <h3 className="info-card-title">Crie</h3>
                    <p className="info-card-description">Com os conteúdos aprendidos, você escolhe um tema e desenvolve seu projeto final com autonomia.</p>
                </InfoCard>

                <InfoCard className="journey-info-card" >
                    <h1 className="info-card-number">05</h1>
                    <h3 className="info-card-title">Apresente</h3>
                    <p className="info-card-description">Compartilhe o resultado na etapa final de apresentação. É o seu momento de mostrar o que construiu.</p>
                </InfoCard>

            </div>


        </section>
    )
}

export default Journey