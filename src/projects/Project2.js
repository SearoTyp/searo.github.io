import React from 'react';
import { Link } from 'react-router-dom';

const Project2 = () => (
  <div className="project-page">
    <h1>Project 2</h1>
    <div className="project-details">
      <div className="project-content">
        <h3>Description</h3>
        <p>
          A game I developed using JavaScript and HTML5 Canvas. It features interactive gameplay and custom graphics.
        </p>
        <h3>Technologies Used</h3>
        <ul>
          <li>JavaScript</li>
          <li>HTML5 Canvas</li>
          <li>CSS</li>
        </ul>
        <h3>Images</h3>
        <img src="/project2-image.jpg" alt="Project 2" />
        <h3>Links</h3>
        <a href="https://your-project2-link.com" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
    <Link to="/" className="back-link">Back to Home</Link>
  </div>
);

export default Project2;