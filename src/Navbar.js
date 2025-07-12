import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link
          to="/"
          className={location.pathname === '/' ? 'selected' : ''}
        >
          Hello
        </Link>
        <Link
          to="/about"
          className={location.pathname === '/about' ? 'selected' : ''}
        >
          About
        </Link>
        <Link
          to="/project"
          className={location.pathname === '/project' ? 'selected' : ''}
        >
          Project
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
