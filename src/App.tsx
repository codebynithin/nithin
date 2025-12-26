import React from 'react';
import './App.scss';
import Content from './components/content/Content';
import { DialogProvider } from './components/dialog/Dialog';
import Banner from './components/banner/Banner';

const App: React.FC = () => {
  return (
    <DialogProvider>
      <Banner />
      <div className="w-full text-sm md:text-lg flex flex-col justify-between m-0">
        <Content />
      </div>
    </DialogProvider>
  );
};

export default App;
