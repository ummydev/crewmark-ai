import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/ai-seo-agent, for "ai seo agent", "ai seo agent github", "seo ai agent free", "ai agent seo optimization",
// "ai agents seo workflow", "seo ai agent n8n" and "ai agent seo skills" (Google autocomplete, 2026-11-06). Written as
// a blog post while MC-143 (an /ai-employees/[role] template) waits for Alex's go-ahead. The workflow is the one this
// site's own SEO employee runs on Crewmark (docs/seo/log.md, MC-82): it's a first-hand account, not a claim about
// rankings. Claude Code facts follow the existing posts on skills, hooks, MCP and plan mode; IndexNow facts come from
// indexnow.org. No tool or plugin we haven't checked is named.

const indexnow = "https://www.indexnow.org/documentation";

const skill = `---
description: Find today's SEO topic. Use at the start of each SEO work session.
---

1. Check the changelogs and news of the products our readers use.
2. For each candidate, fetch Google autocomplete suggestions and
   note the long-tail variants people already type.
3. Keep only topics that relate to our product and have no good
   answer on the first page yet.
4. Write the chosen topic, the reason and the rejected ones to
   docs/seo/log.md, then draft the page.`;

const claudeMd = `# SEO rules
- Facts only from official docs; add the date you checked.
- Each page opens with a one-sentence definition, then steps,
  a comparison table and an FAQ.
- One main keyword per URL; check docs/seo/keywords.md first.
- After a deploy: ping IndexNow, request indexing, log it.`;

export const aiSeoAgent: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "AI SEO Agent: Build One With Claude Code | Crewmark AI",
      description:
        "What an AI SEO agent can do, the daily workflow that works, and how to build one with Claude Code or Codex: CLAUDE.md rules, skills, MCP, IndexNow and a schedule. Based on the agent that runs this site's SEO.",
    },
    breadcrumb: "AI SEO agent",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-07" },
    hero: {
      kicker: "Blog · AI employees",
      title: "AI SEO agent: how to build one that works every day",
      lead: "An AI SEO agent is a coding agent, such as Claude Code or Codex, given the job of growing organic traffic: it finds topics people are starting to search for, writes and translates pages, ships them, asks search engines to index them and checks what moved. This site's SEO is run that way, by an AI employee on Crewmark. This guide shows the workflow it follows, the rules and skills that keep it honest, the tools it needs, and how to set up your own.",
      cta: "Get started",
      secondary: "Jump to the setup",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "text",
        title: "What an AI SEO agent can do",
        points: [
          "Find topics: read product changelogs and news, then check Google autocomplete and Google Trends for the questions people already type.",
          "Avoid cannibalizing your own pages: keep a keyword map with one main keyword per URL and check it before writing.",
          "Write pages that answer the question first: a one-sentence definition, steps, a comparison table and an FAQ, which also suits AI assistants that quote pages.",
          "Translate and ship: generate the page in every language you support, test it locally and hand it off for deployment.",
          "Get it indexed: ping IndexNow, resubmit the sitemap and request indexing.",
          "Measure and adjust: read Search Console and analytics, then rewrite titles or add internal links where pages get impressions but no clicks.",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to build an AI SEO agent with Claude Code",
        steps: [
          {
            title: "Write the rules in CLAUDE.md",
            text: "Put the non-negotiables where the agent reads them every session: where facts may come from, how pages are structured, and what to do after each deploy. See the [CLAUDE.md guide](/blog/claude-md).",
            code: claudeMd,
          },
          {
            title: "Turn the daily routine into a skill",
            text: "A skill in `.claude/skills/` holds the step-by-step routine and loads only when it's used. Start each session with it. See [Claude Code skills](/blog/claude-code-skills).",
            code: skill,
          },
          {
            title: "Keep a keyword map and a log in the repository",
            text: "Two Markdown files do a lot: `keywords.md` (keyword → URL → status) stops two pages competing for one query, and `log.md` records what was chosen and why, so the next session continues instead of starting over.",
          },
          {
            title: "Give it the tools it needs",
            text: "Web search and fetch for research, the site's code and a local dev server to test pages, an MCP server or CLI for your analytics, and a script for IndexNow. Prefer CLIs where they exist; they cost fewer tokens. See [Claude Code MCP](/blog/claude-code-mcp).",
          },
          {
            title: "Guard the risky steps",
            text: "Publishing should go through a review or a deploy owner, never straight from the agent. Use permission rules and [hooks](/blog/claude-code-hooks) for anything that must never happen, and keep secrets out of prompts and files.",
          },
          {
            title: "Put it on a schedule",
            text: "SEO rewards steady output, so the agent should start on its own each workday. Use `/loop` or scheduled tasks for a single recurring prompt, or give it a heartbeat and a backlog; see [how to make Claude Code proactive](/proactive-claude-code).",
          },
        ],
        source: { label: "Source: IndexNow documentation", href: indexnow },
      },
      {
        kind: "table",
        title: "A daily AI SEO workflow",
        text: [
          "This is the checklist the AI SEO employee behind this site works through each day, with a written report at the end.",
        ],
        headers: ["Step", "What the agent does", "Output"],
        rows: [
          ["1. Find", "Scan changelogs, vendor blogs, GitHub and news from the last 1–3 days; pull autocomplete and Trends data", "A short list of candidate topics"],
          ["2. Verify", "Check the topic relates to the product, demand is rising, and the first page has no good answer", "One chosen topic, with the reason logged"],
          ["3. Write", "Draft from official sources only, then translate", "One page in every language"],
          ["4. Ship", "Type-check, render locally, open a deploy request", "A page live on the site"],
          ["5. Index", "Ping IndexNow, resubmit the sitemap, request indexing in Search Console and Bing", "Search engines notified"],
          ["6. Report", "Record traffic, the gap to the goal and what was done", "A daily report to the team"],
        ],
      },
      {
        kind: "text",
        title: "Lessons from running one",
        points: [
          "Check demand before writing: a hot word on social media can be a small search term; Google Trends once showed a related term searched about 30 times as often as the one everyone was talking about.",
          "Facts from primary sources only: agent research subagents sometimes misread a page; re-open the official source before publishing anything surprising.",
          "Indexing is the bottleneck for a new site: requesting indexing got new pages into Google within about a day, but daily quotas run out fast.",
          "Many languages multiply pages, not effort: one well-structured English page becomes nine with a translation step.",
          "Steady beats bursts: the goal is a daily rhythm the agent keeps without being asked.",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Hire an AI SEO specialist instead of scripting one",
        text: [
          "Crewmark has an SEO specialist ready to hire: it runs in your Claude Code, Codex, DeepSeek Harness or OpenCode session, wakes on a heartbeat during working hours, takes the next issue from a board and reports back, the way this site's SEO is done.",
        ],
        steps: [
          {
            title: "Pick the SEO specialist role",
            text: "Its skills, goal and schedule come set up; change the goal to your number, such as Search Console clicks per week. See the [AI SEO specialist role](/ai-employees/seo-specialist) for its goals, routine and brief.",
          },
          {
            title: "Connect your project",
            text: "Run the setup command in the site's repository so it can write pages, test them and open deploy requests.",
          },
          {
            title: "Review, don't babysit",
            text: "It comments on its issues and messages you when it needs a decision. Read [what an AI employee is](/ai-employees) and compare [AI employee platforms](/blog/best-ai-employee-platforms).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Build an AI SEO agent with Claude Code" },
    mid: {
      title: "Want the SEO agent without building it?",
      text: "Crewmark's SEO specialist runs on your Claude Code or Codex, wakes on a heartbeat and works through an SEO backlog.",
      button: "Get started",
    },
    faq: {
      title: "AI SEO agent FAQ",
      items: [
        {
          q: "What is an AI SEO agent?",
          a: "An AI agent, usually a coding agent such as Claude Code or Codex, given the ongoing job of growing organic traffic: finding topics, writing and shipping pages, getting them indexed and measuring results.",
        },
        {
          q: "Can an AI agent do SEO on its own?",
          a: "Much of the daily work, yes: research, writing, translation, technical checks and indexing requests. Publishing, accounts and anything irreversible should still go through a person or a deploy owner.",
        },
        {
          q: "Is there a free AI SEO agent?",
          a: "You can build one on an agent you already pay for, such as Claude Code on a Claude plan or Codex on ChatGPT, using free tools like Google autocomplete, Google Trends, Search Console and IndexNow.",
        },
        {
          q: "What tools does an AI SEO agent need?",
          a: "Web search and fetch, access to the site's code and a way to test pages, read access to Search Console and analytics, and a way to notify search engines, such as IndexNow.",
        },
        {
          q: "How do I keep an AI SEO agent from publishing wrong facts?",
          a: "Require official sources and a checked date in its rules, have it re-open sources before publishing surprising claims, and route publishing through review.",
        },
        {
          q: "Will AI-written pages rank?",
          a: "Pages rank on usefulness, not authorship. Pages that answer a real, rising question first, with accurate steps and comparisons, are what an AI SEO agent should produce.",
        },
        {
          q: "Should I use n8n or a coding agent for SEO?",
          a: "Workflow tools suit fixed pipelines; a coding agent suits work that needs judgment and code changes, such as writing pages into a repository and testing them.",
        },
      ],
    },
    cta: {
      title: "Give your site an SEO teammate that never forgets the checklist.",
      text: "Crewmark turns Claude Code, Codex, DeepSeek Harness and OpenCode sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Workflow as run by this site's AI SEO employee; Claude Code and IndexNow details checked against their docs on November 7, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by Anthropic, OpenAI or Google. Product names are trademarks of their owners.",
  },
};
