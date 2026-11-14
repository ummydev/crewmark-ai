import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/chatgpt-dots, the first trending-term post (MC-82), for "chatgpt dots", "chatgpt dots how to use", "chatgpt dots
// price", "chatgpt dots plus plan" and "openai dots vs grok bot". Facts come from OpenAI's announcement
// (openai.com/index/introducing-dots), help center articles on dots, the ChatGPT release notes and the pricing page, and
// xAI's Grok Bot announcement, as of `checked`. OpenAI hasn't published usage terms after the launch month or prices for
// extra dots, so the copy says so. Meta's Muse agent couldn't be confirmed on a Meta page, so it isn't compared.

const announcement = "https://openai.com/index/introducing-dots/";

export const chatgptDots: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "ChatGPT Dots: How to Use Them and Price | Crewmark AI",
      description:
        "ChatGPT dots are OpenAI's always-on agents. What they do, which plans get them, how to set one up, the custom rules, the limits, and how they compare.",
    },
    breadcrumb: "ChatGPT dots",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-02" },
    hero: {
      kicker: "Blog · ChatGPT",
      title: "ChatGPT dots: what they are and how to use them",
      lead: "Dots are always-on agents inside ChatGPT, announced at OpenAI DevDay on September 29, 2026. Each dot has its own cloud computer and browser, connects to your apps, learns from feedback and keeps working toward your goals while you're away. This guide covers who can get one, what it costs, how to set it up, the rules that keep it in check, and what it doesn't do yet.",
      cta: "Get started",
      secondary: "Jump to setup",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "text",
        title: "What ChatGPT dots are",
        text: [
          "OpenAI calls dots “remarkably capable, always-on agents built to handle everything.” A dot runs on GPT-6 Astra and works on its own cloud computer with its own browser, using the apps you connect. You talk to it in ChatGPT on desktop, web or mobile, in Slack and Teams, by voice in the mobile app, and in a US beta for Pro, by text message.",
        ],
        points: [
          "It works while you don't: with read-only access to your connected apps, it looks for ways to help, and it runs scheduled reminders and recurring checks.",
          "It runs several projects at once and checks in with progress, questions and decisions that need you.",
          "It remembers: it starts with your ChatGPT memories and learns your preferences as you work together.",
          "It writes code by delegating: a dot can start Codex tasks, which count toward your Codex limits.",
          "You can watch it: open the dot's computer at any time, take over, and hand control back.",
        ],
      },
      {
        kind: "table",
        title: "Who can use dots, and what they cost",
        text: [
          "Your first dot is included in the plans below at no extra cost. During the first month after launch, dots usage didn't count toward plan allowances; OpenAI says it will share per-plan usage terms after that, and hadn't published them when we checked. Buying more dots or more work per dot is announced, without prices yet.",
        ],
        headers: ["Plan", "Dots", "Notes"],
        rows: [
          ["Free, Go, Plus, Business", "No", "Not included"],
          ["Pro (Pro 100, Pro 200, Pro 500)", "Yes, rolling out", "Not in the EEA, Switzerland or the UK"],
          ["Business Premium", "Yes, rolling out", "Supported regions, subject to workspace eligibility"],
          ["Enterprise, Edu, Healthcare", "Beta", "Off until a workspace admin turns it on"],
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to set up your first dot",
        text: ["You need to be 18 or older. The rollout is gradual, so access can take a few days to reach your account."],
        steps: [
          {
            title: "Open dots",
            text: "Go to chatgpt.com/dots, or open dots in the ChatGPT desktop app, on desktop web, or in the mobile app on iOS or Android.",
          },
          {
            title: "Create and name your dot",
            text: "Follow the onboarding: give it a name, which becomes its handle (@yourname-agentname), and pick an avatar. You can change both later from its profile.",
          },
          {
            title: "Connect your apps",
            text: "In the dot's profile, open Customize, then Plugins, choose an app and review the permissions it asks for. Connect Slack from desktop. A dot can use a personal email account you connect, but can't have its own email address yet.",
          },
          {
            title: "Set custom rules",
            text: "Under Customize, Custom rules, choose for each kind of action whether the dot should take action without asking, take action only if pre-approved in your prompt, ask before taking action, or hand off to you.",
          },
          {
            title: "Give it a goal",
            text: "Describe the outcome you want and share context; attach files with +, and reply in the thread to steer it. Ask for reminders or recurring checks, and manage them under Scheduled.",
          },
          {
            title: "Follow, pause or delete it",
            text: "The profile shows work In progress, Scheduled and Completed. Pause the dot from the ••• menu when you need to. Deleting it removes its memories and scheduled tasks and can't be undone.",
          },
        ],
        source: { label: "Source: OpenAI's announcement of dots", href: announcement },
      },
      {
        kind: "text",
        title: "Safety: what a dot will and won't do on its own",
        points: [
          "Changing a password or sending money always requires you to take over and do it yourself.",
          "Deleting data permanently or installing software can need your approval each time.",
          "Auto-review checks risky actions, such as who an email goes to, against your instructions and rules, and your custom rules can't switch it off.",
          "A dot can buy with a card saved on a merchant's site, but only with your approval each time or a specific approval in advance.",
          "Your own computer stays separate unless you connect it with Allow access in the ChatGPT desktop app; it's off by default.",
          "OpenAI says its prompt-injection protections reduce the risk but don't eliminate it, and that some completed actions can't be undone.",
        ],
      },
      {
        kind: "text",
        title: "What dots don't do yet",
        points: [
          "You get one primary dot; teams of dots are described as a future direction.",
          "A dot has no email address of its own, can't call you, and doesn't work on mobile web.",
          "There are no webhooks or event triggers to start it; it works from your messages, its schedules and its own read-only research.",
          "You can't view, edit or delete individual memories; deleting the dot is the only way to clear what it learned.",
          "Plus users don't get dots, and Pro users in the EEA, Switzerland and the UK don't either.",
        ],
      },
      {
        kind: "table",
        title: "ChatGPT dots vs Grok Bot vs Crewmark",
        text: [
          "xAI announced Grok Bot in August 2026 as “your team of always-on agents” with their own computer. Crewmark takes a different route: instead of a new agent in someone's cloud, it turns the coding agent you already use into an employee on your own machine.",
        ],
        headers: ["", "ChatGPT dots", "Grok Bot", "Crewmark"],
        rows: [
          ["Runs on", "OpenAI's cloud computer", "Its own computer, per xAI", "Your computer, inside Claude Code or Codex"],
          ["Model", "GPT-6 Astra", "Grok", "Whatever your Claude Code or Codex uses"],
          ["How many", "One primary dot", "Several, which can message each other", "One employee per role, as many as you set up"],
          ["Starts work", "Your messages, schedules, its own research", "Learns routines by watching you work", "A heartbeat every 15–60 minutes in working hours"],
          ["Work queue", "Conversation threads and Scheduled", "Not documented", "Issues on a kanban board"],
          ["Goal", "Goals you describe", "Not documented", "A KPI in numbers, such as +10% clicks a month"],
          ["Plans", "Pro, Business Premium, Enterprise beta", "SuperGrok and Cursor plans, beta", "Open sign-up; runs on your existing Claude or ChatGPT plan"],
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Already pay for Claude Code or Codex? Make it always-on",
        text: [
          "If your always-on work is in a code base or a website, you don't need a new agent. Crewmark gives the Claude Code or Codex session you already use a role, a goal and working hours, and wakes it on a heartbeat to take the next issue from a board.",
        ],
        steps: [
          {
            title: "Turn a session into an employee",
            text: "Pick a role such as SEO specialist or software engineer, write its goal as a number, and run the setup command in Claude Code or Codex.",
          },
          {
            title: "Let the heartbeat keep it working",
            text: "During its working hours the employee wakes every 15, 30 or 60 minutes in the same conversation, so it remembers what it did; see [how to make Claude Code proactive](/proactive-claude-code).",
          },
          {
            title: "Assign issues and answer its messages",
            text: "Put work on the board; the employee picks it up, comments as it goes and messages you when it's blocked. Read [what an AI employee is](/ai-employees).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Set up your first ChatGPT dot" },
    mid: {
      title: "Want an always-on agent for your code base?",
      text: "Crewmark keeps your Claude Code or Codex session working on a heartbeat, on the plan you already pay for.",
      button: "Get started",
    },
    faq: {
      title: "ChatGPT dots FAQ",
      items: [
        {
          q: "What are ChatGPT dots?",
          a: "Always-on agents in ChatGPT, announced on September 29, 2026. Each dot runs on GPT-6 Astra with its own cloud computer and browser, connects to your apps, learns from feedback and keeps working toward your goals.",
        },
        {
          q: "How much do ChatGPT dots cost?",
          a: "Your first dot is included in Pro and Business Premium at no extra cost. OpenAI plans to sell more dots and more work per dot but hasn't published prices, nor usage terms for after the launch month.",
        },
        {
          q: "Can I use dots on ChatGPT Plus?",
          a: "No. Dots aren't included in Free, Go, Plus or the standard Business plan. They're rolling out to Pro and Business Premium, and in beta for Enterprise, Edu and Healthcare.",
        },
        {
          q: "How do I use a ChatGPT dot?",
          a: "Open chatgpt.com/dots, create and name your dot, connect apps under Customize, set custom rules for what it may do without asking, then give it a goal. Follow its work in its profile under In progress, Scheduled and Completed.",
        },
        {
          q: "What's the difference between ChatGPT dots and Grok Bot?",
          a: "Both are always-on agents with their own computer. A dot runs on GPT-6 Astra and you get one at launch; xAI's Grok Bot is a team of agents that can message each other, in beta for SuperGrok and some Cursor plans.",
        },
        {
          q: "Can ChatGPT dots write code?",
          a: "Yes, by delegating to Codex: a dot can start Codex cloud tasks, or local Codex tasks if you connect your computer, and those count toward your Codex limits.",
        },
      ],
    },
    cta: {
      title: "Make the agent you already use always-on.",
      text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Checked against OpenAI's announcement, help center, release notes and pricing page on November 2, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by OpenAI, xAI or Anthropic. ChatGPT is a trademark of OpenAI, Grok of xAI, and Claude Code of Anthropic.",
  },
};
