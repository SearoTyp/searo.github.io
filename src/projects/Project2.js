import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Project2.css';

const Project2 = () => {
  // State to manage the modal visibility and the selected image
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to open the modal with the clicked image
  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="project-page">
      <div className="project-header">
        <h2>FreshFridge</h2>
      </div>
      <div className="project-details">
        <div className="project-goal">
          <h3>Project Goal and Approach</h3>
          <p>
            <strong>My goal was to develop FreshFridge, a web application designed to streamline meal planning, ingredient tracking, and grocery shopping for home cooks and food enthusiasts.</strong> The team first started by deciding on what interface to use and how to execute our imagination. The website interface was built using React, and I created dedicated HTML and CSS files for the Grocery List Page. To manage data efficiently, we stored the Ingredient and Grocery lists using JSON stringify and parse functions and used APIs to fetch custom recipes.
          </p>
          <p>
            The goal of FreshFridge is to streamline meal planning and grocery shopping by providing users with a comprehensive digital kitchen assistant. The application enables users to:
          </p>
          <ul className="goal-list">
            <li>Track their available ingredients,</li>
            <li>Generate recipes based on current inventory and preferences,</li>
            <li>Build and manage grocery lists.</li>
          </ul>
        </div>

        <div className="project-content">
          {/* First Image Section: Single Image */}
          <div className="project-item">
            <img
              src={`${process.env.PUBLIC_URL}/FreshFridge/Schematic Diagram.jpg`}
              alt="FreshFridge Homepage Design"
              onError={() => console.error("Failed to load FreshFridge Homepage Image")}
              onClick={() => openModal(`${process.env.PUBLIC_URL}/FreshFridge/Schematic Diagram.jpg`)}
              style={{ cursor: 'pointer' }}
            />
            <p>
              FreshFridge was developed using a layered full-stack approach:
              <ul className="goal-list">
                <li>Frontend: Built with React.</li>
                <li>Backend: Developed using Node.js, managing API communications with Edamam, session storage, and parsing recipe/nutritional data.</li>
                <li>APIs: Edamam APIs were integrated to fetch real-time recipes and detailed nutrition information tailored to user input.</li>
                <li>Data Persistence: Session storage was used for storing ingredients and grocery lists between interactions.</li>
              </ul>
            </p>
          </div>

          {/* Second Image Section: Collage of 4 Images (2x2 Grid) */}
          <div className="project-item reverse">
            <div className="collage-container">
              <img
                src={`${process.env.PUBLIC_URL}/FreshFridge/Main Page.jpg`}
                alt="Main Page Interface"
                className="collage-image"
                onError={() => console.error("Failed to load Main Page Image")}
                onClick={() => openModal(`${process.env.PUBLIC_URL}/FreshFridge/Main Page.jpg`)}
                style={{ cursor: 'pointer' }}
              />
              <img
                src={`${process.env.PUBLIC_URL}/FreshFridge/Grocery Page.jpg`}
                alt="Grocery List Page"
                className="collage-image"
                onError={() => console.error("Failed to load Grocery List Page Image")}
                onClick={() => openModal(`${process.env.PUBLIC_URL}/FreshFridge/Grocery Page.jpg`)}
                style={{ cursor: 'pointer' }}
              />
              <img
                src={`${process.env.PUBLIC_URL}/FreshFridge/Recipe Page.jpg`}
                alt="Recipe Page"
                className="collage-image"
                onError={() => console.error("Failed to load Recipe Page Image")}
                onClick={() => openModal(`${process.env.PUBLIC_URL}/FreshFridge/Recipe Page.jpg`)}
                style={{ cursor: 'pointer' }}
              />
              <img
                src={`${process.env.PUBLIC_URL}/FreshFridge/Fridge.jpg`}
                alt="Ingredients Page"
                className="collage-image"
                onError={() => console.error("Failed to load Ingredients Page Image")}
                onClick={() => openModal(`${process.env.PUBLIC_URL}/FreshFridge/Fridge.jpg`)}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div>
              <h4>1. Main Page</h4>
              <ul className="goal-list">
                <li>Welcomes users with a clean, intuitive dashboard for quick navigation.</li>
                <li>Displays a summary of available ingredients and suggested recipes.</li>
                <li>Provides quick links to the Ingredients, Recipe, and Grocery List pages.</li>
              </ul>
              <h4>2. Ingredients Page</h4>
              <ul className="goal-list">
                <li>Allows users to input ingredients they currently have.</li>
                <li>Tracks each item along with units or quantity.</li>
                <li>Provides real-time feedback to indicate availability for recipe generation.</li>
              </ul>
              <h4>3. Grocery List Page</h4>
              <ul className="goal-list">
                <li>Users can add missing ingredients or personal items.</li>
                <li>Ingredients from selected recipes can be automatically appended to the list.</li>
                <li>Designed for quick list creation before shopping trips.</li>
              </ul>
              <h4>4. Recipe Page</h4>
              <ul className="goal-list">
                <li>Fetches recipes using the Edamam API based on available ingredients and user preferences (e.g., dietary restrictions).</li>
                <li>Displays recipes with full nutritional breakdowns (calories, macros, vitamins).</li>
                <li>Users can add missing ingredients directly to their grocery list.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Project Conclusion Section */}
        <div className="project-conclusion">
          <h3>Project Conclusion</h3>
          <p>
            FreshFridge was a successful attempt at building an intuitive, feature-rich web application that simplifies kitchen management. The project would not have been possible without <em>Sae</em>, <em>Dil</em>, <em>Alex</em>, <em>Vq</em>, and <em>Jackie</em>. Check out our video to see all the features of FreshFridge!
          </p>
          <div className="conclusion-video" style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}>
            <iframe
              src="https://www.youtube.com/embed/qe16tw61GcM"
              title="FreshFridge Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none"
              }}
            ></iframe>
          </div>
        </div>
      </div>

      <div className="project-links">
        <a
          href="https://github.com/Searotyp/freshfridge"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          Check out the project on GitHub
        </a>
        <Link to="/" className="back-link">Back to Home</Link>
      </div>

      {isModalOpen && (
  <div className="image-modal">
    <div className="modal-content">
      <button className="modal-close-button" onClick={closeModal}>
        ×
      </button>
      <div className="modal-image-wrapper">
        <img
          src={selectedImage}
          alt="Enlarged view of FreshFridge interface"
          className="modal-image"
        />
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default Project2;