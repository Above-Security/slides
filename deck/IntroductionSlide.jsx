import React from 'react';
import { Shield, Globe, Brain } from 'lucide-react';
import logoSvg from '../../assets/logo.svg';

const IntroductionSlide = () => {
  return (
    <div className="slide-header animate-fade-in">
      <h1 className="slide-title">
        <img src={logoSvg} alt="Above Logo" className="logo-small animate-logo-pulse" />
        Above — Runtime Identity Threat Detection & Response
      </h1>
      <p className="slide-subtitle">The First Fully Application-Aware Runtime ITDR Platform</p>
      
      <div className="mt-16 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="feature-card animate-slide-in-left" style={{'--card-accent-color': 'var(--github-blue)'}}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Application-Aware</h3>
            </div>
            <p className="text-gray-600">
              Deep visibility into user behavior across any browser-based application
            </p>
          </div>

          <div className="feature-card animate-slide-in-up" style={{'--card-accent-color': 'var(--github-green)'}}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Real-Time Detection</h3>
            </div>
            <p className="text-gray-600">
              Immediate identification of threats and behavioral anomalies
            </p>
          </div>

          <div className="feature-card animate-slide-in-right" style={{'--card-accent-color': 'var(--github-purple)'}}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Anti-Phishing</h3>
            </div>
            <p className="text-gray-600">
              Detects advanced phishing beyond traditional email filters
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white animate-slide-in-up">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <div className="w-8 h-8 bg-green-400 rounded-lg flex items-center justify-center mr-3">
              <Shield className="w-5 h-5 text-gray-900" />
            </div>
            Executive Summary
          </h2>
          <p className="text-lg leading-relaxed text-gray-100">
            Traditional ITDR and IAM solutions fail post-authentication, leaving organizations blind to the most critical threats. 
            Above addresses this critical gap by providing real-time detection of misuse, insider threats, and sophisticated phishing attacks 
            that occur within browser sessions and applications. Our platform goes beyond conventional email-based defenses to detect 
            OAuth consent abuse, session hijacking, and browser-based social engineering, delivering comprehensive post-authentication 
            security without the complexity of traditional solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSlide;

