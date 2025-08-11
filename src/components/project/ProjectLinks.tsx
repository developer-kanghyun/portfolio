import React from 'react';
import { StyledLinksContainer, StyledLink } from './styles';


interface ProjectLinksProps {
  links: {
    live?: string;
    github?: string;
  };
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({ links }) => {
  return (
    <StyledLinksContainer>
      {links.live && (
        <StyledLink href={links.live} target="_blank" rel="noopener noreferrer">
          사이트 이동
        </StyledLink>
      )}
      {links.github && (
        <StyledLink href={links.github} target="_blank" rel="noopener noreferrer">
          GitHub 이동
        </StyledLink>
      )}
    </StyledLinksContainer>
  );
};

export default ProjectLinks;