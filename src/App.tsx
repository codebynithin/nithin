import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Loader from './components/loader/Loader';
import { apiFetch } from './http';

const App: React.FC = () => {
  const [links, setLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    apiFetch('/api/v1/top-navigations')
      .then((res) => res.json())
      .then((data) => setLinks(data))
      .catch((err) => console.error('Failed to fetch top navigations', err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="w-full text-sm md:text-lg flex flex-column justify-content-between m-0">
        <Header links={links} />
        <Content />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
