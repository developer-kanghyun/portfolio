import { useState, useEffect } from 'react';
import Introduce from '../../features/introduce/Introduce.tsx';
import About from '../../features/about/About.tsx';
import Skills from '../../features/skills/Skills.tsx';
import Project from '../../features/projects/Project.tsx';
import Blog from '../../features/blog/Blog.tsx';
import Contact from '../../features/contact/Contact.tsx';
import Header from '../../features/header/Header.tsx';
import { StyledMain, StyledFullPageContainer, StyledSection } from './styles.tsx';

const Main = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);

    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  if (isDesktop) {
    return (
      <>
        <Header />
        <StyledFullPageContainer>
          <StyledSection id="introduce">
            <Introduce />
          </StyledSection>
          <StyledSection id="about">
            <About />
          </StyledSection>
          <StyledSection id="skills">
            <Skills />
          </StyledSection>
          <StyledSection id="projects">
            <Project />
          </StyledSection>
          <StyledSection id="blog">
            <Blog />
          </StyledSection>
          <StyledSection id="contact">
            <Contact />
          </StyledSection>
        </StyledFullPageContainer>
      </>
    );
  }

  return (
    <>
      <Header />
      <StyledMain>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Introduce />
        </div>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <About />
        </div>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Skills />
        </div>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Project />
        </div>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Blog />
        </div>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Contact />
        </div>
      </StyledMain>
    </>
  );
};

export default Main;
