"use client";

import UIChrome from "../primitives/UIChrome";

export default function ApplicationDiscoveryDemo() {
    const apps = [
        { name: "ChatGPT", category: "AI Tool", users: 142, risk: "high", permissions: ["Data export", "API access"], lastSeen: "2 min ago", auth: "Personal Email", authRisk: "high" },
        { name: "Claude", category: "AI Tool", users: 89, risk: "medium", permissions: ["Read files", "Generate content"], lastSeen: "5 min ago", auth: "SSO + MFA", authRisk: "low" },
        { name: "Zapier", category: "Automation", users: 34, risk: "high", permissions: ["Full Salesforce access", "Email send"], lastSeen: "1 hour ago", auth: "Manual Login", authRisk: "medium" },
        { name: "Amazon Shopping AI", category: "E-commerce (Shadow AI)", users: 12, risk: "high", permissions: ["Paste company data", "Browser storage"], lastSeen: "Active now", auth: "No Auth", authRisk: "high" },
    ];

    return (
        <UIChrome title="above.security/discovery • Application Discovery">
            <div className="bg-slate-50 p-4 rounded-lg">
                {/* Header stats */}
                <div className="grid grid-cols-4 gap-3 mb-4">
                    <div className="bg-white p-3 rounded-lg border border-slate-200">
                        <div className="text-2xl font-semibold text-slate-900">247</div>
                        <div className="text-xs text-slate-500">Total Apps</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-slate-200">
                        <div className="text-2xl font-semibold text-above-rose-600">42</div>
                        <div className="text-xs text-slate-500">High Risk</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-slate-200">
                        <div className="text-2xl font-semibold text-above-blue-600">18</div>
                        <div className="text-xs text-slate-500">AI Tools</div>
                    </div>
                    <div className="bg-above-rose-50 p-3 rounded-lg border border-above-rose-200">
                        <div className="text-2xl font-semibold text-above-rose-700">156</div>
                        <div className="text-xs text-above-rose-600">Weak Auth</div>
                    </div>
                </div>

                {/* Authentication Risk Analysis */}
                <div className="bg-white rounded-lg border border-slate-200 p-4 mb-4">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-slate-700">Authentication Security Analysis</span>
                        <span className="text-xs text-above-rose-600">63% using risky authentication</span>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="text-center">
                            <div className="text-lg font-semibold text-above-blue-700">89</div>
                            <div className="text-xs text-slate-500">SSO + MFA</div>
                            <div className="w-full bg-slate-200 rounded-full h-1.5 mt-1">
                                <div className="bg-above-blue-500 h-1.5 rounded-full w-4/12"></div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-lg font-semibold text-above-peach-700">78</div>
                            <div className="text-xs text-slate-500">Manual Login</div>
                            <div className="w-full bg-slate-200 rounded-full h-1.5 mt-1">
                                <div className="bg-above-peach-500 h-1.5 rounded-full w-3/12"></div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-lg font-semibold text-above-rose-700">142</div>
                            <div className="text-xs text-slate-500">Personal Email</div>
                            <div className="w-full bg-slate-200 rounded-full h-1.5 mt-1">
                                <div className="bg-above-rose-500 h-1.5 rounded-full w-7/12"></div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-lg font-semibold text-above-rose-700">14</div>
                            <div className="text-xs text-slate-500">No Auth</div>
                            <div className="w-full bg-slate-200 rounded-full h-1.5 mt-1">
                                <div className="bg-above-rose-600 h-1.5 rounded-full w-1/12"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Apps table */}
                <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                    <div className="px-4 py-2 bg-slate-50 border-b border-slate-200">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-medium text-slate-700">Recently Discovered</span>
                            <span className="text-xs text-above-blue-600">Real-time monitoring</span>
                        </div>
                    </div>
                    
                    <div className="divide-y divide-slate-100">
                        {apps.map((app, i) => (
                            <div key={i} className="p-3 hover:bg-slate-50 transition-colors">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-start gap-3">
                                        {/* Risk indicator */}
                                        <div className="mt-1">
                                            <div className={`w-2 h-2 rounded-full ${
                                                app.risk === 'high' ? 'bg-above-rose-400 animate-pulse' : 
                                                app.risk === 'medium' ? 'bg-above-peach-400' : 
                                                'bg-above-blue-400'
                                            }`} />
                                        </div>
                                        
                                        {/* App info */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-medium text-slate-900">{app.name}</span>
                                                <span className="text-xs text-slate-500">• {app.category}</span>
                                                <span className={`text-xs px-1.5 py-0.5 rounded ${
                                                    app.authRisk === 'high' ? 'bg-above-rose-100 text-above-rose-700' : 
                                                    app.authRisk === 'medium' ? 'bg-above-peach-100 text-above-peach-700' : 
                                                    'bg-above-blue-100 text-above-blue-700'
                                                }`}>
                                                    {app.auth}
                                                </span>
                                            </div>
                                            <div className="mt-1 flex flex-wrap gap-1">
                                                {app.permissions.map((perm, j) => (
                                                    <span key={j} className="text-xs px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded">
                                                        {perm}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Right side info */}
                                    <div className="text-right">
                                        <div className="text-sm font-medium text-slate-700">{app.users} users</div>
                                        <div className="text-xs text-slate-500">{app.lastSeen}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Alert bar */}
                <div className="mt-3 p-2 bg-above-peach-50 border border-above-peach-200 rounded-lg">
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-above-peach-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs text-above-peach-800">New AI tool detected: Perplexity AI - 3 users started using in last hour</span>
                    </div>
                </div>
            </div>
        </UIChrome>
    );
}