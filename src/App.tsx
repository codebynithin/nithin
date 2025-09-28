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

  return (
    <div className="w-full text-sm md:text-lg flex flex-col justify-between m-0">
      <Header handleModeChange={handleModeChange} />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
