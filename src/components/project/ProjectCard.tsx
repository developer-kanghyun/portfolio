import React from 'react';
import { type ProjectData } from '../../data/projects';
import { PROJECT_CONFIGS, type ProjectConfig } from '../../config/projectConfig';
import { TechStack } from '../common/TechStack';
import {
  StyledProjectContentWrapper,
  StyledFlicFlowHeader,
  StyledPortfolioHeader,
  StyledTtaBookHeader,
  StyledTechStackFooter,
  StyledFlicFlowDescription,
  StyledProjectImage,
  StyledProjectInfo,
} from '../../features/projects/styles';

interface ProjectCardProps {
  project: ProjectData;
  onClick: () => void;
}

const ColorHeaderCard: React.FC<{
  project: ProjectData;
  config: ProjectConfig;
}> = ({ project, config }) => {
  const HeaderComponent = 
    config.headerColor === '#ff8502' ? StyledFlicFlowHeader :
    config.headerColor === '#343d46' ? StyledPortfolioHeader :
    StyledTtaBookHeader;

  return (
    <>
      <HeaderComponent>
        <h3>{config.title}</h3>
      </HeaderComponent>
      <StyledFlicFlowDescription>
        <h3>{config.subtitle}</h3>
        <p>{config.description}</p>
      </StyledFlicFlowDescription>
      <StyledTechStackFooter>
        <TechStack techStack={project.techStack} />
      </StyledTechStackFooter>
    </>
  );
};

const DefaultCard: React.FC<{ project: ProjectData }> = ({ project }) => (
  <>
    <StyledProjectImage src={project.image} alt={project.title} />
    <StyledProjectInfo>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
    </StyledProjectInfo>
    <StyledTechStackFooter>
      <TechStack techStack={project.techStack} />
    </StyledTechStackFooter>
  </>
);

const getProjectCardContent = (project: ProjectData) => {
  const config = PROJECT_CONFIGS[project.id];
  
  if (config) {
    return <ColorHeaderCard project={project} config={config} />;
  }
  
  return <DefaultCard project={project} />;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <StyledProjectContentWrapper onClick={onClick}>
      {getProjectCardContent(project)}
    </StyledProjectContentWrapper>
  );
};

export default ProjectCard;