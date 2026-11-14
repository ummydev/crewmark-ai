import type { GuideCopy, GuideStep } from "@/components/landing/guide-article";

// Role pages (/ai-employees/<slug>) share one layout: what the role does, the goals to give it, its daily routine,
// how to set it up on Claude Code or Codex (with a role brief to copy), related pages, Crewmark, FAQ. Each language
// has one RoleTemplate for the shared wording and a RoleData per role; roleCopy() puts them together.

export type RoleData = {
  /** The role's name as people search for it, e.g. "AI SEO specialist". */
  name: string;
  meta: { title: string; description: string };
  breadcrumb: string;
  title: string;
  lead: string;
  does: { text: string; points: string[] };
  /** Rows of [goal, how it's measured, a good first target]. */
  goals: string[][];
  routine: string[];
  /** The role brief to copy into CLAUDE.md or AGENTS.md. */
  brief: string;
  /** What the employee needs access to, for the "tools" setup step. */
  tools: string;
  /** What it must ask a person before doing, for the "guardrails" setup step. */
  approvals: string;
  /** A paragraph linking related guides. */
  related: string;
  mid: { title: string; text: string };
  faq: { q: string; a: string }[];
  /** The closing call to action's title. */
  cta: string;
};

export type RoleTemplate = {
  kicker: string;
  parent: string;
  cta: string;
  secondary: string;
  doesTitle: (name: string) => string;
  goalsTitle: string;
  goalsText: string;
  goalsHeaders: [string, string, string];
  routineTitle: string;
  howToTitle: (name: string) => string;
  howToName: (name: string) => string;
  briefStep: { title: string; text: string };
  toolsTitle: string;
  approvalsTitle: string;
  scheduleStep: GuideStep;
  relatedTitle: string;
  crewmark: { kicker: string; title: (name: string) => string; text: (name: string) => string; steps: GuideStep[] };
  faqTitle: (name: string) => string;
  ctaText: string;
  checked: string;
  disclaimer: string;
};

export function roleCopy(t: RoleTemplate, r: RoleData): GuideCopy {
  return {
    meta: r.meta,
    breadcrumb: r.breadcrumb,
    parent: { name: t.parent, href: "/ai-employees" },
    hero: { kicker: t.kicker, title: r.title, lead: r.lead, cta: t.cta, secondary: t.secondary, secondaryHref: "#how-to" },
    sections: [
      { kind: "text", title: t.doesTitle(r.name), text: [r.does.text], points: r.does.points },
      { kind: "table", id: "goals", title: t.goalsTitle, text: [t.goalsText], headers: t.goalsHeaders, rows: r.goals },
      { kind: "text", title: t.routineTitle, points: r.routine },
      {
        kind: "steps",
        id: "how-to",
        title: t.howToTitle(r.name),
        steps: [
          { ...t.briefStep, code: r.brief },
          { title: t.toolsTitle, text: r.tools },
          { title: t.approvalsTitle, text: r.approvals },
          t.scheduleStep,
        ],
      },
      { kind: "text", title: t.relatedTitle, text: [r.related] },
      {
        kind: "steps",
        id: "crewmark",
        kicker: t.crewmark.kicker,
        title: t.crewmark.title(r.name),
        text: [t.crewmark.text(r.name)],
        steps: t.crewmark.steps,
      },
    ],
    howTo: { section: "how-to", name: t.howToName(r.name) },
    mid: { ...r.mid, button: t.cta },
    faq: { title: t.faqTitle(r.name), items: r.faq },
    cta: { title: r.cta, text: t.ctaText, button: t.cta },
    checked: t.checked,
    disclaimer: t.disclaimer,
  };
}
