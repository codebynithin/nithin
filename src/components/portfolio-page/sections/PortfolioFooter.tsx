import React from 'react';
import { navItems } from '../../../data/portfolio-page.data';

interface PortfolioFooterProps {
  onScrollTo: (id: string) => void;
}

const PortfolioFooter: React.FC<PortfolioFooterProps> = ({ onScrollTo }) => (
  <footer className="portfolio-footer">
    <button className="portfolio-logo" type="button" onClick={() => onScrollTo('home')}>
      NV
    </button>
    <span>© {new Date().getFullYear()} Nithin V. All rights reserved.</span>
    <div>
      {navItems.map((item) => (
        <button key={item.id} type="button" onClick={() => onScrollTo(item.id)}>
          {item.label}
        </button>
      ))}
    </div>
  </footer>
);

export default PortfolioFooter;
