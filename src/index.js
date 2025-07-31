import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './FlootSetup.css'
import App from './App';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { ScrollToHashElement } from "./components/ScrollToHashElement.tsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToHashElement />
      <Header />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
