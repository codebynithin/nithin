import React, { useState, useCallback, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './Content.scss';
import Home from './home/Home';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import DialogController from '../dialog/DialogController';
import Experience from './experience/Experience';
import Education from './education/Education';

const Content: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (window.location.pathname !== '/') {
      window.location.href = '/';
    }

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;

      localStorage.setItem('theme', newMode ? 'dark' : 'light');

      document.documentElement.classList.toggle('dark', newMode);

      return newMode;
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
      <main className={`flex-grow flex items-start justify-center ${isHome ? 'pt-0' : 'pt-6'}`}>
        <DialogController />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experiences" element={<Experience />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/educations" element={<Education />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Content;
