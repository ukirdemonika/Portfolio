// src/components/header/Header.jsx

import React, { useState } from 'react'; // 1. Import useState
import { NavLink } from 'react-router-dom';
import './Header.css'; // Make sure your CSS is imported
import { greeting } from '../../portFolio-data/greeting-data';


const Header = (props) => {
  // 2. Initialize state to track if the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 3. Create a function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const { theme } = props;

  const path = "/home"

  const onMouseEnter = (event, color) => {
    const el = event.target;
    el.style.backgroundColor = color;
  };

  const onMouseOut = (event) => {
    const el = event.target;
    el.style.backgroundColor = "transparent";
  };

  const navItems = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Experience', path: '/experience' },
    { id: 3, name: 'Education', path: '/education' },
    { id: 4, name: 'Projects', path: '/projects' },
    { id: 5, name: 'MySkills', path: '/myskills' },
    { id: 6, name: 'Contact', path: '/contact' }
  ]

  return (
    <div style={{ color: theme.text }}>
      <header className="header">
        <NavLink to={path} className="logo">
          <span>&lt;</span>
          <span className="logo-name">{greeting.logo_name}</span>
          <span>/&gt;</span>
        </NavLink>

        {/* 4. REMOVED the checkbox input and REPLACED the label with a button */}
        <button
          className={`menu-icon ${isMenuOpen ? 'open' : ''}`} // Conditionally add 'open' class
          onClick={toggleMenu} // Toggle state on click
          aria-label="Toggle navigation menu"
        >
          <span className="navicon"></span>
        </button>

        {/* 5. Conditionally add 'menu-open' class to the <ul> based on state */}
        <ul
          className={`menu ${isMenuOpen ? 'menu-open' : ''}`}
          style={{
            backgroundColor: theme?.body,
            boxShadow: `${theme?.headerColor} 0px 0px 15px -2px`,
          }}
        >
          {navItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
                // 6. Add this onClick to close the menu when a link is clicked on mobile
                onClick={toggleMenu}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default Header;