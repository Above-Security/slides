"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimatedFlowArrow({ dataFlow }) {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        {/* Animated Flow Particles */}
        <AnimatePresence>
          {dataFlow && (
            <>
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="absolute left-1/2 -translate-x-1/2"
                  style={{ top: `${index * 20}px` }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: [0, 1, 1, 0],
                    x: [-20, 0, 20, 40]
                  }}
                  transition={{ 
                    duration: 2,
                    delay: index * 0.5,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                >
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${
                    index === 0 ? 'from-above-rose-400 to-above-lavender-400' :
                    index === 1 ? 'from-above-lavender-400 to-above-peach-400' :
                    'from-above-peach-400 to-green-400'
                  }`} />
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>

        {/* Static Arrow */}
        <svg className="w-16 h-16" viewBox="0 0 100 50">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#94a3b8" />
            </marker>
          </defs>
          <line x1="10" y1="25" x2="85" y2="25" stroke="#cbd5e1" strokeWidth="2" markerEnd="url(#arrowhead)" />
        </svg>
      </div>
    </div>
  );
}