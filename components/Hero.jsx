"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import BrandLogo from "./ui/BrandLogo";

export default function Hero() {
  const prefersReduced = useReducedMotion();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yTitle = useTransform(scrollYProgress, [0, 1], [0, prefersReduced ? 0 : -40]);
  const ySub = useTransform(scrollYProgress, [0, 1], [0, prefersReduced ? 0 : -24]);
  const blur = useTransform(scrollYProgress, [0, 1], [0, prefersReduced ? 0 : 6]);
  const ringOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 0.1]);

  const orbAnim = prefersReduced
    ? { opacity: 0.2 }
    : { opacity: [0.2, 0.3, 0.2], scale: [1, 1.03, 1], rotate: [0, 8, 0], transition: { duration: 10, repeat: Infinity, ease: "easeInOut" } };

  const tap = { scale: 0.98 };
  const hoverPrimary = prefersReduced ? {} : { y: -2, boxShadow: "0 12px 30px rgba(2,6,23,.18)" };
  const hoverSecondary = prefersReduced ? {} : { y: -2 };

  return (
    <header ref={heroRef} className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-20 md:pt-24 md:pb-24">
        <motion.div style={{ y: yTitle }} className="flex items-center gap-3">
          <BrandLogo size="xlarge" showText={true} showUnderline={true} href={null} />
        </motion.div>

        <motion.h1 style={{ y: yTitle }} className="mt-5 text-2xl md:text-4xl font-semibold leading-[1.1] text-[var(--text-primary)]">
          Insider Protection.
        </motion.h1>
        <motion.p style={{ y: ySub }} className="mt-3 max-w-3xl text-[var(--text-body)] md:text-lg">
          Above turns raw activity into <span className="font-semibold text-[var(--text-primary)]">intent</span>—in real time—so you can
          <span className="font-semibold text-[var(--text-primary)]"> guide good people</span> before mistakes, <span className="font-semibold text-[var(--text-primary)]">spot bad actors</span> before data walks,
          and hand Legal/HR an <span className="font-semibold text-[var(--text-primary)]">evidence-grade timeline</span> without stitching logs.
        </motion.p>
        <motion.p style={{ y: ySub }} className="mt-3 max-w-3xl text-[var(--text-body)] md:text-[15px]">
          Works across SaaS, internal, and custom apps. <span className="font-medium text-[var(--text-primary)]">No agents. No integrations. No waiting.</span>
        </motion.p>

        <motion.div style={{ y: ySub }} className="mt-5 flex flex-wrap gap-2">
          {["After login • In session","LLM-based semantic analysis","Behavior detection & nudges","Evidence-ready timelines"].map((t, i) => (
            <motion.span key={i} initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.8 }} transition={{ delay: 0.05 * i, duration: 0.4 }} className="rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-[var(--glass-blur)] px-3 py-1 text-xs text-[var(--text-body)]">
              {t}
            </motion.span>
          ))}
        </motion.div>

        <div className="mt-7 flex flex-wrap gap-3">
          <motion.a href="#timeline" whileHover={hoverPrimary} whileTap={tap} className="rounded-[var(--radius-button)] bg-[#0f0f0f] px-5 py-2.5 text-sm font-medium text-white shadow-[var(--shadow-button)] hover:bg-[#1a1a1a] transition-all">
            See the Timeline
          </motion.a>
          <motion.a href="#nudge" whileHover={hoverSecondary} whileTap={tap} className="rounded-[var(--radius-button)] border border-[rgba(0,0,0,0.1)] bg-[rgba(255,255,255,0.9)] px-5 py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:bg-white transition-all">
            Try the Nudge
          </motion.a>
          <motion.a href="#access" whileHover={hoverSecondary} whileTap={tap} className="rounded-[var(--radius-button)] border border-[rgba(0,0,0,0.1)] bg-[rgba(255,255,255,0.9)] px-5 py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:bg-white transition-all">
            Request Access
          </motion.a>
        </div>
      </div>

    </header>
  );
}
