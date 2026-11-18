import type { GuideCopy } from "@/components/landing/guide-article";

// /use-cases/daily-seo-report (MC-266), for "daily seo report", "seo daily report", "automate seo report", "claude code
// seo report", "ai agent for seo" (reporting), "search console report automation". The setup is the one Crewmark's own
// SEO employee runs every day on MC-82 (docs/seo/log.md); the example numbers are crewmark.ai's own from the 2026-11-10
// report. The skill is seo-daily-report in github.com/ummydev/marketing-team-skills. Recurring issues are the crewmark
// CLI's `issues update --repeat` (cli help, CLI 0.8.0).

const brief = `# Role: SEO reporter
Runs from the recurring issue "Daily SEO report", every day at 18:30.

1. Search Console, last 7 days: impressions, clicks, average position.
   Read the queries and pages tables. Note queries in the top 10,
   pages whose impressions are rising, and pages with impressions
   but no clicks.
2. Analytics, last 7 days: unique visitors, visitors from search,
   visitors from AI assistants, top landing pages from search.
3. Compare with the weekly goal: 10,000 impressions, 500 clicks,
   2,000 unique visitors.
4. Pick one thing that works and double down on it today
   (a related page, an FAQ, internal links or a translation).
5. Post the report as a comment on the issue, list any decision
   you need from me, then mark the issue done.

Rules
- Read-only access to Search Console and analytics.
- Ignore queries in quotes or with long -site: lists: those are
  rank trackers, not people.`;

const schedule = `# A recurring issue, assigned to your SEO employee (Crewmark CLI)
crewmark issues create --title "Daily SEO report" --assignee "<employee>" \\
  --repeat "daily at 18:30" --timezone America/New_York`;

export const dailySeoReport: GuideCopy = {
  meta: {
    title: "Daily SEO Report With Claude Code: An AI Employee Setup",
    description:
      "Have Claude Code or Codex write your SEO report every day: Search Console and analytics numbers, the gap to your goal, what's working and one thing done about it. The role brief to copy, the access it needs and how to schedule it.",
  },
  breadcrumb: "Daily SEO report",
  parent: { name: "Use cases", href: "/use-cases" },
  hero: {
    kicker: "Use cases · Marketing",
    title: "A daily SEO report written by an AI employee on Claude Code",
    lead: "Every evening, an AI employee running on your own Claude Code or Codex pulls the last seven days from Search Console and your analytics, compares them with your goal, finds the queries and pages that are starting to work, does one thing to push them further and posts the report where your team works. This is the routine Crewmark's own SEO employee runs every day; below are the brief to copy, the access it needs and how to put it on a schedule.",
    cta: "Get started",
    secondary: "Copy the brief",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "What the report covers",
      points: [
        "Search: impressions, clicks and average position for the last seven days, with the queries and pages behind them.",
        "What's working: queries in the top 10, pages whose impressions are rising, and pages with impressions but no clicks, which usually means the title or the content doesn't match the search.",
        "Visitors: unique visitors, visitors from search engines and visitors from AI assistants such as ChatGPT and Perplexity, with the landing pages they came to.",
        "The gap to the goal: this week's numbers against the weekly target.",
        "What it did today, and the decisions it needs from you.",
      ],
    },
    {
      kind: "table",
      id: "example",
      title: "An example: our own report, November 10, 2026",
      text: [
        "This is the top of the report Crewmark's SEO employee posted for crewmark.ai, a site a few weeks old.",
      ],
      headers: ["Metric", "Last 7 days", "Weekly goal"],
      rows: [
        ["Search Console impressions", "537 (up from 309 in the previous report)", "10,000"],
        ["Search Console clicks", "2", "500"],
        ["Unique visitors", "93, of which 16 from search and 0 from AI assistants", "2,000"],
        ["Working", "“base44 superagent” at position 4 with no clicks: it landed on an overview page", "-"],
        ["Done about it", "Wrote a dedicated Base44 Superagent page the same day", "-"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "How to set up a daily SEO report on Claude Code or Codex",
      steps: [
        {
          title: "Give it read-only access to the numbers",
          text: "For Search Console: the Search Console API with a read-only service account, an MCP server, or a browser the agent can drive while you're signed in. For analytics: your tool's CLI, API or MCP server; our employee uses PostHog's CLI. Read access is all it needs.",
        },
        {
          title: "Copy the role brief",
          text: "Put it in CLAUDE.md for Claude Code or AGENTS.md for Codex, and change the goal to yours. The open-source [Marketing Team Skills](/skills) include an seo-daily-report skill with the same steps.",
          code: brief,
        },
        {
          title: "Put it on a schedule",
          text: "Make the report a recurring issue, so it comes back to the employee every day at the same time and you can see whether today's is done.",
          code: schedule,
        },
        {
          title: "Read it where you already work",
          text: "The report lands as a comment on the issue. When it needs something from you, it marks the issue Needs action and asks.",
        },
      ],
    },
    {
      kind: "text",
      id: "double-down",
      title: "Turn the report into action",
      text: [
        "A report that only describes the numbers doesn't move them. The useful part is the rule for what to do next, and it's in the brief:",
      ],
      points: [
        "A query in the top 10 or rising: write the related long tail (the same tool's other uses, “vs”, alternatives, errors, platforms), add an FAQ, link to it from pages that already get visitors, or translate it into a language that already searches for it.",
        "Impressions but no clicks: the page doesn't match the search. Retitle it to the query people use, or write a page for that query.",
        "Head terms stuck past position 50: stop spending time on them; a new site wins long tails first.",
        "Write the decision and the result in a log, so tomorrow's report can check whether it worked.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "Hire the SEO employee that writes it",
      text: [
        "The report is one part of an SEO specialist's day. Crewmark turns your Claude Code or Codex into that employee, with a role, a goal in numbers, working hours and a heartbeat.",
      ],
      steps: [
        {
          title: "Start from the role",
          text: "The [AI SEO specialist](/ai-employees/seo-specialist) comes with its goals, daily routine and brief.",
        },
        {
          title: "Add the report as a recurring issue",
          text: "It wakes on its heartbeat, sees the report is due and posts it.",
        },
        {
          title: "See the rest of marketing",
          text: "More jobs for marketing teams are on [Claude Code for marketing](/for/marketing); the next use case is a [weekly competitor digest](/use-cases/weekly-competitor-digest).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Set up a daily SEO report on Claude Code or Codex" },
  mid: {
    title: "Want the report, and the work behind it, every day?",
    text: "Crewmark's SEO specialist runs on your Claude Code or Codex and posts its report on a schedule.",
    button: "Get started",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Can Claude Code read Google Search Console?",
        a: "Yes, through the Search Console API with a service account, an MCP server for Search Console, or a browser it can drive while you're signed in. Give it read-only access.",
      },
      {
        q: "How do I schedule a daily SEO report with Claude Code?",
        a: "Claude Code doesn't start on its own; something has to wake it. Use a recurring task or a heartbeat, see [how to make Claude Code proactive](/proactive-claude-code), or run it as a Crewmark employee with a recurring issue.",
      },
      {
        q: "What should a daily SEO report include?",
        a: "Seven-day impressions, clicks and position with the queries and pages behind them; what's in the top 10 or rising; visitors from search and AI assistants; the gap to the goal; what was done today; and decisions needed.",
      },
      {
        q: "Does it work with Codex too?",
        a: "Yes. Put the same brief in AGENTS.md; the access it needs is the same.",
      },
      {
        q: "Why look at seven days instead of one?",
        a: "Search Console data lags by a day or two and single days are noisy. Seven days shows the trend; the daily report just reads it every day.",
      },
    ],
  },
  cta: {
    title: "Get the SEO report every day, and the work it asks for.",
    text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
    button: "Get started",
  },
  checked: "Written on November 10, 2026, from the routine Crewmark's own SEO employee runs every day.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by Anthropic, OpenAI, Google or PostHog. Product names are trademarks of their owners.",
};
