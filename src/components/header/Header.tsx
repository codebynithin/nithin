import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';
// eslint-disable-next-line no-unused-vars
import { TopNavigationModel } from '../../common/model/top-navigation.model';

interface HeaderProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, onToggleDarkMode }) => {
  const links: TopNavigationModel[] = [
    { href: '/about', icon: 'cbn-user', label: 'About' },
    { href: '/experiences', icon: 'cbn-experiences', label: 'Experiences' },
    { href: '/portfolio', icon: 'cbn-portfolio', label: 'Portfolio' },
    { href: '/educations', icon: 'cbn-educations', label: 'Educations' },
  ];
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    onToggleDarkMode();
  };

  return (
    <header
      className={`header w-full p-2 md:p-3 flex justify-between align-start gap-2 ${
        menuOpen ? 'active' : ''
      }`}
    >
      <div className="header-theme flex flex-col gap-1">
        <div>Switch to</div>
        <div onClick={toggleTheme} className="underline cursor-pointer hover:text-primary">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </div>
      </div>
      <div className="header-content">
        <Link to="/">codebynithin.com</Link>
      </div>
      <div className="header-navs flex flex-col items-end gap-2">
        {links.map((link: TopNavigationModel, index: number) => (
          <Link
            key={index}
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
