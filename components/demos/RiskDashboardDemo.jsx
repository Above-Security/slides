"use client";

export default function RiskDashboardDemo() {
    return (
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-soft-sm">
            <div className="text-sm font-medium text-slate-700 mb-4">Risk Dashboard</div>
            <div className="space-y-4">
                <RiskBar team="Finance Team" level="High" color="rose" width="w-20" />
                <RiskBar team="Engineering" level="Medium" color="peach" width="w-14" />
                <RiskBar team="Marketing" level="Low" color="lavender" width="w-8" />
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200">
                <div className="text-xs text-slate-500">Real-time risk assessment across 2,341 employees</div>
            </div>
        </div>
    );
}

function RiskBar({ team, level, color, width }) {
    const colorMap = {
        rose: 'from-above-rose-200 to-above-rose-400',
        peach: 'from-above-peach-200 to-above-peach-400', 
        lavender: 'from-above-lavender-200 to-above-lavender-400'
    };

    return (
        <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600">{team}</span>
            <div className="flex items-center gap-2">
                <div className={`h-2 ${width} bg-gradient-to-r ${colorMap[color]} rounded`} />
                <span className="text-sm font-medium">{level}</span>
            </div>
        </div>
    );
}