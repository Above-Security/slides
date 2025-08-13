"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import UIChrome from "../primitives/UIChrome";
import CapabilityComparison from "./CapabilityComparison";

export default function Slide7({ isPresenterMode, slideNumber }) {
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
        Evidence-grade timelines
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-lg text-slate-600 text-center mb-4"
      >
        Every incident reconstructed with full context
      </motion.p>

      {/* Single incident page image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-4"
      >
        <UIChrome title="abovesec.com/incidents/2024-11-15-0823 • Incident Timeline" noPadding>
          <Image
            src="/single-incident-page.png"
            alt="Evidence Timeline"
            width={1600}
            height={1000}
            className="w-full h-auto"
            priority
            quality={90}
          />
        </UIChrome>
      </motion.div>

      {/* Timeline capabilities - matching structure */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <CapabilityComparison
          leftTitle="What we capture"
          rightTitle="How we deliver"
          leftItems={[
            "Complete user journey from intent to action",
            "Every click, keystroke, and navigation path",
            "Cross-application activity correlation",
            "Behavioral patterns and anomalies"
          ]}
          rightItems={[
            "Immutable audit trail with provenance",
            "Legal-ready evidence packages",
            "Hours to minutes for complete analysis",
            "Session replay with full context"
          ]}
          leftColor="lavender"
          rightColor="lavender"
        />
      </motion.div>
    </div>
  );
}