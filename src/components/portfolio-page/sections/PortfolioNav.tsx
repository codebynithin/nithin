import React from 'react';
import { ArrowUpRight, Command, Moon, Sun } from 'lucide-react';
import { useDialog } from '../../dialog/Dialog';
import { navItems } from '../../../data/portfolio-page.data';

interface PortfolioNavProps {
  activeNav: string;
  isDarkMode: boolean;
  onScrollTo: (id: string) => void;
  onToggleTheme: () => void;
}

const PortfolioNav: React.FC<PortfolioNavProps> = ({
  activeNav,
  isDarkMode,
  onScrollTo,
  onToggleTheme,
}) => {
  const { showDialog } = useDialog();

  return (
    <nav className="portfolio-nav">
      <button className="portfolio-logo" type="button" onClick={() => onScrollTo('home')}>
        NV
      </button>

      <div className="portfolio-nav__links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`portfolio-nav__link ${activeNav === item.id ? 'is-active' : ''}`}
            type="button"
            onClick={() => onScrollTo(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="portfolio-nav__actions">
        <button
          className="icon-button"
          type="button"
          title="Open command menu"
          onClick={showDialog}
        >
          <Command size={18} />
        </button>
        <button
          className="icon-button"
          type="button"
          title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={onToggleTheme}
        >
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button
          className="button button--acid portfolio-nav__hire"
          type="button"
          onClick={() => onScrollTo('contact')}
        >
          Hire Me <ArrowUpRight size={15} />
        </button>
      </div>
    </nav>
  );
};

export default PortfolioNav;
