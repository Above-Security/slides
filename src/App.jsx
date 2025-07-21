import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import PresentationApp from './components/PresentationApp';
import OnePager from './components/OnePager';
import {
  UseCasesIndex,
  PhishingDetection,
  InsiderThreat,
  CISOBusinessCase
} from './use-cases';
import {
  CompanyIndex
} from './company';
import {
  FICOLanding
} from './for';
import FloatingTOCDemo from './company/pages/FloatingTOCDemo';
import SectionContainerDemo from './company/pages/SectionContainerDemo';
import InsiderThreatMatrix from './pages/InsiderThreatMatrix';
import InsiderThreatDeck from './pages/InsiderThreatDeck';
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
        path="/use-cases/insider-threat"
        element={<InsiderThreat />}
        caseSensitive
      />
      <Route
        path="/use-cases/ciso-business-case"
        element={<CISOBusinessCase />}
        caseSensitive
      />
      <Route path="/use-cases/*" element={<Navigate to="/" replace />} />
      <Route path="/one-pager" element={<OnePager />} />
      <Route path="/for/fico" element={<FICOLanding />} />
      <Route path="/for/*" element={<Navigate to="/for/fico" replace />} />
      <Route path="/company" element={<CompanyIndex />} />
      <Route path="/company/toc-demo" element={<FloatingTOCDemo />} />
      <Route path="/company/section-demo" element={<SectionContainerDemo />} />
      <Route path="/insider-threat-matrix" element={<InsiderThreatMatrix />} />
      <Route path="/insider-threat-deck" element={<InsiderThreatDeck />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;