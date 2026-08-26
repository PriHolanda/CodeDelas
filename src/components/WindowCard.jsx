import '../styles/windowCard.css'

function WindowCard({ title, headerColor = '#5A189A', children, className = '' }) {
  return (
    <div className={`window-card ${className}`.trim()}>
      <div className="window-card-header" style={{ backgroundColor: headerColor }}>
        <div className="window-card-dots">
          <span className="window-card-dot"></span>
          <span className="window-card-dot"></span>
          <span className="window-card-dot"></span>
        </div>
        <span className="window-card-title">{title}</span>
      </div>

      <div className="window-card-body">
        {children}
      </div>
    </div>
  )
}

export default WindowCard