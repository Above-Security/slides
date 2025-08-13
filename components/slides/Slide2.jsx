"use client";
import { motion } from "framer-motion";
import GlassPanel from "../primitives/GlassPanel";

// Standardized underlined text component for consistency
// Using bottom-[-0.4rem] and h-[2px] to match BrandLogo medium size standard
function UnderlinedGradientText({ children, gradientClass, underlineGradientClass }) {
  return (
    <span className="relative inline-block">
      <span className={`${gradientClass} bg-clip-text text-transparent`}>
        {children}
      </span>
      <div className={`absolute left-0 right-0 bottom-[-0.4rem] h-[2px] ${underlineGradientClass} rounded-full`} />
    </span>
  );
}

export default function Slide2({ isPresenterMode, slideNumber }) {
  return (
    <div className="w-full max-w-7xl mx-auto">
      {!isPresenterMode && (
        <div className="absolute top-8 right-8 text-xs text-slate-400">
          {slideNumber}/13
        </div>
      )}

      {/* Main header */}
      <div className="text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">The Core Problem</div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            The gap between{" "}
            <UnderlinedGradientText 
              gradientClass="bg-gradient-to-r from-above-rose-600 to-above-peach-600"
              underlineGradientClass="bg-gradient-to-r from-above-rose-400 to-above-peach-400"
            >
              access
            </UnderlinedGradientText>{" "}
            and{" "}
            <UnderlinedGradientText 
              gradientClass="bg-gradient-to-r from-above-peach-600 to-above-rose-600"
              underlineGradientClass="bg-gradient-to-r from-above-peach-400 to-above-rose-400"
            >
              action
            </UnderlinedGradientText>
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-slate-600 max-w-3xl mx-auto"
        >
          Your security stack protects authentication. But 87% of insider risk happens after login — where you're blind.
        </motion.p>
      </div>

      {/* Visual representation of the gap */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-12"
      >
        <GlassPanel className="p-8">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-above-rose-50/30 via-transparent to-above-lavender-50/20 rounded-[var(--radius-card)]" />
          
          <div className="relative">
            {/* Timeline visualization */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-above-blue-200 to-above-blue-100 border-2 border-above-blue-300 flex items-center justify-center mb-3 shadow-soft">
                  <svg className="w-10 h-10 text-above-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div className="font-semibold text-slate-900 text-center">Authentication</div>
                <div className="text-sm text-above-blue-700 font-semibold text-center">✓ Protected</div>
              </div>

              {/* The gap with grainy gradient line */}
              <div className="flex-1 px-8">
                <div className="relative flex items-center">
                  {/* Grainy gradient line */}
                  <div className="relative w-full h-8 flex items-center">
                    <div 
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, #B0D5FF 0%, #D8C9FF 25%, #FFB5CA 50%, #FFBAA0 75%, #FFB5CA 100%)',
                      }}
                    />
                    <div 
                      className="absolute inset-0 rounded-full opacity-60"
                      style={{
                        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        mixBlendMode: 'overlay',
                        filter: 'contrast(170%) brightness(1000%)',
                      }}
                    />
                  </div>
                  {/* Blind spot label centered on the line */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-br from-above-rose-100 to-above-rose-50 rounded-xl px-6 py-3 border-2 border-above-rose-300 shadow-soft">
                      <div className="font-bold text-above-rose-800 text-sm uppercase tracking-wider text-center">THE BLIND SPOT</div>
                      <div className="text-xs text-above-rose-700 font-medium text-center">Where 87% of risk happens</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-above-rose-200 to-above-rose-100 border-2 border-above-rose-400 flex items-center justify-center mb-3 shadow-soft">
                  <svg className="w-10 h-10 text-above-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="font-semibold text-slate-900 text-center">User Actions</div>
                <div className="text-sm text-above-rose-700 font-semibold text-center">× Invisible</div>
              </div>
            </div>

            {/* What happens in the gap */}
            <div className="border-t-2 border-slate-200/70 pt-6">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400 text-center mb-4">What you're missing</div>
              <div className="grid grid-cols-4 gap-4">
                <GapRiskIcon icon="ai" label="Shadow AI" detail="ChatGPT, Claude, Bard" />
                <GapRiskIcon icon="export" label="Data Exfiltration" detail="Downloads, copies, shares" />
                <GapRiskIcon icon="oauth" label="OAuth Sprawl" detail="Unchecked permissions" />
                <GapRiskIcon icon="phish" label="LOTS Phishing" detail="On trusted domains" />
              </div>
            </div>
          </div>
        </GlassPanel>
      </motion.div>

      {/* Solution comparison */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Without Above */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <GlassPanel className="p-6 h-full">
            <div className="mb-4">
              <div className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-2">Status Quo</div>
              <h3 className="text-lg font-semibold text-slate-900">Without Above</h3>
            </div>
            <div className="space-y-3">
              <ComparisonBulletPoint status="bad" text="Find out after data walks out" />
              <ComparisonBulletPoint status="bad" text="No context for user intent" />
              <ComparisonBulletPoint status="bad" text="Can't guide users in real-time" />
              <ComparisonBulletPoint status="bad" text="Blind to in-app activity" />
            </div>
          </GlassPanel>
        </motion.div>

        {/* With Above */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="relative h-full">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-above-rose-50/40 via-above-peach-50/20 to-above-lavender-50/30 rounded-[var(--radius-card)]" />
            
            <GlassPanel className="p-6 h-full relative">
              {/* Noise texture */}
              <div className="absolute inset-0 opacity-[0.02] rounded-[var(--radius-card)]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='4' seed='5' /%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noiseFilter)' opacity='0.06'/%3E%3C/svg%3E")`
              }} />
              
              <div className="relative">
                <div className="mb-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-above-rose-400 mb-2">The Solution</div>
                  <h3 className="text-lg font-semibold text-slate-900">With Above</h3>
                </div>
                <div className="space-y-3">
                  <ComparisonBulletPoint status="good" text="See and stop risk in real-time" />
                  <ComparisonBulletPoint status="good" text="LLMs understand user intent" />
                  <ComparisonBulletPoint status="good" text="Guide users before mistakes" />
                  <ComparisonBulletPoint status="good" text="Complete visibility, no blind spots" />
                </div>
              </div>
            </GlassPanel>
          </div>
        </motion.div>
      </div>

    </div>
  );
}

function GapRiskIcon({ icon, label, detail }) {
  const IconComponent = () => {
    switch(icon) {
      case 'ai':
        return (
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-above-lavender-200 to-above-lavender-100 border border-above-lavender-300/50 flex items-center justify-center shadow-soft-sm">
            <div className="w-4 h-4 bg-gradient-to-br from-above-lavender-500 to-above-lavender-600 rounded" />
          </div>
        );
      case 'export':
        return (
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-above-peach-200 to-above-peach-100 border border-above-peach-300/50 flex items-center justify-center shadow-soft-sm">
            <svg className="w-4 h-4 text-above-peach-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
          </div>
        );
      case 'oauth':
        return (
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-above-blue-200 to-above-blue-100 border border-above-blue-300/50 flex items-center justify-center shadow-soft-sm">
            <svg className="w-4 h-4 text-above-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </div>
        );
      case 'phish':
        return (
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-above-rose-200 to-above-rose-100 border border-above-rose-300/50 flex items-center justify-center shadow-soft-sm">
            <svg className="w-4 h-4 text-above-rose-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="text-center">
      <div className="flex justify-center mb-2">
        <IconComponent />
      </div>
      <div className="font-medium text-sm text-slate-900">{label}</div>
      <div className="text-xs text-slate-500 mt-0.5">{detail}</div>
    </div>
  );
}

function ComparisonBulletPoint({ status, text }) {
  return (
    <div className="flex items-start gap-3">
      {status === 'bad' ? (
        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200/50 flex items-center justify-center flex-shrink-0 mt-0.5">
          <div className="w-2 h-0.5 bg-slate-400" />
        </div>
      ) : (
        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-above-rose-100 to-above-peach-50 border border-above-rose-200/50 flex items-center justify-center flex-shrink-0 mt-0.5">
          <svg className="w-3 h-3 text-above-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
      <span className={`text-sm ${status === 'good' ? 'text-slate-900 font-medium' : 'text-slate-700'}`}>
        {text}
      </span>
    </div>
  );
}