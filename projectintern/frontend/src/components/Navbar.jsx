import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="flex justify-around py-3 bg-red-500">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>contact</li>
        </Link>
        <Link to="/services">
          <li>Services</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
