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
  }, []);

  return (
    <Router basename="/slides">
      <Routes>
        {/* Homepage route - will be accessible at /slides/home */}
        <Route path="/home" element={<HomePage />} />
        
        {/* Slides presentation routes - will be accessible at /slides/slide/1 etc */}
        <Route path="/slide/*" element={<PresentationApp />} />
        <Route path="/slide/:slideNumber" element={<PresentationApp />} />
        
        {/* Default route - redirect to homepage for custom domain */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        
        {/* Catch-all route - redirect to homepage */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  );
};

export default App;

