import IconFeliz from '../assets/images/icons/icon-feliz.png'
import '../styles/participate.css'

function Participate() {
    return (
        <section className='participate'>
            <div className="participate-content">
                <h1 className='participate-heading'>Quer <br />participar?</h1>
                <p className="participate-description">O CodeDelas é gratuito, online e feito para você. <br />Para se inscrever, preencha o formulário abaixo,você vai precisar <br /> apenas do seu e-mail e não exigimos experiência prévia.</p>

                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeQVCr-MbK8wlQRwILFza1Kqg7KNrivA836qImcWdqIUFp-5g/viewform?usp=sharing&ouid=110802464428585688094" className='participate-button' target='_blank' rel='noreferrer'>acessar formulario de inscrição</a>
            </div>

            <div className="participate-social">
                <span className='participate-title'>Acompanhe nas redes:</span>
                <a href="https://www.instagram.com/petsi.ufc/" className='participate-media'>Instagram</a>
                <a href="https://www.linkedin.com/in/petsi-ufc/" className='participate-media'>Linkedin</a>
                <a href="https://www.youtube.com/@PETSIUFC" className='participate-media'>Youtube</a>
            </div>

            <img src={IconFeliz} alt="Icone da mascote feliz" className='participate-icon' />
        </section>
    )
}

export default Participate