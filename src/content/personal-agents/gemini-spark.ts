import type { GuideCopy } from "@/components/landing/guide-article";

// /personal-agent/gemini-spark, for "gemini spark" (Bing: about 24.1k impressions in three months), "what happened to
// gemini spark", "gemini tasks", "gemini scheduled / recurring tasks", "how to use gemini spark" (in uk, europe, india,
// for free, in chrome), "gemini spark free / free tier", "gemini spark availability (countries, uk, canada, germany,
// australia)", "gemini spark mac app / download", "gemini spark use cases", "gemini spark vs muse / grok bot / claude
// cowork" (Google autocomplete and Bing keyword research, 2026-11-10; docs/seo/personal-agent-keywords-2026-11-10.md).
// Facts come from Google's I/O post (blog.google, 2026-05-19) and the Gemini Apps Help article "Use Gemini Spark to
// manage your tasks & workflows" (support.google.com/gemini/answer/17094507), checked 2026-11-10. The help article
// says the beta's Spark is now called tasks; it doesn't date the rename or the move to Google AI Pro, so neither is dated.

const help = "https://support.google.com/gemini/answer/17094507";

const prompts = `Every month on the 3rd, check my credit card statements in Gmail
for new or hidden subscription fees and send me a list.

Watch my kid's school inbox for deadlines and send a daily digest
to me and my partner at 7pm.

Summarize this week's meeting notes from email and chat into a Google Doc
and draft the follow-up email. Don't send it.`;

export const geminiSpark: GuideCopy = {
  meta: {
    title: "Gemini Spark (Now Tasks): How to Use It, Plans, Countries",
    description:
      "What happened to Gemini Spark: Google's 24/7 personal agent is now tasks in the Gemini app. Who can use it (Google AI Pro or Ultra, which countries), how to turn it on, schedules, connected apps, limits and the Mac app.",
  },
  breadcrumb: "Gemini Spark",
  parent: { name: "Personal agents", href: "/personal-agent" },
  hero: {
    kicker: "Personal agents · Gemini Spark",
    title: "Gemini Spark, now tasks in Gemini: how to use Google's personal agent",
    lead: "Google announced Gemini Spark on May 19, 2026 as “a 24/7 personal AI agent designed to proactively manage tasks”: it works in the cloud, keeps going with your laptop closed or phone locked, and uses Gmail, Docs and your other Google apps. The beta's Spark is now called tasks in the Gemini app, which is why the Spark button seems to have disappeared. This guide covers who can use it, how to turn it on, schedules, connected apps, limits and what it does well.",
    cta: "Get started",
    secondary: "Turn it on",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "What happened to Gemini Spark?",
      text: [
        "Nothing was shut down. Google's help article now calls the feature tasks and notes that it was “previously called Spark in beta”. You start one with the Task option below the text box in Gemini, and your existing tasks and schedules are still there.",
      ],
      points: [
        "What it is: an agent that runs on Gemini in the cloud, built on Gemini 3.5 and Google's Antigravity harness at launch.",
        "What it does: declutters your inbox, monitors flight and hotel prices, researches with cited sources, browses to shop or book, and creates PDFs, Docs, Sheets and Slides.",
        "When it works: in the background, on a schedule or when something happens, and it asks first before high-stakes actions such as spending money or sending email.",
      ],
    },
    {
      kind: "table",
      id: "who",
      title: "Who can use Gemini tasks (Spark)",
      text: ["From Google's Gemini Apps Help on November 10, 2026."],
      headers: ["Requirement", "Details"],
      rows: [
        ["Plan", "Google AI Pro or Ultra (Google AI Pro is $19.99 a month in the US)"],
        ["Account", "A personal Google Account, 18 or over; work and school accounts aren't supported yet"],
        ["Countries", "Wherever Gemini Apps are available, except the European Economic Area, Switzerland, the UK and Nigeria"],
        ["Setting", "Keep Activity must be on"],
        ["Where", "The Gemini mobile app, the Gemini app on Mac and the web app at gemini.google.com"],
        ["Free plan", "Not included"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "How to use Gemini tasks",
      steps: [
        {
          title: "Turn on task mode",
          text: "On gemini.google.com, click Task below the text box and follow the on-screen steps. Tasks also work in the Gemini mobile app and the Gemini app on Mac.",
        },
        {
          title: "Connect the apps it needs",
          text: "Tasks can use Gmail, Calendar, Docs, Drive, Keep, Sheets, Slides and Tasks, Google Search, Flights, Hotels and Maps, Contacts, Photos and YouTube, plus custom and third-party apps. Google's launch partners included Canva, OpenTable and Instacart.",
        },
        {
          title: "Describe the job and when to do it",
          text: "Ask for a one-off job or set a schedule: at a set time or when something happens. Open the task thread and its work panel to check permissions and schedules.",
          code: prompts,
        },
        {
          title: "Approve the important steps",
          text: "Gemini asks before browsing the web for a task (after you give Chrome permission once), and before sending messages, making purchases, submitting forms or signing in with Google. It also pauses before sharing sensitive information such as health, financial or ID details, even if you chose “Always allow”.",
        },
      ],
      source: { label: "Source: Google's Gemini Apps Help on tasks", href: help },
    },
    {
      kind: "text",
      id: "limits",
      title: "Limits, schedules and turning it off",
      points: [
        "Up to 15 tasks can run at once; a schedule won't run if 15 are already running.",
        "Google's help says schedules don't run while task mode is off or while your device is off. Pause or resume schedules from the task thread, or from the Scheduled page in the web app.",
        "Usage limits are compute-based and higher on Ultra than on Pro.",
        "Chrome auto browse works on desktop only.",
        "Turn it off on the web in Settings > Task settings (“Use task mode to hand off work”), or in the Mac app under Gemini > Settings > Tasks. That deletes the remote browser and code data; your tasks, schedules and files are kept but paused.",
      ],
    },
    {
      kind: "table",
      id: "use-cases",
      title: "Gemini tasks use cases",
      text: ["The first three are Google's own launch examples."],
      headers: ["Use case", "What it does"],
      rows: [
        ["Subscription check", "Scans monthly card statements for new or hidden subscription fees"],
        ["School inbox digest", "Watches for deadlines and sends a daily digest to you and your partner"],
        ["Meeting follow-up", "Summarizes notes from email and chat into a Doc and drafts the follow-up"],
        ["Inbox clean-up", "Archives newsletters and unsubscribes you from lists"],
        ["Price watch", "Monitors flight and hotel prices and tells you when they drop"],
        ["Research report", "Researches a topic with cited sources and packages it as a file"],
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Gemini tasks vs Meta Muse and Grok Bot",
      headers: ["", "Gemini tasks (Spark)", "Meta Muse", "Grok Bot"],
      rows: [
        ["Made by", "Google", "Meta", "xAI"],
        ["Cheapest way in", "Google AI Pro", "Free in the US, weekly limit", "Free trial credit; X Premium and up"],
        ["Strongest with", "Gmail, Docs and Google's apps", "Everyday errands, WhatsApp", "Work apps, teams of Bots"],
        ["Schedules", "At a time or on an event", "Reminders and recurring tasks", "Routines on a schedule or trigger"],
        ["Not available in", "EEA, Switzerland, UK, Nigeria", "Outside the US (limited testing)", "-"],
        ["Guide", "This page", "[Meta Muse](/personal-agent/meta-muse)", "[Grok Bot](/personal-agent/grok-bot)"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "A scheduled agent for your work, not just your inbox",
      text: [
        "Gemini tasks look after one person's Google apps. Crewmark turns your own Claude Code or Codex into an AI employee with a role, a goal in numbers, working hours and a heartbeat, which takes the next issue from a shared board and reports back.",
      ],
      steps: [
        {
          title: "Pick a role",
          text: "Start from an [AI employee role](/ai-employees), such as an SEO specialist or software engineer.",
        },
        {
          title: "Set hours and a heartbeat",
          text: "It wakes every 15 to 240 minutes during the hours you choose. See [Codex scheduled tasks](/proactive-codex).",
        },
        {
          title: "Compare personal agents",
          text: "See [personal AI agents compared](/personal-agent).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Use Gemini tasks" },
  mid: {
    title: "Want an agent that works through your team's backlog?",
    text: "Crewmark employees wake on a heartbeat and take the next issue from a board, on the Claude Code or Codex plan you have.",
    button: "Get started",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "What happened to Gemini Spark?",
        a: "Google renamed it. The beta's Spark is now called tasks in the Gemini app: choose Task below the text box. Your existing tasks and schedules carry over.",
      },
      {
        q: "Is Gemini Spark free?",
        a: "No. Tasks need a Google AI Pro or Ultra subscription on a personal Google Account; Google AI Pro is $19.99 a month in the US.",
      },
      {
        q: "Is Gemini Spark available in the UK or Europe?",
        a: "Not yet. Google's help lists it wherever Gemini Apps are available except the European Economic Area, Switzerland, the UK and Nigeria.",
      },
      {
        q: "Is there a Gemini Spark Mac app?",
        a: "Yes, tasks work in the Gemini app on Mac, as well as in the mobile app and at gemini.google.com.",
      },
      {
        q: "Can Gemini tasks run on a schedule?",
        a: "Yes, at a set time or when something happens. Up to 15 tasks can run at once, and schedules pause while task mode is off.",
      },
      {
        q: "Gemini Spark vs Meta Muse: which should I use?",
        a: "If your life runs on Gmail and Google's apps and you pay for Google AI Pro, Gemini tasks. If you're in the US and want something free to start, Meta Muse.",
      },
    ],
  },
  cta: {
    title: "Personal agents for your inbox. AI employees for your backlog.",
    text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
    button: "Get started",
  },
  checked: "Checked against Google's Gemini Spark announcement and Gemini Apps Help on November 10, 2026.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by Google, Meta or xAI. Gemini and Google are trademarks of Google.",
};
