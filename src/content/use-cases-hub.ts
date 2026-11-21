import type { GuideCopy, GuideSection } from "@/components/landing/guide-article";
import { guideLocales } from "@/i18n/guides";

import { agentIndexSection, agentTaskBundles } from "./use-cases/agent-tasks";

import { copy as zh } from "./i18n/zh/use-cases-hub";
import { copy as zhTW } from "./i18n/zh-TW/use-cases-hub";
import { copy as ja } from "./i18n/ja/use-cases-hub";
import { copy as ko } from "./i18n/ko/use-cases-hub";
import { copy as es } from "./i18n/es/use-cases-hub";
import { copy as ptBR } from "./i18n/pt-BR/use-cases-hub";
import { copy as fr } from "./i18n/fr/use-cases-hub";
import { copy as de } from "./i18n/de/use-cases-hub";

// /use-cases: the index of audience pages and use cases (MC-266), like Composio's /use-cases. For "ai employee use
// cases", "claude code use cases", "ai agent use cases for business". Lists only pages that are live; new ones are added
// here as they ship.

export const USE_CASES_HUB_LOCALES = guideLocales["/use-cases"];
export type UseCasesHubLocale = (typeof USE_CASES_HUB_LOCALES)[number];

const hubCopy: Record<UseCasesHubLocale, GuideCopy> = {
  zh,
  "zh-TW": zhTW,
  ja,
  ko,
  es,
  "pt-BR": ptBR,
  fr,
  de,
  en: {
    meta: {
      title: "AI Employee Use Cases for Claude Code and Codex",
      description:
        "Jobs you can hand to an AI employee on Claude Code or Codex, by team, each with a role brief to copy and the schedule to run it on: daily SEO reports, weekly competitor digests and more.",
    },
    breadcrumb: "Use cases",
    hero: {
      kicker: "Use cases",
      title: "AI employee use cases: jobs to hand to Claude Code and Codex",
      lead: "Each use case is one job an AI employee does on a schedule: what it does, the role brief to copy into CLAUDE.md or AGENTS.md, the access it needs and how to run it. They're grouped by the team that usually owns the work. Every one also works as a one-off prompt in Claude Code or Codex.",
      cta: "Get started",
      secondary: "Browse use cases",
      secondaryHref: "#use-cases",
    },
    sections: [
      {
        kind: "table",
        id: "teams",
        title: "By team",
        headers: ["Team", "What it hands over"],
        rows: [
          ["[Marketing](/for/marketing)", "SEO pages and reports, competitor tracking, social drafts, funnel reviews"],
          ["[Engineering](/for/engineering)", "Error triage, pull request review, issues to pull requests, release notes"],
        ],
      },
      {
        kind: "table",
        id: "use-cases",
        title: "Use cases",
        headers: ["Use case", "Team", "How often"],
        rows: [
          ["[Daily SEO report](/use-cases/daily-seo-report)", "Marketing", "Daily"],
          ["[Weekly competitor digest](/use-cases/weekly-competitor-digest)", "Marketing", "Weekly"],
          ["[Sentry error triage](/use-cases/sentry-error-triage)", "Engineering", "Twice a day"],
          ["[AI code review on every PR](/use-cases/pr-review)", "Engineering", "On each PR"],
        ],
      },
      {
        kind: "text",
        id: "good-first-jobs",
        title: "What makes a good first job",
        points: [
          "It repeats: daily or weekly work pays back the setup fastest.",
          "It has a finish line: a report posted, a page shipped, a digest sent.",
          "It's checkable: you can see in a minute whether it was done right.",
          "The final say stays with you: publishing, spending and anything public go through a person.",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Run any of these as an AI employee",
        text: [
          "Crewmark turns your own Claude Code or Codex into an AI employee with a role, a goal in numbers, working hours and a heartbeat. Recurring jobs become recurring issues on its board.",
        ],
        steps: [
          {
            title: "Pick a role",
            text: "From the [AI employee roles](/ai-employees).",
          },
          {
            title: "Add the jobs as issues",
            text: "Daily and weekly jobs repeat on their own; the employee takes each one when it's due.",
          },
          {
            title: "Answer when it asks",
            text: "When it needs a decision it marks the issue Needs action and asks; everything else is on the board.",
          },
        ],
      },
    ],
    mid: {
      title: "Want these jobs done on a schedule?",
      text: "Crewmark employees run on your Claude Code or Codex and take the next job from a board.",
      button: "Get started",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "What can an AI employee do?",
          a: "Recurring work it can do through files, the web and your tools: reports from analytics, pages for your site, competitor tracking, drafts for review, triage. It works toward a goal and reports back on a schedule.",
        },
        {
          q: "What are good Claude Code use cases outside coding?",
          a: "Marketing is the easiest start: SEO pages and reports, competitor digests and content drafts. See [Claude Code for marketing](/for/marketing); for engineering jobs beyond writing code, see [Claude Code for engineering](/for/engineering).",
        },
        {
          q: "Do these work with Codex?",
          a: "Yes. Every role brief works in AGENTS.md for Codex as well as CLAUDE.md for Claude Code.",
        },
      ],
    },
    cta: {
      title: "Pick a job. Hand it to an AI employee.",
      text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Updated on November 10, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by Anthropic or OpenAI. Claude, Claude Code and Codex are trademarks of their owners.",
  },
};

/** Puts `section` right after the section with id `after`, or at the end if there's none. */
export function insertSection(sections: GuideSection[], after: string, section: GuideSection) {
  const at = sections.findIndex((s) => s.id === after);
  return at < 0 ? [...sections, section] : [...sections.slice(0, at + 1), section, ...sections.slice(at + 1)];
}

// Every language's hub, with the agent × task pages (MC-386) listed after the use cases.
export const useCasesHub = Object.fromEntries(
  Object.entries(hubCopy).map(([locale, c]) => {
    const bundle = agentTaskBundles[locale as UseCasesHubLocale];
    return [locale, bundle ? { ...c, sections: insertSection(c.sections, "use-cases", agentIndexSection(bundle)) } : c];
  }),
) as Record<UseCasesHubLocale, GuideCopy>;
