import type { GuideCopy } from "@/components/landing/guide-article";

// /personal-agent/copilot-cowork, a page per product on /blog/ai-coworker (like claude-cowork.ts). For "copilot cowork"
// (cost, credit cost, licensing, skills, use cases, credits, login) and "copilot cowork vs claude cowork / copilot studio
// / m365 copilot / claude code / codex" (Google autocomplete, 2026-11-13). Every Copilot Cowork fact comes from
// docs/compare/facts/copilot-cowork.md (Microsoft Learn, the Copilot Credits Guide and Microsoft Support), checked on
// 2026-11-13; the comparison columns come from claude-cowork.md, claude-code.md and codex.md, checked the same day.
// The card doesn't confirm the Microsoft 365 Copilot license price, typical credits per task or the web address, and
// there's no fact card for Copilot Studio, so the page says nothing about them.

const getStarted = "https://learn.microsoft.com/en-us/copilot/cowork/get-started";

export const copilotCowork: GuideCopy = {
  meta: {
    title: "Copilot Cowork: Cost, Credits, Licensing and vs Claude Cowork",
    description:
      "Microsoft Copilot Cowork explained: what the Microsoft 365 agent does, Copilot Credit costs, licensing, skills, setup and Copilot Cowork vs Claude Cowork.",
  },
  breadcrumb: "Copilot Cowork",
  parent: { name: "Personal agents", href: "/personal-agent" },
  hero: {
    kicker: "Personal agents · Microsoft",
    title: "Copilot Cowork: what Microsoft's agent for Microsoft 365 does and how it's billed",
    lead: "Copilot Cowork is an agent in Microsoft 365 Copilot that carries out multi-step tasks across Microsoft 365. It sends email, schedules meetings, creates and edits Word, Excel, PowerPoint and PDF files, posts in Teams, manages OneDrive and SharePoint files, searches your organization and runs deep research, and it asks for approval before sensitive actions. It became generally available for work and school accounts in June 2026. Here's what it does, how licensing and Copilot Credits work, how to set it up, how approvals work, and how it compares with Claude Cowork, Claude Code and Codex.",
    cta: "Get started",
    secondary: "Set it up",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "What Copilot Cowork is and what it's used for",
      text: [
        "Microsoft describes Cowork as an agentic system that carries out multi-step tasks on your behalf across Microsoft 365. Its intended uses include researching a topic, writing a document and emailing it to stakeholders in one conversation, recurring briefings and reports, and tasks that react to incoming email or Teams messages.",
      ],
      points: [
        "It runs in Microsoft's cloud, in an isolated environment. Files are created in and read from OneDrive and SharePoint; it can't access files on your local device.",
        "It can use your browser: on Cowork on the web, browser tasks run in a hidden Microsoft Edge tab on your own device, with your existing sign-ins.",
        "It uses several model makers: a model picker set to Auto by default offers GPT, Claude and Grok models, depending on tenant settings. Tenants in the EU Data Boundary get GPT models only.",
        "Skills and plugins: you can add up to 50 custom skills as `SKILL.md` files in OneDrive. Role and industry plugins include Accounting, Finance and Capital Markets for Cowork; other plugins and connectors cover Dynamics 365, Jira, Salesforce, ServiceNow, SAP ERP, Workday HCM, Zendesk and MCP apps.",
        "It repeats work: up to 25 scheduled prompts per user, written in plain language, plus event-driven tasks that run when a matching email arrives or a Teams message is posted.",
        "It tracks tasks: a Tasks view filters by In progress, Needs input, Done and Failed, an Automations page lists scheduled and event-driven tasks, and Projects (October 2026) keep related tasks, instructions and files together.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Copilot Cowork cost, credits and licensing",
      text: [
        "From Microsoft Learn, Microsoft Support and Microsoft's Copilot Credits Guide (November 2026), checked November 13, 2026, in USD. Cowork is billed by usage in Copilot Credits on top of a Microsoft 365 Copilot license. A task has no fixed credit cost: it varies with the model, runtime, context and tools used.",
      ],
      headers: ["Item", "Cost or requirement"],
      rows: [
        ["Microsoft 365 Copilot license", "Required for work or school accounts and assigned to the user; its price isn't stated in the Cowork docs"],
        ["Copilot Credits, pay-as-you-go", "$0.01 per Copilot Credit, billed in arrears monthly"],
        ["Copilot Credit Pre-Purchase Plan (P3)", "A one-year pool paid up front, with discounts from 5% (300,000 credits) to 20% (300,000,000 credits); unused credits expire at the end of the term"],
        ["Admin setup", "Cowork enabled, usage-based billing turned on, and a spending policy that selects Cowork; admins can set per-user or per-group credit limits"],
        ["Personal Microsoft accounts", "In preview; need an eligible Microsoft 365 subscription, price not stated"],
        ["Education", "Faculty and staff can use it; students aren't eligible"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "How to set up Copilot Cowork",
      steps: [
        {
          title: "Get the license",
          text: "On a work or school account, you need a Microsoft 365 Copilot license assigned to you. Personal accounts are in preview and need an eligible Microsoft 365 subscription.",
        },
        {
          title: "Have an admin turn it on",
          text: "An admin enables Cowork, turns on usage-based billing and gives you access through a spending policy that selects Cowork. Browser use needs Cowork Browsing enabled too.",
        },
        {
          title: "Open Cowork where you work",
          text: "On the web (Edge or Chrome recommended), in the Microsoft Copilot desktop app for Windows and macOS, in the mobile app for iOS and Android, or inside Outlook and Teams.",
        },
        {
          title: "Describe the task",
          text: "For example, research a topic, write a document and email it to the people who need it. Leave the model on Auto or pick one; reasoning effort defaults to Medium.",
        },
        {
          title: "Add skills and automations",
          text: "Put custom skills in OneDrive as `SKILL.md` files, write scheduled prompts in plain language, or set a task to run when a matching email or Teams message arrives.",
        },
      ],
      source: { label: "Source: Microsoft Learn, Copilot Cowork get started", href: getStarted },
    },
    {
      kind: "text",
      id: "safety",
      title: "How Copilot Cowork keeps you in control",
      points: [
        "Before sensitive actions such as sending email, posting in Teams or scheduling meetings, Cowork shows an approval dialog with a preview. Medium- and high-risk actions show a risk level.",
        "You can approve once, skip prompts for similar actions for the rest of the conversation (for email and Teams, scoped to a recipient, a domain or always), or cancel.",
        "Event-driven tasks default to draft-and-approve, and you can pause, resume or cancel any task.",
        "It can't delete files or folders in OneDrive or SharePoint, and it hands the browser back to you for CAPTCHAs, passwords, MFA codes and account changes.",
        "Admins control access through spending policies, set per-user or per-group credit limits, and can turn off model families, including Anthropic's.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "Copilot Cowork vs Claude Cowork, Claude Code and Codex",
      text: [
        "Facts from each vendor's own documentation and pricing pages, checked November 13, 2026. More AI coworkers are compared in [AI coworker tools](/blog/ai-coworker); see also the [Claude Cowork guide](/personal-agent/claude-cowork) and [Claude Code vs Codex](/blog/claude-code-vs-codex).",
        "Side by side: [Copilot Cowork vs Claude Cowork](/compare/copilot-cowork-vs-claude-cowork), [Copilot Cowork vs Copilot Studio](/compare/copilot-cowork-vs-copilot-studio). Guides: [Claude Cowork](/personal-agent/claude-cowork).",
      ],
      headers: ["", "Copilot Cowork", "Claude Cowork", "Claude Code", "Codex"],
      rows: [
        ["Made by", "Microsoft", "Anthropic", "Anthropic", "OpenAI"],
        ["Built for", "Multi-step tasks across Microsoft 365", "Non-coding knowledge work", "Coding: reads your codebase, edits files, runs commands", "Coding: inspects, edits and runs code in a repository"],
        ["Runs where", "Microsoft's cloud, with OneDrive and SharePoint; no local files", "Anthropic's cloud; local files through Claude Desktop", "Terminal, IDE and desktop app on your machine; cloud sessions on the web", "CLI, IDE extension and ChatGPT desktop app; Codex Cloud"],
        ["Models", "GPT, Claude and Grok models, by tenant settings", "Claude models", "Claude models", "OpenAI models"],
        ["How you pay", "Microsoft 365 Copilot license plus Copilot Credits", "Paid Claude plans, Pro from $20/month", "Paid Claude plans, Pro from $20/month; or API credits", "ChatGPT plans such as Plus at $20/month; or an OpenAI API key"],
        ["Repeating work", "Scheduled prompts; email, Teams and connector events", "Scheduled tasks, hourly to weekly, in the cloud", "Cloud and desktop scheduled tasks, `/loop`", "Scheduled tasks; Gmail, Slack and GitHub events"],
        ["Approvals", "Approval dialog with a preview before sensitive actions", "Manual, Auto or Skip modes", "Permission modes from `default` to `bypassPermissions`", "Ask for approval, Approve for me or full access"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "Cowork for Microsoft 365. Crewmark for your repository.",
      text: [
        "Copilot Cowork carries tasks across Outlook, Teams, OneDrive and SharePoint. Crewmark turns your own Claude Code or Codex sessions into AI employees with a role, goals in numbers, working hours and a heartbeat, each taking issues from a shared board, so engineering, SEO and marketing work in a repository keeps moving on a schedule.",
      ],
      steps: [
        { title: "Pick a role", text: "Start from the [AI employee roles](/ai-employees), such as a software engineer or an SEO specialist." },
        { title: "Put the work on a board", text: "Assign issues and make the regular ones repeat; the heartbeat wakes the employee to take the next one." },
        { title: "See what it can do", text: "Jobs with setup are in [Claude Code use cases](/use-cases/claude-code) and [Codex use cases](/use-cases/codex)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Set up Copilot Cowork" },
  mid: {
    title: "Want an AI coworker for your codebase?",
    text: "Crewmark gives your Claude Code or Codex a role, a heartbeat and a shared board.",
    button: "Get started",
  },
  faq: {
    title: "Copilot Cowork FAQ",
    items: [
      {
        q: "What is Copilot Cowork?",
        a: "An agent in Microsoft 365 Copilot that carries out multi-step tasks across Microsoft 365: it sends email, schedules meetings, creates and edits Word, Excel, PowerPoint and PDF files, posts in Teams, manages OneDrive and SharePoint files, searches your organization and runs deep research. It asks for approval before sensitive actions.",
      },
      {
        q: "How much does Copilot Cowork cost?",
        a: "Usage is billed in Copilot Credits on top of a Microsoft 365 Copilot license. Pay-as-you-go is $0.01 per credit, billed monthly in arrears; a one-year Pre-Purchase Plan gives discounts from 5% to 20%. Credits per task vary with the model, runtime, context and tools used.",
      },
      {
        q: "What licensing does Copilot Cowork need?",
        a: "For a work or school account: a Microsoft 365 Copilot license assigned to you, Cowork enabled, and usage-based billing turned on by an admin, with a spending policy that selects Cowork. Personal Microsoft accounts are in preview and need an eligible Microsoft 365 subscription. In education, faculty and staff can use it; students can't.",
      },
      {
        q: "How do I log in to Copilot Cowork?",
        a: "Sign in with the account that has access: a work or school account (generally available) or a personal Microsoft account (preview). Cowork is on the web, in the Microsoft Copilot desktop app for Windows and macOS, in the mobile app for iOS and Android, and inside Outlook and Teams.",
      },
      {
        q: "Copilot Cowork vs Microsoft 365 Copilot: what's the difference?",
        a: "Copilot Cowork is an agent in Microsoft 365 Copilot. Using it needs a Microsoft 365 Copilot license plus usage-based billing, because Cowork's usage is charged in Copilot Credits on top of the license.",
      },
      {
        q: "Copilot Cowork vs Claude Cowork: what's the difference?",
        a: "Copilot Cowork works across Microsoft 365, keeps files in OneDrive and SharePoint, can't reach local files, and is billed in Copilot Credits on top of a license. Claude Cowork is Anthropic's agent in the Claude apps, comes with paid Claude plans from Pro at $20 a month, and reaches local files through Claude Desktop. Copilot Cowork's model picker can include Claude models too, depending on tenant settings.",
      },
    ],
  },
  cta: {
    title: "Hand Microsoft 365 tasks to Cowork. Give your coding agents a job too.",
    text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
    button: "Get started",
  },
  checked:
    "Checked against Microsoft Learn's Copilot Cowork documentation, Microsoft's Copilot Credits Guide and Microsoft Support on November 13, 2026.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by Microsoft, Anthropic or OpenAI. Product names are trademarks of their owners.",
};
