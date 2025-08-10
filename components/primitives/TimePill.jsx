export default function TimePill({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-white/40 bg-white/60 backdrop-blur-sm px-2.5 py-1 text-[11px] font-semibold text-slate-700 shadow-soft">
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-b from-[#FFB6C1] to-[#FFDAC1]" />
      {children}
    </span>
  );
}
