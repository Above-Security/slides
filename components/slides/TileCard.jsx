"use client";
import { motion } from "framer-motion";

export default function TileCard({ 
  title, 
  description, 
  icon, 
  variant = "default",
  delay = 0,
  className = ""
}) {
  const variants = {
    default: "bg-white border-slate-200",
    primary: "bg-gradient-to-br from-above-rose-50 to-above-rose-100 border-above-rose-200",
    secondary: "bg-gradient-to-br from-above-lavender-50 to-above-lavender-100 border-above-lavender-200",
    accent: "bg-gradient-to-br from-above-peach-50 to-above-peach-100 border-above-peach-200",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-2xl border p-6 shadow-soft-sm hover:shadow-soft transition-shadow duration-200 ${variants[variant]} ${className}`}
    >
      {icon && (
        <div className="mb-4 text-3xl">
          {icon}
        </div>
      )}
      {title && (
        <h3 className="text-lg font-semibold text-slate-900 mb-2">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-sm text-slate-600 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}