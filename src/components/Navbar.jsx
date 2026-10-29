import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menuName) => {
    if (window.innerWidth > 768) setActiveDropdown(menuName);
  };
  const handleMouseLeave = () => {
    if (window.innerWidth > 768) setActiveDropdown(null);
  };
  
  const handleDropdownToggle = (menuName) => {
    if (window.innerWidth <= 768) {
      setActiveDropdown(activeDropdown === menuName ? null : menuName);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="navbar-wrapper">
      <div className="navbar-container">

        <div className="navbar-logo">
          <a href="/" onClick={closeMobileMenu}>Nexus Code</a>
        </div>

        <div 
          className={`navbar-overlay ${isMobileOpen ? 'active' : ''}`} 
          onClick={closeMobileMenu}
        />


        <nav className={`navbar-links ${isMobileOpen ? 'mobile-active' : ''}`}>
          <a href="/dashboard" className="nav-item" onClick={closeMobileMenu}>Dashboard</a>


          <div 
            className="nav-dropdown-trigger"
            onMouseEnter={() => handleMouseEnter('problems')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleDropdownToggle('problems')}
          >
            <span className={`nav-item dropdown-label ${activeDropdown === 'problems' ? 'label-active' : ''}`}>
              Problems
            </span>
            <div className={`dropdown-panel ${activeDropdown === 'problems' ? 'show' : ''}`}>
              <div className="dropdown-grid">
                <a href="/problems?difficulty=easy" className="dropdown-link" onClick={closeMobileMenu}>
                  <strong>Easy Core</strong>
                  <p>Foundation coding problems for beginners</p>
                </a>
                <a href="/problems?difficulty=medium" className="dropdown-link" onClick={closeMobileMenu}>
                  <strong>Medium Arena</strong>
                  <p>Intermediate algorithmic structures</p>
                </a>
                <a href="/problems?difficulty=hard" className="dropdown-link" onClick={closeMobileMenu}>
                  <strong>Hard Complex</strong>
                  <p>Advanced optimized testing matrixes</p>
                </a>
              </div>
            </div>
          </div>


          <div 
            className="nav-dropdown-trigger"
            onMouseEnter={() => handleMouseEnter('tracks')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleDropdownToggle('tracks')}
          >
            <span className={`nav-item dropdown-label ${activeDropdown === 'tracks' ? 'label-active' : ''}`}>
              Tracks
            </span>
            <div className={`dropdown-panel ${activeDropdown === 'tracks' ? 'show' : ''}`}>
              <div className="dropdown-grid single-col">
                <a href="/progress?track=foundation" className="dropdown-link" onClick={closeMobileMenu}>Foundation Basics</a>
                <a href="/progress?track=dsa-foundation" className="dropdown-link" onClick={closeMobileMenu}>DSA Foundation</a>
                <a href="/progress?track=dsa-core" className="dropdown-link" onClick={closeMobileMenu}>DSA Core Master</a>
                <a href="/progress?track=dsa-advanced" className="dropdown-link" onClick={closeMobileMenu}>DSA Advanced Logic</a>
              </div>
            </div>
          </div>

          <a href="/leaderboard" className="nav-item" onClick={closeMobileMenu}>Leaderboard</a>
          

          <div className="mobile-cta-wrapper">
            <a href="/login" className="btn-cta" onClick={closeMobileMenu}>Sign In</a>
          </div>
        </nav>


        <div className="navbar-actions">
          <a href="/login" className="btn-cta">Sign In</a>
        </div>


        <button 
          className={`mobile-toggle ${isMobileOpen ? 'toggle-active' : ''}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)} 
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
