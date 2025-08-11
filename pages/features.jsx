"use client";

import UIChrome from "../components/primitives/UIChrome";
import NudgeToast from "../components/nudge/NudgeToast";
import HeroHeader from "../components/sections/HeroHeader";
import ProductShowcase from "../components/sections/ProductShowcase";
import FeatureGrid from "../components/ui/FeatureGrid";
import FeatureSection from "../components/ui/FeatureSection";
import SectionHeader from "../components/ui/SectionHeader";
import CardGrid from "../components/ui/CardGrid";
import StepsList from "../components/ui/StepsList";
import CTASection from "../components/ui/CTASection";

export default function Features() {
    return (
        <div className="min-h-screen w-full bg-white">
            {/* Hero Header */}
            <HeroHeader
                badge="Platform"
                headline="See intent. Stop risk."
                subheadline="Real-time intelligence on user intent and risky behavior—so you can coach good people before mistakes, catch bad actors before data walks, and hand off clear evidence when it matters."
                ctaText="Get Started"
                ctaHref="#"
            />

            {/* Product Dashboard Showcase */}
            <ProductShowcase
                src="/oauth-greeting.png"
                alt="Above Security Dashboard"
            />

            {/* Key Features Grid */}
            <FeatureGrid
                items={[
                    {
                        title: "No agents",
                        description: "Browser-native deployment works instantly across all web applications."
                    },
                    {
                        title: "No integrations",
                        description: "Zero-touch setup captures everything without APIs or configurations."
                    },
                    {
                        title: "No waiting",
                        description: "Protection starts immediately after deployment—full coverage in minutes."
                    }
                ]}
            />

            {/* Core Capabilities Section */}
            <section className="bg-gradient-to-b from-white via-above-cream/5 to-white py-32">
                <div className="max-w-6xl mx-auto px-6">
                    <SectionHeader
                        label="Core Capabilities"
                        title="Complete insider protection"
                        description="Powered by LLM-based semantic analysis that understands intent, not just clicks."
                    />

                    <div className="space-y-32">
                        {/* Assess Risk */}
                        <FeatureSection
                            badge={{ text: "Assess Risk", className: "bg-above-rose-50 border-above-rose-100 text-above-rose-600" }}
                            title="Quantify intent risk with full session context"
                            description="Above captures live user activity and business context to surface who's at risk, why, and where to act first."
                            points={[
                                { text: "Dynamic intent-risk scoring from real session behavior", dotColor: "bg-above-rose-400" },
                                { text: "Cohort views by team, role, and pattern", dotColor: "bg-above-rose-400" },
                                { text: "Drill-down timelines that explain what happened and why", dotColor: "bg-above-rose-400" }
                            ]}
                            visualComponent={<RiskDashboardDemo />}
                        />

                        {/* Shape Behavior */}
                        <FeatureSection
                            badge={{ text: "Shape Behavior", className: "bg-above-peach-50 border-above-peach-100 text-above-peach-600" }}
                            title="Change outcomes in the moment"
                            description="Coach users exactly when risk appears—right in their workflow."
                            points={[
                                { text: "Real-time, in-session nudges before risky actions complete", dotColor: "bg-above-peach-400" },
                                { text: "Playbooks for Shadow SaaS, OAuth abuse, AI misuse, exfiltration", dotColor: "bg-above-peach-400" },
                                { text: "Precision guidance that reduces friction without blocks", dotColor: "bg-above-peach-400" }
                            ]}
                            visualComponent={<NudgeDemo />}
                            reverse={true}
                        />

                        {/* Ensure Compliance */}
                        <FeatureSection
                            badge={{ text: "Ensure Compliance", className: "bg-above-lavender-50 border-above-lavender-100 text-above-lavender-600" }}
                            title="Prove control with audit-ready evidence"
                            description="Turn live session intelligence into clear, defensible records."
                            points={[
                                { text: "Full session reconstruction and immutable logs", dotColor: "bg-above-lavender-400" },
                                { text: "MFA hygiene checks and policy alignment (HIPAA, ISO, PCI)", dotColor: "bg-above-lavender-400" },
                                { text: "Evidence packs your auditors and investigators can trust", dotColor: "bg-above-lavender-400" }
                            ]}
                            visualComponent={<EvidenceTimelineDemo />}
                        />

                        {/* Sophisticated Phishing & LOTS */}
                        <FeatureSection
                            badge={{ text: "Sophisticated Phishing & LOTS", className: "bg-above-blue-50 border-above-blue-100 text-above-blue-600" }}
                            title="Detect phishing on trusted sites"
                            description="LLM-based semantic analysis catches credential harvesting even on legitimate platforms."
                            points={[
                                { text: "LOTS attacks on Microsoft, Google, Dropbox platforms", dotColor: "bg-above-blue-400" },
                                { text: "Deepfakes, QR codes, and browser-in-browser attacks", dotColor: "bg-above-blue-400" },
                                { text: "Real-time page inspection beyond URL checking", dotColor: "bg-above-blue-400" }
                            ]}
                            visualComponent={<PhishingDetectionDemo />}
                            reverse={true}
                        />
                    </div>
                </div>
            </section>

            {/* Detection Capabilities */}
            <section className="py-32">
                <div className="max-w-6xl mx-auto px-6">
                    <SectionHeader
                        label="Detection Capabilities"
                        title="What Above detects"
                        description="LLM-powered semantic analysis identifies sophisticated threats in real-time."
                    />

                    <CardGrid
                        cards={[
                            {
                                title: "LOTS Phishing",
                                description: "Credential harvesting on legitimate trusted sites",
                                items: ["Forms on microsoft.com", "Deepfakes in meetings", "MFA bypass attempts"]
                            },
                            {
                                title: "Data Exfiltration",
                                description: "Mass downloads and data staging patterns",
                                items: ["Copy/paste bursts", "Cross-app transfers", "Database enumeration"]
                            },
                            {
                                title: "Shadow SaaS",
                                description: "Unsanctioned apps and risky OAuth grants",
                                items: ["Unapproved tools", "Personal accounts", "API connections"]
                            },
                            {
                                title: "AI Misuse",
                                description: "Sensitive data in prompts and outputs",
                                items: ["IP exposure", "Policy violations", "Jailbreak attempts"]
                            },
                            {
                                title: "Insider Threats",
                                description: "Behavioral anomalies and reconnaissance",
                                items: ["Privilege escalation", "After-hours access", "Role switching"]
                            },
                            {
                                title: "Compliance Risk",
                                description: "Regulatory violations and audit gaps",
                                items: ["HIPAA/PII exposure", "Retention breaches", "MFA weakness"]
                            }
                        ]}
                    />
                </div>
            </section>

            {/* How It Works */}
            <section className="bg-slate-50 py-32">
                <div className="max-w-4xl mx-auto px-6">
                    <SectionHeader
                        label="How It Works"
                        title="Four steps to complete protection"
                    />

                    <StepsList
                        steps={[
                            {
                                number: "1",
                                title: "Capture",
                                description: "Browser-native recording of all user activity across SaaS, internal, and custom apps"
                            },
                            {
                                number: "2",
                                title: "Analyze",
                                description: "LLM-based semantic analysis understands intent and context in real-time"
                            },
                            {
                                number: "3",
                                title: "Guide",
                                description: "In-session nudges coach users at the moment of risk without blocking"
                            },
                            {
                                number: "4",
                                title: "Document",
                                description: "Immutable audit logs and evidence-grade timelines for compliance and investigation"
                            }
                        ]}
                    />
                </div>
            </section>

            {/* CTA Footer */}
            <CTASection
                title="See intent. Stop risk. Right now."
                description="Start protecting against insider risk today. No agents. No integrations. No waiting."
                primaryButton={{ text: "Get Started", href: "#" }}
                secondaryButton={{ text: "Book Demo", href: "#" }}
            />
        </div>
    );
}

// ============================================
// DEMO COMPONENTS (Visual Components)
// ============================================

function RiskDashboardDemo() {
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
    return (
        <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600">{team}</span>
            <div className="flex items-center gap-2">
                <div className={`h-2 ${width} bg-gradient-to-r from-above-${color}-200 to-above-${color}-400 rounded`} />
                <span className="text-sm font-medium">{level}</span>
            </div>
        </div>
    );
}

function NudgeDemo() {
    return (
        <NudgeToast
            title="Security Alert"
            subtitle="Sensitive Data Download"
            body="You're downloading customer records containing PII. This action is being logged for compliance. Please ensure you have proper authorization."
            primary="I Understand"
            secondary="View Policy"
        />
    );
}

function EvidenceTimelineDemo() {
    const events = [
        { time: "9:12 AM", event: "HR system change recorded", risk: "info" },
        { time: "10:41 AM", event: "Cross-role access detected", risk: "warning" },
        { time: "11:23 AM", event: "Mass download attempted", risk: "critical" },
        { time: "11:24 AM", event: "Nudge delivered, action prevented", risk: "success" }
    ];

    return (
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-soft-sm">
            <div className="text-sm font-medium text-slate-700 mb-4">Evidence Timeline</div>
            <div className="space-y-3">
                {events.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                        <div className="text-xs text-slate-500 w-16">{item.time}</div>
                        <div className={`w-2 h-2 rounded-full mt-1 ${item.risk === 'critical' ? 'bg-above-rose-400' :
                                item.risk === 'warning' ? 'bg-above-peach-400' :
                                    item.risk === 'success' ? 'bg-above-lavender-400' :
                                        'bg-slate-400'
                            }`} />
                        <div className="flex-1 text-sm text-slate-700">{item.event}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function PhishingDetectionDemo() {
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