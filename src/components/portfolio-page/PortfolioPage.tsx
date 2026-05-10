import React, { useEffect, useMemo, useRef, useState } from 'react';
import './PortfolioPage.scss';
import DialogController from '../dialog/DialogController';
import PortfolioNav from './sections/PortfolioNav';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import TechMarquee from './sections/TechMarquee';
import SkillsSection from './sections/SkillsSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import PortfolioFooter from './sections/PortfolioFooter';
import { navItems, roles } from '../../data/portfolio-page.data';

const PortfolioPage: React.FC = () => {
  const [activeNav, setActiveNav] = useState('home');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const enabled = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);

    document.documentElement.classList.toggle('dark', enabled);
    setIsDarkMode(enabled);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((index) => (index + 1) % roles.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    sectionRefs.current = sectionIds.reduce<Record<string, HTMLElement | null>>((acc, id) => {
      acc[id] = document.getElementById(id);
      return acc;
    }, {});

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveNav(visible.target.id);
        }
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0.12, 0.35, 0.6] },
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveNav(id);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((enabled) => {
      const next = !enabled;

      localStorage.setItem('theme', next ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', next);

      return next;
    });
  };

  return (
    <div className="portfolio-page-shell">
      <DialogController />
      <PortfolioNav
        activeNav={activeNav}
        isDarkMode={isDarkMode}
        onScrollTo={scrollTo}
        onToggleTheme={toggleDarkMode}
      />
      <main>
        <HeroSection role={roles[roleIndex]} onScrollTo={scrollTo} />
        <AboutSection />
        <TechMarquee />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <PortfolioFooter onScrollTo={scrollTo} />
    </div>
  );
};

export default PortfolioPage;
