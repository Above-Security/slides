"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import UIChrome from "../primitives/UIChrome";

export default function EvidenceTimelineDemo() {
    const [isHovered, setIsHovered] = useState(false);
    const [isMobileEnlarged, setIsMobileEnlarged] = useState(false);
    const imageSrc = "/single-incident-page.png";

    // Preload the image
    useEffect(() => {
        const img = new Image();
        img.src = imageSrc;
    }, []);

    return (
        <div className="relative">
            <UIChrome title="abovesec.com/incidents • Evidence Timeline">
                <motion.div
                    className="relative rounded-lg overflow-hidden border border-slate-200 bg-slate-50 cursor-pointer"
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    onClick={() => setIsMobileEnlarged(true)}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                >
                    <img
                        src={imageSrc}
                        alt="Evidence Timeline Dashboard"
                        className="w-full h-auto block"
                    />

                    {/* Glowing border effect on hover */}
                    <motion.div
                        className="absolute inset-0 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-above-blue-400 via-above-lavender-400 to-above-rose-400 opacity-20 blur-xl" />
                    </motion.div>
                </motion.div>
            </UIChrome>

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
                            <img
                                src={imageSrc}
                                alt="Evidence Timeline Dashboard - Enlarged"
                                className="w-full h-auto block"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Desktop floating enlarged preview */}
            <motion.div
                className="fixed z-50 pointer-events-none hidden md:block"
                initial={{ opacity: 0, scale: 0.8, x: "-50%", y: "-50%" }}
                animate={{
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1 : 0.8,
                    x: "-50%",
                    y: "-50%",
                }}
                transition={{ type: "keyframes", damping: 20, stiffness: 300 }}
                style={{
                    left: "50%",
                    top: "50%",
                    width: "min(80vw, 1200px)",
                    visibility: isHovered ? "visible" : "hidden",
                }}
            >
                <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
                    <div className="bg-gradient-to-r from-above-blue-50 to-above-rose-50 p-2">
                        <div className="text-xs font-medium text-slate-600 text-center">Evidence Timeline • Full View</div>
                    </div>
                    <img
                        src={imageSrc}
                        alt="Evidence Timeline Dashboard - Enlarged"
                        className="w-full h-auto block"
                    />
                </div>
            </motion.div>
        </div>
    );
}