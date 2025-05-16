import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Project3.css';

const Project3 = ({ projects, currentProjectId }) => {
  useEffect(() => {
    console.log("Project3 component mounted, scrolling to top");
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
        <h2>Nuclear Thermoelectric Generator</h2>
      </div>

      <div className="project-details">
        <div className="project-goal">
          <h3>Project Goal and Approach</h3>
          <p>
            <strong>The goal was to design a compact, efficient Nuclear Thermoelectric Generator (NTG) producing 1-2 MWe, capable of operating for over 10 years without refueling, for remote applications like space missions or off-grid locations.</strong> Our approach involved leveraging nuclear decay to generate heat via a High Temperature Gas Reactor (HTGR) using TRISO fuel, converting that heat into electricity with thermoelectric generators (TEGs), and ensuring safety through advanced multiphysics simulations using Python, MOOSE, and Gmsh. This design, developed by Bay State Energy, aims to offer a cheaper, safer, and simpler alternative to traditional turbine-based microreactors.
          </p>
        </div>

        <div className="project-content">
          {/* Section 1: Current Microreactor Design and Our Patented Design (2 Pictures Stacked) */}
          <div className="project-item">
            <div className="collage-container vertical-collage">
              <img
                src={`${process.env.PUBLIC_URL}/NTG/12.png`}
                alt="Microturbine efficiencies"
                className="collage-image"
                onError={() => console.error("Failed to load Section 1 Image 1")}
                onClick={() => openModal(`${process.env.PUBLIC_URL}/NTG/12.png`)}
                style={{ cursor: 'pointer' }}
              />
              <img
                src={`${process.env.PUBLIC_URL}/NTG/13.png`}
                alt="TEG efficiencies"
                className="collage-image"
                onError={() => console.error("Failed to load Section 1 Image 2")}
                onClick={() => openModal(`${process.env.PUBLIC_URL}/NTG/13.png`)}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <p>
              <strong>Current Microreactor Design vs. Our Patented NTG Design:</strong> Traditional microreactors often use microturbines, achieving efficiencies of 20-30%, but they involve complex systems with high maintenance costs. Bay State Energy's NTG leverages TEGs, which have shown efficiencies of 17% (single-stage) and up to 25% (multi-stage) in lab settings. By removing turbines and their subsystems, our patented design simplifies the system, potentially lowering costs and improving scalability for mass manufacturing.
            </p>
          </div>

          {/* Section 2: CAD Design of NTG (Text on Top, Image and GIF Stacked Below) */}
          <div className="project-item">
            <p>
              <strong>CAD Design of the Nuclear Thermoelectric Generator:</strong> The NTG unit, designed to fit within a 20-ft shipping container, integrates a High Temperature Gas Reactor (HTGR) with thermoelectric chambers. These visualizations, created using SolidWorks Visualize, showcase the compact design from a front view and a bird's eye perspective, highlighting the reactor core, TEG modules, and auxiliary devices in a closed-loop helium system.
            </p>
            <div className="collage-container vertical-collage">
              <img
                src={`${process.env.PUBLIC_URL}/NTG/10.png`}
                alt="NTG unit front view"
                className="collage-image"
                onError={() => console.error("Failed to load Section 2 Image 1")}
                onClick={() => openModal(`${process.env.PUBLIC_URL}/NTG/10.png`)}
                style={{ cursor: 'pointer' }}
              />
              <img
                src={`${process.env.PUBLIC_URL}/NTG/11.gif`}
                alt="NTG unit bird's eye view"
                className="collage-image"
                onError={() => console.error("Failed to load Section 2 Image 2")}
                onClick={() => openModal(`${process.env.PUBLIC_URL}/NTG/11.gif`)}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>

          {/* Section 3: Simulation Schematic Diagrams (2 Pictures Stacked) */}
          <div className="project-item">
            <div className="collage-container vertical-collage">
              <img
                src={`${process.env.PUBLIC_URL}/NTG/2.png`}
                alt="Simulation systems logic"
                className="collage-image"
                onError={() => console.error("Failed to load Section 3 Image 1")}
                onClick={() => openModal(`${process.env.PUBLIC_URL}/NTG/2.png`)}
                style={{ cursor: 'pointer' }}
              />
              <img
                src={`${process.env.PUBLIC_URL}/NTG/3.png`}
                alt="Multi-stage TEG chambers logic"
                className="collage-image"
                onError={() => console.error("Failed to load Section 3 Image 2")}
                onClick={() => openModal(`${process.env.PUBLIC_URL}/NTG/3.png`)}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <p>
              <strong>Simulation Schematic Diagrams:</strong> These diagrams illustrate our patented approach to TEG integration in the NTG design. The simulation systems logic outlines the multiphysics interactions between the helium reservoir and TEG chambers, while the multi-stage TEG chambers logic details the heat-to-electricity conversion process, optimizing for efficiency and power output in a high-temperature microreactor environment.
            </p>
          </div>

          {/* Section 4: Python Simulations (3 Pictures: 1 Top, 2 Bottom on One Side, Text on the Other) */}
          <div className="project-item simulation-section">
            <div className="text-container">
              <p>
                <strong>Python Simulations:</strong> We developed a custom-built library to simulate the multiphysics of the helium reservoir and TEGs, utilizing the Experimentally Synthesized Thermoelectric Materials (ESTM) database for material parameters. The simulations determined that, using FeNbHfSb, a TEG surface area of 20 m² can output 1.8 MWe, supporting the NTG's power goals. Additionally, we analyzed power density versus temperature for a 0.0035 m leg length TEG system, optimizing performance across operating conditions.
              </p>
            </div>
            <div className="collage-container vertical-collage">
              <img
                src={`${process.env.PUBLIC_URL}/NTG/4.png`}
                alt="Surface area required for a given power output"
                className="collage-image top-image"
                onError={() => console.error("Failed to load Section 4 Image 1")}
                onClick={() => openModal(`${process.env.PUBLIC_URL}/NTG/4.png`)}
                style={{ cursor: 'pointer' }}
              />
              <div className="horizontal-subcollage">
                <img
                  src={`${process.env.PUBLIC_URL}/NTG/5.png`}
                  alt="Power density vs. temperature for a 0.0035 m leg length TEG system"
                  className="collage-image subcollage-image"
                  onError={() => console.error("Failed to load Section 4 Image 2")}
                  onClick={() => openModal(`${process.env.PUBLIC_URL}/NTG/5.png`)}
                  style={{ cursor: 'pointer' }}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/NTG/6.png`}
                  alt="Power density vs. temperature for a 0.0035 m leg length TEG system"
                  className="collage-image subcollage-image"
                  onError={() => console.error("Failed to load Section 4 Image 3")}
                  onClick={() => openModal(`${process.env.PUBLIC_URL}/NTG/6.png`)}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>
          </div>

          {/* Section 5: MOOSE and Gmsh Simulations (Big Block with GIF) */}
          <div className="project-item gif-block">
            <img
              src={`${process.env.PUBLIC_URL}/NTG/8.gif`}
              alt="Power output vs. time simulation result"
              className="gif-image"
              onError={() => console.error("Failed to load Section 5 GIF")}
              onClick={() => openModal(`${process.env.PUBLIC_URL}/NTG/8.gif`)}
              style={{ cursor: 'pointer' }}
            />
          </div>

          {/* Section 6: Additional MOOSE and Gmsh Simulations (2 Images on Left, Text on Right) */}
          <div className="project-item simulation-section">
            <div className="collage-container vertical-collage">
              <img
                src={`${process.env.PUBLIC_URL}/NTG/7.png`}
                alt="Gmsh mesh of TEG chamber"
                className="collage-image top-image"
                onError={() => console.error("Failed to load Section 6 Image 1")}
                onClick={() => openModal(`${process.env.PUBLIC_URL}/NTG/7.png`)}
                style={{ cursor: 'pointer' }}
              />
              <img
                src={`${process.env.PUBLIC_URL}/NTG/14.png`}
                alt="Transient multiphysics simulation results"
                className="collage-image top-image"
                onError={() => console.error("Failed to load Section 6 Image 2")}
                onClick={() => openModal(`${process.env.PUBLIC_URL}/NTG/14.png`)}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className="text-container">
              <p>
                <strong>MOOSE and Gmsh Simulations:</strong> We used MOOSE and Gmsh to perform finite element analysis, modeling heat transfer and power output. The heat conduction equation rho(x) * c(x) * dT/dt = div(k(t, x) * grad(T)) + q and volumetric heat generation equation d/dx(k * dT/dx) + d/dy(k * dT/dy) + d/dz(k * dT/dz) + qV = rho * cp * dT/dt were solved to simulate temperature distribution. The Gmsh mesh, with 2036 nodes and 5850 tetrahedra, enabled detailed analysis of the TEG chamber. The power output equation P = I * (Vdev - I * R) = Pmax = alpha^2 * DeltaTeff^2 / (4 * Rdev) confirmed the NTG's capability to generate sufficient power economically.
              </p>
            </div>
          </div>

          {/* Project Conclusion with Links */}
          <div className="project-conclusion">
            <h3>Project Conclusion</h3>
            <p>
              The Nuclear Thermoelectric Generator project successfully demonstrated the feasibility of a compact, nuclear-powered energy solution producing 1-2 MWe for over 10 years without refueling. By integrating TEGs with an HTGR, we simplified the design, enhancing safety and scalability while achieving competitive efficiencies. The NTG was acclaimed as a “top 100, global university student research project” at Prototypes for Humanity 2024, recognizing its potential to revolutionize microreactor applications in remote environments.
            </p>
            <img
            src={`${process.env.PUBLIC_URL}/NTG/1.png`}
            alt="Final Batch Reverse Osmosis System"
            onError={() => console.error("Failed to load Project Conclusion Image")}
            onClick={() => openModal(`${process.env.PUBLIC_URL}/Harmony/Final.jpg`)}
            style={{ cursor: 'pointer' }}
          />
            <div className="conclusion-links">
              <a href="https://github.com/baystateenergy/ntg-python-simulation" target="_blank" rel="noopener noreferrer" className="conclusion-link">Python Simulation</a>
              <a href="https://www.prototypesforhumanity.com/project/nuclear-thermoelectric-generator/" target="_blank" rel="noopener noreferrer" className="conclusion-link center-link">Prototypes for Humanity</a>
              <a href="https://github.com/SearoTyp/NTG_Simulations.git" target="_blank" rel="noopener noreferrer" className="conclusion-link">MOOSE Simulation</a>
            </div>
          </div>
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

export default Project3;