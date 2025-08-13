"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Slide6({ isPresenterMode, slideNumber }) {
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
        Complete visibility
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-xl text-slate-600 text-center mb-8"
      >
        Every action, every intent, every risk signal
      </motion.p>

      {/* Dashboard image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg mb-8"
      >
        <img
          src="/dashboard.png"
          alt="Above Security Dashboard"
          className="w-full h-auto"
        />
      </motion.div>

      {/* Key metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-3 gap-6"
      >
        <div className="text-center">
          <div className="text-3xl font-bold text-above-rose-700">100%</div>
          <div className="text-sm text-slate-600">Browser coverage</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-above-lavender-700">Real-time</div>
          <div className="text-sm text-slate-600">Intent analysis</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-above-peach-700">Zero blind spots</div>
          <div className="text-sm text-slate-600">Complete context</div>
        </div>
      </motion.div>
    </div>
  );
}