'use client';

import { useState, useEffect } from 'react';
import posthog from '../../lib/posthog';

export default function EmailGate({ children, title = "Access Above Insider Protection Slides", subtitle = "Get exclusive access to our latest security insights and protection strategies." }) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Check if user has already provided email
  useEffect(() => {
    const savedEmail = localStorage.getItem('above_email_gate_email');
    const hasAccess = localStorage.getItem('above_email_gate_access');
    
    if (savedEmail && hasAccess) {
      setEmail(savedEmail);
      setIsSubmitted(true);
    }
  }, []);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    
    try {
      // Save email to localStorage
      localStorage.setItem('above_email_gate_email', email);
      localStorage.setItem('above_email_gate_access', 'true');
      localStorage.setItem('above_email_gate_timestamp', new Date().toISOString());
      
      // Identify user with PostHog
      if (typeof window !== 'undefined' && posthog) {
        posthog.identify(email, {
          email: email,
          email_gate_access: true,
          email_gate_page: 'Runtime Insider Protection Presentation',
          access_timestamp: new Date().toISOString()
        });
        
        // Track the email gate completion event
        posthog.capture('email_gate_completed', {
          email: email,
          page: 'Runtime Insider Protection Presentation',
          timestamp: new Date().toISOString()
        });
      }
      
      // Simulate processing time
      setTimeout(() => {
        setIsSubmitted(true);
        setIsLoading(false);
      }, 1500);
      
    } catch (error) {
      console.error('Error saving email or tracking:', error);
      setError('Something went wrong. Please try again.');
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return children;
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 relative overflow-hidden bg-white">
      {/* Hidden text content behind blur */}
      <div className="absolute inset-0 p-6 text-slate-600 leading-relaxed overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-slate-800">Above Security Runtime Insider Protection Presentation</h1>
          <div className="text-lg space-y-4 columns-2 gap-8">
            <p>Get exclusive access to our comprehensive Runtime Insider Protection presentation. Enter your business email to view detailed insights on modern threat detection, incident response, and Above Security's innovative approach to runtime protection.</p>
            <p>This presentation covers advanced runtime monitoring techniques that detect insider threats in real-time, including behavioral anomaly detection, privilege escalation monitoring, and data exfiltration prevention at the application layer.</p>
            <h2 className="text-3xl font-semibold mb-3 text-slate-700 break-before-column">Modern Threat Detection</h2>
            <p>Learn how our runtime protection platform identifies sophisticated insider attacks that traditional security tools miss. Our approach monitors user behavior patterns, application interactions, and data access patterns to detect threats before damage occurs.</p>
            <p>Comprehensive coverage of LOTS phishing detection, OAuth abuse prevention, shadow IT discovery, and AI misuse monitoring. See real-world examples of how runtime protection prevented major security incidents across various industries.</p>
            <h2 className="text-3xl font-semibold mb-3 text-slate-700">Incident Response Framework</h2>
            <p>Detailed walkthrough of our incident response methodology, including automated threat containment, evidence collection, and forensic analysis capabilities. Learn how to reduce incident response time from hours to minutes.</p>
            <p>Step-by-step guidance on investigating insider threats, documenting evidence for compliance requirements, and implementing corrective actions to prevent similar incidents in the future.</p>
            <h2 className="text-3xl font-semibold mb-3 text-slate-700">Runtime Protection Innovation</h2>
            <p>Discover Above Security's breakthrough approach to runtime insider protection, including our patent-pending behavioral analysis engine and real-time risk scoring algorithms that adapt to your organization's unique patterns.</p>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-slate-100 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Runtime Monitoring</h3>
              <p className="text-sm text-slate-600">Real-time detection and analysis of insider threat indicators</p>
            </div>
            <div className="p-4 bg-slate-100 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Incident Response</h3>
              <p className="text-sm text-slate-600">Automated containment and evidence collection workflows</p>
            </div>
            <div className="p-4 bg-slate-100 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Behavioral Analytics</h3>
              <p className="text-sm text-slate-600">AI-powered user behavior analysis and risk scoring</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Heavy blur overlay */}
      <div className="absolute inset-0 backdrop-blur-xl bg-white/70" />
      
      {/* Grainy noise texture */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='15' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`
        }}
      />
      

      <div className="relative w-full max-w-md z-10">
        {/* Clean glass card */}
        <div className="backdrop-blur-xl bg-white/90 rounded-2xl shadow-2xl border border-white/70 p-8 relative overflow-hidden">
          {/* Animated top border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-above-rose-400 via-above-peach-400 to-above-blue-400 rounded-t-2xl">
            <div 
              className="absolute inset-0 bg-gradient-to-r from-above-rose-500 via-above-peach-500 to-above-blue-500 opacity-0 animate-pulse-soft"
              style={{ animationDelay: '0.5s' }}
            />
          </div>
          
          <div className="relative z-10">

            {/* Content */}
            <div className="text-center mb-8">
              {/* Logo with brand name */}
              <div className="flex flex-col items-center justify-center mb-6 group cursor-pointer">
                <img 
                  src="/logo.png" 
                  alt="Above Security" 
                  className="h-16 w-auto transition-transform duration-300 group-hover:scale-110 mb-2" 
                />
                <span className="text-xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors duration-300">
                  Above
                </span>
              </div>
              
              {/* Header */}
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                Runtime Insider Protection
              </h1>
              <h2 className="text-xl font-semibold text-slate-700 mb-4">
                Exclusive Presentation Access
              </h2>
              
              {/* Description */}
              <p className="text-slate-600 leading-relaxed text-sm max-w-sm mx-auto">
                Get exclusive access to our comprehensive presentation with detailed insights on modern threat detection, incident response, and Above Security's innovative runtime protection approach.
              </p>
            </div>
            

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/70 border border-above-rose-200/50 focus:outline-none focus:ring-2 focus:ring-above-rose-300 focus:border-transparent transition-all placeholder-slate-400"
                  placeholder="your@email.com"
                  required
                />
                {error && (
                  <p className="mt-2 text-sm text-red-600">{error}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full text-white font-semibold py-3 px-6 rounded-xl focus:outline-none focus:ring-2 focus:ring-above-rose-300 focus:ring-offset-2 transition-all duration-200 shadow-soft disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center relative overflow-hidden group"
              >
                {/* Grainy gradient background */}
                <div 
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: 'linear-gradient(90deg, #FF6B8A 0%, #FF9F7A 50%, #FFB366 100%)',
                  }}
                />
                <div 
                  className="absolute inset-0 rounded-xl opacity-50 transition-opacity duration-200 group-hover:opacity-60"
                  style={{
                    background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    mixBlendMode: 'overlay',
                    filter: 'contrast(170%) brightness(1000%)',
                  }}
                />
                {/* Loading overlay */}
                {isLoading && (
                  <div className="absolute inset-0 bg-black/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <div className="flex items-center space-x-3 text-white">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span className="text-sm font-medium">Unlocking Access...</span>
                    </div>
                  </div>
                )}
                
                <span className="relative z-10">
                  Access Protected Content
                </span>
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}