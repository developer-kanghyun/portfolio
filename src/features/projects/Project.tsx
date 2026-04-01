import { useState } from 'react';

const Project = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: '', stack: '', img: '' });

  const openModal = (title: string, stack: string, img: string) => {
    setModalData({ title, stack, img });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="reveal">
        <span className="kicker">03 / Selected Output</span>
        <h2>Architecture & Form</h2>
      </div>

      <div className="works-gallery reveal delay-1">
        <div 
          className="work-item hover-target" 
          onClick={() => openModal('Fintech Dashboard', 'React, TS, WebGL', 'https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')}
        >
          <img src="https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Fintech UX" className="work-img" />
          <div className="work-meta">
            <h3>Fintech Dashboard</h3>
            <span className="skill-meta">React, TS, WebGL</span>
          </div>
        </div>
        <div 
          className="work-item hover-target" 
          onClick={() => openModal('E-Commerce Architecture', 'Next.js, Tailwind, Prisma', 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')}
        >
          <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Commerce" className="work-img" />
          <div className="work-meta">
            <h3>E-Commerce Architecture</h3>
            <span className="skill-meta">Next.js, Tailwind, Prisma</span>
          </div>
        </div>
        <div 
          className="work-item hover-target" 
          onClick={() => openModal('Design System Core', 'Vanilla CSS, React', 'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')}
        >
          <img src="https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="System" className="work-img" />
          <div className="work-meta">
            <h3>Design System Core</h3>
            <span className="skill-meta">Vanilla CSS, React</span>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <div className={`modal-overlay ${modalOpen ? 'active' : ''}`} id="project-modal">
        <button className="close-btn hover-target" onClick={closeModal}>Close / Esc</button>
        <div className="modal-content">
          <div className="modal-img-container">
            <img id="modal-img" src={modalData.img} alt="Project Image" />
          </div>
          <div className="modal-info">
            <span className="kicker" id="modal-stack" style={{ marginBottom: '1vh' }}>{modalData.stack}</span>
            <h2 id="modal-title">{modalData.title}</h2>
            <br />
            <p className="body-large">
              Detailed breakdown of the architectural decisions, scale considerations, and rendering optimizations implemented during the lifecycle of this project.
            </p>
            <br />
            <a href="#" className="skill-meta" style={{ color: 'var(--accent)', textDecoration: 'none', borderBottom: '1px solid var(--accent)', alignSelf: 'flex-start', paddingBottom: '2px' }}>
              View Case Study ↗
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
