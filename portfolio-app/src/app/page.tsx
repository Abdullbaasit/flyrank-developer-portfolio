const links = [
  { label: "View EcoTrack demo", href: "https://ecotrack-capstone.vercel.app/", primary: true },
  { label: "EcoTrack source code", href: "https://github.com/Abdullbaasit/ecotrack-capstone", primary: false },
];

export default function Home() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="page-content">
        <header className="site-header">
          <a className="brand" href="/" aria-label="Adepoju Taiwo Basit — home">
            <span className="brand-mark" aria-hidden="true">AT</span>
            <span>Adepoju Taiwo Basit</span>
          </a>
          <span className="stage-badge"><span className="status-dot" aria-hidden="true" /> Portfolio foundation · Live</span>
        </header>

        <section className="hero" aria-labelledby="hero-title">
          <p className="eyebrow">Frontend engineering × Environmental technology</p>
          <h1 id="hero-title">Building useful digital experiences from real-world problems.</h1>
          <p className="intro">I turn environmental data into clear, usable web experiences that help people understand what matters.</p>
          <div className="hero-actions">
            {links.map((link) => (
              <a key={link.href} className={link.primary ? "button button-primary" : "button button-secondary"} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className="project-strip" aria-labelledby="project-title">
          <div>
            <p className="section-kicker">First featured project</p>
            <h2 id="project-title">EcoTrack <span>— Environmental Monitoring Dashboard</span></h2>
            <p>A Next.js demonstration dashboard for exploring sample air quality, water quality, station readings, and environmental alerts.</p>
          </div>
          <a className="project-link" href="https://ecotrack-capstone.vercel.app/" target="_blank" rel="noopener noreferrer">Explore the demo <span aria-hidden="true">↗</span></a>
        </section>

        <footer className="footer"><span>FlyRank · Week 4 foundation</span><span>Built with Next.js and Tailwind CSS</span></footer>
      </div>
    </main>
  );
}
