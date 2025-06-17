import React from 'react';
import { Eye, Activity, Brain, Shield } from 'lucide-react';
import logoSvg from '../../assets/logo.svg';

const RuntimeITDRSlide = () => {
  return (
    <div className="slide-header animate-fade-in">
      <h1 className="slide-title">
        <img src={logoSvg} alt="Above Logo" className="logo-small animate-logo-pulse" />
        What is Runtime ITDR?
      </h1>
      <p className="slide-subtitle">Beyond Traditional Security Approaches</p>
      
      <div className="mt-16 max-w-6xl mx-auto">
        {/* Definition Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white mb-12 animate-slide-in-up">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <div className="w-8 h-8 bg-green-400 rounded-lg flex items-center justify-center mr-3">
              <Brain className="w-5 h-5 text-gray-900" />
            </div>
            Runtime ITDR Definition
          </h2>
          <p className="text-lg leading-relaxed text-gray-100 mb-4">
            Runtime Identity Threat Detection & Response focuses on <strong>post-authentication behavioral observability</strong> 
            and <strong>semantic user intent interpretation</strong> within live application sessions.
          </p>
          <p className="text-lg leading-relaxed text-gray-100">
            Unlike traditional ITDR that monitors access events, Runtime ITDR provides <strong>session-level visibility</strong> 
            into what users actually do inside applications, enabling detection of threats that occur after successful authentication.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Traditional Approaches */}
          <div className="feature-card animate-slide-in-left" style={{'--card-accent-color': 'var(--github-red)'}}>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Shield className="w-6 h-6 text-red-500 mr-3" />
              Traditional ITDR, UEBA, DLP, SIEM
            </h3>
            
            <div className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-900 mb-2">Focus Areas:</h4>
                <ul className="space-y-1 text-red-800 text-sm">
                  <li>• Authentication events</li>
                  <li>• Network traffic analysis</li>
                  <li>• File system monitoring</li>
                  <li>• Endpoint behavior</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-900 mb-2">Limitations:</h4>
                <ul className="space-y-1 text-red-800 text-sm">
                  <li>• No post-auth visibility</li>
                  <li>• Limited application context</li>
                  <li>• High false positive rates</li>
                  <li>• Reactive detection</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Runtime ITDR */}
          <div className="feature-card animate-slide-in-right" style={{'--card-accent-color': 'var(--github-green)'}}>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Activity className="w-6 h-6 text-green-500 mr-3" />
              Runtime ITDR Approach
            </h3>
            
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-2">Focus Areas:</h4>
                <ul className="space-y-1 text-green-800 text-sm">
                  <li>• In-application behavior</li>
                  <li>• User intent analysis</li>
                  <li>• Session-level monitoring</li>
                  <li>• Semantic understanding</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-2">Advantages:</h4>
                <ul className="space-y-1 text-green-800 text-sm">
                  <li>• Real-time threat detection</li>
                  <li>• Application-aware context</li>
                  <li>• Reduced false positives</li>
                  <li>• Proactive prevention</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Key Concepts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-in-up">
          <div className="feature-card" style={{'--card-accent-color': 'var(--github-blue)'}}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900">Behavioral Observability</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Continuous monitoring of user actions within applications to establish behavioral baselines and detect anomalies.
            </p>
          </div>

          <div className="feature-card" style={{'--card-accent-color': 'var(--github-purple)'}}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900">Semantic Intent</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Understanding the meaning and context behind user actions to differentiate between legitimate and malicious behavior.
            </p>
          </div>

          <div className="feature-card" style={{'--card-accent-color': 'var(--github-orange)'}}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900">Session-Level Visibility</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Complete visibility into user sessions across all applications, providing comprehensive security coverage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RuntimeITDRSlide;

