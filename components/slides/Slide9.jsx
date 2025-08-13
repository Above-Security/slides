"use client";
import { motion } from "framer-motion";

export default function Slide9({ isPresenterMode, slideNumber }) {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {!isPresenterMode && (
        <div className="absolute top-8 right-8 text-xs text-slate-400">
          {slideNumber}/12
        </div>
      )}

      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 text-center"
      >
        We detect what others miss
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-xl text-slate-600 text-center mb-8"
      >
        Browser-native advantage: see everything, understand intent
      </motion.p>

      {/* Detection comparison */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Traditional blind spots */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-50 rounded-2xl border border-slate-300 p-6"
        >
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Traditional tools can't see</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-slate-400">×</span>
              <span className="text-sm text-slate-700">Browser page content</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-slate-400">×</span>
              <span className="text-sm text-slate-700">AI tool interactions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-slate-400">×</span>
              <span className="text-sm text-slate-700">OAuth permission usage</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-slate-400">×</span>
              <span className="text-sm text-slate-700">User intent signals</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-slate-400">×</span>
              <span className="text-sm text-slate-700">Shadow SaaS usage</span>
            </li>
          </ul>
        </motion.div>

        {/* Above capabilities */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-above-rose-50 to-white rounded-2xl border border-above-rose-200 p-6"
        >
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Above sees everything</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-above-rose-600">✓</span>
              <span className="text-sm text-slate-700">Full DOM visibility</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-above-rose-600">✓</span>
              <span className="text-sm text-slate-700">Prompt & response capture</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-above-rose-600">✓</span>
              <span className="text-sm text-slate-700">Permission usage analysis</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-above-rose-600">✓</span>
              <span className="text-sm text-slate-700">Semantic pattern recognition</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-above-rose-600">✓</span>
              <span className="text-sm text-slate-700">Real-time usage detection</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Real examples */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-8 bg-slate-900 text-white rounded-2xl p-6"
      >
        <h3 className="text-lg font-semibold mb-4">Real detections this week</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <div className="text-above-rose-400 font-semibold mb-1">10,000+ CRM records</div>
            <div className="opacity-90">Mass copy attempt blocked</div>
          </div>
          <div>
            <div className="text-above-lavender-400 font-semibold mb-1">Proprietary algorithm</div>
            <div className="opacity-90">Stopped ChatGPT paste</div>
          </div>
          <div>
            <div className="text-above-peach-400 font-semibold mb-1">Departing employee</div>
            <div className="opacity-90">Unusual access flagged</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}