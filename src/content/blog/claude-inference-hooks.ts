import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/claude-inference-hooks, the sixth trending-term post (MC-82), for "claude inference hooks", "claude inference
// hooks documentation", "claude enterprise inference hooks", "claude code inference hooks", "anthropic claude
// inference hooks" and "claude security center" (Google autocomplete, 2026-11-06). Facts come from Anthropic's
// announcement of November 5, 2026 (claude.com/resources/articles/claude-enterprise-security-updates), the Help Center
// overview and the platform docs (Inference hooks overview, configuration and endpoint pages), as of `checked`. The
// announcement names no security vendors, so none are listed. The Claude Code hooks column follows the Claude Code
// hooks docs.

const docs = "https://platform.claude.com/docs/en/manage-claude/inference-hooks";

const verdict = `// Allow the request
{ "action": "allow" }

// Deny it: deny_reason is shown to the user (max 500 characters),
// reference_id goes to your compliance activity feed only
{
  "action": "deny",
  "deny_reason": "This prompt appears to contain customer card data.",
  "reference_id": "scan_01HXPT4R9V"
}`;

export const claudeInferenceHooks: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Claude Inference Hooks: How They Work, Setup | Crewmark AI",
      description:
        "Claude inference hooks, generally available since November 5, 2026, send every prompt and tool call to your security server for an allow or deny verdict. How they work, setup, limits, and how they differ from Claude Code hooks.",
    },
    breadcrumb: "Claude inference hooks",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-06" },
    hero: {
      kicker: "Blog · Claude",
      title: "Claude inference hooks: an allow-or-deny check before every prompt",
      lead: "Inference hooks let a Claude Enterprise organization send every prompt, and optionally every tool call, to its own security server and wait for an allow or deny verdict before Claude runs. They became generally available on November 5, 2026, alongside a new security center in beta. Because the check happens on Anthropic's servers, one setup covers claude.ai, Claude Code, Cowork and the other Claude products, with nothing installed on laptops. This guide covers how they work, how to set them up, their limits, and how they differ from the hooks you write in Claude Code.",
      cta: "Get started",
      secondary: "How to set them up",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "text",
        title: "How inference hooks work",
        text: [
          "Your organization (or its security vendor) runs an AI security server: an HTTPS endpoint. When someone sends a prompt, Anthropic posts the conversation transcript to that endpoint, signed with the Standard Webhooks scheme, and waits for a verdict. On allow, inference proceeds; on deny, the request never reaches the model and the user sees your reason plus a standing message from your admins.",
        ],
        points: [
          "Two events: `prompt`, before each governed inference request, and `tool_call`, before the tool calls in Claude's response run, when Validate tool calls is on.",
          "One setup for the whole organization: claude.ai, Claude Desktop and mobile, Claude Code (CLI included), Cowork, Claude for Microsoft 365, Claude Tag and Claude in Chrome.",
          "What your server sees: the transcript text, tool calls and results, and text extracted from attachments. Never raw file or image bytes, system prompts or tool definitions.",
          "Verdicts are only allow or deny. Rewriting or redacting a prompt isn't supported.",
          "Each denial is logged in your organization's Activity Feed.",
        ],
      },
      {
        kind: "table",
        title: "Inference hooks vs Claude Code hooks vs the Compliance API",
        text: [
          "The names are close, but they are three different tools. Claude Code hooks are configured per project or per user and run on the developer's machine; inference hooks are set once by the organization and run on Anthropic's side.",
        ],
        headers: ["", "Inference hooks", "Claude Code hooks", "Compliance API"],
        rows: [
          ["Who sets it up", "Organization Owner or Primary owner", "Each developer or project, in `settings.json`", "Security or compliance team"],
          ["Where it runs", "Anthropic's servers call your HTTPS endpoint", "Shell commands on the developer's machine", "You call Anthropic's API"],
          ["When", "Before inference, and before tool calls run", "On events such as PreToolUse, PostToolUse and Stop", "After the fact"],
          ["Covers", "Every Claude product in the Enterprise org", "Claude Code sessions with that config", "Activity, chats, files, transcripts"],
          ["Can block", "Yes: allow or deny", "Yes, for events that support it", "No: audit and export"],
          ["Plan", "Claude Enterprise", "Any Claude Code user", "Claude Enterprise"],
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to set up inference hooks",
        text: [
          "You need the Owner or Primary owner role (Admin isn't enough) and a public HTTPS endpoint on port 443. Tunnels such as ngrok are blocked, so host the test server on a domain you control.",
        ],
        steps: [
          {
            title: "Allow the feature",
            text: "In claude.ai, open Organization settings → Data and privacy and turn on Allow for your organization under Inference hooks. This doesn't start inspection: Enforce verdicts stays off.",
          },
          {
            title: "Add your endpoint and keep the signing secret",
            text: "Click Configure, enter your `https://` URL and save. The first save shows a webhook signing secret once: store it, because your server uses it to verify every request.",
          },
          {
            title: "Add headers and test",
            text: "Add up to 16 static headers so your server can authenticate Anthropic, then click Test connection. It sends a synthetic prompt and reports the verdict and the round trip.",
          },
          {
            title: "Return a verdict as HTTP 200 JSON",
            text: "Answer every request with HTTP 200 and an `action`. A non-200 status is a failure, not a deny.",
            code: verdict,
          },
          {
            title: "Choose failure handling and a timeout",
            text: "Block the request fails closed, Allow the request fails open. The verdict timeout is 1 to 10,000 ms, 5,000 by default; a slow verdict counts as unreachable. Repeated failures trip a circuit breaker that applies your failure setting until the server recovers.",
          },
          {
            title: "Roll out gradually, then enforce",
            text: "Start in Shadow mode, which sends verdicts without blocking anything, inspect a percentage of requests, exclude custom roles if needed, then turn on Enforce verdicts. Changes reach every server in about a minute.",
          },
        ],
        source: { label: "Source: Claude Platform docs, Inference hooks", href: docs },
      },
      {
        kind: "text",
        title: "Limits and gotchas",
        points: [
          "Enterprise only: not on Team, Pro or Max, not for Claude Platform (API) organizations, and not on Amazon Bedrock or Google Cloud.",
          "Image-only content, such as a screenshot of a document, isn't inspected because raw bytes are never sent.",
          "A denied message stays in the transcript and is resent with every later message. In Claude Code, run `/rewind` to the prompt that brought it in, or `/clear` to start over.",
          "Some of Anthropic's own background model calls aren't governed, such as hosted Claude Security scans, Code Review on GitHub pull requests and smart reports. Running `/code-review` locally in Claude Code is governed.",
          "In voice mode a small share of tool calls isn't sent, so don't rely on hooks as the only control there.",
          "The same announcement added a security center (beta) that compares your Claude, Cowork and Claude Code settings with Anthropic's recommended configuration, plus centralized management and access controls in beta.",
        ],
      },
      {
        kind: "text",
        title: "Why this matters for agents that run on their own",
        text: [
          "When Claude Code works unattended, on a schedule or in the background, nobody reads each prompt before it's sent. Inference hooks give a company one inline check on every request and tool call, wherever the agent runs, and shadow mode lets security teams tune the policy before blocking anything. For per-project guardrails on a single machine, Claude Code's own hooks and permission rules still apply; see [Claude Code plan mode](/blog/claude-code-plan-mode) for the permission modes.",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Guardrails for AI employees that work while you're away",
        text: [
          "Crewmark turns a Claude Code, Codex, DeepSeek Harness or OpenCode session into an AI employee with a role, a goal and working hours, woken on a heartbeat to take the next issue from a board. On a Claude Enterprise plan, inference hooks check its prompts like anyone else's.",
        ],
        steps: [
          {
            title: "Decide what needs your yes",
            text: "Each employee asks before risky actions, such as publishing, merging or spending money, and you approve from one inbox.",
          },
          {
            title: "Keep the record on the board",
            text: "Every issue keeps the employee's comments and status changes, so you can review what it did next to your security team's logs.",
          },
          {
            title: "Let the heartbeat start the work",
            text: "During working hours the employee wakes every 15, 30 or 60 minutes in the same conversation; see [how to make Claude Code proactive](/proactive-claude-code) and [what an AI employee is](/ai-employees).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Set up Claude inference hooks" },
    mid: {
      title: "Security is set. Now give Claude Code a job.",
      text: "Crewmark wakes Claude Code on a heartbeat with a role, a goal and a board of issues, on the plan you already pay for.",
      button: "Get started",
    },
    faq: {
      title: "Claude inference hooks FAQ",
      items: [
        {
          q: "What are Claude inference hooks?",
          a: "A Claude Enterprise feature that sends each prompt, and optionally each tool call, to your organization's security server, which answers allow or deny before Claude runs. They became generally available on November 5, 2026.",
        },
        {
          q: "Do inference hooks work with Claude Code?",
          a: "Yes. One configuration covers every Claude product in the Enterprise organization, including Claude Code in the CLI and the desktop app, with nothing to install on developers' machines.",
        },
        {
          q: "How are inference hooks different from Claude Code hooks?",
          a: "Claude Code hooks are shell commands each developer or project configures in `settings.json` and run locally on events such as PreToolUse. Inference hooks are set once by the organization and run on Anthropic's servers before inference, for every Claude product.",
        },
        {
          q: "Which plans have inference hooks?",
          a: "Claude Enterprise only, configured by the Owner or Primary owner. They aren't available to Claude Platform API organizations or on Amazon Bedrock or Google Cloud.",
        },
        {
          q: "Can an inference hook redact sensitive data?",
          a: "No. Verdicts are allow or deny only; rewriting or redacting a prompt isn't supported.",
        },
        {
          q: "What happens if my security server is down?",
          a: "Your failure handling setting decides: block the request (fail closed) or let it through uninspected (fail open). A circuit breaker stops calling a failing server and resets when it recovers.",
        },
        {
          q: "What is the Claude security center?",
          a: "A beta page in Organization settings, announced with inference hooks, that compares your Claude, Cowork and Claude Code settings with Anthropic's recommended configuration and produces a report for auditors.",
        },
      ],
    },
    cta: {
      title: "AI employees on Claude Code, inside your guardrails.",
      text: "Crewmark turns Claude Code, Codex and DeepSeek Harness sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Checked against Anthropic's announcement, the Claude Help Center and the Claude Platform docs on November 6, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by Anthropic. Claude and Claude Code are trademarks of Anthropic.",
  },
};
