import React from 'react';
import { House } from 'react-bootstrap-icons';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Web Scraper</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="/"> <House size={24} /> </a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
