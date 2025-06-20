import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import PresentationApp from './components/PresentationApp';
import { UseCasesIndex, UseCaseDetail } from './use-cases';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/slide/:slideNumber" element={<PresentationApp />} />
      <Route path="/use-cases" element={<UseCasesIndex />} />
      <Route path="/use-cases/:useCaseId" element={<UseCaseDetail />} />
      <Route path="/" element={<Navigate to="/slide/1" replace />} />
      <Route path="*" element={<Navigate to="/slide/1" replace />} />
    </Routes>
  );
};

export default App;
