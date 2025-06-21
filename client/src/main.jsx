import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App.jsx';
import { CivicAuthProvider } from "@civic/auth/react";
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CivicAuthProvider clientId={import.meta.env.VITE_CLIENTID}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CivicAuthProvider>
  </StrictMode>
);
