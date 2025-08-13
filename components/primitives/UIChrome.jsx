export default function UIChrome({ title, children, noPadding = false }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="flex items-center gap-2 px-3 py-2 border-b border-slate-100 bg-slate-50">
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-500" />
        <div className="ml-3 text-[11px] font-medium text-slate-500 truncate">{title ?? ""}</div>
      </div>
      <div className={noPadding ? "" : "p-4"}>{children}</div>
    </div>
  );
}
