import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';
// eslint-disable-next-line no-unused-vars
import { HeaderProps } from '../../interfaces';

const Header: React.FC<HeaderProps> = ({ links = [] }) => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');

    return !savedTheme || savedTheme === 'dark';
  });
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
        <Link to="/">codebynithin.com</Link>
      </div>
      <div className="header-content flex flex-column align-items-end gap-2">
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
