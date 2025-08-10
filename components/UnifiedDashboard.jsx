import UIChrome from "./primitives/UIChrome";
import { POLICY_OAUTH } from "../lib/constants";

export default function UnifiedDashboard() {
  return (
    <UIChrome title="Above • Unified View">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <div className="mb-2 text-sm font-medium text-slate-700">Top risky subjects</div>
          <div className="space-y-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3 rounded-[12px] border border-white/30 bg-white/40 backdrop-blur-sm p-3">
                <div className="h-9 w-9 rounded-full bg-slate-100" />
                <div className="flex-1 space-y-1.5">
                  <div className="h-2.5 w-2/3 rounded bg-slate-100" />
                  <div className="flex gap-1">
                    <span className="h-2 w-10 rounded bg-slate-100" />
                    <span className="h-2 w-14 rounded bg-slate-100" />
                    <span className="h-2 w-8 rounded bg-slate-100" />
                  </div>
                </div>
                <div className="h-6 w-12 rounded bg-gradient-to-br from-[#FFDAC1] to-[#FFB6C1]" />
                <div className="flex h-6 items-end gap-0.5">
                  {Array.from({ length: 8 }).map((__, j) => (
                    <div key={j} className="w-1.5 rounded-t bg-gradient-to-t from-[#FFD8E4] to-[#FFEDE5]" style={{ height: `${20 + j * 8}%` }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <div className="rounded-[12px] border border-white/30 bg-white/40 backdrop-blur-sm p-3">
            <div className="mb-2 text-sm font-medium text-slate-700">Subject timeline (this week)</div>
            <div className="h-2 w-full rounded bg-gradient-to-r from-[#FFD8E4] to-[#FFEDE5]" />
            <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-[12px] border border-white/30 bg-white/40 backdrop-blur-sm p-3">
              <div className="mb-2 text-sm font-medium text-slate-700">Objects touched</div>
              <div className="space-y-1.5">
                <div className="h-2 w-28 rounded bg-slate-100" />
                <div className="h-2 w-20 rounded bg-slate-100" />
                <div className="h-2 w-24 rounded bg-slate-100" />
              </div>
            </div>
            <div className="rounded-[12px] border border-white/30 bg-white/40 backdrop-blur-sm p-3">
              <div className="mb-2 text-sm font-medium text-slate-700">Scopes captured</div>
              <div className="space-y-1.5">
                <div className="h-2 w-28 rounded bg-slate-100" />
                <div className="h-2 w-24 rounded bg-slate-100" />
                <div className="h-2 w-20 rounded bg-slate-100" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-xl border border-slate-200 p-3 text-center">
              <div className="text-xs text-slate-500">Nudges</div>
              <div className="mt-1 text-lg font-semibold">3</div>
            </div>
            <div className="rounded-xl border border-slate-200 p-3 text-center">
              <div className="text-xs text-slate-500">Blocks</div>
              <div className="mt-1 text-lg font-semibold">0</div>
            </div>
            <div className="rounded-xl border border-slate-200 p-3 text-center">
              <div className="text-xs text-slate-500">Policy</div>
              <div className="mt-1 text-[11px]">{POLICY_OAUTH}</div>
            </div>
          </div>
        </div>
      </div>
    </UIChrome>
  );
}
