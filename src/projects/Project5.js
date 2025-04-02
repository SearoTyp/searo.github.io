import React from 'react';
import { Link } from 'react-router-dom';

const Project5 = () => (
  <div className="project-page">
    <h1>Project 5</h1>
    <div className="project-details">
      <div className="project-content">
        <h3>Description</h3>
        <p>
          A blog platform where users can create and share posts, built with a focus on scalability.
        </p>
        <h3>Technologies Used</h3>
        <ul>
          <li>React</li>
          <li>Firebase</li>
          <li>CSS</li>
        </ul>
        <h3>Images</h3>
        <img src="/project5-image.jpg" alt="Project 5" />
        <h3>Links</h3>
        <a href="https://your-project5-link.com" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
    <Link to="/" className="back-link">Back to Home</Link>
  </div>
);

export default Project5;