import React from 'react';
import { Link } from 'react-router-dom';

const Project1 = () => (
  <div className="project-page">
    <h1>Project 1</h1>
    <div className="project-details">
      <div className="project-content">
        <h3>Description</h3>
        <p>
          This is a web application I built to showcase my portfolio. It features dynamic animations and a responsive design.
        </p>
        <h3>Technologies Used</h3>
        <ul>
          <li>React</li>
          <li>GSAP</li>
          <li>CSS</li>
        </ul>
        <h3>Images</h3>
        <img src="/project1-image.jpg" alt="Project 1" />
        <h3>Links</h3>
        <a href="https://your-project1-link.com" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
    <Link to="/" className="back-link">Back to Home</Link>
  </div>
);

export default Project1;