"use client";
import { motion } from "framer-motion";

export default function Slide9({ isPresenterMode, slideNumber }) {
  const features = [
    { text: "Excessive personal use during work hours", category: "productivity" },
    { text: "Downloading unauthorized or risky software", category: "security" },
    { text: "Authorizing unsanctioned third-party applications", category: "security" },
    { text: "Sharing floating or shared credentials", category: "access" },
    { text: "Advanced phishing on trusted services (LOTS)", category: "threat" },
    { text: "OAuth misuse through over-permissioned consents", category: "access" },
    { text: "Cross-role access anomalies", category: "access" },
    { text: "Operating without MFA on sensitive systems", category: "security" },
    { text: "Inappropriate or high-risk web browsing", category: "productivity" },
    { text: "Shadow AI tools circumventing workflows", category: "threat" },
    { text: "Data staging or hoarding pre-departure", category: "threat" },
    { text: "Circumventing monitoring and logging controls", category: "security" }
  ];

  const getCategoryStyles = (category) => {
    switch(category) {
      case 'productivity': 
        return {
          gradient: 'from-above-peach-400 to-above-peach-500',
          bg: 'bg-above-peach-50',
          border: 'border-above-peach-200',
          icon: '⏱'
        };
      case 'security': 
        return {
          gradient: 'from-above-blue-400 to-above-blue-500',
          bg: 'bg-above-blue-50',
          border: 'border-above-blue-200',
          icon: '🛡'
        };
      case 'access': 
        return {
          gradient: 'from-above-lavender-400 to-above-lavender-500',
          bg: 'bg-above-lavender-50',
          border: 'border-above-lavender-200',
          icon: '🔐'
        };
      case 'threat': 
        return {
          gradient: 'from-above-rose-400 to-above-rose-500',
          bg: 'bg-above-rose-50',
          border: 'border-above-rose-200',
          icon: '⚠️'
        };
      default: 
        return {
          gradient: 'from-slate-400 to-slate-500',
          bg: 'bg-slate-50',
          border: 'border-slate-200',
          icon: '•'
        };
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto h-full overflow-y-auto py-4 pb-12">
      {!isPresenterMode && (
        <div className="absolute top-8 right-8 text-xs text-slate-400">
          {slideNumber}/10
        </div>
      )}

      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 text-center"
      >
        What our technology makes possible
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-lg text-slate-600 text-center mb-8"
      >
        In-app visibility + LLM semantics = Endless detection capabilities
      </motion.p>

      {/* Features grid with noisy gradient background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative rounded-2xl p-8 overflow-hidden"
      >
        {/* Grainy gradient background */}
        <div 
          className="absolute inset-0 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, #D4E9FF 0%, #E8D9FF 25%, #FFE0EC 50%, #FFD4C9 75%, #D4E9FF 100%)',
          }}
        />
        <div 
          className="absolute inset-0 rounded-2xl opacity-60"
          style={{
            background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            mixBlendMode: 'overlay',
            filter: 'contrast(170%) brightness(1000%)',
          }}
        />

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-4 relative z-10 auto-rows-fr">
          {features.map((feature, index) => {
            const styles = getCategoryStyles(feature.category);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.03 }}
                className="group relative flex"
              >
                {/* Card background with gradient border effect */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-b ${styles.gradient} opacity-0 group-hover:opacity-100 transition-opacity blur-xl`} />
                
                {/* Main card */}
                <div className={`relative bg-white rounded-xl border ${styles.border} p-4 shadow-sm hover:shadow-lg transition-all hover:-translate-y-0.5 w-full flex flex-col`}>
                  {/* Category indicator */}
                  <div className={`absolute -top-2 -right-2 w-8 h-8 ${styles.bg} rounded-full border ${styles.border} flex items-center justify-center shadow-sm`}>
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${styles.gradient}`} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex items-start gap-3 flex-1">
                    <div className={`w-8 h-8 rounded-lg ${styles.bg} flex items-center justify-center flex-shrink-0`}>
                      <div className={`w-4 h-4 rounded bg-gradient-to-br ${styles.gradient}`} />
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed font-medium flex-1">
                      {feature.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 text-center relative z-10"
        >
          <div className="inline-flex flex-col items-center gap-2">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-full shadow-lg">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-semibold">Powered by in-app visibility & LLM understanding</span>
            </div>
            <span className="text-xs text-slate-500 mt-1">New detection scenarios added continuously as threats evolve</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}