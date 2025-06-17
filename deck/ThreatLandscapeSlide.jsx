import React from 'react';
import { AlertTriangle, Shield, Users, Download, Eye } from 'lucide-react';
import logoSvg from '../../assets/logo.svg';

const ThreatLandscapeSlide = () => {
  return (
    <div className="slide-header animate-fade-in">
      <h1 className="slide-title">
        <img src={logoSvg} alt="Above Logo" className="logo-small animate-logo-pulse" />
        The Identity Threat Landscape
      </h1>
      <p className="slide-subtitle">Understanding the Critical Security Gap</p>
      
      <div className="mt-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: The Critical Gap */}
          <div className="feature-card animate-slide-in-left" style={{'--card-accent-color': 'var(--github-red)'}}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertTriangle className="w-8 h-8 text-red-500 mr-3" />
              The Critical Gap
            </h3>
            
            <div className="space-y-4 mb-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                Existing tools focus on <strong>access</strong>, not actual <strong>behavior</strong> inside apps.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Compromised credentials alone don't tell the full story of what happens post-authentication.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-900 mb-3">Traditional Security Blind Spots:</h4>
              <ul className="space-y-2 text-red-800">
                <li className="flex items-center">
                  <Eye className="w-4 h-4 mr-2 flex-shrink-0" />
                  Post-authentication behavior
                </li>
                <li className="flex items-center">
                  <Eye className="w-4 h-4 mr-2 flex-shrink-0" />
                  In-application activities
                </li>
                <li className="flex items-center">
                  <Eye className="w-4 h-4 mr-2 flex-shrink-0" />
                  Session-level visibility
                </li>
                <li className="flex items-center">
                  <Eye className="w-4 h-4 mr-2 flex-shrink-0" />
                  Semantic user intent
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Emerging Threats */}
          <div className="feature-card animate-slide-in-right" style={{'--card-accent-color': 'var(--github-orange)'}}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Shield className="w-8 h-8 text-orange-500 mr-3" />
              Emerging Identity Threats
            </h3>
            
            <div className="space-y-4">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 hover:bg-orange-100 transition-colors">
                <h4 className="font-semibold text-orange-900 mb-2">OAuth Phishing</h4>
                <p className="text-orange-800 text-sm">Malicious applications requesting excessive permissions</p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 hover:bg-purple-100 transition-colors">
                <h4 className="font-semibold text-purple-900 mb-2">Session Hijacking</h4>
                <p className="text-purple-800 text-sm">Unauthorized access through stolen session tokens</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 hover:bg-blue-100 transition-colors">
                <h4 className="font-semibold text-blue-900 mb-2">Shadow IT Misuse</h4>
                <p className="text-blue-800 text-sm">Unauthorized applications and data exposure</p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 hover:bg-green-100 transition-colors">
                <h4 className="font-semibold text-green-900 mb-2">Low-and-Slow Data Scraping</h4>
                <p className="text-green-800 text-sm">Gradual data exfiltration that evades detection</p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 hover:bg-red-100 transition-colors">
                <h4 className="font-semibold text-red-900 mb-2">Insider Threats</h4>
                <p className="text-red-800 text-sm">Malicious or negligent actions by authorized users</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statistics */}
        <div className="mt-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white animate-slide-in-up">
          <h3 className="text-xl font-bold mb-6 text-center">Identity as the Primary Attack Vector</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">84%</div>
              <p className="text-gray-300">of breaches involve compromised credentials</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">300%</div>
              <p className="text-gray-300">increase in identity-based attacks</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">68%</div>
              <p className="text-gray-300">of organizations lack post-auth visibility</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreatLandscapeSlide;

