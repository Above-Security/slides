"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import CapabilityComparison from "./CapabilityComparison";

export default function Slide8({ isPresenterMode, slideNumber }) {
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
        className="text-2xl md:text-3xl font-bold text-slate-900 mb-1 text-center"
      >
        Complete Application Discovery
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-lg text-slate-600 text-center mb-4"
      >
        See everything your employees are using — from approved tools to shadow IT
      </motion.p>

      {/* OAuth greeting image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="rounded-xl overflow-hidden border border-slate-200 shadow-md mb-6"
      >
        <Image
          src="/oauth-greeting.png"
          alt="OAuth Application Discovery"
          width={1600}
          height={1000}
          className="w-full h-auto"
          priority
          quality={90}
        />
      </motion.div>

      {/* Discovery capabilities */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <CapabilityComparison
          leftTitle="What we discover"
          rightTitle="How we protect"
          leftItems={[
            "Real-time discovery of shadow IT and approved applications",
            "AI tool detection including ChatGPT, Claude, and extensions",
            "OAuth risk analysis with semantic permission understanding",
            "Authentication method analysis and risk categorization"
          ]}
          rightItems={[
            "Integration with identity providers and access management",
            "Real-time nudges for unapproved applications",
            "Block sensitive data in AI prompts before submission",
            "Continuous monitoring of permission changes"
          ]}
          leftColor="blue"
          rightColor="blue"
        />
      </motion.div>
    </div>
  );
}