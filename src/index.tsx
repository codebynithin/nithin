import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <PrimeReactProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </PrimeReactProvider>
  </React.StrictMode>,
);
