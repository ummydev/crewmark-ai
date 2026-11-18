import type { GuideCopy } from "@/components/landing/guide-article";

// /use-cases/sentry-error-triage (MC-266), for "sentry claude code", "sentry mcp claude code", "sentry mcp codex",
// "triage sentry errors with ai", "ai error triage", "sentry issues to linear / github automatically". Facts come from
// Sentry's MCP docs (docs.sentry.io/ai/mcp, checked 2026-11-10): the hosted server at mcp.sentry.dev/mcp with OAuth, the
// Claude Code `claude mcp add --transport http` command and the mcp-remote bridge for Codex.

const docs = "https://docs.sentry.io/ai/mcp/";

const connect = `# Claude Code: add Sentry's hosted MCP server, then sign in with OAuth
claude mcp add --transport http sentry https://mcp.sentry.dev/mcp

# Codex: through the mcp-remote bridge
codex mcp add sentry -- npx -y mcp-remote@latest https://mcp.sentry.dev/mcp`;

const brief = `# Role: error triage
Runs from the recurring issue "Sentry triage", weekdays at 9:00 and 14:00.

1. In Sentry, list unresolved issues first seen or regressed since the
   last run, in the production environment.
2. For each: check the board for an existing issue (search the Sentry
   issue ID). If there is one, add the new count as a comment.
3. Otherwise open an issue: title from the error, users and events
   affected, first and last seen, the top stack frames, the release
   it started in, and your best guess at the cause, marked as a guess.
4. Priority: Urgent if it blocks sign-up, payment or data; High if it
   affects more than 1% of sessions; otherwise Medium.
5. If the fix is small and obvious, take it as your next issue and
   open a pull request with a test. Don't merge.
6. Never resolve, ignore or delete anything in Sentry yourself.`;

export const sentryErrorTriage: GuideCopy = {
  meta: {
    title: "Triage Sentry Errors With Claude Code or Codex Every Day",
    description:
      "Have an AI employee on Claude Code or Codex read new Sentry errors twice a day, file them on your board with the stack, impact and a likely cause, and open fix pull requests for the small ones. The Sentry MCP setup and role brief to copy.",
  },
  breadcrumb: "Sentry error triage",
  parent: { name: "Use cases", href: "/use-cases" },
  hero: {
    kicker: "Use cases · Engineering",
    title: "Sentry error triage by an AI employee on Claude Code or Codex",
    lead: "New errors pile up in Sentry faster than anyone reads them. An AI employee on your own Claude Code or Codex can check Sentry on a schedule, skip what's already on the board, file each new error as an issue with the stack trace, the users affected and a likely cause, and pick up the small fixes itself, opening a pull request for review. Here's how to connect Sentry's MCP server, the brief to copy and the rules that keep it safe.",
    cta: "Get started",
    secondary: "Connect Sentry",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "What the employee does",
      points: [
        "Reads unresolved Sentry issues that are new or regressed since its last run.",
        "Deduplicates against your board, so a noisy error gets a comment, not ten new issues.",
        "Files a useful issue: impact, first and last seen, the release it started in, the top stack frames and a likely cause, clearly labelled as a guess.",
        "Sets a priority from rules you write, such as anything that blocks sign-up or payment is urgent.",
        "Fixes the obvious ones: a null check, a missing translation key, a bad redirect. It opens a pull request with a test and waits for review.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "How to set up Sentry triage on Claude Code or Codex",
      steps: [
        {
          title: "Connect Sentry's MCP server",
          text: "Sentry hosts an MCP server at mcp.sentry.dev with OAuth, so there's nothing to install and no token to paste. Add it, start the agent and sign in to Sentry when it asks. It gives the agent Sentry's issues, errors, projects and Seer analysis.",
          code: connect,
        },
        {
          title: "Copy the role brief",
          text: "Into CLAUDE.md for Claude Code or AGENTS.md for Codex, in the repository the errors come from, so it can read the code behind each stack frame.",
          code: brief,
        },
        {
          title: "Put it on a schedule",
          text: "Make triage a recurring issue, for example `--repeat \"weekdays at 9:00\"`, and a second one in the afternoon if your error volume needs it.",
        },
        {
          title: "Review the fixes",
          text: "Fix pull requests go through your normal review. When the employee is unsure about impact or ownership, it marks the issue Needs action and asks.",
        },
      ],
      source: { label: "Source: Sentry's MCP server docs", href: docs },
    },
    {
      kind: "text",
      id: "rules",
      title: "Rules that keep it safe",
      points: [
        "Read Sentry, write to the board. Resolving, ignoring or deleting in Sentry stays with people.",
        "Production only: point it at your production environment so it doesn't file staging noise.",
        "A guess is a guess: the cause in each issue is labelled as a hypothesis until someone confirms it.",
        "No merges: fixes are pull requests with a test, never direct pushes.",
        "Personal data: Sentry events can include user details; keep the issue to counts and IDs, not emails or IPs.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "An engineer that starts the day with your errors",
      text: [
        "Triage is a natural recurring issue for an AI software engineer. Crewmark turns your Claude Code or Codex into that employee, with working hours and a heartbeat.",
      ],
      steps: [
        {
          title: "Start from the role",
          text: "The [AI software engineer](/ai-employees/software-engineer) takes issues from a board and opens pull requests.",
        },
        {
          title: "Add triage as a recurring issue",
          text: "It runs triage when it's due, then works through the issues it filed.",
        },
        {
          title: "More engineering jobs",
          text: "See [Claude Code for engineering](/for/engineering) and [AI code review on every pull request](/use-cases/pr-review).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Set up Sentry error triage on Claude Code or Codex" },
  mid: {
    title: "Want new errors filed and the small ones fixed before standup?",
    text: "A Crewmark engineer on your Claude Code or Codex triages Sentry on a schedule and opens fix pull requests.",
    button: "Get started",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "How do I connect Sentry to Claude Code?",
        a: "Run `claude mcp add --transport http sentry https://mcp.sentry.dev/mcp`, start Claude Code and sign in to Sentry with OAuth when prompted. Sentry hosts the server, so there's nothing to install.",
      },
      {
        q: "Does the Sentry MCP server work with Codex?",
        a: "Yes, through the mcp-remote bridge: `codex mcp add sentry -- npx -y mcp-remote@latest https://mcp.sentry.dev/mcp`.",
      },
      {
        q: "Can the agent resolve Sentry issues?",
        a: "It can be allowed to, but we recommend it doesn't: let it file and fix, and keep resolving and ignoring with people so nothing gets hidden by mistake.",
      },
      {
        q: "How often should triage run?",
        a: "Twice on weekdays is enough for most teams; add an hourly run during a launch. Each run uses your agent plan's usage, so don't run it every few minutes.",
      },
      {
        q: "Where do the issues go?",
        a: "Wherever your team tracks work. With Crewmark they go on the same board the employee works from; otherwise use your tracker's MCP server or CLI, such as Linear's or GitHub's.",
      },
    ],
  },
  cta: {
    title: "Errors filed, small ones fixed, before you've had coffee.",
    text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
    button: "Get started",
  },
  checked: "Checked against Sentry's MCP server documentation on November 10, 2026.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by Sentry, Anthropic or OpenAI. Product names are trademarks of their owners.",
};
