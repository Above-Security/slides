"use client";
import { motion, useSpring, useTransform } from "framer-motion";

export default function Connector({ progress }) {
  const topPct = useTransform(progress, [0, 1], ["0%", "100%"]);
  const fillScale = useSpring(useTransform(progress, [0, 1], [0, 1]), { stiffness: 140, damping: 22, mass: 0.6 });
  return (
    <div className="relative hidden md:block">
      <div className="sticky top-28 h-[calc(100vh-7rem)] w-12">
        <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 rounded bg-[#FFD8E4]/30 overflow-hidden">
          <motion.div style={{ scaleY: fillScale, transformOrigin: "top" }} className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-[#FFB6C1] via-[#FFDAC1] to-[#D4E9FF]" />
        </div>
        <motion.div style={{ top: topPct }} className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-gradient-to-br from-[#FFB6C1] to-[#FFDAC1] shadow-lg ring-2 ring-white" />
      </div>
    </div>
  );
}
