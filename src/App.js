import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaAngleDoubleDown, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
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
  const overlayRef = useRef(null);
  const headerRef = useRef(null);
  const skillsBoxRef = useRef(null);
  const hobbiesBoxRef = useRef(null);
  const aboutTextRef = useRef(null);

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

    // Background transition effect (gradient wave)
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

    // 3D wave effect for the about section
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

    // 3D wave effect for about-left and about-right children
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

    // Animate project cards with a 3D flip effect
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

    // Contact section animations
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
  }, [loading]);

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

  return (
    <Router>
      <div className="App">
        {loading && <div className="preloader"><span>NM</span></div>}
        <div className="transition-overlay" ref={overlayRef}></div>

        {!loading && (
          <>
            <header className="header" ref={headerRef}>
              <div className="logo">Nahiyan Muhammad's Portfolio</div>
              <nav className="nav">
                <a href="#projects">Projects</a>
                <a href="#about">About</a>
              </nav>
              <div className="contact-link">
                <a href="#contact">Contact Me</a>
              </div>
            </header>

            <Routes>
              <Route
                path="/"
                element={
                  <>
                    {console.log("Rendering Home route")}
                    <section className="home" id="home">
                      <div className="home-content">
                        <h1 className="intro-text">Hi! My name is Nahiyan Muhammad</h1>
                        <p className="role-text">Engineer | Builder | Energy & Sustainability Enthusiast</p>
                        <p className="welcome-text">Welcome to my digital portfolio</p>
                        <div className="scroll-arrow" onClick={scrollToAbout}>
                          <FaAngleDoubleDown />
                        </div>
                      </div>
                      <div className="social-icons">
                        <a
                          href="https://linkedin.com/in/your-profile"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-icon"
                        >
                          <FaLinkedin />
                        </a>
                        <a
                          href="/path-to-your-resume.pdf"
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
                              <li>React</li>
                              <li>GSAP</li>
                              <li>JavaScript</li>
                              <li>HTML/CSS</li>
                            </ul>
                          </div>
                        </div>
                        <div className="about-right">
                          <p ref={aboutTextRef}>
                            Hello! I'm Nahiyan. I love building interactive web experiences and 
                            exploring new technologies. I'm currently focused on front-end development, 
                            animations, and creative design.
                          </p>
                          <div className="hobbies" ref={hobbiesBoxRef}>
                            <h3>Hobbies & Interests</h3>
                            <ul>
                              <li>Photography</li>
                              <li>Music Production</li>
                              <li>Traveling</li>
                              <li>Tech Blogging</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section className="projects" id="projects">
                      <h2>Projects</h2>
                      <div className="project-grid">
                        <Link to="/project/1" className="project-card">
                          <h3>Project 1</h3>
                          <p className="project-preview">A portfolio website with animations</p>
                        </Link>
                        <Link to="/project/2" className="project-card">
                          <h3>Project 2</h3>
                          <p className="project-preview">Interactive game using JavaScript</p>
                        </Link>
                        <Link to="/project/3" className="project-card">
                          <h3>Project 3</h3>
                          <p className="project-preview">E-commerce website</p>
                        </Link>
                        <Link to="/project/4" className="project-card">
                          <h3>Project 4</h3>
                          <p className="project-preview">Weather app with API</p>
                        </Link>
                        <Link to="/project/5" className="project-card">
                          <h3>Project 5</h3>
                          <p className="project-preview">Blog platform</p>
                        </Link>
                        <Link to="/project/6" className="project-card">
                          <h3>Project 6</h3>
                          <p className="project-preview">Task management app</p>
                        </Link>
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
              <Route path="/project/1" element={<Project1 />} />
              <Route path="/project/2" element={<Project2 />} />
              <Route path="/project/3" element={<Project3 />} />
              <Route path="/project/4" element={<Project4 />} />
              <Route path="/project/5" element={<Project5 />} />
              <Route path="/project/6" element={<Project6 />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;