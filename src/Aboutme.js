import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Aboutme.css';

const Aboutme = () => {
  const navigate = useNavigate();
  const images = [
    { src: `${process.env.PUBLIC_URL}/About/Food1.png`, alt: 'Nahiyan cooking dish 1', text: 'Chicken Biryani' },
    { src: `${process.env.PUBLIC_URL}/About/Food2.png`, alt: 'Nahiyan cooking dish 2', text: 'Cooking for friends' },
    { src: `${process.env.PUBLIC_URL}/About/1.jpg`, alt: 'Nahiyan cooking dish 3', text: 'My High School' },
    { src: `${process.env.PUBLIC_URL}/About/2.jpg`, alt: 'Nahiyan cooking dish 4', text: 'Soccer' },
    { src: `${process.env.PUBLIC_URL}/About/3.jpg`, alt: 'Nahiyan cooking dish 5', text: 'Tournament Speech' },
    { src: `${process.env.PUBLIC_URL}/About/4.jpg`, alt: 'Nahiyan cooking dish 6', text: 'High School Athlete of the Year' },
    { src: `${process.env.PUBLIC_URL}/About/5.jpg`, alt: 'Nahiyan cooking dish 7', text: 'Dean Imagineering Competition Best Senior Project' },
    { src: `${process.env.PUBLIC_URL}/About/6.jpg`, alt: 'Nahiyan cooking dish 8', text: 'Lutron Lighting Innovation Challenge Third Place' },
    { src: `${process.env.PUBLIC_URL}/About/7.jpg`, alt: 'Nahiyan cooking dish 9', text: 'Research Imposium ' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollToSection = (sectionId) => {
    navigate('/', { state: { skipScrollToTop: true } });
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, images.length]);

  return (
    <div className="aboutme-page">
      <header className="aboutme-header">
        <div className="logo">Nahiyan M.</div>
        <nav className="aboutme-nav">
          <span onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>HOME</span>
          <span onClick={() => scrollToSection('about')} style={{ cursor: 'pointer' }}>ABOUT</span>
          <span onClick={() => scrollToSection('projects')} style={{ cursor: 'pointer' }}>PROJECTS</span>
        </nav>
        <div className="contact-link">
          <span onClick={() => scrollToSection('contact')} style={{ cursor: 'pointer' }}>CONTACT ME</span>
        </div>
      </header>

      <main className="aboutme-content">
        <h1 className="aboutme-title">About Me</h1>
        <div className="aboutme-story">
          <div className="story-text">
            <p>
              I’m Nahiyan, born and raised in the vibrant city of Dhaka, Bangladesh, where the hustle of life and the warmth of community shaped who I am today. Now, I’m pursuing a B.S. in Mechanical and Computer Engineering at Boston University, driven by a passion for creating sustainable solutions and innovative designs. My journey has been fueled by curiosity and a deep love for problem-solving, values instilled by my family and the diverse cultures I’ve embraced.
            </p>
            <p>
              Cooking is one of my greatest joys, especially when it’s for my friends. There’s something magical about gathering around a table, sharing stories, and savoring dishes like spicy Bangladeshi biryani or homemade pasta—each meal a reflection of my heritage and my heart. It’s a way to connect, unwind, and spread happiness, which aligns with my core belief in building meaningful relationships through kindness and collaboration.
            </p>
            <p>
              Today, I strive to be a bridge between technology and humanity, using my skills to make a positive impact. Whether it’s designing CAD models, exploring entrepreneurship, or hitting the gym with friends, I’m motivated by growth and resilience. My dream is to inspire others, leaving a legacy of innovation and warmth—just like the meals I cook for those I cherish.
            </p>
          </div>
          <div className="story-photos">
            <div className="slideshow">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`slide ${index === currentSlide ? 'active' : ''}`}
                >
                  <img src={image.src} alt={image.alt} className="slide-image" />
                  <div className="slide-text">{image.text}</div>
                </div>
              ))}
              <button className="prev-button" onClick={prevSlide}>←</button>
              <button className="next-button" onClick={nextSlide}>→</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Aboutme;