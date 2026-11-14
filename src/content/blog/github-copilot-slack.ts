import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/github-copilot-slack, the seventh trending-term post (MC-82), for "github copilot slack", "... integration",
// "... bot", "... app", "... mcp", "github copilot agent slack", "github copilot coding agent slack" and "ai agent in
// slack" (Google autocomplete, 2026-11-07). @GitHub in Slack and Teams became generally available on 2026-11-06. Facts
// come from GitHub's changelog post of that day and the GitHub Docs page "Integrate Copilot cloud agent with Slack"
// (checked 2026-11-07). The docs don't state billing for Slack sessions, so none is quoted. The Claude Code in Slack
// row follows Anthropic's Claude Code docs (Remote Control comparison table and the Slack page).

const docs = "https://docs.github.com/en/copilot/how-tos/copilot-integrations/integrate-cloud-agent-with-slack";

const prompts = `@GitHub Add "Hello World" to the README in octo-org/octo-repo on the develop branch

@GitHub settings      # choose default repositories for this channel
@GitHub help          # list commands`;

export const githubCopilotSlack: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "GitHub Copilot in Slack: Setup, Alternatives | Crewmark AI",
      description:
        "@GitHub in Slack and Teams is generally available since November 6, 2026. How to set it up, what the Copilot agent does from a chat thread, permissions and limits, and how it compares with Claude Code in Slack.",
    },
    breadcrumb: "GitHub Copilot in Slack",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-07" },
    hero: {
      kicker: "Blog · AI coding agents",
      title: "GitHub Copilot in Slack: turn a chat thread into a pull request",
      lead: "GitHub Copilot in Slack lets you mention `@GitHub` in a thread and have Copilot's cloud agent investigate a bug, open issues, write the change and open a pull request, using the conversation as context. It became generally available in Slack and Microsoft Teams on November 6, 2026. This guide covers how to set it up, what it can and can't do, who can trigger it, and how it compares with Claude Code in Slack and an always-on AI employee.",
      cta: "Get started",
      secondary: "Jump to setup",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "text",
        title: "What @GitHub does in Slack and Teams",
        points: [
          "Investigates, plans, writes code and opens issues and pull requests from a chat thread, using the whole thread as context.",
          "Works asynchronously in a cloud sandbox and posts a summary with links to what it created.",
          "Creates one issue, several, or parent and child issues; works across up to 11 repositories owned by the same organization or account.",
          "Supports choosing a model, MCP servers set up by repository admins, and Copilot Memory (in preview).",
          "Since the November 6 release it picks the repository from your message, notes in each issue and PR which conversation and user it came from, and in Teams shows plans, diffs and previews in a Canvas next to the chat.",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to set up GitHub Copilot in Slack",
        steps: [
          {
            title: "Check you can use it",
            text: "You need a paid Copilot plan and write access to the repositories you want changed. In organizations and enterprises the \"Copilot in the cloud\" policy is on by default, but an owner can turn it off; for enterprise-owned repositories an admin installs the app and chooses which repositories it can reach.",
          },
          {
            title: "Install the GitHub app for Slack",
            text: "Add the GitHub integration to your workspace from slack.github.com (for Teams, teams.github.com).",
          },
          {
            title: "Connect your account",
            text: "Open a direct message with the GitHub app, or type `@GitHub` in a thread, and follow the prompts to link your GitHub account. `@GitHub help` lists the commands.",
          },
          {
            title: "Set default repositories for a channel",
            text: "Run `@GitHub settings` in a channel to pick an owner and repositories; the first becomes the primary one. Direct messages have no default, so name the repository and branch in the prompt.",
          },
          {
            title: "Ask for work in plain language",
            text: "Mention `@GitHub` with the task, or reply to a GitHub notification with one. Copilot reads the thread, works in the cloud and replies with links to the issue or pull request.",
            code: prompts,
          },
        ],
        source: { label: "Source: GitHub Docs, Integrate Copilot cloud agent with Slack", href: docs },
      },
      {
        kind: "text",
        title: "Permissions and limits",
        points: [
          "Only people with write access to every selected repository can start or steer a session; anyone in the thread can add input.",
          "Guests and outside collaborators can't start or steer sessions.",
          "In a direct message Copilot acts with your linked account's permissions; in a shared channel it creates issues and PRs under its app identity.",
          "The whole thread is captured as context and stored in the resulting pull request, so keep secrets out of the conversation.",
          "GitHub's announcement doesn't spell out billing for Slack sessions; check your plan's Copilot usage before rolling it out widely.",
        ],
      },
      {
        kind: "table",
        id: "compare",
        title: "GitHub Copilot in Slack vs Claude Code in Slack vs an AI employee",
        headers: ["", "GitHub Copilot in Slack", "Claude Code in Slack", "Crewmark AI employee"],
        rows: [
          ["How work starts", "Mention `@GitHub` or DM the app", "Mention `@Claude` in a team channel", "A heartbeat during working hours takes the next issue; you can also assign it"],
          ["Where it runs", "GitHub's cloud sandbox", "Anthropic's cloud (Claude Code on the web)", "Your machine, in Claude Code, Codex, DeepSeek Harness or OpenCode"],
          ["What it delivers", "Issues and pull requests", "Pull requests and reviews", "Work on any issue on the board, with comments and messages to you"],
          ["Plans", "Paid Copilot plans", "Pro, Max and Ultra, with Claude Code on the web enabled", "Your existing agent subscription"],
          ["Keeps going without you", "No: one task per mention", "No: one task per mention", "Yes, through its working hours"],
        ],
      },
      {
        kind: "text",
        title: "When a chat bot is enough, and when it isn't",
        text: [
          "Copilot in Slack is great for the moment a bug report lands in a thread: one mention and a pull request follows. It's still reactive: nothing happens until someone asks, and each mention is one task. If you want an agent that works through a backlog on its own, with a role and goals, look at [AI employees](/ai-employees) and [how to make Claude Code proactive](/proactive-claude-code). For more ways to run several agents, see [Claude Code orchestration tools](/blog/claude-code-orchestration-tools).",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "From \"@ the bot\" to an employee that picks up the next task",
        text: [
          "Crewmark turns a Claude Code, Codex, DeepSeek Harness or OpenCode session into an AI employee with a role, a goal and working hours. It wakes on a heartbeat, takes the next issue from a shared board, comments as it works, and messages you when it needs a decision.",
        ],
        steps: [
          {
            title: "Assign work like you would in chat",
            text: "Create an issue and assign it, from any browser or your phone; the employee hears about it right away.",
          },
          {
            title: "Let it keep going",
            text: "Between your messages it works through its issues on a 15, 30 or 60-minute heartbeat.",
          },
          {
            title: "Keep Copilot for quick fixes",
            text: "They don't conflict: use `@GitHub` for one-off requests in a thread and an employee for the ongoing backlog.",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Set up GitHub Copilot in Slack" },
    mid: {
      title: "Want an agent that doesn't wait to be mentioned?",
      text: "Crewmark wakes Claude Code or Codex on a heartbeat with a role, a goal and a board of issues.",
      button: "Get started",
    },
    faq: {
      title: "GitHub Copilot in Slack FAQ",
      items: [
        {
          q: "Is GitHub Copilot in Slack generally available?",
          a: "Yes. GitHub announced that @GitHub in Slack and Teams is generally available on November 6, 2026.",
        },
        {
          q: "How do I add GitHub Copilot to Slack?",
          a: "Install the GitHub app for Slack from slack.github.com, then DM the app or mention `@GitHub` in a thread and link your GitHub account. Use `@GitHub settings` to set default repositories for a channel.",
        },
        {
          q: "Which plan do I need for Copilot in Slack?",
          a: "A paid Copilot plan, plus write access to the repositories it should change. Organization owners can turn off the \"Copilot in the cloud\" policy that it relies on.",
        },
        {
          q: "Can GitHub Copilot in Slack open pull requests?",
          a: "Yes. It investigates, writes the change in a cloud sandbox and opens the pull request, then posts a summary with links in the thread.",
        },
        {
          q: "Does it work in Microsoft Teams?",
          a: "Yes. @GitHub is generally available in Teams too, where a Canvas shows plans, code changes and previews next to the conversation.",
        },
        {
          q: "Who can trigger Copilot in a Slack channel?",
          a: "Only people with write access to every selected repository can start or steer a session. Others in the thread can add input; guests and outside collaborators can't trigger it.",
        },
        {
          q: "GitHub Copilot in Slack vs Claude Code in Slack?",
          a: "Both turn a mention in Slack into a cloud coding task. Copilot works with a paid Copilot plan and creates issues and PRs; Claude Code in Slack needs a Claude Pro, Max or Ultra plan with Claude Code on the web.",
        },
      ],
    },
    cta: {
      title: "Give your team an AI teammate that doesn't wait to be asked.",
      text: "Crewmark turns Claude Code, Codex, DeepSeek Harness and OpenCode sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Checked against GitHub's changelog (November 6, 2026), GitHub Docs and Anthropic's Claude Code docs on November 7, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by GitHub, Microsoft, Slack or Anthropic. Product names are trademarks of their owners.",
  },
};
