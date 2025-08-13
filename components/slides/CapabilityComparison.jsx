"use client";

export default function CapabilityComparison({ leftTitle, rightTitle, leftItems, rightItems, leftColor = "rose", rightColor = "rose" }) {
  const colorMap = {
    rose: {
      dot: "bg-above-rose-400",
      dotHighlight: "bg-above-rose-500",
      gradient: "bg-gradient-to-br from-above-rose-50 to-white",
      border: "border-above-rose-200"
    },
    lavender: {
      dot: "bg-above-lavender-400",
      dotHighlight: "bg-above-lavender-500",
      gradient: "bg-gradient-to-br from-above-lavender-50 to-white",
      border: "border-above-lavender-200"
    },
    blue: {
      dot: "bg-above-blue-400",
      dotHighlight: "bg-above-blue-500",
      gradient: "bg-gradient-to-br from-above-blue-50 to-white",
      border: "border-above-blue-200"
    }
  };

  const leftColors = colorMap[leftColor] || colorMap.rose;
  const rightColors = colorMap[rightColor] || colorMap.rose;

  return (
    <div className="relative rounded-2xl p-6 overflow-hidden">
      {/* Grainy gradient background for entire container */}
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
      
      {/* Content grid */}
      <div className="grid md:grid-cols-2 gap-4 relative z-10">
        {/* Left column */}
        <div className="bg-white/90 backdrop-blur-sm rounded-lg border border-slate-200/50 p-4">
          <h3 className="text-base font-semibold text-slate-900 mb-3">{leftTitle}</h3>
          <ul className="space-y-2">
            {leftItems.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${leftColors.dot} mt-1.5`} />
                <span className="text-sm text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column */}
        <div className={`${rightColors.gradient} backdrop-blur-sm rounded-lg border ${rightColors.border} p-4`}>
          <h3 className="text-base font-semibold text-slate-900 mb-3">{rightTitle}</h3>
          <ul className="space-y-2">
            {rightItems.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${rightColors.dotHighlight} mt-1.5`} />
                <span className="text-sm text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}