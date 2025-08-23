import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (name) => {
    setActive(name);
    setMenuOpen(false); // يغلق القائمة على الموبايل
  };

  return (
    <nav className="navbar">
      <div onClick={() => setMenuOpen(false)} className="overlay">

      </div>
      {/* اللوجو يظهر بس على الموبايل */}
      <div className="logo">Yaseen</div>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? 'active' : ''}>
        <li className={active === 'Home' ? 'active' : ''} onClick={() => handleLinkClick('Home')}>
          <a href="#hero">Home</a>
        </li>
        <li className={active === 'About' ? 'active' : ''} onClick={() => handleLinkClick('About')}>
          <a href="#about">About</a>
        </li>
        <li className={active === 'Projects' ? 'active' : ''} onClick={() => handleLinkClick('Projects')}>
          <a href="#projects">Projects</a>
        </li>
        <li className={active === 'Contact' ? 'active' : ''} onClick={() => handleLinkClick('Contact')}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;