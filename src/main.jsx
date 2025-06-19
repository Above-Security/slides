import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeClarity } from './utils/clarity.js'

// Initialize Microsoft Clarity for session recording and analytics
initializeClarity();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

