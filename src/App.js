import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaAngleDoubleDown, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate, Navigate } from 'react-router-dom';
import Project1 from './projects/Project1';
import Project2 from './projects/Project2';
import Project3 from './projects/Project3';
import Project4 from './projects/Project4';
import Project5 from './projects/Project5';
import Project6 from './projects/Project6';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const overlayRef = useRef(null);
  const headerRef = useRef(null);
  const skillsBoxRef = useRef(null);
  const hobbiesBoxRef = useRef(null);
  const aboutTextRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Disable browser scroll restoration on initial load
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0); // Immediate scroll to top on initial load
  }, []);

  useEffect(() => {
    console.log("App component mounted");
    const timer = setTimeout(() => {
      gsap.to('.preloader', {
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        onComplete: () => {
          console.log("Preloader finished, setting loading to false");
          setLoading(false);
        },
      });
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return;

    console.log("Loading is false, applying GSAP animations");

    // Kill existing ScrollTriggers to prevent duplicates
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    gsap.from('.home-content > *', {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: 'power2.out',
    });

    gsap.to('.home-content', {
      opacity: 0,
      y: 200,
      scale: 0.8,
      rotateX: 45,
      rotateY: 45,
      ease: 'power2.in',
      scrollTrigger: {
        trigger: '.home',
        start: 'top 20%',
        end: 'bottom top',
        scrub: 1,
        toggleActions: 'play none none reverse',
      },
    });

    gsap.fromTo(
      '.home::before',
      { opacity: 0.3, background: 'linear-gradient(135deg, #1e3c72, #2a5298)' },
      {
        opacity: 0,
        background: 'linear-gradient(135deg, #f0f0f0, #f0f0f0)',
        scrollTrigger: {
          trigger: '.home',
          start: 'top 20%',
          end: 'bottom top',
          scrub: 1,
        },
      }
    );

    const aboutElements = gsap.utils.toArray('.about-content > *');
    gsap.fromTo(
      aboutElements,
      { opacity: 0, scale: 0.5, y: 150, rotateX: 90 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        rotateX: 0,
        stagger: {
          each: 0.2,
          from: 'center',
        },
        ease: 'elastic.out(1, 0.3)',
        scrollTrigger: {
          trigger: '.home',
          start: 'bottom 50%',
          end: 'bottom top',
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      '.about-left > *, .about-right > *',
      { opacity: 0, scale: 0.5, y: 50, rotateY: 90 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        rotateY: 0,
        stagger: {
          each: 0.1,
          from: 'center',
        },
        ease: 'elastic.out(1, 0.5)',
        scrollTrigger: {
          trigger: '.home',
          start: 'bottom 50%',
          end: 'bottom top',
          scrub: 1,
        },
      }
    );

    gsap.utils.toArray('.project-card').forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, rotateY: 90 },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 60%',
            scrub: true,
          },
        }
      );
    });

    gsap.fromTo(
      '.contact-content > *',
      { opacity: 0, y: 50, rotateY: 90 },
      {
        opacity: 1,
        y: 0,
        rotateY: 0,
        stagger: 0.2,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.contact',
          start: 'top 80%',
          end: 'top 60%',
          scrub: false,
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.to('.scroll-arrow', {
      y: 20,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: 'sine.inOut',
    });

    // Header scroll animation for homepage only
    if (location.pathname === '/') {
      let lastScrollTop = 0;
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
          setIsHeaderVisible(false);
        } else {
          setIsHeaderVisible(true);
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }

    // Refresh ScrollTrigger after navigation
    setTimeout(() => {
      ScrollTrigger.refresh();
      console.log("ScrollTrigger refreshed in App.js");
    }, 300);
  }, [loading, location.pathname]);

  const scrollToAbout = () => {
    const tl = gsap.timeline();

    tl.to(overlayRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: 'power2.inOut',
    })
      .to(
        '.home-content > *',
        {
          opacity: 0,
          y: 80,
          scale: 0.8,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.inOut',
        },
        '<'
      )
      .to(overlayRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        onComplete: () => {
          document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        },
      });
  };

  const handleProjectClick = (path) => {
    const tl = gsap.timeline();
    tl.to(overlayRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: 'power2.inOut',
      onComplete: () => {
        navigate(path);
        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          onComplete: () => {
            window.scrollTo({ top: 0, behavior: 'instant' });
            console.log("Scrolled to top after navigation to:", path);
          },
        });
      },
    });
  };


  return (
    <div className="App">
      {loading && <div className="preloader"><span>NM</span></div>}
      <div className="transition-overlay" ref={overlayRef}></div>

      {!loading && (
        <>
          {location.pathname === '/' && isHeaderVisible && (
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
                      <div className="about-left">
                        <img
                          src={`${process.env.PUBLIC_URL}/nahi.jpg`}
                          alt="Profile"
                          className="profile-pic"
                          onError={() => console.log("Failed to load profile picture")}
                        />
                        <div className="skills" ref={skillsBoxRef}>
                          <h3>Skills</h3>
                          <ul>
                            <li>Onshape, Solidworks & CREO</li>
                            <li>AutoCAD</li>
                            <li>JavaScript</li>
                            <li>HTML/CSS</li>
                            <li>Visual Basics of Application</li>
                            <li>Gcode</li>
                            <li>React</li>
                            <li>Arduino</li>
                            <li>C, C++ & C#</li>
                            <li>Manufacturing: Soldering, CNC etc.</li>
                            <li>MOOSE, COMSOL & Gmsh</li>
                          </ul>
                        </div>
                      </div>
                      <div className="about-right">
                        <p ref={aboutTextRef}>
                          Hello! I’m Nahiyan, from Dhaka, Bangladesh. I’m currently pursuing a B.S. in Mechanical and Computer Engineering at Boston University. My passions include designing CAD models, developing sustainable solutions, analyzing financial investments, and exploring entrepreneurship. I believe in combining creativity, discipline, and teamwork to make a real-world impact.
                        </p>
                        <div className="hobbies" ref={hobbiesBoxRef}>
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
                        <h3>Project 1</h3>
                        <p className="project-preview">Batch Reverse Osmosis System</p>
                      </div>
                      <div onClick={() => handleProjectClick('/project/2')} className="project-card">
                        <h3>Project 2</h3>
                        <p className="project-preview">FreshFridge</p>
                      </div>
                      <div onClick={() => handleProjectClick('/project/3')} className="project-card">
                        <h3>Project 3</h3>
                        <p className="project-preview">Lamp Buddy</p>
                      </div>
                      <div onClick={() => handleProjectClick('/project/4')} className="project-card">
                        <h3>Project 4</h3>
                        <p className="project-preview">Automatic Water Dispensing System</p>
                      </div>
                      <div onClick={() => handleProjectClick('/project/5')} className="project-card">
                        <h3>Project 5</h3>
                        <p className="project-preview">Light Based Head Tracker</p>
                      </div>
                      <div onClick={() => handleProjectClick('/project/6')} className="project-card">
                        <h3>Project 6</h3>
                        <p className="project-preview">Motor Controlled Vehicle</p>
                      </div>
                    </div>
                  </section>

                  <section className="contact" id="contact">
                    <div className="contact-content">
                      <p className="contact-subtitle">GOT A PROJECT IN MIND?</p>
                      <h2 className="contact-title">LET'S CONNECT</h2>
                      <a href="mailto:nahiyanm@bu.edu" className="contact-button">
                        WRITE A MESSAGE
                      </a>
                      <p className="contact-social-text">FEEL FREE TO CONNECT WITH ME ON SOCIAL</p>
                      <div className="contact-social-links">
                        <a href="https://www.joinhandshake.com/" target="_blank" rel="noopener noreferrer">
                          HANDSHAKE
                        </a>
                        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                          LINKEDIN
                        </a>
                        <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
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