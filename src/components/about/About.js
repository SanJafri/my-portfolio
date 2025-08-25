import React, {useState} from 'react'
import './AboutStyles.css'

// import BoraBora from '../../assets/borabora.jpg'
// import BoraBora2 from '../../assets/borabora2.jpg'
// import Maldives from '../../assets/maldives.jpg'
// import Maldives2 from '../../assets/maldives2.jpg'

function About() {
    const [activeTab, setActiveTab] = useState('experience');
    
    const experienceData = [
        {
            id: 1,
            title: "Internship at MSM Malaysia Holding Berhad",
            company: "MSM Malaysia",
            date: "October 2024 - February 2025",
            points: [
                "I used SQL Server Management Studio to create and modify database reports based on user requests. I also worked with the company's mobile app to help staff and contractors manage their hazard report submissions."
            ]
        },
        {
            id: 2,
            title: "Part-time Freelance Assignment Helper and AI Trainer",
            company: "OutlierAI",
            date: "Feb 2025 - May 2025",
            points: [
                "Collaborated on full-stack development and UI design for web and mobile apps, and improved AI performance by refining language data and programming, focusing on Malay."
            ]
        },
        {
            id: 3,
            title: "Technical Support",
            company: "Bank Islam",
            date: "June 2025 - Oct 2025",
            points: [
                "Provided technical support, troubleshooting issues, and maintaining system performance for end users.",
                "Collaborated with the IT team to improve service delivery and efficiency."
            ]
        }
    ];

    const educationData = [
        {
            id: 1,
            title: "Secondary School",
            date: "2014 - 2019",
            institution: "SMK Bandar Tun Hussein Onn 2"
        },
        {
            id: 2,
            title: "Foundation In Computer Technology",
            date: "2020 - 2021",
            institution: "Universiti Kuala Lumpur Malaysian Institute of Information Technology"
        },
        {
            id: 3,
            title: "Bachelor of Information Technology (Hons.) in Software Engineering",
            date: "2021 - 2025",
            institution: "Universiti Kuala Lumpur Malaysian Institute of Information Technology",
            fullWidth: true
        }
    ];

    const CertData = [
        {
            id: 1,
            title: "Google Project Management",
            date: "Dec 2023",
            certification: "Skilled in initiating, planning, and executing both traditional and Agile projects. Competent in project lifecycle management and team coordination."
        },
        {
            id: 2,
            title: "App Development with Swift Associate",
            date: "Dec 2023",
            certification: "Certified in iOS app development using Swift programming language. Skilled in Xcode, UIKit, SwiftUI, and building user interfaces for Apple platforms."
        },
        {
            id: 3,
            title: "GreenCity AR iPad Challenge: Shaping Sustainable Urban Cities",
            date: "Jan 2024",
            certification: "Achieved Gold Award 🏅 with team for creating an AR-based sustainable city model on iPad, demonstrating innovative green urban design and environmental solutions"
        },
        {
            id: 4,
            title: "Google IT Automation with Python",
            date: "July 2024",
            certification: "Certified in Python automation, Git, cloud technologies, and IT systems administration through Google's professional program.",
            fullWidth: true
        }
    ];

    return (
        <div name='about' className='about'>
            <div className="container">
                <div className="left">
                    <h1>About Me</h1>
                    <p>I'm an IT professional passionate about creating efficient solutions and solving complex challenges. During my internship at MSM Malaysia Holding Berhad, I worked with SQL databases and developed mobile apps using Dart, showcasing my versatility. Afterward, I engaged in part-time freelance work providing academic support and AI training at Outlier AI. </p>
                    {/* <br /> */}
                    <p>Currently, I'm with Bank Islam, where I ensure smooth system operations and collaborate with our IT team to enhance services. I'm also expanding my skills with React and TypeScript and am excited about the potential of Web3 and blockchain technologies.</p>
                </div>
                
                <div className="right">
                    <div className="tab-container">
                        <div className="tab-buttons">
                            <button
                                className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
                                onClick={() => setActiveTab('experience')}
                            >
                                <span className="tab-icon">💼</span>
                                <span>Experience</span>
                            </button>
                            <button 
                                className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
                                onClick={() => setActiveTab('education')}
                            >
                                <span className="tab-icon">🎓</span>
                                <span>Education</span>
                            </button>
                            <button 
                                className={`tab-button ${activeTab === 'certification' ? 'active' : ''}`}
                                onClick={() => setActiveTab('certification')}
                            >
                                <span className="tab-icon">📜</span>
                                <span>Certification</span>
                            </button>
                        </div>
                        
                        <div className="tab-content">
                            {activeTab === 'experience' && (
                                <div className="tab-pane active">
                                    <div className="experience-grid">
                                        {experienceData.map((item, index) => (
                                            <div key={item.id} className='content-item experience-item'>
                                                <div className="item-header">
                                                    <h3>{item.title}</h3>
                                                    {item.company && <span className="company">{item.company}</span>}
                                                </div>
                                                <p className='date'>
                                                    <span className="date-icon">📅</span>
                                                    {item.date}
                                                </p>
                                                <ul className="points-list">
                                                    {item.points.map((point, pointIndex) => (
                                                        <li key={pointIndex}>{point}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'education' && (
                                <div className="tab-pane active">
                                    <div className="education-grid">
                                        {educationData.map((item) => (
                                            <div key={item.id} className={`content-item education-item ${item.fullWidth ? 'full-width' : ''}`}>
                                                <div className="edu-icon">🎓</div>
                                                <h3>{item.title}</h3>
                                                <p className='date'>
                                                    <span className="date-icon">📅</span>
                                                    {item.date}
                                                </p>
                                                <p className="institution">{item.institution}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'certification' && (
                                <div className="tab-pane active">
                                    <div className="certification-grid">
                                        {CertData.map((item) => (
                                            <div key={item.id} className={`content-item certification-item ${item.fullWidth ? 'full-width' : ''}`}>
                                                <div className="cert-icon">📜</div>
                                                <h3>{item.title}</h3>
                                                <p className='date'>
                                                    <span className="date-icon">📅</span>
                                                    {item.date}
                                                </p>
                                                <p className="certification">{item.certification}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About