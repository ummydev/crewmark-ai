import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/gemini-4-hydrogen, MC-431 (CMO, from the 11-13 trend report): Google's fast Gemini 4 model, released
// 2026-11-12, written the day after like /blog/claude-fable-5-2. Keywords from Google autocomplete (2026-11-13): "gemini 4
// hydrogen" (vs 3.8 flash, benchmarks, vs argon, pricing, cost, reddit, model card, artificial analysis, vs carbon),
// "gemini 4 hydrogen vs" (3.1 pro, argon vs carbon, sonnet 5.5, opus 5.5), "gemini 4 hydrogen api (cost)".
// Facts only from Google: the announcement (blog.google, "Introducing Gemini 4 Hydrogen"), the Gemini API pricing and
// models docs (ai.google.dev/gemini-api/docs/pricing and /models), checked 2026-11-13. Benchmarks are Google's own
// numbers. Claude prices come from /blog/claude-fable-5-2 (Anthropic's docs, 2026-11-10). Google's announcement doesn't
// compare Hydrogen with Claude, so this page compares prices and specs only, never quality.

const blog = "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/";

const api = `# Gemini API: model code gemini-4-hydrogen
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-4-hydrogen:generateContent" \\
  -H "x-goog-api-key: $GEMINI_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"contents": [{"parts": [{"text": "Find and fix the failing test in this diff"}]}]}'`;

export const gemini4Hydrogen: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Gemini 4 Hydrogen: Pricing, Benchmarks, vs Argon and 3.8 Flash",
      description:
        "Gemini 4 Hydrogen, Google's fast coding and agent model: $1.50 / $7.50 per million tokens, 1M context, four thinking levels, benchmarks, and how it compares with Argon, Carbon, 3.8 Flash and Claude.",
    },
    breadcrumb: "Gemini 4 Hydrogen",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-13" },
    hero: {
      kicker: "Blog · New model",
      title: "Gemini 4 Hydrogen: pricing, benchmarks and how it compares",
      lead: "Google released Gemini 4 Hydrogen on November 12, 2026: a fast Gemini 4 model for everyday coding and agentic work, priced at $1.50 per million input tokens and $7.50 per million output tokens across its whole 1 million-token context. It sits below Gemini 4 Carbon and Argon, which Google keeps for deep, long-horizon reasoning, and it replaces Gemini 3.8 Flash as the model most people will reach for. Here's what's new, the numbers Google published, how its price compares with Argon, Carbon, 3.8 Flash and Claude, and where you can use it.",
      cta: "Get started",
      secondary: "See the pricing",
      secondaryHref: "#pricing",
    },
    sections: [
      {
        kind: "table",
        id: "at-a-glance",
        title: "Gemini 4 Hydrogen at a glance",
        headers: ["", "Gemini 4 Hydrogen"],
        rows: [
          ["Released", "November 12, 2026, by Google"],
          ["Model code", "`gemini-4-hydrogen`"],
          ["Built for", "Fast execution in coding and agentic workflows"],
          ["Context", "1 million tokens in, up to 1 million tokens out"],
          ["Thinking levels", "Low, medium, high (default) and a new xhigh"],
          ["API price", "$1.50 input, $7.50 output per million tokens, flat across the context window; a free tier in the Gemini API"],
          ["Where", "Gemini API, Google AI Studio, Android Studio, Gemini for business, the Gemini app, Google Search, and Google Antigravity for paid Google AI Pro and Ultra subscribers"],
        ],
      },
      {
        kind: "text",
        id: "whats-new",
        title: "What's new in Gemini 4 Hydrogen",
        points: [
          "A fast model in the Gemini 4 family: Google keeps Carbon and Argon for deep, long-horizon reasoning and positions Hydrogen for rapid execution, on its own or as the worker beside them.",
          "Orchestrator in Google Antigravity switches between Carbon and Hydrogen in one session. Google says it reached near-Carbon success on Terminal-Bench 4.0 while using 24% less quota and finishing 19% faster.",
          "A big step up from Gemini 3.8 Flash, per Google: 2.5 times faster at the default high setting, Terminal-Bench 4.1 up from 18.2% to 57%, and more than five times fewer fabricated claims.",
          "Batched exploration of large repositories: it reads and searches files in parallel rather than one by one. Partners saw it run 2 to 2.8 times faster with 12% to 23% fewer tokens than 3.8 Flash.",
          "Four thinking levels, including a new xhigh, so you pay for only the reasoning a task needs.",
          "Safety in agentic work: Google reports up to 81% less overreach, 12 times fewer misaligned actions and shortcuts in tool-use and coding evaluations, and a 96.7% honesty rate on its internal agent evaluation.",
        ],
      },
      {
        kind: "table",
        id: "benchmarks",
        title: "Gemini 4 Hydrogen benchmarks",
        text: [
          "These are the numbers Google published in its announcement; independent results will follow. Where Google gave a comparison, it's in the last column.",
        ],
        headers: ["Benchmark", "Gemini 4 Hydrogen", "Compared with"],
        rows: [
          ["Artificial Analysis Intelligence Index", "51 at high; 54 at xhigh", "Gemini 4 Argon: 50"],
          ["Terminal-Bench 4.1", "57%", "Gemini 3.8 Flash: 18.2%"],
          ["HLE-Diamond", "58.8%", "Leads its class"],
          ["Vals Tax Agent Bench", "52.3%", "#1 overall"],
          ["Vals Legal Research Bench", "55.8%", "Tied for #1"],
          ["Multimodal Knowledge Agent (MKA)", "53.4%", "Ahead of other models, per Google"],
          ["Agents' Last Exam v1.1", "71.6%", "Ahead of other models, per Google"],
          ["Agent Arena (arena.ai)", "#5", "Live ranking"],
        ],
      },
      {
        kind: "table",
        id: "pricing",
        title: "Gemini 4 Hydrogen pricing",
        text: [
          "Gemini API prices per million tokens in USD, from Google's pricing page on November 13, 2026. Output prices include thinking tokens. Carbon and Argon have launch prices until November 30, then double; 3.8 Flash's price doubles on January 1, 2027. Claude prices are Anthropic's, from our [Claude Fable 5.2](/blog/claude-fable-5-2) post.",
        ],
        headers: ["Model", "Input", "Output", "Batch (input / output)", "Free tier"],
        rows: [
          ["Gemini 4 Hydrogen", "$1.50", "$7.50", "$0.75 / $3.75", "Yes"],
          ["Gemini 4 Argon", "$2.00 until Nov 30, then $4.00", "$10.00 until Nov 30, then $20.00", "$1.00 / $5.00, then $2.00 / $10.00", "No"],
          ["Gemini 4 Carbon", "$2.00 until Nov 30, then $4.00", "$10.00 until Nov 30, then $20.00", "$1.00 / $5.00, then $2.00 / $10.00", "No"],
          ["Gemini 3.8 Flash", "$0.75 until Dec 31, then $1.50", "$3.75 until Dec 31, then $7.50", "-", "Yes"],
          ["Claude Sonnet 5.5", "$2", "$10", "$1 / $5", "-"],
          ["Claude Opus 5.5", "$4", "$20", "$2 / $10", "-"],
        ],
      },
      {
        kind: "text",
        id: "vs-argon-carbon",
        title: "Gemini 4 Hydrogen vs Argon vs Carbon",
        text: [
          "Google splits the work by depth. Carbon is its most capable reasoning model, for complex software engineering, deep math and science, and autonomous multi-step agents. Argon is the efficient frontier model, with faster responses and lower token spend than Carbon. Hydrogen is for fast, everyday coding and agentic work, and it can run as the worker or verifier while Carbon coordinates.",
          "On price, Hydrogen costs less than Argon and Carbon today and the gap grows on December 1, when their launch prices end. On Google's numbers it also edges past Argon on the Artificial Analysis Intelligence Index (51 vs 50 at high). Neither Carbon nor Argon has a free tier in the Gemini API; Hydrogen does.",
        ],
      },
      {
        kind: "text",
        id: "vs-flash",
        title: "Gemini 4 Hydrogen vs Gemini 3.8 Flash",
        text: [
          "If you run on 3.8 Flash, Google pitches Hydrogen as the upgrade: faster at its default setting, more than three times the Terminal-Bench 4.1 score and far fewer fabricated claims. It costs twice as much per token as 3.8 Flash until December 31; from January 1, 2027 the two list at the same $1.50 and $7.50. Google's partners also report 12% to 23% fewer tokens per task, which offsets part of the difference.",
        ],
      },
      {
        kind: "text",
        id: "vs-claude",
        title: "Gemini 4 Hydrogen vs Claude Sonnet 5.5 and Opus 5.5",
        text: [
          "Google's announcement doesn't compare Hydrogen with Claude, so here are the facts that can be compared. At $1.50 and $7.50 per million tokens, Hydrogen lists below Claude Sonnet 5.5 ($2 and $10) and well below Opus 5.5 ($4 and $20), and it offers a 1 million-token context with up to 1 million output tokens. Claude Code and Codex run their own vendors' models, so the choice of model usually follows the agent you work in; for how those two compare, see [Claude Code vs Codex](/blog/claude-code-vs-codex).",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to use Gemini 4 Hydrogen",
        steps: [
          { title: "Try it in Google AI Studio", text: "Pick Gemini 4 Hydrogen in AI Studio; it's available on every AI Studio tier, including free." },
          { title: "Call it from the Gemini API", text: "Use the model code `gemini-4-hydrogen`. Leave thinking at the default high, and move to medium or low when speed matters more than depth.", code: api },
          { title: "Code with it in Google Antigravity", text: "Paid Google AI Pro and Ultra subscribers get it in Antigravity, where Orchestrator can switch between Carbon and Hydrogen in one session." },
          { title: "Use it in other agents", text: "Coding agents that accept a Gemini API key can call `gemini-4-hydrogen` once they list the model; check your agent's model list." },
        ],
        source: { label: "Source: Google, Introducing Gemini 4 Hydrogen", href: blog },
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "A faster model is half of it. The other half is a job.",
        text: [
          "Models keep getting faster and cheaper, and the agents around them still wait for the next prompt. Crewmark turns your coding agent sessions into AI employees with a role, a goal in numbers, working hours and a heartbeat, so they take the next issue from a board on their own.",
        ],
        steps: [
          { title: "Pick a role", text: "From the [AI employee roles](/ai-employees), such as an [AI software engineer](/ai-employees/software-engineer)." },
          { title: "Put the work on a board", text: "Assign issues, make the regular ones repeat, and let the heartbeat wake the employee to take the next one." },
          { title: "See what it can do", text: "Jobs with setup and rules for each agent are in [Claude Code use cases](/use-cases/claude-code) and [Codex use cases](/use-cases/codex)." },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Use Gemini 4 Hydrogen" },
    mid: {
      title: "Want your agents working through issues on a schedule?",
      text: "Crewmark gives each agent a role, a heartbeat and a shared board, so it takes the next job on its own.",
      button: "Get started",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "What is Gemini 4 Hydrogen?",
          a: "Google's fast Gemini 4 model for everyday coding and agentic work, released on November 12, 2026. It sits below Gemini 4 Carbon and Argon and has a 1 million-token context with up to 1 million output tokens.",
        },
        {
          q: "How much does Gemini 4 Hydrogen cost?",
          a: "In the Gemini API, $1.50 per million input tokens and $7.50 per million output tokens, flat across the context window; batch is $0.75 and $3.75. There's a free tier, and it's in the Gemini app for everyone.",
        },
        {
          q: "Is Gemini 4 Hydrogen better than Argon?",
          a: "Google positions them differently: Argon and Carbon for deep, long-horizon reasoning, Hydrogen for fast execution. On the Artificial Analysis Intelligence Index, Google reports Hydrogen at 51 at its default setting and Argon at 50, and Hydrogen costs less.",
        },
        {
          q: "Gemini 4 Hydrogen vs 3.8 Flash: should I switch?",
          a: "Google reports Hydrogen 2.5 times faster at its default setting, with Terminal-Bench 4.1 at 57% against 18.2% and far fewer fabricated claims. It costs twice as much per token as 3.8 Flash until December 31, 2026; from January 1, 2027 both list at $1.50 and $7.50.",
        },
        {
          q: "What is Gemini 4 Hydrogen's model code?",
          a: "`gemini-4-hydrogen`, in the Gemini API and Google AI Studio.",
        },
        {
          q: "Where is the Gemini 4 Hydrogen model card?",
          a: "Google published it as a PDF: [Gemini 4 Hydrogen model card](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-4-Hydrogen-Model-Card.pdf).",
        },
      ],
    },
    cta: {
      title: "Put the newest models on a standing job.",
      text: "Crewmark turns coding agent sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Checked against Google's announcement and the Gemini API pricing and models pages on November 13, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by Google or Anthropic. Gemini and Claude are trademarks of their owners.",
  },
};
