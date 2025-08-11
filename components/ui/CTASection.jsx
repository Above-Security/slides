export default function CTASection({ title, description, primaryButton, secondaryButton }) {
  return (
    <section className="bg-slate-900 text-white py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex gap-4 justify-center">
          {primaryButton && (
            <a href={primaryButton.href} className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-100 transition-colors">
              {primaryButton.text}
            </a>
          )}
          {secondaryButton && (
            <a href={secondaryButton.href} className="inline-flex items-center px-8 py-4 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">
              {secondaryButton.text}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}