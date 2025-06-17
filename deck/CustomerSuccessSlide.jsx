import React, { useEffect, useRef } from 'react';
import { TrendingUp, Shield, Globe, Users, BellOff, Clock, Search } from 'lucide-react';
import logoSvg from '../../assets/logo.svg';

const CustomerSuccessSlide = () => {
  const chartRef1 = useRef(null);
  const chartRef2 = useRef(null);

  const kpis = [
    { value: '-75%', label: 'MTTD Reduction', description: 'Mean Time to Detect threats dramatically reduced', color: 'red' },
    { value: '-60%', label: 'MTTR Improvement', description: 'Faster Mean Time to Response with automated actions', color: 'orange' },
    { value: '+300%', label: 'Threat Detection', description: 'Increase in risky behaviors caught and prevented', color: 'purple' },
    { value: '-85%', label: 'Insider Incidents', description: 'Reduction in successful insider threat incidents', color: 'blue' }
  ];

  const metrics = [
    { icon: Globe, label: 'SaaS Surface Monitored', value: '95%+' },
    { icon: Users, label: 'Privileged Sessions Observed', value: '100%' },
    { icon: BellOff, label: 'False Positive Reduction', value: '-70%' },
    { icon: Clock, label: 'Deployment Speed', value: '<24h' },
    { icon: Search, label: 'Manual Investigation Reduction', value: '-80%' }
  ];

  useEffect(() => {
    // Simple chart implementation using canvas
    const drawImprovementChart = () => {
      const canvas = chartRef1.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      const width = canvas.width = canvas.offsetWidth * 2; // For retina display
      const height = canvas.height = canvas.offsetHeight * 2;
      ctx.scale(2, 2);
      
      const chartWidth = width / 2 - 80;
      const chartHeight = height / 2 - 80;
      const barWidth = chartWidth / 4 - 20;
      
      const data = [-75, -60, -70, -80];
      const labels = ['MTTD', 'MTTR', 'False Positives', 'Manual Work'];
      const colors = ['#dc3545', '#fd7e14', '#6f42c1', '#0969da'];
      
      ctx.clearRect(0, 0, width / 2, height / 2);
      
      // Draw bars
      data.forEach((value, index) => {
        const x = 40 + index * (barWidth + 20);
        const barHeight = Math.abs(value) * (chartHeight - 40) / 100;
        const y = chartHeight - barHeight + 20;
        
        ctx.fillStyle = colors[index];
        ctx.fillRect(x, y, barWidth, barHeight);
        
        // Draw labels
        ctx.fillStyle = '#24292f';
        ctx.font = '12px Inter';
        ctx.textAlign = 'center';
        ctx.fillText(labels[index], x + barWidth / 2, chartHeight + 35);
        ctx.fillText(`${value}%`, x + barWidth / 2, y - 5);
      });
    };

    const drawCoverageChart = () => {
      const canvas = chartRef2.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      const width = canvas.width = canvas.offsetWidth * 2;
      const height = canvas.height = canvas.offsetHeight * 2;
      ctx.scale(2, 2);
      
      const centerX = width / 4;
      const centerY = height / 4;
      const radius = Math.min(centerX, centerY) - 40;
      
      ctx.clearRect(0, 0, width / 2, height / 2);
      
      // Draw monitored portion (95%)
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, -Math.PI / 2, -Math.PI / 2 + (2 * Math.PI * 0.95));
      ctx.fillStyle = '#00872b';
      ctx.fill();
      
      // Draw unmonitored portion (5%)
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, -Math.PI / 2 + (2 * Math.PI * 0.95), -Math.PI / 2 + (2 * Math.PI));
      ctx.fillStyle = '#d1d9e0';
      ctx.fill();
      
      // Draw center circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 0.6, 0, 2 * Math.PI);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      
      // Draw percentage text
      ctx.fillStyle = '#24292f';
      ctx.font = 'bold 24px Inter';
      ctx.textAlign = 'center';
      ctx.fillText('95%', centerX, centerY + 8);
    };

    const timer = setTimeout(() => {
      drawImprovementChart();
      drawCoverageChart();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="slide-header animate-fade-in">
      <h1 className="slide-title">
        <img src={logoSvg} alt="Above Logo" className="logo-small animate-logo-pulse" />
        Customer Success & KPIs
      </h1>
      <p className="slide-subtitle">Measurable Security Improvements</p>
      
      <div className="mt-16 max-w-6xl mx-auto">
        {/* KPIs and Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left: Key Performance Indicators */}
          <div className="feature-card animate-slide-in-left" style={{'--card-accent-color': 'var(--github-blue)'}}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <TrendingUp className="w-8 h-8 text-blue-500 mr-3" />
              Performance Improvements
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {kpis.map((kpi, index) => {
                const colorClass = kpi.color === 'red' ? 'text-red-500' : 
                                  kpi.color === 'orange' ? 'text-orange-500' : 
                                  kpi.color === 'purple' ? 'text-purple-500' : 'text-blue-500';
                const borderClass = kpi.color === 'red' ? 'border-red-200 hover:border-red-500' : 
                                   kpi.color === 'orange' ? 'border-orange-200 hover:border-orange-500' : 
                                   kpi.color === 'purple' ? 'border-purple-200 hover:border-purple-500' : 'border-blue-200 hover:border-blue-500';
                
                return (
                  <div key={kpi.label} className={`bg-white border ${borderClass} rounded-lg p-4 text-center transition-all hover:transform hover:-translate-y-1 hover:shadow-lg`}>
                    <div className={`text-2xl font-bold ${colorClass} mb-2`}>{kpi.value}</div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">{kpi.label}</div>
                    <p className="text-xs text-gray-600 leading-tight">{kpi.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Coverage Metrics */}
          <div className="feature-card animate-slide-in-right" style={{'--card-accent-color': 'var(--github-green)'}}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Shield className="w-8 h-8 text-green-500 mr-3" />
              Coverage & Operational Metrics
            </h3>
            
            <div className="space-y-4">
              {metrics.map((metric, index) => {
                const IconComponent = metric.icon;
                return (
                  <div key={metric.label} className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:border-green-500 hover:transform hover:translate-x-1 transition-all">
                    <span className="flex items-center text-gray-700 font-medium">
                      <IconComponent className="w-4 h-4 text-green-500 mr-3" />
                      {metric.label}
                    </span>
                    <span className="text-lg font-bold text-green-600">{metric.value}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-in-up">
          {/* Improvement Chart */}
          <div className="feature-card" style={{'--card-accent-color': 'var(--github-green)'}}>
            <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Security Posture Improvement</h4>
            <div className="h-48 relative">
              <canvas ref={chartRef1} className="w-full h-full" />
            </div>
          </div>

          {/* Coverage Chart */}
          <div className="feature-card" style={{'--card-accent-color': 'var(--github-blue)'}}>
            <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Application Coverage</h4>
            <div className="h-48 relative flex items-center justify-center">
              <canvas ref={chartRef2} className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSuccessSlide;

