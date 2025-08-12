"use client";

import SEO from "../components/SEO";
import Logo from "../components/ui/Logo";
import EmailGate from "../components/ui/EmailGate";
import HeroHeader from "../components/sections/HeroHeader";
import ProductShowcase from "../components/sections/ProductShowcase";
import FeatureGrid from "../components/ui/FeatureGrid";
import FeatureSection from "../components/ui/FeatureSection";
import SectionHeader from "../components/ui/SectionHeader";
import CardGrid from "../components/ui/CardGrid";
import StepsList from "../components/ui/StepsList";
import RiskDashboardDemo from "../components/demos/RiskDashboardDemo";
import NudgeDemo from "../components/demos/NudgeDemo";
import EvidenceTimelineDemo from "../components/demos/EvidenceTimelineDemo";
import PhishingDetectionDemo from "../components/demos/PhishingDetectionDemo";
import ApplicationDiscoveryDemo from "../components/demos/ApplicationDiscoveryDemo";

export default function Features() {
    return (
        <>
            <SEO 
                title="Platform Features - Runtime Insider Protection"
                description="Discover Above Security's comprehensive platform features: real-time threat detection, behavioral analytics, AI-powered phishing detection, and complete application discovery with authentication analysis."
                canonicalUrl="https://above.security/features"
                keywords="security platform features, runtime protection, threat detection, behavioral analytics, phishing detection, application discovery, insider threat prevention"
                breadcrumbs={[
                    { name: "Home", url: "/" },
                    { name: "Features", url: "/features" }
                ]}
            />
        <EmailGate
            title="Access Above Insider Protection Platform"
            subtitle="Get exclusive access to our comprehensive security features and see how Above stops risk before it happens."
        >
            <div className="min-h-screen w-full bg-white">
                {/* Logo Header */}
                <div className="w-full py-8 px-6 flex justify-center">
                    <Logo size="xlarge" showText={false} />
                </div>
                
                {/* Hero Header */}
                <HeroHeader
                    badge="Platform"
                    headline="Discover everything. See intent. Stop risk."
                    subheadline={
                        <>
                            Real-time intelligence on{' '}
                            <span className="bg-gradient-to-r from-above-rose-300 to-above-peach-300 bg-no-repeat bg-bottom"
                                style={{ backgroundSize: '100% 2px', paddingBottom: '2px' }}>
                                user intent
                            </span> and{' '}
                            <span className="bg-gradient-to-r from-above-peach-300 to-above-lavender-300 bg-no-repeat bg-bottom"
                                style={{ backgroundSize: '100% 2px', paddingBottom: '2px' }}>
                                risky behavior
                            </span>—so you can coach good people before mistakes, catch bad actors before data walks, and hand off{' '}
                            <span className="bg-gradient-to-r from-above-lavender-300 to-above-blue-300 bg-no-repeat bg-bottom"
                                style={{ backgroundSize: '100% 2px', paddingBottom: '2px' }}>
                                clear evidence
                            </span> when it matters.
                        </>
                    }
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

                            {/* Sophisticated Phishing & LOTS */}
                            <FeatureSection
                                badge={{ text: "Sophisticated Phishing & LOTS", className: "bg-above-blue-50 border-above-blue-100 text-above-blue-600" }}
                                title="Detect phishing on trusted sites"
                                description="LLM-based semantic analysis catches credential harvesting even on legitimate platforms."
                                points={[
                                    { text: "LOTS attacks on Microsoft, Google, Dropbox platforms", dotColor: "bg-above-blue-400" },
                                    { text: "DocuSign phishing, QR codes, and browser-in-browser attacks", dotColor: "bg-above-blue-400" },
                                    { text: "Real-time page inspection beyond URL checking", dotColor: "bg-above-blue-400" }
                                ]}
                                visualComponent={<PhishingDetectionDemo />}
                            />

                            {/* Ensure Compliance */}
                            <FeatureSection
                                badge={{ text: "Ensure Compliance", className: "bg-above-lavender-50 border-above-lavender-100 text-above-lavender-600" }}
                                title="Prove control with audit-ready evidence"
                                description="Turn live session intelligence into clear, defensible records."
                                points={[
                                    { text: "Full session reconstruction and immutable logs", dotColor: "bg-above-lavender-400" },
                                    { text: "MFA hygiene checks and policy alignment (HIPAA, ISO, PCI)", dotColor: "bg-above-lavender-400" },
                                    { text: "Evidence packs your auditors, HR teams, and investigators can trust", dotColor: "bg-above-lavender-400" }
                                ]}
                                visualComponent={<EvidenceTimelineDemo />}
                                reverse={true}
                            />
                        </div>
                    </div>
                </section>

                {/* Application Discovery Section */}
                <section className="py-32 bg-gradient-to-b from-white via-gray-50/30 to-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <SectionHeader
                            label="Application Discovery"
                            title="Complete Application Discovery"
                            description="Discover and monitor all SaaS, AI tools, and internal applications"
                        />

                        <div className="mt-16">
                            <FeatureSection
                                badge={{ text: "Discovery & Monitoring", className: "bg-above-blue-50 border-above-blue-100 text-above-blue-600" }}
                                title="See everything your employees are using"
                                description="Get instant visibility into every application across your organization, from approved tools to shadow IT."
                                points={[
                                    { text: "Real-time discovery of shadow IT and approved applications", dotColor: "bg-above-blue-400" },
                                    { text: "AI tool detection including ChatGPT, Claude, and browser extensions", dotColor: "bg-above-blue-400" },
                                    { text: "OAuth risk analysis with semantic permission understanding", dotColor: "bg-above-blue-400" },
                                    { text: "Authentication method analysis and risk categorization", dotColor: "bg-above-blue-400" },
                                    { text: "Integration with identity providers and access management", dotColor: "bg-above-blue-400" }
                                ]}
                                visualComponent={<ApplicationDiscoveryDemo />}
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
                                    description: "Advanced phishing that bypasses traditional defenses",
                                    items: ["Phishing hosted on trusted services", "Forms on microsoft.com", "DocuSign phishing attacks"]
                                },
                                {
                                    title: "Data Exfiltration",
                                    description: "Data staging or hoarding pre-departure",
                                    items: ["Mass downloads before leaving", "Cross-app data transfers", "Unauthorized data collection"]
                                },
                                {
                                    title: "Shadow IT & OAuth",
                                    description: "Unauthorized applications and permissions",
                                    items: ["Downloading risky software", "Authorizing unsanctioned third-party apps", "OAuth over-permissioned consents"]
                                },
                                {
                                    title: "Shadow AI Tools",
                                    description: "AI tools circumventing approved workflows",
                                    items: ["Unapproved AI usage", "Sensitive data in prompts", "Policy violations"]
                                },
                                {
                                    title: "Access Anomalies",
                                    description: "Cross-role access and credential misuse",
                                    items: ["Payroll accessing sales data", "Sharing floating credentials", "Circumventing monitoring controls"]
                                },
                                {
                                    title: "Productivity & Compliance",
                                    description: "Work hour misuse and security gaps",
                                    items: ["Excessive personal use during work", "Operating without MFA", "High-risk web browsing"]
                                }
                            ]}
                        />
                    </div>
                </section>

                {/* How It Works */}
                <section className="py-32">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="bg-slate-50 rounded-2xl p-12">
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
                    </div>
                </section>

                {/* Product Demo Section */}
                <section className="py-32 bg-gradient-to-b from-white via-slate-50/30 to-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <SectionHeader
                            label="Product Demo"
                            title="See Above in action"
                            description="Watch how Above detects intent, prevents risk, and provides clear evidence in real-time."
                        />

                        <div className="mt-16">
                            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
                                <div className="aspect-video relative">
                                    <iframe
                                        src="https://drive.google.com/file/d/1qvDH0bVcrLj55O5U914vcG8zHvH8nirW/preview?hd=1&vq=hd1080&embedded=true&controls=1"
                                        allow="autoplay"
                                        allowFullScreen
                                        className="w-full h-full border-0"
                                        aria-label="Above Security Product Demonstration Video"
                                        title="Above Security Product Demo"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </EmailGate>
        </>
    );
}

