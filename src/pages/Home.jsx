import React from 'react'
import Navbar from '../components/Navbar'
import './Home.css'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
const Home = () => {
  return (
    <div>
    <div className="shadow">

    </div>
        <Navbar />
        <Hero />
        <About />
        <Projects /> 
        <Contact />
    </div>
  )
}

export default Home