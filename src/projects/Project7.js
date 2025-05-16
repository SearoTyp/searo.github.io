import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Project7.css';

const Project7 = () => {
  useEffect(() => {
    console.log("Project7 component mounted, scrolling to top");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const moreProjects = [
    { id: 7, path: '/project/7', title: 'LumbaCare' },
    { id: 8, path: '/project/8', title: 'Light Based Head Tracker' },
    { id: 9, path: '/project/9', title: 'Motor Speed Control' },
  ];

  const currentProjectId = 7;
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
        <h2>LumbaCare</h2>
      </div>

      <div className="project-details">
        <div className="project-goal">
          <h3>Project Goal and Approach</h3>
          <p>
            <strong>The goal of LumbaCare was to design a wearable system that tracks and visualizes joint movements using IMU sensors for patients during rehabilitation, with integrated pattern detection to improve recovery.</strong> Inspired by a personal experience with a severe knee injury—including a Grade 3 ACL tear, full meniscus tear, and partial MCL and PCL tears—this project addresses the challenges of joint-related issues like ACL injuries, lordosis, kyphosis, and hip and shoulder problems. Traditional measurement technologies such as goniometers and dynamometers are outdated, often inaccurate, and require multiple users for setup, contributing to slow recovery and inadequate monitoring. LumbaCare leverages quaternion-based orientation to monitor joint angles and motion, employs a real-time machine learning model to detect harmful movements, and provides haptic feedback for proper movement guidance. The system is designed to be affordable and portable, offering remote monitoring to reduce the need for physical therapy visits, and delivering personalized feedback to accelerate recovery through early detection of abnormal patterns.
          </p>
        </div>

        <div className="project-content">
          <div className="project-item">
            <iframe
              src={`${process.env.PUBLIC_URL}/Lumbacare/LumbaCare BMES.pdf`}
              title="LumbaCare BMES Presentation"
              className="pdf-viewer"
              style={{ width: '100%', height: '600px', border: 'none' }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project7;