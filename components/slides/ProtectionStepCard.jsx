"use client";
import { motion } from "framer-motion";

export default function ProtectionStepCard({ 
  step, 
  title, 
  description, 
  details, 
  isActive, 
  isVisible,
  variant = "rose" 
}) {
  const variantStyles = {
    rose: {
      bg: "from-above-rose-50 to-above-rose-100",
      border: {
        active: "border-above-rose-400",
        inactive: "border-above-rose-200"
      },
      badge: "bg-above-rose-500"
    },
    lavender: {
      bg: "from-above-lavender-50 to-above-lavender-100",
      border: {
        active: "border-above-lavender-400",
        inactive: "border-above-lavender-200"
      },
      badge: "bg-above-lavender-500"
    },
    peach: {
      bg: "from-above-peach-50 to-above-peach-100",
      border: {
        active: "border-above-peach-400",
        inactive: "border-above-peach-200"
      },
      badge: "bg-above-peach-500"
    },
    green: {
      bg: "from-green-50 to-green-100",
      border: {
        active: "border-green-400",
        inactive: "border-green-200"
      },
      badge: "bg-green-500"
    }
  };

  const style = variantStyles[variant];

  return (
    <div className={`relative bg-gradient-to-br ${style.bg} rounded-lg border-2 ${
      isActive ? style.border.active + ' shadow-md' : style.border.inactive
    } p-3 transition-all duration-300 min-h-[100px]`}>
      {/* Step number badge */}
      <div className={`absolute -left-3 top-3 w-6 h-6 ${style.badge} rounded-full flex items-center justify-center text-white text-xs font-bold`}>
        {step}
      </div>
      
      {/* Content with proper spacing */}
      <div className="ml-3">
        {/* Title with active indicator */}
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-sm font-bold text-slate-900">{title}</h3>
          {isActive && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-1.5 h-1.5 bg-green-500 rounded-full"
            />
          )}
        </div>
        
        {/* Description */}
        <p className="text-xs text-slate-600 mb-1">{description}</p>
        
        {/* Details with opacity transition */}
        {details && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-[10px] text-slate-600"
          >
            {details}
          </motion.div>
        )}
      </div>
    </div>
  );
}