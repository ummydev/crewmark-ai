import type { GuideCopy } from "@/components/landing/guide-article";

// /use-cases/weekly-competitor-digest (MC-266), for "competitor monitoring", "track competitor pricing changes",
// "competitor price tracking ai", "competitive intelligence ai agent", "claude code competitor analysis". The method:
// snapshot public pages as text in the repository and diff them weekly. The Devin example comes from /blog/devin-alternatives (devin.ai checked 2026-11-10).

const brief = `# Role: competitor watcher
Runs from the recurring issue "Weekly competitor digest", Mondays at 9:00.

Watch list: competitors.md (one line per page: name, URL, what it is).

1. Fetch each page in competitors.md, one at a time.
   Public pages only; never sign in to a competitor's product.
2. Save the readable text to competitors/<name>/<page>.md.
3. Diff against last week's copy (git diff). Ignore dates,
   counters and cookie banners.
4. Write the digest: what changed, with a link and the old and new
   wording for prices, plans and limits.
5. Say what we should do: comparison pages to update, a reply to
   a launch, or nothing.
6. Commit the snapshots, post the digest on the issue, mark it done.`;

const watchlist = `# competitors.md
Acme | https://acme.com/pricing   | pricing
Acme | https://acme.com/changelog | changelog
Acme | https://docs.acme.com/limits | plan limits
Beta | https://beta.dev/pricing   | pricing
Beta | https://github.com/beta-dev/beta/releases | releases`;

export const weeklyCompetitorDigest: GuideCopy = {
  meta: {
    title: "Weekly Competitor Tracking With Claude Code: Prices, Launches",
    description:
      "Have Claude Code or Codex check your competitors' pricing pages, changelogs and docs every week, diff them against last week and tell you what changed and what to do. The role brief and watch list to copy, and how to schedule it.",
  },
  breadcrumb: "Weekly competitor digest",
  parent: { name: "Use cases", href: "/use-cases" },
  hero: {
    kicker: "Use cases · Marketing",
    title: "A weekly competitor digest from an AI employee on Claude Code",
    lead: "Prices change, plans get renamed and features ship quietly, and most teams find out from a customer. An AI employee on your own Claude Code or Codex can read your competitors' public pages every week, keep a copy of each in your repository, compare it with last week's and tell you exactly what changed, with links and the old and new wording, plus what you should do about it. Here's the brief, the watch list format and how to schedule it.",
    cta: "Get started",
    secondary: "Copy the brief",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Why snapshots beat a news feed",
      text: [
        "A pricing change rarely gets a blog post. Saving the text of each page and diffing it catches the quiet ones: a limit lowered, a plan renamed, a free tier removed.",
      ],
      points: [
        "It's exact: the digest quotes the old and new wording, so nobody argues about what changed.",
        "It's cheap: plain text in your repository, versioned by git, no scraping service needed.",
        "It's traceable: the history of every competitor's pricing page is in your git log.",
        "It keeps your pages honest: comparison pages go stale fast. For example, many Devin lists still quoted a $500 plan and per-ACU pricing after devin.ai moved its self-serve plans to quotas and credits, as our [Devin alternatives](/blog/devin-alternatives) page notes.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "How to set up a weekly competitor digest",
      steps: [
        {
          title: "Write the watch list",
          text: "One line per public page: pricing, changelog or releases, plan limits in the docs, and the comparison pages they publish about you.",
          code: watchlist,
        },
        {
          title: "Copy the role brief",
          text: "Into CLAUDE.md for Claude Code or AGENTS.md for Codex. Web fetch is all it needs; for pages that only render in a browser, give it a browser tool.",
          code: brief,
        },
        {
          title: "Schedule it weekly",
          text: "Make it a recurring issue, for example `--repeat \"weekly on mon at 9:00\"`, assigned to your marketing or SEO employee.",
        },
        {
          title: "Act on it",
          text: "When the digest recommends updating a comparison page, the same employee can take that as the next issue and open a pull request.",
        },
      ],
    },
    {
      kind: "table",
      id: "what-to-watch",
      title: "What to watch, and why",
      headers: ["Page", "What a change usually means"],
      rows: [
        ["Pricing", "A new plan, a price change or a free tier going away: update your comparison tables the same week"],
        ["Changelog or releases", "A feature that closes a gap you pitch on, or a new market they're moving into"],
        ["Docs on limits", "Quotas tightened or loosened; often the first sign of a pricing change"],
        ["Their comparison pages", "How they position against you; reply with facts on your own pages"],
        ["Careers page", "Hiring for sales in a region, or for a new product line"],
      ],
    },
    {
      kind: "text",
      id: "rules",
      title: "Ground rules",
      points: [
        "Public pages only. Don't sign in to a competitor's product or use a trial account to collect data.",
        "Fetch one page at a time at a normal pace, once a week; you're reading, not crawling.",
        "Quote, don't guess: if a page is ambiguous, the digest says so and links it.",
        "Keep a person on anything public: changes to your comparison pages go through review.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "Let your marketing employee keep watch",
      text: [
        "The digest is a weekly issue for an AI employee that already owns your comparison pages. Crewmark gives your Claude Code or Codex that job, with working hours and a heartbeat.",
      ],
      steps: [
        {
          title: "Start from a role",
          text: "The [AI marketing agent](/ai-employees/marketing-agent) or the [AI SEO specialist](/ai-employees/seo-specialist).",
        },
        {
          title: "Add the weekly issue",
          text: "It comes back every Monday; the employee posts the digest and opens follow-up issues for pages to update.",
        },
        {
          title: "See more marketing jobs",
          text: "On [Claude Code for marketing](/for/marketing), and the [daily SEO report](/use-cases/daily-seo-report).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Set up a weekly competitor digest on Claude Code or Codex" },
  mid: {
    title: "Want competitor changes in your inbox every Monday?",
    text: "A Crewmark employee on your Claude Code or Codex checks, diffs and reports, then updates your pages.",
    button: "Get started",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Can Claude Code track competitor pricing?",
        a: "Yes. It can fetch public pricing pages, save their text in your repository and diff them against last week's copy, then summarize the changes. Run it weekly with a recurring task or as an AI employee.",
      },
      {
        q: "Is it legal to monitor competitors' websites?",
        a: "Reading public pages is normal competitive research. Respect each site's terms and robots rules, fetch at a normal pace, and don't sign in to their product to collect data.",
      },
      {
        q: "Why not use a website change monitoring tool?",
        a: "You can. The difference is what happens next: the employee explains what the change means for you and can update your own comparison pages in the same week.",
      },
      {
        q: "How many competitors can it watch?",
        a: "As many as your plan's usage allows; a weekly run over a few dozen pages is small. Start with three to five competitors and their pricing, changelog and limits pages.",
      },
    ],
  },
  cta: {
    title: "Know what your competitors changed before your customers tell you.",
    text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
    button: "Get started",
  },
  checked: "Written on November 10, 2026, by Crewmark's SEO employee, which writes and updates our comparison pages.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by Anthropic or OpenAI. Product names are trademarks of their owners.",
};
