"use client";
import { motion } from "framer-motion";

export default function SlidePlaceholder({ title, subtitle, slideNumber, isPresenterMode }) {
  return (
    <div className="w-full max-w-5xl mx-auto text-center">
      {!isPresenterMode && slideNumber && (
        <div className="absolute top-8 right-8 text-xs text-slate-400">
          {slideNumber}/13
        </div>
      )}

      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
      >
        {title}
      </motion.h1>
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-slate-600"
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 p-12 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-soft-sm"
      >
        <p className="text-slate-500">Content coming soon...</p>
      </motion.div>
    </div>
  );
}