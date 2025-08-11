"use client";

import UIChrome from "../primitives/UIChrome";

export default function PhishingDetectionDemo() {
    return (
        <UIChrome title="microsoft.com/forms • Survey">
            <div className="bg-gradient-to-br from-above-rose-50 to-white border border-above-rose-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-above-rose-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-above-rose-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <div>
                        <div className="text-sm font-semibold text-slate-900 mb-1">Phishing Detected</div>
                        <div className="text-sm text-slate-700">This form is harvesting credentials. Do not enter your password.</div>
                        <div className="mt-3 flex gap-2">
                            <button className="px-3 py-1 bg-above-rose-600 text-white text-xs rounded">Block & Report</button>
                            <button className="px-3 py-1 bg-white text-slate-700 border border-slate-200 text-xs rounded">Details</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 text-xs text-slate-500">
                LOTS attack detected through semantic analysis, despite legitimate domain
            </div>
        </UIChrome>
    );
}