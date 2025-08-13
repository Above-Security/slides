"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import CapabilityComparison from "./CapabilityComparison";
import ApplicationDiscoveryDemo from "../demos/ApplicationDiscoveryDemo";
import { useState } from "react";

export default function Slide8({ isPresenterMode, slideNumber }) {
  const [showDemo, setShowDemo] = useState(false);
  return (
    <div className="w-full max-w-6xl mx-auto h-full overflow-y-auto py-4 pb-12">
      {!isPresenterMode && (
        <div className="absolute top-8 right-8 text-xs text-slate-400">
          {slideNumber}/10
        </div>
      )}

      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-bold text-slate-900 mb-1 text-center"
      >
        Complete Application Discovery
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-lg text-slate-600 text-center mb-4"
      >
        See everything your employees are using — from approved tools to shadow IT
      </motion.p>

      {/* Toggle demo button - on-brand design */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="flex flex-col items-center gap-2 mb-4"
      >
        <div className="text-xs text-slate-500 font-medium">Toggle Perspective</div>
        <div className="relative inline-flex bg-white rounded-full p-1 shadow-sm border border-slate-200">
          {/* Sliding noisy gradient background for active state */}
          <motion.div
            className="absolute inset-y-1 rounded-full shadow-sm z-10 overflow-hidden"
            initial={false}
            animate={{
              x: showDemo ? "100%" : "0%",
              width: showDemo ? "calc(50% - 4px)" : "calc(50% - 4px)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ left: 4 }}
          >
            {/* Grainy gradient background */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, #D4E9FF 0%, #E8D9FF 25%, #FFE0EC 50%, #FFD4C9 75%, #D4E9FF 100%)',
              }}
            />
            <div 
              className="absolute inset-0 opacity-60"
              style={{
                background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                mixBlendMode: 'overlay',
                filter: 'contrast(170%) brightness(1000%)',
              }}
            />
          </motion.div>
          
          {/* Employee View button */}
          <button
            onClick={() => setShowDemo(false)}
            className={`relative z-20 px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
              !showDemo ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <div className="flex flex-col items-center gap-0.5">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Employee View</span>
              </div>
              <span className={`text-[10px] ${!showDemo ? 'text-slate-700' : 'text-slate-400'}`}>What users see</span>
            </div>
          </button>
          
          {/* Security Dashboard button */}
          <button
            onClick={() => setShowDemo(true)}
            className={`relative z-20 px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
              showDemo ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <div className="flex flex-col items-center gap-0.5">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Security Dashboard</span>
              </div>
              <span className={`text-[10px] ${showDemo ? 'text-slate-700' : 'text-slate-400'}`}>What admins see</span>
            </div>
          </button>
        </div>
      </motion.div>

      {/* Demo or static image with smooth transitions */}
      <div className="relative mb-6">
        <AnimatePresence mode="wait">
          {showDemo ? (
            <motion.div
              key="demo"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Security team perspective label */}
              <div className="flex items-center gap-2 mb-2">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-above-blue-200" />
                <div className="flex items-center gap-2 px-3 py-1 bg-above-blue-50 rounded-full border border-above-blue-200">
                  <svg className="w-3 h-3 text-above-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-medium text-above-blue-700">Security Team Dashboard</span>
                </div>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-above-blue-200" />
              </div>
              <ApplicationDiscoveryDemo />
            </motion.div>
          ) : (
            <motion.div
              key="static"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Employee perspective label */}
              <div className="flex items-center gap-2 mb-2">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200" />
                <div className="flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-full border border-slate-200">
                  <svg className="w-3 h-3 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-medium text-slate-700">Employee Perspective</span>
                </div>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200" />
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                <Image
                  src="/oauth-greeting.png"
                  alt="OAuth Application Discovery - Employee View"
                  width={1600}
                  height={1000}
                  className="w-full h-auto"
                  priority
                  quality={90}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Discovery capabilities */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <CapabilityComparison
          leftTitle="What we discover"
          rightTitle="How we protect"
          leftItems={[
            "Real-time discovery of shadow IT and approved applications",
            "AI tool detection including ChatGPT, Claude, and extensions",
            "OAuth risk analysis with semantic permission understanding",
            "Authentication method analysis and risk categorization"
          ]}
          rightItems={[
            "Integration with identity providers and access management",
            "Real-time nudges for unapproved applications",
            "Block sensitive data in AI prompts before submission",
            "Continuous monitoring of permission changes"
          ]}
          leftColor="blue"
          rightColor="blue"
        />
      </motion.div>
    </div>
  );
}