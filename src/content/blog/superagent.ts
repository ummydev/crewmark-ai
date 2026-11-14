import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/superagent (MC-134), an overview for "superagent", "superagent ai", "super agent ai", "superagent app",
// "superagent base44", "super agent ai clickup", "superagent github" and "superagent deepseek" (Google autocomplete,
// 2026-11-06). The spike comes from DeepSeek's dsh-superagent prototype (repo created 2026-10-31), which has its own
// post at /blog/deepseek-super-agent; this page answers the broader term and links there. Facts come only from each
// maker's own pages or GitHub (README and API) on 2026-11-06: the DeepSeek repo, docs.base44.com and base44.com/pricing,
// ClickUp's launch post (2025-12-28) and clickup.com/brain/agents, and the superagent-ai repositories. Genspark's and
// Airtable's sites didn't load for us, so the copy names those products without details we couldn't check; for the
// Airtable name it only states that superagent.com redirects to hyperagent.com.

const deepseek = "https://github.com/deepseek-ai/dsh-superagent-prototype";

export const superagent: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "What Is a Superagent? DeepSeek, Base44, ClickUp Compared",
      description:
        "\"Superagent\" names several AI products at once. What a superagent is, why DeepSeek's Super-agent is trending, and how it compares with Base44 Superagents, ClickUp Super Agents, Genspark and the open-source superagent-ai projects.",
    },
    breadcrumb: "What is a superagent",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-06" },
    hero: {
      kicker: "Blog · AI agents",
      title: "What is a superagent? Every \"Superagent\" in 2026, compared",
      lead: "A superagent (also written \"super agent\") is an AI agent that keeps working on its own: it watches for work, takes on tasks without a prompt for each step, runs them in the background, and only comes back to you when it needs a decision. The word is everywhere this month because DeepSeek open-sourced its Super-agent prototype on October 31, 2026, but several products already use the name, from Base44 and ClickUp to an open-source security tool. This guide explains the idea, what each one actually is, and how to pick.",
      cta: "Get started",
      secondary: "Jump to the comparison",
      secondaryHref: "#compare",
    },
    sections: [
      {
        kind: "text",
        title: "Superagent: a definition",
        text: [
          "There's no standard, but every product sold as a superagent shares the same idea: move from an assistant that answers when asked to an agent that owns ongoing work.",
        ],
        points: [
          "It starts work itself: from a schedule, a trigger, a message or an assigned task, not just a chat prompt.",
          "It runs in the background, often several tasks at once, each in its own session.",
          "It remembers context across tasks and connects to the tools where work happens, such as GitHub, Slack, Gmail or a project board.",
          "It asks for human attention only when it needs a decision or approval.",
        ],
      },
      {
        kind: "table",
        id: "compare",
        title: "Every \"Superagent\" compared",
        text: [
          "Facts from each maker's own site or GitHub repository on November 6, 2026.",
        ],
        headers: ["Product", "Made by", "What it is", "How work starts", "Price"],
        rows: [
          ["DeepSeek Super-agent (dsh-superagent)", "DeepSeek's Harness team", "A proactive coding agent for one GitHub repository; a research prototype, not an official product", "Requests on GitHub (and optionally Feishu) from allowed people, or rules the team writes", "Free, MIT; runs on DeepSeek Harness"],
          ["Base44 Superagents", "Base44 (part of Wix)", "No-code agents you describe in plain language, for personal or business tasks", "Schedules, triggers, webhooks, chat apps such as WhatsApp, Telegram and Slack", "Uses Base44 plan credits; Free, then from $16/month billed yearly"],
          ["ClickUp Super Agents", "ClickUp", "AI teammates inside a ClickUp workspace that triage, schedule, report and create items", "@mentions, assigned tasks, DMs, schedules and triggers", "Open to all users; usage billed in AI credits"],
          ["Genspark Super Agent", "Genspark", "A general-purpose agent for research, slides, documents and more", "Your prompt", "See genspark.ai"],
          ["superagent-ai/superagent", "Superagent (open source)", "Started in 2023 as an agent framework; now protects AI apps from prompt injection and data leaks", "Runs in your app's pipeline", "Open source, MIT"],
          ["superagent-ai/grok-cli", "Community, not affiliated with xAI", "An open-source terminal coding agent for the Grok API", "Your prompt; sub-agents and Telegram remote control", "Free, MIT; bring a Grok API key"],
          ["Crewmark", "Crewmark", "AI employees built on Claude Code, Codex, DeepSeek Harness or OpenCode", "A heartbeat during working hours takes the next issue from a board", "Open sign-up; runs on your existing subscription"],
        ],
      },
      {
        kind: "text",
        title: "Why everyone is searching \"superagent\" now: DeepSeek",
        text: [
          "On October 31, 2026 DeepSeek published a research prototype called dsh-superagent and an essay on designing super-agents, and the repository passed roughly 20,000 GitHub stars within a week. It turns DeepSeek Harness into an agent that listens to GitHub, opens its own work items, runs each in a separate session and replies with results such as pull requests, while a web panel shows what needs a human. Its stated aim is to take as little human attention as possible. Read the full breakdown in [DeepSeek Super-Agent explained](/blog/deepseek-super-agent).",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to choose a superagent",
        steps: [
          {
            title: "Start from where the work lives",
            text: "Code in GitHub points to DeepSeek's prototype or an agent built on Claude Code or Codex; a ClickUp workspace to ClickUp Super Agents; personal errands and messaging to Base44.",
          },
          {
            title: "Check how it starts work",
            text: "A true superagent doesn't wait for every prompt. Look for schedules, triggers, assigned tasks or a heartbeat, and for a clear place to see what it's doing.",
          },
          {
            title: "Check what it may do alone",
            text: "Prefer agents that ask before risky actions, such as merging, sending or spending, and that keep a record you can review. DeepSeek's prototype only acts on requests or rules the team wrote.",
          },
          {
            title: "Check whose models and whose bill",
            text: "Workspace products charge credits on top of a plan; open-source tools run on your own API key or subscription. Compare with the [best AI employee platforms](/blog/best-ai-employee-platforms).",
          },
          {
            title: "Prototype or product?",
            text: "DeepSeek says its Super-agent is for reference only. For daily work, pick something maintained, or build on an agent you already trust.",
          },
        ],
        source: { label: "Source: DeepSeek's dsh-superagent repository", href: deepseek },
      },
      {
        kind: "text",
        title: "Superagent vs AI agent vs AI employee",
        text: [
          "An AI agent completes a task you hand it. A superagent adds autonomy: it notices or receives work and keeps going in the background. An AI employee goes one step further and gives that agent a job: a role, a goal measured in numbers, working hours and a board of work, the way you'd onboard a person. See [what an AI employee is](/ai-employees) and [how to make Claude Code proactive](/proactive-claude-code).",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "A superagent with a job description",
        text: [
          "Crewmark turns a Claude Code, Codex, DeepSeek Harness or OpenCode session into an AI employee: it wakes on a heartbeat during working hours, takes the next issue from a shared board, comments as it works and messages you when it needs a decision, on the subscription you already pay for.",
        ],
        steps: [
          {
            title: "Pick the agent you trust",
            text: "Including DeepSeek Harness, the same runtime DeepSeek's Super-agent is built on.",
          },
          {
            title: "Give it a role and a goal",
            text: "A software engineer, an SEO specialist, a growth marketer: each with a number to move.",
          },
          {
            title: "Let the heartbeat do the rest",
            text: "Every 15, 30 or 60 minutes during working hours it takes the next issue; you answer only what needs you.",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Choose a superagent" },
    mid: {
      title: "Want a superagent that works on your repo, on your plan?",
      text: "Crewmark turns Claude Code, Codex or DeepSeek Harness into AI employees that wake on a heartbeat and take the next issue themselves.",
      button: "Get started",
    },
    faq: {
      title: "Superagent FAQ",
      items: [
        {
          q: "What is a superagent?",
          a: "An AI agent that works on its own over time: it starts tasks from triggers, schedules or requests, runs them in the background, and asks a person only when it needs a decision.",
        },
        {
          q: "What is DeepSeek Super-agent?",
          a: "A research prototype DeepSeek open-sourced on October 31, 2026 (dsh-superagent, MIT). It makes DeepSeek Harness act proactively on a GitHub repository. DeepSeek says it's for reference only, not an official product.",
        },
        {
          q: "Is DeepSeek Super-agent free?",
          a: "Yes. The prototype and DeepSeek Harness are open source under the MIT license; you pay for the model usage behind it.",
        },
        {
          q: "What are Base44 Superagents?",
          a: "No-code AI agents in Base44 (part of Wix) that you describe in plain language. They run on schedules and triggers, connect to Gmail, Drive, Notion, GitHub, Slack or MCP servers, and use your Base44 plan's credits.",
        },
        {
          q: "What are ClickUp Super Agents?",
          a: "AI teammates in a ClickUp workspace, launched in December 2025, that you can @mention, assign tasks or put on a schedule. They're open to all users and use AI credits.",
        },
        {
          q: "Is Superagent on GitHub the same as DeepSeek's?",
          a: "No. The superagent-ai organization is unrelated: its superagent repository is now an AI-security tool, and grok-cli is a community coding agent for the Grok API.",
        },
        {
          q: "What's the difference between a superagent and an AI employee?",
          a: "A superagent works autonomously on tasks. An AI employee is an autonomous agent given a role, a goal, working hours and a board, so its work is organized and measured like a teammate's.",
        },
      ],
    },
    cta: {
      title: "Turn your coding agent into a superagent with a job.",
      text: "Crewmark turns Claude Code, Codex, DeepSeek Harness and OpenCode sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Checked against each product's own website or GitHub repository on November 6, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by DeepSeek, Base44, Wix, ClickUp, Genspark or the superagent-ai projects. Product names are trademarks of their owners.",
  },
};
