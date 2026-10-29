# Nexus Code — Frontend Navbar Project

A polished, highly responsive, and reusable navigation bar component for the **Nexus Code** platform. Built using React and vanilla W3C-compliant CSS, this repository serves as the decoupled modular header framework designed to integrate with the platform's Spring Boot backend ecosystem.

---

## 🚀 Features

*   **Design Synchronization:** Pixel-perfect implementation based on modern tech dashboard design patterns, utilizing electric indigo (`#4f46e5`) and deep slate color tokens.
*   **Hierarchical Dropdown Menus:** Smoothly animated desktop mega-menus for browsing **Problems** and **Tracks** with two-part contextual text descriptions.
*   **Responsive Sliding Sidebar:** A fully adaptive mobile drawer navigation panel (`@media` down to 320px) equipped with a frosted-glass background backdrop blur filter overlay.
*   **Morphing Hamburger Icon:** Hardware-accelerated CSS vector transitions that seamlessly morph a three-tier row stack into an "X" close symbol.
*   **Dynamic Route Highlights:** Client-side path detection via browser history window location APIs that hooks visual focus accents to active tabs on both desktop and mobile viewports.

---

## 📁 Repository Structure

```text
ReuseableNavbar/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Component structure, layout anchors, and state interactions
│   │   └── Navbar.css       # Layout styles, desktop hover animation engines, and mobile overrides
│   ├── assets/
│   │   └── logo.png         # Platform brand identity graphics
│   ├── index.css            # Global resets, Inter UI typography, and CSS custom variables
│   ├── main.jsx             # React DOM entry mount mounting tree root
│   └── App.jsx              # Main page scaffolding template container
├── vite.config.js           # Asset builder config with integrated backend server API proxy
└── README.md                # System documentation
```

## 🤖 AI Disclosure

*This platform's style interface was engineered with the assistance of an AI. AI models were utilized during development to optimize the website's design, ensure strict responsive fluid breakdown mappings across viewports, construct micro-interaction animations, and clean boilerplate assets for a premium user experience.*
