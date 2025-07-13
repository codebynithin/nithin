import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { apiFetch } from './http';

const Navbar = () => {
  const location = useLocation();
  const [links, setLinks] = useState([]);

  useEffect(() => {
    apiFetch('/api/top-navigations')
      .then((res) => res.json())
      .then((data) => setLinks(data))
      .catch((err) => console.error('Failed to fetch top navigations', err));
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-links">
        {links.map((link) => (
          <Link
            key={link.id}
            to={link.href}
            className={location.pathname === link.href ? 'selected' : ''}
          >
            {link.icon && <span className={`icon ${link.icon}`}></span>}
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
