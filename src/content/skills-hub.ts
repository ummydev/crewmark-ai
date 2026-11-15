import type { GuideCopy } from "@/components/landing/guide-article";
import { guideLocales } from "@/i18n/guides";

import { skillsHubTranslations } from "./i18n/skills-hub";

// /skills: the landing page for Crewmark's open-source Marketing Team Skills (github.com/ummydev/marketing-team-skills,
// MC-177; Alex approved the route on 2026-11-07) and the hub for the "best Claude skills for <job>" pages (MC-197).
// Targets "claude skills", "claude code skills", "marketing skills for claude" and "seo skills claude". Skill names and
// install commands follow the repository's README.

export const SKILLS_HUB_LOCALES = guideLocales["/skills"];
export type SkillsHubLocale = (typeof SKILLS_HUB_LOCALES)[number];

const repo = "https://github.com/ummydev/marketing-team-skills";

const install = `# Every skill, into the agents you have installed
npx skills add ummydev/marketing-team-skills

# Or as a Claude Code plugin
/plugin marketplace add ummydev/marketing-team-skills
/plugin install marketing-team-skills`;

export const skillsHub: Record<SkillsHubLocale, GuideCopy> = {
  ...skillsHubTranslations,
  en: {
    meta: {
      title: "Claude Skills for Marketing and Design | Crewmark AI",
      description:
        "Free, open-source Claude Code skills from an AI marketing team that uses them every day: trend keywords, SEO pages, comparison pages, indexing, AI search and a daily report, plus the best design skills compared.",
    },
    breadcrumb: "Claude skills",
    hero: {
      kicker: "Claude skills",
      title: "Claude skills from an AI marketing team",
      lead: "Marketing Team Skills is a free, open-source set of Agent Skills for Claude Code, Codex and Cursor: the steps Crewmark's own AI SEO specialist runs every day to find keywords, write and translate pages, get them indexed and report what moved. Each skill is a SKILL.md with commands that work and the mistakes we made. Below: what's inside, how to install it, and our guides to the best skills for each job.",
      cta: "Get started",
      secondary: "Install the skills",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "table",
        id: "skills",
        title: "What's in Marketing Team Skills",
        text: ["Version 0.1 covers on-site SEO. Off-site SEO, UGC video and social outreach come next."],
        headers: ["Skill", "What it does"],
        rows: [
          ["trend-keywords", "Spots terms people just started searching after a launch, shutdown or acquisition, and ships a page the same day"],
          ["keyword-research", "Picks keywords a new site can rank for and keeps a keyword map"],
          ["seo-page", "Writes one page for one keyword: definition first, steps, table, FAQ and sources"],
          ["competitor-pages", "Builds alternatives and vs pages from each product's own docs"],
          ["programmatic-pages", "Templated pages at scale without thin content"],
          ["multilingual-seo", "Ships each page in several languages with hreflang"],
          ["index-push", "Gets pages crawled: IndexNow, Search Console, Bing"],
          ["ai-search", "Makes the site quotable by ChatGPT, Claude and Perplexity"],
          ["seo-daily-report", "Writes the end-of-day report against the goal"],
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to install the skills",
        steps: [
          {
            title: "Add them to your agent",
            text: "The skills CLI installs them into Claude Code, Codex, Cursor and other agents; or use the Claude Code plugin.",
            code: install,
          },
          {
            title: "Copy the role brief",
            text: "Put `roles/seo-specialist/CLAUDE.md` (or `AGENTS.md` for Codex) in your site's repository and fill in the goal, so each session knows the daily routine. See the [AI SEO specialist](/ai-employees/seo-specialist).",
          },
          {
            title: "Run it every day",
            text: "Use `/loop` or scheduled tasks, or run it as an AI employee with a heartbeat; see [how to make Claude Code proactive](/proactive-claude-code).",
          },
        ],
        source: { label: "Source: Marketing Team Skills on GitHub", href: repo },
      },
      {
        kind: "text",
        id: "guides",
        title: "Best Claude skills by job",
        text: [
          "Our comparisons of the skills worth installing for each kind of work, from each project's own repository:",
        ],
        points: [
          "[Best Claude skills for website and UI design](/skills/website-design): Anthropic's frontend-design, Taste Skill, Impeccable, UI UX Pro Max, unslop and more.",
          "For building an SEO agent step by step, read [AI SEO agent: how to build one](/blog/ai-seo-agent); for skills in general, [Claude Code skills](/blog/claude-code-skills).",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Skills for the session, employees for the job",
        text: [
          "Skills make a session good at a task. Crewmark turns Claude Code, Codex, DeepSeek Harness or OpenCode into AI employees with a role, a goal and working hours, waking on a heartbeat to take the next issue from a board, and using the skills you install.",
        ],
        steps: [
          {
            title: "Pick a role",
            text: "An [SEO specialist](/ai-employees/seo-specialist), a [marketing agent](/ai-employees/marketing-agent), a [UI designer](/ai-employees/ui-designer) and more.",
          },
          {
            title: "Connect your project",
            text: "Each employee works in its own session and checkout, on the subscription you already pay for. See [pricing](/pricing).",
          },
          {
            title: "Review, don't babysit",
            text: "It comments as it works and asks before anything on your approval list.",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Install Marketing Team Skills" },
    mid: {
      title: "Want the skills run for you every day?",
      text: "Crewmark's AI employees use these skills on a heartbeat, on the Claude Code or Codex plan you already pay for.",
      button: "Get started",
    },
    faq: {
      title: "Claude skills FAQ",
      items: [
        {
          q: "What are Claude skills?",
          a: "Folders with a SKILL.md file that teach Claude Code, Claude.ai and other agents how to do a specific task. Only a short description loads until the task needs the full skill.",
        },
        {
          q: "Is Marketing Team Skills free?",
          a: "Yes. It's open source under the MIT license on GitHub at ummydev/marketing-team-skills.",
        },
        {
          q: "Does it work with Codex and Cursor?",
          a: "Yes. The skills CLI installs it into Codex, Cursor and other Agent Skills agents, and there's a Codex plugin manifest.",
        },
        {
          q: "How is it different from other marketing skills?",
          a: "It's operational rather than encyclopedic: each skill is the step-by-step routine an AI SEO employee runs on a live site, with scripts and the pitfalls we hit. It pairs well with broad libraries such as coreyhaines31/marketingskills.",
        },
      ],
    },
    cta: {
      title: "Hire the team that wrote the skills.",
      text: "Crewmark turns Claude Code, Codex, DeepSeek Harness and OpenCode sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Skill list as of Marketing Team Skills v0.1, November 8, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by Anthropic or OpenAI. Claude, Claude Code and Codex are trademarks of their owners.",
  },
};
