import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GlobalStyle from './styles/globalStyle';
import { BrowserRouter } from 'react-router-dom';
import { HomeProvider } from './contexts/homeContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode> 
    <BrowserRouter>
      <GlobalStyle/>
      <HomeProvider>
        <App />
      </HomeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
