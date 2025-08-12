"use client";
import React from "react";
import { useRef } from "react";
import { useScroll, useSpring } from "framer-motion";
import SEO from "../components/SEO";
import Logo from "../components/ui/Logo";
import SceneCard from "../components/timeline/SceneCard";
import TimelineBox from "../components/timeline/TimelineBox";
import Connector from "../components/timeline/Connector";
import UnifiedDashboard from "../components/UnifiedDashboard";
import Hero from "../components/Hero";
import UIChrome from "../components/primitives/UIChrome";
import NudgeToast from "../components/nudge/NudgeToast";
import { POLICY_OAUTH } from "../lib/constants";

export default function Home() {
  // Build scenes with explicit component wiring
  const orgScenes = [
    { time: "Mon 9:12 AM", headline: "HR role change ingested.", sub: "Above records demotion as context. Subject sensitivity adjusted; no end-user alert.", bgKind: "hr", Component: SceneCard },
    { time: "Tue 10:41–11:23 AM", headline: "Cross-role deep session in CRM (42m).", sub: "Non-Sales user enumerates opportunities and contacts in sequence. Added as behavior signal.", bgKind: "org-crm-deep", Component: SceneCard },
    { time: "Wed 9:06 AM", headline: "Data staging indicators detected.", sub: "3 exports • 5 copy/paste bursts • High-value objects touched (Opportunities, Contacts).", bgKind: "org-staging", Component: SceneCard },
    { time: "Wed 2:47 PM", headline: "OAuth consent in Salesforce (Zapier).", sub: "Scopes captured: pipeline.read, contacts.read, offline_access. Provenance logged to the same subject timeline.", bgKind: "org-oauth-consent", Component: SceneCard },
    { time: "Thu 4:18 PM", headline: "Shadow SaaS during sensitive workflow.", sub: "Unapproved notes app active while viewing CRM deals. Event linked; guidance issued to switch to approved tool.", bgKind: "org-shadow-saas", Component: SceneCard },
    { time: "Fri 10:04 AM", headline: "Case timeline compiled.", sub: "Week’s context, behaviors, nudges assembled with timestamps, scopes, policy refs, and provenance.", bgKind: "cta-org", Component: SceneCard },
  ];
  const insiderScenes = [
    { time: "Mon 9:12 AM", headline: "Start of week.", sub: "No prompts. Above updates context silently after HR change.", bgKind: "insider-start", Component: SceneCard },
    { time: "Tue 10:41–11:23 AM", headline: "Browsing Sales pipeline (42m).", sub: "Nudge: You’re outside your usual scope. If legitimate, request approval.", bgKind: "insider-crm-deep", Component: SceneCard },
    { time: "Wed 9:06 AM", headline: "Exporting and copying objects.", sub: "Nudge: Use approved export channel; large/bulk actions are recorded.", bgKind: "insider-staging", Component: SceneCard },
    { time: "Wed 2:47 PM", headline: "Authorizing Zapier in Salesforce.", sub: "Nudge at consent: Review scopes; request approval if required. Event recorded.", bgKind: "insider-oauth-consent", Component: SceneCard },
    { time: "Thu 4:18 PM", headline: "Using an unapproved notes app.", sub: "Nudge: Switch to the approved tool for sensitive data.", bgKind: "insider-shadow-saas", Component: SceneCard },
    { time: "Fri 10:04 AM", headline: "Guided, contained.", sub: "No incident. Clear audit trail. User saw rationale at each step.", bgKind: "cta-insider", Component: SceneCard },
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const progressSpring = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.6 });

  return (
    <>
      <SEO 
        title="Above Security - Real-time Insider Threat Protection"
        description="Above Security delivers real-time behavioral analytics and AI-powered insider threat detection. Stop data breaches before they happen with runtime protection for modern enterprises."
        canonicalUrl="https://above.security"
        keywords="insider threat protection, behavioral analytics, AI threat detection, data breach prevention, enterprise security, runtime protection, security monitoring"
      />
      <div ref={containerRef} className="min-h-screen w-full bg-white text-slate-900">
      {/* Logo Header */}
      <div className="w-full py-8 px-6 flex justify-center">
        <Logo size="xlarge" showText={false} />
      </div>
      
      <Hero />

      {/* Dual Timelines */}
      <section id="timeline" className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8">
          <TimelineBox label="Protect the Organization" highlight="Detect intent. Assemble evidence. See the full story." scenes={orgScenes} progress={progressSpring} />
          <Connector progress={progressSpring} />
          <TimelineBox label="Protect the Insider" highlight="Prevent mistakes. Nudge with empathy." scenes={insiderScenes} progress={progressSpring} />
        </div>
      </section>

      {/* Midpoint — consolidated */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="my-12 md:my-16 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)] overflow-hidden">
          <div className="mb-4 md:mb-6 text-center">
            <div className="text-[11px] uppercase tracking-[0.2em] text-slate-400">Midpoint</div>
            <div className="text-2xl md:text-3xl font-semibold">Where the narratives meet</div>
            <p className="mt-2 text-slate-600">A single interface showing behavioral context and real-time guidance.</p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:gap-6">
            <UnifiedDashboard />
          </div>
        </div>
      </section>

      {/* Nudge demo anchor */}
      <section id="nudge" className="mx-auto max-w-6xl px-6 pb-12">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <div className="mb-3 text-lg md:text-xl font-semibold">Try the Nudge</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <UIChrome title="Salesforce • Authorizing Zapier (Demo)">
              <div className="space-y-3">
                <div className="h-20 rounded border border-slate-200 p-3">
                  <div className="h-2 w-2/3 rounded bg-slate-100 mb-1" />
                  <div className="h-2 w-1/2 rounded bg-slate-100" />
                </div>
                <NudgeToast body={<span>You're about to grant <span className="font-medium">sensitive permissions</span>. Please request approval if required.</span>} primary="Request approval" secondary="View policy" />
              </div>
            </UIChrome>
            <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/60">
              <div className="text-sm text-slate-700 font-medium mb-2">What happens</div>
              <ul className="text-sm text-slate-600 space-y-1 list-disc pl-5">
                <li>Above shows in-context guidance without blocking.</li>
                <li>Event is recorded with scopes and provenance.</li>
                <li>Investigation timeline updates in real time.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Access section */}
      <section id="access" className="mx-auto max-w-4xl px-6 pb-24">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-lg font-semibold mb-2">Request Access</div>
          <p className="text-sm text-slate-600 mb-4">We’re currently in private preview. Tell us a bit about your team and we’ll be in touch.</p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input className="rounded-xl border border-slate-200 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-200" placeholder="Work email" />
            <input className="rounded-xl border border-slate-200 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-200" placeholder="Company" />
            <input className="rounded-xl border border-slate-200 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-200" placeholder="# of employees" />
            <select className="rounded-xl border border-slate-200 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-200">
              <option>Role</option>
              <option>Security</option>
              <option>IT</option>
              <option>HR</option>
              <option>Compliance</option>
              <option>Leadership</option>
            </select>
            <textarea className="md:col-span-2 rounded-xl border border-slate-200 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-200" rows={4} placeholder="What problem are you trying to solve?" />
            <div className="md:col-span-2 flex items-center justify-between">
              <div className="text-xs text-slate-500">By submitting, you agree to our privacy policy.</div>
              <button className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white">Request Access</button>
            </div>
          </form>
        </div>
      </section>
      </div>
    </>
  );
}
