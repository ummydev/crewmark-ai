import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/claude-fable-5-2, for "fable 5.2", "claude fable 5.2", "fable 5.2 vs opus 5.5" (cost, pricing, usage, reddit),
// "fable 5.2 vs 5.1", "fable 5.2 vs mythos 5.2", "fable 5.2 benchmarks", "fable 5.2 pricing / cost", "fable 5.2 context
// window", "fable 5.2 release date", "claude fable 5.2 system card", "fable 5.2 claude code" (Google autocomplete,
// 2026-11-10, the day after launch; Alex asked for it the same day). Facts come only from Anthropic: the product page
// (anthropic.com/claude/fable), the launch post (anthropic.com/claude-fable-and-mythos-5-2), the Claude Platform docs
// (whats-new-fable-5-2, models overview) and Claude Code's fast mode docs, checked 2026-11-10. Press reports disagreed on
// prices; the copy uses Anthropic's pricing table. Benchmarks are Anthropic's own and labelled as such.

const docs = "https://platform.claude.com/docs/en/models/fable-5-2/whats-new-fable-5-2";

const claudeCode = `# Update Claude Code, then pick the model for this session
claude update
/model                       # choose Claude Fable 5.2

# Or start a session on it directly
claude --model claude-fable-5-2

# Fast mode on Fable 5.2 (Claude Code v2.1.321 or later)
/fast`;

const api = `# Claude API: change the model ID
model = "claude-fable-5-1"  # before
model = "claude-fable-5-2"  # after

# Adaptive thinking is always on; steer depth with effort
# low | medium | high (default) | xhigh | max`;

export const claudeFable52: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Claude Fable 5.2: Benchmarks, Pricing, vs Opus 5.5",
      description:
        "Claude Fable 5.2, released November 9, 2026: what's new, Anthropic's benchmarks, API pricing ($8/$40) and fast mode, 1M context, Fable 5.2 vs Opus 5.5, vs Fable 5.1 and vs Mythos 5.2, and how to use it in Claude Code.",
    },
    breadcrumb: "Claude Fable 5.2",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-10" },
    hero: {
      kicker: "Blog · Claude models",
      title: "Claude Fable 5.2: what's new, benchmarks, pricing and how it compares with Opus 5.5",
      lead: "Anthropic released Claude Fable 5.2 on November 9, 2026, alongside Claude Mythos 5.2, the same model with different safeguards. Anthropic calls Fable 5.2 its most capable generally available model for technical work: it's faster and cheaper than Fable 5.1, scores higher on Anthropic's coding and agent benchmarks, and adds a fast mode. This guide covers what changed, the numbers, what it costs, when to pick it over Opus 5.5, and how to use it in Claude Code.",
      cta: "Get started",
      secondary: "Fable 5.2 vs Opus 5.5",
      secondaryHref: "#vs-opus",
    },
    sections: [
      {
        kind: "table",
        id: "at-a-glance",
        title: "Claude Fable 5.2 at a glance",
        headers: ["", "Claude Fable 5.2"],
        rows: [
          ["Released", "November 9, 2026 (after Fable 5 in June and Fable 5.1 in September)"],
          ["API model ID", "`claude-fable-5-2`"],
          ["Price", "$8 per million input tokens, $40 per million output (Fable 5.1: $10 and $50)"],
          ["Fast mode", "Up to 2.5x faster output, at $16 input and $80 output per million tokens"],
          ["Context window", "1M tokens, with 128K max output"],
          ["Thinking", "Adaptive thinking, always on; effort `low`, `medium`, `high` (default), `xhigh`, `max`"],
          ["Knowledge cutoff", "June 2026"],
          ["Speed", "Outputs up to 30% faster than Fable 5.1, per Anthropic"],
          ["Who can use it", "Claude Pro, Max, Ultra, Team and Enterprise; all Claude API customers; Amazon Bedrock, Google Cloud and Microsoft Foundry"],
        ],
      },
      {
        kind: "text",
        title: "What's new in Fable 5.2",
        points: [
          "Better at long, hard technical work: Anthropic says it can run ambiguous engineering tasks for days and coordinate hundreds, even more than a thousand, subagents.",
          "Cheaper: input and output cost 20% less than Fable 5.1, and batch processing is half price ($4 and $20).",
          "Faster: outputs up to 30% faster than Fable 5.1, and a fast mode that's up to 2.5x faster again, at double the price.",
          "Robotics: Anthropic reports much better control of physical robots, including on tasks it wasn't trained for.",
          "Safeguards: cybersecurity and biology safeguards are built in. Flagged cyber queries are routed to Claude Opus 4.8 and flagged biology queries to Claude Opus 5.",
          "Data retention: Fable models require 30-day retention for safety monitoring by default; zero data retention needs Anthropic's authorization.",
        ],
      },
      {
        kind: "table",
        id: "benchmarks",
        title: "Claude Fable 5.2 benchmarks",
        text: [
          "From Anthropic's Fable page, with safeguards on unless noted. These are Anthropic's own numbers, not independent tests.",
        ],
        headers: ["Benchmark", "Fable 5.2", "Fable 5.1", "Opus 5.5", "GPT-6 Astra", "Gemini 4 Carbon"],
        rows: [
          ["FrontierCode 2.0 (agentic coding)", "49.1% (xhigh)", "32.4% (xhigh)", "45.5%", "42.8%", "41.1%"],
          ["FrontierSWE v2 (agentic coding)", "69.9%", "56.3%", "62.3%", "65.5%", "61.2%"],
          ["Terminal-Bench-Science 0.1", "74.6%", "52.6%", "58.7%", "68.1%", "64.8%"],
          ["OSWorld 2.1 (computer use)", "89.3%", "83.5%", "87.2%", "79.5%", "81.5%"],
          ["AutomationBench (business workflows)", "51.4%", "31.4%", "42.5%", "41.4%", "53.9%"],
          ["Remote Labor Index", "41.3%", "17.9%", "21.3%", "20.8%", "-"],
          ["Humanity's Last Exam (with tools)", "74.2%", "65.6%", "67.7%", "57.2%", "-"],
          ["RoboDojo Sim (robotics, run by Anthropic)", "64.9%", "27.6%", "39.4%", "29.8%", "-"],
        ],
      },
      {
        kind: "table",
        id: "pricing",
        title: "Claude Fable 5.2 pricing",
        text: [
          "API prices per million tokens, from Anthropic's docs on November 10, 2026. On Claude plans, Fable 5.2 comes with your subscription's usage: on Pro and standard Team seats it can use up to 50% of your weekly limits. Fast mode in Claude Code is billed from usage credits.",
        ],
        headers: ["Model", "Input", "Output", "Cache reads", "Batch (input / output)"],
        rows: [
          ["Claude Fable 5.2", "$8", "$40", "$0.20", "$4 / $20"],
          ["Claude Fable 5.2, fast mode", "$16", "$80", "-", "-"],
          ["Claude Fable 5.1", "$10", "$50", "$0.25", "$5 / $25"],
          ["Claude Opus 5.5", "$4", "$20", "$0.20", "$2 / $10"],
          ["Claude Sonnet 5.5", "$2", "$10", "$0.10", "$1 / $5"],
        ],
      },
      {
        kind: "text",
        id: "vs-opus",
        title: "Fable 5.2 vs Opus 5.5: which should you use?",
        text: [
          "Anthropic's own advice is to start with Opus 5.5 for most work and move to Fable 5.2 when Opus 5.5 at higher effort still falls short.",
        ],
        points: [
          "Price: Fable 5.2 costs twice as much per token ($8 and $40 against $4 and $20), and its default effort is `high` where Opus 5.5's is `medium`, so it also tends to think more per request.",
          "Capability: on Anthropic's tables Fable 5.2 leads Opus 5.5 on agentic coding (69.9% vs 62.3% on FrontierSWE v2), science and long-horizon work; the gap is smaller on computer use (89.3% vs 87.2% on OSWorld 2.1).",
          "Cost per task: Anthropic says Fable 5.2 at `high` effort scored about level with Opus 5.5 at `max` on FrontierCode 2.0 (45.3% vs 45.5%) for roughly half the cost per task, so for hard tasks it isn't necessarily the more expensive choice.",
          "Switching mid-conversation: only Fable 5.2 and Mythos 5.2 can read Fable 5.2's thinking, so moving a conversation from Fable 5.2 to Opus 5.5 loses its reasoning for the turns that run there.",
          "Rule of thumb: Opus 5.5 as the daily driver; Fable 5.2 for long-running agent jobs, hard bugs and work that fails on Opus.",
        ],
      },
      {
        kind: "text",
        id: "vs-mythos",
        title: "Fable 5.2 vs Mythos 5.2, and vs Fable 5.1",
        points: [
          "Mythos 5.2 is the same model with fewer restrictions on cybersecurity and biology work. It's only for organizations verified through Anthropic's programs, such as the Cyber Verification Program, and costs the same.",
          "On Anthropic's cyber and biology tables Mythos 5.2 scores higher than Fable 5.2 with its safeguards on; for everything else they're the same model.",
          "Against Fable 5.1, Fable 5.2 is cheaper, up to 30% faster, and scores higher across Anthropic's tables, for example 49.1% vs 32.4% on FrontierCode 2.0 and 41.3% vs 17.9% on the Remote Labor Index.",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to use Claude Fable 5.2 in Claude Code",
        steps: [
          {
            title: "Update and pick the model",
            text: "Update Claude Code, then run `/model` and choose Claude Fable 5.2, or start a session with `--model claude-fable-5-2`. On a Claude plan, it needs Pro, Max, Ultra, Team or Enterprise.",
            code: claudeCode,
          },
          {
            title: "Leave effort at high to start",
            text: "Anthropic says most of the gain is already there at `high`. Step up to `xhigh` for your hardest long-running coding work once you've seen it help; keep `max` for rare cases where time and tokens don't matter.",
          },
          {
            title: "Turn on fast mode when speed matters",
            text: "Run `/fast` while on Fable 5.2 (Claude Code v2.1.321 or later). It's up to 2.5x faster at double the price; on subscription plans it's paid from usage credits, not your plan's limits, and it isn't available on Bedrock, Vertex or Foundry.",
          },
          {
            title: "Calling the API? Check the breaking changes",
            text: "Adaptive thinking is always on (`budget_tokens` and `disabled` return 400), forced tool use isn't supported, editing earlier turns invalidates thinking blocks, and the old `computer_20251124` tool is replaced by the computer use toolset. Claude Code and the Agent SDK handle this for you.",
            code: api,
          },
        ],
        source: { label: "Source: Anthropic's docs, What's new in Claude Fable 5.2", href: docs },
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Give Fable 5.2 a long-running job",
        text: [
          "Fable 5.2 is built for work that runs for hours. Crewmark turns a Claude Code session into an AI employee with a role, a goal, working hours and a heartbeat; the employee uses whatever model its session runs on, so you can put Fable 5.2 on the hardest jobs and keep Opus 5.5 for the rest.",
        ],
        steps: [
          {
            title: "Pick a role",
            text: "Such as the [AI software engineer](/ai-employees/software-engineer) for a backlog of hard issues.",
          },
          {
            title: "Set the model in its session",
            text: "Run `/model` in the employee's Claude Code conversation and choose Fable 5.2.",
          },
          {
            title: "Let it run",
            text: "It wakes on its heartbeat and works through the board; see [how to run Claude Code 24/7](/blog/run-claude-code-24-7).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Use Claude Fable 5.2 in Claude Code" },
    mid: {
      title: "Want Fable 5.2 working through your hardest issues on a schedule?",
      text: "Crewmark employees run on your own Claude Code, wake on a heartbeat and take the next issue from a board.",
      button: "Get started",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "When was Claude Fable 5.2 released?",
          a: "On November 9, 2026, together with Claude Mythos 5.2. It follows Fable 5 (June 9, 2026) and Fable 5.1 (September 1, 2026).",
        },
        {
          q: "How much does Claude Fable 5.2 cost?",
          a: "On the API, $8 per million input tokens and $40 per million output tokens, down from $10 and $50 on Fable 5.1. Fast mode costs $16 and $80; batch is $4 and $20. On Claude plans it's included from Pro; on Pro and standard Team seats it can use up to 50% of the weekly usage limits.",
        },
        {
          q: "Is Fable 5.2 better than Opus 5.5?",
          a: "On Anthropic's benchmarks, yes for agentic coding, science and long-horizon work. It also costs twice as much per token, and Anthropic still recommends Opus 5.5 as the starting point for most work.",
        },
        {
          q: "What is the context window of Claude Fable 5.2?",
          a: "1M tokens, with up to 128K output tokens.",
        },
        {
          q: "What's the difference between Fable 5.2 and Mythos 5.2?",
          a: "They're the same model. Fable 5.2 has cybersecurity and biology safeguards and is open to everyone; Mythos 5.2 is for organizations verified through Anthropic's programs.",
        },
        {
          q: "Is Claude Fable 5.2 free?",
          a: "No. Anthropic lists it for Pro, Max, Ultra, Team and Enterprise plans and on the API; the Free plan isn't listed.",
        },
        {
          q: "Is there a Claude Fable 5.2 system card?",
          a: "Yes, Anthropic published the “Claude Fable 5.2 and Claude Mythos 5.2 System Card”, linked from its Fable page.",
        },
      ],
    },
    cta: {
      title: "Put the newest model on a standing job.",
      text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked:
      "Checked against Anthropic's Fable page, launch post, Claude Platform docs and Claude Code docs on November 10, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by Anthropic. Claude, Claude Fable, Claude Mythos, Claude Opus and Claude Code are trademarks of Anthropic.",
  },
};
