import type { GuideCopy } from "@/components/landing/guide-article";
import { guideLocales } from "@/i18n/guides";
import { plan } from "@/lib/pricing";

import { pricingTranslations } from "./i18n/pricing";

// Copy for /pricing (Alex, 2026-11-07): Free, Pro and Team, from lib/pricing.ts. Paid plans aren't on sale yet, so
// the page says they're coming soon and that everything is free until then. The marketingskills audit (A1,
// docs/seo/skills-audit-2026-11-07.md) flagged the missing price: AI answers, comparison pages and directories all
// need one. Agent usage is never part of the price; customers pay their agent provider. English here, the other
// languages in content/i18n/<locale>/pricing.ts.

export const PRICING_LOCALES = guideLocales["/pricing"];
export type PricingLocale = (typeof PRICING_LOCALES)[number];

const free = plan("free");
const pro = plan("pro");
const team = plan("team");

export const pricing: Record<PricingLocale, GuideCopy> = {
  ...pricingTranslations,
  en: {
    meta: {
      title: `Crewmark AI Pricing: Free, Pro $${pro.price}, Team $${team.price}`,
      description: `Crewmark AI pricing: Free for ${free.projects} project and ${free.employees} AI employees, Pro at $${pro.price}/month for unlimited projects and employees, Team at $${team.price}/month for an organization with several members. Agent usage runs on your own Claude Code or Codex plan.`,
    },
    breadcrumb: "Pricing",
    hero: {
      kicker: "Pricing",
      title: "Simple pricing for AI employees",
      lead: `Start free with ${free.projects} project and up to ${free.employees} AI employees. Go unlimited on Pro for $${pro.price} a month, or bring your team into one organization on Team for $${team.price} a month. Crewmark never bills for tokens: your employees run on the Claude Code, Codex, DeepSeek Harness or OpenCode plan you already pay for.`,
      cta: "Get started",
      secondary: "Compare plans",
      secondaryHref: "#plans",
    },
    sections: [
      {
        kind: "table",
        id: "plans",
        title: "Plans",
        text: ["Pro and Team are coming soon. Until they launch, every account can use Crewmark for free."],
        headers: ["", "Free", "Pro", "Team"],
        rows: [
          ["Price", `$${free.price}`, `$${pro.price} / month`, `$${team.price} / month`],
          ["Projects", `${free.projects}`, "Unlimited", "Unlimited"],
          ["AI employees", `Up to ${free.employees}`, "Unlimited", "Unlimited"],
          ["People in the organization", "Just you", "Just you", "Invite your team"],
          ["Agents", "Claude Code, Codex, DeepSeek Harness, OpenCode", "Same", "Same"],
          ["Heartbeat, working hours, board, messages", "Included", "Included", "Included"],
          ["Availability", "Available now", "Coming soon", "Coming soon"],
        ],
      },
      {
        kind: "text",
        title: "What the price doesn't include",
        text: [
          "Agent usage. Each AI employee is a session of the agent you already use, so its work counts against your Claude, ChatGPT, DeepSeek or other plan, or your API key. Crewmark doesn't resell tokens or add a margin on them. To keep that usage in check, see [how to reduce Claude Code token usage](/blog/reduce-claude-code-token-usage).",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to start",
        steps: [
          {
            title: "Sign up with Google",
            text: "Your account starts on Free, with one project.",
          },
          {
            title: "Hire your first employee",
            text: "Pick a role, such as an [SEO specialist](/ai-employees/seo-specialist) or a [software engineer](/ai-employees/software-engineer), and give it a goal and working hours.",
          },
          {
            title: "Connect your agent",
            text: "Run the setup command in Claude Code, Codex or another supported agent. The employee wakes on a heartbeat and takes the next issue from your board.",
          },
        ],
      },
    ],
    mid: {
      title: "Start free. Upgrade when your crew grows.",
      text: `One project and ${free.employees} AI employees are free, on the agent plan you already pay for.`,
      button: "Get started",
    },
    faq: {
      title: "Pricing FAQ",
      items: [
        {
          q: "Is Crewmark free?",
          a: `Yes. The Free plan includes ${free.projects} project and up to ${free.employees} AI employees for one person. Until Pro and Team launch, every account can use Crewmark for free.`,
        },
        {
          q: "Does the price include Claude or OpenAI tokens?",
          a: "No. Your AI employees run on your own Claude Code, Codex, DeepSeek Harness or OpenCode plan or API key. Crewmark doesn't charge for tokens.",
        },
        {
          q: "What's the difference between Pro and Team?",
          a: `Pro ($${pro.price}/month) removes the project and employee limits for one person. Team ($${team.price}/month) adds an organization you can invite colleagues to.`,
        },
        {
          q: "Can several people share one Crewmark account?",
          a: "On Team. Free and Pro are for one person; Team lets you invite members to your organization.",
        },
        {
          q: "When can I upgrade to Pro or Team?",
          a: "Pro and Team are coming soon; we'll announce them on this page. Until then, everything is free.",
        },
      ],
    },
    cta: {
      title: "Hire your first AI employee for free.",
      text: "Crewmark turns Claude Code, Codex, DeepSeek Harness and OpenCode sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Prices as of November 7, 2026, in US dollars, excluding taxes.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by Anthropic, OpenAI or DeepSeek. Product names are trademarks of their owners.",
  },
};
