
import Header from '../../features/header/Header.tsx';
import ScrollWireframe from '../../components/background/ScrollWireframe.tsx';
import { useSectionObserver } from '../../hooks/useSectionObserver.ts';

import Introduce from '../../features/introduce/Introduce.tsx';
import Skills from '../../features/skills/Skills.tsx';
import Infra from '../../features/about/About.tsx'; // using About for Infra
import Project from '../../features/projects/Project.tsx';

const Main = () => {
  useSectionObserver('#scroll-container');

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollContainer = e.currentTarget;
    const scrollTop = scrollContainer.scrollTop;
    const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
    
    // Prevent divide by zero on initial render if layout isn't painted
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
          <Infra />
        </section>

        <section id="works" className="obs-section">
          <Project />
        </section>
      </main>
    </>
  );
};

export default Main;
