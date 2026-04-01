import { useEffect, useState } from 'react';

const SECTIONS = ['hero', 'core', 'infra', 'works'];

const Header = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  const scrollToSection = (sectionId: string) => {
    const scrollArea = document.getElementById('scroll-container');
    const section = document.getElementById(sectionId);
    if (section && scrollArea) {
      scrollArea.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const scrollArea = document.getElementById('scroll-container');
    if (!scrollArea) return;

    const handleScroll = () => {
      const maxScroll = scrollArea.scrollHeight - scrollArea.clientHeight;
      if (maxScroll > 0) setScrollPos(scrollArea.scrollTop / maxScroll);

      const scrollY = scrollArea.scrollTop + scrollArea.clientHeight * 0.35;
      let current = 0;
      SECTIONS.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = i;
      });
      setActiveSection(current);
    };

    scrollArea.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount to set initial limits
    handleScroll();

    return () => scrollArea.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header>
        <div className="nav-links">
          <a onClick={() => scrollToSection('hero')} className="hover-target" style={{ cursor: 'none' }}>Intro</a>
          <a onClick={() => scrollToSection('core')} className="hover-target" style={{ cursor: 'none' }}>Core</a>
          <a onClick={() => scrollToSection('infra')} className="hover-target" style={{ cursor: 'none' }}>Infra</a>
          <a onClick={() => scrollToSection('works')} className="hover-target" style={{ cursor: 'none' }}>Works</a>
        </div>
        <div className="sys-status">
          <span>SYS.OP.NORMAL</span>
          <span id="scroll-metric">POS: {scrollPos.toFixed(3)}</span>
        </div>
      </header>

      <div className="progress-indicator">
        {SECTIONS.map((_, i) => (
          <div key={i} className={`dot ${activeSection === i ? 'active' : ''}`} data-index={i}></div>
        ))}
      </div>
    </>
  );
};

export default Header;