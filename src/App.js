import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    gsap.fromTo(
      '.intro-text',
      { opacity: 1, y: 0 },
      {
        opacity: 0,
        y: -100,
        scrollTrigger: {
          trigger: '.intro-text',
          start: 'top 20%',
          end: 'bottom 20%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="App">
      <section className="home">
        <h1 className="intro-text">Hi, I’m Searo</h1>
      </section>
      <section className="about">
        <h2>Learn More About Me</h2>
        <p>[Your bio here]</p>
      </section>
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {Array(6).fill().map((_, i) => (
            <div key={i} className="project-card">
              <h3>Project {i + 1}</h3>
              <p>Description goes here</p>
            </div>
          ))}
        </div>
      </section>
      <section className="contact">
        <h2>Contact Me</h2>
        <p>Email: your.email@example.com</p>
      </section>
    </div>
  );
}

export default App;