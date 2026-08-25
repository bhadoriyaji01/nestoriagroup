import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Import Tailwind CSS
import './App.css'
// Import HelmetProvider
import { HelmetProvider } from 'react-helmet-async'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
