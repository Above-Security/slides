"use client";

import { motion } from "framer-motion";

export default function StepsList({ steps }) {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <div className="relative h-full">
            {/* Modern card */}
            <div className="bg-white rounded-xl p-6 h-full border border-gray-100 hover:border-gray-200 transition-colors">
              {/* Step number - minimal */}
              <div className="text-5xl font-thin text-gray-200 mb-4">
                {step.number}
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
            
            {/* Simple connector dot for desktop */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gray-200"></div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}