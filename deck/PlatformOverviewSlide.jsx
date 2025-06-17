import React from 'react';
import { Globe, Feather, TrendingUp, Bot, Gauge, Zap, CheckCircle } from 'lucide-react';
import logoSvg from '../../assets/logo.svg';

const PlatformOverviewSlide = () => {
  return (
    <div className="slide-header animate-fade-in">
      <h1 className="slide-title">
        <img src={logoSvg} alt="Above Logo" className="logo-small animate-logo-pulse" />
        Above's Platform
      </h1>
      <p className="slide-subtitle">Revolutionary Browser-Native Technology</p>
      
      <div className="mt-16 max-w-6xl mx-auto">
        {/* Core Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left: Architecture */}
          <div className="feature-card animate-slide-in-left" style={{'--card-accent-color': 'var(--github-blue)'}}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Globe className="w-8 h-8 text-blue-500 mr-3" />
              Core Architecture
            </h3>
            
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 hover:bg-blue-100 transition-colors">
                <div className="flex items-center mb-2">
                  <Globe className="w-5 h-5 text-blue-600 mr-3" />
                  <h4 className="font-semibold text-blue-900">Browser-Native</h4>
                </div>
                <p className="text-blue-800 text-sm">Direct integration within browser environment for seamless monitoring</p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 hover:bg-orange-100 transition-colors">
                <div className="flex items-center mb-2">
                  <Feather className="w-5 h-5 text-orange-600 mr-3" />
                  <h4 className="font-semibold text-orange-900">Agentless</h4>
                </div>
                <p className="text-orange-800 text-sm">No complex installations or performance impact on systems</p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 hover:bg-purple-100 transition-colors">
                <div className="flex items-center mb-2">
                  <TrendingUp className="w-5 h-5 text-purple-600 mr-3" />
                  <h4 className="font-semibold text-purple-900">Semantic Telemetry</h4>
                </div>
                <p className="text-purple-800 text-sm">Rich behavioral data with contextual understanding</p>
              </div>
            </div>
          </div>

          {/* Right: Coverage */}
          <div className="feature-card animate-slide-in-right" style={{'--card-accent-color': 'var(--github-green)'}}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
              Universal Coverage
            </h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                Commercial SaaS platforms
              </div>
              <div className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                Custom internal applications
              </div>
              <div className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                Long-tail and niche SaaS tools
              </div>
              <div className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                Any browser-based application
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <p className="text-green-800 font-semibold flex items-center justify-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                No custom integrations required
              </p>
            </div>
          </div>
        </div>

        {/* Technology Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-in-up">
          <div className="feature-card" style={{'--card-accent-color': 'var(--github-blue)'}}>
            <div className="flex items-center justify-center w-14 h-14 bg-blue-500 rounded-xl mb-4 mx-auto">
              <Bot className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">LLM-Powered Analysis</h4>
            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Large language models provide semantic normalization of user actions, translating diverse interactions into meaningful insights
            </p>
          </div>

          <div className="feature-card" style={{'--card-accent-color': 'var(--github-orange)'}}>
            <div className="flex items-center justify-center w-14 h-14 bg-orange-500 rounded-xl mb-4 mx-auto">
              <Gauge className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">Real-Time Scoring</h4>
            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Continuous risk assessment with immediate scoring based on behavioral baselines and threat patterns
            </p>
          </div>

          <div className="feature-card" style={{'--card-accent-color': 'var(--github-purple)'}}>
            <div className="flex items-center justify-center w-14 h-14 bg-purple-500 rounded-xl mb-4 mx-auto">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">Automated Response</h4>
            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Immediate threat mitigation through session termination, access revocation, and authentication challenges
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformOverviewSlide;

