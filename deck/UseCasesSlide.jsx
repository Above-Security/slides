import React from 'react';
import { Shield, UserX, Download, ClipboardCheck, TrendingUp, Target, AlertTriangle } from 'lucide-react';
import logoSvg from '../../assets/logo.svg';

const UseCasesSlide = () => {
  const useCases = [
    {
      icon: Shield,
      title: 'Privileged User Misuse',
      description: 'Detect dormant admin reactivation, unauthorized data exports, and suspicious role changes in real-time.',
      color: 'red',
      scenarios: [
        'Dormant admin accounts suddenly active',
        'Bulk data downloads by privileged users',
        'Unauthorized permission escalations'
      ]
    },
    {
      icon: UserX,
      title: 'Offboarding Gaps',
      description: 'Identify stale sessions, token reuse, and shadow accounts that persist after employee departure.',
      color: 'orange',
      scenarios: [
        'Active sessions post-termination',
        'Persistent API tokens and keys',
        'Untracked personal accounts'
      ]
    },
    {
      icon: Download,
      title: 'SaaS Data Exfiltration',
      description: 'Monitor for insider threats and data theft through SaaS platforms with behavioral analysis.',
      color: 'purple',
      scenarios: [
        'Unusual data access patterns',
        'Large-scale file downloads',
        'Off-hours data access'
      ]
    },
    {
      icon: ClipboardCheck,
      title: 'Compliance Monitoring',
      description: 'Generate comprehensive audit trails and ensure regulatory compliance across all applications.',
      color: 'blue',
      scenarios: [
        'Complete user activity logging',
        'Regulatory audit preparation',
        'Policy violation detection'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Behavioral Drift',
      description: 'Detect lateral movement and unusual behavior patterns within SaaS ecosystems.',
      color: 'green',
      scenarios: [
        'Deviation from normal patterns',
        'Cross-application movement',
        'Compromised account indicators'
      ]
    },
    {
      icon: Shield,
      title: 'Advanced Phishing',
      description: 'Detect OAuth consent abuse, session hijacking, and browser-based social engineering attacks.',
      color: 'red',
      scenarios: [
        'Malicious OAuth applications',
        'Session token hijacking',
        'In-browser social engineering'
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      red: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-900', accent: 'text-red-500', hover: 'hover:bg-red-100' },
      orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-900', accent: 'text-orange-500', hover: 'hover:bg-orange-100' },
      purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-900', accent: 'text-purple-500', hover: 'hover:bg-purple-100' },
      blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-900', accent: 'text-blue-500', hover: 'hover:bg-blue-100' },
      green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-900', accent: 'text-green-500', hover: 'hover:bg-green-100' }
    };
    return colors[color];
  };

  return (
    <div className="slide-header animate-fade-in">
      <h1 className="slide-title">
        <img src={logoSvg} alt="Above Logo" className="logo-small animate-logo-pulse" />
        Core Use Cases
      </h1>
      <p className="slide-subtitle">Critical Security Scenarios Above Addresses</p>
      
      <div className="mt-16 max-w-6xl mx-auto">
        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {useCases.map((useCase, index) => {
            const colors = getColorClasses(useCase.color);
            const IconComponent = useCase.icon;
            
            return (
              <div 
                key={useCase.title}
                className={`feature-card animate-slide-in-${index % 2 === 0 ? 'left' : 'right'}`}
                style={{'--card-accent-color': `var(--github-${useCase.color === 'red' ? 'red' : useCase.color === 'orange' ? 'orange' : useCase.color === 'purple' ? 'purple' : useCase.color === 'blue' ? 'blue' : 'green'})`}}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${useCase.color === 'red' ? 'bg-red-500' : useCase.color === 'orange' ? 'bg-orange-500' : useCase.color === 'purple' ? 'bg-purple-500' : useCase.color === 'blue' ? 'bg-blue-500' : 'bg-green-500'} rounded-lg flex items-center justify-center mr-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{useCase.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {useCase.description}
                </p>
                
                <div className={`${colors.bg} ${colors.border} border rounded-lg p-4`}>
                  <h4 className={`font-semibold ${colors.text} mb-3 flex items-center`}>
                    <AlertTriangle className={`w-4 h-4 ${colors.accent} mr-2`} />
                    Key Scenarios:
                  </h4>
                  <ul className="space-y-2">
                    {useCase.scenarios.map((scenario, idx) => (
                      <li key={idx} className={`flex items-start text-sm ${colors.text}`}>
                        <div className={`w-1 h-1 ${useCase.color === 'red' ? 'bg-red-500' : useCase.color === 'orange' ? 'bg-orange-500' : useCase.color === 'purple' ? 'bg-purple-500' : useCase.color === 'blue' ? 'bg-blue-500' : 'bg-green-500'} rounded-full mt-2 mr-3 flex-shrink-0`} />
                        {scenario}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white animate-slide-in-up">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
            <Target className="w-8 h-8 text-green-400 mr-3" />
            Comprehensive Coverage
          </h3>
          <p className="text-lg leading-relaxed text-gray-100 text-center">
            Above addresses the full spectrum of post-authentication threats that traditional security tools miss, 
            providing organizations with complete visibility and control over user behavior within their application ecosystem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UseCasesSlide;

