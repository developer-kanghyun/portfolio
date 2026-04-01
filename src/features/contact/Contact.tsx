
const Contact = () => {
  return (
    <div className="grid-layout">
      <div className="reveal">
        <div className="section-index">04/</div>
        <span className="kicker" style={{ marginTop: '2vh' }}>Get In Touch</span>
      </div>
      <div className="reveal delay-1">
        <h2 style={{ fontSize: '4rem', marginBottom: '4vh' }}>Connections</h2>

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '4vh', marginTop: '4vh' }}>
          <div className="contact-item">
            <span className="skill-meta">GitHub</span>
            <a href="https://github.com/developer-kanghyun" target="_blank" rel="noreferrer" className="body-large hover-target" style={{ display: 'block', textDecoration: 'none', color: 'var(--fg)', fontSize: '1.5rem', marginTop: '1vh' }}>
              developer-kanghyun
            </a>
          </div>

          <div className="contact-item">
            <span className="skill-meta">Blog</span>
            <a href="https://dev-kanghyun.tistory.com/" target="_blank" rel="noreferrer" className="body-large hover-target" style={{ display: 'block', textDecoration: 'none', color: 'var(--fg)', fontSize: '1.5rem', marginTop: '1vh' }}>
              dev-kanghyun.tistory.com
            </a>
          </div>

          <div className="contact-item">
            <span className="skill-meta">Email</span>
            <a href="mailto:dev.kanghyun@gmail.com" className="body-large hover-target" style={{ display: 'block', textDecoration: 'none', color: 'var(--fg)', fontSize: '1.5rem', marginTop: '1vh' }}>
              dev.kanghyun@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <span className="skill-meta">Resume</span>
            <a href="/portfolio-2026.pdf" target="_blank" className="body-large hover-target" style={{ display: 'block', textDecoration: 'none', color: 'var(--accent)', fontWeight: 'bold', fontSize: '1.5rem', marginTop: '1vh' }}>
              Download CV (PDF)
            </a>
          </div>
        </div>

        <footer style={{ marginTop: '10vh', padding: '4vh 0', borderTop: '1px solid var(--line)', opacity: 0.5 }}>
          <p className="skill-meta">© 2026 Designed & Built by Kanghyun Kim. Software Engineering Portfolio.</p>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
