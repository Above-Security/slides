export default function GlassPanel({ children, className = "" }) {
  return (
    <div className={`relative rounded-[var(--radius-card)] nudge-glass ${className}`}>
      {children}
    </div>
  );
}
