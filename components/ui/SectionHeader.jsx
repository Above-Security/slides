export default function SectionHeader({ label, title, description }) {
  return (
    <div className="text-center mb-20">
      {label && (
        <div className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4">
          {label}
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}