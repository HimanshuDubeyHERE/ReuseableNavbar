import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar-wrapper">
      <div className="navbar-container">
        {/* Brand/Logo Component */}
        <div className="navbar-logo">
          <a href="/">NexusCode</a>
        </div>

        {/* Dynamic Center Main Navigation Links */}
        <nav className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <a href="#blogs" className="nav-item">Problems</a>
          <a href="#events" className="nav-item">Events</a>
          <a href="#tutorials" className="nav-item">Tutorials</a>
          <a href="#roadmaps" className="nav-item">Roadmaps</a>
          <a href="#ide" className="nav-item">IDE</a>
        </nav>

        {/* Right Action CTA Zone */}
        <div className="navbar-actions">
          <button className="btn-cta">Sign Up</button>
        </div>

        {/* Responsive Mobile Hamburger Trigger */}
        <button 
          className="mobile-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}