import React, { useEffect, useRef, useState } from 'react';
import { FaAngleDoubleDown, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import { HashRouter as Router, Route, Routes, useLocation, useNavigate, Navigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Project1 from './projects/Project1';
import Project2 from './projects/Project2';
import Project3 from './projects/Project3';
import Project4 from './projects/Project4';
import Project5 from './projects/Project5';
import Project6 from './projects/Project6';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const overlayRef = useRef(null);
  const headerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [formStatus, setFormStatus] = useState(null);
  const formRef = useRef();

  // Define projects array for navigation and skill linking
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
      title: 'FreshFridge',
      skills: ['React Native', 'JavaScript', 'UI/UX Design', 'Mobile Development'],
      description: 'Built a React Native app to track food expiration, reducing waste with reminders.',
    },
    {
      id: 3,
      path: '/project/3',
      title: 'Lamp Buddy',
      skills: ['Microcontrollers', 'C', 'Hardware Prototyping', 'Electronics'],
      description: 'Created a smart lamp with adjustable lighting to enhance user ambiance.',
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
      title: 'Light Based Head Tracker',
      skills: ['Microcontrollers', 'Sensor Calibration', 'C', 'Signal Processing'],
      description: 'Developed a light-based head tracker for real-time motion detection.',
    },
    {
      id: 6,
      path: '/project/6',
      title: 'Motor Speed Control',
      skills: ['Microcontrollers', 'PWM', 'C', 'Electrical Engineering'],
      description: 'Designed a motor speed control system using PWM for precision.',
    },
  ];

  useEffect(() => {
    console.log("Route changed to:", location.pathname);
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

  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
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

  // Function to handle skill clicks and navigate to the first matching project
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
                        <a href="#projects">Projects</a>
                        <a href="#about">About</a>
                      </nav>
                      <div className="contact-link">
                        <a href="#contact">Contact Me</a>
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
                      <h1 className="intro-text">Hi! My name is Nahiyan Muhammad</h1>
                      <p className="role-text">Engineer | Aspiring entrepreneur | Designer | Energy & Sustainability Enthusiast</p>
                      <p className="welcome-text">Welcome to my portfolio</p>
                      <div className="scroll-arrow" onClick={scrollToAbout}>
                        <FaAngleDoubleDown />
                      </div>
                    </div>
                  </section>

                  <section className="about" id="about">
                    <h2 className="about-title">About</h2>
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
                                <span className="skill-link" onClick={() => navigate('/project/5')}>Python</span>,{' '}
                                <span className="skill-link" onClick={() => handleSkillClick('JavaScript')}>JavaScript</span>,{' '}
                                <span className="skill-link" onClick={() => navigate('/project/2')}>HTML/CSS</span>,{' '}
                                <span className="skill-link" onClick={() => navigate('/project/1')}>MATLAB MOOSE</span>,{' '}
                                <span className="skill-link" onClick={() => navigate('/project/1')}>COMSOL</span>
                              </p>
                              <h3>Design & Modeling:</h3>
                              <p>
                                <span className="skill-link" onClick={() => handleSkillClick('SolidWorks')}>SolidWorks</span>,{' '}
                                <span className="skill-link" onClick={() => navigate('/project/1')}>OnShape</span>,{' '}
                                <span className="skill-link" onClick={() => navigate('/project/1')}>CREO</span>,{' '}
                                <span className="skill-link" onClick={() => navigate('/project/1')}>AutoCAD</span>,{' '}
                                <span className="skill-link" onClick={() => navigate('/project/2')}>Canva</span>,{' '}
                                <span className="skill-link" onClick={() => navigate('/project/2')}>Figma</span>,{' '}
                                <span className="skill-link" onClick={() => navigate('/project/2')}>Adobe Suite</span>
                              </p>
                            </div>
                            <div className="skills-column">
                              <h3>Hardware Tools:</h3>
                              <p>
                                <span className="skill-link" onClick={() => navigate('/project/1')}>Solder</span>,{' '}
                                <span className="skill-link" onClick={() => navigate('/project/1')}>CNC</span>,{' '}
                                <span className="skill-link" onClick={() => handleSkillClick('Microcontrollers')}>Microcontrollers</span>,{' '}
                                <span className="skill-link" onClick={() => navigate('/project/5')}>Accelerometers</span>,{' '}
                                <span className="skill-link" onClick={() => navigate('/project/5')}>Oscilloscope</span>,{' '}
                                <span className="skill-link" onClick={() => navigate('/project/5')}>Multimeter</span>,{' '}
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
                            <li>Intern at Harmony Desal-яting, contributing to the Countertop BRO Filter project.</li>
                            <li>Volunteer at BU Sustainability Club, promoting energy-efficient initiatives on campus.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="projects" id="projects">
                    <h2>Projects</h2>
                    <div className="project-grid">
                      <div className="project-wrapper" onClick={() => handleProjectClick('/project/1')}>
                        <div className="project-card">
                          <div
                            className="project-image"
                            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Harmony/Final.jpg)` }}
                            onError={() => console.log("Failed to load Batch Reverse Osmosis image")}
                          />
                          <div className="project-description-overlay">
                            <p className="project-description">
                              Designed a countertop BRO filter for Harmony Desalting, enhancing water purification efficiency.
                            </p>
                          </div>
                        </div>
                        <div className="project-info">
                          <h3>Batch Reverse Osmosis System</h3>
                          <p className="project-skills">
                            <strong>Skills:</strong> Arduino, SolidWorks, 3D Printing, C++, Electrical Circuit Design
                          </p>
                        </div>
                      </div>

                      <div className="project-wrapper" onClick={() => handleProjectClick('/project/2')}>
                        <div className="project-card">
                          <div
                            className="project-image"
                            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/FreshFridge/Fridge.jpg)` }}
                            onError={() => console.log("Failed to load FreshFridge image")}
                          />
                          <div className="project-description-overlay">
                            <p className="project-description">
                              Built a React Native app to track food expiration, reducing waste with reminders.
                            </p>
                          </div>
                        </div>
                        <div className="project-info">
                          <h3>FreshFridge</h3>
                          <p className="project-skills">
                            <strong>Skills:</strong> React Native, JavaScript, UI/UX Design, Mobile Development
                          </p>
                        </div>
                      </div>

                      <div className="project-wrapper" onClick={() => handleProjectClick('/project/3')}>
                        <div className="project-card">
                          <div
                            className="project-image"
                            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/LampBuddy/moodlights.jpg)` }}
                            onError={() => console.log("Failed to load Lamp Buddy image")}
                          />
                          <div className="project-description-overlay">
                            <p className="project-description">
                              Created a smart lamp with adjustable lighting to enhance user ambiance.
                            </p>
                          </div>
                        </div>
                        <div className="project-info">
                          <h3>Lamp Buddy</h3>
                          <p className="project-skills">
                            <strong>Skills:</strong> Microcontrollers, C, Hardware Prototyping, Electronics
                          </p>
                        </div>
                      </div>

                      <div className="project-wrapper" onClick={() => handleProjectClick('/project/4')}>
                        <div className="project-card">
                          <div
                            className="project-image"
                            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/WaterDispensing/elvehousing.jpg)` }}
                            onError={() => console.log("Failed to load Automatic Water Dispensing image")}
                          />
                          <div className="project-description-overlay">
                            <p className="project-description">
                              Built a sensor-based water dispensing system for efficient usage.
                            </p>
                          </div>
                        </div>
                        <div className="project-info">
                          <h3>Automatic Water Dispensing System</h3>
                          <p className="project-skills">
                            <strong>Skills:</strong> Microcontrollers, Sensor Integration, C, Mechanical Design
                          </p>
                        </div>
                      </div>

                      <div className="project-wrapper" onClick={() => handleProjectClick('/project/5')}>
                        <div className="project-card">
                          <div
                            className="project-image"
                            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/HeadSensor/2.png)` }}
                            onError={() => console.log("Failed to load Light Based Head Tracker image")}
                          />
                          <div className="project-description-overlay">
                            <p className="project-description">
                              Developed a light-based head tracker for real-time motion detection.
                            </p>
                          </div>
                        </div>
                        <div className="project-info">
                          <h3>Light Based Head Tracker</h3>
                          <p className="project-skills">
                            <strong>Skills:</strong> Microcontrollers, Sensor Calibration, C, Signal Processing
                          </p>
                        </div>
                      </div>

                      <div className="project-wrapper" onClick={() => handleProjectClick('/project/6')}>
                        <div className="project-card">
                          <div
                            className="project-image"
                            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/MotorControl/3.png)` }}
                            onError={() => console.log("Failed to load Motor Speed Control image")}
                          />
                          <div className="project-description-overlay">
                            <p className="project-description">
                              Designed a motor speed control system using PWM for precision.
                            </p>
                          </div>
                        </div>
                        <div className="project-info">
                          <h3>Motor Speed Control</h3>
                          <p className="project-skills">
                            <strong>Skills:</strong> Microcontrollers, PWM, C, Electrical Engineering
                          </p>
                        </div>
                      </div>
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
            <Route path="/project/1" element={<Project1 projects={projects} currentProjectId={1} />} onEnter={() => console.log("Navigated to Project 1")} />
            <Route path="/project/2" element={<Project2 projects={projects} currentProjectId={2} />} />
            <Route path="/project/3" element={<Project3 projects={projects} currentProjectId={3} />} />
            <Route path="/project/4" element={<Project4 projects={projects} currentProjectId={4} />} />
            <Route path="/project/5" element={<Project5 projects={projects} currentProjectId={5} />} />
            <Route path="/project/6" element={<Project6 projects={projects} currentProjectId={6} />} />
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