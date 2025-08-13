"use client";
import { motion } from "framer-motion";

export default function Slide7({ isPresenterMode, slideNumber }) {
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
        Evidence-grade timelines
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-xl text-slate-600 text-center mb-8"
      >
        Every incident reconstructed with full context
      </motion.p>

      {/* Single incident page image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg mb-8"
      >
        <img
          src="/single-incident-page.png"
          alt="Evidence Timeline"
          className="w-full h-auto"
        />
      </motion.div>

      {/* Key capabilities */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid md:grid-cols-3 gap-6"
      >
        <div className="bg-gradient-to-br from-above-rose-50 to-white rounded-xl border border-above-rose-200 p-4">
          <h3 className="font-semibold text-slate-900 mb-2">Behavioral reconstruction</h3>
          <p className="text-sm text-slate-600">Complete user journey from intent to action</p>
        </div>
        <div className="bg-gradient-to-br from-above-lavender-50 to-white rounded-xl border border-above-lavender-200 p-4">
          <h3 className="font-semibold text-slate-900 mb-2">Legal-ready evidence</h3>
          <p className="text-sm text-slate-600">Immutable audit trail with provenance</p>
        </div>
        <div className="bg-gradient-to-br from-above-peach-50 to-white rounded-xl border border-above-peach-200 p-4">
          <h3 className="font-semibold text-slate-900 mb-2">Instant investigation</h3>
          <p className="text-sm text-slate-600">Hours to minutes for complete analysis</p>
        </div>
      </motion.div>
    </div>
  );
}