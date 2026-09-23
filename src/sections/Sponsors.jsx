import InfoCard from '../components/InfoCard';
import HeavyConnect from '../assets/heavyconnect.png';
import LinkCE from '../assets/linkce.png';
import '../styles/sponsors.css';
function Sponsors() {
    return (
        <section className="sponsors">
            <div className="sponsors-content">
                <h3 className="organizers-title">quem torna possível</h3>
                <h1 className="sponsors-heading">Patrocinadores</h1>
            </div>

            <div className="sponsors-container">
                <InfoCard className='sponsors-card'>
                    <img src={HeavyConnect} alt="Logo Heavy Connect" className="sponsors-logo" />

                </InfoCard>
                <InfoCard className='sponsors-card'>
                    <img src={LinkCE} alt="Logo Heavy Connect" className="sponsors-logo" />
                </InfoCard>
            </div>
        </section>
    )
}

export default Sponsors