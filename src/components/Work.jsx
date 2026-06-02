import SketchRise from './SketchRise';
import ProjectCard from './ProjectCard';
import { projects } from '../data';

export default function Work() {
  return (
    <section id="work">
      <div className="container">
        <div className="reveal">
          <div className="section-label">Selected Work</div>
          <h2 className="section-title">
            Things I've <span className="italic">shipped.</span>
          </h2>
          <p className="section-subtitle">
            From AI-powered tools to social platforms — here's a closer look at what I've been building.
          </p>
        </div>

        <SketchRise />

        <div className="reveal" style={{ marginTop: '80px' }}>
          <div className="section-label">More Work</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
            Other things I've <span className="italic">built.</span>
          </h2>
        </div>

        <div className="project-grid">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
