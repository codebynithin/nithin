import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App text-sm md:text-lg">
        <Header />
        <Content />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
