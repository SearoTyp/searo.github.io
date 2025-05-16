import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Project9.css';

const Project9 = () => {
  useEffect(() => {
    console.log("Project9 component mounted, scrolling to top");
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

  const moreProjects = [
    { id: 7, path: '/project/7', title: 'Lumbacare' },
    { id: 8, path: '/project/8', title: 'Light Based Head Tracker' },
    { id: 9, path: '/project/9', title: 'Motor Speed Control' },
  ];

  const currentProjectId = 9;
  const nextProject = moreProjects.find((proj) => proj.id === currentProjectId + 1);
  const previousProject = moreProjects.find((proj) => proj.id === currentProjectId - 1);
  const lastProject = moreProjects[moreProjects.length - 1];

  return (
    <div className="project-page">
      <div className="project-nav">
        <Link to="/more-projects" className="back-link">Back to More Projects</Link>
        {nextProject ? (
          <Link to={nextProject.path} className="next-link">Next Project</Link>
        ) : (
          <Link to={moreProjects[0].path} className="next-link">Back to First Project</Link>
        )}
        {previousProject ? (
          <Link to={previousProject.path} className="prev-link">Previous Project</Link>
        ) : (
          <Link to={`/project/${lastProject.id}`} className="prev-link">Back to Last Project</Link>
        )}
      </div>

      <div className="project-header">
        <h2>Motor Speed Control System</h2>
      </div>

      <div className="project-details">
        <div className="project-goal">
          <h3>Project Goal and Approach</h3>
          <p>
            <strong>The objective of this project was to design a platform that leverages Multibody Dynamic Simulation to maximize the acceleration of a 1-foot aluminum extrusion section, transporting it 10 feet while keeping it upright.</strong> This initiative tackled the challenge of efficient and stable transportation. Our approach involved CADing and Simulations, iterative prototyping, and rigorous testing to ensure the system achieved its performance targets.
          </p>
        </div>

        <div className="project-content">
          {/* Section 1: Initial Sketches and Simulation */}
          <div className="project-item">
            <p>
              The project started with the development of initial sketches and designs to explore methods for transporting beams across a specified distance. We began by creating a SolidWorks simulation model to better understand the system’s parameters. This model featured a two-wheel-drive mechanism, with a gear attached to the rear wheels to drive motion through rotation. The accompanying Reaction Force vs. Time graph, shown, provided critical insights into the system’s dynamic behavior during this early phase.
            </p>
            <img
              src={`${process.env.PUBLIC_URL}/MotorControl/1.jpeg`}
              alt="Initial sketches and simulation model"
              onError={() => console.error("Failed to load Section 1 Image")}
              onClick={() => openModal(`${process.env.PUBLIC_URL}/MotorControl/1.jpeg`)}
              style={{ cursor: 'pointer' }}
            />
          </div>

          {/* Section 2: Simulation Results */}
          <div className="project-item reverse">
            <div className="text-container">
              <p>
                The simulation yielded a time of 8 seconds at an acceleration of 850 mm/s², which was expected given the larger wheel size used in the model. In the physical prototype, however, we utilized smaller wheels, resulting in longer travel times, as observed in later tests.
              </p>
              <img
                src={`${process.env.PUBLIC_URL}/MotorControl/2.png`}
                alt="Simulation results graph"
                onError={() => console.error("Failed to load Section 2 Image")}
                onClick={() => openModal(`${process.env.PUBLIC_URL}/MotorControl/2.png`)}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>

          {/* Section 3: Video Demonstration */}
          <div className="project-item">
            <iframe
              src="https://www.youtube.com/embed/dr3hQA2cLek"
              title="Motor Speed Control System Demo 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Section 4: Final Design */}
          <div className="project-item">
            <img
              src={`${process.env.PUBLIC_URL}/MotorControl/3.png`}
              alt="Final design with rack-and-pinion mechanism"
              onError={() => console.error("Failed to load Section 4 Image")}
              onClick={() => openModal(`${process.env.PUBLIC_URL}/MotorControl/3.png`)}
              style={{ cursor: 'pointer' }}
            />
            <p>
              Following the prototyping phase, we finalized a two-wheel system design, incorporating a rack-and-pinion gear mechanism to drive rotation. This design proved highly effective, ensuring precise motion without slippage. The image below showcases the final design, marking the transition to the physical construction of the model.
            </p>
          </div>

          {/* Section 5: Fabrication */}
          <div className="project-item reverse">
            <img
              src={`${process.env.PUBLIC_URL}/MotorControl/4.jpg`}
              alt="Completed model with 3D-printed components"
              onError={() => console.error("Failed to load Section 5 Image")}
              onClick={() => openModal(`${process.env.PUBLIC_URL}/MotorControl/4.jpg`)}
              style={{ cursor: 'pointer' }}
            />
            <p>
              The rack-and-pinion components were 3D-printed, while the main body was precision-cut using a laser cutter. The image below presents the completed model, reflecting the culmination of our design and fabrication efforts.
            </p>
          </div>

          {/* Section 6: Arduino Code */}
          <div className="project-item">
            <img
              src={`${process.env.PUBLIC_URL}/MotorControl/5.jpeg`}
              alt="Arduino sketch for motor control"
              onError={() => console.error("Failed to load Section 6 Image")}
              onClick={() => openModal(`${process.env.PUBLIC_URL}/MotorControl/5.jpeg`)}
              style={{ cursor: 'pointer' }}
            />
            <p>
              This Arduino sketch governs the motor’s acceleration and deceleration for both forward and backward movements using PWM signals on two digital output pins. In the setup() function, pins 5 and 6 are configured as outputs to control the motor. The loop() function orchestrates a gradual increase in PWM values from 0 to 235 to accelerate the motor, followed by a decrease back to 0 for deceleration, with a brief pause before reversing direction. This process is repeated for backward motion, ensuring precise speed and directional control. After one complete cycle, the program enters an infinite loop, halting further execution and maintaining the motor in a static state. This setup is ideal for applications requiring accurate motor control, such as robotics or automated systems.
            </p>
          </div>

          {/* Section 7: System Integration */}
          <div className="project-item reverse">
            <img
              src={`${process.env.PUBLIC_URL}/MotorControl/6.jpg`}
              alt="Fully assembled model"
              onError={() => console.error("Failed to load Section 7 Image")}
              onClick={() => openModal(`${process.env.PUBLIC_URL}/MotorControl/6.jpg`)}
              style={{ cursor: 'pointer' }}
            />
            <p>
              This section illustrates the integration of all components into a unified system. The image depicts the fully assembled model, highlighting the structural design and the mechanism used to transport the aluminum extrusion while maintaining its upright position.
            </p>
          </div>

          {/* Section 8: Key Features Showcase */}
          <div className="project-item">
            <div className="collage-container vertical-collage">
              <img
                src={`${process.env.PUBLIC_URL}/MotorControl/7.png`}
                alt="Reaction force vs frame graph for motor speed control"
                className="collage-image"
                onError={(e) => {
                  console.error("Failed to load Feature 1 Image");
                  e.target.src = `${process.env.PUBLIC_URL}/MotorControl/placeholder.png`;
                }}
                onClick={() => openModal(`${process.env.PUBLIC_URL}/MotorControl/7.png`)}
                style={{ cursor: 'pointer' }}
              />
              <img
                src={`${process.env.PUBLIC_URL}/MotorControl/8.png`}
                alt="Reaction force vs time graph for motor speed control"
                className="collage-image"
                onError={(e) => {
                  console.error("Failed to load Feature 2 Image");
                  e.target.src = `${process.env.PUBLIC_URL}/MotorControl/placeholder.png`;
                }}
                onClick={() => openModal(`${process.env.PUBLIC_URL}/MotorControl/8.png`)}
                style={{ cursor: 'pointer' }}
              />
              <img
                src={`${process.env.PUBLIC_URL}/MotorControl/9.png`}
                alt="Reaction force vs angular acceleration graph for motor speed control"
                className="collage-image"
                onError={(e) => {
                  console.error("Failed to load Feature 3 Image");
                  e.target.src = `${process.env.PUBLIC_URL}/MotorControl/placeholder.png`;
                }}
                onClick={() => openModal(`${process.env.PUBLIC_URL}/MotorControl/9.png`)}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className="text-container">
              <h4>Key Features Showcase</h4>
              <p>
                Prior to conducting the physical test, we performed a SolidWorks simulation to estimate the time required to cover the 10-foot distance. The collage on the left displays three graphs derived from this simulation, plotting Reaction Force on the y-axis against Frame, Time, and Angular Acceleration on the x-axis. These visualizations were instrumental in determining the total time for the system’s operation.
              </p>
            </div>
          </div>

          {/* Section 9: Final Test Results */}
          <div className="project-item">
            <p>
              The SolidWorks simulation estimated a travel time of approximately 9.5 seconds at an acceleration of 950 mm/s². This closely aligned with our physical model, which completed the 10-foot distance in 10.4 seconds, as shown in the video. The slight discrepancy can be attributed to factors such as surface irregularities or higher-than-expected friction between the tires and the ground.
            </p>
            <iframe
              src="https://www.youtube.com/embed/QXV90hcXmdk"
              title="Motor Speed Control System Final Test"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="project-conclusion">
          <h3>Project Conclusion</h3>
          <p>
            This project successfully demonstrated the design and implementation of a motor speed control system capable of transporting a 1-foot aluminum extrusion section over a 10-foot distance while maintaining its upright orientation. Through a combination of SolidWorks simulations, iterative prototyping, and motor control via Arduino, we achieved a system that balanced speed, stability, and accuracy. The project would not have been possible without Luis, XimXim, and Kaan. Check out our final design below!
          </p>
          <iframe
            src="https://www.youtube.com/embed/gtnZAXxPlus"
            title="Motor Speed Control System Final Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
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

export default Project9;