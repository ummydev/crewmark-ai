import type { RoleSlug } from "@/i18n/roles";

import type { RoleData, RoleTemplate } from "./build";

// English copy for the role pages (MC-143). Each role matches a marketplace preset in messages/en.json
// (Landing.marketplace.presets) and targets the search terms Google autocomplete showed on 2026-11-07: "ai agent for
// seo" and "ai seo specialist"; "ai marketing agent" (… that runs autonomously, for small business, claude, github);
// "ai social media manager" (… agent, github, prompt, free); "ai software engineer agent" (best, codex, devin); "ai ui
// designer" (… github, skill, tools); "ai app designer" and "ai mobile app designer". The SEO specialist's routine is
// the one this site's own SEO employee runs (docs/seo/log.md). No third-party tool is described beyond what its own
// docs say, and no results are promised.

export const template: RoleTemplate = {
  kicker: "AI employees · Role",
  parent: "AI employees",
  cta: "Get started",
  secondary: "Copy the role brief",
  doesTitle: (name) => `What an ${name} does`,
  goalsTitle: "Goals to give it",
  goalsText:
    "Give an AI employee one number to move, the way you would a new hire, and review it every week. Pick one of these to start.",
  goalsHeaders: ["Goal", "How it's measured", "A good first target"],
  routineTitle: "Its daily routine",
  howToTitle: (name) => `How to set up an ${name} with Claude Code or Codex`,
  howToName: (name) => `Set up an ${name}`,
  briefStep: {
    title: "Write the role brief",
    text: "Save it as `CLAUDE.md` (Claude Code) or `AGENTS.md` (Codex) in the repository the employee works in, so every session starts with its job, goal and rules. See the [CLAUDE.md guide](/blog/claude-md).",
  },
  toolsTitle: "Give it the tools it needs",
  approvalsTitle: "Decide what needs your yes",
  scheduleStep: {
    title: "Put it on a schedule",
    text: "A role needs a rhythm, not a single prompt. Use `/loop` or scheduled tasks for one recurring prompt, or give it working hours, a heartbeat and a board of issues; see [how to make Claude Code proactive](/proactive-claude-code).",
  },
  relatedTitle: "Related guides",
  crewmark: {
    kicker: "With Crewmark",
    title: (name) => `Hire an ${name} instead of scripting one`,
    text: (name) =>
      `Crewmark has an ${name} ready to hire. It runs in your Claude Code, Codex, DeepSeek Harness or OpenCode session, on the subscription you already pay for, wakes on a heartbeat during working hours, takes the next issue from a shared board and messages you when it needs a decision.`,
    steps: [
      {
        title: "Pick the role",
        text: "Its skills, goal and schedule come set up. Change the goal to your own number.",
      },
      {
        title: "Connect your project",
        text: "Run the setup command in the repository or folder it works in. It gets its own session and checkout.",
      },
      {
        title: "Review, don't babysit",
        text: "It comments on its issues as it works and asks before anything on your approval list. Read [what an AI employee is](/ai-employees).",
      },
    ],
  },
  faqTitle: (name) => `${name} FAQ`,
  ctaText:
    "Crewmark turns Claude Code, Codex, DeepSeek Harness and OpenCode sessions into AI employees with roles, goals, working hours and a heartbeat.",
  checked: "Role pages written on November 7, 2026, from the Crewmark marketplace presets and the agents' own docs.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by Anthropic or OpenAI. Claude, Claude Code and Codex are trademarks of their owners.",
};

export const roles: Record<RoleSlug, RoleData> = {
  "seo-specialist": {
    name: "AI SEO specialist",
    meta: {
      title: "AI SEO Specialist: An AI Agent for SEO | Crewmark AI",
      description:
        "What an AI SEO specialist does, the goals and daily routine to give it, and a role brief to copy into Claude Code or Codex. Or hire one on Crewmark that wakes on a heartbeat and works through your SEO backlog.",
    },
    breadcrumb: "AI SEO specialist",
    title: "AI SEO specialist: an AI agent for SEO that works every day",
    lead: "An AI SEO specialist is a coding agent, such as Claude Code or Codex, given the ongoing job of growing your organic traffic. It finds topics people are starting to search for, writes and fixes pages in your site's code, gets them indexed and reports what moved, every working day. This page covers what it does, the goals and routine to give it, and a role brief you can copy.",
    does: {
      text: "Unlike a one-off SEO prompt, the specialist owns the work: it keeps a keyword map and a log, so each session continues where the last stopped.",
      points: [
        "Keyword research: reads product news and changelogs, then checks Google autocomplete, Trends and Search Console for terms with demand and weak results.",
        "Writes and updates pages: one main keyword per URL, a definition first, then steps, a comparison table and an FAQ.",
        "Fixes on-page problems: titles and descriptions, internal links, redirects, structured data and hreflang.",
        "Gets pages indexed: pings IndexNow, resubmits the sitemap and requests indexing.",
        "Reports: traffic, the gap to the goal and what it did, in a short daily note.",
      ],
    },
    goals: [
      ["Search Console clicks", "Weekly clicks from Google", "+10% a month"],
      ["Impressions", "Weekly impressions in Search Console", "+20% a month on a new site"],
      ["Pages shipped", "New or rewritten pages live", "One a working day"],
      ["Indexed pages", "Valid pages in the Page indexing report", "90% of the sitemap"],
    ],
    routine: [
      "Check what changed: new releases in your market, yesterday's Search Console queries and pages with impressions but no clicks.",
      "Pick one topic, and write down why, in the log.",
      "Write or rewrite the page from official sources only, then translate it if your site has more languages.",
      "Test it locally and open a deploy request; it doesn't publish on its own.",
      "Once it's live, ping IndexNow and request indexing, then update the keyword map.",
      "Before signing off, post the daily report.",
    ],
    brief: `# Role: SEO specialist
Goal: +10% Search Console clicks a month.

## Every working day
1. Check new releases in our market and yesterday's queries.
2. Pick one topic with rising demand and weak results; log why.
3. Write or fix the page. Facts from official sources only.
4. Test locally, then open a deploy request. Never publish yourself.
5. After deploy: IndexNow, request indexing, update keywords.md.
6. Post a daily report: traffic, gap to goal, what you did.

## Rules
- One main keyword per URL; check docs/seo/keywords.md first.
- Ask before deleting pages, changing redirects or touching code
  outside the content folders.`,
    tools: "Web search and fetch for research, the site's repository and a local dev server to test pages, read access to Search Console and analytics, and a script for IndexNow. Prefer CLIs over MCP servers where both exist; they use fewer tokens.",
    approvals: "Publishing should go through a person or a deploy owner. Also ask before deleting pages, changing redirects, editing code outside the content folders or touching DNS.",
    related:
      "For a step-by-step build of the same agent with skills and hooks, read [AI SEO agent: how to build one](/blog/ai-seo-agent). For the building blocks, see [Claude Code skills](/blog/claude-code-skills) and [Claude Code hooks](/blog/claude-code-hooks).",
    mid: {
      title: "Want the SEO specialist without building it?",
      text: "Crewmark's SEO specialist runs on your Claude Code or Codex, wakes on a heartbeat and works through an SEO backlog.",
    },
    faq: [
      {
        q: "What is an AI SEO specialist?",
        a: "An AI agent, usually a coding agent such as Claude Code or Codex, given the ongoing job of growing organic traffic: researching keywords, writing and fixing pages, getting them indexed and reporting results.",
      },
      {
        q: "Can an AI agent do SEO on its own?",
        a: "Most of the daily work, yes: research, writing, translation, technical fixes and indexing requests. Publishing, redirects and anything irreversible should still go through a person.",
      },
      {
        q: "What's the difference from an SEO tool?",
        a: "An SEO tool shows you data; you still do the work. An AI SEO specialist does the work in your site's code and reports back, on a schedule.",
      },
      {
        q: "How long until an AI SEO specialist shows results?",
        a: "SEO takes weeks on any site. A new site usually needs a few weeks before impressions grow; aim the first goal at pages shipped and impressions, then clicks.",
      },
      {
        q: "Is there a free AI agent for SEO?",
        a: "You can run one on an agent you already pay for, such as Claude Code or Codex, with free data sources like Google autocomplete, Trends, Search Console and IndexNow.",
      },
    ],
    cta: "Give your site an SEO specialist that never skips the checklist.",
  },
  "marketing-agent": {
    name: "AI marketing agent",
    meta: {
      title: "AI Marketing Agent That Runs Autonomously | Crewmark AI",
      description:
        "An AI marketing agent (growth marketer) that runs experiments across your funnel on its own: what it does, goals to give it, a daily routine and a role brief for Claude Code or Codex. Or hire one on Crewmark.",
    },
    breadcrumb: "AI marketing agent",
    title: "AI marketing agent: a growth marketer that runs on its own",
    lead: "An AI marketing agent is an AI employee that owns a growth number, such as trial sign-ups, and works on it every day: it reads your funnel data, finds the weakest step, writes the change, runs it as an experiment and keeps what wins. Built on a coding agent such as Claude Code or Codex, it can change landing pages, emails and tracking in your own code. This page covers what it does, the goals and routine to give it, and a role brief you can copy.",
    does: {
      text: "It works like a growth marketer at a small company: one funnel, one number, many small experiments.",
      points: [
        "Funnel analysis: reads analytics to find where visitors drop off between landing, sign-up and activation.",
        "Experiments: writes a hypothesis, makes the change on a page or email, and reads the result after enough traffic.",
        "Copy: headlines, landing pages, ad copy and onboarding emails, in variants to test.",
        "Lifecycle email: welcome and re-engagement sequences, written and wired up in your email tool.",
        "Weekly report: what was tested, what won and what's next.",
      ],
    },
    goals: [
      ["Trial sign-ups", "Sign-ups per week from analytics", "+8% a month"],
      ["Landing page conversion", "Visitors who sign up, per page", "+1 percentage point"],
      ["Activation", "New users who finish the first key action", "+5% a month"],
      ["Experiments run", "Experiments started and read out", "Two a week"],
    ],
    routine: [
      "Read yesterday's funnel numbers and any experiment that has enough data.",
      "Write up finished experiments: keep the winner, revert the loser, note what it learned.",
      "Pick the next weakest step in the funnel and write a hypothesis.",
      "Make the change in code or in the email tool, behind a flag or as a variant where possible.",
      "Ask before anything that spends money or reaches customers.",
      "Post a short report on the board.",
    ],
    brief: `# Role: Growth marketer
Goal: +8% trial sign-ups a month.

## Every working day
1. Read yesterday's funnel numbers and running experiments.
2. Close experiments with enough data: keep, revert, log why.
3. Pick the weakest funnel step; write one hypothesis.
4. Build the change as a variant; open a review request.
5. Post what you tested, what won and what's next.

## Rules
- One change per experiment; don't stop a test early.
- Ask before spending money, emailing customers or changing pricing.`,
    tools: "Read access to your analytics (product and web), the website's repository and a local dev server, your email tool's API or CLI, and an experiment or feature-flag tool if you have one.",
    approvals: "Ask before spending money on ads, sending email to customers, changing prices or plans, or publishing anything under your brand on a new channel.",
    related:
      "To make the agent start work on its own, read [how to make Claude Code proactive](/proactive-claude-code) or [Codex](/proactive-codex). To compare platforms that run agents as employees, see [the best AI employee platforms](/blog/best-ai-employee-platforms).",
    mid: {
      title: "A marketing agent that runs while you build?",
      text: "Crewmark's growth marketer runs on your Claude Code or Codex, wakes on a heartbeat and works through your funnel experiments.",
    },
    faq: [
      {
        q: "What is an AI marketing agent?",
        a: "An AI agent given an ongoing marketing goal, such as sign-ups, that analyses your funnel, writes copy and runs experiments on its own, reporting results to you.",
      },
      {
        q: "Can an AI marketing agent run autonomously?",
        a: "The research, writing and building can run on a schedule without prompts. Spending, sending email to customers and pricing changes should wait for a person's yes.",
      },
      {
        q: "Is an AI marketing agent good for a small business?",
        a: "It suits small teams with one product and no full-time marketer: it keeps the funnel work going every day, and you review instead of doing.",
      },
      {
        q: "Can I build an AI marketing agent with Claude?",
        a: "Yes. Claude Code with a role brief, access to your analytics and site code, and a schedule covers it; the role brief on this page is a starting point.",
      },
      {
        q: "AI marketing agent vs marketing automation?",
        a: "Automation runs fixed flows you design. An AI marketing agent decides what to try next, builds it and reads the result.",
      },
    ],
    cta: "Put a growth marketer on your funnel, on the agent you already use.",
  },
  "social-media-manager": {
    name: "AI social media manager",
    meta: {
      title: "AI Social Media Manager: An Agent That Posts and Learns",
      description:
        "What an AI social media manager does, the goals and daily routine to give it, and a role brief for Claude Code or Codex. Drafts, schedules and replies, with your approval before anything goes public.",
    },
    breadcrumb: "AI social media manager",
    title: "AI social media manager: an agent that drafts, schedules and learns",
    lead: "An AI social media manager is an AI employee that keeps your accounts active: it writes posts and threads from what your team ships, schedules them, drafts replies to mentions and learns which posts work. Built on a coding agent such as Claude Code or Codex, it works from your changelog, docs and notes. Because posts are public, it drafts and you approve. This page covers what it does, the goals and routine to give it, and a role brief you can copy.",
    does: {
      text: "Its source material is your own work: releases, docs, blog posts and customer questions.",
      points: [
        "Turns releases and blog posts into threads for X and posts for LinkedIn.",
        "Keeps a content calendar and schedules approved posts.",
        "Drafts replies to mentions and comments for you to approve.",
        "Reads each post's numbers and writes down what lands.",
        "Reuses what worked: formats, times and topics.",
      ],
    },
    goals: [
      ["Followers", "Net new followers per month", "+5% a month"],
      ["Posts published", "Approved posts that went out", "One a working day"],
      ["Engagement", "Replies, reposts and likes per post", "Up month over month"],
      ["Clicks to the site", "Visits from social, in analytics", "+10% a month"],
    ],
    routine: [
      "Read what shipped or was written since yesterday.",
      "Draft the day's posts in your voice and add them to the calendar for approval.",
      "Schedule the posts you approved.",
      "Draft replies to new mentions; flag anything sensitive to a person.",
      "Read yesterday's post numbers and note what worked.",
    ],
    brief: `# Role: Social media manager
Goal: +5% followers a month.

## Every working day
1. Read new releases, blog posts and docs changes.
2. Draft today's posts (X thread, LinkedIn post) in our voice.
3. Put drafts on the board for approval; schedule approved ones.
4. Draft replies to new mentions; flag complaints to a person.
5. Log yesterday's numbers and what worked.

## Rules
- Never post or reply publicly without approval.
- No claims we can't link to; no posts about competitors.`,
    tools: "Your changelog, docs and blog (the repository or a folder), a scheduling tool's API or CLI, read access to each platform's analytics, and a shared calendar or board for drafts.",
    approvals: "Every public post and reply needs your approval at first. Also ask before following or messaging accounts, joining threads about competitors or answering complaints.",
    related:
      "For running several agents side by side, see [multiple Claude Code agents](/blog/multiple-claude-code-agents). For what makes an agent an employee, read [what an AI employee is](/ai-employees).",
    mid: {
      title: "Keep your accounts active without writing every post?",
      text: "Crewmark's social media manager drafts from what you ship, schedules what you approve and reports what lands.",
    },
    faq: [
      {
        q: "What is an AI social media manager?",
        a: "An AI agent that runs your social accounts day to day: it drafts posts from your work, schedules approved ones, drafts replies and tracks what performs.",
      },
      {
        q: "Should an AI agent post without approval?",
        a: "Not at first. Posts are public and hard to take back, so start with drafts you approve, and loosen it only for low-risk formats once you trust its voice.",
      },
      {
        q: "Can I build an AI social media manager with Claude?",
        a: "Yes: Claude Code with a role brief, access to your content and a scheduling tool, and a daily schedule. The role brief on this page is a starting point.",
      },
      {
        q: "Is there a free AI social media manager?",
        a: "You can run one on an agent you already pay for, such as Claude Code or Codex. Scheduling tools and platform APIs may have their own costs.",
      },
      {
        q: "What should an AI social media manager write about?",
        a: "Your own material first: releases, guides, customer questions and lessons learned. It's what it can write accurately.",
      },
    ],
    cta: "Give your accounts a manager that writes from what you ship.",
  },
  "software-engineer": {
    name: "AI software engineer",
    meta: {
      title: "AI Software Engineer Agent: Claude Code, Codex | Crewmark AI",
      description:
        "An AI software engineer agent that picks up issues, opens pull requests with tests and asks for review. What it does, goals to give it, a daily routine and a role brief for Claude Code or Codex.",
    },
    breadcrumb: "AI software engineer",
    title: "AI software engineer: an agent that takes issues and opens pull requests",
    lead: "An AI software engineer is a coding agent, such as Claude Code or Codex, given a place on your team: it picks up issues from the board, works on a branch in its own checkout, opens pull requests with tests and asks for review, without being prompted for each task. This page covers what it does, the goals and routine to give it, and a role brief you can copy.",
    does: {
      text: "It works like a junior-to-mid engineer who never forgets the checklist: small changes, tests, a clear pull request.",
      points: [
        "Takes the next issue that's ready, or the one assigned to it.",
        "Works on its own branch and checkout, so it never touches your working copy.",
        "Writes or updates tests and runs the checks before asking for review.",
        "Opens a pull request that explains the change and how it was tested.",
        "Answers review comments and fixes what's asked.",
      ],
    },
    goals: [
      ["Merged pull requests", "Pull requests merged per week", "10 a week"],
      ["Cycle time", "Hours from issue picked up to PR opened", "Under one working day"],
      ["Review rounds", "Rounds of changes before merge", "One or two"],
      ["Bugs closed", "Bug issues closed per week", "Whatever's in the backlog"],
    ],
    routine: [
      "Check its open pull requests for review comments and fix those first.",
      "Take the next issue that's ready; ask on the issue if it's unclear.",
      "Branch, change, test and run the checks locally.",
      "Open the pull request and move the issue to review.",
      "Repeat until working hours end, then post what's in flight.",
    ],
    brief: `# Role: Software engineer
Goal: 10 merged pull requests a week.

## For every issue
1. Read the issue; ask on it if anything is unclear.
2. Work on a new branch in your own checkout.
3. Write or update tests; run lint, type checks and tests.
4. Open a PR: what changed, why, how you tested it.
5. Answer review comments before taking new work.

## Rules
- Never push to main or merge your own PR.
- Ask before database migrations, dependency upgrades or
  deleting code you didn't write.`,
    tools: "The repository and its issue tracker, `gh` or your Git host's CLI, the project's test and lint commands, and a separate checkout or git worktree per task; see the [Claude Code worktree guide](/blog/claude-code-worktree).",
    approvals: "Merging, deploying, database migrations, dependency upgrades and anything touching secrets or production data should wait for a person.",
    related:
      "For Claude Code vs Codex as the engine, see [Claude Code vs Codex](/blog/claude-code-vs-codex). To run several engineers at once, read [multiple Claude Code agents](/blog/multiple-claude-code-agents) and [Claude Code background agents](/blog/claude-code-background-agents).",
    mid: {
      title: "Add an engineer that takes the next issue itself?",
      text: "Crewmark's software engineer runs on your Claude Code or Codex, picks up issues on a heartbeat and opens pull requests for review.",
    },
    faq: [
      {
        q: "What is an AI software engineer agent?",
        a: "A coding agent, such as Claude Code or Codex, that works through issues on its own: it branches, changes code, tests, and opens pull requests for a person to review.",
      },
      {
        q: "What's the best AI software engineer agent?",
        a: "It depends on the engine you trust: Claude Code and Codex are the common ones, and either can run as an AI software engineer with a role brief, its own checkout and a schedule.",
      },
      {
        q: "Can an AI software engineer merge its own code?",
        a: "It shouldn't. Keep merging and deploying for people; let the agent open pull requests and fix review comments.",
      },
      {
        q: "How is this different from using Claude Code myself?",
        a: "You stop starting each task. The agent takes the next issue from the board during working hours, and you review pull requests instead of prompting.",
      },
      {
        q: "Can I run several AI engineers on one repository?",
        a: "Yes, if each has its own branch and checkout, such as a git worktree, so their changes don't collide.",
      },
    ],
    cta: "Add an engineer that turns issues into pull requests, on your plan.",
  },
  "ui-designer": {
    name: "AI UI designer",
    meta: {
      title: "AI UI Designer Agent for Your Own Code | Crewmark AI",
      description:
        "An AI UI designer that turns rough pages into a consistent interface in your code and components. What it does, goals to give it, a daily routine and a role brief for Claude Code or Codex.",
    },
    breadcrumb: "AI UI designer",
    title: "AI UI designer: consistent interfaces, in your own code",
    lead: "An AI UI designer is an AI employee that improves your product's interface directly in your code: type, spacing, components, dark mode and accessibility. Built on a coding agent such as Claude Code or Codex, it works in your design system instead of a separate design file, checks its work in a browser and opens a pull request with before-and-after screenshots. This page covers what it does, the goals and routine to give it, and a role brief you can copy.",
    does: {
      text: "Its output is code, so a change is ready to ship once you approve it.",
      points: [
        "Audits pages for inconsistent type, spacing and colour, and fixes them with your design tokens.",
        "Turns one-off markup into shared components.",
        "Adds and checks dark mode.",
        "Fixes accessibility issues: contrast, focus states, labels and keyboard use.",
        "Takes before-and-after screenshots at desktop and phone widths for review.",
      ],
    },
    goals: [
      ["Screens polished", "Screens that pass its checklist, per week", "Three a week"],
      ["Accessibility issues", "Open issues from an audit tool", "Down every week"],
      ["Shared components", "One-off patterns replaced by components", "Two a week"],
      ["Visual regressions", "UI bugs reported after its changes", "Zero"],
    ],
    routine: [
      "Pick the next screen from the board or from its audit list.",
      "Screenshot it at desktop and phone widths, in light and dark.",
      "Fix it with the design system's tokens and components; add a component if a pattern repeats.",
      "Check it in the browser again and run the accessibility checks.",
      "Open a pull request with before-and-after screenshots.",
    ],
    brief: `# Role: UI designer
Goal: 3 polished screens a week.

## For every screen
1. Screenshot it: desktop and phone, light and dark.
2. Fix type, spacing and colour with our tokens only.
3. Reuse components; extract one if a pattern repeats.
4. Check contrast, focus states and labels.
5. Open a PR with before-and-after screenshots.

## Rules
- No new colours, fonts or spacing values outside the tokens.
- Ask before changing copy, layouts of key flows or the brand.`,
    tools: "The front-end repository and a local dev server, a browser it can drive for screenshots, your design tokens and component library, and an accessibility checker.",
    approvals: "Ask before changing the brand (logo, colours, fonts), copy, the layout of sign-up or checkout flows, or anything a customer will notice on a page that converts.",
    related:
      "For running a designer alongside an engineer, see [multiple Claude Code agents](/blog/multiple-claude-code-agents). To have it pick up work on its own, read [how to make Claude Code proactive](/proactive-claude-code).",
    mid: {
      title: "Polish your interface without a design backlog?",
      text: "Crewmark's UI designer works in your code and components, and opens pull requests with before-and-after screenshots.",
    },
    faq: [
      {
        q: "What is an AI UI designer?",
        a: "An AI agent that improves a product's interface directly in code: type, spacing, components, dark mode and accessibility, checked in a browser and sent as pull requests.",
      },
      {
        q: "Does an AI UI designer replace Figma?",
        a: "Not for exploring new ideas. It's for the steady work of making shipped screens consistent and accessible, which happens in code anyway.",
      },
      {
        q: "Can Claude Code do UI design?",
        a: "Claude Code can edit front-end code and, with a browser tool, check the result. A role brief and design tokens keep its changes consistent.",
      },
      {
        q: "How do I stop an AI designer from changing the brand?",
        a: "Limit it to your design tokens in the role brief, and list brand, copy and key flows as things it must ask about first.",
      },
    ],
    cta: "Give your interface a designer that works in your code.",
  },
  "app-designer": {
    name: "AI app designer",
    meta: {
      title: "AI App Designer: iOS and Android Screens | Crewmark AI",
      description:
        "An AI app designer that designs iOS and Android screens in your app's code and checks them in the simulator. What it does, goals to give it, a daily routine and a role brief for Claude Code or Codex.",
    },
    breadcrumb: "AI app designer",
    title: "AI app designer: mobile screens, built and checked in the simulator",
    lead: "An AI app designer is an AI employee that designs and polishes your iOS and Android screens in the app's own code, then checks them in the simulator or emulator before asking for review. Built on a coding agent such as Claude Code or Codex, it follows each platform's conventions and your components, and can prepare App Store screenshots. This page covers what it does, the goals and routine to give it, and a role brief you can copy.",
    does: {
      text: "It designs in the app's code, so what you review is what ships.",
      points: [
        "Lays out new screens and polishes existing ones with your components.",
        "Follows iOS and Android conventions: navigation, safe areas, Dynamic Type and touch targets.",
        "Runs the app in the simulator or emulator and screenshots each change.",
        "Checks dark mode, small and large screens, and accessibility labels.",
        "Prepares App Store and Play Store screenshots.",
      ],
    },
    goals: [
      ["Screens shipped", "New or redesigned screens merged per week", "Two a week"],
      ["Simulator checks", "Changes with screenshots on small and large devices", "Every change"],
      ["Accessibility", "Screens with labels and Dynamic Type support", "All new screens"],
      ["Store screenshots", "Up-to-date screenshots per release", "Every release"],
    ],
    routine: [
      "Take the next screen from the board.",
      "Build or adjust it with the app's components.",
      "Run it in the simulator on a small and a large device, light and dark.",
      "Fix what looks off, then screenshot the result.",
      "Open a pull request with the screenshots.",
    ],
    brief: `# Role: App UI designer
Goal: 2 app screens a week.

## For every screen
1. Build it with our components and platform conventions.
2. Run it in the simulator: small and large device, light and dark.
3. Check safe areas, Dynamic Type, touch targets and labels.
4. Open a PR with simulator screenshots.

## Rules
- Don't change navigation structure or onboarding without asking.
- Don't submit builds to the App Store or Play Store.`,
    tools: "The app's repository, Xcode and the iOS Simulator or Android Studio and an emulator on the machine it runs on, a way to take screenshots, and your component library.",
    approvals: "Ask before changing navigation, onboarding or paywall screens, and never let it submit builds or edit store listings itself.",
    related:
      "For the engineer who wires up the logic behind its screens, see the [AI software engineer](/ai-employees/software-engineer). For web interfaces, see the [AI UI designer](/ai-employees/ui-designer).",
    mid: {
      title: "Polish your app's screens on autopilot?",
      text: "Crewmark's app UI designer builds iOS and Android screens in your code and checks them in the simulator.",
    },
    faq: [
      {
        q: "What is an AI app designer?",
        a: "An AI agent that designs and polishes mobile app screens in the app's own code and checks them in the iOS Simulator or Android emulator before asking for review.",
      },
      {
        q: "Can an AI agent design iOS screens?",
        a: "A coding agent such as Claude Code or Codex can write SwiftUI or UIKit screens, run the app in the simulator and screenshot the result, on a Mac with Xcode.",
      },
      {
        q: "Is an AI app designer the same as an AI app design generator?",
        a: "No. A generator makes mockups from a prompt. An AI app designer works in your real app's code, with your components, and opens pull requests.",
      },
      {
        q: "Can it make App Store screenshots?",
        a: "Yes, from the simulator. Submitting them, and the builds, should stay with a person.",
      },
    ],
    cta: "Give your app a designer that checks every screen in the simulator.",
  },
};
