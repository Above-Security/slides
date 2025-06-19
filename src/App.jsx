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
    <Router>
      <Routes>
        {/* Homepage route - accessible at /slides/home */}
        <Route path="/slides/home" element={<HomePage />} />
        
        {/* Slides presentation routes - accessible at /slides/slide/1 etc */}
        <Route path="/slides/slide/*" element={<PresentationApp />} />
        <Route path="/slides/slide/:slideNumber" element={<PresentationApp />} />
        
        {/* Default /slides/ route - redirect to slide 1 for existing links */}
        <Route path="/slides/" element={<Navigate to="/slides/slide/1" replace />} />
        <Route path="/slides" element={<Navigate to="/slides/slide/1" replace />} />
        
        {/* Root route - for custom domain, redirect to home */}
        <Route path="/" element={<Navigate to="/slides/home" replace />} />
        
        {/* Catch-all route - redirect to slide 1 for backward compatibility */}
        <Route path="*" element={<Navigate to="/slides/slide/1" replace />} />
      </Routes>
    </Router>
  );
};

export default App;

