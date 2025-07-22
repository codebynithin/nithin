import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './Content.scss';
import Home from './home/Home';
import About from './about/About';

const Content: React.FC = () => {
  return (
    <main className="content flex flex-grow-1 align-items-start justify-content-center md:align-items-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Add other routes here */}
      </Routes>
    </main>
  );
};

export default Content;
