import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Project4.css';

const Project4 = ({ projects, currentProjectId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const nextProject = projects.find((proj) => proj.id === currentProjectId + 1);
  const previousProject = projects.find((proj) => proj.id === currentProjectId - 1);
   const lastProject = projects[projects.length - 1];
  
    return (
      <div className="project-page">
        <div className="project-nav">
          <Link to="/" className="back-link">Back to Home</Link>
          {nextProject ? (
            <Link to={nextProject.path} className="next-link">Next Project</Link>
          ) : (
            <Link to="/project/1" className="next-link">Back to First Project</Link>
          )}
          {previousProject ? (
           <Link to={previousProject.path} className="prev-link">Previous Project</Link>
          ) : (
           <Link to={`/project/${lastProject.id}`} className="prev-link">Back to Last Project</Link>
          )}
        </div>

      <div className="project-header">
        <h2>Automatic Water Dispensing System</h2>
      </div>
      <div className="project-details">
        <div className="project-goal">
          <h3>Project Goal and Approach</h3>
          <p>
            <strong>Designed, manufactured, assembled, and automated a Cartesian motor system with 2.5 degrees of freedom for an automatic water dispensing system.</strong> This system was developed to deliver precise water dispensing for applications such as plant irrigation or industrial fluid management. My approach involved creating custom parts using Onshape and Solidworks, efficiently manufacturing components with a waterjet, and programming the system with G-code to achieve full automation and adaptability.
          </p>
        </div>

        <div className="project-content">
          {/* Section 1: Preliminary Motor Testing */}
          <div className="project-item">
            <img
              src={`${process.env.PUBLIC_URL}/WaterDispensing/1.jpg`}
              alt="Initial Experimentation"
              onError={() => console.error("Failed to load Initial Experimentation Image")}
              onClick={() => openModal(`${process.env.PUBLIC_URL}/WaterDispensing/1.jpg`)}
              style={{ cursor: 'pointer' }}
            />
            <p>
              Before starting the main project, we conducted initial tests to understand stepper motor functionality by using them to draw on cardboard with a marker. This foundational step was essential since our project also utilized three motors. A unique feature of our experiment was converting G-code into visual outputs using Repetier Host and Arduino, resulting in a successful drawing of a dinosaur.
            </p>
          </div>

          {/* Section 2: Conceptual Design Development */}
          <div className="project-item reverse">
            <img
              src={`${process.env.PUBLIC_URL}/WaterDispensing/2.jpg`}
              alt="Design Concept"
              onError={() => console.error("Failed to load Design Concept Image")}
              onClick={() => openModal(`${process.env.PUBLIC_URL}/WaterDispensing/2.jpg`)}
              style={{ cursor: 'pointer' }}
            />
            <p>
              The project kicked off with a brainstorming session to define the system’s objectives, ultimately deciding on an automatic water dispensing system. This image showcases the initial conceptual model of our water dispenser. In later sections, we’ll explore how this concept evolved into the final product, highlighting key differences and improvements.
            </p>
          </div>

          {/* Section 3: Component Fabrication Process */}
          <div className="project-item">
            <img
              src={`${process.env.PUBLIC_URL}/WaterDispensing/3.jpg`}
              alt="Component Fabrication"
              onError={() => console.error("Failed to load Component Fabrication Image")}
              onClick={() => openModal(`${process.env.PUBLIC_URL}/WaterDispensing/3.jpg`)}
              style={{ cursor: 'pointer' }}
            />
            <p>
              Fabricating the components was a pivotal phase in transforming our concept into reality. We used a waterjet to precisely cut custom parts, ensuring durability and accuracy. This image captures the early stages of component manufacturing, which laid the groundwork for the assembly of our water dispensing system.
            </p>
          </div>

          {/* Section 4: Custom Parts Overview (3x3 Grid Collage with 9 Images) */}
          <div className="project-item">
            <div>
              <h4>Custom Parts Overview</h4>
              <p>
                To bring our design to life, we crafted a series of custom components essential for the water dispensing system: 
                <p><ul className="goal-list">
                  <li>8020 Holder</li>
                  <li>Stepper Motor Bracket</li>
                  <li>Pump Holder</li>
                  <li>Middle Motor Mount</li>
                  <li>Idle Pulley Mount Cross</li>
                  <li>Gear</li>
                  <li>Cross Member</li>
                  <li>Spray Sleeve</li>
                  <li>Spray Tube</li>
                  <li>Spray Cap</li>
                </ul></p>
              </p>
            </div>
            <div className="collage-container">
              <img
                src={`${process.env.PUBLIC_URL}/WaterDispensing/4.jpg`}
                alt="Part 1"
                className="collage-image"
                onClick={() => openModal(`${process.env.PUBLIC_URL}/WaterDispensing/4.jpg`)}
                style={{ cursor: 'pointer' }}
              />
              <img
                src={`${process.env.PUBLIC_URL}/WaterDispensing/5.jpg`}
                alt="Part 2"
                className="collage-image"
                onClick={() => openModal(`${process.env.PUBLIC_URL}/WaterDispensing/5.jpg`)}
                style={{ cursor: 'pointer' }}
              />
              <img
                src={`${process.env.PUBLIC_URL}/WaterDispensing/6.jpg`}
                alt="Part 3"
                className="collage-image"
                onClick={() => openModal(`${process.env.PUBLIC_URL}/WaterDispensing/6.jpg`)}
                style={{ cursor: 'pointer' }}
              />
              <img
                src={`${process.env.PUBLIC_URL}/WaterDispensing/7.jpg`}
                alt="Part 4"
                className="collage-image"
                onClick={() => openModal(`${process.env.PUBLIC_URL}/WaterDispensing/7.jpg`)}
                style={{ cursor: 'pointer' }}
              />
              <img
                src={`${process.env.PUBLIC_URL}/WaterDispensing/8.jpg`}
                alt="Part 5"
                className="collage-image"
                onClick={() => openModal(`${process.env.PUBLIC_URL}/WaterDispensing/8.jpg`)}
                style={{ cursor: 'pointer' }}
              />
              <img
                src={`${process.env.PUBLIC_URL}/WaterDispensing/9.jpg`}
                alt="Part 6"
                className="collage-image"
                onClick={() => openModal(`${process.env.PUBLIC_URL}/WaterDispensing/9.jpg`)}
                style={{ cursor: 'pointer' }}
              />
              <img
                src={`${process.env.PUBLIC_URL}/WaterDispensing/10.jpg`}
                alt="Part 7"
                className="collage-image"
                onClick={() => openModal(`${process.env.PUBLIC_URL}/WaterDispensing/10.jpg`)}
                style={{ cursor: 'pointer' }}
              />
              <img
                src={`${process.env.PUBLIC_URL}/WaterDispensing/11.jpg`}
                alt="Part 8"
                className="collage-image"
                onClick={() => openModal(`${process.env.PUBLIC_URL}/WaterDispensing/11.jpg`)}
                style={{ cursor: 'pointer' }}
              />
              <img
                src={`${process.env.PUBLIC_URL}/WaterDispensing/12.jpg`}
                alt="Part 9"
                className="collage-image"
                onClick={() => openModal(`${process.env.PUBLIC_URL}/WaterDispensing/12.jpg`)}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>

          {/* Section 5: Motor Integration Demonstration */}
          <div className="project-item">
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.15)", width: "100%" }}>
              <iframe
                src="https://www.youtube.com/embed/mX1cEsyZYXI"
                title="Motor Integration Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
              ></iframe>
            </div>
          </div>

          {/* Section 6: Adding the Sprayer Mechanism */}
          <div className="project-item reverse">
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.15)", width: "100%" }}>
              <iframe
                src="https://www.youtube.com/embed/Fn5qT6mBMYk"
                title="Sprayer Mechanism Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
              ></iframe>
            </div>
            <p>
              After successfully testing the system’s two primary axes, as shown in the video, we introduced the final half degree of freedom by incorporating a sprayer mechanism. This was achieved by attaching the sprayer to the middle-mounted motor using a gear and transfer case, enabling precise rotational movement for effective water dispersion.
            </p>
          </div>

          {/* Section 7: Overcoming Gear Fabrication Challenges */}
          <div className="project-item">
            <img
              src={`${process.env.PUBLIC_URL}/WaterDispensing/gear.jpg`}
              alt="Sensor Integration"
              onClick={() => openModal(`${process.env.PUBLIC_URL}/WaterDispensing/gear.jpg`)}
              style={{ cursor: 'pointer' }}
            />
            <p>
              One of the major challenges we faced was fabricating the gear to ensure precise alignment with the motor pulley’s teeth. Initial attempts using 3D printing failed due to insufficient accuracy in tooth spacing and the material’s lack of durability, causing the parts to slip. To resolve this, we switched to waterjet cutting the gear from acrylic, which provided the necessary precision and durability for reliable operation.
            </p>
          </div>

          {/* Section 8: System Elevation for Enhanced Display */}
          <div className="project-item reverse">
            <img
              src={`${process.env.PUBLIC_URL}/WaterDispensing/house.jpg`}
              alt="Assembly Process"
              onClick={() => openModal(`${process.env.PUBLIC_URL}/WaterDispensing/house.jpg`)}
              style={{ cursor: 'pointer' }}
            />
            <p>
              To better demonstrate the system’s functionality and create a more realistic model, we elevated the entire setup—a feature not part of the original design, as seen here. This modification allowed us to fully showcase the water dispensing system in action, enhancing both its practicality and visual appeal.
            </p>
          </div>

          {/* Section 9: Final System Assembly and Testing */}
          <div className="project-item">
            <img
              src={`${process.env.PUBLIC_URL}/WaterDispensing/elvehousing.jpg`}
              alt="Testing and Calibration"
              onClick={() => openModal(`${process.env.PUBLIC_URL}/WaterDispensing/elvehousing.jpg`)}
              style={{ cursor: 'pointer' }}
            />
            <p>
              Despite minor challenges, such as integrating the pump and DC motor with the water system, we successfully resolved these issues and completed the final assembly. The result is a fully automated water dispensing system, ready to perform reliably in real-world applications.
            </p>
          </div>

          {/* Section 10: G-code Programming and System Automation */}
          <div className="project-item vertical-layout">
            <div className="text-container">
              <h4>G-code Programming and System Automation</h4>
              <p>
                The entire system was powered by an Arduino Mega, programmed using G-code to automate its operations. We developed a program on the Arduino Mega to interpret G-code instructions, utilizing Repetier-Host to write and execute the code. This setup allows users to input specific parameters, such as plant locations and watering durations, enabling the system to automatically handle diverse dispensing patterns with precision.
              </p>
            </div>
            <div className="collage-container">
              <img
                src={`${process.env.PUBLIC_URL}/WaterDispensing/code1.jpeg`}
                alt="Final System 1"
                className="collage-image"
                onClick={() => openModal(`${process.env.PUBLIC_URL}/WaterDispensing/code1.jpeg`)}
                style={{ cursor: 'pointer' }}
              />
              <img
                src={`${process.env.PUBLIC_URL}/WaterDispensing/code2.jpeg`}
                alt="Final System 2"
                className="collage-image"
                onClick={() => openModal(`${process.env.PUBLIC_URL}/WaterDispensing/code2.jpeg`)}
                style={{ cursor: 'pointer' }}
              />
              <img
                src={`${process.env.PUBLIC_URL}/WaterDispensing/code.jpeg`}
                alt="Final System 3"
                className="collage-image"
                onClick={() => openModal(`${process.env.PUBLIC_URL}/WaterDispensing/code.jpeg`)}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
        </div>

        <div className="project-conclusion">
          <h3>Project Conclusion</h3>
          <p>
            The video below demonstrates the real-world functionality of our water dispensing system. We incorporated a sprinkler mechanism using a DC motor to mimic the gentle sprinkling motion required for seeds, avoiding overwatering. This video provides a comprehensive overview of the system’s capabilities, highlights the challenges we overcame, and showcases the complete model in action.
          </p>
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.15)", width: "100%" }}>
            <iframe
              src="https://www.youtube.com/embed/A_hi-rURnzw"
              title="Final System Overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
            ></iframe>
          </div>
        </div>
      </div>

      <div className="project-links">
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
                alt="Enlarged view of project content"
                className="modal-image"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project4;