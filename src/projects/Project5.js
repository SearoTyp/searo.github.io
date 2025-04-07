import React from 'react';
import { Link } from 'react-router-dom';
import './Project5.css';

const Project5 = () => {
  return (
    <div className="project-page">
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
              alt="Prototype"
              onError={(e) => {
                console.error("Failed to load Prototype Image");
                e.target.src = `${process.env.PUBLIC_URL}/HeadSensor/placeholder.png`;
              }}
            />
            <div className="text-container">
              <p>
                <strong>Prototype:</strong> This initial design mimics head movement by tracking light variations and displays the position on an LED screen. It was designed with comfort in mind, ensuring a lightweight and ergonomic fit. The system was specifically made for those with limited dexterity, providing an intuitive way to interact with technology.
              </p>
            </div>
          </div>

          {/* Section 2: Setup Process */}
          <div className="project-item reverse">
            <img
              src={`${process.env.PUBLIC_URL}/HeadSensor/2.png`}
              alt="Setup Process"
              onError={(e) => {
                console.error("Failed to load Setup Process Image");
                e.target.src = `${process.env.PUBLIC_URL}/HeadSensor/placeholder.png`;
              }}
            />
            <div className="text-container">
              <p>
                <strong>Setup Process:</strong> The headset is designed to be easy to put on and off. The user, often with assistance, places the headset on their head. Next, the user turns on the headlamp to activate the light source. The user then plugs in the Arduino to power the sensor system. Once connected, the system is ready to go, enabling seamless head tracking.
              </p>
            </div>
          </div>

          {/* Section 3: System Specifications */}
          <div className="project-item">
            <img
              src={`${process.env.PUBLIC_URL}/HeadSensor/3.png`}
              alt="System Specifications"
              onError={(e) => {
                console.error("Failed to load System Specifications Image");
                e.target.src = `${process.env.PUBLIC_URL}/HeadSensor/placeholder.png`;
              }}
            />
            <div className="text-container">
              <p>
                <strong>Headlamp:</strong> Powered by a 9V battery, offering 18.3 hours of use with a spot size of LED at 217 nm.<br />
                <strong>Sensor/Display:</strong> Plugs directly into a wall outlet or a computer, reading data every 50 ms for a fast, near real-time response.<br />
                <strong>Accuracy/Reliability:</strong> Follows the intended direction 97% of the time, as shown in the Phototransistor Voltage vs. Distance graph below.
              </p>
            </div>
          </div>

          {/* Section 4: Component Showcase (2x2 Grid with Labels, No Text) */}
          <div className="project-item">
            <div className="collage-container grid-2x2">
              <div className="grid-item">
                <img
                  src={`${process.env.PUBLIC_URL}/HeadSensor/4.png`}
                  alt="Sensor 1"
                  className="collage-image"
                  onError={(e) => {
                    console.error("Failed to load Sensor 1 Image");
                    e.target.src = `${process.env.PUBLIC_URL}/HeadSensor/placeholder.png`;
                  }}
                />
                <p className="image-label">Sensor</p>
              </div>
              <div className="grid-item">
                <img
                  src={`${process.env.PUBLIC_URL}/HeadSensor/5.png`}
                  alt="Sensor 2"
                  className="collage-image"
                  onError={(e) => {
                    console.error("Failed to load Sensor 2 Image");
                    e.target.src = `${process.env.PUBLIC_URL}/HeadSensor/placeholder.png`;
                  }}
                />
                <p className="image-label">Sensor</p>
              </div>
              <div className="grid-item">
                <img
                  src={`${process.env.PUBLIC_URL}/HeadSensor/6.png`}
                  alt="Infrared LEDs and Housing 1"
                  className="collage-image"
                  onError={(e) => {
                    console.error("Failed to load Infrared LEDs and Housing 1 Image");
                    e.target.src = `${process.env.PUBLIC_URL}/HeadSensor/placeholder.png`;
                  }}
                />
                <p className="image-label">Infrared LEDs and Housing</p>
              </div>
              <div className="grid-item">
                <img
                  src={`${process.env.PUBLIC_URL}/HeadSensor/7.png`}
                  alt="Infrared LEDs and Housing 2"
                  className="collage-image"
                  onError={(e) => {
                    console.error("Failed to load Infrared LEDs and Housing 2 Image");
                    e.target.src = `${process.env.PUBLIC_URL}/HeadSensor/placeholder.png`;
                  }}
                />
                <p className="image-label">Infrared LEDs and Housing</p>
              </div>
            </div>
          </div>

          {/* Section 5: Circuitry and Arduino Mega */}
          <div className="project-item reverse">
            <div className="collage-container side-by-side">
              <img
                src={`${process.env.PUBLIC_URL}/HeadSensor/8.png`}
                alt="Circuitry"
                className="collage-image"
                onError={(e) => {
                  console.error("Failed to load Circuitry Image");
                  e.target.src = `${process.env.PUBLIC_URL}/HeadSensor/placeholder.png`;
                }}
              />
              <img
                src={`${process.env.PUBLIC_URL}/HeadSensor/9.png`}
                alt="Arduino Mega"
                className="collage-image"
                onError={(e) => {
                  console.error("Failed to load Arduino Mega Image");
                  e.target.src = `${process.env.PUBLIC_URL}/HeadSensor/placeholder.png`;
                }}
              />
            </div>
            <div className="text-container">
              <p>
                <strong>Circuitry and Arduino Mega:</strong> The system’s core is powered by an Arduino Mega, which processes data from the sensors and controls the LED display. The circuitry integrates the phototransistors, infrared LEDs, and power management components, ensuring reliable operation and efficient data handling for real-time tracking.
              </p>
            </div>
          </div>

          {/* Section 6: The Code */}
          <div className="project-item vertical-layout">
            <div className="text-container">
              <h4>The Code</h4>
              <p>
                The code for the head tracker system manages sensor data collection, processes head movement inputs, and updates the LED display in real-time. The graphs below illustrate the system’s performance, including sensor data processing speed, LED display refresh rate, and error rates during operation, highlighting the efficiency and reliability of the code.
              </p>
            </div>
            <div className="collage-container horizontal-collage">
              <img
                src={`${process.env.PUBLIC_URL}/HeadSensor/10.png`}
                alt="Sensor Data Processing Speed"
                className="collage-image"
                onError={(e) => {
                  console.error("Failed to load Sensor Data Processing Speed Image");
                  e.target.src = `${process.env.PUBLIC_URL}/HeadSensor/placeholder.png`;
                }}
              />
              <img
                src={`${process.env.PUBLIC_URL}/HeadSensor/11.png`}
                alt="LED Display Refresh Rate"
                className="collage-image"
                onError={(e) => {
                  console.error("Failed to load LED Display Refresh Rate Image");
                  e.target.src = `${process.env.PUBLIC_URL}/HeadSensor/placeholder.png`;
                }}
              />
              <img
                src={`${process.env.PUBLIC_URL}/HeadSensor/12.png`}
                alt="Error Rates"
                className="collage-image"
                onError={(e) => {
                  console.error("Failed to load Error Rates Image");
                  e.target.src = `${process.env.PUBLIC_URL}/HeadSensor/placeholder.png`;
                }}
              />
            </div>
          </div>
        </div>

        {/* Project Conclusion Section */}
        <div className="project-conclusion">
          <h3>Project Conclusion</h3>
          <p>
            The Light Based Head Tracker project successfully created an accessible and reliable system for users with limited dexterity to interact with technology through head movements. By integrating light sensors, an Arduino Mega, and an LED display, the system achieved a 97% accuracy rate in tracking head positions, with a fast response time of 50 ms. Challenges such as ensuring comfort, managing varying lighting conditions, and optimizing sensor sensitivity were overcome through iterative design and testing. The final system, as demonstrated in the sections above, provides a practical solution for assistive technology applications, with potential for further development in areas like multi-axis tracking or integration with advanced communication devices. Check out the final demonstration below!
          </p>
          <div className="video-container">
            <iframe
              className="conclusion-video"
              src="https://www.youtube.com/embed/Fo3scTZS1BI"
              title="Light Based Head Tracker Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="project-links">
        <Link to="/" className="back-link">Back to Home</Link>
      </div>
    </div>
  );
};

export default Project5;
