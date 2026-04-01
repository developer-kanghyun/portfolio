import { useEffect, useState } from 'react';

const SECTIONS = ['hero', 'core', 'infra', 'works', 'contact'];

const Header = () => {
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
      const scrollY = scrollArea.scrollTop + scrollArea.clientHeight * 0.35;
      let current = 0;
      SECTIONS.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = i;
      });

      // If scrolled to the very bottom of the page, forcefully active the last section
      if (Math.ceil(scrollArea.scrollTop + scrollArea.clientHeight) >= scrollArea.scrollHeight - 10) {
        current = SECTIONS.length - 1;
      }

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
          <a onClick={() => scrollToSection('infra')} className="hover-target" style={{ cursor: 'none' }}>Philosophy</a>
          <a onClick={() => scrollToSection('works')} className="hover-target" style={{ cursor: 'none' }}>Works</a>
          <a onClick={() => scrollToSection('contact')} className="hover-target" style={{ cursor: 'none' }}>Contact</a>
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