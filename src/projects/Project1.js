import React from 'react';
import { Link } from 'react-router-dom';
import './Project1.css';

const Project1 = () => {
  return (
    <div className="project-page">
      <div className="project-header">
        <h2>Batch Reverse Osmosis System</h2>
      </div>
      <div className="project-details">
        <div className="project-goal">
          <h3>Project Goal and Approach</h3>
          <p>
            <strong>My goal was to design and engineer the first-ever Countertop Batch Reverse Osmosis (BRO) Filter for Harmony Desalting.</strong> I approached the project by first defining the inspiration for the project, answering questions
            such as: <em>where would it be used, why is it better, who would it benefit and of course, how would I build it.</em> I began the procurement for the project, preparing the Bill of Materials
            alongside designing the Piping and Instrumentation Diagrams.
          </p>
        </div>

        <div className="project-content">
          {/* First Image Section: Single Image */}
          <div className="project-item">
            <img
              src={`${process.env.PUBLIC_URL}/Harmony/P&ID.png`}
              alt="Piping and Instrumentation Diagram for Batch Reverse Osmosis System"
              onError={() => console.error("Failed to load Project 1")}
            />
            <p>
              Inspired by industrial-scale P&IDs, I designed a streamlined version tailored for this project. Strategic component placement and cost-conscious design decisions were key to its success. Safety remained a top priority throughout, leading to the integration of pressure relief valves and a robust water circulation system.
            </p>
          </div>

          {/* Second Image Section: Collage of 4 Images (2x2 Grid) */}
          <div className="project-item reverse">
            <div className="collage-container">
              <img
                src={`${process.env.PUBLIC_URL}/Harmony/Coverblock.jpg`}
                alt="Cover block of the Batch Reverse Osmosis System"
                className="collage-image"
                onError={() => console.error("Failed to load Collage 1")}
              />
              <img
                src={`${process.env.PUBLIC_URL}/Harmony/Lidfit.jpg`}
                alt="Lid fitting of the Batch Reverse Osmosis System"
                className="collage-image"
                onError={() => console.error("Failed to load Collage 2")}
              />
              <img
                src={`${process.env.PUBLIC_URL}/Harmony/ROinside.jpg`}
                alt="Inside view of the Reverse Osmosis system"
                className="collage-image"
                onError={() => console.error("Failed to load Collage 3")}
              />
              <img
                src={`${process.env.PUBLIC_URL}/Harmony/Rooutside.jpg`}
                alt="Outside view of the Reverse Osmosis system"
                className="collage-image"
                onError={() => console.error("Failed to load Collage 4")}
              />
            </div>
            <p>
              A commercial water filter was retrofitted to develop the BRO system. The collage highlights key components from the original unit alongside a custom CAD design for the new housing. To minimize costs, critical elements like the high-pressure and circulation pumps were preserved and integrated into the redesigned system.
            </p>
          </div>

          {/* Third Image Section: Collage of 1 Video and 2 Images */}
          <div className="project-item">
            <div className="collage-container">
              <video
                className="collage-video"
                loop
                controls
                playsInline
                onError={() => console.error("Failed to load Collage Video")}
              >
                <source src={`${process.env.PUBLIC_URL}/Harmony/Circuitvid.mov`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <img
                src={`${process.env.PUBLIC_URL}/Harmony/CircuitDiagram.jpg`}
                alt="Circuit diagram for the Batch Reverse Osmosis System"
                className="collage-image"
                onError={() => console.error("Failed to load Collage Image 1")}
              />
              <img
                src={`${process.env.PUBLIC_URL}/Harmony/ElectronicsBox.jpg`}
                alt="Electronics box of the Batch Reverse Osmosis System"
                className="collage-image"
                onError={() => console.error("Failed to load Collage Image 2")}
              />
            </div>
            <p>
              The circuit diagram illustrates how core components manage water flow throughout the system. Directional flow was controlled using solenoid valves operated via solid-state relays. A circulation pump was integrated to enable BRO functionality. For safety and autonomy, the system was built with transient suppressors (RC snubbers), Arduino-based control logic, and circuit breakers—eliminating the need for daily maintenance. All programming was done using the Arduino IDE. Components were rigorously tested for performance and reliability; one of the key tests involved monitoring solenoid valve actuation and ensuring they remained within safe thermal limits.
            </p>
          </div>

          {/* Fourth Image Section: Collage of 6 Images (2x3 Grid) */}
          <div className="project-item reverse">
            <div className="collage-container">
              <img
                src={`${process.env.PUBLIC_URL}/Harmony/PVback.jpg`}
                alt="Installation 1 of the Batch Reverse Osmosis System"
                className="collage-image"
                onError={() => console.error("Failed to load Collage Image 4-1")}
              />
              <img
                src={`${process.env.PUBLIC_URL}/Harmony/PVBlocker.jpg`}
                alt="Installation 2 of the Batch Reverse Osmosis System"
                className="collage-image"
                onError={() => console.error("Failed to load Collage Image 4-2")}
              />
              <img
                src={`${process.env.PUBLIC_URL}/Harmony/Connector1.jpg`}
                alt="Installation 3 of the Batch Reverse Osmosis System"
                className="collage-image"
                onError={() => console.error("Failed to load Collage Image 4-3")}
              />
              <img
                src={`${process.env.PUBLIC_URL}/Harmony/Conducsens.jpg`}
                alt="Installation 4 of the Batch Reverse Osmosis System"
                className="collage-image"
                onError={() => console.error("Failed to load Collage Image 4-4")}
              />
              <img
                src={`${process.env.PUBLIC_URL}/Harmony/ValveHolder.jpg`}
                alt="Installation 5 of the Batch Reverse Osmosis System"
                className="collage-image"
                onError={() => console.error("Failed to load Collage Image 4-5")}
              />
              <img
                src={`${process.env.PUBLIC_URL}/Harmony/Permeate Connector.jpg`}
                alt="Installation 6 of the Batch Reverse Osmosis System"
                className="collage-image"
                onError={() => console.error("Failed to load Collage Image 4-6")}
              />
            </div>
            <p>
              The components shown here were custom-designed for 3D printing using a resin printer to ensure watertight precision. These fittings were engineered to support a robust system capable of integrating multiple sensors and a bladder, enabling seamless connectivity and reliable performance under pressure.
            </p>
          </div>

          {/* Fifth Image Section: Single Video */}
          <div className="project-item">
            <video
              className="collage-video"
              loop
              controls
              playsInline
              onError={() => console.error("Failed to load Collage Video")}
            >
              <source src={`${process.env.PUBLIC_URL}/Harmony/Pressuregauge.mov`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>
              A pressure gauge was installed on the vessel to visualize the BRO system in action. When pressure rises, the system enters the permeate production phase—generating clean drinking water. As the pressure drops, the system resets, initiating a new cycle.
            </p>
          </div>
        </div>

        {/* Project Conclusion Section */}
        <div className="project-conclusion">
          <h3>Project Conclusion</h3>
          <p>
            The Countertop Batch Reverse Osmosis Filter project for Harmony Desalting was a resounding success. It would not have been possible without the mentorship and support of <strong>Quantum Wei</strong>. Who played a pivotal role in guiding me throughout the process and helping me expand my knowledge. Beyond learning about BRO systems, this project deepened my skills in initiative-taking, problem-solving under pressure, and applying engineering theory to real-world challenges.
          </p>
          <img
            src={`${process.env.PUBLIC_URL}/Harmony/Final.jpg`}
            alt="Final Batch Reverse Osmosis System"
            onError={() => console.error("Failed to load Project Conclusion Image")}
          />
        </div>
      </div>

      <Link to="/" className="back-link">Back to Home</Link>
    </div>
  );
};

export default Project1;