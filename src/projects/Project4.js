import React from 'react';
import { Link } from 'react-router-dom';

const Project4 = () => (
  <div className="project-page">
    <h1>Project 4</h1>
    <div className="project-details">
      <div className="project-content">
        <h3>Description</h3>
        <p>
          A weather app that provides real-time weather updates using a public API.
        </p>
        <h3>Technologies Used</h3>
        <ul>
          <li>React</li>
          <li>API Integration</li>
          <li>CSS</li>
        </ul>
        <h3>Images</h3>
        <img src="/project4-image.jpg" alt="Project 4" />
        <h3>Links</h3>
        <a href="https://your-project4-link.com" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
    <Link to="/" className="back-link">Back to Home</Link>
  </div>
);

export default Project4;