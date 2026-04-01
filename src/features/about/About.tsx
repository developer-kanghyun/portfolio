

const About = () => {
  return (
    <>
      <div className="reveal">
        <span className="kicker">02 / Infrastructure</span>
        <h2>DevOps & Delivery</h2>
        <p className="body-large serif-italic" style={{ marginTop: '1vh' }}>
          Bridging the gap between the interface and the metal.
        </p>
      </div>
      
      <div className="infra-grid reveal delay-1">
        <div className="infra-card hover-target">
          <div className="ic-top">
            <span className="ic-icon">DK</span>
            <span className="skill-meta">Containerization</span>
          </div>
          <div>
            <h3 className="ic-title">Docker</h3>
            <p className="body-large" style={{ fontSize: '1rem' }}>Multi-stage builds, isolated environments, compose orchestration.</p>
          </div>
        </div>
        <div className="infra-card hover-target">
          <div className="ic-top">
            <span className="ic-icon">NX</span>
            <span className="skill-meta">Routing</span>
          </div>
          <div>
            <h3 className="ic-title">Nginx</h3>
            <p className="body-large" style={{ fontSize: '1rem' }}>Reverse proxying, load balancing, SSL termination, caching layers.</p>
          </div>
        </div>
        <div className="infra-card hover-target">
          <div className="ic-top">
            <span className="ic-icon">CI</span>
            <span className="skill-meta">Pipelines</span>
          </div>
          <div>
            <h3 className="ic-title">GH Actions</h3>
            <p className="body-large" style={{ fontSize: '1rem' }}>Automated testing, build processes, and zero-downtime deployments.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
