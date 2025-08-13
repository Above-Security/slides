"use client";
import { motion } from "framer-motion";

export default function Slide3({ isPresenterMode, slideNumber }) {
  return (
    <div className="w-full max-w-5xl mx-auto">
      {!isPresenterMode && (
        <div className="absolute top-8 right-8 text-xs text-slate-400">
          {slideNumber}/10
        </div>
      )}

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center"
      >
        Why now: LLM-native security
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-xl text-slate-600 text-center mb-12"
      >
        LLMs read page meaning—no predefined anything
      </motion.p>

      {/* Browser mock with capabilities */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative rounded-2xl border border-slate-200 bg-white shadow-soft-sm overflow-hidden"
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-200">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-white rounded px-3 py-1 text-xs text-slate-500">
              app.company.com/sensitive-data
            </div>
          </div>
        </div>

        {/* Content area with overlays */}
        <div className="relative p-8 min-h-[400px]">
          {/* Background content */}
          <div className="space-y-4 text-slate-300">
            <div className="h-4 bg-slate-100 rounded w-3/4" />
            <div className="h-4 bg-slate-100 rounded w-1/2" />
            <div className="h-4 bg-slate-100 rounded w-2/3" />
          </div>

          {/* Capability labels */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-6">
              <CapabilityLabel delay={0.4} variant="objects">
                Objects
              </CapabilityLabel>
              <CapabilityLabel delay={0.5} variant="scopes">
                Scopes
              </CapabilityLabel>
              <CapabilityLabel delay={0.6} variant="policy">
                Policy
              </CapabilityLabel>
              <CapabilityLabel delay={0.7} variant="intent">
                Intent
              </CapabilityLabel>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Key points - on-brand minimal style */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12 grid grid-cols-2 gap-x-12 gap-y-4"
      >
        <Point color="above-rose-400" delay={0.8}>
          <span className="font-semibold">Zero configuration:</span> Works on day one across all SaaS, internal apps, and AI tools
        </Point>
        <Point color="above-lavender-400" delay={0.9}>
          <span className="font-semibold">Catches what others miss:</span> Phishing on microsoft.com, malicious OAuth app on Jira
        </Point>
        <Point color="above-peach-400" delay={1.0}>
          <span className="font-semibold">Real-time semantic understanding:</span> Knows a 'deal' from a 'contact' without rules
        </Point>
        <Point color="above-blue-400" delay={1.1}>
          <span className="font-semibold">Contextual intervention:</span> Nudges respect workflow, no blocking or alerts fatigue
        </Point>
      </motion.div>
    </div>
  );
}

function CapabilityLabel({ children, delay, variant }) {
  const variants = {
    objects: "bg-above-rose-100 text-above-rose-700 border-above-rose-200",
    scopes: "bg-above-lavender-100 text-above-lavender-700 border-above-lavender-200",
    policy: "bg-above-peach-100 text-above-peach-700 border-above-peach-200",
    intent: "bg-gradient-to-br from-above-rose-100 to-above-lavender-100 text-slate-700 border-slate-300"
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      className={`px-4 py-2 rounded-xl border-2 font-medium text-center ${variants[variant]}`}
    >
      {children}
    </motion.div>
  );
}

function Point({ children, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay }}
      className="flex items-start gap-3"
    >
      <div className={`w-1.5 h-1.5 rounded-full bg-${color} mt-2 flex-shrink-0`} />
      <span className="text-slate-700 text-sm leading-relaxed">{children}</span>
    </motion.div>
  );
}