import "../styles/encounter-card.css";

function EncounterCard({ encounter, color }) {
  const { number, title, description, topics, guest, video } =
    encounter;

  return (
    <article
      className="ec"
      style={{ "--ec-color": color.main, "--ec-tint": color.tint }}
    >
        
      <div className="ec-bar">
        <span className="ec-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="ec-file">encontro-{number}.exe</span>
      </div>

      <div className={guest ? "ec-body" : "ec-body ec-body--solo"}>
        <div className="ec-num">{number}</div>

        <div className="ec-main">
          <span className="ec-eyebrow">Encontro {Number(number)}</span>
          <h2 className="ec-title">{title}</h2>
          <p className="ec-desc">{description}</p>

          <span className="ec-label">O que você vai aprender</span>
          <ul className="ec-topics">
            {topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>


          <a href={video.url} target="_blank" rel="noreferrer" className="ec-btn">
            <i className="fa-solid fa-play"></i>
            Assistir aos vídeos
          </a>
        </div>

        {guest && (
          <aside className="ec-guest">
            <div className="ec-photo">
              {guest.image && <img src={guest.image} alt={guest.name} />}
              <span className="ec-badge">Convidada</span>
            </div>

            <div className="ec-guest-info">
              <span className="ec-role">{guest.role}</span>
              <strong className="ec-name">{guest.name}</strong>
              <span className="ec-edu">{guest.education}</span>
              <hr />
              <span className="ec-theme-label">Tema apresentado</span>
              <span className="ec-theme">{guest.theme}</span>
            </div>
          </aside>
        )}
      </div>
    </article>
  );
}

export default EncounterCard;