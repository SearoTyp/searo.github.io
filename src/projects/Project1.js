import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Project1.css';

const Project1 = ({ projects, currentProjectId }) => {
  useEffect(() => {
    console.log("Project1 component mounted, scrolling to top");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

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
        <h2>Batch Reverse Osmosis System</h2>
      </div>

      <div className="project-details">
        <div className="project-goal">
          <h3>Project Goal and Approach</h3>
          <p>
            <strong>My goal was to design and engineer the first-ever Countertop Batch Reverse Osmosis (BRO) Filter for Harmony Desalting.</strong> I approached the project by first defining the inspiration for the project, answering questions
            such as: <em>where would it be used, why is it better, who would it benefit and of course, how would I build it.</em> I began the procurement for the project, preparing the Bill of Materials alongside designing the Piping and Instrumentation Diagrams.
          </p>
        </div>

        <div className="project-content">
          <div className="project-item">
            <img
              src={`${process.env.PUBLIC_URL}/Harmony/P&ID.png`}
              alt="Piping and Instrumentation Diagram for Batch Reverse Osmosis System"
              onError={() => console.error("Failed to load Project 1")}
              onClick={() => openModal(`${process.env.PUBLIC_URL}/Harmony/P&ID.png`)}
              style={{ cursor: 'pointer' }}
            />
            <p>
              Inspired by industrial-scale P&IDs, I designed a streamlined version tailored for this project. Strategic component placement and cost-conscious design decisions were key to its success. Safety remained a top priority throughout, leading to the integration of pressure relief valves and a robust water circulation system.
            </p>
          </div>

          <div className="project-item reverse">
            <div className="collage-container">
              <img
                src={`${process.env.PUBLIC_URL}/Harmony/Coverblock.jpg`}
                alt="Cover block of the Batch Reverse Osmosis System"
                className="collage-image"
                onError={() => console.error("Failed to load Collage 1")}
                onClick={() => openModal(`${process.env.PUBLIC_URL}/Harmony/Coverblock.jpg`)}
                style={{ cursor: 'pointer' }}
              />
              <img
                src={`${process.env.PUBLIC_URL}/Harmony/Lidfit.jpg`}
                alt="Lid fitting of the Batch Reverse Osmosis System"
                className="collage-image"
                onError={() => console.error("Failed to load Collage 2")}
                onClick={() => openModal(`${process.env.PUBLIC_URL}/Harmony/Lidfit.jpg`)}
                style={{ cursor: 'pointer' }}
              />
              <img
                src={`${process.env.PUBLIC_URL}/Harmony/ROinside.jpg`}
                alt="Inside view of the Reverse Osmosis system"
                className="collage-image"
                onError={() => console.error("Failed to load Collage 3")}
                onClick={() => openModal(`${process.env.PUBLIC_URL}/Harmony/ROinside.jpg`)}
                style={{ cursor: 'pointer' }}
              />
              <img
                src={`${process.env.PUBLIC_URL}/Harmony/Rooutside.jpg`}
                alt="Outside view of the Reverse Osmosis system"
                className="collage-image"
                onError={() => console.error("Failed to load Collage 4")}
                onClick={() => openModal(`${process.env.PUBLIC_URL}/Harmony/Rooutside.jpg`)}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <p>
              A commercial water filter was retrofitted to develop the BRO system. The collage highlights key components from the original unit alongside a custom CAD design for the new housing. To minimize costs, critical elements like the high-pressure and circulation pumps were preserved and integrated into the redesigned system.
            </p>
          </div>

          <div className="project-item">
            <div className="collage-container">
              <iframe
                className="collage-video"
                src="https://www.youtube.com/embed/EeYUG1SiIBo"
                title="Circuit Video for Batch Reverse Osmosis System"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="collage-images">
                <img
                  src={`${process.env.PUBLIC_URL}/Harmony/CircuitDiagram.jpg`}
                  alt="Circuit diagram for the Batch Reverse Osmosis System"
                  className="collage-image"
                  onError={() => console.error("Failed to load Collage Image 1")}
                  onClick={() => openModal(`${process.env.PUBLIC_URL}/Harmony/CircuitDiagram.jpg`)}
                  style={{ cursor: 'pointer' }}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/Harmony/ElectronicsBox.jpg`}
                  alt="Electronics box of the Batch Reverse Osmosis System"
                  className="collage-image"
                  onError={() => console.error("Failed to load Collage Image 2")}
                  onClick={() => openModal(`${process.env.PUBLIC_URL}/Harmony/ElectronicsBox.jpg`)}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>
            <p>
              The circuit diagram illustrates how core components manage water flow throughout the system. Directional flow was controlled using solenoid valves operated via solid-state relays. A circulation pump was integrated to enable BRO functionality. For safety and autonomy, the system was built with transient suppressors (RC snubbers), Arduino-based control logic, and circuit breakers—eliminating the need for daily maintenance. All programming was done using the Arduino IDE. Components were rigorously tested for performance and reliability; one of the key tests involved monitoring solenoid valve actuation and ensuring they remained within safe thermal limits.
            </p>
          </div>

          <div className="project-item">
            <iframe
              className="collage-video"
              src="https://www.youtube.com/embed/QspQdUqWWcw"
              title="Pressure Gauge Demonstration for Batch Reverse Osmosis System"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>
              A pressure gauge was installed on the vessel to visualize the BRO system in action. When pressure rises, the system enters the permeate production phase—generating clean drinking water. As the pressure drops, the system resets, initiating a new cycle.
            </p>
          </div>
        </div>
        <div className="project-item reverse">
        <div className="collage-container">
                  <img
                    src={`${process.env.PUBLIC_URL}/Harmony/Connector1.jpg`}
                    alt="Custom Component 1"
                    className="collage-image"
                    onClick={() => openModal(`${process.env.PUBLIC_URL}/Harmony/Connector1.jpg`)}
                    style={{ cursor: 'pointer' }}
                  />
                  <img
                    src={`${process.env.PUBLIC_URL}/Harmony/Conducsens.jpg`}
                    alt="Custom Component 2"
                    className="collage-image"
                    onClick={() => openModal(`${process.env.PUBLIC_URL}/Harmony/Conducsens.jpg`)}
                    style={{ cursor: 'pointer' }}
                  />
                  <img
                    src={`${process.env.PUBLIC_URL}/Harmony/ValveHolder.jpg`}
                    alt="Custom Component 3"
                    className="collage-image"
                    onClick={() => openModal(`${process.env.PUBLIC_URL}/Harmony/ValveHolder.jpg`)}
                    style={{ cursor: 'pointer' }}
                  />
                  <img
                    src={`${process.env.PUBLIC_URL}/Harmony/Permeate connector.jpg`}
                    alt="Custom Component 4"
                    className="collage-image"
                    onClick={() => openModal(`${process.env.PUBLIC_URL}/Harmony/Permeate connector.jpg`)}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
                <p>
                  The components shown here were custom-designed for 3D printing using a resin printer to ensure watertight precision. These fittings were engineered to support a robust system capable of integrating multiple sensors and a bladder, enabling seamless connectivity and reliable performance under pressure.
                </p>
              </div>
        

        <div className="project-conclusion">
          <h3>Project Conclusion</h3>
          <p>
            The Countertop Batch Reverse Osmosis Filter project for Harmony Desalting was a resounding success. It would not have been possible without the mentorship and support of <strong>Quantum Wei</strong>. Who played a pivotal role in guiding me throughout the process and helping me expand my knowledge. Beyond learning about BRO systems, this project deepened my skills in initiative-taking, problem-solving under pressure, and applying engineering theory to real-world challenges.
          </p>
          <img
            src={`${process.env.PUBLIC_URL}/Harmony/Final.jpg`}
            alt="Final Batch Reverse Osmosis System"
            onError={() => console.error("Failed to load Project Conclusion Image")}
            onClick={() => openModal(`${process.env.PUBLIC_URL}/Harmony/Final.jpg`)}
            style={{ cursor: 'pointer' }}
          />
        </div>
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

export default Project1;