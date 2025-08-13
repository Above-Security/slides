"use client";
import { motion } from "framer-motion";

export default function Slide4({ isPresenterMode, slideNumber }) {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {!isPresenterMode && (
        <div className="absolute top-8 right-8 text-xs text-slate-400">
          {slideNumber}/13
        </div>
      )}

      {/* Dual narrative content - side by side grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {/* Vertical divider */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent -translate-x-1/2" />
        
        {/* Left: Insider Protection */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center mb-10">
            <div className="inline-block">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
                Insider <span className="text-above-peach-600">Protection</span>
              </h1>
              <div className="h-1 w-full bg-gradient-to-r from-above-peach-300 to-above-peach-500 rounded-full mb-4" />
            </div>
            <p className="text-xl text-slate-700 font-medium">
              Coach negligence. Protect the employee.
            </p>
          </div>

          <div className="bg-gradient-to-br from-above-peach-50/20 to-transparent rounded-2xl p-6">
            <div className="space-y-4">
              <ProtectionItem 
                label="Real-time nudges"
                description="Guide users in-session before risky actions complete"
                delay={0.3}
              />
              <ProtectionItem 
                label="Phishing prevention"
                description="Detect LOTS attacks on microsoft.com, Google Drive"
                delay={0.4}
              />
              <ProtectionItem 
                label="Shadow SaaS"
                description="Redirect to approved tools without blocking"
                delay={0.5}
              />
              <ProtectionItem 
                label="OAuth guidance"
                description="Explain permissions at the moment of consent"
                delay={0.6}
              />
              <ProtectionItem 
                label="AI misuse"
                description="Coach on data classification in real-time"
                delay={0.7}
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-6 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-above-peach-100/50 rounded-full">
              <div className="w-2 h-2 bg-above-peach-400 rounded-full" />
              <span className="text-sm font-medium text-above-peach-700">Users educated, productivity maintained</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Insider Threat */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center mb-10">
            <div className="inline-block">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
                Insider <span className="text-above-rose-600">Threat</span>
              </h1>
              <div className="h-1 w-full bg-gradient-to-r from-above-rose-300 to-above-rose-500 rounded-full mb-4" />
            </div>
            <p className="text-xl text-slate-700 font-medium">
              Catch bad actors. Build evidence cases.
            </p>
          </div>

          <div className="bg-gradient-to-br from-above-rose-50/20 to-transparent rounded-2xl p-6">
            <div className="space-y-4">
              <ThreatItem 
                label="HR-ready evidence"
                description="Complete timeline with policy violations mapped"
                delay={0.3}
              />
              <ThreatItem 
                label="Compliance documentation"
                description="Audit-ready logs for HIPAA, ISO, PCI requirements"
                delay={0.4}
              />
              <ThreatItem 
                label="Legal evidence chain"
                description="Immutable session replay with timestamps"
                delay={0.5}
              />
              <ThreatItem 
                label="Intent analysis"
                description="LLM-powered behavioral patterns and anomalies"
                delay={0.6}
              />
              <ThreatItem 
                label="Investigation support"
                description="Cross-app activity correlation and context"
                delay={0.7}
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-6 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-above-rose-100/50 rounded-full">
              <div className="w-2 h-2 bg-above-rose-400 rounded-full" />
              <span className="text-sm font-medium text-above-rose-700">Evidence case built for HR, compliance, legal</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="text-center mt-16"
      >
        <div className="inline-block bg-slate-50 rounded-xl px-8 py-4 border border-slate-200">
          <p className="text-lg font-medium text-slate-700">
            Same LLM intelligence. Two protection modes. Zero blind spots.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

function ProtectionItem({ label, description, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay }}
      className="group hover:bg-white/50 rounded-lg p-3 transition-colors cursor-default"
    >
      <div className="flex items-start gap-3">
        <div className="w-1.5 h-1.5 bg-above-peach-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
        <div>
          <div className="font-semibold text-slate-900 text-sm mb-1">{label}</div>
          <div className="text-slate-600 text-sm">{description}</div>
        </div>
      </div>
    </motion.div>
  );
}

function ThreatItem({ label, description, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay }}
      className="group hover:bg-white/50 rounded-lg p-3 transition-colors cursor-default"
    >
      <div className="flex items-start gap-3">
        <div className="w-1.5 h-1.5 bg-above-rose-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
        <div>
          <div className="font-semibold text-slate-900 text-sm mb-1">{label}</div>
          <div className="text-slate-600 text-sm">{description}</div>
        </div>
      </div>
    </motion.div>
  );
}

