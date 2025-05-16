import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Project8.css';

const Project8 = () => {
  useEffect(() => {
    console.log("Project8 component mounted, scrolling to top");
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

  const currentProjectId = 8;
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
        <h2>Light Based Head Tracker</h2>
      </div>

      <div className="project-details">
        <div className="project-goal">
          <h3>Project Goal and Approach</h3>
          <p>
            <strong>The objective of this project was to develop a light-based head tracking system to assist users with limited dexterity in interacting with technology through head movements.</strong> This project aimed to create an accessible solution for applications such as assistive technology, communication devices, or computer navigation. My approach involved designing a headset with light sensors to detect head position, integrating it with a microcontroller for processing, and displaying the position on an LED screen.
          </p>
        </div>

        <div className="project-content">
          {/* Section 1: Prototype */}
          <div className="project-item">
            <img
              src={`${process.env.PUBLIC_URL}/HeadSensor/1.png`}
              alt="Prototype of light-based head tracker"
              onError={() => console.error("Failed to load Section 1 Image")}
              onClick={() => openModal(`${process.env.PUBLIC_URL}/HeadSensor/1.png`)}
              style={{ cursor: 'pointer' }}
            />
            <p>
              <strong>Prototype:</strong> This initial design mimics head movement by tracking light variations and displays the position on an LED screen. It was designed with comfort in mind, ensuring a lightweight and ergonomic fit. The system was specifically made for those with limited dexterity, providing an intuitive way to interact with technology.
            </p>
          </div>

          {/* Section 2: Setup Process */}
          <div className="project-item reverse">
            <img
              src={`${process.env.PUBLIC_URL}/HeadSensor/2.png`}
              alt="Setup process for head tracker"
              onError={() => console.error("Failed to load Section 2 Image")}
              onClick={() => openModal(`${process.env.PUBLIC_URL}/HeadSensor/2.png`)}
              style={{ cursor: 'pointer' }}
            />
            <p>
              <strong>Setup Process:</strong> The headset is designed to be easy to put on and off. The user, often with assistance, places the headset on their head. Next, the user turns on the headlamp to activate the light source. The user then plugs in the Arduino to power the sensor system. Once connected, the system is ready to go, enabling seamless head tracking.
            </p>
          </div>

          {/* Section 3: System Specifications */}
          <div className="project-item">
            <img
              src={`${process.env.PUBLIC_URL}/HeadSensor/3.png`}
              alt="System specifications for head tracker"
              onError={() => console.error("Failed to load Section 3 Image")}
              onClick={() => openModal(`${process.env.PUBLIC_URL}/HeadSensor/3.png`)}
              style={{ cursor: 'pointer' }}
            />
            <p>
              <strong>Headlamp:</strong> Powered by a 9V battery, offering 18.3 hours of use with a spot size of LED at 217 nm.<br />
              <strong>Sensor/Display:</strong> Plugs directly into a wall outlet or a computer, reading data every 50 ms for a fast, near real-time response.<br />
              <strong>Accuracy/Reliability:</strong> Follows the intended direction 97% of the time, as shown in the Phototransistor Voltage vs. Distance graph below.
            </p>
          </div>

          {/* Section 5: Circuitry and Arduino Mega */}
          <div className="project-item reverse">
            <img
              src={`${process.env.PUBLIC_URL}/HeadSensor/8.png`}
              alt="Circuitry of head tracker"
              onError={() => console.error("Failed to load Section 5 Image")}
              onClick={() => openModal(`${process.env.PUBLIC_URL}/HeadSensor/8.png`)}
              style={{ cursor: 'pointer' }}
            />
            <p>
              <strong>Circuitry and Arduino Mega:</strong> The system’s core is powered by an Arduino Mega, which processes data from the sensors and controls the LED display. The circuitry integrates the phototransistors, infrared LEDs, and power management components, ensuring reliable operation and efficient data handling for real-time tracking.
            </p>
          </div>

          {/* Section 6: The Code */}
          <div className="project-item">
            <p>
              The code for the head tracker system manages sensor data collection, processes head movement inputs, and updates the LED display in real-time. The graphs below illustrate the system’s performance, including sensor data processing speed, LED display refresh rate, and error rates during operation, highlighting the efficiency and reliability of the code.
            </p>
            <div className="collage-container horizontal-collage">
              <img
                src={`${process.env.PUBLIC_URL}/HeadSensor/10.png`}
                alt="Sensor data processing speed graph"
                className="collage-image"
                onError={() => console.error("Failed to load Section 6 Image 1")}
                onClick={() => openModal(`${process.env.PUBLIC_URL}/HeadSensor/10.png`)}
                style={{ cursor: 'pointer' }}
              />
              <img
                src={`${process.env.PUBLIC_URL}/HeadSensor/11.png`}
                alt="LED display refresh rate graph"
                className="collage-image"
                onError={() => console.error("Failed to load Section 6 Image 2")}
                onClick={() => openModal(`${process.env.PUBLIC_URL}/HeadSensor/11.png`)}
                style={{ cursor: 'pointer' }}
              />
              <img
                src={`${process.env.PUBLIC_URL}/HeadSensor/12.png`}
                alt="Error rates graph for head tracker"
                className="collage-image"
                onError={() => console.error("Failed to load Section 6 Image 3")}
                onClick={() => openModal(`${process.env.PUBLIC_URL}/HeadSensor/12.png`)}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
        </div>

        <div className="project-conclusion">
          <h3>Project Conclusion</h3>
          <p>
            The Light Based Head Tracker project successfully created an accessible and reliable system for users with limited dexterity to interact with technology through head movements. By integrating light sensors, an Arduino Mega, and an LED display, the system achieved a 97% accuracy rate in tracking head positions, with a fast response time of 50 ms. Challenges such as ensuring comfort, managing varying lighting conditions, and optimizing sensor sensitivity were overcome through iterative design and testing. The final system, as demonstrated in the sections above, provides a practical solution for assistive technology applications, with potential for further development in areas like multi-axis tracking or integration with advanced communication devices. Check out the final demonstration below!
          </p>
          <iframe
            className="collage-video"
            src="https://www.youtube.com/embed/Fo3scTZS1BI"
            title="Light Based Head Tracker Demo"
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

export default Project8;