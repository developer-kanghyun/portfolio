const Skills = () => {
  return (
    <div className="grid-layout">
      <div className="reveal">
        <div className="section-index">01/</div>
        <span className="kicker" style={{ marginTop: '2vh' }}>The Core</span>
      </div>
      <div className="reveal delay-1">
        <p className="body-large" style={{ marginBottom: '6vh' }}>
          Building scalable, typed, and performant interfaces. Treating the DOM not as a canvas, but as an engineering material.
        </p>
        <ul className="skills-list">
          <li>
            <span className="skill-name">React Ecosystem</span>
            <span className="skill-meta">Hooks / Context / Zustand</span>
          </li>
          <li>
            <span className="skill-name">TypeScript</span>
            <span className="skill-meta">Strict / Generics / AST</span>
          </li>
          <li>
            <span className="skill-name">Next.js</span>
            <span className="skill-meta">App Router / RSC / SSR</span>
          </li>
          <li>
            <span className="skill-name">WebGL & Motion</span>
            <span className="skill-meta">Three.js / Framer / Pure CSS</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
