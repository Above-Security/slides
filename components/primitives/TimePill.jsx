export default function TimePill({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-700 shadow-sm">
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-b from-violet-400 to-cyan-400" />
      {children}
    </span>
  );
}
