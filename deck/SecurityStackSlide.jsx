import React from 'react';
import { Puzzle, Rocket, Key, BarChart, Shield, Settings, CheckCircle, Eye, Lightbulb, Zap } from 'lucide-react';
import logoSvg from '../../assets/logo.svg';

const SecurityStackSlide = () => {
  const integrations = [
    {
      icon: Key,
      title: 'IAM & PAM',
      description: 'Extends identity management with post-authentication behavioral monitoring',
      color: 'blue'
    },
    {
      icon: BarChart,
      title: 'SIEM & SOAR',
      description: 'Enriches security operations with high-fidelity behavioral intelligence',
      color: 'purple'
    },
    {
      icon: Shield,
      title: 'DLP & UEBA',
      description: 'Provides application-aware context to traditional data protection',
      color: 'red'
    },
    {
      icon: Settings,
      title: 'Endpoint Security',
      description: 'Bridges the gap between endpoint and application-level security',
      color: 'orange'
    }
  ];

  const benefits = [
    'High-fidelity, actionable insights for SOC analysts',
    'Reduced manual investigation time',
    'Real-time response and automated policy enforcement',
    'Enhanced threat detection accuracy',
    'Comprehensive audit trail generation',
    'Seamless API integration with existing tools'
  ];

  const valueProps = [
    {
      icon: Eye,
      title: 'Eliminates Blind Spots',
      description: 'Provides visibility into the post-authentication layer that traditional security tools cannot see',
      color: 'red'
    },
    {
      icon: Lightbulb,
      title: 'Actionable Intelligence',
      description: 'Delivers contextual insights that enable faster, more accurate security decision-making',
      color: 'blue'
    },
    {
      icon: Zap,
      title: 'Immediate Response',
      description: 'Enables real-time threat mitigation and automated response to behavioral anomalies',
      color: 'green'
    }
  ];

  return (
    <div className="slide-header animate-fade-in">
      <h1 className="slide-title">
        <img src={logoSvg} alt="Above Logo" className="logo-small animate-logo-pulse" />
        Security Stack Integration
      </h1>
      <p className="slide-subtitle">Enhancing Your Existing Security Infrastructure</p>
      
      <div className="mt-16 max-w-6xl mx-auto">
        {/* Integration Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left: Complementary Tools */}
          <div className="feature-card animate-slide-in-left" style={{'--card-accent-color': 'var(--github-blue)'}}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Puzzle className="w-8 h-8 text-blue-500 mr-3" />
              Complementary Integration
            </h3>
            
            <div className="space-y-4">
              {integrations.map((integration, index) => {
                const IconComponent = integration.icon;
                const colorClass = integration.color === 'blue' ? 'text-blue-600' : 
                                 integration.color === 'purple' ? 'text-purple-600' : 
                                 integration.color === 'red' ? 'text-red-600' : 'text-orange-600';
                const bgClass = integration.color === 'blue' ? 'bg-blue-50 border-blue-200 hover:bg-blue-100' : 
                               integration.color === 'purple' ? 'bg-purple-50 border-purple-200 hover:bg-purple-100' : 
                               integration.color === 'red' ? 'bg-red-50 border-red-200 hover:bg-red-100' : 'bg-orange-50 border-orange-200 hover:bg-orange-100';
                
                return (
                  <div key={integration.title} className={`${bgClass} border rounded-lg p-4 transition-colors`}>
                    <div className="flex items-center mb-2">
                      <IconComponent className={`w-5 h-5 ${colorClass} mr-3`} />
                      <h4 className="font-semibold text-gray-900">{integration.title}</h4>
                    </div>
                    <p className="text-gray-700 text-sm">{integration.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Benefits */}
          <div className="feature-card animate-slide-in-right" style={{'--card-accent-color': 'var(--github-green)'}}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Rocket className="w-8 h-8 text-green-500 mr-3" />
              Security Operations Benefits
            </h3>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-gray-700 hover:text-green-600 transition-colors">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlight Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white mb-8 animate-slide-in-up">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
            <Eye className="w-8 h-8 text-green-400 mr-3" />
            Filling the Critical Blind Spot
          </h3>
          <p className="text-lg leading-relaxed text-gray-100 text-center">
            Above is the only platform that provides comprehensive post-authentication visibility, filling the critical gap 
            that no other security layer covers while seamlessly integrating with your existing security investments.
          </p>
        </div>

        {/* Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-in-up">
          {valueProps.map((prop, index) => {
            const IconComponent = prop.icon;
            const colorClass = prop.color === 'red' ? 'bg-red-500' : 
                              prop.color === 'blue' ? 'bg-blue-500' : 'bg-green-500';
            
            return (
              <div key={prop.title} className="feature-card" style={{'--card-accent-color': `var(--github-${prop.color})`}}>
                <div className={`flex items-center justify-center w-14 h-14 ${colorClass} rounded-xl mb-4 mx-auto`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">{prop.title}</h4>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  {prop.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SecurityStackSlide;

