import React from 'react'
import '../Skills/skills.css'
import web from '../Skills/web.png'
import webapp from '../Skills/webapp.png'
import sql from '../Skills/sql.png'

function Skills() {
  return (
      <section id='skills'>
        <span className="skilltitle">What I do</span>
        <span className="skilldes">I am a skilled and passionate web developer with experience in creating visually appealing and user-friendly website and application. I am proficient in HTML, CSS, JavaScript and ReactJS</span>
        <div className="skillbars">

            <div className="skilbar">
                <img src={web} alt="HTML" className="skillbarimg" />
                <div className="skillbartext">
                    <h2>Web Development</h2>
                    <p>I Can do a Web development is the process of creating and maintaining websites, involving front-end design to deliver a functional and interactive online experience.</p>
                </div>
            </div>

            <div className="skilbar">
                <img src={webapp} alt="Web Application" className="skillbarimg" />
                <div className="skillbartext">
                    <h2>Web Application</h2>
                    <p>I Can do a web application is an interactive software application that runs on a web server, accessible through a browser, allowing users to perform tasks or access services online, such as email, banking, or data management.</p>
                </div>
            </div>

            <div className="skilbar">
                <img src={sql} alt="ReactJS" className="skillbarimg" />
                <div className="skillbartext">
                    <h2>Structured Query Language</h2>
                    <p>I Can create, read, update, and delete data, as well as define database structures, making it essential for handling data in applications that rely on databases for storing information.</p>
                </div>
            </div>
        </div>

      </section>
  )
}

export default Skills
