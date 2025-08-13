"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import UIChrome from "../primitives/UIChrome";
import CapabilityComparison from "./CapabilityComparison";

export default function Slide6({ isPresenterMode, slideNumber }) {
  return (
    <div className="w-full max-w-6xl mx-auto h-full overflow-y-auto py-4 pb-12">
      {!isPresenterMode && (
        <div className="absolute top-8 right-8 text-xs text-slate-400">
          {slideNumber}/13
        </div>
      )}

      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-bold text-slate-900 mb-1 text-center"
      >
        Complete visibility
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-lg text-slate-600 text-center mb-4"
      >
        Every action, every intent, every risk signal
      </motion.p>

      {/* Dashboard image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-4"
      >
        <UIChrome title="abovesec.com/dashboard • Security Console" noPadding>
          <Image
            src="/dashboard.png"
            alt="Above Security Dashboard"
            width={1600}
            height={1000}
            className="w-full h-auto"
            priority
            quality={90}
          />
        </UIChrome>
      </motion.div>

      {/* Visibility capabilities - matching structure */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <CapabilityComparison
          leftTitle="What we see"
          rightTitle="How we analyze"
          leftItems={[
            "100% in-app coverage across all web apps",
            "Every click, keystroke, and navigation",
            "Cross-application activity patterns",
            "Real-time intent analysis with LLMs"
          ]}
          rightItems={[
            "Semantic understanding of user actions",
            "Pattern recognition across sessions",
            "Risk scoring with behavioral context",
            "Zero blind spots in user activity"
          ]}
          leftColor="rose"
          rightColor="rose"
        />
      </motion.div>
    </div>
  );
}