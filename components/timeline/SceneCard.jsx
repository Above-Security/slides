"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GlassPanel from "../primitives/GlassPanel";
import TimePill from "../primitives/TimePill";
import UIChrome from "../primitives/UIChrome";
import NudgeToast from "../nudge/NudgeToast";

function BGScaffold({ kind }) {
  switch (kind) {
    case "hr":
      return (
        <UIChrome title="HR System • Change Log">
          <div className="text-xs text-slate-500 space-y-2">
            <div className="flex items-center justify-between"><span>Subject</span><span className="font-medium text-slate-700">Employee-123</span></div>
            <div className="flex items-center justify-between"><span>Action</span><span className="rounded bg-violet-50 px-2 py-0.5 text-violet-700">Demotion</span></div>
            <div className="flex items-center justify-between"><span>Effective</span><span>Mon 9:12 AM</span></div>
            <div className="mt-2 text-[11px] italic text-slate-400">Context signal • No end-user alert</div>
          </div>
        </UIChrome>
      );
    case "org-crm-deep":
      return (
        <UIChrome title="CRM • Activity (Org View)">
          <div className="text-sm space-y-2">
            <div className="flex items-center justify-between text-[11px] text-slate-500">
              <span>Department</span><span>Finance (subject)</span>
            </div>
            <div className="rounded-lg border border-slate-200 p-3">
              <div className="h-2 w-1/2 rounded bg-slate-100 mb-2" />
              <div className="h-2 w-2/3 rounded bg-slate-100 mb-2" />
              <div className="h-24 rounded bg-slate-50" />
            </div>
            <div className="text-[11px] text-slate-500">42 minutes enumerating opportunity pipeline</div>
          </div>
        </UIChrome>
      );
    case "org-staging":
      return (
        <UIChrome title="CRM • Data Staging (Org View)">
          <div className="text-sm space-y-2">
            <div className="grid grid-cols-3 gap-2">
              <div className="rounded-lg border border-slate-200 p-3 text-center">
                <div className="text-xs text-slate-500">Exports</div>
                <div className="mt-1 text-lg font-semibold">3</div>
              </div>
              <div className="rounded-lg border border-slate-200 p-3 text-center">
                <div className="text-xs text-slate-500">Copy/Paste bursts</div>
                <div className="mt-1 text-lg font-semibold">5</div>
              </div>
              <div className="rounded-lg border border-slate-200 p-3 text-center">
                <div className="text-xs text-slate-500">Objects</div>
                <div className="mt-1 text-xs">Opportunities, Contacts</div>
              </div>
            </div>
            <div className="text-[11px] text-slate-500">Recorded to subject timeline with page context</div>
          </div>
        </UIChrome>
      );
    case "org-oauth-consent":
      return (
        <UIChrome title="Salesforce • OAuth Consent Logged">
          <div className="text-sm space-y-3">
            <div className="rounded-lg border border-slate-200 p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-slate-200" />
                <div>
                  <div className="h-2.5 w-28 rounded bg-slate-100 mb-1" />
                  <div className="text-[11px] text-slate-500">App: Zapier • Source: Salesforce</div>
                </div>
              </div>
              <div className="text-[11px] text-slate-500">Scopes: pipeline.read, contacts.read, offline_access</div>
            </div>
            <div className="text-[11px] text-slate-500">Event recorded with provenance • Sensitive scope</div>
          </div>
        </UIChrome>
      );
    case "org-shadow-saas":
      return (
        <UIChrome title="Shadow SaaS • Notes App (Org View)">
          <div className="text-sm space-y-2">
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-amber-900">Unapproved tool active alongside CRM session.</div>
            <div className="text-[11px] text-slate-500">Linked to subject timeline • Guidance issued</div>
          </div>
        </UIChrome>
      );
    case "insider-start":
      return (
        <UIChrome title="Start of Week (Insider)">
          <div className="text-sm text-slate-500">Working normally. No prompts shown.</div>
        </UIChrome>
      );
    case "insider-crm-deep":
      return (
        <UIChrome title="CRM • Opportunity Pipeline (Insider)">
          <div className="text-sm space-y-3">
            <div className="h-24 rounded border border-slate-200 p-3">
              <div className="h-2 w-2/3 rounded bg-slate-100 mb-1" />
              <div className="h-2 w-1/2 rounded bg-slate-100 mb-1" />
              <div className="h-2 w-1/3 rounded bg-slate-100" />
            </div>
            <NudgeToast body={<span>You’re viewing data <span className="font-medium">outside your usual scope</span>. If legitimate, request approval.</span>} primary="Request approval" secondary="View policy" />
          </div>
        </UIChrome>
      );
    case "insider-staging":
      return (
        <UIChrome title="CRM • Export & Copy (Insider)">
          <div className="text-sm space-y-3">
            <div className="h-20 rounded border border-slate-200 p-3">
              <div className="h-2 w-3/4 rounded bg-slate-100 mb-1" />
              <div className="h-2 w-1/2 rounded bg-slate-100" />
            </div>
            <NudgeToast body={<span>Use the <span className="font-medium">approved export</span> channel. Bulk actions are recorded.</span>} primary="Open approved export" secondary="View policy" />
          </div>
        </UIChrome>
      );
    case "insider-oauth-consent":
      return (
        <UIChrome title="Salesforce • Authorizing Zapier (Insider)">
          <div className="text-sm space-y-3">
            <div className="h-24 rounded border border-slate-200 p-3">
              <div className="h-2 w-2/3 rounded bg-slate-100 mb-1" />
              <div className="h-2 w-1/2 rounded bg-slate-100 mb-1" />
              <div className="h-2 w-1/3 rounded bg-slate-100" />
            </div>
            <NudgeToast body={<span>Review requested permissions. This app touches a <span className="font-medium">sensitive Salesforce scope</span>. Request approval if required.</span>} primary="Request approval" secondary="View policy" />
          </div>
        </UIChrome>
      );
    case "insider-shadow-saas":
      return (
        <UIChrome title="Notes App (Insider)">
          <div className="text-sm space-y-3">
            <div className="h-16 rounded border border-slate-200 p-3">
              <div className="h-2 w-2/3 rounded bg-slate-100 mb-1" />
              <div className="h-2 w-1/3 rounded bg-slate-100" />
            </div>
            <NudgeToast body={<span>Unapproved tool. Please switch to the <span className="font-medium">approved notes app</span> for sensitive work.</span>} primary="Open approved app" secondary="Request exception" />
          </div>
        </UIChrome>
      );
    case "cta-org":
      return (
        <UIChrome title="Above • Case Timeline (Compiled)">
          <div className="space-y-3">
            <div className="h-2 w-56 rounded bg-slate-100" />
            <div className="rounded-xl border border-slate-200 p-3">
              <div className="h-2 w-1/2 rounded bg-slate-100 mb-2" />
              <div className="h-3 w-full rounded bg-gradient-to-r from-violet-400 to-cyan-400" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="rounded-xl border border-slate-200 p-3">
                  <div className="h-2 w-2/3 rounded bg-slate-100 mb-2" />
                  <div className="h-14 rounded bg-slate-50" />
                </div>
              ))}
            </div>
            <div className="text-[11px] text-slate-500">Timestamps • Objects • Scopes • Nudges • Policy refs • Provenance</div>
          </div>
        </UIChrome>
      );
    case "cta-insider":
      return (
        <UIChrome title="Above • Guidance">
          <div className="space-y-3">
            <div className="h-2 w-56 rounded bg-slate-100" />
            <div className="rounded-xl border border-slate-200 p-4">
              <div className="h-2 w-2/3 rounded bg-slate-100 mb-2" />
              <div className="h-2 w-1/2 rounded bg-slate-100 mb-4" />
              <div className="h-10 rounded bg-gradient-to-br from-cyan-50 to-violet-50" />
            </div>
            <div className="flex items-center gap-2 text-[11px] text-slate-500">
              <div className="h-2 w-2 rounded-full bg-cyan-400" />
              <span>Guided at each step • No incident</span>
            </div>
          </div>
        </UIChrome>
      );
    default:
      return null;
  }
}

export default function SceneCard({ time, headline, sub, bgKind, index, total }) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 20%"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.35, 1]);
  const shadow = useTransform(scrollYProgress, [0, 1], [0.1, 0.28]);
  const boxShadow = useTransform(shadow, (s) => `0 24px 72px rgba(2, 6, 23, ${s})`);

  return (
    <motion.div ref={ref} style={{ y, opacity, boxShadow }} className="relative mb-14 rounded-2xl">
      <GlassPanel className="p-5 md:p-6">
        <div className="mb-3 flex items-center justify-between">
          <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Scene {index + 1} / {total}</div>
          <TimePill>{time}</TimePill>
        </div>
        <div className="mb-1 text-lg md:text-xl font-semibold text-slate-900 leading-snug">{headline}</div>
        <div className="mb-4 text-sm md:text-[15px] text-slate-600 leading-relaxed">{sub}</div>
        <div className="mb-4">
          <BGScaffold kind={bgKind} />
        </div>
      </GlassPanel>
    </motion.div>
  );
}
