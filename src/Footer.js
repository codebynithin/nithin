import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-connect">
      Connect With Me:
      <a href="#" aria-label="GitHub" className="footer-icon"><i className="fab fa-github"></i></a>
      <a href="#" aria-label="LinkedIn" className="footer-icon"><i className="fab fa-linkedin"></i></a>
      <a href="#" aria-label="Twitter" className="footer-icon"><i className="fab fa-twitter"></i></a>
      <a href="#" aria-label="Mail" className="footer-icon"><i className="fas fa-envelope"></i></a>
    </div>
  </footer>
);

export default Footer;
