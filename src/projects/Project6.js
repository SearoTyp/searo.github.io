import React from 'react';
import { Link } from 'react-router-dom';

const Project6 = () => (
  <div className="project-page">
    <h1>Project 6</h1>
    <div className="project-details">
      <div className="project-content">
        <h3>Description</h3>
        <p>
          A task management app to help users organize their daily activities.
        </p>
        <h3>Technologies Used</h3>
        <ul>
          <li>React</li>
          <li>LocalStorage</li>
          <li>CSS</li>
        </ul>
        <h3>Images</h3>
        <img src="/project6-image.jpg" alt="Project 6" />
        <h3>Links</h3>
        <a href="https://your-project6-link.com" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
    <Link to="/" className="back-link">Back to Home</Link>
  </div>
);

export default Project6;