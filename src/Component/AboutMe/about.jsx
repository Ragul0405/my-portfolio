import React, { useState } from 'react';
import '../AboutMe/about.css';
import about from '../AboutMe/about.png';

function About() {
  const [activeTab, setActiveTab] = useState('skills');  // 'skills' is now the initial tab

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div id="about">
      <h1 className="aboutme-head">About Me</h1>
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src={about} alt="About me" />
          </div>

          <div className="about-col-2">
            <p className="aboutpara">
              Hi, I'm Ragul, A highly skilled Python full-stack developer with expertise in both front-end and back-end development. Proficient in creating seamless, responsive user interfaces using HTML, CSS, and JavaScript frameworks like React.js, and developing efficient, scalable back-end applications with technologies such as Node.js, Django, and Python. Knowledgeable in relational and non-relational databases like MySQL, enabling effective data management and storage solutions.
            </p>

            <div className="tab-titles">
              <p
                className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`}
                onClick={() => handleTabClick('skills')}
                aria-selected={activeTab === 'skills'}
                aria-controls="skills-tab"
              >
                Skills
              </p>
              <p
                className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`}
                onClick={() => handleTabClick('education')}
                aria-selected={activeTab === 'education'}
                aria-controls="education-tab"
              >
                Education
              </p>
            </div>
            
            {/* Skills Content */}
            <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills-tab">
              <ul>
                <li><span>Front-End</span><br />HTML5, CSS, and JavaScript</li>
                <li><span>Framework</span><br />React.js, Bootstrap, Django</li>
                <li><span>Back-End</span><br />Python and MySQL</li>
                <li><span>Design</span><br />Photoshop, Figma, and Canva</li>
              </ul>
            </div>

            {/* Education Content */}
            <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education-tab">
              <ul>
                <li><span>Post Graduation</span><br />Master of Computer Applications. <br />With 7.4 CGPA</li>
                <li><span>Under Graduation</span><br />Bachelor of Computer Applications. <br />With 7.1 CGPA </li>
                <li><span>Python Full-stack</span><br />Besant Technologies, Velachery.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
