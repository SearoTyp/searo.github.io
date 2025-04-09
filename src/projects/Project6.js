import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Project6.css';

const Project6 = () => {
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
        <h2>Motor Speed Control</h2>
      </div>
      <div className="project-details">
        <div className="project-goal">
          <h3>Project Goal and Approach</h3>
          <p>
            <strong>The objective of this project was to design a platform that leverages Multibody Dynamic Simulation to maximize the acceleration of a 1-foot aluminum extrusion section, transporting it 10 feet while keeping it upright.</strong> This initiative tackled the challenge of efficient and stable transportation. Our approach involved CADing and Simulations, iterative prototyping, and rigorous testing to ensure the system achieved its performance targets.
          </p>
        </div>

        <div className="project-content">
          {/* Section 1: Initial Concept */}
          <div className="project-item">
            <img
              src={`${process.env.PUBLIC_URL}/MotorControl/1.jpeg`}
              alt="Initial concept for motor speed control system"
              onError={(e) => {
                console.error("Failed to load Initial Concept Image");
                e.target.src = `${process.env.PUBLIC_URL}/MotorControl/placeholder.png`;
              }}
              onClick={() => openModal(`${process.env.PUBLIC_URL}/MotorControl/1.jpeg`)}
              style={{ cursor: 'pointer' }}
            />
            <div className="text-container">
              <p>
                The project started with the development of initial sketches and designs to explore methods for transporting beams across a specified distance. We began by creating a SolidWorks simulation model to better understand the system’s parameters. This model featured a two-wheel-drive mechanism, with a gear attached to the rear wheels to drive motion through rotation. The accompanying Reaction Force vs. Time graph, shown, provided critical insights into the system’s dynamic behavior during this early phase.
              </p>
            </div>
          </div>

          {/* Section 2: Prototype Development */}
          <div className="project-item reverse">
            <img
              src={`${process.env.PUBLIC_URL}/MotorControl/2.png`}
              alt="Prototype development for motor speed control"
              className="resized-image"
              onError={(e) => {
                console.error("Failed to load Prototype Development Image");
                e.target.src = `${process.env.PUBLIC_URL}/MotorControl/placeholder.png`;
              }}
              onClick={() => openModal(`${process.env.PUBLIC_URL}/MotorControl/2.png`)}
              style={{ cursor: 'pointer' }}
            />
            <div className="text-container">
              <p>
                The simulation yielded a time of 8 seconds at an acceleration of 850 mm/s², which was expected given the larger wheel size used in the model. In the physical prototype, however, we utilized smaller wheels, resulting in longer travel times, as observed in later tests.
              </p>
            </div>
          </div>

          {/* Section 3: System Testing (YouTube Video) */}
          <div className="project-item">
            <iframe
              className="section-video"
              src="https://www.youtube.com/embed/dr3hQA2cLek"
              title="System Testing Video for Motor Speed Control"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onError={() => console.error("Failed to load System Testing Video")}
            ></iframe>
          </div>

          {/* Section 4: Component Assembly */}
          <div className="project-item">
            <img
              src={`${process.env.PUBLIC_URL}/MotorControl/3.png`}
              alt="Component assembly of motor speed control system"
              onError={(e) => {
                console.error("Failed to load Component Assembly Image");
                e.target.src = `${process.env.PUBLIC_URL}/MotorControl/placeholder.png`;
              }}
              onClick={() => openModal(`${process.env.PUBLIC_URL}/MotorControl/3.png`)}
              style={{ cursor: 'pointer' }}
            />
            <div className="text-container">
              <p>
                Following the prototyping phase, we finalized a two-wheel system design, incorporating a rack-and-pinion gear mechanism to drive rotation. This design proved highly effective, ensuring precise motion without slippage. The image below showcases the final design, marking the transition to the physical construction of the model.
              </p>
            </div>
          </div>

          {/* Section 5: Design Refinement */}
          <div className="project-item reverse">
            <img
              src={`${process.env.PUBLIC_URL}/MotorControl/4.jpg`}
              alt="Design refinement for motor speed control system"
              onError={(e) => {
                console.error("Failed to load Design Refinement Image");
                e.target.src = `${process.env.PUBLIC_URL}/MotorControl/placeholder.png`;
              }}
              onClick={() => openModal(`${process.env.PUBLIC_URL}/MotorControl/4.jpg`)}
              style={{ cursor: 'pointer' }}
            />
            <div className="text-container">
              <p>
                The rack-and-pinion components were 3D-printed, while the main body was precision-cut using a laser cutter. The image below presents the completed model, reflecting the culmination of our design and fabrication efforts.
              </p>
            </div>
          </div>

          {/* Section 6: Functional Testing */}
          <div className="project-item">
            <img
              src={`${process.env.PUBLIC_URL}/MotorControl/5.jpeg`}
              alt="Functional testing of motor speed control system"
              onError={(e) => {
                console.error("Failed to load Functional Testing Image");
                e.target.src = `${process.env.PUBLIC_URL}/MotorControl/placeholder.png`;
              }}
              onClick={() => openModal(`${process.env.PUBLIC_URL}/MotorControl/5.jpeg`)}
              style={{ cursor: 'pointer' }}
            />
            <div className="text-container">
              <p>
                This Arduino sketch governs the motor’s acceleration and deceleration for both forward and backward movements using PWM signals on two digital output pins. In the setup() function, pins 5 and 6 are configured as outputs to control the motor. The loop() function orchestrates a gradual increase in PWM values from 0 to 235 to accelerate the motor, followed by a decrease back to 0 for deceleration, with a brief pause before reversing direction. This process is repeated for backward motion, ensuring precise speed and directional control. After one complete cycle, the program enters an infinite loop, halting further execution and maintaining the motor in a static state. This setup is ideal for applications requiring accurate motor control, such as robotics or automated systems.
              </p>
            </div>
          </div>

          {/* Section 7: System Integration */}
          <div className="project-item reverse">
            <img
              src={`${process.env.PUBLIC_URL}/MotorControl/6.jpg`}
              alt="System integration of motor speed control components"
              onError={(e) => {
                console.error("Failed to load System Integration Image");
                e.target.src = `${process.env.PUBLIC_URL}/MotorControl/placeholder.png`;
              }}
              onClick={() => openModal(`${process.env.PUBLIC_URL}/MotorControl/6.jpg`)}
              style={{ cursor: 'pointer' }}
            />
            <div className="text-container">
              <p>
                This section illustrates the integration of all components into a unified system. The image depicts the fully assembled model, highlighting the structural design and the mechanism used to transport the aluminum extrusion while maintaining its upright position.
              </p>
            </div>
          </div>

          {/* Section 8: Key Features Showcase (1x3 Collage on Left, Text on Right) */}
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

          {/* Section 9: Final Demonstration (YouTube Video with Text) */}
          <div className="project-item reverse">
            <iframe
              className="section-video resized-video"
              src="https://www.youtube.com/embed/QXV90hcXmdk"
              title="Final Demonstration Video for Motor Speed Control"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onError={() => console.error("Failed to load Final Demonstration Video")}
            ></iframe>
            <div className="text-container">
              <p>
                The SolidWorks simulation estimated a travel time of approximately 9.5 seconds at an acceleration of 950 mm/s². This closely aligned with our physical model, which completed the 10-foot distance in 10.4 seconds, as shown in the video. The slight discrepancy can be attributed to factors such as surface irregularities or higher-than-expected friction between the tires and the ground.
              </p>
            </div>
          </div>
        </div>

        {/* Project Conclusion Section */}
        <div className="project-conclusion">
          <h3>Project Conclusion</h3>
          <p>
            This project successfully demonstrated the design and implementation of a motor speed control system capable of transporting a 1-foot aluminum extrusion section over a 10-foot distance while maintaining its upright orientation. Through a combination of SolidWorks simulations, iterative prototyping, and motor control via Arduino, we achieved a system that balanced speed, stability, and accuracy. The project would not have been possible without <em>Luis, XimXim, and Kaan</em>. Check out our final design below!
          </p>
          <iframe
            className="conclusion-video"
            src="https://www.youtube.com/embed/gtnZAXxPlus"
            title="Final Design Video for Motor Speed Control"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onError={() => console.error("Failed to load Project Conclusion Video")}
          ></iframe>
        </div>
      </div>

      <div className="project-links">
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
                alt="Enlarged view of motor speed control content"
                className="modal-image"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project6;