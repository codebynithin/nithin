import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { apiFetch } from '../../http';

const Navbar = () => {
  const location = useLocation();
  const [links, setLinks] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    apiFetch('/api/top-navigations')
      .then((res) => res.json())
      .then((data) => setLinks(data))
      .catch((err) => console.error('Failed to fetch top navigations', err));
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
      <div className="navbar-container">
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <i className="cbn-x1"></i> : <i className="cbn-menu"></i>}
        </div>
        <div className="navbar-links">
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.href}
              className={location.pathname === link.href ? 'selected' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {link.icon && <span className={`icon ${link.icon}`}></span>}
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
