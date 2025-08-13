"use client";
import { motion } from "framer-motion";

export default function SlideLayout({ 
  children, 
  className = "",
  slideNumber,
  title,
  subtitle,
  centered = false,
  padding = "default"
}) {
  const paddingClasses = {
    none: "",
    small: "p-8",
    default: "p-12 md:p-16",
    large: "p-16 md:p-20"
  };

  return (
    <div className={`w-full max-w-7xl mx-auto ${paddingClasses[padding]} ${className}`}>
      {/* Slide number indicator */}
      {slideNumber && (
        <div className="absolute top-8 right-8 text-xs text-slate-400">
          {slideNumber}
        </div>
      )}

      {/* Title and subtitle */}
      {(title || subtitle) && (
        <div className="mb-12">
          {title && (
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
            >
              {title}
            </motion.h1>
          )}
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl md:text-2xl text-slate-600"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      )}

      {/* Content */}
      <div className={centered ? "flex items-center justify-center min-h-[60vh]" : ""}>
        {children}
      </div>
    </div>
  );
}