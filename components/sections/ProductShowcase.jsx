"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ProductShowcase({ src, alt }) {
  const [isMobileEnlarged, setIsMobileEnlarged] = useState(false);

  return (
    <div className="w-full px-6 pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl pt-12 overflow-hidden relative">
          {/* Grainy gradient background */}
          <div 
            className="absolute inset-0 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, #D4E9FF 0%, #E8D9FF 25%, #FFE0EC 50%, #FFD4C9 75%, #D4E9FF 100%)',
            }}
          />
          <div 
            className="absolute inset-0 rounded-2xl opacity-60"
            style={{
              background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              mixBlendMode: 'overlay',
              filter: 'contrast(170%) brightness(1000%)',
            }}
          />
          
          <div className="bg-white/80 mx-8 px-4 pt-4 rounded-t-xl relative z-10">
            <div 
              className="relative rounded-t-lg border-white-200 overflow-hidden cursor-pointer md:cursor-default"
              onClick={() => setIsMobileEnlarged(true)}
            >
              <Image
                src={src}
                alt={alt}
                width={1920}
                height={1080}
                className="w-full h-auto block"
                priority
              />
              {/* Subtle fade overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white/100 via-white/70 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile click-to-enlarge modal */}
      <AnimatePresence>
        {isMobileEnlarged && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center md:hidden bg-black/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileEnlarged(false)}
          >
            <motion.div
              className="relative max-w-full max-h-full overflow-auto bg-white rounded-xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsMobileEnlarged(false)}
                className="absolute top-2 right-2 z-10 bg-white/90 rounded-full p-2 shadow-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <Image
                src={src}
                alt={`${alt} - Enlarged`}
                width={1920}
                height={1080}
                className="w-full h-auto block"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}