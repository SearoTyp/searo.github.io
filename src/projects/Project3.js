import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Project3.css';

const Project3 = () => {
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
        <h2>Lamp Buddy</h2>
      </div>
      <div className="project-details">
        <div className="project-goal">
          <h3>Project Goal and Approach</h3>
          <p>
            <strong>Designed and built Lamp Buddy for the Lutron Lighting Innovation Challenge 2024, a smart study lamp that helps students stay focused by minimizing phone distractions.</strong> The lamp features ultrasound sensors for touch-free operation, a timer system that enables study sessions with scheduled breaks, and adjustable mood lighting to create an optimal study environment. My approach involved integrating hardware components like ultrasound sensors and LED strips with a microcontroller, programming the logic using Arduino, and designing a user-friendly interface to control the lamp’s features.
          </p>
        </div>

        <div className="project-content">
          {/* First Image Section: Design Concept */}
          <div className="project-item">
            <img
              src={`${process.env.PUBLIC_URL}/LampBuddy/schem.jpg`}
              alt="Lamp Buddy design concept schematic"
              onError={() => console.error("Failed to load Lamp Buddy Design Concept Image")}
              onClick={() => openModal(`${process.env.PUBLIC_URL}/LampBuddy/schem.jpg`)}
              style={{ cursor: 'pointer' }}
            />
            <p>
              The design concept for Lamp Buddy focused on creating a sleek, modern study lamp that blends functionality with aesthetics:
              <ul className="goal-list">
                <li>Incorporated a minimalist cylindrical design with a matte black finish.</li>
                <li>Positioned ultrasound sensors on top for touch-free interaction.</li>
                <li>Integrated an LED strip around the base for adjustable mood lighting.</li>
              </ul>
            </p>
          </div>

          {/* Second Image Section: Features Showcase */}
          <div className="project-item reverse">
            <div className="collage-container">
              <img
                src={`${process.env.PUBLIC_URL}/LampBuddy/image.jpg`}
                alt="Touch-free operation of Lamp Buddy"
                className="collage-image"
                onClick={() => openModal(`${process.env.PUBLIC_URL}/LampBuddy/image.jpg`)}
                style={{ cursor: 'pointer' }}
              />
              <img
                src={`${process.env.PUBLIC_URL}/LampBuddy/Circuit.jpg`}
                alt="Timer system circuit for Lamp Buddy"
                className="collage-image"
                onClick={() => openModal(`${process.env.PUBLIC_URL}/LampBuddy/Circuit.jpg`)}
                style={{ cursor: 'pointer' }}
              />
              <img
                src={`${process.env.PUBLIC_URL}/LampBuddy/uv.jpg`}
                alt="Mood lighting feature of Lamp Buddy"
                className="collage-image"
                onClick={() => openModal(`${process.env.PUBLIC_URL}/LampBuddy/uv.jpg`)}
                style={{ cursor: 'pointer' }}
              />
              <img
                src={`${process.env.PUBLIC_URL}/LampBuddy/Housing.jpg`}
                alt="Lamp Buddy assembly and housing"
                className="collage-image"
                onClick={() => openModal(`${process.env.PUBLIC_URL}/LampBuddy/Housing.jpg`)}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div>
              <h4>1. Touch-Free Operation</h4>
              <ul className="goal-list">
                <li>Uses ultrasound sensors to detect hand gestures for turning the lamp on/off.</li>
                <li>Allows brightness adjustments with a wave of the hand.</li>
              </ul>
              <h4>2. Timer System</h4>
              <ul className="goal-list">
                <li>Implements the Pomodoro technique with 25-minute study sessions and 5-minute breaks.</li>
                <li>Alerts users with a gentle light fade to indicate break times.</li>
              </ul>
              <h4>3. Mood Lighting</h4>
              <ul className="goal-list">
                <li>Offers adjustable LED colors (warm, cool, and neutral) to suit different study moods.</li>
                <li>Automatically adjusts lighting based on the time of day.</li>
              </ul>
              <h4>4. Assembly Process</h4>
              <ul className="goal-list">
                <li>Constructed the housing using laser-cut Acrylic for a sturdy and aesthetic build.</li>
              </ul>
            </div>
          </div>

          {/* Third Image Section: Implementation Details */}
          <div className="project-item">
            <img
              src={`${process.env.PUBLIC_URL}/LampBuddy/moodlights.jpg`}
              alt="Lamp Buddy implementation with mood lights"
              onError={() => console.error("Failed to load Lamp Buddy Implementation Image")}
              onClick={() => openModal(`${process.env.PUBLIC_URL}/LampBuddy/moodlights.jpg`)}
              style={{ cursor: 'pointer' }}
            />
            <p>
              The implementation of Lamp Buddy involved a combination of hardware and software:
              <ul className="goal-list">
                <li>Used an Arduino microcontroller to manage sensor inputs and LED outputs.</li>
                <li>Programmed the timer and lighting logic using C++ in the Arduino IDE.</li>
                <li>Integrated a small OLED display to show timer status and lighting mode.</li>
              </ul>
            </p>
          </div>
        </div>

        {/* Project Conclusion Section */}
        <div className="project-conclusion">
          <h3>Project Conclusion</h3>
          <p>
            Lamp Buddy was a rewarding project that combined hardware and software to create a practical tool for students. It won 3rd place in the <a href="https://www.bu.edu/eng/academics/teaching-and-innovation/singh-imagineering-lab-silab/competitions/lutron-lighting-competition/lutron-2024-competition/" target="_blank" rel="noopener noreferrer" className="competition-link">Lutron Lighting Innovation Challenge 2024</a>, highlighting its innovative approach to minimizing distractions and enhancing study environments. The project would not have been possible without the help of <em>Inal, Mario, and Slava</em>. Check out our video to see Lamp Buddy in action!
          </p>
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.15)", width: "100%" }}>
            <iframe
              src="https://www.youtube.com/embed/e01kFQK6CQI"
              title="Lamp Buddy Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
            ></iframe>
          </div>
        </div>
      </div>

      <div className="project-links">
        <a
          href="https://www.bu.edu/eng/academics/teaching-and-innovation/singh-imagineering-lab-silab/competitions/lutron-lighting-competition/lutron-2024-competition/"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          Check out the Competition Website
        </a>
        <Link to="/" className="back-link">Back to Home</Link>
      </div>

      {/* Modal for Image Display */}
      {isModalOpen && (
        <div className="image-modal">
          <div className="modal-content">
            <button className="modal-close-button" onClick={closeModal}>
              ×
            </button>
            <div className="modal-image-wrapper">
              <img
                src={selectedImage}
                alt="Enlarged view of Lamp Buddy content"
                className="modal-image"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project3;