import { useInView } from 'react-intersection-observer';
import { projectsData, type ProjectData } from '../../data/projects';
import { ANIMATION_CONFIG } from '../../config/projectConfig';
import { useModal } from '../../hooks/useModal';
import Modal from '../../components/modal/Modal';
import ProjectDetailModal from '../../components/modal/ProjectDetailModal';
import ProjectCard from '../../components/project/ProjectCard';
import {
  StyledProject,
  StyledProjectContainer,
  StyledProjectList,
} from './styles';

const Project = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: ANIMATION_CONFIG.THRESHOLD,
  });

  const { isOpen, data: selectedProject, openModal, closeModal } = useModal<ProjectData>();

  return (
    <>
      <StyledProjectContainer id="projects" ref={ref} $inView={inView}>
        <h1>프로젝트</h1>
        <p>프로젝트 설명</p>

        <StyledProjectList>
          {projectsData.map((project, index) => (
            <StyledProject
              key={project.id}
              $inView={inView}
              $delay={ANIMATION_CONFIG.INITIAL_DELAY + index * ANIMATION_CONFIG.DELAY_INCREMENT}
            >
              <ProjectCard 
                project={project}
                onClick={() => openModal(project)}
              />
            </StyledProject>
          ))}
        </StyledProjectList>
      </StyledProjectContainer>

      <Modal isOpen={isOpen} onClose={closeModal}>
        {selectedProject && <ProjectDetailModal project={selectedProject} />}
      </Modal>
    </>
  );
};

export default Project;
