import type { GuideCopy } from "@/components/landing/guide-article";

// /pricing/relevance-ai, MC-439. For "relevance ai pricing", "relevance ai cost" and "relevance ai enterprise pricing"
// (Google autocomplete, 2026-11-13); "ai pricing strategy" and "how does ai reduce costs" are skipped as unrelated.
// Every fact comes from docs/compare/facts/{relevance-ai,lindy,crewai,langgraph,crewmark}.md (checked 2026-11-13, with
// a source per fact); nothing under a card's "Unverified" is used, so no self-serve plan price is quoted. The card
// gives no date for the Free plan's retirement, so the page gives none.

export const copy: GuideCopy = {
  meta: {
    title: "Relevance AI Pricing: Enterprise Only, Free Plan Retired",
    description:
      "Relevance AI's pricing page lists one plan, Enterprise, at a custom price through sales, and its docs say the Free plan is retired. What that means for you.",
  },
  breadcrumb: "Relevance AI pricing",
  parent: { name: "Comparisons", href: "/compare" },
  hero: {
    kicker: "Pricing · Relevance AI",
    title: "Relevance AI pricing: one Enterprise plan through sales, and no Free plan",
    lead: "Relevance AI's public pricing page lists a single plan, Enterprise, with custom pricing: you \"Talk to sales\". Its docs say the Free plan is retired for new signups and existing accounts. For models, the docs list two routes: credits, or your own LLM key. Here's what the Enterprise plan includes, what that means if you're buying today, and how the price compares with Lindy, CrewAI, LangGraph and Crewmark.",
    cta: "Get started",
    secondary: "See the plans",
    secondaryHref: "#plans",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Relevance AI plans and prices",
      text: [
        "From relevanceai.com/pricing and the Relevance AI docs, checked November 13, 2026. The pricing page publishes no self-serve plan price.",
      ],
      headers: ["Plan", "Price", "What's included"],
      rows: [
        [
          "Enterprise",
          "Custom (\"Talk to sales\")",
          "Custom Actions and vendor credits; unlimited agents, tools, users and projects. Per the docs, SSO, RBAC, audit logs, agent evaluations, work-hour controls and enterprise triggers are Enterprise-only",
        ],
        ["Free", "Retired", "The docs say the Free plan is retired for new signups and existing accounts"],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "What you actually pay for Relevance AI",
      points: [
        "A custom contract. The only listed plan is Enterprise, priced through sales, so you get a number only after talking to Relevance AI.",
        "Models through credits or your own key. The docs plan table lists \"Use any LLMs with credits\" and \"Bring your own LLM\" (BYOK). Enterprise includes custom Actions and vendor credits.",
        "Features that need Enterprise: SSO, RBAC, audit logs, agent evaluations, work-hour controls, and enterprise triggers for Salesforce, Snowflake and Zendesk.",
        "No free way to start. With the Free plan retired for new signups, there's no $0 plan to try before a sales conversation.",
        "Alongside the product, the sales pitch offers an embedded deployment team that maps use cases in weeks 1 and 2 and deploys from week 3, plus \"Invent\", which Relevance AI calls a 24/7 AI solutions engineer.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Relevance AI pricing vs similar agent platforms",
      text: [
        "Prices from each product's own site, checked November 13, 2026. Products that use your own models also need a model, paid to its provider.",
        "Side by side: [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy), [CrewAI vs LangGraph](/compare/crewai-vs-langgraph). More options in [Relevance AI alternatives](/alternatives/relevance-ai).",
      ],
      headers: ["Product", "Price from", "Free option"],
      rows: [
        ["Relevance AI", "Enterprise, custom price through sales", "No: the Free plan is retired"],
        [
          "[Lindy](/personal-agent/lindy)",
          "$29.99/month per active user for 3,000 credits",
          "Yes: $50 in credits that last 7 days, no credit card required",
        ],
        [
          "[CrewAI](/pricing/crewai)",
          "Framework free (MIT); AMP Enterprise custom",
          "Yes: the framework, and AMP Basic with 50 workflow executions a month",
        ],
        [
          "[LangGraph](/pricing/langgraph)",
          "Framework free (MIT); LangSmith Plus $39/seat per month",
          "Yes: the framework, and LangSmith Developer at $0 (1 seat, up to 5k base traces a month)",
        ],
        [
          "[Crewmark](/pricing)",
          "Free; Pro $5/month and Team $10/month coming soon",
          "Yes: 1 project, up to 3 AI employees, 1 person",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "Relevance AI builds hosted agents. Crewmark runs your own coding agents as a team.",
      text: [
        "Crewmark is an issue tracker for a team of AI employees. Each employee is a Claude Code or Codex conversation on your own computer, with a role, goals and working hours. It wakes on a heartbeat and takes issues from a shared board. The agents run on the Claude or ChatGPT subscription you already pay for, with no separate token bill.",
        "Crewmark's prices: Free at $0 (1 project, up to 3 AI employees, 1 person). Pro at $5/month and Team at $10/month are coming soon. Billing isn't built yet, so every account can use Crewmark free until then. It's open source (GPL-3.0) and can be self-hosted.",
      ],
      steps: [
        {
          title: "Pick a role",
          text: "From the [AI employee roles](/ai-employees), such as SEO, growth, social media or engineering, with goals in numbers.",
        },
        {
          title: "Put the work on a board",
          text: "Assign issues and make the regular ones repeat; the heartbeat wakes the employee to take the next one.",
        },
        {
          title: "See the plans",
          text: "[Crewmark pricing](/pricing), and what agents do with it in [Claude Code use cases](/use-cases/claude-code).",
        },
      ],
    },
  ],
  mid: {
    title: "Want to start without a sales call?",
    text: "Crewmark's Free plan gives your Claude Code or Codex a role, a heartbeat and a shared board.",
    button: "Get started",
  },
  faq: {
    title: "Relevance AI pricing FAQ",
    items: [
      {
        q: "Does Relevance AI have a free plan?",
        a: "Not any more. Relevance AI's docs say the Free plan is retired for new signups and existing accounts.",
      },
      {
        q: "How much does Relevance AI cost?",
        a: "Its public pricing page lists one plan, Enterprise, with custom pricing through sales. It publishes no self-serve plan price.",
      },
      {
        q: "What's included in Relevance AI enterprise pricing?",
        a: "Custom Actions and vendor credits, and unlimited agents, tools, users and projects. SSO, RBAC, audit logs, agent evaluations, work-hour controls and enterprise triggers are Enterprise-only.",
      },
      {
        q: "Can I bring my own LLM key to Relevance AI?",
        a: "The docs plan table lists \"Bring your own LLM\" (BYOK) next to \"Use any LLMs with credits\", so you can use credits or your own provider's key.",
      },
      {
        q: "Can I self-host Relevance AI?",
        a: "No self-hosting option is stated. Relevance AI is a hosted web platform, and it isn't open source.",
      },
      {
        q: "Is there a Relevance AI alternative with a free plan?",
        a: "Several have one. Lindy gives $50 in credits for 7 days, CrewAI and LangGraph are free open-source frameworks, and Crewmark has a Free plan. See [Relevance AI alternatives](/alternatives/relevance-ai).",
      },
    ],
  },
  cta: {
    title: "Start free with the agents you already have.",
    text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
    button: "Get started",
  },
  checked:
    "Checked against relevanceai.com/pricing, the Relevance AI docs and each compared product's own pricing page on November 13, 2026.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by Relevance AI or any other company named on this page. Product names are trademarks of their owners.",
};
