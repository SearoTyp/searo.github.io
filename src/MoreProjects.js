import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MoreProjects.css';

const MoreProjects = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToSection = (sectionId) => {
    navigate('/', { state: { skipScrollToTop: true } });
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const moreProjects = [
    {
      id: 7,
      path: '/project/7',
      title: 'Lumbacare',
      skills: ['Biomechanics', 'Wearable Tech', 'Sensor Design'],
      description: 'A wearable device to monitor and support lumbar health.',
    },
    {
      id: 8,
      path: '/project/8',
      title: 'Light Based Head Tracker',
      skills: ['Microcontrollers', 'Sensor Calibration', 'C', 'Signal Processing'],
      description: 'Developed a light-based head tracker for real-time motion detection.',
    },
    {
      id: 9,
      path: '/project/9',
      title: 'Motor Speed Control',
      skills: ['Microcontrollers', 'PWM', 'C', 'Electrical Engineering'],
      description: 'Designed a motor speed control system using PWM for precision.',
    },
  ];

  const handleProjectClick = (path) => {
    navigate(path);
  };

  return (
    <div className="more-projects-page">
      <header className="more-projects-header">
        <div className="logo">Nahiyan M.</div>
        <nav className="more-projects-nav">
          <span onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>HOME</span>
          <span onClick={() => scrollToSection('about')} style={{ cursor: 'pointer' }}>ABOUT</span>
          <span onClick={() => scrollToSection('projects')} style={{ cursor: 'pointer' }}>PROJECTS</span>
        </nav>
        <div className="contact-link">
          <span onClick={() => scrollToSection('contact')} style={{ cursor: 'pointer' }}>CONTACT ME</span>
        </div>
      </header>

      <h1 className="more-projects-title">More Projects</h1>
      <div className="project-grid">
        {moreProjects.map((project) => (
          <div
            key={project.id}
            className="project-wrapper"
            onClick={() => handleProjectClick(project.path)}
          >
            <div className="project-card">
              <div
                className="project-image"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/${
                    project.id === 7 ? 'Lumbacare/placeholder.jpg' :
                    project.id === 8 ? 'HeadSensor/2.png' :
                    project.id === 9 ? 'MotorControl/3.png' : ''
                  })`,
                }}
                onError={() => console.log(`Failed to load image for ${project.title}`)}
              />
              <div className="project-description-overlay">
                <p className="project-description">{project.description}</p>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p className="project-skills">
                <strong>Skills:</strong> {project.skills.join(', ')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreProjects;