import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import { Toast } from 'primereact/toast';
import { useRef } from 'react';

import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toastRef = useRef<Toast>(null);
  const handleModeChange = (data: boolean) => {
    setIsDarkMode(data);
  };

  useEffect(() => {
    const theme = isDarkMode ? 'layout-dark' : 'layout-light';
    const themeFile = isDarkMode ? 'lara-dark-indigo/theme.css' : 'lara-light-indigo/theme.css';

    import(`primereact/resources/themes/${themeFile}`);
    localStorage.setItem('theme', theme);
  }, [isDarkMode]);

  return (
    <Router>
      <div
        className={`w-full text-sm md:text-lg flex flex-column justify-content-between m-0 app-container`}
      >
        <Toast ref={toastRef} />
        <Header handleModeChange={handleModeChange} />
        <Content />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
