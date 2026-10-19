import HeavyConnect from '../assets/images/heavyconnect.png';
import LinkCE from '../assets/images/linkce.png';
import Santher from '../assets/images/logo-santher.png';
import Solfy from '../assets/images/logo-solfy.svg';
import '../styles/sponsors.css';
function Sponsors() {
    return (
        <section className="sponsors">
            <div className="sponsors-content">
                <h3 className="organizers-title">quem torna possível</h3>
                <h1 className="sponsors-heading">Patrocinadores</h1>
            </div>

            <div className="sponsors-container">
                <img src={HeavyConnect} alt="Logo Heavy Connect" className="sponsors-logo" />
                <img src={LinkCE} alt="Logo LinkCe" className="sponsors-logo" />
                <img src={Santher} alt="Logo Santher" className="sponsors-logo" />
                <img src={Solfy} alt="Logo Solfy" className="sponsors-logo" />
            </div>
        </section>
    )
}

export default Sponsors