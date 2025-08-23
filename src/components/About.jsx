import React from 'react'
import './About.css'
import Title from './Title'
const About = () => {
  return (
    <div>
      <Title title="About Me" />
      <div className="about-container" id='about'>
        <div className="about-content">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=400&facepad=2"
            alt="Profile"
            className="about-avatar"
          />
          <div className="about-text">
            <h2>Hello, I'm Yaseen!</h2>
            <p>
              I'm a passionate full stack developer with a love for building beautiful and functional web applications.
              My journey in tech started with curiosity and has grown into a lifelong passion for learning and creating.
            </p>
            <ul className="about-skills">
              <li>🌟 JavaScript & React</li>
              <li>🌟 Node.js & Express</li>
              <li>🌟 MongoDB & Tailwind CSS</li>
              <li>🌟 UI/UX Design</li>
            </ul>
            <a href="#contact" className="about-contact-btn">Contact Me</a>
          </div>
        </div>
      </div>

    </div>
  )
}


export default About