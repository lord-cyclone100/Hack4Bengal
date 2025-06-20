import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'
import { CivicAuthProvider,UserButton } from "@civic/auth/react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CivicAuthProvider clientId={import.meta.env.VITE_CLIENTID}>
      <App />
    </CivicAuthProvider>
  </StrictMode>,
)
