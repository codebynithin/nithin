import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Loader from './components/loader/Loader';
import { apiFetch } from './http';
import { Toast } from 'primereact/toast';
import { useRef } from 'react';

import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';

const App: React.FC = () => {
  const [links, setLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toastRef = useRef<Toast>(null);
  const handleModeChange = (data: boolean) => {
    setIsDarkMode(data);
  };

  useEffect(() => {
    apiFetch('/api/v1/top-navigations')
      .then((res) => res.json())
      .then((data) => setLinks(data))
      .catch(() =>
        toastRef.current?.show({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to fetch top navigations',
          life: 3000,
        }),
      );

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const theme = isDarkMode ? 'layout-dark' : 'layout-light';
    const themeFile = isDarkMode ? 'lara-dark-indigo/theme.css' : 'lara-light-indigo/theme.css';

    import(`primereact/resources/themes/${themeFile}`);
    localStorage.setItem('theme', theme);
  }, [isDarkMode]);

  return (
    <Router>
      {isLoading && <Loader />}
      <div
        className={`w-full text-sm md:text-lg flex flex-column justify-content-between m-0 app-container ${
          isLoading ? 'hidden' : 'visible'
        }`}
      >
        <Toast ref={toastRef} />
        <Header links={links} handleModeChange={handleModeChange} />
        <Content />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
