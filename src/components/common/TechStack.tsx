import { useEffect, useRef } from 'react';
import { techIconsMap, techDisplayNameMap } from '../../data/skills';
import {
  StyledTechStackContainer,
  StyledTechIcon,
  StyledTechText,
} from './styles';

interface TechStackProps {
  techStack: string[];
  maxItems?: number;
}

const DEFAULT_MAX_ITEMS = 8;

export const TechStack = ({ 
  techStack, 
  maxItems = DEFAULT_MAX_ITEMS 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const limitedTechStack = techStack.slice(0, maxItems);
  
  useEffect(() => {
    // 모든 이미지 요소에서 title 속성 완전히 제거
    const container = containerRef.current;
    if (container) {
      const images = container.querySelectorAll('img');
      images.forEach(img => {
        img.removeAttribute('title');
        img.removeAttribute('alt');
        // 툴팁 이벤트 완전 차단
        img.addEventListener('mouseenter', (e) => {
          e.stopPropagation();
          e.preventDefault();
        });
      });
    }
  }, [limitedTechStack]);
  
  return (
    <StyledTechStackContainer ref={containerRef} className="tech-stack-container">
      {limitedTechStack.map((tech) => (
        techIconsMap[tech] ? (
          <StyledTechIcon
            key={tech}
            src={techIconsMap[tech]}
            onMouseEnter={(e) => {
              e.currentTarget.removeAttribute('title');
              e.currentTarget.removeAttribute('alt');
            }}
          />
        ) : (
          <StyledTechText key={tech}>
            {techDisplayNameMap[tech] || tech}
          </StyledTechText>
        )
      ))}
    </StyledTechStackContainer>
  );
};