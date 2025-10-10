import React, { useState, useRef, useEffect } from 'react';
import './MoreProjectStyles.css';

// --- IMPORTS ---
import carshineX1 from '../../assets/carshineX1.png';
import staff1 from '../../assets/staff1.png';
import manag1 from '../../assets/manag1.png';
import chillcake1 from '../../assets/ChillCake.png';
import Khayalanforest1 from '../../assets/Khayalan Forest.png';
import fypAdmin1 from '../../assets/AdminHomePage.png';
import weatherApp from '../../assets/Weather_app_v2.png';

// Mobile projects
import msmMobile1 from '../../assets/msmMob1.png';
import fypMobile1 from '../../assets/fypMob1.png';
import fresh1 from '../../assets/Fresh1.png';

function MoreProject() {
  const [activeCategory, setActiveCategory] = useState('web');
  const [showMore, setShowMore] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null); // for popup
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState('auto');

  // --- Web Projects ---
  const webProjects = [
    {
      image: carshineX1,
      name: 'Car Shine X1',
      description: 'A web platform for car detailing bookings and management.',
      tech: 'PHP, MySQL'
    },
    {
      image: staff1,
      name: 'Staff Management',
      description: 'A staff scheduling and resource allocation system.',
      tech: 'PHP, MySQL'
    },
    {
      image: manag1,
      name: 'Manager Dashboard',
      description: 'Admin management tool for projects, tasks, and analytics.',
      tech: 'PHP, MySQL'
    },
    {
      image: chillcake1,
      name: 'Chill Cake',
      description: 'E-commerce website for bakery products.',
      tech: 'HTML , CSS, Javascript'
    },
    {
      image: Khayalanforest1,
      name: 'Khayalan Forest',
      description: 'Website for eco-resorts showcasing flora and fauna.',
      tech: 'PHP, Python, MySQL'
    },
    {
      image: fypAdmin1,
      name: 'UniBudys Web Dashboard',
      description: 'Admin control panel for manage the system',
      tech: 'HMTL, CSS, MySQL'
    },
    {
      image: weatherApp,
      name: 'Weather App',
      description: 'Displays weather forecasts using WeatherAPI API.',
      tech: 'Next.js, Node.js, Tailwind, Dockers, Github'
    }
  ];

  // --- Mobile Projects ---
  const mobileProjects = [
    {
      image: msmMobile1,
      name: 'MSM Mobile application',
      description: 'A mobile companion app for the MSM web platform that allows workers to report accidents and hazards.',
      tech: 'Dart, Firebase'
    },
    {
      image: fypMobile1,
      name: 'UniBudys',
      description: 'A centralized mobile application that helps students find nearby public transport, affordable accommodation, and access food vouchers — all in one platform to simplify student living',
      tech: 'Swift, Javascript, Firebase'
    },
    {
      image: fresh1,
      name: 'Fresh Delivery',
      description: 'Local delivery app for groceries and goods.',
      tech: 'Dart, Firebase'
    }
  ];

  const projects = activeCategory === 'web' ? webProjects : mobileProjects;

  // Smooth transition height
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(showMore ? `${contentRef.current.scrollHeight}px` : '700px');
    }
  }, [showMore, activeCategory]);

  return (
    <div name="gallery" className="moreProject">
      <div className="container">
        <h1>Gallery</h1>

        {/* Category Buttons */}
        <div className="category-buttons">
          <button
            className={`category-btn ${activeCategory === 'web' ? 'active' : ''}`}
            onClick={() => {
              setActiveCategory('web');
              setShowMore(false);
            }}
          >
            🖥 Web
          </button>
          <button
            className={`category-btn ${activeCategory === 'mobile' ? 'active' : ''}`}
            onClick={() => {
              setActiveCategory('mobile');
              setShowMore(false);
            }}
          >
            📱 Mobile
          </button>
        </div>

        {/* Gallery Grid */}
        <div
          className={`gallery-grid ${!showMore ? 'read-more-fade' : ''}`}
          style={{ maxHeight: contentHeight }}
          ref={contentRef}
        >
          {projects.map((proj, index) => (
            <div
              key={index}
              className="image-wrapper"
              onClick={() => setSelectedProject(proj)}
            >
              <img src={proj.image} alt={proj.name} />
            </div>
          ))}
        </div>

        {/* Read More Button */}
        <div className="read-more-container">
          <button className="read-more-btn" onClick={() => setShowMore(!showMore)}>
            {showMore ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>

      {/* Popup Modal */}
      {selectedProject && (
        <div className="popup-overlay" onClick={() => setSelectedProject(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="popup-image-section">
              <img src={selectedProject.image} alt={selectedProject.name} />
            </div>
            <div className="popup-info-section">
              <h2>{selectedProject.name}</h2>
              <p>{selectedProject.description}</p>
              <p><strong>Tech Used:</strong> {selectedProject.tech}</p>
              <button className="close-btn" onClick={() => setSelectedProject(null)}>
                ✖ Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MoreProject;