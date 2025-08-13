"use client";
import { motion } from "framer-motion";
import BrandLogo from "../ui/BrandLogo";

export default function Slide1({ isPresenterMode }) {
  return (
    <div className="w-full max-w-5xl mx-auto text-center">
      {/* Logo */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-8"
      >
        <div className="inline-block">
          <BrandLogo size="xlarge" showText={true} showUnderline={true} href={null} />
        </div>
      </motion.div>

      {/* Title */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
      >
        <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
          Insider Protection Platform
        </span>
      </motion.h1>

      {/* Tagline */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="text-xl md:text-2xl lg:text-3xl text-slate-600 mb-12"
      >
        Discover everything. See intent. Stop risk.
      </motion.p>

      {/* Key points */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="flex flex-wrap justify-center gap-4"
      >
        <Badge variant="primary">LLM semantics</Badge>
        <Badge variant="secondary">Browser-native</Badge>
        <Badge variant="accent">Minutes to value</Badge>
      </motion.div>

      {/* Bullets */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        className="mt-16 text-left max-w-3xl mx-auto space-y-4"
      >
        <BulletPoint>
          LLM semantics interpret sessions across all web apps
        </BulletPoint>
        <BulletPoint>
          Browser-native capture; no agents or integrations
        </BulletPoint>
        <BulletPoint>
          Coach in session; document evidence automatically
        </BulletPoint>
        <BulletPoint>
          One platform for prevention and investigation
        </BulletPoint>
      </motion.div>
    </div>
  );
}

function Badge({ children, variant = "primary" }) {
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

function BulletPoint({ children }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-2 h-2 rounded-full bg-above-rose-600 mt-2 flex-shrink-0" />
      <p className="text-slate-600 text-lg leading-relaxed">{children}</p>
    </div>
  );
}