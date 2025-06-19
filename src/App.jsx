import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import PresentationApp from './components/PresentationApp';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/slides" element={<Navigate to="/slides/1" replace />} />
      <Route path="/slides/:slideNumber" element={<PresentationApp />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;