import React from 'react';
import '../projects/project.css';
import img from '../projects/work1.png';

function Project() {
  return (
    <section id="works">
        <h2 className="worktitle">My Projects</h2>
        <span className="workdesc">
            I take pride in paying attention to the smallest details and ensuring that my work is pixel-perfect. As a front-end developer, I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.
        </span>
        <div className="worksimgs">
            {/* Project 1 */}
            <div className="workimage-container">
                <img src={img} alt="Zoho Website Clone" className="workimage" />
                <div className="layer">
                    <h3>Zoho Website Clone</h3>
                    <p>This website clone is inspired by the original Zoho website.</p>
                </div>
            </div>

            {/* Project 2 */}
            <div className="workimage-container">
                <img src={img} alt="Project Two" className="workimage" />
                <div className="layer">
                    <h3>Project Two</h3>
                    <p>A brief description of Project Two goes here.</p>
                </div>
            </div>

            {/* Project 3 */}
            <div className="workimage-container">
                <img src={img} alt="Project Three" className="workimage" />
                <div className="layer">
                    <h3>Project Three</h3>
                    <p>A brief description of Project Three goes here.</p>
                </div>
            </div>

            {/* Project 4 */}
            <div className="workimage-container">
                <img src={img} alt="Project Four" className="workimage" />
                <div className="layer">
                    <h3>Project Four</h3>
                    <p>A brief description of Project Four goes here.</p>
                </div>
            </div>
        </div>
        <button className="seemore">See More</button>
    </section>
  );
}

export default Project;
