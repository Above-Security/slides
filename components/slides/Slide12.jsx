"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Slide12({ isPresenterMode, slideNumber }) {
  return (
    <div className="w-full max-w-5xl mx-auto">
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
        Governance, privacy, deployment, and next steps
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-xl text-slate-600 text-center mb-12"
      >
        Enterprise guardrails; minutes to coverage; request access
      </motion.p>

      {/* Governance checklist */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Enterprise Ready</h3>
          <div className="space-y-3">
            <CheckItem>RBAC and least-privilege administration</CheckItem>
            <CheckItem>Data handling and residency options</CheckItem>
            <CheckItem>Immutable provenance for every event</CheckItem>
            <CheckItem>SOC 2 Type II certified</CheckItem>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Deployment</h3>
          <div className="space-y-3">
            <CheckItem>Browser-native, no agents</CheckItem>
            <CheckItem>No integrations required</CheckItem>
            <CheckItem>Minutes to first value</CheckItem>
            <CheckItem>Zero maintenance overhead</CheckItem>
          </div>
        </motion.div>
      </div>

      {/* Badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex justify-center gap-4 mb-12"
      >
        <Badge variant="primary">Provenance</Badge>
        <Badge variant="secondary">Residency</Badge>
        <Badge variant="accent">Privacy-first</Badge>
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-gradient-to-br from-above-rose-50 to-above-lavender-50 rounded-2xl p-8 text-center"
      >
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to get started?</h3>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link 
            href="/"
            className="inline-block px-6 py-3 bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-xl font-medium hover:from-slate-800 hover:to-slate-600 transition-all duration-200"
          >
            Request Access
          </Link>
          <Link 
            href="/platform"
            className="inline-block px-6 py-3 border border-slate-300 bg-white text-slate-700 rounded-xl font-medium hover:bg-slate-50 transition-all duration-200"
          >
            See the Timeline
          </Link>
          <Link 
            href="/platform#nudge"
            className="inline-block px-6 py-3 border border-slate-300 bg-white text-slate-700 rounded-xl font-medium hover:bg-slate-50 transition-all duration-200"
          >
            Try the Nudge
          </Link>
        </div>
      </motion.div>

      {/* Footer note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="text-center mt-8"
      >
        <p className="text-sm text-slate-500">
          © 2025 Above Security. Protecting what matters.
        </p>
      </motion.div>
    </div>
  );
}

function CheckItem({ children }) {
  return (
    <div className="flex items-start gap-2">
      <svg className="w-5 h-5 text-above-rose-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
      <span className="text-slate-600">{children}</span>
    </div>
  );
}

function Badge({ children, variant }) {
  const variants = {
    primary: "bg-above-rose-100 text-above-rose-700 border-above-rose-200",
    secondary: "bg-above-lavender-100 text-above-lavender-700 border-above-lavender-200",
    accent: "bg-above-peach-100 text-above-peach-700 border-above-peach-200",
  };

  return (
    <span className={`inline-flex items-center px-4 py-2 rounded-full border text-sm font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
}