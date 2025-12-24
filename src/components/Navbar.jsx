import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const closeMobileMenu = () => setIsMobile(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <NavLink to="/" onClick={closeMobileMenu}>Tech<span>Corp</span></NavLink>
        </div>

        {/* Links Utama */}
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"} 
            onClick={() => setIsMobile(false)}>
          <li>
            <NavLink to="/" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "active" : ""}>Services</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "active" : ""}>Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
          </li>
        </ul>

        {/* Tombol Hamburger Mobile */}
        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;