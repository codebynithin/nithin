import React from 'react';
import './Loader.scss';

const Loader: React.FC = () => {
  return (
    <div className="loader-container flex justify-content-center align-items-center w-screen h-screen fixed top-0 left-0 z-50">
      <div className="loader-text m-0 flex gap-3">
        <span>Code</span>
        <span>By</span>
        <span className="font-bold">Nithin</span>
        <span className="font-bold">Viswanathan</span>
      </div>
    </div>
  );
};

export default Loader;
