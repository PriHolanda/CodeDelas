import InfoCard from '../components/InfoCard';
import PETSI from '../assets/Logo-PetSi.jpg';
import UFC from '../assets/logo-ufc.png';
import '../styles/organizers.css';

function Organizers() {
    return (
        <section id="organizers" className="organizers">
            <div className="organizers-content">
                <h3 className="organizers-title">quem realiza</h3>
                <h1 className="organizers-heading">Pet-SI - UFC Campus Quixadá</h1>
                <p className="organizers-description">O CodeDelas é uma iniciativa do Programa de Educação Tutorial de Sistemas de Informação.</p>
            </div>

            <div className="organizers-container">
                <InfoCard className='organizers-card'>
                    <div className="organizers-card-container">
                        <img src={PETSI} alt="Logo Pet-SI" className="organizers-logo" />
                        <div className="organizers-information">
                            <h2 className="organizers-name">Pet-SI</h2>
                            <p className="organizers-role">Programa de Educação Tutorial do curso de Sistemas de Informação, que une ensino, pesquisa e extensão em ações voltadas à comunidade acadêmica.</p>
                        </div>
                    </div>
                </InfoCard>

                <InfoCard className='organizers-card'>
                    <div className="organizers-card-container">
                        <img src={UFC} alt="Logo UFC" className="organizers-logo" />
                        <div className="organizers-information">
                            <h2 className="organizers-name">Universidade Federal do Ceará - Campus Quixadá</h2>
                            <p className="organizers-role">Campus da UFC no Sertão Central Cearense, referencia em cursos de tecnologia e computação na regiao</p>
                        </div>
                    </div>
                </InfoCard>
            </div>
        </section>

    )
}

export default Organizers