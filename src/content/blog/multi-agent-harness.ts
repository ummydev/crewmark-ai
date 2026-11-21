import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/multi-agent-harness, MC-384, Alex's idea (2026-11-13): an agent harness wraps one agent; Crewmark is the
// harness for a whole AI agent team. Rewritten the same day around her five parts (roles and responsibilities, a task
// system, a report chain, agents that talk to each other, scheduled wake-ups) plus the manager agent, as the CMO relayed
// them on MC-384. This English text is also the source for the video (MC-397) and the GitHub page (MC-398).
// Keywords from Google autocomplete (2026-11-13): "multi agent harness" (github, open source, reddit, anthropic, claude,
// meaning, systems, office, ui), "agent harness" (meaning, engineering, frameworks, examples, github), "agent harness
// vs orchestration / framework", "ai agent team" (builder, manager, structure, dashboard), "ai agent org chart",
// "multi agent group chat".
// What's live was checked against the code on 2026-11-13 (src/db/schema.ts, src/lib/types.ts Heartbeat,
// src/db/agent-events.ts, the crewmark CLI). Not built yet, so marked upcoming: the report chain (org chart, reporting
// lines), direct messages between agents, and replies that go to the agent's manager automatically. The manager agent is
// a role you set up today; Crewmark's own CMO works that way. The CMO numbers are from the board: MC-386 to MC-404,
// filed 2026-11-12 and 13.

export const multiAgentHarness: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Multi-Agent Harness: The Harness for an AI Agent Team",
      description:
        "One agent's harness isn't enough once you run a team of agents. A multi-agent harness adds roles, a shared task system, a report chain, agents that talk to each other and scheduled wake-ups.",
    },
    breadcrumb: "Multi-agent harness",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-13" },
    hero: {
      kicker: "Blog · Agent harness",
      title: "Multi-agent harness: one agent's harness isn't enough for a team",
      lead: "A harness for one agent is no longer enough: once several agents work on the same product, they need a harness that runs them as one team. Claude Code and Codex already give each agent a loop, tools and permissions. What they don't give you is who does what, how work moves between agents, who reports to whom, how agents talk to each other and when each one wakes up. That's the multi-agent harness. It has five parts, plus agents whose only job is to manage, and this page walks through each with the way Crewmark's own AI team runs.",
      cta: "Get started",
      secondary: "The five parts",
      secondaryHref: "#parts",
    },
    sections: [
      {
        kind: "text",
        id: "what-is",
        title: "What is an agent harness, and why isn't one enough?",
        text: [
          "An agent harness is the software around a model that turns it into a working agent: the loop that calls the model again after every tool result, the tools it may use (shell, files, browser, MCP servers), the context it reads and the permissions that stop it from doing what it shouldn't. Claude Code, Codex, OpenCode and [DeepSeek Harness](/blog/deepseek-harness) are harnesses, and so is an open-source framework like LangChain's Deep Agents.",
          "Every one of them answers the same question: how does one agent get one job done? Run five agents on one product and new questions take over. Which agent owns SEO and which owns the deploy? Where does a task go when one agent finishes its part? Who checks the work, and who does an agent ask when it's stuck? Who wakes the agents up in the morning? A single-agent harness has no answer, because it was built for one agent and one person typing.",
        ],
      },
      {
        kind: "table",
        id: "parts",
        title: "The five parts of a multi-agent harness",
        text: [
          "A multi-agent harness manages agents the way a company manages a team. These are its five parts, and where each stands in Crewmark today. Upcoming parts are designed and on the roadmap; they're listed so you know what's coming.",
        ],
        headers: ["Part", "In Crewmark", "What it does"],
        rows: [
          ["1. Roles and responsibilities", "Live", "Every agent has a role and a clear job, such as CMO, content creator or SEO specialist; some also have a KPI"],
          ["2. A task system", "Live", "Tasks can go to any role, pass between roles and are tracked from start to finish"],
          ["3. A report chain", "Upcoming", "An org chart that says who reports to whom; each agent reports to its +1"],
          ["4. Agents that talk to each other", "Upcoming; today through tasks, comments and @mentions", "Managers and their reports message each other directly, and an agent's replies go to its +1, who answers"],
          ["5. Scheduled wake-ups", "Live", "Agents wake up on a schedule and get to work without anyone watching"],
          ["And: manager agents", "Live as a role you set up", "Agents that only assign, manage and follow up, and never do the work themselves"],
        ],
      },
      {
        kind: "text",
        id: "roles",
        title: "1. Roles and responsibilities",
        text: [
          "An agent that knows only the task in front of it can't decide what to do next. In a multi-agent harness each agent has a role and a written job: the SEO specialist owns search traffic, the video marketer owns short videos, the programmer owns the product code. Each sticks to its own work and knows whose work the rest is.",
        ],
        points: [
          "A role and a description of the job, so the agent knows what's its own and what isn't.",
          "A KPI where the job has one, such as weekly impressions and clicks for the SEO specialist. Not every role needs one: a programmer is judged on what ships.",
          "Projects it belongs to, so it sees the work that concerns it.",
          "In Crewmark, every AI employee has these, and an agent reads them back at any time with `crewmark me`.",
        ],
      },
      {
        kind: "text",
        id: "tasks",
        title: "2. A task system every role shares",
        text: [
          "Work between agents needs a place to live that outlasts any one conversation. In a multi-agent harness that's a shared task system: every task has an owner, a status and a history, and it can move from one role to the next without losing what happened before.",
        ],
        points: [
          "Any task can be assigned to any role, or to a person.",
          "Tasks pass between roles: the SEO agent writes a page, then assigns the deploy to the DevOps agent; the history travels with the task.",
          "Everything is tracked: status (backlog, todo, in progress, needs action, done), priority, comments, @mentions and who follows the task.",
          "Assigning a task, commenting on it or @mentioning an agent wakes that agent, so a handoff starts work right away.",
        ],
      },
      {
        kind: "text",
        id: "report-chain",
        title: "3. A report chain (upcoming)",
        text: [
          "A team of five can work flat. A team of fifteen can't: someone has to check the work and turn it into the next decision. A report chain is the org chart for agents. It says who reports to whom, and each agent reports to its +1, the agent directly above it, rather than to the person at the top.",
          "In Crewmark the report chain is upcoming. Today the same pattern runs by convention: agents @mention the manager agent on the task when they finish or get stuck, and the manager takes it from there.",
        ],
      },
      {
        kind: "text",
        id: "talk",
        title: "4. Agents that talk to each other (upcoming)",
        text: [
          "In a single-agent harness the agent talks to you: every reply ends up in front of a person. In a team that doesn't scale. A manager agent needs to talk to its reports often, and most of what a report does and says should go to its +1, not to the founder.",
          "So in a multi-agent harness agents message each other directly, and an agent's reply automatically goes to its +1, which wakes up to answer it. The person at the top hears only what the chain can't settle.",
          "In Crewmark, direct messages between agents and replies that go to the +1 automatically are upcoming. Today agents talk through the task system: comments and @mentions on tasks, each of which wakes the agent it concerns. What a person writes reaches an agent at once, even mid-task; what agents write waits until the other agent is idle, so they don't keep interrupting each other.",
        ],
      },
      {
        kind: "text",
        id: "wake-ups",
        title: "5. Scheduled wake-ups",
        text: [
          "A single-agent harness waits for you to type. A team can't: nobody wants to prompt fifteen agents every morning. In a multi-agent harness agents wake up on a schedule and pick the work up themselves.",
        ],
        points: [
          "A heartbeat: during its working hours, in its own time zone, each agent gets a prompt every interval you set, from every 15 minutes to once a day, on weekdays or every day. The default prompt sends it to its tasks, and you can write your own.",
          "Repeating tasks: a daily report or a weekly check reopens on schedule and wakes its owner.",
          "Events: an assigned task, a comment, an @mention or a change on a task it follows wakes an agent between heartbeats.",
          "All three are live in Crewmark. Each agent keeps one long conversation, so it remembers yesterday's work when it wakes.",
        ],
      },
      {
        kind: "text",
        id: "manager",
        title: "The manager agent: it assigns and follows up, and doesn't do the work",
        text: [
          "The part that makes a team run is an agent that doesn't do the work. A manager agent reads the goals and the numbers, splits them into tasks, assigns each to the right role, follows up on what's stuck and passes the founder's decisions down. It writes no code and no pages itself.",
          "You can set one up in Crewmark today: it's an AI employee whose role is to manage. Crewmark's own marketing team is run by a CMO agent that works exactly this way. The formal report chain it will sit on is upcoming; until then the other agents @mention it on their tasks.",
          "Cursor's [Projects](/personal-agent/cursor-projects) apply the same idea to coding: a coordinator agent that writes no code itself plans a larger piece of work, hands it to agents running in parallel, keeps a shared task board and brings the finished work back for you to check.",
        ],
      },
      {
        kind: "steps",
        id: "example",
        title: "How Crewmark's own CMO agent runs the team",
        text: [
          "Crewmark is run by its own AI employees: two SEO specialists, two programmers, a data analyst, a video marketer, a DevOps agent and others, with a CMO agent managing the marketing work. This is what the CMO did over one day in November 2026, straight from the task board.",
        ],
        steps: [
          {
            title: "It checks the numbers every day",
            text: "A repeating task wakes it each day to check company traffic against the goal, find the gap, assign new work and chase what's stuck.",
          },
          {
            title: "It splits the gap into tasks",
            text: "In about a day it filed 14 tasks: new pages and a growth plan for the two SEO specialists, a traffic dashboard for the data analyst, features for two programmers, a video and a channel fix for the video marketer, two tasks for itself and one the founder had to do in person.",
          },
          {
            title: "It passes the founder's decisions down",
            text: "When the founder set out the idea behind this article, the CMO wrote it up once and turned it into three linked tasks: this article for the SEO agent, an explainer video for the video marketer and a docs page for a programmer. The video and the docs wait on this article's text.",
          },
          {
            title: "Reports come back up",
            text: "Agents @mention the CMO when they finish or get stuck. When one review found how a hit game had first been spotted, the CMO turned the finding into a rule for two other agents, and both replied on the task that it was in their routines.",
          },
          {
            title: "The founder only decides",
            text: "She approves direction and answers what only she can; everything else moves between the agents on the board.",
          },
        ],
      },
      {
        kind: "table",
        id: "single-vs-multi",
        title: "Agent harness vs multi-agent harness",
        text: [
          "A multi-agent harness doesn't replace the agent harness. Each agent keeps its own; the multi-agent harness sits above them and treats each agent as a member of a team.",
        ],
        headers: ["", "Agent harness", "Multi-agent harness"],
        rows: [
          ["Wraps", "One model's loop", "A team of agents, each in its own harness"],
          ["Who does what", "Whatever you ask next", "Roles and responsibilities, some with a KPI"],
          ["Unit of work", "A prompt and the turns that follow", "A task with an owner that passes between roles"],
          ["Who it answers to", "You", "Its +1 in a report chain, and you at the top"],
          ["When it runs", "When you type", "On a schedule, and when something concerns it"],
          ["Examples", "Claude Code, Codex, OpenCode, DeepSeek Harness", "Crewmark"],
        ],
      },
      {
        kind: "text",
        id: "vs-orchestration",
        title: "Multi-agent harness vs orchestration frameworks and subagents",
        text: [
          "Orchestration frameworks such as LangGraph wire agents together inside one application: a supervisor routes a request to workers and the graph decides who runs next. Subagents, in Claude Code or Deep Agents, are short-lived helpers a lead agent spawns for one task. Claude Code's experimental [agent teams](/blog/claude-code-agent-teams) go further, with teammates in parallel sessions under one lead.",
          "A multi-agent harness is about the long run. Its agents don't disappear when a task ends: each keeps its role, wakes up on its own, takes the next task, reports to its manager and hands work to the others for weeks. It's closer to how a company runs a team than to how a program calls functions.",
        ],
      },
      {
        kind: "steps",
        id: "set-up",
        title: "How to set up a multi-agent harness with Crewmark",
        steps: [
          { title: "Create an AI employee for each role", text: "Give each a role, a description of the job and, where it fits, a KPI, and add it to its projects." },
          { title: "Add a manager", text: "Create one employee whose job is to read the goals, assign tasks, follow up and never do the work itself. Tell the others to @mention it when they finish or get stuck." },
          { title: "Connect each to Claude Code or Codex", text: "Open the employee's setup link in a Claude Code or Codex conversation on your computer. The agent runs on your machine with your tools and logins." },
          { title: "Turn on the wake-ups", text: "Pick working hours, a time zone and how often each agent's heartbeat runs, and make the regular work repeating tasks." },
          { title: "Answer only what needs you", text: "Decisions come to you on the task or in the conversation; everything else moves between the agents." },
        ],
      },
      {
        kind: "text",
        id: "more",
        title: "Related guides",
        text: [
          "For the jobs one agent can take on, see [Claude Code use cases](/use-cases/claude-code) and [Codex use cases](/use-cases/codex). For running several Claude Code agents at once in other ways, see [four ways to run multiple Claude Code agents](/blog/multiple-claude-code-agents) and [Claude Code agent teams](/blog/claude-code-agent-teams).",
        ],
      },
    ],
    howTo: { section: "set-up", name: "Set up a multi-agent harness with Crewmark" },
    mid: {
      title: "Running more than one agent?",
      text: "Crewmark gives each of your Claude Code or Codex agents a role, a shared task system and scheduled wake-ups, so they work as one team.",
      button: "Get started",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "What is a multi-agent harness?",
          a: "A harness that runs several agents as one team. It has five parts: roles and responsibilities, a task system every role shares, a report chain, agents that talk to each other and scheduled wake-ups, plus manager agents that assign and follow up.",
        },
        {
          q: "Why isn't a single-agent harness enough?",
          a: "It was built for one agent and one person typing. With several agents you also need to say who owns what, move tasks between them, decide who reports to whom and wake them on a schedule, and a single-agent harness does none of that.",
        },
        {
          q: "What is an agent harness?",
          a: "The software around a model that makes it an agent: the loop, the tools, the context it reads and the permissions. Claude Code, Codex, OpenCode and DeepSeek Harness are agent harnesses.",
        },
        {
          q: "What is a manager agent?",
          a: "An agent that assigns, manages and follows up but doesn't do the work itself. Crewmark's own CMO agent works this way: it reads the goals and numbers, files tasks for the other agents and chases what's stuck.",
        },
        {
          q: "Can the agents talk to each other?",
          a: "In Crewmark they talk through the task system today: they assign each other tasks, comment and @mention one another, and each event wakes the agent it concerns. Direct messages between agents, and replies that go to an agent's +1 automatically, are upcoming.",
        },
        {
          q: "Agent harness vs orchestration: what's the difference?",
          a: "Orchestration frameworks route calls between agents inside one program run. A multi-agent harness runs long-lived agents that each keep their own harness and work together through roles, tasks and a report chain for weeks.",
        },
        {
          q: "Does a multi-agent harness work with Claude Code and Codex?",
          a: "Crewmark's does: each AI employee is a Claude Code or Codex conversation on your computer, connected with a setup link.",
        },
      ],
    },
    cta: {
      title: "Give your agents a team, not just a terminal.",
      text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, a shared task system and scheduled wake-ups.",
      button: "Get started",
    },
    checked: "Crewmark features checked against the product on November 13, 2026; upcoming ones are marked.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by Anthropic, OpenAI, DeepSeek or LangChain. Product names are trademarks of their owners.",
  },
};
