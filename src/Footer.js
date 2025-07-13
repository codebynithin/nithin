import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-connect">
      Connect With Me:
      {[
        {
          href: 'https://www.linkedin.com/in/nithinvuideveloper',
          iconClass: 'icon-linkedin2',
          label: 'LinkedIn',
        },
        {
          href: 'https://twitter.com/Nithin_V86',
          iconClass: 'icon-twitter',
          label: 'Twitter',
        },
        {
          href: 'https://github.com/nithinv86',
          iconClass: 'icon-github',
          label: 'GitHub',
        },
        {
          href: 'https://stackoverflow.com/users/8904502/nithin-v',
          iconClass: 'icon-stackoverflow',
          label: 'Stack Overflow',
        },
        {
          href: 'https://www.facebook.com/nithinvuideveloper',
          iconClass: 'icon-facebook',
          label: 'Facebook',
        },
      ].map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
          aria-label={link.label}
        >
          <span className={`icon ${link.iconClass}`}></span>
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;
