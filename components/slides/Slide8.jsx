"use client";
import { motion } from "framer-motion";

export default function Slide8({ isPresenterMode, slideNumber }) {
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
        Shadow AI & OAuth discovery
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-xl text-slate-600 text-center mb-8"
      >
        Every app, every permission, every risk
      </motion.p>

      {/* OAuth greeting image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg mb-8"
      >
        <img
          src="/oauth-greeting.png"
          alt="OAuth Application Discovery"
          className="w-full h-auto"
        />
      </motion.div>

      {/* Critical findings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid md:grid-cols-2 gap-6"
      >
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">What we find</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5" />
              <span className="text-sm text-slate-700">287 applications discovered, 142 with OAuth</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5" />
              <span className="text-sm text-slate-700">31 AI tools, 11 unapproved with data access</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5" />
              <span className="text-sm text-slate-700">Critical permissions: full workspace access</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5" />
              <span className="text-sm text-slate-700">1,247 instances of PII in AI prompts</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-above-rose-50 to-white rounded-xl border border-above-rose-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">How we stop it</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-above-rose-500 mt-1.5" />
              <span className="text-sm text-slate-700">Real-time detection at point of use</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-above-rose-500 mt-1.5" />
              <span className="text-sm text-slate-700">Block sensitive data before submission</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-above-rose-500 mt-1.5" />
              <span className="text-sm text-slate-700">Redirect to approved enterprise tools</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-above-rose-500 mt-1.5" />
              <span className="text-sm text-slate-700">Continuous permission monitoring</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}