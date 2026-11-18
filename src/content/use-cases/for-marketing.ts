import type { GuideCopy } from "@/components/landing/guide-article";

// /for/marketing (MC-266), the first audience page, modelled on Composio's "Composio for Marketing & Growth"
// (composio.dev/product/composio-for-marketing-growth, seen 2026-11-10). For "claude code marketing", "claude code
// marketing agent", "claude code marketing team", "claude code marketing plugin", "claude code marketing skills
// (github)", "claude code for marketing", "ai agents for marketing teams", "ai employee for marketing" (Google
// autocomplete, 2026-11-10; docs/seo/audience-pages-keywords-2026-11-10.md). Roles link to /ai-employees/<role>, skills
// to /skills and /skills/seo; the role pages keep "ai seo agent" and "ai marketing agent", this page doesn't repeat them.

const install = `# Crewmark's open-source marketing skills, into the agents you have
npx skills add ummydev/marketing-team-skills

# Or as a Claude Code plugin
/plugin marketplace add ummydev/marketing-team-skills
/plugin install marketing-team-skills`;

const prompts = `Every evening, read Search Console and our analytics for the last
7 days, tell me what's working, do one thing about it, and post
the report on the "Daily SEO report" issue.

Every Monday, check the pricing and changelog pages in
competitors.md, diff them against last week and tell me what
changed and which of our comparison pages to update.

Turn this week's blog post into five LinkedIn and X drafts in our
voice. Put them on the board for review; don't publish.

Every Friday, pull sign-ups and activation from PostHog, compare
with last week, and write three things to try next week.`;

export const forMarketing: GuideCopy = {
  meta: {
    title: "Claude Code for Marketing: AI Employees for Your Team",
    description:
      "How marketing teams use Claude Code and Codex as AI employees: SEO, content, social, competitor tracking and reporting on a schedule. Roles, use cases, prompts and skills to copy, and how to set it up so nothing goes out without you.",
  },
  breadcrumb: "Claude Code for marketing",
  parent: { name: "Use cases", href: "/use-cases" },
  hero: {
    kicker: "For marketing teams",
    title: "Claude Code for marketing: AI employees that do the recurring work",
    lead: "Claude Code and Codex aren't only for engineers. Given a role, the right skills and a schedule, the same agent writes and fixes your site's pages, gets them indexed, drafts posts from what you shipped, watches competitors and reports the numbers every day. Crewmark's own marketing runs this way. This page covers which jobs to hand over, the roles that do them, prompts and skills to copy, and how to set it up so nothing public goes out without a person.",
    cta: "Get started",
    secondary: "See the jobs",
    secondaryHref: "#jobs",
  },
  sections: [
    {
      kind: "table",
      id: "jobs",
      title: "What marketing teams hand to an AI employee",
      text: [
        "The best first jobs repeat every day or week, have a clear finish line and leave the final say with you.",
      ],
      headers: ["Job", "How often", "Who does it", "Guide"],
      rows: [
        ["SEO report: traffic, what's working, the gap to goal", "Daily", "SEO specialist", "[Daily SEO report](/use-cases/daily-seo-report)"],
        ["Competitor pricing, launches and docs changes", "Weekly", "Marketing agent", "[Weekly competitor digest](/use-cases/weekly-competitor-digest)"],
        ["New pages for keywords that are starting to work", "Daily", "SEO specialist", "[AI SEO specialist](/ai-employees/seo-specialist)"],
        ["Comparison and alternatives pages, kept current", "Weekly", "SEO specialist", "[Competitor pages skill](/skills)"],
        ["Social posts drafted from what you shipped", "Daily", "Social media manager", "[AI social media manager](/ai-employees/social-media-manager)"],
        ["Funnel numbers and experiments to try", "Weekly", "Marketing agent", "[AI marketing agent](/ai-employees/marketing-agent)"],
        ["Translations of pages that already get search traffic", "As needed", "SEO specialist", "[Multilingual SEO skill](/skills)"],
      ],
    },
    {
      kind: "steps",
      id: "prompts",
      title: "Prompts to copy",
      text: [
        "Each of these works as a recurring issue for an AI employee, or as a one-off prompt in Claude Code or Codex.",
      ],
      steps: [
        {
          title: "Four jobs, one sentence each",
          text: "Change the names and numbers to yours. The first two have full guides with the role brief: the [daily SEO report](/use-cases/daily-seo-report) and the [weekly competitor digest](/use-cases/weekly-competitor-digest).",
          code: prompts,
        },
      ],
    },
    {
      kind: "steps",
      id: "skills",
      title: "Claude Code marketing skills to install",
      text: [
        "Skills give the agent the steps for each job, so you don't explain them every session.",
      ],
      steps: [
        {
          title: "Marketing Team Skills (Crewmark, open source)",
          text: "The skills our own SEO employee runs every day: trend keywords, keyword research, one page per keyword, competitor pages, multilingual SEO, getting pages indexed, AI search and the daily report, plus short-video skills. See [Marketing Team Skills](/skills).",
          code: install,
        },
        {
          title: "More SEO and marketing skills",
          text: "Corey Haines' marketingskills (seo-audit, ai-seo, programmatic-seo and more), Claude SEO and others are compared in the [best Claude skills for SEO](/skills/seo).",
        },
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "How to set up a marketing team of AI employees",
      steps: [
        {
          title: "Hire one role at a time",
          text: "Start with the job that costs you the most time each week. Each role page has the goals, daily routine and brief: [SEO specialist](/ai-employees/seo-specialist), [marketing agent](/ai-employees/marketing-agent), [social media manager](/ai-employees/social-media-manager).",
        },
        {
          title: "Give it read access and a repository",
          text: "Read-only access to Search Console and analytics, the site's repository and a local preview to test pages. Prefer CLIs to MCP servers where both exist; they use fewer tokens.",
        },
        {
          title: "Put the work on a board",
          text: "Recurring jobs become recurring issues; one-off work becomes issues you assign. Each employee wakes on its heartbeat during working hours and takes the next one.",
        },
        {
          title: "Keep a person on anything public",
          text: "Publishing, posting, spending and anything irreversible go through a person. When an employee needs that, it marks the issue Needs action and asks.",
        },
      ],
    },
    {
      kind: "text",
      id: "results",
      title: "What to expect",
      points: [
        "SEO takes weeks on any site: aim the first goals at pages shipped and impressions, then clicks.",
        "Our own SEO employee ships pages daily; in its first weeks impressions grew from a handful to hundreds a week, mostly from long-tail pages, while broad terms like “ai employee” stayed past position 80.",
        "Drafts are fast, but taste still matters: review social posts and anything in your brand's voice before it goes out.",
        "Usage comes out of your own Claude or ChatGPT plan, so schedule the heavy jobs inside working hours.",
      ],
    },
  ],
  howTo: { section: "how-to", name: "Set up a marketing team of AI employees on Claude Code or Codex" },
  mid: {
    title: "Want these jobs done every day without prompting?",
    text: "Crewmark turns your Claude Code or Codex into marketing employees that wake on a heartbeat and work through a board.",
    button: "Get started",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Can Claude Code do marketing?",
        a: "Yes, for work it can do through files, the web and tools: writing and fixing site pages, keyword research, competitor tracking, reports from analytics, and drafting posts and emails. Publishing and spending should stay with a person.",
      },
      {
        q: "What are the best Claude Code marketing skills?",
        a: "For SEO and growth: Crewmark's open-source Marketing Team Skills and Corey Haines' marketingskills are two of the most complete sets; we compare them and others in the [best Claude skills for SEO](/skills/seo).",
      },
      {
        q: "Is there a Claude Code marketing plugin?",
        a: "Marketing Team Skills installs as a Claude Code plugin with `/plugin marketplace add ummydev/marketing-team-skills`, or into Claude Code, Codex and other agents with `npx skills add`.",
      },
      {
        q: "Can I use Codex for marketing too?",
        a: "Yes. Put the role brief in AGENTS.md instead of CLAUDE.md; the skills and the setup are the same.",
      },
      {
        q: "How is an AI marketing employee different from a marketing automation tool?",
        a: "Automation tools run the steps you build. An AI employee decides what to do next against a goal, does the work in your site and tools, and reports back, on a schedule.",
      },
      {
        q: "Will it post on social media without me?",
        a: "Only if you allow it. We recommend drafts for review: the employee puts them on the board and waits for your OK.",
      },
    ],
  },
  cta: {
    title: "Give your marketing team AI employees that never miss a day.",
    text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
    button: "Get started",
  },
  checked: "Written on November 10, 2026, from how Crewmark's own marketing employees work.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by Anthropic or OpenAI. Claude, Claude Code and Codex are trademarks of their owners.",
};
