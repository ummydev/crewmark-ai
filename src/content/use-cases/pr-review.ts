import type { GuideCopy } from "@/components/landing/guide-article";

// /use-cases/pr-review (MC-266), for "claude code review pull request", "claude code /review", "claude code code review",
// "codex code review", "@codex review", "ai code review on every pr", "ai pr review github". Facts come from Claude Code's
// docs (code.claude.com/docs/en/code-review-local, code-review, code-review-pull-requests) and OpenAI's Codex docs
// (learn.chatgpt.com/docs/third-party/github, developers.openai.com/codex/use-cases/github-code-reviews), checked
// 2026-11-10. The changelog was inconsistent on /review, so the copy uses /code-review and calls /review an alias, as
// the docs do.

const claudeDocs = "https://code.claude.com/docs/en/code-review-local";

const commands = `# Claude Code: review a pull request and post inline comments
/code-review 142 --comment

# Codex: ask for a review in a PR comment on GitHub
@codex review
@codex review for issues in the database migration`;

const rules = `## Code Review Rules
- Flag missing tests for new branches in billing/ and auth/.
- Any SQL migration needs a rollback; say so if it doesn't have one.
- Don't comment on formatting; the linter handles it.
- Approve nothing and request changes on nothing: comment only.`;

export const prReview: GuideCopy = {
  meta: {
    title: "AI Code Review With Claude Code and Codex on Every PR",
    description:
      "Three ways to get AI code review on pull requests with Claude Code and Codex: /code-review with inline comments, @codex review and automatic reviews, and an AI employee that reviews every PR on the board. Commands, review rules to copy and limits.",
  },
  breadcrumb: "AI code review on every PR",
  parent: { name: "Use cases", href: "/use-cases" },
  hero: {
    kicker: "Use cases · Engineering",
    title: "AI code review on every pull request with Claude Code and Codex",
    lead: "Both Claude Code and Codex can review a pull request and leave inline comments on GitHub. You can run a review yourself, have it start automatically, or give an AI employee the job of reviewing whatever lands on the board. This page covers the commands for each, the review rules worth writing down, what the reviewers won't do, and how to make review a standing job rather than something you remember to ask for.",
    cta: "Get started",
    secondary: "The commands",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "options",
      title: "Three ways to get AI review on a pull request",
      headers: ["Option", "How it starts", "Where it runs", "Good for"],
      rows: [
        ["Claude Code `/code-review`", "You run it, with a PR number; `--comment` posts inline comments", "Your own Claude Code session, any plan", "Reviewing your branch or a PR before you merge"],
        ["Claude Code Review (managed)", "An organization Owner turns it on for repositories; anyone can comment `@claude review`", "Anthropic's service", "Teams on Claude plans that want reviews on request"],
        ["Codex code review", "`@codex review` in a PR comment, or Automatic review in Codex settings", "OpenAI's cloud", "Teams on ChatGPT plans; flags P0 and P1 issues on GitHub"],
        ["An AI employee", "A review issue on the board, or every PR it's assigned", "Your own Claude Code or Codex, on a heartbeat", "A standing job: every PR reviewed, follow-ups tracked"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "How to review a pull request with Claude Code or Codex",
      steps: [
        {
          title: "Claude Code: run /code-review",
          text: "In a Claude Code session, `/code-review` finds bugs in your branch's changes; pass a PR number to review that pull request and `--comment` to post the findings on GitHub as inline comments. `--fix` applies them to your working tree instead. `/review` is an alias.",
          code: commands,
        },
        {
          title: "Codex: mention @codex review",
          text: "In a pull request comment, write `@codex review`; Codex reacts with 👀 and posts a review. Add a focus after it if you want one. To review without asking, turn on Automatic review in Codex settings and choose the trigger.",
        },
        {
          title: "Write your review rules down",
          text: "Codex reads a `## Code Review Rules` section from the AGENTS.md closest to the code. For Claude Code, put the same rules in CLAUDE.md. Rules make reviews consistent and keep them off topics your linter already covers.",
          code: rules,
        },
      ],
      source: { label: "Source: Claude Code docs, review locally with /code-review", href: claudeDocs },
    },
    {
      kind: "text",
      id: "limits",
      title: "What AI review won't do",
      points: [
        "Approve or block: Claude's managed Code Review never approves or blocks a pull request, and a good review brief tells an employee to comment only.",
        "Replace the person who owns the change: it catches bugs and missing tests; product and design calls stay with people.",
        "See everything: Codex on GitHub flags only P0 and P1 issues to keep comments focused. Ask for a specific focus when you need one.",
        "Cost nothing: reviews use your plan's usage. Review on request, or on ready-for-review, rather than on every push.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "Make review someone's job",
      text: [
        "Commands review when someone remembers to run them. An AI employee reviews because it's the job: Crewmark turns your Claude Code or Codex into an engineer that wakes on a heartbeat, picks up pull requests waiting for review and comments on them.",
      ],
      steps: [
        {
          title: "Start from the role",
          text: "The [AI software engineer](/ai-employees/software-engineer), with your review rules in its brief.",
        },
        {
          title: "Route reviews to the board",
          text: "Assign it review issues, or add a recurring issue to review every open pull request marked ready.",
        },
        {
          title: "More engineering jobs",
          text: "See [Claude Code for engineering](/for/engineering) and [Sentry error triage](/use-cases/sentry-error-triage).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Review a pull request with Claude Code or Codex" },
  mid: {
    title: "Want every pull request reviewed without asking?",
    text: "A Crewmark engineer on your Claude Code or Codex reviews what's waiting, on a heartbeat.",
    button: "Get started",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "How do I review a pull request with Claude Code?",
        a: "Run `/code-review <PR number> --comment` in a Claude Code session to post findings as inline comments on GitHub. Without `--comment` it reports in the session; `--fix` applies the fixes locally.",
      },
      {
        q: "Is /review the same as /code-review in Claude Code?",
        a: "Claude Code's docs list `/review` as an alias of `/code-review`.",
      },
      {
        q: "How do I get Codex to review a pull request?",
        a: "Comment `@codex review` on the pull request, or turn on Automatic review in Codex settings so reviews start on the trigger you choose. Code review has to be enabled for the repository.",
      },
      {
        q: "Can I give the AI reviewer our team's rules?",
        a: "Yes. Codex reads a `## Code Review Rules` section in AGENTS.md; for Claude Code, put the same rules in CLAUDE.md.",
      },
      {
        q: "Will the AI approve or merge pull requests?",
        a: "Claude's managed Code Review never approves or blocks, and you should keep merging with people. An AI employee's brief should say to comment only.",
      },
    ],
  },
  cta: {
    title: "Every pull request reviewed, without anyone remembering to ask.",
    text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
    button: "Get started",
  },
  checked: "Checked against Claude Code's code review docs and OpenAI's Codex code review docs on November 10, 2026.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by Anthropic, OpenAI or GitHub. Product names are trademarks of their owners.",
};
