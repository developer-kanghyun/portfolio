import Header from '../../features/header/Header.tsx';
import ScrollWireframe from '../../components/background/ScrollWireframe.tsx';
import { useSectionObserver } from '../../hooks/useSectionObserver.ts';

import Introduce from '../../features/introduce/Introduce.tsx';
import Skills from '../../features/skills/Skills.tsx';
import About from '../../features/about/About.tsx';
import Project from '../../features/projects/Project.tsx';
import Contact from '../../features/contact/Contact.tsx';

const Main = () => {
  useSectionObserver('#scroll-container');

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollContainer = e.currentTarget;
    const scrollTop = scrollContainer.scrollTop;
    const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
    
    const scrollProgress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
    document.documentElement.style.setProperty('--scroll-progress', `${scrollProgress}`);
  };

  return (
    <>
      <ScrollWireframe />
      <Header />

      <main id="scroll-container" onScroll={handleScroll}>
        <section id="hero" className="obs-section">
          <Introduce />
        </section>

        <section id="core" className="obs-section">
          <Skills />
        </section>

        <section id="infra" className="obs-section">
          <About />
        </section>

        <section id="works" className="obs-section">
          <Project />
        </section>

        <section id="contact" className="obs-section">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default Main;

