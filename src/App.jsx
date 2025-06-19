import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import PresentationApp from './components/PresentationApp';
import { clarityEvent, claritySet } from './utils/clarity';

const App = () => {
  // Initialize app-level analytics
  useEffect(() => {
    clarityEvent('app_session_start');
    claritySet('app_name', 'Above Security Platform');
    claritySet('app_version', '1.0.0');
    
    // Handle hash routing from 404.html redirects
    if (window.location.hash && window.location.hash.startsWith('#/')) {
      const hashPath = window.location.hash.substring(1); // Remove #
      window.history.replaceState(null, '', hashPath);
    }
  }, []);

  return (
    <Router>
      <Routes>
        {/* Homepage routes */}
        <Route path="/home" element={<HomePage />} />
        
        {/* Slides presentation routes */}
        <Route path="/slide/*" element={<PresentationApp />} />
        <Route path="/slide/:slideNumber" element={<PresentationApp />} />
        
        {/* Legacy /slides/ path compatibility */}
        <Route path="/slides/" element={<Navigate to="/home" replace />} />
        <Route path="/slides" element={<Navigate to="/home" replace />} />
        
        {/* Root route - redirect to homepage */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        
        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  );
};

export default App;

