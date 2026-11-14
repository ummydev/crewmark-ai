import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/deepseek-v4-1-flash, the fourth DeepSeek page, for "deepseek v4.1 flash", "... 1017", "... benchmark", "...
// price", "... huggingface", "... context window", "... vs v4", "... openrouter", "deepseek v4 pro vs flash", "deepseek
// flash pricing" and "deepseek flash api" (Google autocomplete, 2026-11-06; "deepseek v4.1 flash 1017" is also a
// rising query next to "deepseek harness" in Google Trends). Facts come only from DeepSeek: the API change log
// (2026-09-10 and 2026-10-17 entries), the news posts for V4.1-Flash-1017 and V4-Pro GA (2026-08-13), the pricing page
// and the Hugging Face model card, as of `checked`. Benchmark numbers are DeepSeek's own and are labelled as such;
// parameter counts aren't on the model card, so none are quoted.

const card = "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017";

const api = `curl https://api.deepseek.com/chat/completions \\
  -H "Authorization: Bearer $DEEPSEEK_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model": "deepseek-flash", "messages": [{"role": "user", "content": "Hello"}]}'`;

export const deepseekV41Flash: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "DeepSeek V4.1 Flash (1017): Price, Benchmarks, vs V4 Pro",
      description:
        "DeepSeek-V4.1-Flash-1017 explained: what changed on October 17, 2026, API price, 1M context, open weights on Hugging Face, DeepSeek's benchmark results, and when to use V4 Pro instead.",
    },
    breadcrumb: "DeepSeek V4.1 Flash",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-06" },
    hero: {
      kicker: "Blog · DeepSeek",
      title: "DeepSeek V4.1 Flash (1017): price, context, benchmarks and vs V4 Pro",
      lead: "DeepSeek-V4.1-Flash-1017 is the October 17, 2026 update of DeepSeek V4.1 Flash, the smallest model in DeepSeek's newest architecture, with image understanding and a 1M-token context. It's what the API serves as `deepseek-flash`, what DeepSeek's website and app use, and what DeepSeek Harness runs by default, and its weights are open under the MIT license. DeepSeek says it scores higher than the September release while finishing tasks faster with shorter outputs. Here's what it is, what it costs, how it compares with V4 Pro, and how to use it.",
      cta: "Get started",
      secondary: "Jump to pricing",
      secondaryHref: "#pricing",
    },
    sections: [
      {
        kind: "table",
        title: "DeepSeek V4.1 Flash at a glance",
        headers: ["", "DeepSeek-V4.1-Flash-1017"],
        rows: [
          ["Released", "V4.1 Flash on September 10, 2026; the 1017 update on October 17, 2026"],
          ["API model name", "`deepseek-flash` (older names `deepseek-v4-flash` and `deepseek-v4-flash-vision-exp` are served by it)"],
          ["Input", "Text and images"],
          ["Context window", "1M tokens; DeepSeek recommends `max_tokens` of 256K or more"],
          ["Weights", "Open on Hugging Face, MIT license"],
          ["Where it runs", "DeepSeek API, website and app; default in DeepSeek Harness"],
          ["Tuned for", "DeepSeek Harness (v0.2.1-rc.1 or later), Tencent CodeBuddy and WorkBuddy, per DeepSeek"],
        ],
      },
      {
        kind: "table",
        id: "pricing",
        title: "DeepSeek V4.1 Flash price vs V4 Pro",
        text: [
          "DeepSeek API prices in US dollars per million tokens on November 6, 2026. Off-peak rates apply outside 01:00–04:00 and 06:00–10:00 UTC on weekdays and are half of peak; the 1017 update didn't change prices. DeepSeek's Search and Fetch APIs cost $0.75 per 1,000 calls each.",
        ],
        headers: ["Per 1M tokens", "Flash, peak", "Flash, off-peak", "V4 Pro, peak", "V4 Pro, off-peak"],
        rows: [
          ["Input, cache hit", "$0.006", "$0.003", "$0.044", "$0.022"],
          ["Input, cache miss", "$0.30", "$0.15", "$1.32", "$0.66"],
          ["Output", "$1.20", "$0.60", "$3.96", "$1.98"],
        ],
      },
      {
        kind: "table",
        id: "benchmarks",
        title: "DeepSeek V4.1 Flash benchmarks (as reported by DeepSeek)",
        text: [
          "These are DeepSeek's own numbers from the model card, comparing the 1017 update with the September V4.1 Flash. DeepSeek ran Terminal-Bench 4.0 with the Claude Code harness and DeepSWE with Mini-SWE-V2. Vendors' benchmarks favor their own models; test on your own tasks before switching.",
        ],
        headers: ["Benchmark", "V4.1 Flash 1017", "V4.1 Flash (Sept)"],
        rows: [
          ["Terminal-Bench 4.0", "42.3", "31.2"],
          ["DeepSWE v1.1", "77.0", "74.2"],
          ["ProgramBench", "29.1", "20.3"],
          ["NL2Repo-Bench", "68.2", "65.4"],
          ["Automation-Bench v1.0.6", "60.5", "54.8"],
          ["Agents' Last Exam", "35.4", "31.8"],
          ["HLE (no tools)", "42.6", "36.8"],
        ],
      },
      {
        kind: "text",
        title: "V4.1 Flash vs V4 Pro: which to use",
        points: [
          "V4 Pro (`deepseek-v4-pro`, generally available since August 13, 2026) costs 4.4 times as much per input token and 3.3 times as much per output token, and takes text only; Flash adds image input.",
          "Both have a 1M-token context and adjustable reasoning effort (low, high and max).",
          "DeepSeek's own coding-agent setups default to Flash: DeepSeek Harness, and its recommended Claude Code settings, which map Sonnet and Haiku to Flash and only Opus to V4 Pro.",
          "A practical split: Flash for everyday agent work and subagents, V4 Pro when a hard task keeps failing on Flash.",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to use DeepSeek V4.1 Flash",
        steps: [
          {
            title: "Through the API",
            text: "Get an API key on platform.deepseek.com and call the model as `deepseek-flash`; the API is OpenAI- and Anthropic-compatible.",
            code: api,
          },
          {
            title: "In a coding agent",
            text: "Run it in DeepSeek Harness, where it's the default, or point Claude Code or Codex at DeepSeek; see [DeepSeek Harness](/blog/deepseek-harness) and [Claude Code with DeepSeek](/blog/claude-code-deepseek).",
          },
          {
            title: "Locally, from the open weights",
            text: "Download DeepSeek-V4.1-Flash-1017 from Hugging Face. The repository ships a reference prompt encoder and inference instructions instead of a chat template; DeepSeek recommends temperature 1.0 and top_p 1.0.",
          },
        ],
        source: { label: "Source: DeepSeek-V4.1-Flash-1017 on Hugging Face", href: card },
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "A cheap, capable model, working through your backlog",
        text: [
          "At Flash prices it's affordable to keep an agent busy all day. Crewmark turns a DeepSeek Harness, Claude Code, Codex or OpenCode session into an AI employee with a role, a goal and working hours, and wakes it on a heartbeat to take the next issue from a board.",
        ],
        steps: [
          {
            title: "Pick the agent and the model",
            text: "DeepSeek Harness runs V4.1 Flash by default; Claude Code and Codex can use it through DeepSeek's endpoint.",
          },
          {
            title: "Give it a role and a goal",
            text: "Read [what an AI employee is](/ai-employees) and how it differs from a [superagent](/blog/superagent).",
          },
          {
            title: "Let the heartbeat start the work",
            text: "During working hours it wakes every 15, 30 or 60 minutes and takes the next issue; see [how to make Claude Code proactive](/proactive-claude-code).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Use DeepSeek V4.1 Flash" },
    mid: {
      title: "A model this cheap should work all day.",
      text: "Crewmark wakes DeepSeek Harness, Claude Code or Codex on a heartbeat with a role, a goal and a board of issues.",
      button: "Get started",
    },
    faq: {
      title: "DeepSeek V4.1 Flash FAQ",
      items: [
        {
          q: "What is DeepSeek V4.1 Flash 1017?",
          a: "The October 17, 2026 update of DeepSeek V4.1 Flash, the smallest model in DeepSeek's newest architecture. It accepts text and images, has a 1M-token context, and is served as `deepseek-flash`.",
        },
        {
          q: "How much does DeepSeek V4.1 Flash cost?",
          a: "On the API, $0.30 per million input tokens on a cache miss ($0.006 on a hit) and $1.20 per million output tokens at peak; off-peak prices are half that.",
        },
        {
          q: "What is the context window of DeepSeek V4.1 Flash?",
          a: "1M tokens, with DeepSeek recommending `max_tokens` of at least 256K.",
        },
        {
          q: "Is DeepSeek V4.1 Flash open source?",
          a: "Its weights are open on Hugging Face under the MIT license, with a reference prompt encoder and inference instructions.",
        },
        {
          q: "DeepSeek V4.1 Flash vs V4 Pro: what's the difference?",
          a: "V4 Pro costs 4.4 times as much per input token and 3.3 times per output token, and is text-only; Flash accepts images and is the default for DeepSeek's coding-agent setups. Both have a 1M context.",
        },
        {
          q: "What changed from V4.1 Flash to 1017?",
          a: "DeepSeek reports higher scores on agent and coding benchmarks, shorter outputs and faster task completion, at the same price and model name.",
        },
        {
          q: "Can I use DeepSeek V4.1 Flash in Claude Code?",
          a: "Yes. DeepSeek documents environment variables that point Claude Code at its Anthropic-compatible endpoint with `deepseek-flash`; see [Claude Code with DeepSeek](/blog/claude-code-deepseek).",
        },
      ],
    },
    cta: {
      title: "Turn DeepSeek V4.1 Flash into an AI employee.",
      text: "Crewmark turns DeepSeek Harness, Claude Code, Codex and OpenCode sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Checked against DeepSeek's API docs (change log, news, pricing) and the Hugging Face model card on November 6, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by DeepSeek. Benchmark figures are DeepSeek's own. Product names are trademarks of their owners.",
  },
};
