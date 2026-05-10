import React, { useEffect, useState } from 'react';
import { ArrowUpRight, ChevronDown, Download, MapPin } from 'lucide-react';

interface HeroSectionProps {
  role: string;
  onScrollTo: (id: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ role, onScrollTo }) => {
  const [keyCombination, setKeyCombination] = useState<string[]>([]);

  useEffect(() => {
    const isMobile = navigator.userAgent.toLowerCase().includes('mobile');
    const isMac = navigator.platform.toLowerCase().includes('mac');

    setKeyCombination(
      isMobile ? ['Tap command'] : isMac ? ['Command', 'Enter'] : ['Ctrl', 'Enter'],
    );
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="grid-bg" />
      <div className="hero-section__orb hero-section__orb--green" />
      <div className="hero-section__orb hero-section__orb--blue" />

      <div className="hero-section__status">
        <span className="section-label">Available for new projects</span>
        <span className="status-dot" />
      </div>

      <div className="hero-section__name">
        <h1>NITHIN</h1>
        <div className="hero-section__surname-row">
          <h1>V</h1>
          <p key={role}>{role}</p>
        </div>
      </div>

      <p className="hero-section__intro">
        Crafting high-performance digital experiences for <strong>13+ years</strong>. I lead teams,
        architect systems, and obsess over every detail from React dashboards to Flutter mobile
        apps.
      </p>

      <div className="hero-section__actions">
        <button
          className="button button--acid"
          type="button"
          onClick={() => onScrollTo('projects')}
        >
          View My Work <ArrowUpRight size={17} />
        </button>
        <a
          className="button button--outline"
          href="/downloads/resume-nithin-v.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume <Download size={17} />
        </a>
      </div>

      <div className="hero-section__meta">
        <span>
          <MapPin size={15} /> Ernakulam, Kerala, India
        </span>
        <span>{keyCombination.join(' + ')} to open quick links</span>
      </div>

      <button className="hero-section__scroll" type="button" onClick={() => onScrollTo('about')}>
        <span>scroll</span>
        <ChevronDown size={16} />
      </button>
    </section>
  );
};

export default HeroSection;
