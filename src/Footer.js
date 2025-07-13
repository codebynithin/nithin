import React, { useEffect, useState } from 'react';
import './Footer.css';
import { apiFetch } from './http';

const Footer = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    apiFetch('/api/social-links')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLinks(data);
      })
      .catch((err) => console.error('Failed to fetch social links', err));
  }, []);

  return (
    <footer className="footer">
      <div className="footer-connect">
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
    </footer>
  );
};

export default Footer;
