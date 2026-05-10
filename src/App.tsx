import React from 'react';
import './App.scss';
import { DialogProvider } from './components/dialog/Dialog';
import Banner from './components/banner/Banner';
import PortfolioPage from './components/portfolio-page/PortfolioPage';

const App: React.FC = () => {
  return (
    <DialogProvider>
      <Banner />
      <PortfolioPage />
    </DialogProvider>
  );
};

export default App;
