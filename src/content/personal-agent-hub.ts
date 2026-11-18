import type { GuideCopy } from "@/components/landing/guide-article";
import { guideLocales } from "@/i18n/guides";

import { copy as zh } from "./i18n/zh/personal-agent-hub";

// /personal-agent: the hub for personal AI agents (Alex asked for the section on 2026-11-10), for "personal agent"
// (Bing: about 3.2k impressions in three months), "personal ai agent", "personal agents", "best personal ai agent",
// "what is a personal agent", "personal agent meaning", "personal ai agent for work / free / finance" and the
// head-to-head searches ("grok bot vs muse vs dots", "muse vs claude"). Each agent's facts come from its maker's own
// pages, checked 2026-11-10: Meta's newsroom and Help Center (Muse), xAI's Grok Bot docs and Cursor's plans page,
// OpenAI's dots announcement and help (via /blog/chatgpt-dots), Anthropic's Duet pages (via /blog/claude-duet), Manus's
// Manus 2.0 post (Cue), Microsoft's Scout post (renamed Autopilot), Google's Gemini Help Center (Spark, now "tasks"),
// and the OpenClaw and Hermes Agent repositories (via /blog/hermes-agent-vs-openclaw). Keyword research:
// docs/seo/personal-agent-keywords-2026-11-10.md.

export const PERSONAL_AGENT_HUB_LOCALES = guideLocales["/personal-agent"];
export type PersonalAgentHubLocale = (typeof PERSONAL_AGENT_HUB_LOCALES)[number];

export const personalAgentHub: Record<PersonalAgentHubLocale, GuideCopy> = {
  zh,
  en: {
    meta: {
      title: "Personal AI Agents 2026: Muse, Grok Bot, Dots Compared",
      description:
        "What a personal AI agent is and the ones people are searching for, compared from each maker's own pages: Meta Muse, Grok Bot, ChatGPT dots, Claude Duet, Manus Cue, Gemini tasks, Microsoft Autopilot, OpenClaw and Hermes Agent.",
    },
    breadcrumb: "Personal agents",
    hero: {
      kicker: "Personal agents",
      title: "Personal AI agents in 2026: what they are and which one to use",
      lead: "A personal agent is an AI that works for you, not just with you: it has its own computer or browser, signs into your apps, remembers your preferences, keeps working after you close the app and comes back when it needs a decision. In the last few months Meta, xAI, OpenAI, Anthropic, Google, Microsoft and Manus have all shipped one. This page explains what they have in common, compares them from each maker's own pages, and links to our guides for each.",
      cta: "Get started",
      secondary: "Compare them",
      secondaryHref: "#compare",
    },
    sections: [
      {
        kind: "text",
        title: "What a personal agent is",
        text: [
          "A chatbot answers and waits. A personal agent takes a goal, plans the steps and does them across the web and your apps, often while you're away. The new ones share five traits.",
        ],
        points: [
          "Its own computer: a cloud machine or browser where it clicks, types and fills out forms like a person.",
          "Your apps: email, calendar, files and chat, with the access you choose.",
          "Memory: it learns your preferences and doesn't need the same instructions twice.",
          "Always on: scheduled and recurring tasks, and work that continues after you close the app.",
          "Approvals: it stops for your OK before sending, buying or anything else you mark as sensitive.",
        ],
      },
      {
        kind: "table",
        id: "compare",
        title: "Personal AI agents compared",
        text: ["From each maker's own pages on November 10, 2026. Availability is changing quickly; check before you sign up."],
        headers: ["Agent", "Made by", "Built for", "Who can get it", "Cheapest way in"],
        rows: [
          ["[Meta Muse](/personal-agent/meta-muse)", "Meta", "Everyday tasks and life admin", "US, 18+, Meta account", "Free with a weekly limit; Power $20/mo"],
          ["[Grok Bot](/personal-agent/grok-bot)", "xAI", "Work: a team of Bots in your apps", "X Premium, Super, Ultra; SuperGrok; Cursor plans", "Free trial credit"],
          ["[ChatGPT dots](/blog/chatgpt-dots)", "OpenAI", "Long-running goals inside ChatGPT", "ChatGPT Pro and Business Premium", "ChatGPT Pro"],
          ["[Claude Duet](/blog/claude-duet)", "Anthropic", "A proactive Claude that comes to you", "Claude Pro, Max, Ultra in the US, by waitlist", "Claude Pro"],
          ["[Base44 Superagent](/personal-agent/base44-superagent)", "Base44", "A personal agent in WhatsApp, Telegram, Slack or the browser, with workflows", "Anyone with a Base44 account", "Base44 plan credits; Starter $16/mo on annual billing"],
          ["[Manus Cue](/personal-agent/manus-cue)", "Manus", "Agents with their own email, phone, wallet and computer", "Early access by invite", "Free during early access"],
          ["[Gemini tasks (Spark)](/personal-agent/gemini-spark)", "Google", "Errands, research and files from Gemini", "Google AI Pro or Ultra, outside the EEA, UK and Switzerland", "Google AI Pro"],
          ["Microsoft Autopilot (Scout)", "Microsoft", "Work in Microsoft 365 and Teams", "Frontier organizations, with a GitHub Copilot license", "Through your organization"],
          ["[OpenClaw](/blog/openclaw-alternatives)", "Open source", "A self-hosted assistant in your chat apps", "Anyone; runs on your computer", "Free; you pay the model"],
          ["[Hermes Agent](/blog/hermes-agent-vs-openclaw)", "Nous Research, open source", "A self-hosted agent that learns skills", "Anyone; runs on your computer", "Free; you pay the model"],
        ],
      },
      {
        kind: "text",
        id: "which",
        title: "Which personal agent should you use?",
        points: [
          "You want help with life admin and don't want to pay yet: Meta Muse, free in the US. See [Meta Muse use cases](/personal-agent/meta-muse-use-cases).",
          "You want a team of agents on work tasks, on a schedule: Grok Bot, with routines that run on a schedule or a trigger. See [Grok Bot routines](/personal-agent/grok-bot-routines).",
          "You already pay for ChatGPT Pro: ChatGPT dots. For Claude Pro and up: Claude Duet, by waitlist.",
          "You live in Google's apps: Gemini tasks with Google AI Pro. In Microsoft 365 at work: Autopilot, if your organization is in Frontier.",
          "You want an agent that can make calls and pay within a budget: Manus Cue, in early access. See [Manus Cue](/personal-agent/manus-cue).",
          "You want it on your own machine with your own model: OpenClaw or Hermes Agent, both open source.",
        ],
      },
      {
        kind: "text",
        id: "safety",
        title: "Before you hand over your accounts",
        points: [
          "Connect only what a task needs, and prefer read-only access where it's offered (Muse lets you choose read-only email).",
          "Keep approvals on for sending, buying and anything public. Muse and Gemini ask before sending or buying by default; on Grok Bot, where Auto Review lets most actions go ahead, add Ask first rules.",
          "Know who else can use a login: Grok Bots share one computer, so a site one Bot signs into is open to the others.",
          "Check the usage limits: agents that work in the background spend tokens while you're away.",
          "Read the activity log now and then; makers warn these agents can be wrong or take unexpected actions.",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Personal agents for your life, AI employees for your work",
        text: [
          "Personal agents are built around one person's errands. Crewmark is built around a job: it turns your own Claude Code or Codex into an AI employee with a role, a goal in numbers, working hours and a heartbeat, which takes the next issue from a shared board, comments as it works and messages you when it's blocked.",
        ],
        steps: [
          {
            title: "Pick a role",
            text: "Start from an [AI employee role](/ai-employees): software engineer, SEO specialist, marketing agent, social media manager or designer.",
          },
          {
            title: "Run it on the plan you have",
            text: "It works inside your own Claude Code or Codex, so there's no separate token bill. See [pricing](/pricing).",
          },
          {
            title: "Let it keep going",
            text: "It wakes every 15 to 240 minutes during the hours you set. See [how to run Claude Code 24/7](/blog/run-claude-code-24-7).",
          },
        ],
      },
    ],
    mid: {
      title: "Want an agent with a job, not just errands?",
      text: "Crewmark employees work through a shared board on a heartbeat, on the Claude Code or Codex plan you already pay for.",
      button: "Get started",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "What is a personal AI agent?",
          a: "An AI that does tasks for you rather than only answering: it has its own computer or browser, uses your apps, remembers your preferences, runs scheduled and background work, and asks before sensitive actions.",
        },
        {
          q: "What is the best personal AI agent in 2026?",
          a: "It depends on where you already are. Meta Muse is the easiest to try (free in the US), Grok Bot has the most detailed routines for work, ChatGPT dots and Claude Duet come with Pro plans, and OpenClaw or Hermes Agent suit people who want to self-host.",
        },
        {
          q: "Is there a free personal AI agent?",
          a: "Meta Muse is free in the US with a weekly limit, Grok Bot has a free trial credit, Manus Cue is free during early access, and OpenClaw and Hermes Agent are free open-source software (you pay for the model).",
        },
        {
          q: "Grok Bot vs Muse vs Dots: what's the difference?",
          a: "Muse is Meta's agent for everyday tasks, free to start. Grok Bot is xAI's agent for work, with several Bots and routines. ChatGPT dots are OpenAI's always-on agents inside ChatGPT, on Pro and Business Premium.",
        },
        {
          q: "Is a personal agent the same as an AI employee?",
          a: "Not quite. A personal agent works for one person on their errands. An AI employee, in Crewmark's sense, has a role and a goal, works through a team's board on a schedule, and reports to the people it works with.",
        },
        {
          q: "Are personal AI agents safe to use?",
          a: "They're built with approvals, isolated machines and activity logs, but makers say they can make mistakes. Connect only what you need, keep approvals on for sending and buying, and review what they did.",
        },
      ],
    },
    cta: {
      title: "Errands for your personal agent. A job for an AI employee.",
      text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Checked against each maker's announcements, documentation, help center and pricing pages on November 10, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by Meta, xAI, OpenAI, Anthropic, Manus, Google, Microsoft, OpenClaw or Nous Research. Product names are trademarks of their owners.",
  },
};
