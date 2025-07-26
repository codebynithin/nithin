import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';
// eslint-disable-next-line no-unused-vars
import { TopNavigationModel } from '../../common/model/top-navigation.model';

const Header: React.FC<{ links: TopNavigationModel[] }> = ({ links = [] }) => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');

    return !savedTheme || savedTheme === 'layout-dark';
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const loadTheme = (theme: 'layout-light' | 'layout-dark') => {
    document.body.classList.remove('layout-light', 'layout-dark');
    document.body.classList.add(theme);

    document
      .getElementById('root')
      ?.classList.remove('layout-wrapper-light', 'layout-wrapper-dark');
    document
      .getElementById('root')
      ?.classList.add(
        'layout-wrapper',
        theme === 'layout-light' ? 'layout-wrapper-light' : 'layout-wrapper-dark',
      );
  };
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const theme = isDarkMode ? 'layout-dark' : 'layout-light';

    loadTheme(theme);
    localStorage.setItem('theme', theme);
  }, [isDarkMode]);

  return (
    <header
      className={`header w-full p-2 md:p-3 flex justify-content-between align-items-start gap-2 ${
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
