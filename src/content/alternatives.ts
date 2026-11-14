import type { Locale } from "next-intl";

import type { GuideCopy } from "@/components/landing/guide-article";

import { alternativesTranslations } from "./i18n";

// Copy for the /alternatives/<product> pages, for "<product> alternative(s)" and "Crewmark vs <product>" searches
// (docs/seo/keywords.md). English is the master here; the other languages are in content/i18n/<locale>/alternatives.ts. Facts about each product come from its own README, docs and pricing
// page as of `checked`; anything those don't state (cloud pricing, KPIs) is left out rather than guessed. Check again
// when editing and update `checked`.

export const ALTERNATIVES = ["paperclip", "multica", "crewai"] as const;
export type Alternative = (typeof ALTERNATIVES)[number];

const others = (except: Alternative) =>
  [
    ["paperclip", "[Paperclip](/alternatives/paperclip): self-hosted, open-source orchestration for a whole company of agents."],
    ["multica", "[Multica](/alternatives/multica): an issue board for coding-agent CLIs, in the cloud or self-hosted."],
    ["crewai", "[CrewAI](/alternatives/crewai): a Python framework for building multi-agent workflows on API keys."],
  ]
    .filter(([slug]) => slug !== except)
    .map(([, text]) => text);

const closing = (product: string) => ({
  title: `Try Crewmark as your ${product} alternative.`,
  text: "Give your Claude Code or Codex agent a role, a goal and working hours, and assign it work on a board.",
  button: "Get started",
});

const mid = {
  title: "Hire an AI employee on the plan you already pay for",
  text: "Crewmark wakes your Claude Code or Codex session on a heartbeat and hands it the next issue from a board.",
  button: "Get started",
};

const disclaimer = (owner: string) =>
  `Crewmark is an independent product, not affiliated with or endorsed by ${owner}. Product names are trademarks of their owners. Facts about other products come from their public documentation and may have changed since.`;

export const alternatives: Record<Alternative, { card: { product: string; tagline: string }; en: GuideCopy }> = {
  paperclip: {
    card: { product: "Paperclip", tagline: "Hosted board  ·  heartbeats  ·  KPIs" },
    en: {
      meta: {
        title: "Paperclip AI Alternative: Crewmark vs Paperclip",
        description:
          "Looking for a Paperclip alternative? Compare Crewmark and Paperclip on hosting, agents, heartbeats, goals and setup, and see which fits your team.",
      },
      breadcrumb: "Paperclip alternative",
      hero: {
        kicker: "Paperclip alternative",
        title: "Crewmark vs Paperclip",
        lead: "Paperclip and Crewmark both turn coding agents like Claude Code and Codex into a team that takes work on a schedule. Paperclip is an open-source server you run yourself to orchestrate a whole company of agents; Crewmark is a hosted board where each agent is an employee with a role, a numeric goal and working hours. Here's how they compare.",
        cta: "Get started",
        secondary: "See the comparison",
        secondaryHref: "#compare",
      },
      sections: [
        {
          kind: "text",
          title: "What Paperclip is",
          text: [
            "Paperclip is an MIT-licensed Node.js server and React UI that “orchestrates a team of AI agents to run a business.” You define a company goal, build an org chart with roles, reporting lines and budgets, and hire agents from adapters for Claude Code, Codex, Cursor, Gemini CLI, OpenCode, OpenClaw and others.",
            "Agents wake for assigned issues, follow-ups or optional timer heartbeats; routines run on cron or webhooks; and budgets, approvals and hiring approvals keep a human on the board. It's self-hosted today, with a cloud version on a waitlist.",
          ],
        },
        {
          kind: "table",
          id: "compare",
          title: "Crewmark vs Paperclip at a glance",
          headers: ["", "Paperclip", "Crewmark"],
          rows: [
            ["Hosting", "Self-hosted (Node.js 24+ or Docker); cloud on a waitlist", "Hosted web app, plus a small daemon on your computer"],
            ["License", "Open source, MIT", "Commercial, open to sign-ups"],
            ["Agents", "Claude Code, Codex, Cursor, Gemini CLI, OpenCode, OpenClaw and more, or API keys", "Claude Code, Codex, DeepSeek Harness and OpenCode"],
            ["Unit of work", "Issues linked to company and project goals", "Issues on a kanban board"],
            ["Structure", "Org chart: roles, reporting lines, budgets", "Employees: role, numeric KPI, working hours"],
            ["When agents wake", "Assigned work, messages, optional timer heartbeats, routines", "A heartbeat every 15, 30 or 60 minutes during working hours"],
            ["Spending controls", "Per-company, per-agent and per-project budgets", "Runs on your existing subscription; sleeps outside working hours"],
            ["When blocked", "Approval workflows and comments", "A direct message to you, then it moves on"],
          ],
        },
        {
          kind: "text",
          title: "Which one should you choose?",
          points: [
            "Choose Paperclip if you want open source you can self-host and modify, need budgets and an org chart for many agents, or use agents Crewmark doesn't support, such as Cursor or Gemini CLI.",
            "Choose Crewmark if you'd rather not run a server, want each agent measured on a number (clicks, sign-ups, merged PRs) and kept to working hours, and want one board where agents message you when they're blocked.",
          ],
        },
        {
          kind: "steps",
          id: "how-to",
          title: "How to move from Paperclip to Crewmark",
          steps: [
            {
              title: "Export what you want to keep",
              text: "Paperclip exports a company as human-readable Markdown: agents with their roles and instructions, skills, and optionally projects, routines and tasks. Secrets, approvals and cost history aren't included.",
            },
            {
              title: "Recreate each agent as an employee",
              text: "In Crewmark, pick the closest role, paste the agent's instructions, and turn its goal into a number it can track, such as “+10% Search Console clicks a month”.",
            },
            {
              title: "Connect the same agent",
              text: "Run the setup command in the Claude Code or Codex conversation you want the employee to live in. It keeps using the subscription you already pay for.",
            },
            {
              title: "Move open tasks to the board",
              text: "Re-create open issues and assign them. Set working hours and a heartbeat, and the employee picks them up on its next wake-up.",
            },
          ],
        },
        { kind: "text", title: "Other alternatives", points: [...others("paperclip"), "New to the idea? Read [what an AI employee is](/ai-employees)."] },
      ],
      howTo: { section: "how-to", name: "Move from Paperclip to Crewmark" },
      mid,
      faq: {
        title: "Paperclip alternative FAQ",
        items: [
          {
            q: "Is Paperclip free?",
            a: "The self-hosted version is free and open source under the MIT license. Paperclip hasn't published pricing for its cloud version, which is on a waitlist.",
          },
          {
            q: "What's the main difference between Crewmark and Paperclip?",
            a: "Paperclip is a self-hosted server for running a company of agents with an org chart and budgets. Crewmark is hosted, and treats each agent as an employee with a numeric goal, working hours and a heartbeat.",
          },
          {
            q: "Do both work with Claude Code and Codex?",
            a: "Yes. Both drive the real Claude Code and Codex. Paperclip also supports Cursor, Gemini CLI and other agents; Crewmark also supports DeepSeek Harness and OpenCode.",
          },
          {
            q: "Can I self-host Crewmark?",
            a: "No. Crewmark is a hosted app; only the daemon that wakes your agents runs on your computer.",
          },
          {
            q: "Paperclip vs OpenClaw or Hermes Agent?",
            a: "Paperclip describes itself as the company and OpenClaw as an employee: OpenClaw and Hermes are personal agents, and Paperclip organizes agents like them into an org chart with goals and budgets. Compare the two agents in [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw).",
          },
        ],
      },
      cta: closing("Paperclip"),
      checked: "Checked against Paperclip's README, docs and website on November 2, 2026.",
      disclaimer: disclaimer("Paperclip Labs"),
    },
  },
  multica: {
    card: { product: "Multica", tagline: "KPIs  ·  working hours  ·  heartbeats" },
    en: {
      meta: {
        title: "Multica Alternative: Crewmark vs Multica | Crewmark AI",
        description:
          "Looking for a Multica alternative? Compare Crewmark and Multica on agents, scheduling, goals, licensing and setup, and see which fits your team.",
      },
      breadcrumb: "Multica alternative",
      hero: {
        kicker: "Multica alternative",
        title: "Crewmark vs Multica",
        lead: "Multica and Crewmark both let you assign issues to coding agents like Claude Code and Codex as if they were teammates. Multica is a workspace for software teams, available in the cloud or self-hosted; Crewmark treats each agent as an employee with a numeric goal, working hours and a heartbeat that wakes it on its own. Here's how they compare.",
        cta: "Get started",
        secondary: "See the comparison",
        secondaryHref: "#compare",
      },
      sections: [
        {
          kind: "text",
          title: "What Multica is",
          text: [
            "Multica is a source-available workspace where “you assign work to AI coding agents the way you'd assign it to a teammate.” It doesn't ship a model: a daemon drives the agent CLIs you already have signed in, 26 of them including Claude Code, Codex, Cursor Agent, Copilot CLI, OpenCode and DeepSeek Harness.",
            "Agents pick up issues from a board, work lands in review, and an inbox pings you when an agent needs a decision. Autopilots create issues on a cron schedule or webhook, squads route work through a leader, and it connects to Slack, Feishu, DingTalk, WeCom and Telegram.",
          ],
        },
        {
          kind: "table",
          id: "compare",
          title: "Crewmark vs Multica at a glance",
          headers: ["", "Multica", "Crewmark"],
          rows: [
            ["Hosting", "Cloud, or self-hosted with Docker or Helm", "Hosted web app, plus a small daemon on your computer"],
            ["License", "Source-available (Apache 2.0 with conditions); hosting it for others needs a commercial license", "Commercial, open to sign-ups"],
            ["Agents", "26 agent CLIs, including Claude Code, Codex, Cursor and DeepSeek Harness", "Claude Code, Codex, DeepSeek Harness and OpenCode"],
            ["Unit of work", "Issues on a board, squads, chat and channels", "Issues on a kanban board"],
            ["Scheduled work", "Autopilots create issues on cron or webhooks", "A heartbeat wakes each employee every 15, 30 or 60 minutes"],
            ["Goals", "None stated per agent", "A numeric KPI per employee, e.g. +10% clicks a month"],
            ["Working hours", "None stated", "Set per employee; it sleeps outside them"],
            ["When blocked", "Inbox and review gates", "A direct message to you, then it moves on"],
          ],
        },
        {
          kind: "text",
          title: "Which one should you choose?",
          points: [
            "Choose Multica if you need self-hosting, want the widest choice of agent CLIs, or work in Feishu, DingTalk or WeCom.",
            "Choose Crewmark if you want agents that start work on their own schedule without you creating issues for them, are measured on a number, and keep to working hours so they don't burn your plan overnight.",
          ],
        },
        {
          kind: "steps",
          id: "how-to",
          title: "How to move from Multica to Crewmark",
          steps: [
            {
              title: "List your agents and open issues",
              text: "Note each agent's instructions and the issues still open. Multica's CLI and API can list them.",
            },
            {
              title: "Recreate each agent as an employee",
              text: "In Crewmark, pick the closest role, paste the instructions, and give it a goal in numbers plus working hours and a heartbeat.",
            },
            {
              title: "Connect the same agent CLI",
              text: "Run the setup command in the Claude Code, Codex, DeepSeek Harness or OpenCode conversation the employee should live in. It keeps using the login you already have.",
            },
            {
              title: "Replace autopilots with heartbeats",
              text: "Instead of a cron job that files issues, put recurring work in the employee's backlog. It checks the board on every heartbeat and takes the next one.",
            },
          ],
        },
        { kind: "text", title: "Other alternatives", points: [...others("multica"), "New to the idea? Read [what an AI employee is](/ai-employees)."] },
      ],
      howTo: { section: "how-to", name: "Move from Multica to Crewmark" },
      mid,
      faq: {
        title: "Multica alternative FAQ",
        items: [
          {
            q: "Is Multica open source?",
            a: "It's source-available: the Multica License is Apache 2.0 with extra conditions. Using it inside your own organization, including self-hosting, is free; offering it as a hosted service to others needs a commercial license.",
          },
          {
            q: "What's the main difference between Crewmark and Multica?",
            a: "Both put coding agents on an issue board. Crewmark adds employee-style structure: a numeric goal, working hours and a heartbeat that wakes each agent on its own to take the next issue.",
          },
          {
            q: "Do both use my existing Claude Code or Codex login?",
            a: "Yes. Both drive the agent CLI you're already signed in to, so the work runs on your existing plan.",
          },
          {
            q: "Can I self-host Crewmark?",
            a: "No. Crewmark is a hosted app; only the daemon that wakes your agents runs on your computer.",
          },
          {
            q: "Is Multica free?",
            a: "Multica is source-available: self-hosting is free for use inside your own organization, and offering it to others needs a commercial license. Its cloud has a free trial; it hasn't published plan prices.",
          },
          {
            q: "Multica vs Linear: what's the difference?",
            a: "Linear is an issue tracker for people. Multica is a board where coding agents are teammates: you assign them issues and they claim, work and report on them through a daemon on your machine or a cloud runtime.",
          },
          {
            q: "Multica vs Hermes Agent?",
            a: "They're different layers. Hermes Agent is a personal agent from Nous Research; Multica can run Hermes, along with Claude Code, Codex, OpenClaw and more than 20 other agent CLIs, as runtimes on its board. See [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw).",
          },
        ],
      },
      cta: closing("Multica"),
      checked: "Checked against Multica's README, docs, license and website on November 2, 2026.",
      disclaimer: disclaimer("Index Labs"),
    },
  },
  crewai: {
    card: { product: "CrewAI", tagline: "No code  ·  your Claude or ChatGPT plan  ·  a board" },
    en: {
      meta: {
        title: "CrewAI Alternative for Non-Coders: Crewmark vs CrewAI",
        description:
          "Looking for a CrewAI alternative? Compare Crewmark and CrewAI on coding, models, pricing and how work is assigned, and see which fits your team.",
      },
      breadcrumb: "CrewAI alternative",
      hero: {
        kicker: "CrewAI alternative",
        title: "Crewmark vs CrewAI",
        lead: "CrewAI is a Python framework for building multi-agent workflows, with a commercial platform on top. Crewmark isn't a framework: it turns the Claude Code or Codex agent you already use into an AI employee and gives it work on a board, with no code to write and no API bill. Here's how they compare.",
        cta: "Get started",
        secondary: "See the comparison",
        secondaryHref: "#compare",
      },
      sections: [
        {
          kind: "text",
          title: "What CrewAI is",
          text: [
            "CrewAI is an MIT-licensed, open-source Python framework “for building production-ready multi-agent workflows.” You define agents with a role, goal, backstory, tools and an LLM, then combine them into crews and event-driven flows. By default agents use the OpenAI API, and other providers and local models are supported.",
            "CrewAI AMP adds a visual editor, an AI copilot, cron scheduling, human-in-the-loop input, tracing and deployment to CrewAI's cloud or your own infrastructure.",
          ],
        },
        {
          kind: "table",
          id: "compare",
          title: "Crewmark vs CrewAI at a glance",
          headers: ["", "CrewAI", "Crewmark"],
          rows: [
            ["What it is", "A Python framework plus a platform for deploying workflows", "A board of AI employees that run in your coding agent"],
            ["Coding needed", "Yes for the framework (Python 3.10–3.13); a visual editor on the platform", "No: pick a role and run one setup command"],
            ["Models", "API keys: OpenAI by default, other providers and local models", "Claude Code, Codex, DeepSeek Harness or OpenCode, on your existing plan"],
            ["Agent abilities", "The tools you define in code", "Everything the coding agent can do: files, terminal, browser, MCP"],
            ["Unit of work", "Tasks inside a crew or flow", "Issues on a kanban board"],
            ["Scheduling", "Cron scheduling on the platform", "A heartbeat every 15, 30 or 60 minutes during working hours"],
            ["Goals", "A goal field in each agent's prompt", "A numeric KPI per employee, tracked over time"],
            ["Pricing", "Free plan with 50 executions a month; Enterprise is custom", "Open sign-up; no extra token cost on top of your plan"],
          ],
        },
        {
          kind: "text",
          title: "Which one should you choose?",
          points: [
            "Choose CrewAI if you're a developer building a multi-agent workflow into your own product, need precise control over each step, or need enterprise deployment with SSO and your own VPC.",
            "Choose Crewmark if you don't want to write or maintain agent code, already pay for Claude Code or Codex, and want agents that do ongoing jobs like SEO or bug fixing and report back on a board.",
          ],
        },
        {
          kind: "steps",
          id: "how-to",
          title: "How to move from CrewAI to Crewmark",
          steps: [
            {
              title: "Map each agent to a role",
              text: "Take each CrewAI agent's role and goal and pick the closest Crewmark role. Its backstory becomes the employee's instructions.",
            },
            {
              title: "Turn the goal into a number",
              text: "CrewAI's goal is a sentence in the prompt. In Crewmark, write what you'd measure instead, such as “10 merged pull requests a week”.",
            },
            {
              title: "Connect a coding agent",
              text: "Run the setup command in Claude Code or Codex. The employee uses that agent's own tools, so most custom tool code isn't needed.",
            },
            {
              title: "Turn tasks into issues",
              text: "Put the work your crew used to run as issues on the board, and set working hours and a heartbeat so the employee picks them up on its own.",
            },
          ],
        },
        { kind: "text", title: "Other alternatives", points: [...others("crewai"), "New to the idea? Read [what an AI employee is](/ai-employees)."] },
      ],
      howTo: { section: "how-to", name: "Move from CrewAI to Crewmark" },
      mid,
      faq: {
        title: "CrewAI alternative FAQ",
        items: [
          {
            q: "Is CrewAI free?",
            a: "The framework is open source under the MIT license, but you pay your model provider for tokens. The hosted platform has a free Basic plan with 50 workflow executions a month and a custom-priced Enterprise plan.",
          },
          {
            q: "Do I need to code to use Crewmark?",
            a: "No. You pick a role, write the goal and run one setup command in Claude Code or Codex. Work is assigned as issues on a board.",
          },
          {
            q: "Can CrewAI run Claude Code or Codex as an agent?",
            a: "CrewAI agents are LLM calls with tools you define, so they use model APIs rather than running inside Claude Code or Codex. Crewmark employees run inside the real coding agent.",
          },
          {
            q: "What's a good open-source CrewAI alternative?",
            a: "If you want open source and agents built on coding CLIs, look at [Paperclip](/alternatives/paperclip). Crewmark isn't open source; it's a hosted app.",
          },
        ],
      },
      cta: closing("CrewAI"),
      checked: "Checked against CrewAI's README, docs and pricing page on November 2, 2026.",
      disclaimer: disclaimer("CrewAI"),
    },
  },
};

/** The page's copy in `locale`: the English master above, or its translation. */
export function alternativeCopy(product: Alternative, locale: Locale): GuideCopy | undefined {
  if (locale === "en") return alternatives[product].en;
  return (alternativesTranslations as Partial<Record<Locale, Record<Alternative, GuideCopy>>>)[locale]?.[product];
}
