import React from 'react';
import './App.css';
import Navbar from './navigation/top-nav/Navbar';
import Hello from './pages/hello/Hello';
import Footer from './navigation/footer/Footer';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
