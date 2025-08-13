"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import UIChrome from "../primitives/UIChrome";
import NudgeToast from "../nudge/NudgeToast";

export default function Slide10({ isPresenterMode, slideNumber }) {
  const [agentAction, setAgentAction] = useState(0);
  const [showAttribution, setShowAttribution] = useState(false);
  
  // AI Agent actions sequence
  const agentActions = [
    { 
      action: "AI Agent initialized", 
      detail: "Perplexity Comet starting task",
      element: null,
      cursor: { x: 200, y: 200 } // Center
    },
    { 
      action: "Navigating to Salesforce", 
      detail: "Opening opportunities pipeline",
      element: "url",
      cursor: { x: 150, y: 36 } // URL bar
    },
    { 
      action: "Accessing opportunity", 
      detail: "Opening ABC Corp - $450K deal",
      element: "click",
      cursor: { x: 100, y: 150 } // First opportunity card
    },
    { 
      action: "Exporting pipeline data", 
      detail: "Downloading 247 opportunities",
      element: "button",
      cursor: { x: 340, y: 280 } // Export All button
    },
    { 
      action: "Opening AI tool", 
      detail: "Switching to ChatGPT",
      element: "tab",
      cursor: { x: 250, y: 36 } // URL bar different spot
    },
    { 
      action: "Sharing sensitive data", 
      detail: "Pasting customer pipeline",
      element: "paste",
      cursor: { x: 200, y: 180 } // Middle area
    }
  ];

  // Auto-advance through actions
  useEffect(() => {
    const timer = setInterval(() => {
      setAgentAction((prev) => {
        if (prev >= agentActions.length - 1) {
          setShowAttribution(true);
          return 0;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto h-full overflow-y-auto py-4 pb-20 px-4">
      {!isPresenterMode && (
        <div className="absolute top-8 right-8 text-xs text-slate-400">
          {slideNumber}/13
        </div>
      )}

      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 text-center"
      >
        AI Agents on endpoints: Full visibility & control
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-lg text-slate-600 text-center mb-6"
      >
        Monitor, audit, and control autonomous agents with complete chain of attribution
      </motion.p>

      {/* Main content area */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Browser simulation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <UIChrome title="salesforce.com • AI Agent Active">
            <div className="relative h-[400px] bg-slate-50 rounded-lg">
              {/* Agent indicator */}
              <div className="absolute top-2 right-2 z-20">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full text-xs font-medium shadow-lg">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  AI Agent Active
                </div>
              </div>

              {/* Mock browser content - Salesforce Opportunities */}
              <div className="p-4">
                <div className="mb-4">
                  <div id="url-bar" className="h-8 bg-white rounded border border-slate-200 px-3 flex items-center text-sm text-slate-600">
                    {agentActions[agentAction].element === "url" && (
                      <span className="text-blue-600">salesforce.com/opportunities</span>
                    )}
                  </div>
                </div>
                
                {/* Salesforce Opportunities content */}
                <div className="space-y-3">
                  {/* Header */}
                  <div className="h-16 bg-white rounded border border-slate-200 p-3 flex flex-col justify-center">
                    <div className="text-xs font-semibold text-slate-700">Q4 Opportunities</div>
                    <div className="text-xs text-slate-500 mt-1">247 Records • $3.2M Pipeline</div>
                  </div>
                  
                  {/* Opportunity cards */}
                  <div className="grid grid-cols-2 gap-3">
                    <div id="click-area" className="bg-white rounded border border-slate-200 p-3">
                      {agentActions[agentAction].element === "click" ? (
                        <div className="w-full h-full bg-blue-50 border-2 border-blue-400 rounded animate-pulse p-2">
                          <div className="text-xs font-semibold text-blue-700">ABC Corp</div>
                          <div className="text-xs text-blue-600 mt-1">$450K • Stage 3</div>
                          <div className="text-xs text-blue-500 mt-1">Close: Dec 15</div>
                        </div>
                      ) : (
                        <div>
                          <div className="text-xs font-semibold text-slate-700">ABC Corp</div>
                          <div className="text-xs text-slate-600 mt-1">$450K • Stage 3</div>
                          <div className="text-xs text-slate-500 mt-1">Close: Dec 15</div>
                        </div>
                      )}
                    </div>
                    <div className="bg-white rounded border border-slate-200 p-3">
                      <div className="text-xs font-semibold text-slate-700">TechStart Inc</div>
                      <div className="text-xs text-slate-600 mt-1">$280K • Stage 2</div>
                      <div className="text-xs text-slate-500 mt-1">Close: Jan 20</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end gap-2">
                    <button id="export-button" className={`px-4 py-2 rounded text-sm font-medium ${
                      agentActions[agentAction].element === "button" 
                        ? "bg-red-500 text-white animate-pulse" 
                        : "bg-slate-100 text-slate-600"
                    }`}>
                      Export All
                    </button>
                    <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded text-sm font-medium">
                      Filter
                    </button>
                  </div>
                </div>
              </div>

              {/* Animated cursor - INSIDE the container */}
              <motion.div
                className="absolute pointer-events-none z-30"
                animate={{
                  left: agentActions[agentAction].cursor.x,
                  top: agentActions[agentAction].cursor.y,
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100,
                  damping: 25
                }}
              >
                <svg className="w-5 h-5 text-purple-600 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                </svg>
              </motion.div>
            </div>
          </UIChrome>
        </motion.div>

        {/* Attribution & Control Panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4 min-h-[450px]"
        >
          {/* Real-time monitoring */}
          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-slate-900">Real-time Agent Activity</h3>
              <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">Monitoring</span>
            </div>
            
            <div className="space-y-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={agentAction}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-3 bg-slate-50 rounded-lg border border-slate-200"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 animate-pulse" />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-slate-900">{agentActions[agentAction].action}</div>
                      <div className="text-xs text-slate-600 mt-0.5">{agentActions[agentAction].detail}</div>
                    </div>
                    <span className="text-xs text-slate-400">Now</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Chain of Attribution */}
          <div className="bg-gradient-to-br from-above-lavender-50 to-white rounded-xl border border-above-lavender-200 p-4">
            <h3 className="text-sm font-semibold text-slate-900 mb-3">Chain of Attribution</h3>
            
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-xs font-medium text-slate-900">Agent: Perplexity Comet</div>
                  <div className="text-xs text-slate-600">Version 2.1.4 • API Key: sk-...3f2d</div>
                </div>
              </div>
              
              <div className="border-l-2 border-above-lavender-300 ml-4 pl-7 py-1">
                <div className="text-xs text-slate-600">Triggered by: Marketing Automation</div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-above-rose-100 to-above-rose-200 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-above-rose-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-xs font-medium text-slate-900">User: Sarah Chen</div>
                  <div className="text-xs text-slate-600">Role: Marketing Manager</div>
                </div>
              </div>
            </div>
          </div>

          {/* Control Actions - Nudge */}
          <div className="min-h-[180px] pr-8">
            <AnimatePresence>
              {showAttribution && (
                <NudgeToast 
                  title="Greetings from Above"
                  subtitle="Risk detected"
                  body="AI Agent attempting to export 247 opportunities from Salesforce pipeline. This action requires justification for compliance."
                  primary="Request Justification"
                  secondary="Review Evidence"
                />
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Bottom capabilities */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-6 relative rounded-2xl p-6 overflow-hidden"
      >
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
        
        {/* Content */}
        <div className="relative z-10 grid grid-cols-3 gap-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg border border-white/50 shadow-sm p-4 text-center">
            <div className="w-10 h-10 bg-gradient-to-br from-above-blue-100 to-above-blue-200 rounded-lg flex items-center justify-center mx-auto mb-2">
              <svg className="w-5 h-5 text-above-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h4 className="text-sm font-semibold text-slate-900">Complete Visibility</h4>
            <p className="text-xs text-slate-600 mt-1">Every agent action tracked</p>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-lg border border-white/50 shadow-sm p-4 text-center">
            <div className="w-10 h-10 bg-gradient-to-br from-above-lavender-100 to-above-lavender-200 rounded-lg flex items-center justify-center mx-auto mb-2">
              <svg className="w-5 h-5 text-above-lavender-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <h4 className="text-sm font-semibold text-slate-900">Full Attribution</h4>
            <p className="text-xs text-slate-600 mt-1">Agent → User → Purpose</p>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-lg border border-white/50 shadow-sm p-4 text-center">
            <div className="w-10 h-10 bg-gradient-to-br from-above-rose-100 to-above-rose-200 rounded-lg flex items-center justify-center mx-auto mb-2">
              <svg className="w-5 h-5 text-above-rose-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h4 className="text-sm font-semibold text-slate-900">Real-time Control</h4>
            <p className="text-xs text-slate-600 mt-1">Block, pause, or approve</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}