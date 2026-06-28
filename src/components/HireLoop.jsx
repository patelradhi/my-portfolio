import { hireLoop } from '../data';

export default function HireLoop() {
  return (
    <div className="featured-project reveal">
      <div className="featured-header">
        <div>
          <span className="featured-tag">Full-Stack Build</span>
          <h3>
            Hire<span>Loop</span>
          </h3>
          <p className="featured-tagline">{hireLoop.tagline}</p>
        </div>
        <div className="featured-links">
          <a href={hireLoop.github} target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.11-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.18-1.18 3.18-1.18.63 1.6.23 2.78.11 3.07.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.07.78 2.16v3.2c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="featured-img-row">
        {hireLoop.images.map((img) => (
          <div className="featured-hero-img" key={img.src}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      <div className="featured-stats">
        {hireLoop.stats.map((s) => (
          <div className="stat" key={s.lbl}>
            <div className="num">{s.num}</div>
            <div className="lbl">{s.lbl}</div>
          </div>
        ))}
      </div>

      <div className="featured-desc">
        <div>
          <h4>What It Does</h4>
          <p>A two-sided platform. Candidates browse listings, save jobs, and track their applications; recruiters post roles, toggle them open or closed, and move applicants through interviewing, hired, or rejected.</p>
        </div>
        <div>
          <h4>My Role</h4>
          <p>Solo build — product design, frontend, data modeling on Supabase, and Clerk-gated auth for both roles.</p>
          <h4>Tech Stack</h4>
          <div className="tech-tags">
            {hireLoop.techStack.map((t) => (
              <span className="tech-tag" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
