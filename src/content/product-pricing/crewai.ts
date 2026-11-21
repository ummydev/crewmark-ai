import type { GuideCopy } from "@/components/landing/guide-article";

// /pricing/crewai, MC-439. For "crewai pricing" (pricing plans, crew ai pricing model, enterprise pricing, amp pricing,
// cloud pricing) (Google autocomplete, 2026-11-13). Every fact comes from
// docs/compare/facts/{crewai,langgraph,autogen,relevance-ai,paperclip,crewmark}.md (checked 2026-11-13, with a source
// per fact); nothing under a card's "Unverified" is used (so no Enterprise price, Enterprise execution count or
// overage price, and Relevance AI's self-serve prices aren't quoted).

export const copy: GuideCopy = {
  meta: {
    title: "CrewAI Pricing: Free Framework, AMP Basic and Enterprise",
    description:
      "CrewAI pricing: the MIT framework is free, CrewAI AMP Basic is free with 50 workflow executions a month, and Enterprise is custom. Plus what models cost you.",
  },
  breadcrumb: "CrewAI pricing",
  parent: { name: "Comparisons", href: "/compare" },
  hero: {
    kicker: "Pricing · Agent frameworks",
    title: "CrewAI pricing: the free framework, AMP plans and model costs",
    lead: "CrewAI's open-source Python framework is free under the MIT license; you pay your model provider, which is the OpenAI API by default. CrewAI AMP, the company's platform for building, deploying and tracing crews and flows, has two plans: Basic, free with 50 workflow executions a month, and Enterprise at a custom price. CrewAI publishes no currency, billing period or overage price. Here's what each plan includes, what else you pay for, and how CrewAI compares with LangGraph, AutoGen, Relevance AI and Paperclip.",
    cta: "Get started",
    secondary: "What you actually pay",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "CrewAI plans and prices",
      text: [
        "From [crewai.com](https://crewai.com) pricing and the crewAI README, checked November 13, 2026. CrewAI lists the platform plans as \"Free\" and \"Custom\", with no currency or billing period.",
      ],
      headers: ["Plan", "Price", "What's included"],
      rows: [
        [
          "CrewAI framework (open source)",
          "Free, MIT license",
          "A Python library for crews of role-based agents and event-driven flows, run in your own code and infrastructure",
        ],
        [
          "AMP Basic",
          "Free",
          "Visual editor and AI copilot, GitHub integration, 50 workflow executions/month, cron scheduling, human-in-the-loop input",
        ],
        [
          "AMP Enterprise",
          "Custom (no price listed)",
          "Deploy on CrewAI cloud, your own VPC or your own infrastructure; SSO (MS Entra, Okta), RBAC, dedicated VPC and enterprise connectors; cron scheduling and human-in-the-loop input",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "What you actually pay for CrewAI",
      points: [
        "Your model provider. CrewAI agents call the model APIs you configure: \"By default your agents will use the OpenAI API\". Other providers and local models (Ollama, LM Studio) are supported.",
        "Workflow executions on AMP Basic. The free platform plan is limited to 50 workflow executions a month. CrewAI publishes no overage price.",
        "Enterprise features. SSO, RBAC, dedicated VPC and enterprise connectors are Enterprise-only, at a custom price.",
        "Where it runs. The framework is a Python library (Python `>=3.10, <3.14`) in your own code and infrastructure. AMP is a web app at app.crewai.com; Enterprise can deploy on CrewAI cloud, your own VPC or your own infrastructure.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "CrewAI pricing vs other agent frameworks and platforms",
      text: [
        "Prices from each product's own pricing page or README, checked November 13, 2026, in USD. AutoGen's README says \"This project has been archived and is no longer actively maintained by Microsoft\", and Microsoft names Agent Framework as its direct successor. As of November 13, 2026, Relevance AI's docs say its Free plan is retired for new signups and existing accounts.",
        "Side by side: [CrewAI vs LangGraph](/compare/crewai-vs-langgraph), [CrewAI vs AutoGen](/compare/crewai-vs-autogen), [Paperclip vs CrewAI](/compare/paperclip-vs-crewai). More options in [CrewAI alternatives](/alternatives/crewai).",
      ],
      headers: ["Product", "Price from", "Free option"],
      rows: [
        [
          "CrewAI",
          "Framework free; AMP Basic free; Enterprise custom",
          "Yes: the framework (MIT) and AMP Basic with 50 workflow executions/month",
        ],
        [
          "[LangGraph](/pricing/langgraph)",
          "Framework free; LangSmith Plus $39/seat per month",
          "Yes: the framework (MIT) and LangSmith Developer at $0 for 1 seat",
        ],
        [
          "[AutoGen](/alternatives/autogen)",
          "Free (open source); the README mentions no paid service",
          "Yes: code under MIT; the README says it's archived and no longer actively maintained by Microsoft",
        ],
        [
          "[Relevance AI](/pricing/relevance-ai)",
          "Enterprise, custom pricing through sales",
          "No: its docs say the Free plan is retired",
        ],
        [
          "[Paperclip](/compare/paperclip-vs-crewai)",
          "Self-hosted free; no prices published",
          "Yes: self-hosted (MIT); a cloud version is on a waitlist",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "Not building a Python app? Give Claude Code or Codex a role instead.",
      text: [
        "CrewAI is for building multi-agent workflows in your own Python code. Crewmark is an issue tracker for a team of AI employees, for people who already use Claude Code or Codex and want agents to keep working on a job without being prompted each time. Each employee has a role, KPIs and working hours, wakes on a heartbeat and takes issues from a shared board. Agent usage stays on the Claude or ChatGPT subscription you already pay for.",
        "Crewmark's prices: Free at $0 (1 project, up to 3 AI employees, 1 person). Pro at $5/month and Team at $10/month are coming soon. Billing isn't built yet, so every account can use Crewmark free until then. It's open source (GPL-3.0) and can be self-hosted.",
      ],
      steps: [
        {
          title: "Pick a role",
          text: "From the [AI employee roles](/ai-employees), such as Software Engineer, SEO Specialist or Data Analyst.",
        },
        {
          title: "Put the work on a board",
          text: "Assign issues and make the regular ones repeat; the heartbeat wakes the employee to take the next one.",
        },
        {
          title: "See the plans",
          text: "[Crewmark pricing](/pricing), and jobs with setup in [Claude Code use cases](/use-cases/claude-code) and [Codex use cases](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Already using Claude Code or Codex?",
    text: "Crewmark turns it into AI employees with roles, a heartbeat and a shared board. Free for 1 project and up to 3 AI employees.",
    button: "Get started",
  },
  faq: {
    title: "CrewAI pricing FAQ",
    items: [
      {
        q: "Is CrewAI free?",
        a: "The framework is: it's open source under the MIT license, and you pay only your model provider. The CrewAI AMP Basic plan is free too, with 50 workflow executions a month.",
      },
      {
        q: "What are CrewAI AMP's pricing plans?",
        a: "Two: Basic, listed as \"Free\" (visual editor and AI copilot, GitHub integration, 50 workflow executions a month), and Enterprise, listed as \"Custom\" with no price. CrewAI publishes no currency, billing period or overage price.",
      },
      {
        q: "How much does CrewAI Enterprise cost?",
        a: "CrewAI doesn't list a price; Enterprise is \"Custom\". It adds deployment on CrewAI cloud, your own VPC or your own infrastructure, SSO with MS Entra or Okta, RBAC and enterprise connectors.",
      },
      {
        q: "What is CrewAI's pricing model?",
        a: "A free open-source framework you run yourself, plus the AMP platform priced by plan: Basic is free and capped at 50 workflow executions a month, Enterprise is custom. Model usage is billed separately by your model provider.",
      },
      {
        q: "How much does CrewAI cloud cost?",
        a: "AMP is a web app at app.crewai.com, and Basic is free with 50 workflow executions a month. Deploying on CrewAI cloud, your own VPC or your own infrastructure is listed under Enterprise, at a custom price.",
      },
      {
        q: "Do I need an OpenAI key to use CrewAI?",
        a: "By default, CrewAI agents use the OpenAI API. Other providers and local models, such as Ollama and LM Studio, are supported.",
      },
    ],
  },
  cta: {
    title: "Build a crew in code, or give your agents a job.",
    text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, KPIs, working hours and a heartbeat.",
    button: "Get started",
  },
  checked:
    "Checked against crewai.com/pricing, CrewAI's platform docs and the crewAI README on November 13, 2026. Other products' prices are from their own pages on the same date.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by crewAI, Inc. or any other company named on this page. Product names are trademarks of their owners.",
};
