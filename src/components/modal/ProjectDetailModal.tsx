import React from 'react';
import { type ProjectData } from '../../data/projects';
import { TechStack } from '../common/TechStack';
import ProjectLinks from '../project/ProjectLinks';
import FlicFlowDetails from './FlicFlowDetails';
import TtaBookDetails from './TtaBookDetails';
import PortfolioDetails from './PortfolioDetails';
import {
  StyledSubtitle,
  StyledInfoSection,
  StyledPeriodSection,
  StyledLinksSection,
  StyledDivider,
  StyledDescription,
  StyledPeriodText,
  StyledTechSection,
  StyledDetailsText,
} from './styles';

interface ProjectDetailModalProps {
  project: ProjectData;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project }) => {
  return (
    <>
      <h2>{project.title}</h2>
      {project.id === 1 && (
        <StyledSubtitle>개인 맞춤형 콘텐츠 추천 플랫폼</StyledSubtitle>
      )}
      {project.id === 2 && (
        <StyledSubtitle>개인 기술 스택 소개 웹사이트</StyledSubtitle>
      )}
      {project.id === 3 && (
        <StyledSubtitle>스마트한 공간 예약 시스템</StyledSubtitle>
      )}

      <h3>프로젝트 소개</h3>
      {project.description && (
        <StyledDescription>{project.description}</StyledDescription>
      )}

      <StyledInfoSection>
        <StyledPeriodSection>
          {project.period && (
            <>
              <h3>개발 기간</h3>
              <StyledPeriodText>{project.period}</StyledPeriodText>
            </>
          )}
        </StyledPeriodSection>

        <StyledLinksSection>
          {project.links && (
            <>
              <h3>관련 링크</h3>
              <ProjectLinks links={project.links} />
            </>
          )}
        </StyledLinksSection>
      </StyledInfoSection>

      <StyledTechSection>
        <h3>사용한 기술</h3>
        <TechStack techStack={project.techStack} />
      </StyledTechSection>

      <StyledDivider />

      {project.id === 1 ? (
        <FlicFlowDetails />
      ) : project.id === 2 ? (
        <PortfolioDetails />
      ) : project.id === 3 ? (
        <TtaBookDetails />
      ) : (
        <div>
          <h3>상세 설명</h3>
          <StyledDetailsText>{project.details}</StyledDetailsText>
        </div>
      )}
    </>
  );
};

export default ProjectDetailModal;
