export default function Hero() {
  return (
    <header className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="dot"></span>
            Available for new opportunities — remote only
          </div>
          <h1>
            I build <span className="italic">delightful</span>{' '}
            <span className="accent">digital products</span>
            <br />
            with code &amp; care.
          </h1>
          <p>
            Hi, I'm Radhika — a software developer crafting AI-powered web &amp; mobile experiences. I love turning ambitious ideas into shipped, polished products.
          </p>
          <div className="hero-cta">
            <a href="#work" className="btn btn-primary">
              View my work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#contact" className="btn btn-secondary">Get in touch</a>
          </div>

          <div className="hero-meta">
            <div className="hero-meta-item">
              <div className="label">Based in</div>
              <div className="value">India</div>
            </div>
            <div className="hero-meta-item">
              <div className="label">Focus</div>
              <div className="value">Full-stack &amp; AI</div>
            </div>
            <div className="hero-meta-item">
              <div className="label">Open to</div>
              <div className="value">Remote only</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
