import '../styles/infoCard.css'

function InfoCard({children, className = ' '}) {
    return (
        <article className={`info-card ${className}`.trim()}>
            {children}
        </article>
    )
}

export default InfoCard