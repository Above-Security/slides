"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import UIChrome from "../primitives/UIChrome";

export default function EvidenceTimelineDemo() {
    const [isHovered, setIsHovered] = useState(false);
    const imageSrc = "/single-incident-page.png";

    // Preload the image
    useEffect(() => {
        const img = new Image();
        img.src = imageSrc;
    }, []);

    return (
        <div className="relative">
            <UIChrome title="above.security/incidents • Evidence Timeline">
                <motion.div
                    className="relative rounded-lg overflow-hidden border border-slate-200 bg-slate-50 cursor-pointer"
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
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

            {/* Floating enlarged preview */}
            <motion.div
                className="fixed z-50 pointer-events-none"
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