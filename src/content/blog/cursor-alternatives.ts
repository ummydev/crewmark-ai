import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/cursor-alternatives, a list page for "cursor alternatives", "... free", "... open source", "... 2026", "...
// reddit", "... cheaper", "cursor alternative ide", "cursor pricing changes" and "cursor spacex" (Google autocomplete,
// 2026-11-06). Cursor's facts follow /blog/claude-code-vs-cursor (cursor.com, read 2026-11-06). Every alternative's
// facts come from its own site, pricing page or GitHub README, and stars and licenses from the GitHub API, on
// 2026-11-06 (`checked`). Left out: Roo Code (repo archived, site redirects elsewhere), Gemini CLI (its README says
// personal use moved to Antigravity CLI on June 18, 2026) and Aider (no release since August 2025); they're mentioned
// in a note. Prices not shown on a vendor's page aren't quoted.

const copilot = "https://github.com/features/copilot/plans";

export const cursorAlternatives: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Best Cursor Alternatives in 2026: 10 Free, Open-Source and Cheaper Options | Crewmark",
      description:
        "Cursor joined SpaceX and moved to Grok-first plans. Ten alternatives compared: Claude Code, Codex, GitHub Copilot, Devin Desktop (Windsurf), Zed, Cline, Kilo Code, OpenCode, Antigravity and Junie, with prices and free tiers.",
    },
    breadcrumb: "Cursor alternatives",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-06" },
    hero: {
      kicker: "Blog · AI coding tools",
      title: "The best Cursor alternatives in 2026",
      lead: "Cursor became part of SpaceX in August 2026, and its plans are now built around Grok: the $8 Plus plan offers Grok models only, and Claude, GPT or Gemini cost extra at API list price from the $30 plan up. If that's not what you signed up for, there are good alternatives: agents that come with the subscription you already have, editors with their own AI, and open-source tools where you bring your own key. Here are ten, compared on what they are, free tiers, prices and models, as of November 6, 2026.",
      cta: "Get early access",
      secondary: "Jump to the comparison",
      secondaryHref: "#compare",
    },
    sections: [
      {
        kind: "table",
        id: "compare",
        title: "Cursor alternatives compared",
        text: [
          "Entry prices are the cheapest paid individual plans listed on each vendor's page, in US dollars per month. \"Claude models\" means you can use Anthropic's models in it, included or with your own key.",
        ],
        headers: ["Tool", "Type", "Free option", "Paid from", "Claude models", "Open source"],
        rows: [
          ["Claude Code", "Agent: terminal, IDEs, desktop, web", "No", "$20 (Claude Pro)", "Included", "No"],
          ["OpenAI Codex", "Agent: CLI, IDE, desktop, cloud", "Yes, ChatGPT Free", "$8 (ChatGPT Go)", "No", "CLI is Apache-2.0"],
          ["GitHub Copilot", "Extension for most IDEs, CLI", "Yes, 2,000 completions a month", "$10 (Pro)", "Yes; Opus from Pro+ ($39)", "No"],
          ["Devin Desktop (formerly Windsurf)", "IDE", "Yes", "$20 (Pro)", "Yes", "No"],
          ["Zed", "Native editor", "Yes, with your own keys", "$10 (Pro)", "With your own key or an external agent", "Yes"],
          ["Cline", "VS Code extension and CLI", "Free; you pay for model usage", "No individual plan", "With your own key", "Apache-2.0"],
          ["Kilo Code", "VS Code and JetBrains extension, CLI", "Yes", "$19 (Kilo Pass Starter)", "Via gateway or your own key", "MIT"],
          ["OpenCode", "Terminal agent, desktop, IDE", "Yes", "Not listed", "With your own key; signs in with Copilot or ChatGPT", "MIT"],
          ["Google Antigravity", "Agentic IDE, CLI", "Yes", "Business from $30 per seat", "On paid plans", "No"],
          ["JetBrains Junie", "Agent in JetBrains IDEs, CLI", "Yes, Junie Lite", "AI Pro, listed at $8.33", "Yes, or your own key", "No"],
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to choose a Cursor alternative",
        steps: [
          {
            title: "Start from the subscription you already pay for",
            text: "Claude Pro or Max includes Claude Code; any ChatGPT plan includes Codex; many companies already have GitHub Copilot. Using what you pay for is usually cheaper than a new tool plus API bills.",
          },
          {
            title: "Decide editor or agent",
            text: "If you want Cursor's feel (an editor with inline edits and tab completion), look at Devin Desktop, Zed, Copilot in VS Code or Antigravity. If you mostly hand tasks to an agent, Claude Code, Codex and OpenCode work from any terminal and editor.",
          },
          {
            title: "If you want free or open source",
            text: "Cline, Kilo Code, OpenCode and Zed are open source and free to use with your own API key; you pay the model provider only for what you use.",
          },
          {
            title: "Check where your models come from",
            text: "If you want Claude daily, a tool that includes it in a plan (Claude Code, Copilot, Devin Desktop, Junie) avoids per-token surprises. Bring-your-own-key tools give you any model at list price.",
          },
          {
            title: "Bring your rules with you",
            text: "Many of these read AGENTS.md, so moving off `.cursor/rules` is mostly copying your rules into one file. See the [CLAUDE.md guide](/blog/claude-md) for using one file across agents.",
          },
        ],
        source: { label: "Source: GitHub Copilot plans and each vendor's site", href: copilot },
      },
      {
        kind: "text",
        title: "Notes on each alternative",
        points: [
          "Claude Code: Anthropic's agent, included in Claude Pro ($20, or $17 billed yearly), Max ($100) and Ultra ($200); also runs on an API key. Compare it in [Claude Code vs Cursor](/blog/claude-code-vs-cursor).",
          "OpenAI Codex: included in every ChatGPT plan, from Free (GPT-6 Luna) and Go ($8) to Plus ($20) and Pro (from $100). See [Claude Code vs Codex](/blog/claude-code-vs-codex).",
          "GitHub Copilot: Free, Pro ($10), Pro+ ($39) and Max ($100); works in VS Code, Visual Studio, JetBrains, Xcode, Neovim, Eclipse and Zed, with Claude, GPT, Gemini and other models.",
          "Devin Desktop: Windsurf's new name, from Cognition; windsurf.com now redirects to it. Free, Pro ($20) and Max ($200).",
          "Zed: a fast native editor for macOS, Windows and Linux; free with your own keys or external agents such as Claude Code and Codex, Pro $10 for hosted models.",
          "Cline: an open-source VS Code extension and CLI; free, you pay only for inference with your own keys.",
          "Kilo Code: open source (MIT), now owned by Anaconda; free with your own keys or free models, Kilo Pass from $19.",
          "OpenCode: an open-source terminal agent with 75+ model providers; free, and it can sign in with an existing Copilot or ChatGPT subscription.",
          "Google Antigravity: Google's agentic IDE and CLI, free for individuals; paid plans add Gemini 4 Argon and Claude models.",
          "JetBrains Junie: JetBrains' coding agent in its IDEs and as a CLI, with a free Lite tier and AI Pro and Ultimate plans.",
          "Not included: Roo Code (its GitHub repository is archived), Gemini CLI (personal use moved to Antigravity CLI in June 2026) and Aider (no release since August 2025).",
        ],
      },
      {
        kind: "text",
        title: "What changed at Cursor",
        text: [
          "Cursor announced on August 14, 2026 that SpaceX had completed its acquisition. Its pricing page now lists Free, Plus ($8, Grok models only), Premium ($30, with cloud agents, automations, code review and third-party models billed by usage at API list price), Super ($100) and Ultra ($200), alongside X features such as fewer timeline ads. Usage is one pool shared with Grok that refreshes weekly. If you keep Cursor, you can still run the Claude Code extension or CLI inside it on your Claude plan.",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Switching tools? Give the new one a job.",
        text: [
          "Whichever agent you move to, it waits for your next prompt. Crewmark turns a Claude Code, Codex, DeepSeek Harness or OpenCode session into an AI employee with a role, a goal and working hours, and wakes it on a heartbeat to take the next issue from a board, on the subscription you already pay for.",
        ],
        steps: [
          {
            title: "Pick a role and a goal",
            text: "Software engineer, reviewer, SEO writer: each employee has a goal written as a number. Read [what an AI employee is](/ai-employees).",
          },
          {
            title: "Let the heartbeat start the work",
            text: "During working hours it wakes every 15, 30 or 60 minutes and takes the next issue; see [how to make Claude Code proactive](/proactive-claude-code).",
          },
          {
            title: "Run several at once",
            text: "Give each its own worktree and role; see [Claude Code orchestration tools](/blog/claude-code-orchestration-tools).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Choose a Cursor alternative" },
    mid: {
      title: "Leaving Cursor for Claude Code, Codex or OpenCode?",
      text: "Crewmark turns them into AI employees that wake on a heartbeat and take the next issue themselves.",
      button: "Get early access",
    },
    faq: {
      title: "Cursor alternatives FAQ",
      items: [
        {
          q: "What is the best alternative to Cursor?",
          a: "If you have a Claude plan, Claude Code; with ChatGPT, Codex; for an editor that feels like Cursor, Devin Desktop (formerly Windsurf) or Copilot in VS Code; for free and open source, Cline, Kilo Code, OpenCode or Zed with your own key.",
        },
        {
          q: "Is there a free Cursor alternative?",
          a: "Yes. Cline, Kilo Code, OpenCode and Zed are free with your own API key, Copilot has a free tier with 2,000 completions a month, Codex works on ChatGPT Free, and Antigravity and Devin Desktop have free plans.",
        },
        {
          q: "What open-source alternatives to Cursor are there?",
          a: "Cline (Apache-2.0), Kilo Code (MIT), OpenCode (MIT) and Zed are open source; the Codex CLI is open source (Apache-2.0) too.",
        },
        {
          q: "Why did Cursor's pricing change?",
          a: "After SpaceX acquired Cursor (announced August 14, 2026), its plans moved to Grok models and an X-bundled lineup: Plus at $8 is Grok-only, and third-party models such as Claude cost extra at API list price from Premium ($30) up.",
        },
        {
          q: "What happened to Windsurf?",
          a: "Windsurf is now called Devin Desktop, made by Cognition; windsurf.com redirects to devin.ai/desktop.",
        },
        {
          q: "Which Cursor alternative is cheapest?",
          a: "Bring-your-own-key tools (Cline, OpenCode, Kilo Code, Zed) cost nothing but model usage. Among plans, Codex starts at $8 with ChatGPT Go and Copilot Pro at $10; if you want Claude included, Claude Pro is $20.",
        },
        {
          q: "Can I keep my Cursor rules?",
          a: "Mostly. Put them in AGENTS.md, which Codex, Copilot, OpenCode and others read; Claude Code reads it through an `@AGENTS.md` import in CLAUDE.md.",
        },
      ],
    },
    cta: {
      title: "New coding agent, same subscription, now with a job.",
      text: "Crewmark turns Claude Code, Codex, DeepSeek Harness and OpenCode sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get early access",
    },
    checked: "Checked against cursor.com and each alternative's own website, pricing page or GitHub repository on November 6, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by Cursor, SpaceX or any vendor listed. Product names are trademarks of their owners.",
  },
};
