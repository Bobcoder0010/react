import React from 'react';
import "./navbar.css"

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Services</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;