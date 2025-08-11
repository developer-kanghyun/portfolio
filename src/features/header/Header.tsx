import { useState, useEffect } from 'react';
import { StyledHeader, StyledLogo } from './styles';
import logo from '../../asset/images/logo.svg';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    const fullPageContainer = document.querySelector('[data-fullpage="true"]');
    if (fullPageContainer) {
      fullPageContainer.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const fullPageContainer = document.querySelector('[data-fullpage="true"]');
    
    if (section && fullPageContainer) {
      // 풀페이지 컨테이너에서 스크롤
      const sectionTop = section.offsetTop;
      fullPageContainer.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    } else if (section) {
      // 일반 스크롤
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleFullPageScroll = (e: Event) => {
      const scrollY = (e.target as HTMLElement).scrollTop;
      console.log('Full page scroll:', scrollY); // 디버깅용
      if (scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // 일반 스크롤 이벤트 (모바일/태블릿용)
    window.addEventListener('scroll', handleScroll);
    
    // DOM이 로드된 후 이벤트 리스너 추가
    const timer = setTimeout(() => {
      const fullPageContainer = document.querySelector('[data-fullpage="true"]');
      if (fullPageContainer) {
        console.log('Full page container found'); // 디버깅용
        fullPageContainer.addEventListener('scroll', handleFullPageScroll);
      } else {
        console.log('Full page container not found'); // 디버깅용
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      const fullPageContainer = document.querySelector('[data-fullpage="true"]');
      if (fullPageContainer) {
        fullPageContainer.removeEventListener('scroll', handleFullPageScroll);
      }
    };
  }, []);

  return (
    <StyledHeader $isVisible={isVisible}>
      <StyledLogo src={logo} alt="logo" onClick={scrollToTop} />
      <nav>
        <a onClick={() => scrollToSection('about')}>개인 역량</a>
        <a onClick={() => scrollToSection('skills')}>기술 스택</a>
        <a onClick={() => scrollToSection('projects')}>프로젝트</a>
        <a onClick={() => scrollToSection('blog')}>블로그</a>
      </nav>
    </StyledHeader>
  );
};

export default Header;