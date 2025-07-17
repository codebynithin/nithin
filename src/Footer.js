import React, { useEffect, useState } from 'react';
import './Footer.css';
import { apiFetch } from './http';

const Footer = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    apiFetch('/api/social-links')
      .then((res) => res.json())
      .then((data) => setLinks(data))
      .catch((err) => console.error('Failed to fetch social links', err));
  }, []);

  return (
    <footer className="footer flex align-items-center justify-content-between">
      <div className="footer-connect flex align-items-center">
        Connect With Me:
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
            aria-label={link.label}
          >
            <span className={`icon ${link.icon}`}></span>
          </a>
        ))}
      </div>
      <div className="footer-copyright flex align-items-center">
        <span className="flex align-items-start">&copy;</span>
        {new Date().getFullYear()} codebynithin.
      </div>
    </footer>
  );
};

export default Footer;
