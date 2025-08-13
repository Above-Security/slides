"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import UIChrome from "../primitives/UIChrome";

export default function Slide9({ isPresenterMode, slideNumber }) {
  return (
    <div className="w-full max-w-6xl mx-auto h-full overflow-y-auto py-4 pb-12">
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
        In-app visibility: see everything, understand intent
      </motion.p>

      {/* Detection visualization image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8"
      >
        <UIChrome title="abovesec.com/dashboard • Detection Console" noPadding>
          <Image
            src="/dashboard.png"
            alt="Above Detection Capabilities"
            width={1600}
            height={900}
            className="w-full h-auto"
            priority
            quality={90}
          />
        </UIChrome>
      </motion.div>

      {/* Detection comparison - matching structure */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid md:grid-cols-2 gap-6"
      >
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Traditional tools miss</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5" />
              <span className="text-sm text-slate-700">In-app content and interactions</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5" />
              <span className="text-sm text-slate-700">AI tool prompts and responses</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5" />
              <span className="text-sm text-slate-700">OAuth permission actual usage</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5" />
              <span className="text-sm text-slate-700">User intent and behavioral context</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-above-rose-50 to-white rounded-xl border border-above-rose-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Above detects everything</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-above-rose-500 mt-1.5" />
              <span className="text-sm text-slate-700">Full DOM visibility and page analysis</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-above-rose-500 mt-1.5" />
              <span className="text-sm text-slate-700">Complete AI interaction capture</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-above-rose-500 mt-1.5" />
              <span className="text-sm text-slate-700">Real-time permission usage tracking</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-above-rose-500 mt-1.5" />
              <span className="text-sm text-slate-700">LLM-powered intent recognition</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}