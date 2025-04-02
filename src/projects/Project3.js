import React from 'react';
import { Link } from 'react-router-dom';

const Project3 = () => (
  <div className="project-page">
    <h1>Project 3</h1>
    <div className="project-details">
      <div className="project-content">
        <h3>Description</h3>
        <p>
          An e-commerce website with a focus on user experience and performance optimization.
        </p>
        <h3>Technologies Used</h3>
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>MongoDB</li>
        </ul>
        <h3>Images</h3>
        <img src="/project3-image.jpg" alt="Project 3" />
        <h3>Links</h3>
        <a href="https://your-project3-link.com" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
    <Link to="/" className="back-link">Back to Home</Link>
  </div>
);

export default Project3;