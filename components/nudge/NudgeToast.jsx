"use client";
import { motion } from "framer-motion";

export default function NudgeToast({ title = "Greetings from Above", body, primary = "Acknowledge", secondary = "View policy" }) {
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
        className="rounded-xl border border-cyan-200 bg-gradient-to-br from-cyan-50 to-violet-50 p-4 text-slate-800 text-sm shadow-sm"
      >
        <div className="text-[12px] font-semibold tracking-wide text-slate-600">{title}</div>
        <div className="mt-1 leading-relaxed">{body}</div>
        <div className="mt-3 flex flex-wrap gap-2">
          <button className="rounded-lg bg-slate-900 text-white px-3 py-1.5 text-xs font-medium">{primary}</button>
          <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-800">{secondary}</button>
        </div>
      </motion.div>
    </motion.div>
  );
}
