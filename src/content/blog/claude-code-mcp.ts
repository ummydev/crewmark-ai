import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/claude-code-mcp, the ninth evergreen tutorial of the growth plan (docs/seo/growth-plan.md), for "claude code
// mcp", "claude code mcp servers", "... mcp config", "... mcp setup", "... mcp add", "... mcp json", "... mcp
// settings" and "claude code mcp config file location" (Google autocomplete, 2026-11-06). Facts come from the Claude
// Code docs (Connect Claude Code to tools via MCP, and Manage costs for the token advice), as of `checked`. Server URLs
// in the examples are the ones the docs use. Version numbers are left out because they change weekly.

const docs = "https://code.claude.com/docs/en/mcp";

const add = `# Remote HTTP server (recommended for cloud services)
claude mcp add --transport http notion https://mcp.notion.com/mcp

# With a bearer token
claude mcp add --transport http secure-api https://api.example.com/mcp \\
  --header "Authorization: Bearer your-token"

# Local stdio server: everything after -- is the server's own command
claude mcp add --env AIRTABLE_API_KEY=YOUR_KEY --transport stdio airtable \\
  -- npx -y airtable-mcp-server`;

const manage = `claude mcp list            # every configured server
claude mcp get notion      # one server's details
claude mcp remove notion   # remove it (run claude mcp logout notion first to revoke tokens)
claude mcp add-from-claude-desktop   # import from Claude Desktop (macOS, WSL)`;

const project = `{
  "mcpServers": {
    "api-server": {
      "type": "http",
      "url": "\${API_BASE_URL:-https://api.example.com}/mcp",
      "headers": {
        "Authorization": "Bearer \${API_KEY}"
      }
    }
  }
}`;

export const claudeCodeMcp: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Claude Code MCP: Servers, Config and .mcp.json | Crewmark AI",
      description:
        "How to set up MCP servers in Claude Code: claude mcp add for HTTP and stdio servers, local, project and user scopes, where the config file lives, .mcp.json with environment variables, OAuth and troubleshooting.",
    },
    breadcrumb: "Claude Code MCP guide",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-06" },
    hero: {
      kicker: "Blog · Claude Code",
      title: "Claude Code MCP: how to add servers and where the config lives",
      lead: "MCP (Model Context Protocol) servers connect Claude Code to outside tools and data, such as Notion, GitHub, Sentry, a database or your own API. You add them with `claude mcp add`, choose whether each one is just for you or shared with the team, and Claude can then call their tools. This guide covers adding HTTP and stdio servers, the three scopes and the config files behind them, `.mcp.json` with environment variables, signing in with OAuth, and what to check when a server won't connect.",
      cta: "Get started",
      secondary: "Jump to the setup",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "steps",
        id: "how-to",
        title: "How to add an MCP server to Claude Code",
        steps: [
          {
            title: "Pick the transport",
            text: "Use HTTP for remote, cloud-hosted servers; it's the recommended transport, and Claude Code falls back to the deprecated SSE transport when a server only offers that. Use stdio for servers that run as a local process. For stdio, everything after `--` is passed to the server untouched.",
            code: add,
          },
          {
            title: "Choose a scope",
            text: "Without `--scope`, a server is local: only you, only this project. Add `--scope project` to write it to `.mcp.json` for the team, or `--scope user` for all your projects. See the table below.",
          },
          {
            title: "Sign in if the server needs it",
            text: "Many remote servers use OAuth. Run `/mcp` inside Claude Code and choose the server to authenticate, or `claude mcp login <name>` in your shell. Headless `-p` runs can't open the sign-in flow, so sign in interactively first.",
          },
          {
            title: "Check it connected",
            text: "Run `/mcp` to see each server's status and tools, and `claude mcp list` in your shell. Then ask Claude to use the tool by name.",
          },
          {
            title: "Manage your servers",
            text: "List, inspect, remove or import servers from the command line. Disable one you rarely use from `/mcp` instead of removing it.",
            code: manage,
          },
        ],
        source: { label: "Source: Claude Code docs, Connect Claude Code to tools via MCP", href: docs },
      },
      {
        kind: "table",
        id: "scopes",
        title: "MCP scopes and config file locations",
        text: [
          "This is where Claude Code keeps MCP configuration. Note that MCP's \"local\" scope lives in `~/.claude.json`, not in `.claude/settings.local.json`.",
        ],
        headers: ["Scope", "Loads in", "Shared", "Stored in"],
        rows: [
          ["Local (default)", "This project only", "No", "`~/.claude.json`, under the project's path"],
          ["Project", "This project only", "Yes, commit it", "`.mcp.json` in the project root"],
          ["User", "All your projects", "No", "`~/.claude.json`, top level"],
          ["Plugin", "Wherever the plugin is enabled", "With the plugin", "The plugin's own config"],
          ["claude.ai connectors", "Sessions signed in with that claude.ai account", "Per account", "Your claude.ai settings"],
        ],
      },
      {
        kind: "steps",
        id: "mcp-json",
        title: "Share servers with .mcp.json",
        text: [
          "`.mcp.json` lets the whole team use the same servers. Keep secrets out of it with environment variables: `${VAR}` expands to the variable's value, and `${VAR:-default}` falls back to a default when it's unset. Expansion works in `command`, `args`, `env`, `url` and `headers`.",
        ],
        steps: [
          {
            title: "Reference variables instead of secrets",
            text: "Claude Code asks each person to approve project servers from `.mcp.json` the first time; `claude mcp reset-project-choices` resets those answers. A JSON entry with a `url` must also have a `type`, such as `http`.",
            code: project,
          },
        ],
      },
      {
        kind: "text",
        title: "Precedence, connectors and other details",
        points: [
          "When the same server is defined twice, Claude Code connects once, using the first of: local, project, user, plugin, claude.ai connector. Entries aren't merged; an organization's managed servers outrank all of them.",
          "If you sign in to Claude Code with a claude.ai account, connectors you added in claude.ai show up automatically.",
          "Claude Code can be an MCP server itself: `claude mcp serve` exposes its tools to another client, such as Claude Desktop.",
          "Servers can also offer prompts that appear as slash commands; see [Claude Code slash commands](/blog/claude-code-slash-commands).",
          "Removing a remote server deletes the tokens Claude Code stored but doesn't revoke them; run `claude mcp logout <name>` first for that.",
        ],
      },
      {
        kind: "text",
        title: "MCP and token usage",
        text: [
          "Tool definitions are deferred by default: only tool names and server instructions sit in context until Claude uses a tool, so a long list of servers costs less than it used to. Each server still adds something, so disable the ones you don't use in `/mcp`, and prefer a CLI such as `gh`, `aws` or `gcloud` when one exists, since it adds no tool listing at all. More in [how to reduce Claude Code token usage](/blog/reduce-claude-code-token-usage).",
        ],
      },
      {
        kind: "text",
        title: "Troubleshooting: when a server won't connect",
        points: [
          "Shows as needing authentication: open `/mcp` and choose Re-authenticate, or run `claude mcp login <name>`.",
          "\"has a url but no type\": add `\"type\": \"http\"` (or `sse` or `ws`) to the JSON entry; without a type Claude Code treats it as stdio.",
          "A stdio server's flags were swallowed: put `--` before the server's command so Claude Code doesn't parse them as its own.",
          "Missing-variable warning in `claude mcp list`: set the variable or give it a `:-default`.",
          "A project server never loads in `claude -p`: there's no approval prompt headlessly, so check your settings, or pass servers explicitly with `--mcp-config` and `--strict-mcp-config`.",
          "Server names added with `claude mcp` may only contain letters, numbers, hyphens and underscores.",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Give your AI employees the same tools you use",
        text: [
          "MCP is how Claude Code reaches your issue tracker, database or analytics. Crewmark turns a Claude Code, Codex, DeepSeek Harness or OpenCode session into an AI employee with a role, a goal and working hours, woken on a heartbeat to take the next issue from a board, with your project's MCP servers available.",
        ],
        steps: [
          {
            title: "Commit .mcp.json",
            text: "Project-scoped servers load in the employee's session like in yours; sign it in once interactively for servers that need OAuth.",
          },
          {
            title: "Let the heartbeat start the work",
            text: "During working hours the employee wakes every 15, 30 or 60 minutes in the same conversation; see [how to make Claude Code proactive](/proactive-claude-code).",
          },
          {
            title: "Give each role only what it needs",
            text: "An SEO employee gets Search Console; a programmer gets GitHub and Sentry. Read [what an AI employee is](/ai-employees).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Add an MCP server to Claude Code" },
    mid: {
      title: "Connected the tools. Who uses them while you're away?",
      text: "Crewmark wakes Claude Code on a heartbeat with a role, a goal and a board of issues, on the plan you already pay for.",
      button: "Get started",
    },
    faq: {
      title: "Claude Code MCP FAQ",
      items: [
        {
          q: "How do I add an MCP server to Claude Code?",
          a: "Run `claude mcp add --transport http <name> <url>` for a remote server, or `claude mcp add --transport stdio <name> -- <command>` for a local one. Then run `/mcp` in Claude Code to sign in if needed and check it connected.",
        },
        {
          q: "Where is the Claude Code MCP config file?",
          a: "Local and user-scoped servers are stored in `~/.claude.json` (local ones under the project's path). Project-scoped servers are in `.mcp.json` at the project root, which you can commit.",
        },
        {
          q: "What's the difference between local, project and user scope?",
          a: "Local is just you in one project (the default), project is shared with the team through `.mcp.json`, and user is just you in every project.",
        },
        {
          q: "How do I keep API keys out of .mcp.json?",
          a: "Reference environment variables with `${VAR}` or `${VAR:-default}` in `command`, `args`, `env`, `url` or `headers`, and set the variables on each machine.",
        },
        {
          q: "How do I use my Claude Desktop MCP servers in Claude Code?",
          a: "Run `claude mcp add-from-claude-desktop` and pick the servers to import. It works on macOS and WSL; add `--scope user` to make them available in every project.",
        },
        {
          q: "Do MCP servers use a lot of tokens?",
          a: "Less than before: tool definitions load only when Claude uses a tool. Each server still adds names and instructions, so disable unused ones and prefer CLIs where they exist.",
        },
        {
          q: "Can Claude Code act as an MCP server?",
          a: "Yes. `claude mcp serve` starts it as a stdio MCP server that other clients, such as Claude Desktop, can connect to.",
        },
      ],
    },
    cta: {
      title: "Connected tools, plus an employee to use them.",
      text: "Crewmark turns Claude Code, Codex and DeepSeek Harness sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Checked against the Claude Code docs (MCP and costs) on November 6, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by Anthropic. Claude and Claude Code are trademarks of Anthropic.",
  },
};
