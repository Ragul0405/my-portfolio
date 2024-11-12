import React from 'react';
import '../intro/intro.css';
import { Link } from 'react-scroll';
import smallprofile from './logo512.png';
import smalbag from './bag.png';
import download from './download.png'
import resume from './Ragul_Resume.pdf'

function Intro() {
  return (
    <div>
      <img className='phone-small' src={smallprofile} alt="Profile" />
      <section id="intro">
        <div className="tectinintro">
          <span className="hello">Hello,</span>
          <span className="iam">
            I'm <span className="name">RaGuL</span>
            <br />
            Full-Stack Developer
          </span>
          <p className="intopara">
            A passionate Full-Stack Developer with a deep interest in both front-end and back-end technologies. With expertise in React.js and Django, I am able to bring designs to life with clean, responsive UIs and ensure smooth, scalable server-side functionality. I’m comfortable with a variety of development tools and languages, including HTML5, CSS3, JavaScript, React, and Python, allowing me to contribute to all stages of the development process.
          </p>
          <div className='buttonforcv'>
          <Link activeClass="active" to="contact" spy={true} offset={-50} duration={500} smooth={true}>
            <button className="hirebtn">
              <img src={smalbag} alt="Bag Icon" className="btnimg" />
              Hire Me
            </button>
          </Link>
          <a href={resume} download="Ragul_CV.pdf">
          <button className='hirebtn'><img src={download} alt="Bag Icon" className="bnimg" />  Download CV</button>
          </a>
          </div>
        </div>
        <img src={smallprofile} alt="Profile" className="proimg" />
      </section>
    </div>
  );
}

export default Intro;
