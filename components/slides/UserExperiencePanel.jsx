"use client";
import { motion } from "framer-motion";
import UIChrome from "../primitives/UIChrome";
import NudgeToast from "../nudge/NudgeToast";

export default function UserExperiencePanel({ activeStep }) {
  return (
    <div className="flex-1">
      <div className="mb-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">User Experience</div>
      {activeStep === 3 ? (
        // Show UIChrome with nudge for step 3
        <UIChrome title="Salesforce • Customer Opportunities">
          <div className="space-y-3">
            <NudgeToast 
              title="Activity Review Required"
              subtitle="Unusual access pattern detected"
              body={
                <span>
                  You're accessing customer opportunities outside your assigned accounts during your notice period. 
                  <span className="font-medium"> Please provide business justification.</span>
                </span>
              }
              primary="Provide Justification"
              secondary="View Policy"
            />
          </div>
        </UIChrome>
      ) : (
        // Show regular browser chrome for other steps
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
          {/* Mini Browser Chrome */}
          <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-50 border-b border-slate-100">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <div className="flex-1 mx-3">
              <div className="bg-white rounded px-2 py-0.5 text-[10px] text-slate-500 font-mono">
                app.salesforce.com/opportunities
              </div>
            </div>
          </div>

          {/* Browser Content - Fixed Height Container */}
          <div className="h-64 bg-white p-4 relative overflow-hidden">
            {/* Layer 1: Salesforce View (visible in steps 0, 1) */}
            <motion.div
              className="absolute inset-0 p-4"
              animate={{ opacity: (activeStep === 0 || activeStep === 1) ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <SalesforceView activeStep={activeStep} />
            </motion.div>

            {/* Layer 2: LLM Analysis (visible in step 2) */}
            <motion.div
              className="absolute inset-0 p-4"
              animate={{ opacity: activeStep === 2 ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <LLMAnalysisView activeStep={activeStep} />
            </motion.div>

            {/* Layer 4: Protected (visible in step 4) */}
            <motion.div
              className="absolute inset-0 p-4 flex items-center justify-center"
              animate={{ opacity: activeStep === 4 ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ProtectedView activeStep={activeStep} />
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}

function SalesforceView({ activeStep }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
        <div className="w-4 h-4 bg-blue-500 rounded" />
        <div className="text-xs font-semibold text-slate-700">Customer Opportunities</div>
        <div className="ml-auto text-[10px] px-2 py-0.5 bg-amber-100 text-amber-700 rounded">
          Outside Territory
        </div>
      </div>
      
      <div className="space-y-2">
        <OpportunityCard 
          title="Tech Modernization"
          company="GlobalTech Inc"
          amount="$2,400,000"
          stage="Negotiation"
          stageColor="yellow"
          owner="Sarah Chen"
        />
        
        <OpportunityCard 
          title="Cloud Migration"
          company="FinanceCore"
          amount="$1,800,000"
          stage="Proposal"
          stageColor="blue"
          owner="Mike Davis"
        />

        <motion.div
          animate={{
            backgroundColor: activeStep === 1 ? "rgb(254 242 242)" : "rgb(248 250 252)",
            borderColor: activeStep === 1 ? "rgb(252 165 165)" : "rgb(226 232 240)"
          }}
          className="rounded p-2 border"
        >
          <OpportunityCard 
            title="Enterprise Expansion"
            company="MegaCorp Solutions"
            amount="$3,200,000"
            stage="Discovery"
            stageColor="green"
            owner="Alex Thompson"
            isHighlighted={activeStep === 1}
          />
        </motion.div>
      </div>
    </div>
  );
}

function OpportunityCard({ title, company, amount, stage, stageColor, owner, isHighlighted }) {
  const stageColors = {
    green: "bg-green-100 text-green-700",
    yellow: "bg-yellow-100 text-yellow-700",
    blue: "bg-blue-100 text-blue-700"
  };

  return (
    <div className={!isHighlighted ? "bg-slate-50 rounded p-2 border border-slate-100" : ""}>
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="text-xs font-medium text-blue-600">{title}</div>
          <div className="text-[10px] text-slate-500">{company} • {amount}</div>
          {owner && <div className="text-[9px] text-slate-400 mt-0.5">Owner: {owner}</div>}
        </div>
        <div className={`text-[10px] px-2 py-0.5 rounded ${stageColors[stageColor]}`}>
          {stage}
        </div>
      </div>
    </div>
  );
}

function LLMAnalysisView({ activeStep }) {
  return (
    <>
      <div className="text-[10px] font-mono text-slate-500 mb-2">LLM RISK ANALYSIS</div>
      
      <div className="space-y-2">
        <motion.div
          initial={{ x: -10 }}
          animate={{ x: activeStep === 2 ? 0 : -10 }}
          transition={{ delay: 0.2 }}
          className="bg-red-50 border border-red-200 rounded p-2"
        >
          <div className="text-[10px] font-semibold text-red-700">High Risk Indicators</div>
          <div className="text-[9px] text-slate-600 mt-1">
            • Notice period: 2 weeks remaining<br/>
            • Competitor: Joining TechRival Inc<br/>
            • Access: Outside assigned accounts
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -10 }}
          animate={{ x: activeStep === 2 ? 0 : -10 }}
          transition={{ delay: 0.4 }}
          className="bg-amber-50 border border-amber-200 rounded p-2"
        >
          <div className="text-[10px] font-semibold text-amber-700">Behavior Analysis</div>
          <div className="text-[9px] text-slate-600 mt-1">
            • Viewing high-value opportunities<br/>
            • Sequential enumeration pattern<br/>
            • 47 records accessed (15 min)
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -10 }}
          animate={{ x: activeStep === 2 ? 0 : -10 }}
          transition={{ delay: 0.6 }}
          className="bg-above-peach-50 border border-above-peach-200 rounded p-2"
        >
          <div className="text-[10px] font-semibold text-above-peach-700">Recommended Action</div>
          <div className="text-[9px] text-slate-600 mt-1">
            Request immediate justification
          </div>
        </motion.div>
      </div>
    </>
  );
}

function ProtectedView({ activeStep }) {
  return (
    <div className="text-center">
      <motion.div
        animate={{ scale: activeStep === 4 ? 1 : 0 }}
        transition={{ type: "spring" }}
        className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2"
      >
        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </motion.div>
      <div className="text-xs font-medium">Activity Flagged</div>
      <div className="text-[10px] text-slate-500">Evidence captured • Manager notified</div>
    </div>
  );
}