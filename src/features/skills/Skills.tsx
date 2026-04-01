const SKILLS = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Zustand', 'TanStack Query', 'Tailwind CSS', 'Styled-Components', 'Jest'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'NestJS', 'Spring Boot', 'Java', 'WebFlux', 'Socket.IO'],
  },
  {
    category: 'DevOps & DB',
    items: ['Docker', 'Nginx', 'GitHub Actions', 'GCP', 'PostgreSQL', 'Prisma', 'Supabase', 'Playwright'],
  },
];


const Skills = () => {
  return (
    <div className="grid-layout">
      <div className="reveal">
        <span className="kicker">01 / Skills</span>
      </div>
      <div className="reveal delay-1">
        <p className="body-large" style={{ marginBottom: '4vh', wordBreak: 'keep-all', color: 'var(--text-primary)', fontWeight: 350, opacity: 0.9 }}>
          확장 가능하고 타입 안전하며 성능 중심의 인터페이스를 구축합니다.
        </p>
        <ul className="skills-list">
          {SKILLS.map((skill) => (
            <li key={skill.category}>
              <span className="skill-name">{skill.category}</span>
              <div className="skill-tags-row">
                {skill.items.map((item, idx) => (
                  <span key={item}>
                    <span className="skill-tag-item">{item}</span>
                    {idx < skill.items.length - 1 && (
                      <span className="skill-tag-sep">/</span>
                    )}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;

