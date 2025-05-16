import React, { useEffect, useRef, useState } from 'react';
import { FaAngleDoubleDown, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import { HashRouter as Router, Route, Routes, Link, useLocation, useNavigate, Navigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './projects/global.css';
import Project1 from './projects/Project1'; // Batch Reverse Osmosis System
import Project2 from './projects/Project2'; // Capstone Project: Mini VTOL
import Project3 from './projects/Project3'; // Nuclear Thermoelectric Generator
import Project4 from './projects/Project4'; // Automatic Water Dispensing System
import Project5 from './projects/Project5'; // FreshFridge
import Project6 from './projects/Project6'; // Lamp Buddy
import Project7 from './projects/Project7'; // LumbaCare
import Project8 from './projects/Project8'; // Light Based Head Tracker
import Project9 from './projects/Project9'; // Motor Speed Control
import Aboutme from './Aboutme';
import MoreProjects from './MoreProjects';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const overlayRef = useRef(null);
  const headerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [formStatus, setFormStatus] = useState(null);
  const formRef = useRef();

  // Define projects array in the specified order
  const projects = [
    {
      id: 1,
      path: '/project/1',
      title: 'Batch Reverse Osmosis System',
      skills: ['Arduino', 'SolidWorks', '3D Printing', 'C++', 'Electrical Circuit Design'],
      description: 'Designed a countertop BRO filter for Harmony Desalting, enhancing water purification efficiency.',
    },
    {
      id: 2,
      path: '/project/2',
      title: 'Capstone Project: Mini VTOL',
      skills: ['3D Printing (SLA)', 'CAD Design', 'Finite Element Analysis (FEA)', 'Autonomous Flight', 'Lightweight Design'],
      description: 'A proof-of-concept for an extremely lightweight, compact, fully autonomous mini VTOL drone designed to weigh less than 10 grams, fit within a 5x5x5 inch virtual box, hover for 5 minutes without external power, and demonstrate stable hovering within a 2-meter diameter cylinder.',
    },
    {
      id: 3,
      path: '/project/3',
      title: 'Nuclear Thermoelectric Generator',
      skills: ['Nuclear Energy', 'Thermodynamics', 'Electronics'],
      description: 'Designed a compact nuclear thermoelectric generator for remote power applications.',
    },
    {
      id: 4,
      path: '/project/4',
      title: 'Automatic Water Dispensing System',
      skills: ['Microcontrollers', 'Sensor Integration', 'C', 'Mechanical Design'],
      description: 'Built a sensor-based water dispensing system for efficient usage.',
    },
    {
      id: 5,
      path: '/project/5',
      title: 'FreshFridge',
      skills: ['React Native', 'JavaScript', 'UI/UX Design', 'Mobile Development'],
      description: 'Built a React Native app to track food expiration, reducing waste with reminders.',
    },
    {
      id: 6,
      path: '/project/6',
      title: 'Lamp Buddy',
      skills: ['Microcontrollers', 'C', 'Hardware Prototyping', 'Electronics'],
      description: 'Created a smart lamp with adjustable lighting to enhance user ambiance.',
    },
  ];

  useEffect(() => {
    console.log("Route changed to:", location.pathname);
    // Skip scroll-to-top if navigating to a specific section
    if (location.state?.skipScrollToTop) {
      return;
    }
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    console.log("App component mounted");
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { skipScrollToTop: true } });
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleProjectClick = (path) => {
    navigate(path);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus('Sending...');
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setFormStatus('Message sent successfully!');
          formRef.current.reset();
          setTimeout(() => setFormStatus(null), 5000);
        },
        (error) => {
          console.log('Failed to send email:', error.text);
          setFormStatus('Failed to send message. Please try again later.');
          setTimeout(() => setFormStatus(null), 5000);
        }
      );
  };

  const handleSkillClick = (skill) => {
    const project = projects.find((proj) => proj.skills.includes(skill));
    if (project) {
      navigate(project.path);
    }
  };

  return (
    <div className="App">
      {loading && <div className="preloader"><span>NM</span></div>}
      <div className="transition-overlay" ref={overlayRef}></div>

      {!loading && (
        <>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section className="home" id="home">
                    <header className="header" ref={headerRef}>
                      <div className="logo">Nahiyan M.</div>
                      <nav className="nav">
                        <Link to="/" onClick={() => scrollToSection('about')}>
                          About
                        </Link>
                        <Link to="/" onClick={() => scrollToSection('projects')}>
                          Projects
                        </Link>
                      </nav>
                      <div className="contact-link">
                        <Link to="/" onClick={() => scrollToSection('contact')}>
                          Contact Me
                        </Link>
                      </div>
                    </header>

                    <div className="social-icons">
                      <a href="https://www.linkedin.com/in/nahiyan-muhammad/" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaLinkedin />
                      </a>
                      <a href="/Master%20Resume.pdf" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaFileAlt />
                      </a>
                    </div>

                    <div className="home-content">
                      <h1 className="intro-text">Welcome to my Portfolio</h1>
                      <p className="role-text">A modern Time Capsule of <b>my journey</b>.<br />
                      Learn more about <b>me</b>, <b>my story</b> and <b>my passion</b>.</p>
                      <p className="welcome-text">Scroll down</p>
                      <div className="scroll-arrow-up" onClick={() => scrollToSection('about')}>
                        <FaAngleDoubleDown />
                      </div>
                    </div>
                    <div className="moving-text">
                     <div className="ticker">
                      <span>Driven  Curious  Motivated  Passionate  Ambitious  </span>
                      <span>Driven  Curious  Motivated  Passionate  Ambitious  </span>
                      </div>
                    </div>
                  </section>

                  <section className="about" id="about">
                    <h2 className="about-title">About</h2>
                    <Link to="/about-me" className="learn-more-button">
                      Learn More About Me
                    </Link>
                    <div className="about-content">
                      <div className="about-top">
                        <div className="about-left">
                          <img
                            src={`${process.env.PUBLIC_URL}/nahi.jpg`}
                            alt="Profile"
                            className="profile-pic"
                            onError={() => console.log("Failed to load profile picture")}
                          />
                        </div>
                        <div className="about-right">
                          <p>
                            Hello! I’m Nahiyan, from Dhaka, Bangladesh. I’m currently pursuing a B.S. in Mechanical and Computer Engineering at Boston University. My passions include designing CAD models, developing sustainable solutions, analyzing financial investments, and exploring entrepreneurship. I believe in combining creativity, discipline, and teamwork to make a real-world impact. In my free time, I enjoy going to the gym, playing soccer, running, watching Marvel, and participating in competitions and hackathons.
                          </p>
                        </div>
                      </div>
                      <div className="about-boxes">
                        <div className="skills">
                          <h3 className="skills-title">Skills</h3>
                          <div className="skills-columns">
                            <div className="skills-column">
                              <h3>Programming:</h3>
                              <p>
                                <span className="skill-link" onClick={() => handleSkillClick('C++')}>C/C#/C++</span>,{' '}
                                <span className="skill-link" onClick={() => handleSkillClick('React Native')}>React</span>,{' '}
                                <span className="skill-link" onClick={() => navigate('/project/8')}>Python</span>,{' '}
                                <span className="skill-link" onClick={() => handleSkillClick('JavaScript')}>JavaScript</span>,{' '}
                                <span className="skill-link" onClick={() => navigate('/project/5')}>HTML/CSS</span>,{' '}
                                <span className="skill-link" onClick={() => navigate('/project/1')}>MATLAB MOOSE</span>,{' '}
                                <span className="skill-link" onClick={() => navigate('/project/1')}>COMSOL</span>
                              </p>
                              <h3>Design & Modeling:</h3>
                              <p>
                                <span className="skill-link" onClick={() => handleSkillClick('SolidWorks')}>SolidWorks</span>,{' '}
                                <span className="skill-link" onClick={() => navigate('/project/1')}>OnShape</span>,{' '}
                                <span className="skill-link" onClick={() => navigate('/project/1')}>CREO</span>,{' '}
                                <span className="skill-link" onClick={() => navigate('/project/1')}>AutoCAD</span>,{' '}
                                <span className="skill-link" onClick={() => navigate('/project/5')}>Canva</span>,{' '}
                                <span className="skill-link" onClick={() => navigate('/project/5')}>Figma</span>,{' '}
                                <span className="skill-link" onClick={() => navigate('/project/5')}>Adobe Suite</span>
                              </p>
                            </div>
                            <div className="skills-column">
                              <h3>Hardware Tools:</h3>
                              <p>
                                <span className="skill-link" onClick={() => navigate('/project/1')}>Solder</span>,{' '}
                                <span className="skill-link" onClick={() => navigate('/project/1')}>CNC</span>,{' '}
                                <span className="skill-link" onClick={() => handleSkillClick('Microcontrollers')}>Microcontrollers</span>,{' '}
                                <span className="skill-link" onClick={() => navigate('/project/8')}>Accelerometers</span>,{' '}
                                <span className="skill-link" onClick={() => navigate('/project/8')}>Oscilloscope</span>,{' '}
                                <span className="skill-link" onClick={() => navigate('/project/8')}>Multimeter</span>,{' '}
                                <span className="skill-link" onClick={() => navigate('/project/1')}>Lathe</span>
                              </p>
                              <h3>Language:</h3>
                              <p>Native English and Bangla</p>
                            </div>
                          </div>
                        </div>
                        <div className="hobbies">
                          <h3>Involvement & Leadership</h3>
                          <ul>
                            <li>Member of Boston University Engineering Society, organizing workshops and events.</li>
                            <li>Team Lead in BU Hackathon 2024, leading a team to develop a sustainable tech solution.</li>
                            <li>Intern at Harmony Desalting, contributing to the Countertop BRO Filter project.</li>
                            <li>Volunteer at BU Sustainability Club, promoting energy-efficient initiatives on campus.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="projects" id="projects">
                    <h2>Projects</h2>
                    <Link to="/more-projects" className="learn-more-button">
                      See More Projects
                    </Link>
                    <div className="project-grid">
                      {projects.map((project) => (
                        <div
                          key={project.id}
                          className="project-wrapper"
                          onClick={() => handleProjectClick(project.path)}
                        >
                          <div className="project-card">
                            <div
                              className={`project-image ${project.id === 2 ? 'mini-vtol-image' : ''}`}
                              style={{
                                backgroundImage: `url(${process.env.PUBLIC_URL}/${
                                  project.id === 1 ? 'Harmony/Final.jpg' :
                                  project.id === 2 ? 'MiniVTOL/5.png' :
                                  project.id === 3 ? 'NTG/1.png' :
                                  project.id === 4 ? 'WaterDispensing/elvehousing.jpg' :
                                  project.id === 5 ? 'FreshFridge/Fridge.jpg' :
                                  project.id === 6 ? 'LampBuddy/moodlights.jpg' : ''
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
                  </section>

                  <section className="contact" id="contact">
                    <div className="contact-content">
                      <p className="contact-subtitle">GOT SOMETHING IN MIND?</p>
                      <h2 className="contact-title">LET'S CONNECT</h2>
                      <form
                        className="contact-form"
                        onSubmit={sendEmail}
                        ref={formRef}
                      >
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          required
                        />
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Your Email"
                          required
                        />
                        <label htmlFor="message">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          placeholder="Write a message..."
                          required
                        ></textarea>
                        <button type="submit">Send Message</button>
                        {formStatus && (
                          <p className={`form-status ${formStatus.includes('successfully') ? 'success' : 'error'}`}>
                            {formStatus}
                          </p>
                        )}
                      </form>
                      <p className="contact-social-text">FEEL FREE TO CONNECT WITH ME ON SOCIAL</p>
                      <div className="contact-social-links">
                        <a href="https://bu.joinhandshake.com/profiles/h8susk" target="_blank" rel="noopener noreferrer">
                          HANDSHAKE
                        </a>
                        <a href="https://linkedin.com/in/nahiyan-muhammad" target="_blank" rel="noopener noreferrer">
                          LINKEDIN
                        </a>
                        <a href="https://www.instagram.com/imnain/?hl=en" target="_blank" rel="noopener noreferrer">
                          INSTAGRAM
                        </a>
                      </div>
                    </div>
                  </section>
                </>
              }
            />
            <Route path="/project/1" element={<Project1 projects={projects} currentProjectId={1} />} />
            <Route path="/project/2" element={<Project2 projects={projects} currentProjectId={2} />} />
            <Route path="/project/3" element={<Project3 projects={projects} currentProjectId={3} />} />
            <Route path="/project/4" element={<Project4 projects={projects} currentProjectId={4} />} />
            <Route path="/project/5" element={<Project5 projects={projects} currentProjectId={5} />} />
            <Route path="/project/6" element={<Project6 projects={projects} currentProjectId={6} />} />
            <Route path="/project/7" element={<Project7 />} />
            <Route path="/project/8" element={<Project8 />} />
            <Route path="/project/9" element={<Project9 />} />
            <Route path="/about-me" element={<Aboutme />} />
            <Route path="/more-projects" element={<MoreProjects />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}