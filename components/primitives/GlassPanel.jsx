export default function GlassPanel({ children, className = "" }) {
  return (
    <div className={`relative rounded-2xl border border-black/5 bg-white/70 backdrop-blur-xl shadow-soft ${className}`}>
      {children}
    </div>
  );
}
