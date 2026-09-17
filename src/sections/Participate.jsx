import IconFeliz from '../assets/images/icons/icon-feliz.png'
import '../styles/participate.css'

function Participate() {
    return (
        <section className='participate'>
            <div className="participate-content">
                <h1 className='participate-heading'>Quer <br />participar?</h1>
                <p className="participate-description">O CodeDelas é gratuito, online e feito para você. <br />Para se inscrever, preencha o formulário abaixo,você vai precisar <br /> apenas do seu e-mail e não exigimos experiência prévia.</p>

                <a href="" className='participate-button' target='_blank' rel='noreferrer'>acessar formulario de inscrição</a>
            </div>

            <div className="participate-social">
                <span className='participate-title'>Acompanhe nas redes:</span>
                <a href="" className='participate-media'>Instagram</a>
                <a href="" className='participate-media'>Linkedin</a>
                <a href="" className='participate-media'>Youtube</a>
            </div>

            <img src={IconFeliz} alt="Icone da mascote feliz" className='participate-icon' />
        </section>
    )
}

export default Participate