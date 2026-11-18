import type { GuideCopy } from "@/components/landing/guide-article";

// /skills/seo (MC-197): "best claude skills for seo", "claude code seo skills", "claude seo skill", "seo skills for
// claude code", "geo skills claude" (Google autocomplete, 2026-11-08; every phrasing autocompletes, but the long tail is
// thin and claudemarket.ai, claudeskills.info and several blogs already rank, so the page leans on what only we have:
// our own SEO employee uses these skills on crewmark.ai). Facts come from each project's README or SKILL.md and the
// GitHub API on 2026-11-08; install counts are from the skills.sh search API the same day. Stars are rounded; for
// repositories that hold many skills they belong to the whole repository. Result numbers in READMEs are the authors'
// claims and are labelled so. Anthropic publishes no SEO skill in anthropics/skills (checked 2026-11-08).
// Marketing Team Skills is ours and is labelled as ours.

const corey = "https://github.com/coreyhaines31/marketingskills";

const install = `# Corey Haines' marketingskills: just the SEO skills
npx skills add coreyhaines31/marketingskills --skill seo-audit ai-seo programmatic-seo schema site-architecture

# Claude SEO (inside Claude Code)
/plugin marketplace add AgriciDaniel/claude-seo
/plugin install claude-seo@agricidaniel-claude-seo
/seo setup

# Your real Search Console data (Ian Nuttall's seo, hosted MCP)
claude mcp add --transport http seoskill https://seoskill.dev/mcp

# Addy Osmani's Lighthouse-based SEO skill
npx skills add addyosmani/web-quality-skills --skill seo

# Marketing Team Skills (ours): daily SEO routines
npx skills add ummydev/marketing-team-skills`;

export const seo: GuideCopy = {
  meta: {
    title: "Best Claude Skills for SEO (2026): Audits, GEO, Keywords",
    description:
      "The best Claude Code skills for SEO and AI search, compared from their own repos: Corey Haines' seo-audit and ai-seo, Claude SEO, GEO-SEO Claude, Search Console MCPs, SE Ranking and more, with install counts and commands.",
  },
  breadcrumb: "SEO skills",
  parent: { name: "Claude skills", href: "/skills" },
  hero: {
    kicker: "Claude skills · SEO",
    title: "Best Claude skills for SEO",
    lead: "An SEO skill is a SKILL.md file that teaches Claude Code (or Codex, Cursor and other agents) how to do one part of search work: audit a site, plan pages, write schema, or get cited by AI search. There are two kinds. Method skills are free checklists and playbooks that need no keys. Data skills connect the agent to Search Console, DataForSEO, SE Ranking or Ahrefs through an MCP server, so it works from real numbers instead of guesses. A good setup has one of each. These are the ones worth installing in 2026, from each project's own repository.",
    cta: "Get started",
    secondary: "Compare the skills",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "Quick picks",
      points: [
        "A safe start: Corey Haines' marketingskills. Its seo-audit, ai-seo and programmatic-seo are the three most installed SEO skills on skills.sh.",
        "A full audit in one command: Claude SEO. `/seo audit <url>` sends up to 17 specialist agents across the site and returns a prioritized plan.",
        "AI search (GEO): GEO-SEO Claude for agency-style audits and PDF reports, or GEO Optimizer for a 0–100 readiness score you can run in CI.",
        "Your own numbers: Ian Nuttall's seo, a free Search Console MCP server and CLI; SE Ranking's skills if you already pay for SE Ranking.",
        "Technical SEO by the book: Addy Osmani's seo skill, built on Lighthouse audits and Google's guidelines.",
        "Running SEO every day, not once: Marketing Team Skills (ours) covers picking keywords a new site can win, one page per keyword, index pushes and a daily report.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "SEO skills for Claude Code compared",
      text: [
        "Stars and licenses from the GitHub API on November 8, 2026, rounded. For repositories with many skills, stars are for the whole repository.",
      ],
      headers: ["Skill", "Best for", "Needs", "Stars", "License"],
      rows: [
        ["[marketingskills](https://github.com/coreyhaines31/marketingskills) (Corey Haines): seo-audit, ai-seo, programmatic-seo, schema, site-architecture", "Audits, AI search, pages at scale and schema, as methods", "Nothing; any agent via skills CLI", "~59k (repo)", "MIT"],
        ["[Claude SEO](https://github.com/AgriciDaniel/claude-seo)", "Full-site audits with parallel agents: technical, E-E-A-T, schema, GEO, local", "Claude Code 1.0.33+; `/seo setup` adds its own Python and a headless browser", "~27k", "MIT"],
        ["[GEO-SEO Claude](https://github.com/zubair-trabzada/geo-seo-claude)", "GEO audits, AI crawler checks and client PDF reports", "Python 3.10+, Git; installs with a shell script", "~12k", "MIT"],
        ["[NotFair](https://github.com/nowork-studio/notfair-plugin)", "SEO, GEO and Google Ads from live Search Console, GA4 and Ads data", "Sign-in to NotFair's hosted MCP", "~4.1k", "MIT"],
        ["[web-quality-skills: seo](https://github.com/addyosmani/web-quality-skills) (Addy Osmani)", "Technical and on-page SEO from Lighthouse and Google Search guidelines", "Nothing; Lighthouse or Chrome DevTools MCP for live checks", "~3k (repo)", "MIT"],
        ["[Claude Blog](https://github.com/AgriciDaniel/claude-blog)", "Researched, fact-checked blog posts, scored before delivery", "Python 3.11+", "~2.7k", "MIT"],
        ["[opc-skills: seo-geo](https://github.com/ReScienceLab/opc-skills)", "A quick SEO and GEO check plus schema, for solo founders", "Python 3", "~1.9k (repo)", "Apache 2.0"],
        ["[GEO Optimizer](https://github.com/Auriti-Labs/geo-optimizer-skill)", "A 0–100 AI-readiness score and fixes: robots.txt, llms.txt, JSON-LD", "Python 3.10+ and uv; your own LLM key for citation checks", "~1.3k", "MIT"],
        ["[seo-ops](https://github.com/tigerless-labs/seo-ops)", "26 pass/fail SEO and GEO checks for one URL", "Python 3.9+ on macOS or Linux", "~1k", "Not stated"],
        ["[seo](https://github.com/iannuttall/seo) (Ian Nuttall)", "Your real Search Console, Analytics and Bing data, plus keyword research", "Google sign-in to the hosted MCP; DataForSEO or Ahrefs key for keywords", "~600", "Apache 2.0"],
        ["[GEO Doctor](https://github.com/Fangx-AI/geo-doctor)", "Getting recommended by Chinese AI assistants (Doubao, DeepSeek); Chinese and English", "Node 18+", "~470", "MIT"],
        ["[SE Ranking SEO skills](https://github.com/seranking/seo-skills)", "Keyword clusters, backlink gaps and AI share of voice from SE Ranking data", "SE Ranking account (14-day trial, then paid)", "~200", "MIT"],
        ["[Marketing Team Skills](https://github.com/ummydev/marketing-team-skills) (ours)", "Daily SEO work for a new site: keywords, pages, index pushes, reports; plus short video", "Nothing; any agent via skills CLI", "New (Nov 2026)", "MIT"],
      ],
    },
    {
      kind: "text",
      id: "installs",
      title: "The most installed SEO skills",
      text: [
        "Installs through the skills CLI, from the skills.sh registry on November 8, 2026. Plugins installed with `/plugin install`, such as Claude SEO, mostly don't show up here, so treat these as a floor.",
      ],
      points: [
        "seo-audit (marketingskills): about 249,000",
        "ai-seo (marketingskills): about 160,000",
        "programmatic-seo (marketingskills): about 158,000",
        "site-architecture (marketingskills): about 130,000",
        "schema (marketingskills): about 86,000",
        "seo-geo (opc-skills): about 56,000",
        "seo (Addy Osmani's web-quality-skills): about 54,000",
        "seo (Ian Nuttall): about 24,000",
        "seo (Claude SEO's main skill): about 10,000",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "How to set up Claude Code for SEO",
      steps: [
        {
          title: "Install one method skill",
          text: "Pick marketingskills' SEO skills or Claude SEO, not both: they cover the same audits and will disagree. Add Addy Osmani's skill only if you want Lighthouse-style technical checks on top.",
          code: install,
        },
        {
          title: "Connect real data",
          text: "Without data, an agent's keyword ideas are guesses. Connect Search Console (Ian Nuttall's seo or Claude SEO's `/seo google`), and a keyword source such as DataForSEO, Ahrefs or SE Ranking if you need search volume.",
        },
        {
          title: "Audit, then fix in order",
          text: "Run the audit on your own site, then ask the agent to fix the top items and re-run the same checks. Indexing and ranking changes show up in Search Console days or weeks later, not in the session.",
        },
        {
          title: "Turn it into a routine",
          text: "SEO pays off from doing the same loop every week: pick a keyword, write the page, push it to the index, read the numbers. Write the loop down in CLAUDE.md or a skill, and run it on a schedule. See [how to build an AI SEO agent](/blog/ai-seo-agent).",
        },
      ],
      source: { label: "Source: Corey Haines' marketingskills", href: corey },
    },
    {
      kind: "text",
      id: "ours",
      title: "What our SEO agent uses on crewmark.ai",
      text: [
        "Crewmark's own SEO is done by an AI employee: a Claude Code session with the [SEO specialist role](/ai-employees/seo-specialist), working shifts on a heartbeat. Its repository has 25 of Corey Haines' skills installed, plus our Marketing Team Skills.",
      ],
      points: [
        "On November 7, 2026 it ran marketingskills' audit skills on crewmark.ai. The audit flagged that the site had no public pricing and no privacy page; a [pricing page](/pricing) went live the next day.",
        "Every day it picks keywords from Google autocomplete and Search Console (keyword-research), writes one page per keyword (seo-page), submits new URLs to IndexNow, Bing and Google (index-push) and posts a daily report (seo-daily-report).",
        "The site is new, so we can't show ranking results yet. We'll add Search Console numbers to this page once there are some worth showing.",
      ],
    },
    {
      kind: "text",
      title: "Things to know before installing",
      points: [
        "Data skills send your data somewhere: Ian Nuttall's seo, NotFair and Ryze connect through their hosted MCP servers, and SE Ranking and DataForSEO bill per credit. Large SE Ranking runs can use thousands of credits, per its README.",
        "GEO-SEO Claude and Agentic SEO Skill install with `curl ... | bash`. Download the script and read it before running it, as Claude SEO's README recommends for its own installer.",
        "Don't let a skill buy links. Illyism's seo-skills includes linkdr, which buys backlinks from the author's service; paid links that pass ranking credit break Google's spam policies.",
        "Result numbers in READMEs, such as traffic gains, are the authors' own claims. Claude SEO's report of 10.8K Search Console clicks in 12 weeks is for its own site.",
        "Some free skills sell something next to them: Claude SEO and GEO-SEO Claude promote paid communities, and GEO Optimizer has a Pro plan from $19 a month. The skills themselves are open source.",
        "Anthropic doesn't publish an SEO skill; none of these are official.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "Give the skills an SEO specialist that works every day",
      text: [
        "A skill makes one session better at SEO. Crewmark turns Claude Code or Codex into an AI SEO specialist with a goal in numbers, such as 10% more Search Console clicks a month, working hours and a board of pages to write; it wakes on a heartbeat, takes the next issue and messages you when it needs an approval.",
      ],
      steps: [
        {
          title: "Hire the SEO specialist role",
          text: "Its brief, goal and daily routine come set up; see the [AI SEO specialist](/ai-employees/seo-specialist) and the [AI marketing agent](/ai-employees/marketing-agent).",
        },
        {
          title: "Install your SEO skills in the repository",
          text: "The employee uses the skills in `.claude/skills` like any session does. Start with [Marketing Team Skills](/skills).",
        },
        {
          title: "Review pages and reports, not prompts",
          text: "Approve new pages and read the daily report on the board. Read [what an AI employee is](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Set up Claude Code for SEO with skills" },
  mid: {
    title: "Want an SEO specialist that runs these skills every day?",
    text: "Crewmark's AI SEO specialist works shifts on a heartbeat, writes pages, pushes them to the index and reports every day.",
    button: "Get started",
  },
  faq: {
    title: "Claude SEO skills FAQ",
    items: [
      {
        q: "What is the best Claude skill for SEO?",
        a: "For most sites, Corey Haines' seo-audit, ai-seo and programmatic-seo, the most installed SEO skills on skills.sh. For a full audit with parallel agents, Claude SEO. Add a data source such as a Search Console MCP so the agent works from your real numbers.",
      },
      {
        q: "Is there an official Claude SEO skill?",
        a: "No. Anthropic's skills repository has no SEO skill as of November 2026. Claude SEO is an independent open-source project by Agrici Daniel, not an Anthropic product.",
      },
      {
        q: "What's the difference between Claude SEO and marketingskills?",
        a: "Claude SEO is one plugin built for audits: 26 sub-skills and 19 agents behind a `/seo` command, with its own Python tools and a headless browser. marketingskills is a library of separate method skills across marketing; you install only the SEO ones you need, and they need no setup.",
      },
      {
        q: "Can Claude Code do keyword research?",
        a: "It can pick and group keywords, but it can't see search volume on its own. Connect a data source: Search Console for the queries you already show up for, and DataForSEO, Ahrefs or SE Ranking for volume. Google autocomplete shows what people search for, not how many.",
      },
      {
        q: "What's the difference between an SEO skill and a GEO skill?",
        a: "SEO skills aim at ranking in Google and Bing; GEO (generative engine optimization) skills aim at being cited by ChatGPT, Perplexity, Gemini and Google's AI Overviews, with checks like AI crawler access, llms.txt and quotable answers. Most packs now do both.",
      },
      {
        q: "Do these SEO skills work with Codex and Cursor?",
        a: "Most do. Skills installed with the skills CLI work in Codex, Cursor and dozens of other agents, and MCP-based ones such as Ian Nuttall's seo connect to any agent that supports remote MCP servers.",
      },
    ],
  },
  cta: {
    title: "Put an SEO specialist on your board, with the skills you trust.",
    text: "Crewmark turns Claude Code, Codex, DeepSeek Harness and OpenCode sessions into AI employees with roles, goals, working hours and a heartbeat.",
    button: "Get started",
  },
  checked:
    "Checked against each skill's GitHub repository, the GitHub API and the skills.sh registry on November 8, 2026.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by Anthropic or the authors of the skills listed. Product names are trademarks of their owners.",
};
