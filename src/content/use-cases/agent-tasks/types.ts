import type { AgentSlug, AgentTaskSlug } from "@/i18n/use-cases";

// The copy behind the agent × task pages (/use-cases/<agent>/<task>, MC-386) and the two agent hubs
// (/use-cases/claude-code, /use-cases/codex), in one language. build.ts turns it into GuideCopy.
//
// Strings in `ui` may hold placeholders that build.ts fills in: {agent} (Claude Code, Codex), {task} (the task's name),
// {file} (CLAUDE.md, AGENTS.md), {other} (the other agent) and {otherHref}. Text may hold [label](href) links and
// `code`, like any guide copy.

export type FaqItem = { q: string; a: string };

export type AgentTaskUi = {
  kicker: string;
  hubName: string;
  cta: string;
  secondary: string;
  whatTitle: string;
  toolsTitle: string;
  toolsHeaders: [string, string, string];
  setupTitle: string;
  connectTitle: string;
  rulesTitle: string;
  headlessTitle: string;
  scheduleTitle: string;
  sourceLabel: string;
  limitsTitle: string;
  compareTitle: string;
  compareText: string;
  compareLink: string;
  compareHeaders: [string, string, string];
  compareRows: { file: string; connect: string; headless: string; schedule: string; builtIn: string };
  crewmarkKicker: string;
  crewmarkTitle: string;
  crewmarkText: string;
  roleTitle: string;
  roleText: string;
  boardTitle: string;
  boardText: string;
  moreTitle: string;
  midTitle: string;
  midText: string;
  midButton: string;
  faqTitle: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  checked: string;
  disclaimer: string;
  howToName: string;
  /** The agent hubs (/use-cases/claude-code). */
  hubTableTitle: string;
  hubTableHeaders: [string, string, string];
  hubBasicsTitle: string;
  hubCrewmarkTitle: string;
  hubCrewmarkText: string;
  hubRolesTitle: string;
  hubRolesText: string;
  hubBoardTitle: string;
  hubBoardText: string;
  hubOtherTitle: string;
  hubOtherText: string;
  hubMidTitle: string;
  hubCtaTitle: string;
  /** The section added to /use-cases and to the task pages that already exist (/use-cases/pr-review, ...);
   * in taskLinksText, {cc} and {cx} become links to the two agents' pages. */
  indexTitle: string;
  indexText: string;
  indexHeaders: [string, string, string];
  taskLinksTitle: string;
  taskLinksText: string;
};

export type AgentCopy = {
  name: string;
  file: string;
  /** The agent's docs, linked under the setup steps. */
  docs: string;
  rulesText: string;
  headlessText: string;
  scheduleText: string;
  /** One limit that's about the agent rather than the task. */
  safety: string;
  compare: { file: string; connect: string; headless: string; schedule: string };
  hub: {
    meta: { title: string; description: string };
    breadcrumb: string;
    title: string;
    lead: string;
    basics: string[];
    faq: FaqItem[];
  };
};

export type TaskCopy = {
  /** Used inside headings and sentences: "How to set up Claude Code for {task}". */
  name: string;
  /** The task on its own, capitalized, for table cells: "Code review". */
  label: string;
  team: string;
  /** One line for the hub tables. */
  summary: string;
  jobs: string[];
  /** The rules to copy into CLAUDE.md or AGENTS.md. */
  brief: string;
  limits: string[];
  role: { label: string; href: string };
  /** Links to related pages; {agent} becomes the agent's slug (claude-code, codex). */
  related: string;
};

export type PairCopy = {
  title: string;
  description: string;
  breadcrumb: string;
  h1: string;
  lead: string;
  tools: [string, string, string][];
  connect: string;
  connectCode: string;
  headlessCode: string;
  /** The "Built in" cell of the comparison table. */
  builtIn: string;
  faq: FaqItem[];
};

export type AgentTaskBundle = {
  ui: AgentTaskUi;
  agents: Record<AgentSlug, AgentCopy>;
  tasks: Record<AgentTaskSlug, TaskCopy>;
  pairs: Record<AgentSlug, Record<AgentTaskSlug, PairCopy>>;
};
