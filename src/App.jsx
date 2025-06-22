import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import PresentationApp from './components/PresentationApp';
import { 
  UseCasesIndex, 
  PhishingDetection, 
  AccountTakeover, 
  InsiderThreat, 
  ZeroDayProtection 
} from './use-cases';
import { 
  CompanyIndex
} from './company';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/slides" element={<Navigate to="/slides/1" replace />} />
      <Route path="/slides/:slideNumber" element={<PresentationApp />} />
      <Route path="/use-cases" element={<UseCasesIndex />} />
      <Route 
        path="/use-cases/phishing-detection" 
        element={<PhishingDetection />} 
        caseSensitive 
      />
      <Route 
        path="/use-cases/account-takeover" 
        element={<AccountTakeover />} 
        caseSensitive 
      />
      <Route 
        path="/use-cases/insider-threat" 
        element={<InsiderThreat />} 
        caseSensitive 
      />
      <Route 
        path="/use-cases/zero-day-protection" 
        element={<ZeroDayProtection />} 
        caseSensitive 
      />
      <Route path="/use-cases/*" element={<Navigate to="/" replace />} />
      <Route path="/company" element={<CompanyIndex />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;