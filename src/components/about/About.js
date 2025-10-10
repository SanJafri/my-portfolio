import React, { useState, useRef, useEffect } from 'react';
import './AboutStyles.css';

function About() {
  const [activeTab, setActiveTab] = useState('experience');
  const [showMore, setShowMore] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState('auto');

  // --- Experience Data ---
  const experienceData = [
    {
      id: 1,
      title: 'Internship at MSM Malaysia Holding Berhad',
      company: 'MSM Malaysia',
      date: 'October 2024 - February 2025',
      points: [
        "Used SQL Server Management Studio to create and modify database reports based on user requests. Worked on the company’s mobile app to assist staff and contractors with hazard report submissions.",
      ],
    },
    {
      id: 2,
      title: 'Part-time Freelance Assignment Helper and AI Trainer',
      company: 'Outlier AI',
      date: 'Feb 2025 - May 2025',
      points: [
        'Collaborated on full-stack and mobile development projects. Improved AI model performance by refining Malay-language datasets and optimizing prompts.',
      ],
    },
    {
      id: 3,
      title: 'Technical Support (Training Completed)',
      company: 'Bank Islam',
      date: 'June 2025 - Oct 2025',
      points: [
        'Provided technical support, troubleshooting, and system maintenance for end users.',
        'Collaborated with the IT team to improve workflow and service reliability.',
      ],
    },
  ];

  // --- Education Data ---
  const educationData = [
    {
      id: 1,
      title: 'Secondary School',
      date: '2014 - 2019',
      institution: 'SMK Bandar Tun Hussein Onn 2',
    },
    {
      id: 2,
      title: 'Foundation in Computer Technology',
      date: '2020 - 2021',
      institution: 'Universiti Kuala Lumpur (MIIT)',
    },
    {
      id: 3,
      title: 'Bachelor of Information Technology (Hons.) in Software Engineering',
      date: '2021 - 2025',
      institution: 'Universiti Kuala Lumpur (MIIT)',
    },
  ];

  // --- Certification Data ---
  const CertData = [
    {
      id: 1,
      title: 'Google Project Management',
      date: 'Dec 2023',
      certification:
        'Skilled in initiating, planning, and executing Agile and traditional projects. Experienced in team collaboration and lifecycle management.',
    },
    {
      id: 2,
      title: 'App Development with Swift Associate',
      date: 'Dec 2023',
      certification:
        'Certified in iOS development using Swift. Skilled in Xcode, UIKit, and SwiftUI for Apple platforms.',
    },
    {
      id: 3,
      title: 'GreenCity AR iPad Challenge: Shaping Sustainable Cities',
      date: 'Jan 2024',
      certification:
        'Gold Award 🏅 for building an AR-based sustainable city model using innovative environmental solutions.',
    },
    {
      id: 4,
      title: 'Google IT Automation with Python',
      date: 'July 2024',
      certification:
        "Certified in Python automation, Git, cloud technologies, and IT system administration.",
    },
    {
      id: 5,
      title: 'CompTIA Tech+',
      date: 'July 2024',
      certification:
        'Validated knowledge in troubleshooting, networking, cybersecurity, and hardware/software fundamentals.',
    },
  ];

  // --- Skills Data ---
  const skillsData = [
    {
      id: 1,
      category: 'Web Development',
      skills: 'HTML, CSS, JavaScript, React.js, Next.js, Node.js, Python, PHP',
    },
    {
      id: 2,
      category: 'Database Management',
      skills: 'MySQL, SQL, MongoDB, Firebase',
    },
    {
      id: 3,
      category: 'Mobile Development',
      skills: 'Swift, Flutter, Dart',
    },
    {
      id: 4,
      category: 'Design & Structure',
      skills: 'Figma, Draw.io',
    },
    {
      id: 5,
      category: '3D Tools',
      skills: 'Shapr3D, Reality Composer',
    },
    {
      id: 6,
      category: 'Version Control',
      skills: 'GitHub',
    },
  ];

  // --- Select Which Data to Render ---
  const activeData =
    activeTab === 'experience'
      ? experienceData
      : activeTab === 'education'
      ? educationData
      : activeTab === 'certification'
      ? CertData
      : skillsData;

  // --- Smooth Height Transition ---
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(showMore ? `${contentRef.current.scrollHeight}px` : '500px');
    }
  }, [showMore, activeTab]);

  return (
    <div name="about" className="about">
      <div className="container">
        {/* LEFT SECTION */}
        <div className="left">
          <h1>About Me</h1>
          <p>
            I'm an IT professional passionate about creating efficient solutions
            and solving complex challenges. During my internship at
            <strong> MSM Malaysia Holding Berhad</strong>, I worked with SQL
            databases and developed mobile apps using Dart. Later, I took on
            freelance work offering academic support and AI training with
            <strong> Outlier AI</strong>.
          </p>
          <p>
            I have completed my training at <strong>Bank Islam</strong>, where I
            supported technical operations and collaborated with the IT team to
            enhance systems and user experiences. I’m currently expanding my
            expertise in React, Node, and exploring Web3 and blockchain technologies.
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="right">
          <div className="tab-container">
            {/* Tab Buttons */}
            <div className="tab-buttons">
              <button
                className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab('experience');
                  setShowMore(false);
                }}
              >
                <span className="tab-icon">💼</span>
                <span>Experience</span>
              </button>

              <button
                className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab('education');
                  setShowMore(false);
                }}
              >
                <span className="tab-icon">🎓</span>
                <span>Education</span>
              </button>

              <button
                className={`tab-button ${activeTab === 'certification' ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab('certification');
                  setShowMore(false);
                }}
              >
                <span className="tab-icon">📜</span>
                <span>Certification</span>
              </button>

              <button
                className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab('skills');
                  setShowMore(false);
                }}
              >
                <span className="tab-icon">🧠</span>
                <span>Skills</span>
              </button>
            </div>

            {/* Tab Content */}
            <div
              className={`tab-content ${!showMore ? 'read-more-fade' : ''}`}
              style={{ maxHeight: contentHeight }}
              ref={contentRef}
            >
              {/* EXPERIENCE */}
              {activeTab === 'experience' && (
                <div className="experience-grid">
                  {experienceData.map((item) => (
                    <div key={item.id} className="content-item experience-item">
                      <div className="item-header">
                        <h3>{item.title}</h3>
                        {item.company && <span className="company">{item.company}</span>}
                      </div>
                      <p className="date">
                        <span className="date-icon">📅</span> {item.date}
                      </p>
                      <ul className="points-list">
                        {item.points.map((p, idx) => (
                          <li key={idx}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* EDUCATION */}
              {activeTab === 'education' && (
                <div className="education-grid">
                  {educationData.map((item) => (
                    <div key={item.id} className="content-item education-item">
                      <div className="edu-icon">🎓</div>
                      <h3>{item.title}</h3>
                      <p className="date">
                        <span className="date-icon">📅</span> {item.date}
                      </p>
                      <p className="institution">{item.institution}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* CERTIFICATION */}
              {activeTab === 'certification' && (
                <div className="certification-grid">
                  {CertData.map((item) => (
                    <div key={item.id} className="content-item certification-item">
                      <div className="cert-icon">📜</div>
                      <h3>{item.title}</h3>
                      <p className="date">
                        <span className="date-icon">📅</span> {item.date}
                      </p>
                      <p className="certification">{item.certification}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* SKILLS */}
              {activeTab === 'skills' && (
                <div className="skills-grid">
                  {skillsData.map((item) => (
                    <div key={item.id} className="content-item skills-item">
                      <h3>{item.category}</h3>
                      <p>{item.skills}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Read More Button */}
            <div className="read-more-container">
              <button
                className="read-more-btn"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;