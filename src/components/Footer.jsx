import '../styles/footer.css'

function Footer() {
    return (
        <footer className='footer'>
            {/* <div className="footer-container"> */}
                <h1 className="footer-name">CODEDELAS</h1>
                <p className='footer-copyright'>PET-SI · UFC Quixadá — © 2026 CodeDelas. Todos os direitos reservados.</p>
                <a className="footer-button" href="" target="_blank" rel="noreferrer">
                   Ver encontros
                   <i class="fa-solid fa-arrow-right-long"></i>
                </a>
            {/* </div> */}
        </footer>
    )
}

export default Footer
