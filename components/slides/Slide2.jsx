"use client";
import { motion } from "framer-motion";

export default function Slide2({ isPresenterMode, slideNumber }) {
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
        className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center"
      >
        Your security stack is blind to intent
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-xl text-slate-600 text-center mb-12"
      >
        Event tools see clicks. We see purpose.
      </motion.p>

      {/* Visual comparison */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* What you have today */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-50 rounded-2xl border-2 border-slate-200 p-6"
        >
          <h3 className="font-semibold text-slate-900 mb-4">Today's reality</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-0.5">×</span>
              <div>
                <div className="font-medium text-slate-700">Alerts after damage</div>
                <div className="text-sm text-slate-500">Context missing, manual investigation</div>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-0.5">×</span>
              <div>
                <div className="font-medium text-slate-700">Shadow AI invisible</div>
                <div className="text-sm text-slate-500">ChatGPT, Claude, Bard - all untracked</div>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-0.5">×</span>
              <div>
                <div className="font-medium text-slate-700">OAuth sprawl</div>
                <div className="text-sm text-slate-500">287 apps, permissions unknown</div>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-0.5">×</span>
              <div>
                <div className="font-medium text-slate-700">Block or allow</div>
                <div className="text-sm text-slate-500">No middle ground, users find workarounds</div>
              </div>
            </li>
          </ul>
        </motion.div>

        {/* What Above delivers */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-above-rose-50 to-white rounded-2xl border-2 border-above-rose-200 p-6"
        >
          <h3 className="font-semibold text-slate-900 mb-4">With Above</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-above-rose-600 mt-0.5">✓</span>
              <div>
                <div className="font-medium text-slate-900">Prevent in real-time</div>
                <div className="text-sm text-slate-600">Intent understood, guidance delivered</div>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-above-rose-600 mt-0.5">✓</span>
              <div>
                <div className="font-medium text-slate-900">AI usage visible</div>
                <div className="text-sm text-slate-600">Every prompt, every paste, every risk</div>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-above-rose-600 mt-0.5">✓</span>
              <div>
                <div className="font-medium text-slate-900">Complete discovery</div>
                <div className="text-sm text-slate-600">All apps, permissions, usage patterns</div>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-above-rose-600 mt-0.5">✓</span>
              <div>
                <div className="font-medium text-slate-900">Guide to safety</div>
                <div className="text-sm text-slate-600">Nudges, not blocks - users stay productive</div>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom stat */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-12 text-center bg-slate-900 text-white rounded-xl p-4"
      >
        <p className="text-lg font-semibold">
          87% of insider incidents are invisible to your current stack
        </p>
      </motion.div>
    </div>
  );
}