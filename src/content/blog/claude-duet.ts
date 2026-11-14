import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/claude-duet, the fourth trending-term post (MC-82), for "claude duet", "claude duet waitlist", "claude duet
// release date", "claude duet review", "claude duet access", "claude duet for teams" and "claude duet vs" (Google
// autocomplete, 2026-11-05). Facts come from Anthropic's announcement (claude.com/resources/articles/claude-duet,
// October 21, 2026), the product page (claude.com/product/claude-duet) and the safety, privacy and security article
// (October 23, 2026), as of `checked`. The announcement lists Ultra; some coverage says Pro and Max only, so the copy
// follows Anthropic's pages. Anthropic publishes no separate price or API for Duet, so none is quoted. The ChatGPT dots
// cells match /blog/chatgpt-dots.

const announcement = "https://claude.com/resources/articles/claude-duet";

export const claudeDuet: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Claude Duet: Waitlist, Access and Limits | Crewmark AI",
      description:
        "Claude Duet is Anthropic's proactive agent app, in research preview since October 21, 2026. What it does, who can get it, how to join the waitlist, what it costs, its safety limits, and how it compares.",
    },
    breadcrumb: "Claude Duet",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-05" },
    hero: {
      kicker: "Blog · Claude",
      title: "Claude Duet: what it is, who can get it, and how it works",
      lead: "Claude Duet is a new Anthropic app where Claude works as a proactive agent: it comes to you with what needs your attention, does the tasks you hand it, keeps working when you step away, and checks with you before it acts on your behalf. It opened as a waitlisted research preview on October 21, 2026, for Pro, Max and Ultra subscribers in the US. This guide covers what it does, how to get access, what it costs, its safety limits, and how it compares.",
      cta: "Get started",
      secondary: "How to get access",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "text",
        title: "What Claude Duet is",
        text: [
          "A regular Claude chat waits for you to open it. Duet reaches out first: it watches the apps you connect, sends a short morning brief, stays quiet until something needs you, and messages you when a task is done or needs a decision. Anthropic built it for professionals and small business owners, on Claude Opus 5.5.",
        ],
        points: [
          "Morning brief: a short daily summary of the most important things across your connected apps.",
          "One thread: you message it by text or voice, like a teammate, and it keeps a single ongoing conversation.",
          "Your Claude context: it uses the memory, skills and connected apps of your Claude account from the first message.",
          "Its own cloud computer: tasks run in a virtual machine with its own browser, so your laptop and phone can be off.",
          "Small and large tasks: scheduling meetings, drafting replies, chasing unpaid invoices, preparing payroll for review, or building dashboards, forecasts, decks and prototypes.",
          "Connectors: more than 6,000 connectors and plugins from the Claude Marketplace, such as Gmail, Slack, QuickBooks, Stripe, HubSpot, Docusign and Shopify.",
        ],
      },
      {
        kind: "table",
        title: "Claude Duet at a glance",
        headers: ["", "Claude Duet"],
        rows: [
          ["Announced", "October 21, 2026, as a research preview"],
          ["Who can get it", "Pro, Max and Ultra subscribers in the US, through a waitlist"],
          ["Team and Enterprise", "Not included yet"],
          ["Where", "Standalone iOS and Android apps, and claude.ai on a computer"],
          ["Price", "No separate price: included in the plan, using the same usage limits as the rest of Claude"],
          ["Model", "Claude Opus 5.5"],
          ["How often it checks", "Every few hours; you choose what you want to hear about and how often"],
          ["API", "None announced"],
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to get Claude Duet and set it up",
        steps: [
          {
            title: "Check that your plan qualifies",
            text: "You need a Pro, Max or Ultra plan in the US. Team and Enterprise plans aren't part of the preview yet.",
          },
          {
            title: "Join the waitlist",
            text: "Sign up on the Claude Duet page at claude.com/product/claude-duet. Anthropic emails you when Duet is ready for your account.",
          },
          {
            title: "Open the app",
            text: "Install the standalone Claude Duet app on iOS or Android, or use it at claude.ai on a computer. It's separate from the main Claude app but shares your account.",
          },
          {
            title: "Connect the apps it should watch",
            text: "Apps you already connected to Claude carry over, and turning one off in either place turns it off in both. Start with the few that matter, such as your inbox, calendar and invoicing.",
          },
          {
            title: "Tell it what you want to hear about",
            text: "Set what counts as urgent and how often you want updates. Every background check uses your plan's limits, so fewer, sharper rules last longer.",
          },
          {
            title: "Hand it a task and approve its actions",
            text: "Message it the way you'd message a colleague. It reads and drafts on its own, then shows you the action, recipients and content and waits for your approval before it sends, pays, signs or deletes anything.",
          },
        ],
        source: { label: "Source: Anthropic's Claude Duet announcement", href: announcement },
      },
      {
        kind: "text",
        title: "Safety, privacy and limits",
        points: [
          "Approvals: before sending a sensitive message, paying or deleting, it shows you exactly what it will do and waits. A separate check outside the model also judges whether each action matches your intent.",
          "Never allowed, even with approval: trading securities, moving money between accounts, or using someone else's account.",
          "Passwords: it never sees your passwords, cookies or sign-in tokens. Purchases use a one-time card limited to that merchant and amount.",
          "Sensitive data: a classifier blocks sharing card numbers, bank account numbers and government IDs; health and finance details are shared only when you ask.",
          "Memory: it keeps your conversation history and memory until you delete or reset them. Disconnecting an app stops new access, but what it already learned stays until you reset its memory.",
          "Early preview: Anthropic says it can misread a thread, misjudge what's urgent, or miss something that arrives between check-ins, and it's weaker at personal errands than at work tasks.",
        ],
      },
      {
        kind: "table",
        title: "Claude Duet vs ChatGPT dots vs Crewmark",
        text: [
          "All three are agents that keep working without you in the chat. Duet and [ChatGPT dots](/blog/chatgpt-dots) are assistants for your business apps that run in their maker's cloud; Crewmark wakes the coding agent you already run, such as Claude Code or Codex, on a heartbeat to work through a board of issues.",
        ],
        headers: ["", "Claude Duet", "ChatGPT dots", "Crewmark"],
        rows: [
          ["Runs on", "Anthropic's cloud computer", "OpenAI's cloud computer", "Your computer, inside Claude Code, Codex, DeepSeek Harness or OpenCode"],
          ["Starts work", "Your messages and check-ins every few hours", "Your messages, schedules and its own research", "A heartbeat every 15–60 minutes in working hours"],
          ["Best at", "Inbox, calendar, invoices, briefs and dashboards", "Research and tasks across your connected apps", "Code, SEO and other work in a repository, one employee per role"],
          ["Work queue", "One ongoing thread", "Conversation threads and Scheduled", "Issues on a kanban board"],
          ["Cost", "Included in Pro, Max and Ultra (US)", "Pro and Business Premium plans", "Open sign-up; runs on the agent and plan you already have"],
          ["Status", "Research preview, waitlist", "Rolling out", "Open to sign-ups"],
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Want the same proactive habit for Claude Code?",
        text: [
          "Duet watches your inbox and business apps; Anthropic doesn't describe it working in your code repository. Crewmark brings the same idea to coding agents: it gives a Claude Code, Codex, DeepSeek Harness or OpenCode session a role, a goal and working hours, and wakes it on a heartbeat in the same conversation.",
        ],
        steps: [
          {
            title: "Turn a session into an employee",
            text: "Pick a role such as software engineer or SEO specialist, write its goal as a number, and run the setup command in Claude Code.",
          },
          {
            title: "Let the heartbeat start the work",
            text: "During its working hours the employee wakes every 15, 30 or 60 minutes and picks up where it left off; see [how to make Claude Code proactive](/proactive-claude-code).",
          },
          {
            title: "Assign issues and answer its messages",
            text: "Put work on the board; the employee takes it, comments as it goes and messages you when it needs a decision. Read [what an AI employee is](/ai-employees).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Get Claude Duet and set it up" },
    mid: {
      title: "Like the idea of an agent that messages you first?",
      text: "Crewmark does it for Claude Code and Codex: a heartbeat, working hours and a board of issues, on the plan you already pay for.",
      button: "Get started",
    },
    faq: {
      title: "Claude Duet FAQ",
      items: [
        {
          q: "What is Claude Duet?",
          a: "An Anthropic app, in research preview since October 21, 2026, where Claude works as a proactive agent. It watches your connected apps, sends a morning brief, does tasks in its own cloud computer and asks for approval before it acts on your behalf.",
        },
        {
          q: "When was Claude Duet released?",
          a: "Anthropic opened the research preview on October 21, 2026, with a waitlist. Access rolls out gradually, and Anthropic emails you when it's ready for your account.",
        },
        {
          q: "How do I get access to Claude Duet?",
          a: "Join the waitlist on claude.com/product/claude-duet with a Pro, Max or Ultra plan in the US. Then use the Claude Duet app on iOS or Android, or claude.ai on a computer.",
        },
        {
          q: "Is Claude Duet available for Team or Enterprise plans?",
          a: "Not yet. Anthropic's product page says Team and Enterprise plans are not included in the preview.",
        },
        {
          q: "How much does Claude Duet cost?",
          a: "There's no separate price. It's included in Pro, Max and Ultra and uses the same usage limits as the rest of Claude; background checks and larger tasks use more of them.",
        },
        {
          q: "Is Claude Duet safe?",
          a: "It asks before sending, paying, signing or deleting, never sees your passwords or sign-in tokens, uses one-time cards for purchases, and can't trade securities or move money between accounts even with approval. It's an early preview, so it can still misjudge what's urgent.",
        },
        {
          q: "Can Claude Duet write code in my repository?",
          a: "It can build prototypes and web apps in its own cloud computer, but Anthropic doesn't present it as a coding agent for your repository. For that, Claude Code is the tool, and Crewmark makes Claude Code sessions proactive with a heartbeat and a board of issues.",
        },
      ],
    },
    cta: {
      title: "Make your Claude Code sessions proactive too.",
      text: "Crewmark turns Claude Code, Codex and DeepSeek Harness sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Checked against Anthropic's Claude Duet announcement, product page and safety article on November 5, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by Anthropic or OpenAI. Claude, Claude Duet and Claude Code are trademarks of Anthropic, and ChatGPT of OpenAI.",
  },
};
