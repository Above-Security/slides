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
        {/* Homepage route */}
        <Route path="/home" element={<HomePage />} />
        
        {/* Slides presentation routes */}
        <Route path="/slide/:slideNumber" element={<PresentationApp />} />
        
        {/* Legacy compatibility - redirect common paths */}
        <Route path="/slides" element={<Navigate to="/slide/1" replace />} />
        <Route path="/slides/" element={<Navigate to="/slide/1" replace />} />
        <Route path="/slides/slide/:slideNumber" element={<Navigate to="/slide/:slideNumber" replace />} />
        <Route path="/slides/slides" element={<Navigate to="/slide/1" replace />} />
        
        {/* Root route - homepage */}
        <Route path="/" element={<HomePage />} />
        
        {/* Catch-all - redirect to slide 1 */}
        <Route path="*" element={<Navigate to="/slide/1" replace />} />
      </Routes>
    </Router>
  );
};

export default App;

