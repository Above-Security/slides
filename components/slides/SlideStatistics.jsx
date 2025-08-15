"use client";
import { motion } from "framer-motion";
import GlassPanel from "../primitives/GlassPanel";

export default function SlideStatistics({ isPresenterMode, slideNumber }) {
  return (
    <div className="w-full max-w-7xl mx-auto pb-12">
      {!isPresenterMode && (
        <div className="absolute top-8 right-8 text-xs text-slate-400">
          {slideNumber}/11
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
          <div className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Market Reality Check</div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Insider risks cost <span className="bg-gradient-to-r from-above-rose-600 to-above-peach-600 bg-clip-text text-transparent">$17.4M annually</span>
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-slate-600 max-w-4xl mx-auto"
        >
          Without evidence and coaching, organizations can't prove what happened or prevent it from happening again. <span className="font-semibold text-slate-800">2025 is the year this changes.</span>
        </motion.p>
      </div>

      {/* The Crisis Panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-12"
      >
        <div className="relative rounded-2xl p-8 overflow-hidden">
          {/* Grainy gradient background */}
          <div 
            className="absolute inset-0 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, #FFE0EC 0%, #D4E9FF 25%, #E8D9FF 50%, #FFD4C9 75%, #FFE0EC 100%)',
            }}
          />
          <div 
            className="absolute inset-0 rounded-2xl opacity-50"
            style={{
              background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              mixBlendMode: 'overlay',
              filter: 'contrast(170%) brightness(1000%)',
            }}
          />

          <div className="relative z-10">
            {/* Crisis headline */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="inline-block bg-gradient-to-br from-above-rose-100 to-above-rose-50 rounded-xl px-8 py-4 border-2 border-above-rose-300 shadow-soft mb-6"
              >
                <div className="font-bold text-above-rose-800 text-xl uppercase tracking-wider text-center">THE EVIDENCE CRISIS</div>
                <div className="text-sm text-above-rose-700 font-medium text-center">Organizations can&apos;t prove what happened or coach users</div>
              </motion.div>
            </div>

            {/* Stat cards in glass panels */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <StatCard
                value="16.5%"
                label="Budget on Insider Risk"
                description="Up from 8.2% in 2023"
                source="Ponemon Institute 2025"
                delay={0.6}
              />
              <StatCard
                value="Only 12%"
                label="Contained Under 31 Days"
                description="88% take months to contain"
                source="Ponemon Institute 2025"
                delay={0.7}
              />
              <StatCard
                value="109%"
                label="Cost Increase Since 2018"
                description="Insider threat costs more than doubled"
                source="Ponemon Institute 2025"
                delay={0.8}
              />
            </div>
            
            {/* Second row of stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <StatCard
                value="69%"
                label="Bypass Security Guidance"
                description="Employees who violated policies in past year"
                source="Gartner 2024"
                delay={0.9}
              />
              <StatCard
                value="26%"
                label="Breaches From Insiders"
                description="Data breaches from internal incidents"
                source="Forrester 2025"
                delay={1.0}
              />
              <StatCard
                value="5x Growth"
                label="Insider Program Adoption"
                description="By 2025, 50% will have formal programs"
                source="Gartner 2025"
                delay={1.1}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* The Reality: Threat Types */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="mb-12"
      >
        <GlassPanel className="p-8">
          {/* Subtle gradient background for glass panel */}
          <div className="absolute inset-0 bg-gradient-to-br from-above-lavender-50/30 via-transparent to-above-rose-50/20 rounded-[var(--radius-card)]" />
          
          <div className="relative">
            <div className="text-center mb-8">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">The Evidence Gap</div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                Why organizations can&apos;t <span className="text-above-rose-600">prove or prevent</span> insider threats
              </h2>
              <p className="text-slate-600">$17.4M average annual insider risk cost per organization. 16.5% of IT security budgets now on insider risk. 65% with programs can pre-empt breaches.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ThreatCard
                percentage="55%"
                type="Negligent Insiders"
                description="Employee mistakes and policy violations"
                cost="$676K"
                costLabel="per incident"
                examples={["Wrong Slack channel", "Misconfigured access", "Email misdirection"]}
                color="peach"
                delay={1.1}
              />
              <ThreatCard
                percentage="25%"
                type="Malicious Insiders"
                description="Intentional data theft or sabotage"
                cost="$715K"
                costLabel="per incident"
                examples={["67% email sensitive data", "IP theft", "Sabotage systems"]}
                color="rose"
                delay={1.2}
              />
              <ThreatCard
                percentage="20%"
                type="Credential Theft"
                description="Outsiders using stolen insider credentials"
                cost="$780K"
                costLabel="highest cost per incident"
                examples={["4.8 incidents/year", "Phished passwords", "Account takeover"]}
                color="lavender"
                delay={1.3}
              />
            </div>

            <div className="mt-8 text-center">
              <div className="inline-block bg-white/60 backdrop-blur-sm rounded-xl px-6 py-3 border border-slate-200/50">
                <div className="text-sm font-medium text-slate-700">Without insider risk programs, containment takes <span className="text-xl font-bold text-above-rose-600">91+ days</span> costing $18.7M</div>
                <div className="text-xs text-slate-500 mt-1">Sources: Ponemon Institute 2025, Gartner 2024-2025, Forrester 2025</div>
              </div>
            </div>
          </div>
        </GlassPanel>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="text-center"
      >
        <div className="relative rounded-2xl p-6 overflow-hidden">
          {/* Subtle grainy gradient */}
          <div 
            className="absolute inset-0 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 50%, #F8FAFC 100%)',
            }}
          />
          <div 
            className="absolute inset-0 rounded-2xl opacity-30"
            style={{
              background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              mixBlendMode: 'overlay',
              filter: 'contrast(150%) brightness(1100%)',
            }}
          />
          
          <div className="relative">
            <div className="text-lg font-semibold text-slate-900 mb-2">Above transforms this reality</div>
            <div className="text-2xl font-bold text-above-rose-600 mb-4">Evidence + coaching = prevention</div>
            <div className="text-sm text-slate-600">Real-time visibility into user intent. Contextual coaching prevents 69% who bypass policies. Evidence-based containment under 31 days saves $8.1M.</div>
          </div>
        </div>
      </motion.div>

    </div>
  );
}

function StatCard({ value, label, description, source, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/90 backdrop-blur-sm rounded-lg border border-slate-200/50 p-4 text-center shadow-soft-sm hover:shadow-soft transition-all duration-200"
    >
      <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{value}</div>
      <div className="text-sm font-semibold text-slate-800 mb-1">{label}</div>
      <div className="text-xs text-slate-600 mb-3">{description}</div>
      <div className="border-t border-slate-200/50 pt-2">
        <div className="text-xs text-slate-500 font-medium">{source}</div>
      </div>
    </motion.div>
  );
}

function ThreatCard({ percentage, type, description, cost, costLabel, examples, color, delay }) {
  const colorVariants = {
    peach: {
      dot: "bg-above-peach-500",
      gradient: "bg-gradient-to-br from-above-peach-50 to-white",
      border: "border-above-peach-200"
    },
    rose: {
      dot: "bg-above-rose-500",
      gradient: "bg-gradient-to-br from-above-rose-50 to-white", 
      border: "border-above-rose-200"
    },
    lavender: {
      dot: "bg-above-lavender-500",
      gradient: "bg-gradient-to-br from-above-lavender-50 to-white",
      border: "border-above-lavender-200"
    }
  };

  const colors = colorVariants[color] || colorVariants.rose;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`${colors.gradient} backdrop-blur-sm rounded-lg border ${colors.border} p-6 shadow-soft-sm`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-3 h-3 rounded-full ${colors.dot}`} />
        <div>
          <div className="text-2xl font-bold text-slate-900">{percentage}</div>
          <div className="text-lg font-semibold text-slate-800">{type}</div>
        </div>
      </div>
      
      <div className="text-sm text-slate-600 mb-4">{description}</div>
      
      <div className="bg-white/60 rounded-lg px-3 py-2 mb-4">
        <div className="text-lg font-bold text-slate-900">{cost}</div>
        <div className="text-xs text-slate-600">{costLabel}</div>
      </div>

      <div>
        <div className="text-xs uppercase tracking-wider text-slate-400 mb-2">Common Examples</div>
        <ul className="space-y-1">
          {examples.map((example, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className={`w-1 h-1 rounded-full ${colors.dot} opacity-60`} />
              <span className="text-xs text-slate-600">{example}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}