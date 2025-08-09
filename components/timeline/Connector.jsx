"use client";
import { motion, useSpring, useTransform } from "framer-motion";

export default function Connector({ progress }) {
  const topPct = useTransform(progress, [0, 1], ["0%", "100%"]);
  const fillScale = useSpring(useTransform(progress, [0, 1], [0, 1]), { stiffness: 140, damping: 22, mass: 0.6 });
  return (
    <div className="relative hidden md:block">
      <div className="sticky top-28 h-[calc(100vh-7rem)] w-12">
        <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 rounded bg-slate-200 overflow-hidden">
          <motion.div style={{ scaleY: fillScale, transformOrigin: "top" }} className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-violet-400 to-cyan-400" />
        </div>
        <motion.div style={{ top: topPct }} className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full bg-white shadow-[0_0_0_6px_rgba(99,102,241,0.15)] ring-2 ring-violet-400" />
      </div>
    </div>
  );
}
