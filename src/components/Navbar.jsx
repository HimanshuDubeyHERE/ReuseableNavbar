import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Safely manage entry and exit interactions for mouse tracks
  const handleMouseEnter = (menuName) => setActiveDropdown(menuName);
  const handleMouseLeave = () => setActiveDropdown(null);

  return (
    <header className="navbar-wrapper">
      <div className="navbar-container">
        {/* Brand Logo Alignment to Backend Branding */}
        <div className="navbar-logo">
          <a href="/">Nexus Code</a>
        </div>

        {/* Navigation Core Container */}
        <nav className={`navbar-links ${isOpen ? 'active' : ''}`}>
          
          {/* Menu Item 1: Static Direct Target */}
          <a href="/dashboard" className="nav-item">Dashboard</a>

          {/* Menu Item 2: Problems Dropdown Trigger */}
          <div 
            className="nav-dropdown-trigger"
            onMouseEnter={() => handleMouseEnter('problems')}
            onMouseLeave={handleMouseLeave}
          >
            <span className="nav-item dropdown-label">Problems</span>
            <div className={`dropdown-panel ${activeDropdown === 'problems' ? 'show' : ''}`}>
              <div className="dropdown-grid">
                <a href="/problems?difficulty=easy" className="dropdown-link">
                  <strong>Easy Core</strong>
                  <p>Foundation coding problems for beginners</p>
                </a>
                <a href="/problems?difficulty=medium" className="dropdown-link">
                  <strong>Medium Arena</strong>
                  <p>Intermediate algorithmic structures</p>
                </a>
                <a href="/problems?difficulty=hard" className="dropdown-link">
                  <strong>Hard Complex</strong>
                  <p>Advanced optimized testing matrixes</p>
                </a>
              </div>
            </div>
          </div>

          {/* Menu Item 3: Tracks Dropdown Trigger */}
          <div 
            className="nav-dropdown-trigger"
            onMouseEnter={() => handleMouseEnter('tracks')}
            onMouseLeave={handleMouseLeave}
          >
            <span className="nav-item dropdown-label">Tracks</span>
            <div className={`dropdown-panel ${activeDropdown === 'tracks' ? 'show' : ''}`}>
              <div className="dropdown-grid single-col">
                <a href="/progress?track=foundation" className="dropdown-link">Foundation Basics</a>
                <a href="/progress?track=dsa-foundation" className="dropdown-link">DSA Foundation</a>
                <a href="/progress?track=dsa-core" className="dropdown-link">DSA Core Master</a>
                <a href="/progress?track=dsa-advanced" className="dropdown-link">DSA Advanced Logic</a>
              </div>
            </div>
          </div>

          {/* Menu Item 4: Static Direct Target */}
          <a href="/leaderboard" className="nav-item">Leaderboard</a>
        </nav>

        {/* CTA Login Action Anchor */}
        <div className="navbar-actions">
          <a href="/login" className="btn-cta">Sign In</a>
        </div>

        {/* Mobile View Drawer Toggle Button */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
