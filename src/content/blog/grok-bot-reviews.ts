import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/grok-bot-reviews, MC-439 pilot: a "<product> reviews" page the CMO judges before more are made. For "grok bot
// review", "grok bot review reddit", "grok bot reviews and complaints" and "grok bot honest review" (Google
// autocomplete, 2026-11-13). What users say comes only from docs/compare/community/grok-bot.md (collected
// 2026-11-13): 7 Hacker News threads were opened and read, but the "Show HN" launch post of a competing open-source
// tool, by its maker, counts toward no theme (CMO, 2026-11-13), so every count is out of the other 6 and a theme is
// kept only if at least 2 of those 6 support it. The October 2026 case of bank details posted to a company Slack is
// left out: its two threads cover one Business Insider story and the later one links the earlier (both read
// 2026-11-13), so it's single-source; only the earlier thread is cited, for the access worries in its comments. The 17
// Reddit threads were seen only as Google result titles, so they are listed by title and not summarized. One quote, no
// commenter names. Product facts come from docs/compare/facts/grok-bot.md (nothing under "Unverified"; platforms said
// as "desktop and mobile apps", as /compare does); Crewmark facts from docs/compare/facts/crewmark.md and the crewmark
// entry in content/compare/en.ts.

const hn = {
  launch: "https://news.ycombinator.com/item?id=49261514",
  agentAccess: "https://news.ycombinator.com/item?id=50033517",
  throttled: "https://news.ycombinator.com/item?id=50345698",
  agenticSetup: "https://news.ycombinator.com/item?id=50366117",
};

export const grokBotReviews: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Grok Bot Reviews: What Hacker News Users Say (2026)",
      description:
        "Grok Bot reviews from 6 Hacker News threads, August to November 2026: what users like, complaints about usage limits and security, and what they use instead.",
    },
    breadcrumb: "Grok Bot reviews",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-13" },
    hero: {
      kicker: "Blog · Reviews",
      title: "Grok Bot reviews: what users say on Hacker News",
      lead: "Grok Bot is xAI's set of hosted AI teammates: Bots that each get a computer of their own in the cloud, sign in to your tools, work in Slack and Microsoft Teams, run routines and hand work to each other. We read 7 Hacker News threads about it from August to November 2026, its first three months; one was a competing tool's launch post, so the counts come from the other 6. Users describe handing it real errands without writing code. The complaint that came up most is usage limits, in 3 of the 6 threads; security and unclear value came up in 2 each.",
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
          "We read 7 Hacker News threads about Grok Bot on November 13, 2026, one page at a time. One of them was a launch post for a competing open-source tool, written by its maker, and we didn't count it toward any theme, so every count on this page is out of the other 6. Grok Bot launched in beta on August 11, 2026, so all of them come from its first three months, August to November 2026.",
        ],
        points: [
          "A theme is listed only if it came up in at least 2 of the 6 counted threads, and we say in how many. Points made in a single comment are left out.",
          "One of the 6 isn't only about Grok Bot: it's a general thread where people describe their AI setups, and we used only the Grok Bot mentions. Two others discuss the same news story, and the later one links the earlier, so we count that story once.",
          "We also found 17 Reddit threads through Google search but couldn't open reddit.com, so we haven't read or summarized them. They're listed by title in [More discussion on Reddit](#reddit).",
          "This is a sample of public discussion, not a survey. People who post about a tool tend to have strong views. Months are worked out from each thread's age and can be off by one.",
          "Nothing was paid for or solicited: we didn't post, ask for reviews or contact anyone. The summaries are in our words, and the one quote is marked and linked.",
        ],
      },
      {
        kind: "table",
        id: "at-a-glance",
        title: "Grok Bot reviews at a glance",
        text: [
          "What came up in the 6 Hacker News threads we counted (the seventh, a competing tool's launch post, isn't counted). Counts are threads, not comments.",
        ],
        headers: ["Theme", "What users say", "Threads"],
        rows: [
          ["Praise: errands without code", "Research, emails and regular digests handed off from start to finish", "2 of 6"],
          ["Complaint: usage limits", "Always-on Bots burn through usage, and a November thread discussed Grok Bot being throttled", "3 of 6"],
          ["Complaint: security", "Prompt injection, and handing Bots logins and access to sensitive accounts", "2 of 6"],
          ["Complaint: unclear value", "Hard to name a task to hand it, or seen as a hosted take on open-source agents", "2 of 6"],
        ],
      },
      {
        kind: "text",
        id: "praise",
        title: "What users like",
        points: [
          `Real errands done without coding (2 of 6 threads). Users describe handing it errands such as sourcing a supplier, sending job applications and emails, and putting together digests of websites and social media. Hacker News threads: [August 2026](${hn.launch}), [November 2026](${hn.agenticSetup}).`,
        ],
      },
      {
        kind: "text",
        id: "complaints",
        title: "Common complaints",
        points: [
          `Usage limits and token burn (3 of 6 threads). Users say always-on Bots use up the weekly allowance quickly. A Hacker News commenter put it this way in August 2026: "Always on perpetual agents use a LOT of tokens" ([thread](${hn.launch})). In November 2026 a Hacker News thread discussed Grok Bot being throttled after xAI's costs outpaced its subscription revenue, as the thread's title puts it. Threads: [August 2026](${hn.launch}), [November 2026](${hn.throttled}), [November 2026](${hn.agenticSetup}).`,
          `Security and account access (2 of 6). Users worry about prompt injection and about giving Bots their logins and access to sensitive accounts without firm limits on what each Bot can reach. Threads: [August 2026](${hn.launch}), [October 2026](${hn.agentAccess}).`,
          `Unclear value (2 of 6). Some users couldn't name a task they would hand it; others see it as a hosted version of open-source agents like OpenClaw. Threads: [August 2026](${hn.launch}), [November 2026](${hn.agenticSetup}).`,
        ],
      },
      {
        kind: "text",
        id: "switch",
        title: "What people switch to",
        text: [
          "These came up as recommendations in at least 2 of the 6 counted threads. Other tools were named in only one thread each, so we leave them out here; our [Grok Bot alternatives](/alternatives/grok-bot) page compares the main options from their own docs.",
        ],
        points: [
          `Hermes Agent (2 of 6). Recommended in one thread and named as a comparable option in another; users describe it as cheaper and more configurable, with your choice of model. See [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent) and [Hermes Agent pricing](/pricing/hermes-agent). Threads: [August 2026](${hn.launch}), [November 2026](${hn.agenticSetup}).`,
          `Your own setup with Codex or Claude Code (2 of 6). Users say Codex or Claude Code plus a few scripts of their own covers much of the same job for less money. See [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code). Threads: [August 2026](${hn.launch}), [November 2026](${hn.agenticSetup}).`,
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
          "[Grok Bot just validated everything we've been building](https://www.reddit.com/r/AI_Agents/comments/1vnbg4z/grok_bot_just_validated_everything_weve_been/), r/AI_Agents, August 2026",
          "[free and open sourced grok bots but better](https://www.reddit.com/r/AI_Agents/comments/1vxoura/free_and_open_sourced_grok_bots_but_better_cooler/), r/AI_Agents, September 2026",
          "[Grok Bot's own docs say all your bots share one computer](https://www.reddit.com/r/grok/comments/1w43c1v/grok_bots_own_docs_say_all_your_bots_share_one/), r/grok, September 2026",
          "[xAI owns Grok and X. Grok Bot still billed me X API credits](https://www.reddit.com/r/GrokBot/comments/1vxpdr3/xai_owns_grok_and_x_grok_bot_still_billed_me_x/), r/GrokBot, September 2026",
          "[Is Grok Bot worth it?](https://www.reddit.com/r/cursor/comments/1vvx2fg/is_grok_bot_worth_it/), r/cursor, September 2026",
          "[Any one tried Grok Bot? Is it garbage or just me?](https://www.reddit.com/r/cursor/comments/1vzg2wd/any_one_tried_grok_bot_is_it_garbage_or_just_me/), r/cursor, September 2026",
          "[PSA: Stay far away from Grok/bot/XAI](https://www.reddit.com/r/singularity/comments/1wpls8e/psa_trust_me_stay_far_away_from_grokbotxai/), r/singularity, October 2026",
          "[Anyone compared Grok Bot usage limits across SuperGrok…](https://www.reddit.com/r/GrokBot/comments/1wqok58/anyone_compared_grok_bot_usage_limits_across/), r/GrokBot, October 2026",
          "[xAI's new $30/mo Premium plan worth it?](https://www.reddit.com/r/GrokBot/comments/1x8xjd1/xais_new_30mo_premium_plan_worth_it_looking_for/), r/GrokBot, October 2026",
          "[Grokbot alternative](https://www.reddit.com/r/GrokBot/comments/1wnayp2/grokbot_alternative/), r/GrokBot, October 2026",
          "[Grok Bot vs. Muse: who actually wins?](https://www.reddit.com/r/AI_Agents/comments/1x56s72/grok_bot_vs_muse_who_actually_wins_20_hours_with/), r/AI_Agents, October 2026",
          "[OpenBot feels a lot like Grok Bot, except it's free](https://www.reddit.com/r/SelfHostedAI/comments/1xgstht/openbot_feels_a_lot_like_grok_bot_except_its_free/), r/SelfHostedAI, October 2026",
          "[Alternative to Grok bot](https://www.reddit.com/r/GrokBot/comments/1xp0dbt/alternative_to_grok_bot/), r/GrokBot, November 2026",
          "[Self-hosted open source alternative to Grok Bot?](https://www.reddit.com/r/SelfHosting/comments/1xpwnes/selfhosted_open_source_alternative_to_grok_bot/), r/SelfHosting, November 2026",
          "[Looking for Grokbot alternatives, is Mausbot legit?](https://www.reddit.com/r/GrokBot/comments/1xqjgru/looking_for_grokbot_alternatives_is_mausbot_legit/), r/GrokBot, November 2026",
          "[Found a Grok Bot alternative that works with my xAI plan](https://www.reddit.com/r/GrokBot/comments/1xsx979/found_a_grok_bot_alternative_that_works_with_my/), r/GrokBot, November 2026",
          "[After what just happened to Grok Bot, are we next?](https://www.reddit.com/r/MuseAgent/comments/1xtgaew/after_what_just_happened_to_grok_bot_are_we_next/), r/MuseAgent, November 2026",
        ],
      },
      {
        kind: "text",
        id: "facts",
        title: "Grok Bot facts to check claims against",
        text: [
          "From xAI's product page and launch post, checked on November 13, 2026. More in our [Grok Bot guide](/personal-agent/grok-bot).",
        ],
        points: [
          "What it is: hosted AI teammates from xAI. Each Bot gets its own computer in the cloud, signs in to your tools and apps, works in Slack and Microsoft Teams, runs routines on a schedule and hands work to other Bots.",
          "Released: in beta on August 11, 2026; the product page now says it is out of beta.",
          "Price: included in xAI's Premium ($30 a month), Super ($100 a month, 3.5 times Premium's usage) and Ultra ($200 a month, 12 times Premium's usage) plans, billed monthly. Each plan includes weekly Grok Bot usage, and extra usage is billed on token cost. Teams and Enterprise plans go through sales.",
          "License: not open source.",
          "Where it runs: in xAI's cloud, so Bots keep working when your laptop is closed. You reach them through desktop and mobile apps, in Slack and Microsoft Teams, and in Google Meet, Zoom or Teams calls.",
          "Models: the Bots are built with Grok.",
          "Approvals: Bots check in when they need approval, and sensitive actions can go through Auto Review.",
          "Official site: [x.ai/bot](https://x.ai/bot).",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Agents on your own computer, with a standing job",
        text: [
          "Grok Bot runs Bots in xAI's cloud on Grok. Crewmark takes a different approach: your own Claude Code or Codex sessions, on your computer and the subscription you already pay for, become AI employees with a role, goals and working hours, each taking the next issue from a shared board. The trade-offs: your computer has to stay on, agents coordinate through issues for now (direct messages between agents are upcoming), and there's no built-in Slack integration. It's open source under GPL-3.0 and free for 1 project and up to 3 AI employees.",
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
          q: "Is Grok Bot worth it?",
          a: "It depends on what you'd hand it and how much usage you need. In the 6 Hacker News threads we counted, users describe errands done without code, such as research, emails and regular digests. The complaint that came up most is usage limits, in 3 of the 6; security and unclear value came up in 2 each. It's included in xAI's Premium plan at $30 a month, with Super at $100 and Ultra at $200 for more usage.",
        },
        {
          q: "What are the most common Grok Bot complaints?",
          a: "In the 6 threads we counted: usage limits and token burn (3 of 6); security, mainly prompt injection and handing Bots logins and access to sensitive accounts (2 of 6); and unclear value, from users who couldn't name a task to hand it or see it as a hosted version of open-source agents (2 of 6).",
        },
        {
          q: "Is Grok Bot safe?",
          a: "Security came up in 2 of the 6 threads we counted. Users worry about prompt injection and about giving Bots their logins and access to sensitive accounts without firm limits on what each Bot can reach. xAI's product page says Bots check in when they need approval and that sensitive actions can go through Auto Review.",
        },
        {
          q: "Is there an honest Grok Bot review?",
          a: "This page doesn't test Grok Bot itself; it summarizes what users said in 6 Hacker News threads from its first three months, with links so you can read them. Users describe handing off errands without code. The most common complaint is usage limits (3 of 6), followed by security and unclear value (2 of 6 each). Nothing here was paid for or solicited.",
        },
        {
          q: "What do Reddit users say about Grok Bot?",
          a: "We couldn't open Reddit, so we haven't summarized those threads. Going by their titles alone: seven ask for or point to alternatives, several of them open-source or self-hosted; three ask whether it's worth it, one of them about the $30 Premium plan; two are about usage limits and billing; one compares it with Meta's Muse; one, in r/MuseAgent, asks whether what happened to Grok Bot could happen to Muse; one says its docs show all your Bots share one computer, while xAI's product page says each Bot has its own (see [the facts](#facts)); one warns people to stay away from xAI; and one says Grok Bot validated what the poster has been building. All 17 are linked in [More discussion on Reddit](#reddit).",
        },
        {
          q: "What do people use instead of Grok Bot?",
          a: "In the 6 threads we counted, two came up more than once: Hermes Agent, which users describe as cheaper and more configurable, and a home-built setup with Codex or Claude Code plus your own scripts (2 of 6 each). Our [Grok Bot alternatives](/alternatives/grok-bot) page compares more options from their own docs.",
        },
      ],
    },
    cta: {
      title: "Give your coding agent a standing job.",
      text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked:
      "Threads read on November 13, 2026. Product facts checked against xAI's product page and launch post the same day.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by xAI or any company named on this page. The opinions summarized here are those of the commenters in the linked threads. Product names are trademarks of their owners.",
  },
};
