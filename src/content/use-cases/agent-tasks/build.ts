import type { Locale } from "next-intl";

import type { GuideCopy, GuideSection } from "@/components/landing/guide-article";
import { type AgentSlug, type AgentTaskSlug, agentSlugs, agentTaskSlugs } from "@/i18n/use-cases";

import type { AgentTaskBundle } from "./types";

// Builds the agent × task pages and the agent hubs from one language's AgentTaskBundle. Every page has the same
// sections, but what's in them (the features, the commands, the FAQ) comes from that pair's own copy.

const fill = (text: string, values: Record<string, string>) =>
  text.replace(/\{(\w+)\}/g, (whole, key: string) => values[key] ?? whole);

/** Fills the placeholders in every string of a copy object, arrays and nested objects included. */
function fillAll<T>(value: T, values: Record<string, string>): T {
  if (typeof value === "string") return fill(value, values) as T;
  if (Array.isArray(value)) return value.map((item) => fillAll(item, values)) as T;
  if (value && typeof value === "object")
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, fillAll(item, values)])) as T;
  return value;
}

export const agentTaskHref = (agent: AgentSlug, task: AgentTaskSlug) => `/use-cases/${agent}/${task}`;
export const agentHubHref = (agent: AgentSlug) => `/use-cases/${agent}`;
const otherAgent = (agent: AgentSlug): AgentSlug => (agent === "claude-code" ? "codex" : "claude-code");

/** /use-cases/<agent>/<task>. */
export function agentTaskPage(b: AgentTaskBundle, agent: AgentSlug, task: AgentTaskSlug): GuideCopy {
  const a = b.agents[agent];
  const t = b.tasks[task];
  const p = b.pairs[agent][task];
  const other = otherAgent(agent);
  const values = {
    agent: a.name,
    task: t.name,
    file: a.file,
    other: b.agents[other].name,
    otherHref: agentTaskHref(other, task),
    role: t.role.label,
    roleHref: t.role.href,
  };
  const ui = fillAll(b.ui, values);
  const cc = b.agents["claude-code"];
  const cx = b.agents.codex;
  const sections: GuideSection[] = [
    { kind: "text", id: "what", title: ui.whatTitle, points: t.jobs },
    { kind: "table", id: "features", title: ui.toolsTitle, headers: ui.toolsHeaders, rows: p.tools },
    {
      kind: "steps",
      id: "how-to",
      title: ui.setupTitle,
      steps: [
        { title: ui.connectTitle, text: p.connect, code: p.connectCode },
        { title: ui.rulesTitle, text: a.rulesText, code: t.brief },
        { title: ui.headlessTitle, text: a.headlessText, code: p.headlessCode },
        { title: ui.scheduleTitle, text: a.scheduleText },
      ],
      source: { label: ui.sourceLabel, href: a.docs },
    },
    { kind: "text", id: "limits", title: ui.limitsTitle, points: [...t.limits, a.safety] },
    {
      kind: "table",
      id: "compare",
      title: ui.compareTitle,
      text: [ui.compareText, ui.compareLink],
      headers: ui.compareHeaders,
      rows: [
        [ui.compareRows.file, cc.compare.file, cx.compare.file],
        [ui.compareRows.connect, cc.compare.connect, cx.compare.connect],
        [ui.compareRows.headless, cc.compare.headless, cx.compare.headless],
        [ui.compareRows.schedule, cc.compare.schedule, cx.compare.schedule],
        [ui.compareRows.builtIn, b.pairs["claude-code"][task].builtIn, b.pairs.codex[task].builtIn],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: ui.crewmarkKicker,
      title: ui.crewmarkTitle,
      text: [ui.crewmarkText],
      steps: [
        { title: ui.roleTitle, text: ui.roleText },
        { title: ui.boardTitle, text: ui.boardText },
        { title: ui.moreTitle, text: fill(t.related, { agent }) },
      ],
    },
  ];
  return {
    meta: { title: p.title, description: p.description },
    breadcrumb: p.breadcrumb,
    parent: { name: ui.hubName, href: agentHubHref(agent) },
    hero: { kicker: ui.kicker, title: p.h1, lead: p.lead, cta: ui.cta, secondary: ui.secondary, secondaryHref: "#how-to" },
    sections,
    howTo: { section: "how-to", name: ui.howToName },
    mid: { title: ui.midTitle, text: ui.midText, button: ui.midButton },
    faq: { title: ui.faqTitle, items: p.faq },
    cta: { title: ui.ctaTitle, text: ui.ctaText, button: ui.ctaButton },
    checked: ui.checked,
    disclaimer: ui.disclaimer,
  };
}

/** /use-cases/<agent>: the agent's jobs, what every one of them needs, and the way to run them as an employee. */
export function agentHubPage(b: AgentTaskBundle, agent: AgentSlug, useCasesName: string): GuideCopy {
  const a = b.agents[agent];
  const other = otherAgent(agent);
  const values = { agent: a.name, other: b.agents[other].name, otherHref: agentHubHref(other) };
  const ui = (text: string) => fill(text, values);
  return {
    meta: a.hub.meta,
    breadcrumb: a.hub.breadcrumb,
    parent: { name: useCasesName, href: "/use-cases" },
    hero: {
      kicker: ui(b.ui.kicker),
      title: a.hub.title,
      lead: a.hub.lead,
      cta: b.ui.cta,
      secondary: ui(b.ui.hubTableTitle),
      secondaryHref: "#jobs",
    },
    sections: [
      {
        kind: "table",
        id: "jobs",
        title: ui(b.ui.hubTableTitle),
        headers: b.ui.hubTableHeaders,
        rows: agentTaskSlugs.map((task) => [
          `[${b.pairs[agent][task].breadcrumb}](${agentTaskHref(agent, task)})`,
          b.tasks[task].summary,
          b.tasks[task].team,
        ]),
      },
      { kind: "text", id: "basics", title: b.ui.hubBasicsTitle, points: a.hub.basics },
      {
        kind: "steps",
        id: "crewmark",
        kicker: b.ui.crewmarkKicker,
        title: b.ui.hubCrewmarkTitle,
        text: [ui(b.ui.hubCrewmarkText)],
        steps: [
          { title: b.ui.hubRolesTitle, text: b.ui.hubRolesText },
          { title: b.ui.hubBoardTitle, text: b.ui.hubBoardText },
          { title: ui(b.ui.hubOtherTitle), text: ui(b.ui.hubOtherText) },
        ],
      },
    ],
    mid: { title: b.ui.hubMidTitle, text: ui(b.ui.midText), button: b.ui.midButton },
    faq: { title: b.ui.faqTitle, items: a.hub.faq },
    cta: { title: ui(b.ui.hubCtaTitle), text: b.ui.ctaText, button: b.ui.ctaButton },
    checked: b.ui.checked,
    disclaimer: b.ui.disclaimer,
  };
}

/** The table added to /use-cases: every task, linked to both agents' pages. */
export function agentIndexSection(b: AgentTaskBundle): GuideSection {
  return {
    kind: "table",
    id: "by-agent",
    title: b.ui.indexTitle,
    text: [b.ui.indexText],
    headers: b.ui.indexHeaders,
    rows: agentTaskSlugs.map((task) => [
      b.tasks[task].label,
      ...agentSlugs.map((agent) => `[${b.pairs[agent][task].breadcrumb}](${agentTaskHref(agent, task)})`),
    ]),
  };
}

/** The section added to an existing task page (/use-cases/pr-review) that links down to both agents' versions. */
export function taskLinksSection(b: AgentTaskBundle, task: AgentTaskSlug): GuideSection {
  return {
    kind: "text",
    id: "by-agent",
    title: b.ui.taskLinksTitle,
    text: [
      fill(b.ui.taskLinksText, {
        cc: `[${b.pairs["claude-code"][task].breadcrumb}](${agentTaskHref("claude-code", task)})`,
        cx: `[${b.pairs.codex[task].breadcrumb}](${agentTaskHref("codex", task)})`,
      }),
    ],
  };
}

export type AgentTaskBundles = Partial<Record<Locale, AgentTaskBundle>>;
