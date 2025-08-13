"use client";
import { motion } from "framer-motion";

export default function Slide11({ isPresenterMode, slideNumber }) {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {!isPresenterMode && (
        <div className="absolute top-8 right-8 text-xs text-slate-400">
          {slideNumber}/13
        </div>
      )}

      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 text-center"
      >
        Measurable outcomes
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-xl text-slate-600 text-center mb-8"
      >
        Prevention in real-time, evidence when you need it
      </motion.p>

      {/* Key metrics */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-2xl p-8 text-white mb-8"
      >
        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold">87%</div>
            <div className="text-sm opacity-90">Incidents prevented</div>
          </div>
          <div>
            <div className="text-3xl font-bold">94%</div>
            <div className="text-sm opacity-90">Investigation time saved</div>
          </div>
          <div>
            <div className="text-3xl font-bold">$4.2M</div>
            <div className="text-sm opacity-90">Annual risk reduction</div>
          </div>
          <div>
            <div className="text-3xl font-bold">100%</div>
            <div className="text-sm opacity-90">Audit readiness</div>
          </div>
        </div>
      </motion.div>

      {/* Case studies */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl border border-slate-200 p-6"
        >
          <h3 className="font-semibold text-slate-900 mb-3">Prevention</h3>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>• Stopped data exfiltration: $2.3M saved</li>
            <li>• Blocked IP theft: Trade secrets protected</li>
            <li>• Maintained compliance: Zero violations</li>
            <li>• Redirected to safe tools: 1,247 times</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-xl border border-slate-200 p-6"
        >
          <h3 className="font-semibold text-slate-900 mb-3">Evidence</h3>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>• Insider case: 6-month timeline built</li>
            <li>• Audit passed: Complete trail provided</li>
            <li>• Incident response: Hours not weeks</li>
            <li>• Legal ready: Immutable provenance</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}