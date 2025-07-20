import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './Content.scss';
import Home from './home/Home';

const Content: React.FC = () => {
  return (
    <main className="content flex flex-grow-1 align-items-center justify-content-center">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes here */}
      </Routes>
    </main>
  );
};

export default Content;
