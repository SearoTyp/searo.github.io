import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Project1.css';

gsap.registerPlugin(ScrollTrigger);

const Project1 = () => {
  const projectRef = useRef(null);
  const navigate = useNavigate(); // Add useNavigate hook

  useEffect(() => {
    console.log("Project1 component mounted");
    
    // Force scroll to top immediately when component mounts
    window.scrollTo(0, 0);
    
    const projectElement = projectRef.current;
    if (!projectElement) {
      console.error("Project element not found");
      return;
    }

    gsap.set(projectElement, { opacity: 1, visibility: 'visible' });
    gsap.set('.project-header', { opacity: 1, visibility: 'visible' });
    gsap.set('.project-header::before', { opacity: 0.3 });
    gsap.set('.project-details', { opacity: 1, visibility: 'visible' });
    gsap.set('.project-content', { opacity: 1, visibility: 'visible' });
    gsap.set('.project-item', { opacity: 1, visibility: 'visible' });
    gsap.set('.back-link', { opacity: 1, visibility: 'visible' });

    gsap.from('.project-header h2', {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power2.out',
      onStart: () => console.log("Animating project header"),
      onComplete: () => {
        gsap.set('.project-header h2', { opacity: 1 });
      },
    });

    gsap.utils.toArray('.project-item').forEach((item, index) => {
      gsap.from(item, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none none',
          onEnter: () => console.log(`Project item ${index + 1} entered viewport`),
        },
      });
    });

    gsap.from('.back-link', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.back-link',
        start: 'top 90%',
        end: 'top 70%',
        toggleActions: 'play none none none',
        onEnter: () => console.log("Back link entered viewport"),
      },
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
      console.log("ScrollTrigger refreshed in Project1.js");
    }, 100);
  }, []);

  // Add handleBackClick to use the same transition effect
  const handleBackClick = () => {
    const overlay = document.querySelector('.transition-overlay');
    const tl = gsap.timeline();
    tl.to(overlay, {
      opacity: 1,
      duration: 0.8,
      ease: 'power2.inOut',
      onComplete: () => {
        navigate('/');
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          onComplete: () => {
            window.scrollTo({ top: 0, behavior: 'instant' });
            console.log("Scrolled to top after navigation to: /");
          },
        });
      },
    });
  };

  return (
    <div className="project-page" ref={projectRef}>
      {console.log("Rendering Project1 component")}
      <div className="project-header">
        <h2>Batch Reverse Osmosis System</h2>
      </div>
      <div className="project-details">
        <div className="project-content">
          <div className="project-item">
            <img
              src={`${process.env.PUBLIC_URL}/nahi.jpg`}
              alt="Project 1"
              onError={() => console.error("Failed to load Project 1")}
            />
            <p>
              This is the first image description for the Batch Reverse Osmosis System project. Here, we showcase the initial design phase, highlighting the core components and their integration.
            </p>
          </div>
          <div className="project-item reverse">
            <img
              src={`${process.env.PUBLIC_URL}/nahi.jpg`}
              alt="Project 2"
              onError={() => console.error("Failed to load Project 2")}
            />
            <p>
              The second image illustrates the testing phase of the system, where we evaluated its efficiency in water purification under various conditions.
            </p>
          </div>
          <div className="project-item">
            <img
              src={`${process.env.PUBLIC_URL}/nahi.jpg`}
              alt="Project 3"
              onError={() => console.error("Failed to load Project 3")}
            />
            <p>
              In this third image, we present the final prototype of the Batch Reverse Osmosis System, showcasing its compact design and improved performance metrics.
            </p>
          </div>
          <div className="project-item reverse">
            <img
              src={`${process.env.PUBLIC_URL}/nahi.jpg`}
              alt="Project 4"
              onError={() => console.error("Failed to load Project 4")}
            />
            <p>
              The fourth image highlights the installation process of the system in a real-world setting, demonstrating its practical application and ease of use.
            </p>
          </div>
          <div className="project-item">
            <img
              src={`${process.env.PUBLIC_URL}/nahi.jpg`}
              alt="Project 5"
              onError={() => console.error("Failed to load Project 5")}
            />
            <p>
              Finally, the fifth image shows the results of our long-term testing, including data on water purity levels and system durability over time.
            </p>
          </div>
        </div>
        <button onClick={handleBackClick} className="back-link">Back to Home</button>
      </div>
    </div>
  );
};

export default Project1;