import React from 'react';
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

export const TechStack: React.FC<TechStackProps> = ({ 
  techStack, 
  maxItems = DEFAULT_MAX_ITEMS 
}) => {
  const limitedTechStack = techStack.slice(0, maxItems);
  
  return (
    <StyledTechStackContainer className="tech-stack-container">
      {limitedTechStack.map((tech) => (
        techIconsMap[tech] ? (
          <StyledTechIcon
            key={tech}
            src={techIconsMap[tech]}
            alt={tech}
            title={techDisplayNameMap[tech] || tech}
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