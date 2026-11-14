import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/claude-message-threads, the third trending-term post (MC-82), for "claude message threads", "anthropic message
// threads", "message-threads-2026-08-12", "claude api thread" and "claude code faster". Facts come from Anthropic's
// announcement (claude.com/resources/articles/message-threads, November 2, 2026) and the message threads page of the
// Claude Platform docs, as of `checked`. The 35% figure is Anthropic's own Claude Code measurement; the announcement
// gives no baseline or opt-out, and the Claude Code docs don't mention threads yet, so the copy says only that.

const docs = "https://platform.claude.com/docs/en/build-with-claude/message-threads";

const sdk = `import anthropic

client = anthropic.Anthropic()

# Create the helper. This call sends no request.
thread = client.beta.messages.thread(
    model="claude-opus-5-5",
    max_tokens=1024,
    cache_control={"type": "ephemeral"},
    system="You are a coding agent. Keep replies short.",
)

# Turn 1 creates the thread and sends the full conversation
thread.send({"role": "user", "content": "Read the failing test and explain it."})

# Turn 2 sends only the new message
reply = thread.send({"role": "user", "content": "Now fix it."})`;

const raw = `# Turn 1: the full conversation, plus
"thread": {"type": "create"}

# Every later turn: only the new messages, no system or tools, plus
"thread": {"type": "continue", "previous_message_id": "<id of the last response>"}

# On every request of the thread
anthropic-beta: message-threads-2026-08-12`;

export const claudeMessageThreads: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Claude Message Threads: Faster Agent Sessions | Crewmark AI",
      description:
        "Anthropic's message threads send a Claude conversation once, then only what's new. What changes for Claude Code, how to use the beta API, the 5-minute expiry and the limits.",
    },
    breadcrumb: "Claude message threads",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-04" },
    hero: {
      kicker: "Blog · Claude",
      title: "Claude message threads: what they are and how to use them",
      lead: "Message threads are a Claude API feature in public beta since November 2, 2026. Instead of uploading the whole conversation on every turn, an agent sends it once and then only the new messages. Anthropic says it has turned them on for most Claude Code users, and that median time to first token drops by about 35% on requests of 500k to 1M tokens. This guide covers what changes, what doesn't, how to use them in your own agent, and the limits.",
      cta: "Get started",
      secondary: "Jump to setup",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "text",
        title: "What message threads are",
        text: [
          "Without a thread, every turn of an agent loop uploads the full conversation again, and the API validates and tokenizes all of it again. A coding agent makes hundreds of requests in a session, so once the conversation reaches hundreds of thousands of tokens, that resending delays the start of Claude's answer. With a thread, the API keeps the conversation between turns and most of that work covers only the new turn.",
        ],
        points: [
          "Faster first token: Anthropic measured a median drop of about 35% on Claude Code requests of 500k to 1M tokens. The longer the conversation, the more it helps.",
          "Smaller requests: each turn carries only new messages, tool results or screenshots.",
          "Same tokens and price: Claude still reads the full conversation every turn, and pricing and rate limits don't change.",
          "Short-lived: a thread expires 5 minutes after its last request and is held in memory, encrypted, never written to disk.",
          "Where: the Claude API, Claude Platform on AWS, Claude Models on Google Cloud (Anthropic managed) and Microsoft Foundry, on every model.",
        ],
      },
      {
        kind: "table",
        title: "With and without a thread",
        headers: ["", "Without a thread", "With a thread"],
        rows: [
          ["Each request sends", "The full conversation, `system` and `tools`", "Only the new messages and the previous response `id`"],
          ["Time to first token", "Grows as the conversation grows", "Lower and steadier in long conversations"],
          ["Tokens billed", "The full conversation each turn", "The same"],
          ["Price and rate limits", "Standard", "Unchanged"],
          ["Who keeps the conversation", "Your app", "Your app, plus the API for 5 minutes after each request"],
          ["Zero data retention", "Eligible", "Not eligible"],
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to use message threads in your own agent",
        text: [
          "Claude Code already does this for you. To use threads in an agent you build on the Messages API, the SDK's thread helper is the shortest path.",
        ],
        steps: [
          {
            title: "Create a thread helper",
            text: "Pass the same fields as a Messages request. The helper adds the `message-threads-2026-08-12` beta header, creates the thread on the first turn, sends only new messages after that, and keeps the full conversation in memory.",
            code: sdk,
          },
          {
            title: "Or send the thread field yourself",
            text: "With cURL or a plain `create` call, add `thread` to every request and send the beta header on each one. Always continue from the latest response `id`; each `id` can be continued once.",
            code: raw,
          },
          {
            title: "Keep model and settings fixed",
            text: "`system` and `tools` go on the first request only. `model`, `thinking`, `tool_choice`, the top-level `cache_control` and the beta headers must stay the same on every turn; a change returns a 400 error with `thread_fingerprint_mismatch`. To change them, start a new thread.",
          },
          {
            title: "Keep your own copy and replay on 404",
            text: "Threads are best-effort. When a continue request returns 404 with `thread_not_found` (the thread expired, the last turn wasn't stored, or a fallback model wrote it), send the full conversation again in a new create request. The SDK helper does this once by itself.",
          },
          {
            title: "Turn on prompt caching",
            text: "A thread doesn't cache your prompt for you. Send a top-level `cache_control` on every request so each turn reads the earlier conversation from the cache; a request with `thread` can carry at most 4 breakpoints.",
          },
        ],
        source: { label: "Source: Anthropic's message threads docs", href: docs },
      },
      {
        kind: "text",
        title: "Limits and what threads don't support",
        points: [
          "Not with Message Batches, token counting, compaction on demand, or context editing (apart from `clear_thinking_20251015` with `keep: \"all\"`).",
          "Not for organizations with HIPAA readiness or Inference hooks; those requests return a 400 error with `thread_unsupported_request`.",
          "Not eligible for zero data retention: the API holds a thread in memory and deletes it no more than 1 hour after its last use.",
          "There's no API to list, read or delete a thread, and a thread is append-only. To compact, start a new thread from your own summary.",
          "After a refusal, don't continue the thread: start a new one without the turn that led to it.",
          "Use the same API key and workspace for every request of a thread, or it can't be continued.",
        ],
      },
      {
        kind: "text",
        title: "What it means for Claude Code users",
        text: [
          "You don't need to change anything: Anthropic says threads are on by default for most Claude Code users. The gain shows in long sessions, where a turn deep into a big conversation starts answering sooner. Your usage doesn't drop, since Claude still reads the whole conversation each turn.",
          "Per the API docs, a thread expires 5 minutes after its last request. When you come back to a session after a longer pause, the first request sends the full conversation again, and the turns after it are fast. That's also what happens to a [proactive Claude Code session](/proactive-claude-code) that wakes on a schedule.",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Keep long Claude Code sessions working on their own",
        text: [
          "Message threads make long sessions faster; Crewmark makes them proactive. It gives a Claude Code, Codex, DeepSeek Harness or OpenCode session a role, a goal and working hours, and wakes it on a heartbeat in the same conversation, so it keeps its context and takes the next issue from a board.",
        ],
        steps: [
          {
            title: "Turn a session into an employee",
            text: "Pick a role such as software engineer or SEO specialist, write its goal as a number, and run the setup command in Claude Code.",
          },
          {
            title: "Let the heartbeat start the work",
            text: "During its working hours the employee wakes every 15, 30 or 60 minutes in the same conversation; see [how to make Claude Code proactive](/proactive-claude-code). Several can run side by side, as in [multiple Claude Code agents](/blog/multiple-claude-code-agents).",
          },
          {
            title: "Assign issues and answer its messages",
            text: "Put work on the board; the employee takes it, comments as it goes and messages you when it needs a decision. Read [what an AI employee is](/ai-employees).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Use Claude message threads in your own agent" },
    mid: {
      title: "Running long Claude Code sessions?",
      text: "Crewmark wakes them on a heartbeat with a role, a goal and a board of issues, on the plan you already pay for.",
      button: "Get started",
    },
    faq: {
      title: "Claude message threads FAQ",
      items: [
        {
          q: "What are Claude message threads?",
          a: "A Claude API feature, in public beta since November 2, 2026, that keeps a conversation on Anthropic's side between turns. The first request sends the full conversation and creates a thread; each later request sends only the new messages and the previous response's `id`.",
        },
        {
          q: "Do message threads make Claude Code faster?",
          a: "In long sessions, yes. Anthropic says threads are on by default for most Claude Code users and that median time to first token drops by about 35% on requests of 500k to 1M tokens. Short conversations gain little.",
        },
        {
          q: "Do message threads save tokens or money?",
          a: "No. Claude still reads the full conversation every turn, so token usage, pricing and rate limits stay the same. The gain is smaller requests and a faster first token. For lower cost, use prompt caching.",
        },
        {
          q: "How long does a thread last?",
          a: "It expires 5 minutes after its last request, and each stored response restarts the 5 minutes. The API deletes it no more than 1 hour after its last use. After that, send the full conversation again to start a new thread.",
        },
        {
          q: "What is the message threads beta header?",
          a: "`anthropic-beta: message-threads-2026-08-12`, sent on every request of the thread. The SDK thread helper adds it for you.",
        },
        {
          q: "Are message threads eligible for zero data retention?",
          a: "No. A thread's contents are held in memory, encrypted under a server-managed key, never written to durable storage, and deleted no more than 1 hour after last use. Organizations with HIPAA readiness can't use threads.",
        },
        {
          q: "Are message threads the same as Managed Agents session threads?",
          a: "No. Message threads are a Messages API feature; session threads belong to Claude Managed Agents.",
        },
      ],
    },
    cta: {
      title: "Make your long Claude Code sessions proactive.",
      text: "Crewmark turns Claude Code, Codex and DeepSeek Harness sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Checked against Anthropic's announcement and the Claude Platform docs on November 4, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by Anthropic. Claude and Claude Code are trademarks of Anthropic.",
  },
};
