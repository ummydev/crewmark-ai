import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/openclaw-reviews, MC-439 pilot: a "<product> reviews" page the CMO judges before more are made. For "openclaw
// review", "openclaw review reddit" and "openclaw reviews and complaints" (Google autocomplete, 2026-11-13). What users
// say comes only from docs/compare/community/openclaw.md (collected 2026-11-13): themes rest on the 10 Hacker News
// threads that were opened and read, each kept only if at least 2 of them support it; the 9 Reddit threads were seen
// only as Google result titles, so they are listed by title and not summarized. One quote, no commenter names. Product
// facts come from docs/compare/facts/openclaw.md (nothing under "Unverified"); Crewmark facts from
// docs/compare/facts/crewmark.md and the crewmark entry in content/compare/en.ts.

const hn = {
  changingMyLife: "https://news.ycombinator.com/item?id=46931805",
  appleIntelligence: "https://news.ycombinator.com/item?id=46893970",
  personalComputer: "https://news.ycombinator.com/item?id=47129647",
  securityNightmare: "https://news.ycombinator.com/item?id=47479962",
  anthropicSubscriptions: "https://news.ycombinator.com/item?id=47633396",
  memory: "https://news.ycombinator.com/item?id=47721955",
  whoIsUsing: "https://news.ycombinator.com/item?id=47783940",
  grokBot: "https://news.ycombinator.com/item?id=49261514",
  agenticSetup: "https://news.ycombinator.com/item?id=50366117",
  saas: "https://news.ycombinator.com/item?id=50392586",
};

export const openclawReviews: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "OpenClaw Reviews: What Hacker News Users Say (2026)",
      description:
        "OpenClaw reviews from 10 Hacker News threads, February to November 2026: what users like, the most common complaints, and what they switch to instead.",
    },
    breadcrumb: "OpenClaw reviews",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-13" },
    hero: {
      kicker: "Blog · Reviews",
      title: "OpenClaw reviews: what users say on Hacker News",
      lead: "OpenClaw is an open-source personal AI assistant that runs on your own computer and answers you in chat apps you already use, such as WhatsApp, Telegram and Slack. We read 10 Hacker News threads about it, from February to November 2026. Users like it for small personal chores and like owning its memory. The complaints that came up most are that it breaks often and needs upkeep (6 of the 10 threads) and that its broad access is a security risk (5 of 10).",
      cta: "Get started",
      secondary: "See the themes",
      secondaryHref: "#at-a-glance",
    },
    sections: [
      {
        kind: "text",
        id: "method",
        title: "How we collected these reviews",
        text: [
          "We read 10 Hacker News threads about OpenClaw on November 13, 2026, one page at a time. They date from February to November 2026, and 7 of them are from February to April, when most of the discussion happened. In the largest threads, which run to several hundred comments, we read the top-level comments and the passages around key topics, not every reply.",
        ],
        points: [
          "A theme is listed only if it came up in at least 2 of the 10 threads, and we say in how many. Points made in a single comment are left out.",
          "One of the threads is about Grok Bot; we used its comments comparing Grok Bot with OpenClaw. Another asks people about their AI setups in general; we used its OpenClaw mentions.",
          "We also found 9 Reddit threads through Google search but couldn't open reddit.com, so we haven't read or summarized them. They're listed by title in [More discussion on Reddit](#reddit).",
          "This is a sample of public discussion, not a survey. People who post about a tool tend to have strong views. Months are worked out from each thread's age and can be off by one.",
          "Nothing was paid for or solicited: we didn't post, ask for reviews or contact anyone. The summaries are in our words, and the one quote is marked and linked.",
        ],
      },
      {
        kind: "table",
        id: "at-a-glance",
        title: "OpenClaw reviews at a glance",
        text: ["What came up in the 10 Hacker News threads we read. Counts are threads, not comments."],
        headers: ["Theme", "What users say", "Threads"],
        rows: [
          ["Praise: handy for personal chores", "Reminders, follow-ups, calendar tasks and group-chat bots, when it works", "3 of 10"],
          ["Praise: in your chat apps, with memory you own", "It answers in apps like WhatsApp and keeps its memory in files you can read and edit", "2 of 10"],
          ["Praise: where assistants are heading", "Even critics see in it what built-in assistants should have been", "2 of 10"],
          ["Complaint: breaks often", "Updates break things, and upkeep takes more time than it saves", "6 of 10"],
          ["Complaint: security risk", "Wide access to your computer and accounts, and exposure to prompt injection", "5 of 10"],
          ["Complaint: hype ahead of real use", "Big claims without concrete examples; demo tasks that look like a show", "4 of 10"],
          ["Complaint: cost and subscriptions", "Model usage adds up, and it depends on other companies' subscription rules", "3 of 10"],
          ["Complaint: needs a spare machine and skills", "Best run on a separate computer by someone happy to maintain it", "2 of 10"],
        ],
      },
      {
        kind: "text",
        id: "praise",
        title: "What users like",
        points: [
          `Handy for personal chores, when it works (3 of 10 threads). Users describe it sending reminders and follow-ups, handling small calendar tasks and running bots for family or group chats. Hacker News threads: [April 2026](${hn.whoIsUsing}), [April 2026](${hn.memory}), [November 2026](${hn.agenticSetup}).`,
          `It lives in the chat apps you already use, with memory you own (2 of 10). Users like messaging it from apps such as WhatsApp, and keeping its memory in files on their own machine that they can read and edit. Threads: [April 2026](${hn.whoIsUsing}), [August 2026](${hn.grokBot}).`,
          `A glimpse of where assistants are going (2 of 10). Even commenters who criticize it say it does what the assistants built into phones and computers should have done, and expect the idea to outlast this project. Threads: [February 2026](${hn.appleIntelligence}), [March 2026](${hn.securityNightmare}).`,
        ],
      },
      {
        kind: "text",
        id: "complaints",
        title: "Common complaints",
        points: [
          `It breaks often and needs constant upkeep (6 of 10 threads). Users describe updates that break things, features that stop working without warning, and spending more time fixing it than using it. As a Hacker News commenter put it in November 2026: "Every update something broke, and I spent more time fixing things" ([thread](${hn.agenticSetup})). Threads: [February 2026](${hn.appleIntelligence}), [April 2026](${hn.whoIsUsing}), [April 2026](${hn.memory}), [August 2026](${hn.grokBot}), [November 2026](${hn.agenticSetup}), [November 2026](${hn.saas}).`,
          `Its broad access is a security risk (5 of 10). Users point out that it gets wide access to your computer and accounts and can be steered by prompt injection. The usual advice is to run it on a separate machine with separate accounts; some say not to install it at all. Threads: [February 2026](${hn.personalComputer}), [February 2026](${hn.appleIntelligence}), [February 2026](${hn.changingMyLife}), [March 2026](${hn.securityNightmare}), [April 2026](${hn.whoIsUsing}).`,
          `Hype ahead of real use (4 of 10). Users say posts about OpenClaw promise big changes without concrete examples, and that its usual demo tasks, such as booking a flight or scheduling a meeting, look more like productivity theatre than time saved. Threads: [February 2026](${hn.changingMyLife}), [March 2026](${hn.securityNightmare}), [April 2026](${hn.whoIsUsing}), [November 2026](${hn.agenticSetup}).`,
          `Cost, and reliance on other companies' subscriptions (3 of 10). Users say the model usage behind it adds up. In April 2026 a Hacker News thread reported that Anthropic no longer allowed Claude Code subscriptions to be used with OpenClaw; commenters weighed paying API prices against moving to other model providers. Threads: [April 2026](${hn.whoIsUsing}), [April 2026](${hn.anthropicSubscriptions}), [April 2026](${hn.memory}).`,
          `It needs a spare machine and technical skill (2 of 10). Users say it is best run on a separate computer by someone comfortable maintaining it, and some small-business owners ask for a hosted, ready-made version instead. Threads: [February 2026](${hn.personalComputer}), [November 2026](${hn.saas}).`,
        ],
      },
      {
        kind: "text",
        id: "switch",
        title: "What people switch to",
        text: [
          "These came up as recommendations in at least 2 of the 10 threads. Other tools were named in only one thread each, so we leave them out here; our [OpenClaw alternatives guide](/blog/openclaw-alternatives) compares the main options from their own docs.",
        ],
        points: [
          `Hermes Agent (3 of 10). Users who moved to it say it runs more reliably for them. See [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw) and [Hermes Agent pricing](/pricing/hermes-agent). Threads: [April 2026](${hn.whoIsUsing}), [August 2026](${hn.grokBot}), [November 2026](${hn.agenticSetup}).`,
          `Plain Claude Code or Codex, with skills and a good \`CLAUDE.md\` (3 of 10). Several users say they built large OpenClaw setups and went back to the coding agents they already had. See [OpenClaw vs Claude Code](/compare/openclaw-vs-claude-code) and [Claude Code vs Codex](/blog/claude-code-vs-codex). Threads: [February 2026](${hn.changingMyLife}), [April 2026](${hn.whoIsUsing}), [November 2026](${hn.agenticSetup}).`,
          `Claude Cowork (2 of 10). Recommended as a hosted assistant from Anthropic. See our [Claude Cowork guide](/personal-agent/claude-cowork). Threads: [April 2026](${hn.whoIsUsing}), [November 2026](${hn.agenticSetup}).`,
          `Cron jobs and your own scripts (2 of 10). Some users say most of what OpenClaw does could be a set of scheduled scripts. Threads: [April 2026](${hn.whoIsUsing}), [November 2026](${hn.agenticSetup}).`,
        ],
      },
      {
        kind: "text",
        id: "reddit",
        title: "More discussion on Reddit",
        text: [
          "We list these Reddit threads for further reading. We found them through Google search but couldn't open reddit.com, so we haven't read or summarized them, and none of the themes above draws on them.",
        ],
        points: [
          "[OpenClaw is god-awful…](https://www.reddit.com/r/ArtificialInteligence/comments/1qrzxs7/openclaw_is_godawful_its_either_you_have_to_spend/), r/ArtificialInteligence, February 2026",
          "[\"OpenClaw is useless\" is a confession, not a review](https://www.reddit.com/r/myclaw/comments/1qw9qx8/openclaw_is_useless_is_a_confession_not_a_review/), r/myclaw, February 2026",
          "[I think openclaw is OVERHYPED. Just use skills](https://www.reddit.com/r/LocalLLaMA/comments/1rbjxpv/i_think_openclaw_is_overhyped_just_use_skills/), r/LocalLLaMA, March 2026",
          "[Any good reason to stay with Openclaw?](https://www.reddit.com/r/openclaw/comments/1rcx7mg/any_good_reason_to_stay_with_openclaw/), r/openclaw, March 2026",
          "[My honest take on OpenClaw after extensive testing](https://www.reddit.com/r/openclaw/comments/1s4pgat/my_honest_take_on_openclaw_after_extensive_testing/), r/openclaw, April 2026",
          "[Is it still worth building an OpenClaw personal agent…?](https://www.reddit.com/r/openclaw/comments/1tts8e9/is_it_still_worth_building_an_openclaw_personal/), r/openclaw, June 2026",
          "[Is OpenClaw still worth it now that I have Codex?](https://www.reddit.com/r/openclaw/comments/1u93to2/is_openclaw_still_worth_it_now_that_i_have_codex/), r/openclaw, July 2026",
          "[Is OpenClaw Dead?](https://www.reddit.com/r/openclaw/comments/1v2o94l/is_openclaw_dead/), r/openclaw, August 2026",
          "[Rant / Review: OpenClaw is a massive waste of time](https://www.reddit.com/r/openclaw/comments/1xi2a21/rant_review_openclaw_is_a_massive_waste_of_time/), r/openclaw, October 2026",
        ],
      },
      {
        kind: "text",
        id: "facts",
        title: "OpenClaw facts to check claims against",
        text: [
          "From OpenClaw's own README, docs and GitHub, checked on November 13, 2026. More on cost in our [OpenClaw pricing](/pricing/openclaw) page.",
        ],
        points: [
          "What it is: an open-source personal AI assistant. A Gateway runs on your own computer and answers you in chat apps such as WhatsApp, Telegram, Slack, Discord and iMessage; state, memory and credentials stay on your hardware.",
          "Price: free. Its README says the project has no paid tier, hosted service or token. You pay your model provider.",
          "License: MIT. It is run by the OpenClaw Foundation, an independent nonprofit.",
          "Where it runs: on your own machine, with installers for macOS, Linux, Windows and WSL2, apps for macOS, iOS, Android, Windows and Linux, and documented Docker and Nix installs.",
          "Models: plugins for OpenAI, Anthropic, Google Gemini, OpenRouter, xAI, Ollama, LM Studio, vLLM and others.",
          "Security, in its own docs: tools run on the host for the main session unless you configure sandboxing, and exec approvals are off by default.",
          "Scheduling: a built-in scheduler for recurring and one-off jobs, plus webhook and Gmail triggers.",
          "Names: renamed OpenClaw on January 30, 2026; earlier names include Clawdbot and Moltbot. It has 394,406 GitHub stars as of November 13, 2026. Official site: [openclaw.ai](https://openclaw.ai).",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Give Claude Code or Codex a standing job",
        text: [
          "Several users in these threads went back to Claude Code or Codex. Crewmark builds on them: it turns your own Claude Code or Codex sessions into AI employees with a role, goals and working hours, each taking the next issue from a shared board. It isn't a personal assistant in your chat apps: work goes through issues, there's no built-in Slack integration, and the agents run on your computer, which has to stay on. It's open source under GPL-3.0 and free for 1 project and up to 3 AI employees.",
        ],
        steps: [
          { title: "Pick a role", text: "Start from the [AI employee roles](/ai-employees), or write your own role and goals." },
          {
            title: "Put the work on a board",
            text: "Assign issues and make the regular ones repeat. During working hours a heartbeat wakes the employee, from every 15 minutes to once a day, to take the next one.",
          },
          {
            title: "Answer when it asks",
            text: "When it needs a review, permission or information, it sets the issue to Needs action and asks you there. Jobs with setup for each agent are in [Claude Code use cases](/use-cases/claude-code) and [Codex use cases](/use-cases/codex).",
          },
        ],
      },
    ],
    mid: {
      title: "Want your coding agent working on a schedule?",
      text: "Crewmark gives Claude Code or Codex a role, a heartbeat and a shared board.",
      button: "Get started",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "Is OpenClaw worth it?",
          a: "It depends on how much upkeep you'll accept. In the 10 Hacker News threads we read, users who like it use it for personal chores such as reminders and calendar tasks, from chat apps they already use. The most common complaint, in 6 of the 10 threads, is that it breaks often and takes constant fixing. The software is free under the MIT license; you pay for the models it uses.",
        },
        {
          q: "Is OpenClaw safe to use?",
          a: "Security came up in 5 of the 10 threads. Users point to its wide access to your computer and accounts and to prompt injection, and advise running it on a separate machine with separate accounts. OpenClaw's own README says tools run on the host for the main session unless you configure sandboxing, and its exec approvals are off by default.",
        },
        {
          q: "Why do people say OpenClaw is overhyped?",
          a: "In 4 of the 10 threads, users say posts about it promised big results without concrete examples, and that its demo tasks look more like productivity theatre than time saved. One of the Reddit threads we list, from r/LocalLLaMA in March 2026, has a title calling it overhyped and suggesting skills instead; we haven't read it.",
        },
        {
          q: "What do people use instead of OpenClaw?",
          a: "In the threads we read: Hermes Agent and plain Claude Code or Codex (3 threads each), then Claude Cowork, and cron jobs with your own scripts (2 threads each). Our [OpenClaw alternatives guide](/blog/openclaw-alternatives) compares the options from their own docs.",
        },
        {
          q: "What do Reddit users say about OpenClaw?",
          a: "We couldn't open Reddit, so we haven't summarized those threads. Going by their titles alone: four ask whether OpenClaw is still worth it, worth staying with, or dead, one of them now that the poster has Codex; three have critical titles, one of which suggests using skills instead; one, in r/myclaw, pushes back on calling it useless; and one is a review after extensive testing. All nine are linked in [More discussion on Reddit](#reddit).",
        },
        {
          q: "Is OpenClaw free?",
          a: "Yes. Its README says the project has no paid tier, hosted service or token, and it's MIT-licensed. You pay your model provider, and cost came up in 3 of the 10 threads we read, including an April 2026 thread about Anthropic no longer allowing Claude Code subscriptions to be used with it. See [OpenClaw pricing](/pricing/openclaw).",
        },
      ],
    },
    cta: {
      title: "Give your coding agent a standing job.",
      text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked:
      "Threads read on November 13, 2026. Product facts checked against OpenClaw's own README, docs and GitHub the same day.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by the OpenClaw Foundation or any company named on this page. The opinions summarized here are those of the commenters in the linked threads. Product names are trademarks of their owners.",
  },
};
