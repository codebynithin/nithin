import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';
import { apiFetch } from '../../http';

const Header: React.FC = () => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');

    return !savedTheme || savedTheme === 'dark';
  });
  const [links, setLinks] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const loadTheme = (theme: 'light' | 'dark') => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
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
    apiFetch('/api/v1/top-navigations')
      .then((res) => res.json())
      .then((data) => setLinks(data))
      .catch((err) => console.error('Failed to fetch top navigations', err));
  }, []);

  return (
    <header
      className={`header p-3 flex justify-content-between align-items-start ${
        menuOpen ? 'active' : ''
      }`}
    >
      <div className="header-content flex flex-column gap-1">
        <div>Switch to</div>
        <div onClick={toggleTheme} className="underline cursor-pointer hover:text-primary">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </div>
      </div>
      <div className="header-content">
        <a href="https://codebynithin.com">codebynithin.com</a>
      </div>
      <div className="header-content flex flex-column align-items-end gap-1">
        {links.map((link: any) => (
          <Link
            key={link.id}
            to={link.href}
            className={location.pathname === link.href ? 'selected' : ''}
            onClick={() => setMenuOpen(false)}
          >
            {/* {link.icon && <span className={`icon ${link.icon}`}></span>} */}
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
