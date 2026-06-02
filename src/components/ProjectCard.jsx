export default function ProjectCard({ title, type, description, link, fullWidth }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`project-card reveal ${fullWidth ? 'span-2' : ''}`}
    >
      <div className="project-card-head">
        <div>
          <h4>{title}</h4>
          <div className="project-type">{type}</div>
        </div>
        <div className="arrow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
      </div>
      <p>{description}</p>
    </a>
  );
}
