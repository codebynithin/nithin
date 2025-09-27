import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleModeChange = (data: boolean) => {
    setIsDarkMode(data);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const isDark = savedTheme === 'layout-dark';

      setIsDarkMode(isDark);

      document.body.className = isDark ? 'layout-dark' : 'layout-light';
    }
  }, []);

  return (
    <div
      className={`w-full text-sm md:text-lg flex flex-column justify-content-between m-0 app-container`}
    >
      <Header handleModeChange={handleModeChange} />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
