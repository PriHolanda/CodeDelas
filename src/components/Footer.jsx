import { Link } from 'react-router-dom'
import '../styles/footer.css'

function Footer({ showMeetingsLink = true }) {
    return (
        <footer className='footer'>
                <h1 className="footer-name">CODEDELAS</h1>
                <p className='footer-copyright'>PET-SI · UFC Quixadá — © 2026 CodeDelas. Todos os direitos reservados.</p>
                {showMeetingsLink && (
                    <Link className="footer-button" to="/meetings">
                       Ver encontros
                       <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                )}
        </footer>
    )
}

export default Footer