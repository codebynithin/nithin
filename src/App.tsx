import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';

import Header from './components/Header';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
    </Router>
  );
};

export default App;
