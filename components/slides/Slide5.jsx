"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ProtectionStepCard from "./ProtectionStepCard";
import UserExperiencePanel from "./UserExperiencePanel";
import AnimatedFlowArrow from "./AnimatedFlowArrow";

export default function Slide5({ isPresenterMode, slideNumber }) {
  const [activeStep, setActiveStep] = useState(0);
  const [dataFlow, setDataFlow] = useState(false);
  
  // Continuous animation showing the flow
  useEffect(() => {
    const sequence = async () => {
      // Reset
      setActiveStep(0);
      setDataFlow(false);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Step 1: See (Salesforce view stays visible)
      setActiveStep(1);
      setDataFlow(true);
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      // Step 2: Understand (switch to LLM analysis)
      setActiveStep(2);
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Step 3: Guide (show nudge)
      setActiveStep(3);
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      // Step 4: Prove (show protected)
      setActiveStep(4);
      await new Promise(resolve => setTimeout(resolve, 2500));
    };

    sequence();
    const interval = setInterval(sequence, 12000);
    
    return () => clearInterval(interval);
  }, []);

  const protectionSteps = [
    {
      step: 1,
      title: "See",
      description: "Monitor activity",
      variant: "rose",
      details: (
        <div className="font-mono space-y-0.5">
          <div>URL: /opportunities</div>
          <div>User: Leaver (2 weeks)</div>
          <div>Access: Outside territory</div>
        </div>
      )
    },
    {
      step: 2,
      title: "Understand",
      description: "AI & LLM analysis",
      variant: "lavender",
      details: (
        <div className="space-y-0.5">
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
            <span className="text-red-700">High risk</span>
          </div>
          <div>Intent: Data harvesting</div>
          <div>Pattern: Enumeration</div>
        </div>
      )
    },
    {
      step: 3,
      title: "Guide",
      description: "Request justification",
      variant: "peach",
      details: (
        <div className="space-y-0.5">
          <div className="font-medium">Action taken:</div>
          <div>✓ Justification required</div>
          <div>✓ Activity paused</div>
        </div>
      )
    },
    {
      step: 4,
      title: "Prove",
      description: "Evidence captured",
      variant: "green",
      details: (
        <div className="space-y-0.5">
          <div>✓ 47 records logged</div>
          <div>✓ Manager notified</div>
          <div>✓ Audit trail saved</div>
        </div>
      )
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      {!isPresenterMode && (
        <div className="absolute top-8 right-8 text-xs text-slate-400">
          {slideNumber}/12
        </div>
      )}

      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center"
      >
        How It Works
      </motion.h1>

      {/* Main Grid Layout */}
      <div className="flex gap-6 items-center">
        
        {/* Left: User View */}
        <UserExperiencePanel activeStep={activeStep} />

        {/* Center: Flow Arrow */}
        <AnimatedFlowArrow dataFlow={dataFlow} />

        {/* Right: Above System */}
        <div className="flex-1">
          <div className="mb-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Above Protection</div>
          <div className="space-y-3">
            {protectionSteps.map((step) => (
              <ProtectionStepCard
                key={step.step}
                step={step.step}
                title={step.title}
                description={step.description}
                details={step.details}
                isActive={activeStep === step.step}
                isVisible={activeStep >= step.step}
                variant={step.variant}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 flex items-center justify-center"
      >
        <div className="inline-flex items-center gap-4 px-5 py-2.5 bg-gradient-to-r from-slate-50 to-slate-100 rounded-full border border-slate-200">
          <div className="flex items-center gap-2">
            <motion.div
              className="w-2 h-2 rounded-full bg-green-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xs text-slate-600">Protection Active</span>
          </div>
          <div className="h-4 w-px bg-slate-300" />
          <div className="text-xs">
            <span className="text-slate-500">Response:</span>
            <span className="font-mono font-semibold text-slate-900 ml-1">
              {activeStep === 0 ? "0.00s" :
               activeStep === 1 ? "0.08s" :
               activeStep === 2 ? "0.31s" :
               activeStep === 3 ? "0.52s" :
               "0.94s"}
            </span>
          </div>
          <div className="h-4 w-px bg-slate-300" />
          <div className="text-xs text-slate-600">
            Zero friction • Full visibility
          </div>
        </div>
      </motion.div>
    </div>
  );
}