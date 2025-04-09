// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import { FaAngleDoubleDown, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import { HashRouter as Router, Route, Routes, useLocation, useNavigate, Navigate } from 'react-router-dom';
import Project1 from './projects/Project1';
import Project2 from './projects/Project2';
import Project3 from './projects/Project3';
import Project4 from './projects/Project4';
import Project5 from './projects/Project5';
import Project6 from './projects/Project6';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const overlayRef = useRef(null);
  const headerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Reset scroll position on route change with a slight delay
  useEffect(() => {
    console.log("Route changed to:", location.pathname);
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Handle preloader
  useEffect(() => {
    console.log("App component mounted");
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  // Handle header visibility on scroll (only on home page)
  useEffect(() => {
    if (location.pathname === '/') {
      let lastScrollTop = 0;
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollDifference = Math.abs(scrollTop - lastScrollTop);

        console.log("ScrollTop:", scrollTop, "LastScrollTop:", lastScrollTop, "Difference:", scrollDifference);

        if (scrollTop === 0) {
          setIsHeaderVisible(true);
        } else if (scrollDifference > 10) {
          if (scrollTop > lastScrollTop) {
            setIsHeaderVisible(false);
          } else {
            setIsHeaderVisible(true);
          }
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setIsHeaderVisible(false);
    }
  }, [location.pathname]);

  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  const handleProjectClick = (path) => {
    navigate(path);
  };

  return (
    <div className="App">
      {loading && <div className="preloader"><span>NM</span></div>}
      <div className="transition-overlay" ref={overlayRef}></div>

      {!loading && (
        <>
          {location.pathname === '/' && (
            <header className={`header ${!isHeaderVisible ? 'hidden' : ''}`} ref={headerRef}>
              <div className="logo">Nahiyan M.</div>
              <nav className="nav">
                <a href="#projects">Projects</a>
                <a href="#about">About</a>
              </nav>
              <div className="contact-link">
                <a href="#contact">Contact Me</a>
              </div>
            </header>
          )}

          <Routes>
            <Route
              path="/"
              element={
                <>
                  {console.log("Rendering Home route")}
                  <section className="home" id="home">
                    <div className="home-content">
                      <h1 className="intro-text">Hi! My name is Nahiyan Muhammad</h1>
                      <p className="role-text">Engineer | Aspiring entrepreneur | Designer | Energy & Sustainability Enthusiast</p>
                      <p className="welcome-text">Welcome to my portfolio</p>
                      <div className="scroll-arrow" onClick={scrollToAbout}>
                        <FaAngleDoubleDown />
                      </div>
                    </div>
                    <div className="social-icons">
                      <a
                        href="https://www.linkedin.com/in/nahiyan-muhammad/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                      >
                        <FaLinkedin />
                      </a>
                      <a
                        href="/Master%20Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                      >
                        <FaFileAlt />
                      </a>
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
                            Hello! I’m Nahiyan, from Dhaka, Bangladesh. I’m currently pursuing a B.S. in Mechanical and Computer Engineering at Boston University. My passions include designing CAD models, developing sustainable solutions, analyzing financial investments, and exploring entrepreneurship. I believe in combining creativity, discipline, and teamwork to make a real-world impact.
                          </p>
                        </div>
                      </div>
                      <div className="about-boxes">
                        <div className="skills">
                          <h3 className="skills-title">Skills</h3>
                          <div className="skills-columns">
                            <div className="skills-column">
                              <h3>Programming:</h3>
                              <p>C/C#/C++, React, Python, JavaScript, HTML/CSS, MATLAB MOOSE, COMSOL</p>
                              <h3>Design & Modeling:</h3>
                              <p>SolidWorks, OnShape, CREO, AutoCAD, Canva, Figma, Adobe Suite</p>
                            </div>
                            <div className="skills-column">
                              <h3>Hardware Tools:</h3>
                              <p>Solder, CNC, Microcontrollers, Accelerometers, Oscilloscope, Multimeter, Lathe</p>
                              <h3>Language:</h3>
                              <p>Native English and Bangla</p>
                            </div>
                          </div>
                        </div>
                        <div className="hobbies">
                          <h3>Hobbies & Interests</h3>
                          <ul>
                            <li>Gym, Soccer & Running</li>
                            <li>Competition & Hackathons</li>
                            <li>Watching Marvel</li>
                            <li>Engage in environment and energy-related research.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="projects" id="projects">
                    <h2>Projects</h2>
                    <div className="project-grid">
                      <div onClick={() => handleProjectClick('/project/1')} className="project-card">
                        <div
                          className="project-image"
                          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Harmony/Final.jpg)` }}
                          onError={() => console.log("Failed to load Batch Reverse Osmosis image")}
                        ></div>
                        <div className="project-content">
                          <h3>Batch Reverse Osmosis System</h3>
                        </div>
                      </div>
                      <div onClick={() => handleProjectClick('/project/2')} className="project-card">
                        <div
                          className="project-image"
                          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/FreshFridge/Fridge.jpg)` }}
                          onError={() => console.log("Failed to load FreshFridge image")}
                        ></div>
                        <div className="project-content">
                          <h3>FreshFridge</h3>
                        </div>
                      </div>
                      <div onClick={() => handleProjectClick('/project/3')} className="project-card">
                        <div
                          className="project-image"
                          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/LampBuddy/moodlights.jpg)` }}
                          onError={() => console.log("Failed to load Lamp Buddy image")}
                        ></div>
                        <div className="project-content">
                          <h3>Lamp Buddy</h3>
                        </div>
                      </div>
                      <div onClick={() => handleProjectClick('/project/4')} className="project-card">
                        <div
                          className="project-image"
                          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/WaterDispensing/elvehousing.jpg)` }}
                          onError={() => console.log("Failed to load Automatic Water Dispensing image")}
                        ></div>
                        <div className="project-content">
                          <h3>Automatic Water Dispensing System</h3>
                        </div>
                      </div>
                      <div onClick={() => handleProjectClick('/project/5')} className="project-card">
                        <div
                          className="project-image"
                          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/HeadSensor/2.png)` }}
                          onError={() => console.log("Failed to load Light Based Head Tracker image")}
                        ></div>
                        <div className="project-content">
                          <h3>Light Based Head Tracker</h3>
                        </div>
                      </div>
                      <div onClick={() => handleProjectClick('/project/6')} className="project-card">
                        <div
                          className="project-image"
                          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/MotorControl/3.png)` }}
                          onError={() => console.log("Failed to load Motor Speed Control image")}
                        ></div>
                        <div className="project-content">
                          <h3>Motor Speed Control</h3>
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
                        action="mailto:nahiyanm@bu.edu"
                        method="POST"
                        encType="text/plain"
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
            <Route path="/project/1" element={<Project1 />} onEnter={() => console.log("Navigated to Project 1")} />
            <Route path="/project/2" element={<Project2 />} />
            <Route path="/project/3" element={<Project3 />} />
            <Route path="/project/4" element={<Project4 />} />
            <Route path="/project/5" element={<Project5 />} />
            <Route path="/project/6" element={<Project6 />} />
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