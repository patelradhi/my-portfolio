import { skillCategories, skillsMarquee } from '../data';

export default function About() {
  // Duplicate the marquee items for seamless loop
  const marqueeItems = [...skillsMarquee, ...skillsMarquee];

  return (
    <section id="about">
      <div className="container">
        <div className="reveal">
          <div className="section-label">About</div>
          <h2 className="section-title">
            A builder who cares about the <span className="italic">last 10%.</span>
          </h2>
        </div>

        <div className="about-grid reveal">
          <div className="about-text">
            <p>
              I'm a software developer who lives at the intersection of{' '}
              <strong>design, AI, and engineering</strong>. Most of my work is about taking a fuzzy idea and turning it into something people can actually use — usually a web app, sometimes a mobile app, often both.
            </p>
            <p>
              I care a lot about the small details: the loading state nobody notices, the empty page that feels welcoming, the animation that makes a click feel earned. That's the last 10% — and I think it's what separates a product from a project.
            </p>
            <p>
              Lately I've been deep in <strong>AI-powered tooling</strong> — building interfaces that turn raw input (sketches, prompts, ideas) into finished outputs in seconds.
            </p>
          </div>

          <div className="about-card">
            <h3>What I work with</h3>
            <ul>
              {skillCategories.map((cat) => (
                <li key={cat.role}>
                  <span className="role">{cat.role}</span>
                  <span className="year">{cat.stack}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="marquee-wrap reveal">
          <div className="marquee">
            {marqueeItems.map((skill, i) => (
              <span key={i} className={`skill-pill ${skill.accent ? 'accent' : ''}`}>
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
