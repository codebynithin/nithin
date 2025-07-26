import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './Content.scss';
import Home from './home/Home';
import About from './about/About';
import Experience from './experience/Experience';
import Education from './education/Education';
import Portfolio from './portfolio/Portfolio';

const Content: React.FC = () => {
  return (
    <main className="content-container md:ml-8 w-full max-w-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experiences" element={<Experience />} />
        <Route path="/educations" element={<Education />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* Add other routes here */}
      </Routes>
    </main>
  );
};

export default Content;
