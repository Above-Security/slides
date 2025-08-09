"use client";
import { motion, useTransform } from "framer-motion";

export default function TimelineBox({ label, highlight, scenes, progress }) {
  const colY = useTransform(progress, [0, 1], [0, -60]);
  return (
    <motion.div style={{ y: colY }} className="relative">
      <div className="sticky top-4 z-10 mb-6 rounded-2xl border border-black/5 bg-white/70 backdrop-blur-md px-5 py-4 shadow-sm">
        <div className="text-[11px] uppercase tracking-[0.2em] text-slate-400">{label}</div>
        <div className="text-xl md:text-2xl font-semibold text-slate-900">{highlight}</div>
      </div>
      <div>
        {scenes.map((s, i) => (
          <s.Component key={i} {...s} index={i} total={scenes.length} />
        ))}
      </div>
    </motion.div>
  );
}
