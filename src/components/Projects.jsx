import React from 'react'
import { motion } from 'framer-motion'
import './Projects.css'
import Title from './Title'
import project1 from '../assets/project1.png'
const projects = [
  {
    title: 'E-Cornamce Website',
    description: 'A responsive e-commerce website built with Mern stack technologies. with user authentication, product listings, and a shopping cart. and stripe payment gateway integration.',
    link: 'https://furniro-frontend-rho.vercel.app/',
    image: project1
  },
  {
    title: 'E-commerce App',
    description: 'A full-stack e-commerce application with user authentication and payment integration.',
    link: 'https://your-ecommerce-link.com',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Blog Platform',
    description: 'A modern blog platform with markdown support and a beautiful editor.',
    link: 'https://your-blog-link.com',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
  }
]

const Projects = () => {
  return (
    <>
      <div className="projects-container" id="projects">
      <Title title="Projects" />
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="overlay">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="overlay-btn"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <div className="project-card-content">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects