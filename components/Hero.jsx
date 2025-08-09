"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BRAND } from "../lib/constants";

export default function Hero() {
  const prefersReduced = useReducedMotion();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yTitle = useTransform(scrollYProgress, [0, 1], [0, prefersReduced ? 0 : -40]);
  const ySub = useTransform(scrollYProgress, [0, 1], [0, prefersReduced ? 0 : -24]);
  const blur = useTransform(scrollYProgress, [0, 1], [0, prefersReduced ? 0 : 6]);
  const ringOpacity = useTransform(scrollYProgress, [0, 1], [0.7, 0.2]);

  const orbAnim = prefersReduced
    ? { opacity: 0.4 }
    : { opacity: [0.35, 0.55, 0.35], scale: [1, 1.06, 1], rotate: [0, 12, 0], transition: { duration: 8, repeat: Infinity, ease: "easeInOut" } };

  const tap = { scale: 0.98 };
  const hoverPrimary = prefersReduced ? {} : { y: -2, boxShadow: "0 12px 30px rgba(2,6,23,.18)" };
  const hoverSecondary = prefersReduced ? {} : { y: -2 };

  return (
    <header ref={heroRef} className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-20 md:pt-24 md:pb-24">
        <motion.div style={{ y: yTitle }} className="flex items-center gap-3">
          <div className="relative">
            <div className="text-6xl md:text-7xl font-black tracking-tight text-slate-900">{BRAND}</div>
            <motion.span aria-hidden className="absolute left-0 -bottom-2 block h-[2px] w-24 rounded bg-gradient-to-r from-violet-500 to-cyan-400" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }} />
          </div>
        </motion.div>

        <motion.h1 style={{ y: yTitle }} className="mt-5 text-3xl md:text-5xl font-semibold leading-[1.05] text-slate-900">
          Insider Protection.
        </motion.h1>
        <motion.p style={{ y: ySub }} className="mt-3 max-w-3xl text-slate-600 md:text-lg">
          Above turns raw activity into <span className="font-semibold text-slate-900">intent</span>—in real time—so you can
          <span className="font-semibold text-slate-900"> guide good people</span> before mistakes, <span className="font-semibold text-slate-900">spot bad actors</span> before data walks,
          and hand Legal/HR an <span className="font-semibold text-slate-900">evidence-grade timeline</span> without stitching logs.
        </motion.p>
        <motion.p style={{ y: ySub }} className="mt-3 max-w-3xl text-slate-600 md:text-[15px]">
          Works across SaaS, internal, and custom apps. <span className="font-medium text-slate-900">No agents. No integrations. No waiting.</span>
        </motion.p>

        <motion.div style={{ y: ySub }} className="mt-5 flex flex-wrap gap-2">
          {["After login • In session","LLM-based semantic analysis","Behavior detection & nudges","Evidence-ready timelines"].map((t, i) => (
            <motion.span key={i} initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.8 }} transition={{ delay: 0.05 * i, duration: 0.4 }} className="rounded-full border border-slate-200 bg-white/80 backdrop-blur px-3 py-1 text-xs text-slate-700 shadow-sm">
              {t}
            </motion.span>
          ))}
        </motion.div>

        <div className="mt-7 flex flex-wrap gap-3">
          <motion.a href="#timeline" whileHover={hoverPrimary} whileTap={tap} className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow">
            See the Timeline
          </motion.a>
          <motion.a href="#nudge" whileHover={hoverSecondary} whileTap={tap} className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-900">
            Try the Nudge
          </motion.a>
          <motion.a href="#access" whileHover={hoverSecondary} whileTap={tap} className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-900">
            Request Access
          </motion.a>
        </div>
      </div>

      <motion.div aria-hidden style={{ filter: blur, opacity: ringOpacity }} className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(2,6,23,0.06),transparent)]" />
        <motion.div className="absolute left-1/2 top-[10%] h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-400/40 via-cyan-400/30 to-transparent blur-3xl" animate={orbAnim} />
        <motion.div animate={prefersReduced ? {} : { scale: [1, 1.03, 1], opacity: [0.35, 0.55, 0.35] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full ring-1 ring-inset ring-slate-200" />
      </motion.div>
    </header>
  );
}
