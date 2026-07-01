import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="nav-logo" onClick={closeMenu}>
          YASHVARDHAN<span>.</span>
        </a>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li>
            <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
          </li>
          <li>
            <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
          </li>
          <li>
            <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
          </li>
          <li>
            <a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a>
          </li>
          <li>
            <a href="#github" className="nav-link" onClick={closeMenu}>GitHub</a>
          </li>
          <li>
            <a href="#education" className="nav-link" onClick={closeMenu}>Education</a>
          </li>
          <li>
            <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
          </li>
        </ul>

        <div className="nav-actions">
          <button 
            className="theme-toggle" 
            onClick={toggleTheme} 
            aria-label="Toggle light/dark mode"
            title="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <button 
            className="menu-toggle" 
            onClick={toggleMenu} 
            aria-label="Toggle main menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
