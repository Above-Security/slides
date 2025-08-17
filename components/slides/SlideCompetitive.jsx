"use client";
import { motion } from "framer-motion";

export default function SlideCompetitive({ isPresenterMode, slideNumber }) {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {!isPresenterMode && (
        <div className="absolute top-8 right-8 text-xs text-slate-400">
          {slideNumber}/12
        </div>
      )}

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6"
      >
        <div className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">
          Competitive Landscape
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-slate-900">They&apos;re Fighting </span>
          <span className="text-slate-400 line-through">Yesterday&apos;s</span>
          <span className="text-slate-900"> War</span>
        </h1>
      </motion.div>

      {/* Main Graph with ProductShowcase styling */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative rounded-2xl overflow-hidden mb-6"
      >
        {/* Grainy gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #D4E9FF 0%, #E8D9FF 25%, #FFE0EC 50%, #FFD4C9 75%, #D4E9FF 100%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            mixBlendMode: 'overlay',
            filter: 'contrast(170%) brightness(1000%)',
          }}
        />

        {/* White content area */}
        <div className="relative bg-white/80 m-6 rounded-xl p-8">
          <div className="relative h-[400px]">
            {/* Axes */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-300"></div>
            <div className="absolute top-0 bottom-0 left-0 w-px bg-slate-300"></div>

            {/* Center grid lines */}
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-slate-200"></div>
            <div className="absolute left-0 right-0 top-1/2 h-px bg-slate-200"></div>

            {/* Axis Labels */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-semibold text-slate-600 tracking-wider">
              VISIBILITY INTO RISK →
            </div>
            <div className="absolute -left-10 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-semibold text-slate-600 tracking-wider">
              PREVENTION CAPABILITY →
            </div>

            {/* Quadrant Labels */}
            <div className="absolute top-4 left-4 text-xs text-slate-400 font-medium">
              Some Prevention (Narrow)
            </div>
            <div className="absolute top-4 right-4 text-xs text-above-rose-600 font-bold">
              Prevention + Visibility
            </div>
            <div className="absolute bottom-4 left-4 text-xs text-slate-400 font-medium">
              Limited Detection
            </div>
            <div className="absolute bottom-4 right-4 text-xs text-slate-400 font-medium">
              Detection Only
            </div>

            {/* Competitor Points with comprehensive hover */}
            <CompetitorPoint
              name="Exabeam & Gurucul"
              left="25%"
              bottom="15%"
              details={{
                sees: "Log data, SIEM correlation, UEBA patterns",
                blind: "User actions in apps, real intent, prevention",
                response: "Forensics after incident occurs",
                gap: "Can't see or stop app-level risk",
                approach: "AI-powered log analytics"
              }}
              delay={0.5}
            />

            <CompetitorPoint
              name="DTEX"
              left="60%"
              top="30%"
              details={{
                sees: "User behavior, Zero Trust context, patterns",
                blind: "App internals, real-time coaching",
                response: "Proactive alerts, risk mitigation",
                gap: "No content visibility, complex setup",
                approach: "Privacy-first, <5MB/day, scales to 500K+"
              }}
              delay={0.6}
            />

            <CompetitorPoint
              name="Teramind"
              left="70%"
              bottom="40%"
              details={{
                sees: "Keystrokes, screenshots, OCR",
                blind: "User privacy, trust, real intent",
                response: "Rules-based blocking",
                gap: "Invasive, rule-dependent",
                approach: "Employee surveillance"
              }}
              delay={0.7}
            />

            <CompetitorPoint
              name="Proofpoint"
              left="65%"
              bottom="30%"
              details={{
                sees: "Screen recording, user timeline",
                blind: "Intent, semantics, real-time prevention",
                response: "Some alerts, mostly forensics",
                gap: "Heavy agent, reactive focus",
                approach: "Video recording + CASB"
              }}
              delay={0.8}
            />

            <CompetitorPoint
              name="Forcepoint"
              left="45%"
              bottom="35%"
              details={{
                sees: "User behavior, risk scores, DLP events",
                blind: "App internals, real intent",
                response: "Risk-adaptive policies",
                gap: "Rule-heavy, complex deployment",
                approach: "Behavioral DLP + UEBA"
              }}
              delay={0.85}
            />

            <CompetitorPoint
              name="Code42"
              left="40%"
              top="25%"
              details={{
                sees: "File movements, data at rest/in motion",
                blind: "App activity, SaaS actions",
                response: "Coaching + blocking for files",
                gap: "File-centric, misses 87% of app risk",
                approach: "Cloud-native with coaching"
              }}
              delay={0.9}
            />

            {/* Above - Hero position */}
            <CompetitorPoint
              name="Above"
              right="15%"
              top="15%"
              details={{
                sees: "Everything - inside all apps with LLM understanding",
                blind: "Nothing - complete visibility across all surfaces",
                response: "Real-time coaching before mistakes happen",
                gap: "None - comprehensive protection",
                approach: "AI-powered, no rules needed"
              }}
              delay={1.2}
              isHero={true}
            />
          </div>
        </div>
      </motion.div>

      {/* Key Differentiators - Now 3 columns without "No Agents" */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="grid grid-cols-3 gap-4 mb-6 max-w-3xl mx-auto"
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-lg border border-slate-200/50 p-4 text-center">
          <div className="text-2xl font-bold text-above-rose-600 mb-1">No Rules</div>
          <div className="text-xs text-slate-600">LLM understands intent</div>
        </div>
        <div className="bg-white/90 backdrop-blur-sm rounded-lg border border-slate-200/50 p-4 text-center">
          <div className="text-2xl font-bold text-above-rose-600 mb-1">No Blind Spots</div>
          <div className="text-xs text-slate-600">Sees inside all apps</div>
        </div>
        <div className="bg-white/90 backdrop-blur-sm rounded-lg border border-slate-200/50 p-4 text-center">
          <div className="text-2xl font-bold text-above-rose-600 mb-1">Real-time</div>
          <div className="text-xs text-slate-600">Coaches before mistakes</div>
        </div>
      </motion.div>

      {/* Bottom Message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="text-center"
      >
        <div className="inline-block bg-white/90 backdrop-blur-sm rounded-2xl px-8 py-4 border border-slate-200">
          <p className="text-lg font-semibold text-slate-900">
            Above is the only solution that doesn&apos;t need predefinition.
          </p>
          <p className="text-sm text-slate-600 mt-1">
            Our LLM understands context and intent automatically — no rules, no tuning, just protection.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

function CompetitorPoint({ name, left, right, top, bottom, details, delay, isHero }) {
  const style = {};
  if (left) style.left = left;
  if (right) style.right = right;
  if (top) style.top = top;
  if (bottom) style.bottom = bottom;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: isHero ? 1.2 : 1 }}
      transition={{ duration: 0.5, delay }}
      className="absolute group"
      style={style}
    >
      <div className="relative">
        {/* Gradient glow for hero */}
        {isHero && (
          <div className="absolute inset-0 bg-gradient-to-br from-above-rose-400/50 to-above-peach-400/50 rounded-full blur-xl scale-125"></div>
        )}

        {/* Point */}
        <div className={`relative ${isHero ? 'w-14 h-14' : 'w-12 h-12'} ${isHero ? 'bg-gradient-to-br from-above-rose-500 via-above-rose-400 to-above-peach-400' : 'bg-white'} border-2 ${isHero ? 'border-white' : 'border-slate-300'} rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:scale-110 cursor-pointer`}>
          <span className={`text-xs font-bold ${isHero ? 'text-white' : 'text-slate-600'}`}>{name[0]}</span>
        </div>

        {/* Label */}
        <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-medium ${isHero ? 'text-above-rose-600 font-bold' : 'text-slate-600'} whitespace-nowrap`}>
          {name}
        </div>

        {/* Comprehensive hover card */}
        <div className={`absolute ${bottom ? 'bottom-20' : 'top-20'} ${left && parseInt(left) < 50 ? 'left-0' : 'right-0'} w-64 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-40`}>
          <div className="bg-white rounded-lg p-3 shadow-2xl border border-slate-200">
            <div className="text-xs font-bold text-slate-900 mb-2">{name}</div>
            <div className="space-y-1 text-[10px]">
              <div>
                <span className="font-semibold text-green-600">Sees:</span>
                <span className="text-slate-700"> {details.sees}</span>
              </div>
              <div>
                <span className="font-semibold text-red-600">Blind:</span>
                <span className="text-slate-700"> {details.blind}</span>
              </div>
              <div>
                <span className="font-semibold text-blue-600">Response:</span>
                <span className="text-slate-700"> {details.response}</span>
              </div>
              <div>
                <span className="font-semibold text-orange-600">Gap:</span>
                <span className="text-slate-700"> {details.gap}</span>
              </div>
              <div>
                <span className="font-semibold text-purple-600">Approach:</span>
                <span className="text-slate-700"> {details.approach}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}