import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/deepseek-super-agent, the second trending-term post (MC-82), for "deepseek super agent", "deepseek super agent
// github", "deepseek superagent", "dsh-superagent" and "deepseek coding agent". Facts come from the repository
// github.com/deepseek-ai/dsh-superagent-prototype (README, SETUP.md, docs/000–006, package.json) and the DeepSeek
// Harness README, as of `checked`. News coverage says the agent fixes bugs before anyone asks; the docs say proactive
// work is only recorded until the operator switches it on, so the copy follows the docs. DeepSeek publishes no price
// for the agent itself, and the article the README cites wasn't found, so neither is quoted. Crewmark connects
// DeepSeek Harness as well as Claude Code, Codex and OpenCode (messages/en.json, Landing FAQ).

const repo = "https://github.com/deepseek-ai/dsh-superagent-prototype";

export const deepseekSuperAgent: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "DeepSeek Super-Agent (dsh-superagent): What It Is and How to Set It Up | Crewmark",
      description:
        "DeepSeek's open-source Super-Agent is a proactive coding agent for one GitHub repo. What it does, what it needs, how to set it up, its safety limits, and how it compares.",
    },
    breadcrumb: "DeepSeek Super-Agent",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-03" },
    hero: {
      kicker: "Blog · DeepSeek",
      title: "DeepSeek Super-Agent: what it is and how to set it up",
      lead: "dsh-superagent is DeepSeek's open-source, proactive coding agent for one GitHub repository, published on October 31, 2026 under the MIT license. It runs on DeepSeek Harness, watches GitHub and optionally Feishu, and turns requests into pull requests, each worked on in its own session and directory. This guide covers what it does, what it needs, how to set it up, what “proactive” means in practice, and how it compares.",
      cta: "Get early access",
      secondary: "Jump to setup",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "text",
        title: "What DeepSeek Super-Agent is",
        text: [
          "The repository describes dsh-superagent as “a proactive coding agent for one GitHub repository, packaged as a bundle for DeepSeek Harness.” When someone on an allowed list asks it for work, it opens a work item (a Ticket), works on it in its own agent session and directory, and answers in the original conversation, for example with a pull request. A web panel lists only what needs a person.",
          "DeepSeek labels it a research prototype, “not an official DeepSeek product.” The public code differs from DeepSeek's internal version, and some designs from DeepSeek's write-up are future directions that the prototype doesn't implement.",
        ],
        points: [
          "Sources: GitHub notifications, subscribed issues and pull requests, CI changes and merged or closed pull requests; Feishu chats if you add them.",
          "Parallel work: every Ticket gets its own executor session named `worker-<ticket id>` and its own directory, usually a `git worktree` checkout, up to a concurrency limit you set.",
          "Follow-ups: later comments on an issue or pull request reach the Ticket working on it, without mentioning the agent again.",
          "Its rule for itself: “take as little human attention as possible, and give as much value as possible.” It confirms a request once, stays quiet while it works, and writes again only with a result, a question or a failure.",
        ],
      },
      {
        kind: "table",
        title: "Is it really proactive? The three accept modes",
        text: [
          "News coverage describes an agent that fixes bugs before you ask. The documentation is more careful: a direct request from an allowed person always works, but work nobody asked for needs a rule your team wrote, and the default mode only records what the agent would have done.",
        ],
        headers: ["Accept mode", "What happens to work nobody asked for"],
        rows: [
          ["`off`", "Ignored: only direct requests from allowed people start work"],
          ["`observe` (default)", "Assessed against your rules and recorded as “would accept”, but nothing starts"],
          ["`auto`", "Started when it matches at least one of your rules"],
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to set up dsh-superagent",
        text: [
          "You need Node.js 22.19+ or 24+, pnpm, git 2.32+, tmux, Python 3.8+, GitHub CLI 2.48+, DeepSeek Harness 0.2.1-alpha.2 or a later 0.2 release, and a model provider configured in DeepSeek Harness. The setup is long, so the repository has your coding agent walk you through it.",
        ],
        steps: [
          {
            title: "Install DeepSeek Harness",
            text: "DeepSeek Harness (`dsh`) is DeepSeek's open-source agent harness, in developer preview. Start it once and configure a model provider; the Web UI opens at `http://127.0.0.1:3080`.",
            code: "npx @deepseek-ai/dsh web",
          },
          {
            title: "Clone the repository and hand SETUP.md to your coding agent",
            text: "In the checkout, ask your coding agent to read SETUP.md. It probes your machine, asks one question per message, shows the whole plan once, and only then installs anything.",
            code: `git clone ${repo}.git\ncd dsh-superagent-prototype\n# then ask your coding agent:\n# Read SETUP.md in this repository and set up dsh-superagent with me.`,
          },
          {
            title: "Answer the setup questions",
            text: "Where requests come from (GitHub only, or Feishu too), which repository, which GitHub account the agent acts as (a dedicated one, never your own), which logins may ask it for work, which clone each Ticket checks out from, who its commits name as author, and whether it may enable auto-merge (the recommended answer is no).",
          },
          {
            title: "Do the steps only you can do",
            text: "Create the agent's GitHub account, accept the repository invitation as that account and sign its CLI in. The agent never asks for a secret in the chat; it gives you the exact commands to run in your own terminal.",
          },
          {
            title: "Check the defaults it applies",
            text: "A separate DeepSeek Harness profile named `superagent` on port 3082, branches prefixed `agent/`, accept mode `observe`, and an hourly check that restarts the agent if it stopped.",
          },
          {
            title: "Send it the first request",
            text: "From an allowed account, comment `@<agent login> <request>` on an issue. A Ticket appears in the panel within about a minute; the agent acknowledges, works in its own directory and replies in the same thread, usually with a pull request.",
          },
        ],
        source: { label: "Source: the dsh-superagent repository on GitHub", href: repo },
      },
      {
        kind: "text",
        title: "Safety: what to know before you run it",
        points: [
          "Workers run with `danger-full-access` as your OS user. They can read your home directory and run any program by path; the account wrappers pick credentials but aren't a security boundary.",
          "For isolation, DeepSeek's docs say to run it under a dedicated OS account that holds only the agent's credentials.",
          "Everything it writes appears under the agent's GitHub account, so the setup recommends a dedicated account and a short allowed list to start.",
          "Messages and comments can't change who may ask for work: allowed lists, rules and accept mode change only in the panel.",
          "After each turn, background work has at most 30 minutes to finish before its shell jobs are stopped and the Ticket is marked waiting.",
          "It's a research prototype, and DeepSeek Harness is a developer preview with breaking changes expected.",
        ],
      },
      {
        kind: "table",
        title: "DeepSeek Super-Agent vs ChatGPT dots vs Crewmark",
        text: [
          "All three are agents that keep working without you in the chat, but they start work differently. Super-Agent waits for a mention or a rule your team wrote; [ChatGPT dots](/blog/chatgpt-dots) live in OpenAI's cloud; Crewmark wakes the coding agent you already use, DeepSeek Harness included, on a schedule.",
        ],
        headers: ["", "DeepSeek Super-Agent", "ChatGPT dots", "Crewmark"],
        rows: [
          ["Runs on", "Your machine, in DeepSeek Harness", "OpenAI's cloud computer", "Your computer, inside DeepSeek Harness, Claude Code, Codex or OpenCode"],
          ["Starts work", "An @mention from an allowed person, or a rule in `auto` mode", "Your messages, schedules and its own research", "A heartbeat every 15–60 minutes in working hours"],
          ["Work queue", "Tickets from GitHub and Feishu threads", "Conversation threads and Scheduled", "Issues on a kanban board"],
          ["Scope", "One GitHub repository per setup", "Your connected apps", "One employee per role, such as SEO or engineering"],
          ["Cost", "Free, MIT license; you pay your model provider", "Pro and Business Premium plans", "Early access; runs on the agent and plan you already have"],
          ["Status", "Research prototype", "Rolling out", "Early access"],
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Make your DeepSeek Harness, Claude Code or Codex session proactive",
        text: [
          "Super-Agent needs its own profile, accounts and setup for each repository. Crewmark works with the agent you already run, DeepSeek Harness included: it gives that session a role, a goal and working hours, and wakes it on a heartbeat to take the next issue from a board, for any kind of work, not only one repository.",
        ],
        steps: [
          {
            title: "Turn a session into an employee",
            text: "Pick a role such as software engineer or SEO specialist, write its goal as a number, and run the setup command in DeepSeek Harness, Claude Code, Codex or OpenCode.",
          },
          {
            title: "Let the heartbeat start the work",
            text: "During its working hours the employee wakes every 15, 30 or 60 minutes in the same conversation and picks up where it left off; see [how to make Claude Code proactive](/proactive-claude-code).",
          },
          {
            title: "Assign issues and answer its messages",
            text: "Put work on the board; the employee takes it, comments as it goes and messages you when it needs a decision. Read [what an AI employee is](/ai-employees).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Set up DeepSeek's dsh-superagent" },
    mid: {
      title: "Already use DeepSeek Harness, Claude Code or Codex?",
      text: "Crewmark makes that session proactive: a heartbeat, working hours and a board of issues, on the plan you already pay for.",
      button: "Get early access",
    },
    faq: {
      title: "DeepSeek Super-Agent FAQ",
      items: [
        {
          q: "What is DeepSeek Super-Agent?",
          a: "dsh-superagent is an open-source, proactive coding agent for one GitHub repository, released by DeepSeek on October 31, 2026 as a research prototype under the MIT license. It runs on DeepSeek Harness, takes requests from GitHub and optionally Feishu, and answers with pull requests.",
        },
        {
          q: "Is DeepSeek Super-Agent free?",
          a: "The code is free under the MIT license. It runs on DeepSeek Harness with a model provider you configure, so you pay for the model usage. DeepSeek hasn't announced a hosted version.",
        },
        {
          q: "Where is DeepSeek Super-Agent on GitHub?",
          a: "At github.com/deepseek-ai/dsh-superagent-prototype. DeepSeek Harness, the agent harness it runs on, is at github.com/deepseek-ai/deepseek-harness.",
        },
        {
          q: "Does DeepSeek Super-Agent fix bugs without being asked?",
          a: "Only if you allow it. Direct requests from allowed people always work, but unrequested work needs a rule your team wrote, and the default `observe` mode only records what it would have done. Switch to `auto` after reviewing those records.",
        },
        {
          q: "Does dsh-superagent work with Slack or Teams?",
          a: "Not in this prototype. It ships with GitHub and Feishu as sources; its cookbook explains how to add another source.",
        },
        {
          q: "Is it safe to run?",
          a: "Its workers run with full access as your OS user and can read your home directory, so DeepSeek's docs recommend a dedicated OS account holding only the agent's credentials, a dedicated GitHub account and a short allowed list.",
        },
        {
          q: "Can I use Crewmark with DeepSeek Harness?",
          a: "Yes. Crewmark connects DeepSeek Harness, Claude Code, Codex and OpenCode. It turns a session into an AI employee that wakes on a heartbeat during its working hours and takes issues from a board, with the model provider you already use.",
        },
      ],
    },
    cta: {
      title: "Make the agent you already use proactive.",
      text: "Crewmark turns DeepSeek Harness, Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get early access",
    },
    checked: "Checked against the dsh-superagent and DeepSeek Harness repositories on GitHub on November 3, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by DeepSeek, OpenAI or Anthropic. DeepSeek is a trademark of DeepSeek, ChatGPT of OpenAI, and Claude Code of Anthropic.",
  },
};
