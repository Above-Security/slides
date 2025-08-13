"use client";
import { motion } from "framer-motion";
import SceneCard from "../timeline/SceneCard";
import NudgeToast from "../nudge/NudgeToast";

export default function Slide12({ isPresenterMode, slideNumber }) {
  const orgScenes = [
    { time: "Mon 9:12 AM", headline: "HR demotion ingested", sub: "Sensitivity adjusts", bgKind: "hr" },
    { time: "Tue 10:41 AM", headline: "Cross-role CRM session", sub: "Approval nudge", bgKind: "org-crm-deep" },
    { time: "Wed 9:06 AM", headline: "Exports/copy detected", sub: "Guide to approved channel", bgKind: "org-staging" },
    { time: "Thu 4:18 PM", headline: "Shadow notes app", sub: "Switch guidance issued", bgKind: "org-shadow-saas" },
    { time: "Fri 10:04 AM", headline: "Case timeline compiled", sub: "Scopes and policies", bgKind: "cta-org" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto">
      {!isPresenterMode && (
        <div className="absolute top-8 right-8 text-xs text-slate-400">
          {slideNumber}/13
        </div>
      )}

      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 text-center"
      >
        Live demo: See the Timeline • Try the Nudge
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-lg text-slate-600 text-center mb-8"
      >
        One week that shows intent, guidance, and evidence
      </motion.p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Timeline view */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="text-sm font-medium text-slate-700 mb-3">Analyst View</div>
            <div className="space-y-2">
              {orgScenes.map((scene, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="p-3 rounded-lg bg-slate-50 border border-slate-200"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-xs text-slate-500 mb-1">{scene.time}</div>
                      <div className="text-sm font-medium text-slate-900">{scene.headline}</div>
                      <div className="text-xs text-slate-600 mt-1">{scene.sub}</div>
                    </div>
                    <TimelineIcon kind={scene.bgKind} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Nudge view */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4"
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="text-sm font-medium text-slate-700 mb-3">Insider View</div>
            
            {/* Example nudges */}
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                <NudgeToast 
                  body={<span>You're outside your usual scope. If legitimate, <span className="font-medium">request approval</span>.</span>}
                  primary="Request"
                  secondary="Dismiss"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1.0 }}
              >
                <NudgeToast 
                  body={<span>Use <span className="font-medium">approved export channel</span>; large actions are recorded.</span>}
                  primary="View policy"
                  secondary="Continue"
                />
              </motion.div>
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex gap-3 justify-center"
          >
            <button className="px-4 py-2 bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-lg text-sm font-medium">
              See the timeline
            </button>
            <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg text-sm font-medium">
              Try the nudge
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function TimelineIcon({ kind }) {
  const iconColors = {
    hr: "bg-above-blue-100 text-above-blue-700 border-above-blue-200",
    "org-crm-deep": "bg-above-rose-100 text-above-rose-700 border-above-rose-200",
    "org-staging": "bg-above-peach-100 text-above-peach-700 border-above-peach-200",
    "org-shadow-saas": "bg-yellow-100 text-yellow-700 border-yellow-200",
    "cta-org": "bg-green-100 text-green-700 border-green-200"
  };
  
  const iconLabels = {
    hr: "HR",
    "org-crm-deep": "CRM",
    "org-staging": "Export",
    "org-shadow-saas": "Risk",
    "cta-org": "Case"
  };
  
  return (
    <span className={`inline-flex items-center justify-center w-10 h-6 rounded text-xs font-semibold border ${iconColors[kind] || 'bg-slate-100 text-slate-700 border-slate-200'}`}>
      {iconLabels[kind] || "Event"}
    </span>
  );
}