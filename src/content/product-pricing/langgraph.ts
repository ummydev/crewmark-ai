import type { GuideCopy } from "@/components/landing/guide-article";

// /pricing/langgraph, MC-439. For "langgraph pricing" (platform pricing, cloud pricing, server pricing, pricing reddit)
// (Google autocomplete, 2026-11-13); "langgraph studio pricing" is skipped because the card gives no price for
// LangSmith Studio, and the page doesn't call anything "LangGraph Platform" because that name is under "Unverified".
// Every fact comes from docs/compare/facts/{langgraph,crewai,autogen,relevance-ai,paperclip,crewmark}.md (checked
// 2026-11-13, with a source per fact); nothing under a card's "Unverified" is used (so no per-trace overage prices).

export const copy: GuideCopy = {
  meta: {
    title: "LangGraph Pricing: Free, LangSmith Plus $39, Agent Server",
    description:
      "LangGraph pricing: the MIT framework is free. LangSmith Developer is $0, Plus $39 per seat a month with one Agent Server, and extra servers cost $1.00 per LSU.",
  },
  breadcrumb: "LangGraph pricing",
  parent: { name: "Comparisons", href: "/compare" },
  hero: {
    kicker: "Pricing · Agent frameworks",
    title: "LangGraph pricing: the free framework, LangSmith plans and Agent Server costs",
    lead: "LangGraph is free: the framework is open source under the MIT license, and it runs inside your own application. What costs money is LangSmith, LangChain's commercial product for tracing, evaluation and deployment. Developer is $0 for one seat, Plus is $39 per seat a month with one Small Agent Server included, and Enterprise is custom. Additional Agent Servers are metered at $1.00 per LSU, and model calls are billed by your model provider. Here's each plan, what Agent Server costs, and how LangGraph compares with CrewAI, AutoGen, Relevance AI and Paperclip.",
    cta: "Get started",
    secondary: "What you actually pay",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "LangGraph and LangSmith plans and prices",
      text: [
        "From [langchain.com](https://www.langchain.com/langgraph) pricing and LangChain's docs, checked November 13, 2026. Prices in USD; Developer and Plus are billed monthly.",
      ],
      headers: ["Plan", "Price", "What's included"],
      rows: [
        [
          "LangGraph framework (open source)",
          "Free, MIT license",
          "A Python and JavaScript/TypeScript library for stateful agents, run inside your own application",
        ],
        [
          "LangSmith Developer",
          "$0/seat per month",
          "1 seat; up to 5k base traces/month, then pay-as-you-go; no Agent Server",
        ],
        [
          "LangSmith Plus",
          "$39/seat per month",
          "Up to 10k base traces/month, then pay-as-you-go; \"1 Small Agent Server included on serverless hosting at no charge\"",
        ],
        [
          "LangSmith Enterprise",
          "Custom, invoiced annually upfront",
          "Adds self-hosted and hybrid deployment options",
        ],
        [
          "Additional Agent Servers",
          "$1.00 per LSU, metered",
          "Runtime compute 0.0675 LSU/vCPU-hr, runtime memory 0.0090 LSU/GiB-hr, database compute 0.177 LSU/vCPU-hr, database memory 0.025 LSU/GiB-hr",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "What you actually pay for LangGraph",
      points: [
        "Your model provider. LangGraph calls whatever models your code uses, and \"LangGraph does not require LangChain.\" Those model calls are billed by your provider.",
        "Traces past the included amount. Developer includes up to 5k base traces a month and Plus up to 10k; beyond that, traces are pay-as-you-go.",
        "Seats. Developer is limited to 1 seat. Plus is $39 per seat a month.",
        "Agent Servers past the first. Plus includes 1 Small Agent Server on serverless hosting. More are metered at $1.00 per LSU, so runtime compute comes to $0.0675 per vCPU-hour and runtime memory to $0.009 per GiB-hour; database compute is 0.177 LSU per vCPU-hour and database memory 0.025 LSU per GiB-hour.",
        "Cron jobs keep running. Agent Server supports cron jobs on a schedule you set. LangChain's docs say to delete unused ones, because recurring runs can incur LLM API charges.",
        "Where it's hosted. Cloud Agent Server is \"Fully managed by LangChain on AWS, Azure, and GCP\". Self-hosted and hybrid deployment are Enterprise options.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "LangGraph pricing vs other agent frameworks and platforms",
      text: [
        "Prices from each product's own pricing page or README, checked November 13, 2026, in USD. AutoGen's README says \"This project has been archived and is no longer actively maintained by Microsoft\", and Microsoft names Agent Framework as its direct successor. As of November 13, 2026, Relevance AI's docs say its Free plan is retired for new signups and existing accounts.",
        "Side by side: [CrewAI vs LangGraph](/compare/crewai-vs-langgraph). More options in [LangGraph alternatives](/alternatives/langgraph).",
      ],
      headers: ["Product", "Price from", "Free option"],
      rows: [
        [
          "LangGraph",
          "Framework free; LangSmith Plus $39/seat per month",
          "Yes: the framework (MIT) and LangSmith Developer at $0 for 1 seat",
        ],
        [
          "[CrewAI](/pricing/crewai)",
          "Framework free; AMP Basic free; Enterprise custom",
          "Yes: the framework (MIT) and AMP Basic with 50 workflow executions/month",
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
          "[Paperclip](/alternatives/paperclip)",
          "Self-hosted free; no prices published",
          "Yes: self-hosted (MIT); a cloud version is on a waitlist",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "Not building an agent app? Give Claude Code or Codex a role instead.",
      text: [
        "LangGraph is for building stateful agents in your own code. Crewmark is an issue tracker for a team of AI employees, for people who already use Claude Code or Codex and want agents to keep working on a job without being prompted each time. Each employee has a role, KPIs and working hours, wakes on a heartbeat and takes issues from a shared board. Agent usage stays on the Claude or ChatGPT subscription you already pay for.",
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
    title: "LangGraph pricing FAQ",
    items: [
      {
        q: "Is LangGraph free?",
        a: "Yes. The LangGraph framework is open source under the MIT license, for Python and JavaScript/TypeScript. LangSmith, LangChain's commercial product, also has a $0 Developer plan for one seat.",
      },
      {
        q: "How much does LangGraph cost to deploy in the cloud?",
        a: "Deployment runs on LangSmith Agent Server, fully managed by LangChain on AWS, Azure and GCP. LangSmith Plus ($39 per seat a month) includes 1 Small Agent Server on serverless hosting at no charge, and more servers are metered at $1.00 per LSU. The Developer plan has no Agent Server.",
      },
      {
        q: "LangGraph server pricing: what does Agent Server cost?",
        a: "Agent Server (formerly LangSmith Deployment) is metered in LSUs at $1.00 per LSU: 0.0675 LSU per vCPU-hour of runtime compute, 0.0090 per GiB-hour of runtime memory, 0.177 per vCPU-hour of database compute and 0.025 per GiB-hour of database memory. Plus includes one Small Agent Server at no charge.",
      },
      {
        q: "What does LangSmith Plus include?",
        a: "$39 per seat a month, billed monthly: up to 10k base traces a month, then pay-as-you-go, and 1 Small Agent Server on serverless hosting at no charge.",
      },
      {
        q: "Is there LangGraph enterprise pricing?",
        a: "LangSmith Enterprise is custom, invoiced annually upfront. Self-hosted and hybrid Agent Server deployments are Enterprise options.",
      },
      {
        q: "Do I need LangSmith to use LangGraph?",
        a: "The framework is a free MIT library that runs inside your own application. LangSmith is LangChain's separate commercial product for tracing, evaluation and deploying agents to Agent Server.",
      },
    ],
  },
  cta: {
    title: "Build the graph, or give your agents a job.",
    text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, KPIs, working hours and a heartbeat.",
    button: "Get started",
  },
  checked:
    "Checked against langchain.com/pricing and LangChain's LangGraph and LangSmith docs on November 13, 2026. Other products' prices are from their own pages on the same date.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by LangChain or any other company named on this page. Product names are trademarks of their owners.",
};
