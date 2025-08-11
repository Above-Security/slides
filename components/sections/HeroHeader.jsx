export default function PageHeader({ badge, headline, subheadline, ctaText, ctaHref }) {
  return (
    <header className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {badge && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-above-rose-50 border border-above-rose-100 text-xs font-medium text-slate-600 uppercase tracking-wider mb-8">
            {badge}
          </div>
        )}
        
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
          {headline}
        </h1>
        
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          {subheadline}
        </p>
        
        {ctaText && (
          <a href={ctaHref} className="inline-flex items-center px-8 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors">
            {ctaText}
          </a>
        )}
      </div>
    </header>
  );
}