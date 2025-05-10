import { createRoot } from 'react-dom/client'
import './index.css'
import App from './client/Body/App.jsx'
import React from 'react';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <App />
  </React.StrictMode>,
)
