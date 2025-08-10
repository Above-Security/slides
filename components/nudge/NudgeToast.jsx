"use client";
import { motion } from "framer-motion";

export default function NudgeToast({ title = "Greetings from Above", subtitle = "Risk detected", body, primary = "Justify", secondary = "Review Evidence" }) {
  return (
    <motion.div
      initial={{ x: 24, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className="relative"
    >
      <motion.div
        animate={{ x: [0, 4, 0], rotate: [0, -0.6, 0] }}
        transition={{ repeat: Infinity, repeatDelay: 3.2, duration: 0.7, ease: "easeInOut" }}
        className="rounded-[24px] nudge-glass p-6 text-[var(--text-primary)] text-sm nudge-grain"
      >
        <div className="text-base font-semibold text-[var(--text-primary)] mb-1.5">{title}</div>
        {subtitle && <div className="text-sm font-semibold text-[var(--text-secondary)] mb-3">{subtitle}</div>}
        <div className="text-sm leading-relaxed text-[var(--text-body)] mb-4">{body}</div>
        <div className="mt-3 flex flex-wrap gap-2">
          <button className="rounded-[var(--radius-button)] bg-[#0f0f0f] text-white px-4 py-2.5 text-xs font-medium hover:bg-[#1a1a1a] transition-all shadow-[var(--shadow-button)]">{primary}</button>
          <button className="rounded-[var(--radius-button)] border border-[rgba(0,0,0,0.1)] bg-[rgba(255,255,255,0.9)] px-4 py-2.5 text-xs font-medium text-[var(--text-secondary)] hover:bg-white transition-all">{secondary}</button>
        </div>
      </motion.div>
    </motion.div>
  );
}
