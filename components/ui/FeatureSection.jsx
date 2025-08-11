export default function FeatureSection({ 
  badge, 
  title, 
  description, 
  points, 
  visualComponent,
  reverse = false 
}) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center`}>
      <div className={reverse ? 'order-2 md:order-2' : 'order-1'}>
        {badge && (
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-4 ${badge.className}`}>
            {badge.text}
          </div>
        )}
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          {title}
        </h3>
        <p className="text-lg text-slate-600 mb-6">
          {description}
        </p>
        {points && (
          <div className="space-y-3">
            {points.map((point, index) => (
              <div key={index} className="flex items-center gap-3 text-slate-700">
                <div className={`w-1 h-1 rounded-full ${point.dotColor || 'bg-slate-400'}`} />
                {point.text}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={reverse ? 'order-1 md:order-1' : 'order-2'}>
        {visualComponent}
      </div>
    </div>
  );
}