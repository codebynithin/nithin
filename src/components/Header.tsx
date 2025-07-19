import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';
import { apiFetch } from '../http';

const Header: React.FC = () => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');

    return !savedTheme || savedTheme === 'dark';
  });
  const [links, setLinks] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const loadTheme = (theme: 'light' | 'dark') => {
    const themeLink = document.getElementById('theme-css');

    if (themeLink) {
      themeLink.setAttribute(
        'href',
        `https://unpkg.com/primeflex@latest/themes/primeone-${theme}.css`,
      );
    }
  };
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';

    loadTheme(theme);
    localStorage.setItem('theme', theme);
  }, [isDarkMode]);
  useEffect(() => {
    apiFetch('/api/top-navigations')
      .then((res) => res.json())
      .then((data) => setLinks(data))
      .catch((err) => console.error('Failed to fetch top navigations', err));
  }, []);

  return (
    <header className={`header p-4 flex justify-content-between ${menuOpen ? 'active' : ''}`}>
      <div className="header-content p-2 flex flex-column gap-1">
        <div>Based on</div>
        <div className="underline mb-1">Kerala, India</div>
        <div>Switch to</div>
        <div onClick={toggleTheme} className="underline mb-1 cursor-pointer">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </div>
      </div>
      <div className="header-content p-2">
        <a href="https://codebynithin.com">codebynithin.com</a>
      </div>
      <div className="header-content p-2 flex flex-column align-items-end gap-1">
        {links.map((link: any) => (
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
    </header>
  );
};

export default Header;
