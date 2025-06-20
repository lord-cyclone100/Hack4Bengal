import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'
import { CivicAuthProvider,UserButton } from "@civic/auth/react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CivicAuthProvider clientId="a777ddc5-4a67-47ad-8439-0fb8e1fe40a6">
      <App />
    </CivicAuthProvider>
  </StrictMode>,
)
