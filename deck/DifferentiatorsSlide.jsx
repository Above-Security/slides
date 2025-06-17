import React from 'react';
import { Globe, Zap, Brain, Puzzle, CheckCircle, Star } from 'lucide-react';
import logoSvg from '../../assets/logo.svg';

const DifferentiatorsSlide = () => {
  return (
    <div className="slide-header animate-fade-in">
      <h1 className="slide-title">
        <img src={logoSvg} alt="Above Logo" className="logo-small animate-logo-pulse" />
        Key Differentiators
      </h1>
      <p className="slide-subtitle">What Sets Above Apart</p>
      
      <div className="mt-16 max-w-6xl mx-auto">
        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Universal Coverage */}
          <div className="feature-card animate-slide-in-left" style={{'--card-accent-color': 'var(--github-blue)'}}>
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Universal Coverage</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Application-agnostic monitoring across any browser-based platform, including long-tail and unsupported SaaS applications.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                No custom integrations required
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                Works with any SaaS platform
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                Covers internal applications
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                Instant deployment capability
              </div>
            </div>
          </div>

          {/* Real-Time Detection */}
          <div className="feature-card animate-slide-in-right" style={{'--card-accent-color': 'var(--github-green)'}}>
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Real-Time Detection</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Immediate identification of misuse, privilege abuse, insider risk, and advanced phishing tactics that evade conventional tools.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                Millisecond response times
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                Behavioral anomaly detection
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                Privilege escalation alerts
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                Advanced phishing protection
              </div>
            </div>
          </div>

          {/* Semantic Intelligence */}
          <div className="feature-card animate-slide-in-left" style={{'--card-accent-color': 'var(--github-purple)'}}>
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center mr-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Semantic Intelligence</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Advanced understanding of user intent and context that dramatically reduces false positives and alert fatigue.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                Context-aware analysis
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                Intent interpretation
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                Reduced false positives
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                Actionable insights
              </div>
            </div>
          </div>

          {/* Seamless Integration */}
          <div className="feature-card animate-slide-in-right" style={{'--card-accent-color': 'var(--github-orange)'}}>
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mr-4">
                <Puzzle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Seamless Integration</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Effortless deployment with existing security infrastructure, enhancing rather than replacing current investments.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                Zero infrastructure changes
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                API-first architecture
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                SIEM/SOAR compatibility
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                Rapid time-to-value
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white animate-slide-in-up">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
            <Star className="w-8 h-8 text-green-400 mr-3" />
            The Above Advantage
          </h3>
          <p className="text-lg leading-relaxed text-gray-100 text-center">
            Above is the only platform that combines universal application coverage, real-time behavioral analysis, and semantic understanding 
            to provide comprehensive post-authentication security without the complexity of traditional solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DifferentiatorsSlide;

