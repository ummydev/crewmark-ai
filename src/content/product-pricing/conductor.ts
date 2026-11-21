import type { GuideCopy } from "@/components/landing/guide-article";

// /pricing/conductor, MC-439. For "conductor build pricing" (cost, conductor license price, conductor fees, conductor
// price list) (Google autocomplete, 2026-11-13). Every fact comes from
// docs/compare/facts/{conductor,vibe-kanban,claude-squad,cursor-projects,crewmark}.md (checked 2026-11-13, with a
// source per fact); nothing under a card's "Unverified" is used, so the former Pro, Team and Enterprise prices and
// the terms of the Meta deal aren't given.

export const copy: GuideCopy = {
  meta: {
    title: "Conductor Pricing: Free Mac App, Cloud Plans, Meta Change",
    description:
      "Conductor is free to use and model usage is billed by each agent's provider. Since November 4, 2026 sign-ups are closed and Conductor Cloud is shutting down.",
  },
  breadcrumb: "Conductor pricing",
  parent: { name: "Comparisons", href: "/compare" },
  hero: {
    kicker: "Pricing · Conductor",
    title: "Conductor pricing: a free Mac app, cloud plans, and what changed on November 4, 2026",
    lead: "\"Conductor is free to use.\" It doesn't bill or resell model usage: Claude Code, Codex, OpenCode and Cursor run on your own subscriptions or API keys. Cloud workspaces needed a Pro, Team or Enterprise plan, but no prices are listed today. On November 4, 2026 Conductor announced it is joining Meta and closed new sign-ups and downloads. Here's what you pay, what changed, and how the price compares with Vibe Kanban, Claude Squad, Cursor Projects and Crewmark.",
    cta: "Get started",
    secondary: "What changed",
    secondaryHref: "#change",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Conductor plans and prices",
      text: [
        "From conductor.build and its docs, checked November 13, 2026. The /pricing page now redirects to the home page, and no plan prices are listed anywhere on the site.",
      ],
      headers: ["Plan", "Price", "What's included"],
      rows: [
        [
          "Conductor (Mac app)",
          "Free to use",
          "Claude Code, Codex and OpenCode (bundled) and Cursor Agent side by side, each in its own git worktree; diff review, checks, pull requests and merge",
        ],
        [
          "Pro",
          "No price listed; Pro users keep Pro features at no cost since November 4, 2026",
          "Cloud workspaces and Routines (scheduled or GitHub-triggered agent runs)",
        ],
        ["Team (invite-only)", "No price listed", "Cloud workspaces and Routines"],
        ["Enterprise", "No price listed", "Cloud workspaces"],
        [
          "Model usage",
          "Billed by each agent's provider",
          "Your existing subscriptions (for example Claude Pro or Max, or ChatGPT) or API keys",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "What you actually pay to use Conductor",
      points: [
        "Your agents' providers. Conductor doesn't bill or resell model usage. Each agent is billed through its provider account or API key; Cursor Agent runs through the Cursor API.",
        "A Mac. Conductor is macOS only and \"not available for Windows or Linux yet.\" Agents run directly on your machine, with your user account's permissions and without sandboxing.",
        "Nothing for the app itself. The local app is free to use.",
        "Cloud workspaces needed a Pro, Team or Enterprise plan. Since November 4, 2026, free users can't upgrade, Pro users keep Pro features at no cost, and active subscribers get a refund.",
      ],
    },
    {
      kind: "text",
      id: "change",
      title: "What changed on November 4, 2026",
      text: [
        "Conductor announced that it is joining Meta. The site footer now reads \"Conductor from Meta, © 2026 Meta.\" The dates that matter if you use it or were about to:",
      ],
      points: [
        "November 4, 2026: new sign-ups and downloads closed. Free users can't upgrade, Pro users keep Pro features at no cost, active subscribers get a refund.",
        "November 13, 2026: Conductor Cloud goes read-only.",
        "November 20, 2026: Conductor Cloud shuts down, and deletion of cloud user data begins.",
        "Until early 2027: the local app gets new models and critical bug fixes, then winds down. All user data is deleted when the app shuts down.",
        "If you're looking for something to move to, see [Conductor alternatives](/blog/conductor-alternatives).",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Conductor pricing vs similar tools",
      text: [
        "Prices from each product's own site, checked November 13, 2026. With every one of these, you also pay for the coding agents or models you run, unless a plan below includes them.",
        "Side by side: [Vibe Kanban vs Conductor](/compare/vibe-kanban-vs-conductor), [Claude Squad vs Conductor](/compare/claude-squad-vs-conductor). More options in [Conductor alternatives](/blog/conductor-alternatives).",
      ],
      headers: ["Product", "Price from", "Free option"],
      rows: [
        [
          "Conductor",
          "Free to use; cloud plan prices not listed",
          "Yes, but new sign-ups and downloads are closed since November 4, 2026",
        ],
        [
          "[Vibe Kanban](/compare/vibe-kanban-vs-conductor)",
          "Local app free; bloop's April 10, 2026 shutdown post says subscriptions were terminated",
          "Yes: open source (Apache-2.0), community maintained",
        ],
        [
          "[Claude Squad](/compare/claude-squad-vs-conductor)",
          "Free; no paid plan listed",
          "Yes: open source (AGPL-3.0)",
        ],
        [
          "[Cursor Projects](/personal-agent/cursor-projects)",
          "Cursor Premium $30/month, or $300/year",
          "No: not on Free, Plus ($8/month) or legacy Hobby",
        ],
        [
          "[Crewmark](/pricing)",
          "Free; Pro $5/month and Team $10/month coming soon",
          "Yes: 1 project, up to 3 AI employees, 1 person",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "Conductor runs agents side by side. Crewmark gives them a job and a board.",
      text: [
        "Crewmark is an issue tracker for a team of AI employees. Each employee is a Claude Code or Codex conversation on your own computer, with a role, goals and working hours. It wakes on a heartbeat and takes issues from a shared board. The `crewmark` CLI runs on macOS, Linux and Windows, and the agents use the Claude or ChatGPT subscription you already pay for.",
        "Crewmark's prices: Free at $0 (1 project, up to 3 AI employees, 1 person). Pro at $5/month and Team at $10/month are coming soon. Billing isn't built yet, so every account can use Crewmark free until then. It's open source (GPL-3.0) and can be self-hosted.",
      ],
      steps: [
        {
          title: "Pick a role",
          text: "From the [AI employee roles](/ai-employees), such as a software engineer, with goals in numbers.",
        },
        {
          title: "Put the work on a board",
          text: "Assign issues and make the regular ones repeat; the heartbeat wakes the employee to take the next one.",
        },
        {
          title: "See the plans",
          text: "[Crewmark pricing](/pricing), and what agents do with it in [Claude Code use cases](/use-cases/claude-code) and [Codex use cases](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Moving off Conductor?",
    text: "Crewmark gives your Claude Code or Codex a role, a heartbeat and a shared board, on macOS, Linux or Windows.",
    button: "Get started",
  },
  faq: {
    title: "Conductor pricing FAQ",
    items: [
      {
        q: "Is Conductor free?",
        a: "Yes. \"Conductor is free to use,\" and model usage is billed by each agent's provider. Since November 4, 2026, though, new sign-ups and downloads are closed.",
      },
      {
        q: "How much does Conductor cost?",
        a: "The Mac app is free. Cloud workspaces needed a Pro, Team (invite-only) or Enterprise plan, but no prices for these plans are listed today, and the /pricing page redirects to the home page.",
      },
      {
        q: "Does Conductor charge fees on model usage?",
        a: "No. Conductor doesn't bill or resell model usage. Claude Code, Codex, OpenCode and Cursor Agent use your own subscriptions, such as Claude Pro or Max or ChatGPT, or your API keys.",
      },
      {
        q: "Is Conductor open source, or is there a license to buy?",
        a: "Neither. Conductor isn't open source (no source repository or license is published), and the app is free to use, so there's no license price.",
      },
      {
        q: "What happens to my Conductor Pro subscription?",
        a: "Since November 4, 2026, Pro users keep Pro features at no cost and active subscribers get a refund. Conductor Cloud goes read-only on November 13 and shuts down on November 20, 2026.",
      },
      {
        q: "How long will the Conductor app keep working?",
        a: "The local app gets new models and critical bug fixes until early 2027, then winds down, and all user data is deleted when it shuts down. See [Conductor alternatives](/blog/conductor-alternatives).",
      },
    ],
  },
  cta: {
    title: "Keep your agents working after Conductor.",
    text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
    button: "Get started",
  },
  checked:
    "Checked against conductor.build, its docs, changelog and announcement, and each compared product's own pricing page, on November 13, 2026.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by Conductor, Meta or any other company named on this page. Product names are trademarks of their owners.",
};
