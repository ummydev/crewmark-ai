import type { GuideCopy } from "@/components/landing/guide-article";

// /personal-agent/grok-bot-routines, for "grok bot routines", "grok bot routine webhook", "grok bot routines not
// working", "grok bot routine sync failed", "grok bot scheduled task", "grok bot schedule", "grok bot automation",
// "grok bot use cases", "grok bot marketing team" (Google autocomplete, 2026-11-10; docs/seo/personal-agent-keywords-
// 2026-11-10.md). Facts come from xAI's Grok Bot docs (docs.x.ai/grok-bot: skills-routines-and-automations,
// use-cases, how-grok-bot-works, get-started) and Cursor's Grok Bot plans page, checked 2026-11-10. The docs don't
// describe the "sync failed" error, so the copy says so instead of guessing a fix.

const docs = "https://docs.x.ai/grok-bot/skills-routines-and-automations";

const prompts = `# Ask the Bot that should own the job, in its chat
Set up a routine to sort my overnight Gmail every weekday at 7:00 AM,
draft replies to anything urgent and send me the list. Don't send anything.

Set up a routine every Sunday at 6:00 PM: review next week's Google Calendar,
flag conflicts and overloaded days, and message me a Monday plan.

Set up a routine every 2 hours on weekdays: check the #launch Slack channel
for questions about pricing and draft answers for my approval.`;

const webhook = `# Copy "POST to" and "key" from the routine's Webhook section (desktop)
curl -X POST "https://<POST to URL from the routine>" \\
  -H "Authorization: Bearer <key>" \\
  -H "Content-Type: application/json" \\
  -d '{"order": "1042", "status": "refund requested"}'

# 200 = a run started (check the Bot's chat for the result)
# anything else = no run started`;

export const grokBotRoutines: GuideCopy = {
  meta: {
    title: "Grok Bot Routines: Schedules, Webhooks and Fixes",
    description:
      "How to set up Grok Bot routines: schedules in plain words, time zones, test runs, webhook and Slack triggers, the limits (50 routines, 5 minutes, 300 runs an hour) and what to check when a routine isn't running.",
  },
  breadcrumb: "Grok Bot routines",
  parent: { name: "Personal agents", href: "/personal-agent" },
  hero: {
    kicker: "Personal agents · Grok Bot",
    title: "Grok Bot routines: how to schedule a Bot, trigger it by webhook and fix it",
    lead: "A routine tells one Grok Bot when to run a job: on a schedule, like every weekday at 8:00 AM, or when something happens, like a Slack mention or a webhook call. Because Bots work on a cloud computer, routines run with your laptop closed. This guide covers how to create a routine on desktop and phone, the schedule wording that works, webhooks and event triggers, the limits, routine ideas from xAI's own examples, and what to check when a routine doesn't run.",
    cta: "Get started",
    secondary: "Create a routine",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "What a Grok Bot routine is",
      text: [
        "In xAI's words, a routine “tells one Bot when to run a workflow: on a schedule, or when something happens.” It belongs to one Bot, uses that Bot's memory and skills, and posts its results in the Bot's chat.",
      ],
      points: [
        "Schedules: plain phrases such as “every weekday at 8:00 AM” or “every 2 hours”, in the time zone set in Settings.",
        "Events: a Slack trigger; a GitHub, Linear, Sentry or PagerDuty event; an email to the Bot's own address; or a webhook call.",
        "A new routine doesn't run when you create it. It waits for its next scheduled time; use Test to run it now.",
        "Routines run on the Bot's cloud computer, so they keep going when your laptop is closed.",
        "Every run, tests included, uses your Grok Bot usage.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "How to create a routine in Grok Bot",
      steps: [
        {
          title: "Ask the Bot that should own the job",
          text: "On desktop, open that Bot's chat and describe the job and when it should run. Say where the input comes from, what result you want, what needs your approval and what to do if a source is missing. On the phone, open the Bot's profile, tap Add routine under Routines, and finish the message that starts “Set up a routine to”.",
          code: prompts,
        },
        {
          title: "Check “When to run” and the time zone",
          text: "Open the routine and read When to run to confirm the saved schedule; if it's wrong, choose Edit and describe the fix. The time zone lives in Settings, under Bot, in the Timezone field. Auto-detect uses your computer's zone, so pick a fixed one if the work belongs somewhere else.",
        },
        {
          title: "Test it once",
          text: "On desktop, open the routine and choose Test. It shows Running… until the run finishes, and the result appears in the Bot's chat. Tests do real work, such as changing files or using sites, so keep anything that writes or sends behind your approval. If a routine has no Test button, ask the Bot to do the job once in chat with safe input.",
        },
        {
          title: "Pause, resume or delete",
          text: "On desktop, click the Bot's name, open Details and use the switch on the routine's row, or open the routine and choose Pause or Resume. On the phone, open the routine from the Bot's profile and turn off Active; swipe the row to delete it. Deleting can't be undone.",
        },
      ],
      source: { label: "Source: xAI's Grok Bot docs, Skills and routines", href: docs },
    },
    {
      kind: "steps",
      id: "webhook",
      title: "How to trigger a routine with a webhook",
      text: [
        "A webhook lets another service start a routine, for example your store when a refund is requested, or a form when someone signs up.",
      ],
      steps: [
        {
          title: "Add the trigger",
          text: "Ask the Bot to add a webhook trigger to the routine.",
        },
        {
          title: "Copy the URL and key",
          text: "On desktop, open the routine and find its Webhook section: POST to (the URL), key (the secret) and header (the full Authorization header). Click a field to copy it.",
          code: webhook,
        },
        {
          title: "Send a POST and read the response",
          text: "Send an HTTP POST with the key as `Authorization: Bearer <key>`. You can include a JSON body; the Bot receives it with the routine's instructions. A 200 means a run started, not that it finished. Any other response means no run started: check that the routine isn't paused and that you're using the current key.",
        },
      ],
    },
    {
      kind: "text",
      id: "events",
      title: "Slack, GitHub and other event triggers",
      points: [
        "Slack: fire when the Bot is mentioned, when a word or phrase appears, when someone reacts to a message, or on any message, in one channel or all of Slack. Connect Slack on the Cursor account that owns the Bot first.",
        "GitHub, Linear, Sentry and PagerDuty: start a routine from an event in those tools; these triggers run through Cursor account integrations and may need their own connection.",
        "Email: a routine can start from an email sent to the Bot's own address.",
        "Only new activity starts a run. Keep triggers narrow: a busy channel watched for every message burns usage fast.",
      ],
    },
    {
      kind: "table",
      id: "limits",
      title: "Grok Bot routine limits",
      headers: ["Limit", "Value"],
      rows: [
        ["Routines per Bot", "Up to 50"],
        ["Shortest schedule", "5 minutes between runs"],
        ["Runs per hour, all routines together", "Up to 300"],
        ["Runs per hour, one routine", "Up to 200"],
        ["Run history kept", "The 20 most recent runs per routine"],
        ["Over a rate limit", "The run fails with “Automation run rate limit exceeded”"],
        ["After a long absence", "Grok Bot may ask whether to keep routines running, and pauses them if you don't answer"],
      ],
    },
    {
      kind: "text",
      id: "not-working",
      title: "Grok Bot routines not working? What to check",
      points: [
        "It never ran: a new routine waits for its next scheduled time. Choose Test to run it now.",
        "It's paused: on desktop the row switch is off; on the phone Active is off. Grok Bot can also pause routines itself after you've been away.",
        "Wrong time: read When to run, then check the Timezone in Settings > Bot. Auto-detect follows the computer you're on.",
        "A Slack trigger didn't fire: the message has to be new, in the watched channel, and contain the matching phrase.",
        "The webhook didn't start a run: any response other than 200 means it didn't. Check the routine isn't paused and that the key is current.",
        "A run failed with a rate limit: narrow the trigger or widen the schedule, then rerun with Test or by sending the webhook again. xAI also lists failures from a shared Grok Bot limit as a known issue; those aren't retried automatically.",
        "Usage ran out: every run uses your weekly usage. Pause routines you don't need and widen schedules. On The X Subscription extra usage comes from prepaid credit; on legacy Cursor plans, from on-demand usage if it's turned on.",
        "“Sync failed”: xAI's routine docs don't describe this error. Open the routine, check its schedule and trigger, and run Test; if it keeps failing, contact Grok Bot support from the app.",
      ],
    },
    {
      kind: "table",
      id: "ideas",
      title: "Routine ideas from xAI's own examples",
      text: ["These come from the use cases in xAI's docs; each drafts work and waits for your approval before anything goes out."],
      headers: ["Routine", "When", "What it does"],
      rows: [
        ["Morning briefing", "Every morning", "Summarizes overnight changes across your apps and drafts a team post"],
        ["Inbox manager", "Overnight", "Sorts Gmail by urgency and drafts replies to urgent threads without sending"],
        ["Week ahead", "Sunday evening", "Reviews Google Calendar, flags conflicts and sends a Monday plan"],
        ["Meeting notes", "Every evening", "Pulls action items with owners from Granola notes and drafts a Slack post"],
        ["Project updates", "Fridays", "Drafts Notion progress updates and adds them after your approval"],
        ["Campaign team", "Mondays, 9 AM", "Pulls sign-up data, drafts launch content and fact-checks it against the numbers"],
        ["Competitive intelligence", "Weekly", "Reports competitors' launches and price changes with links"],
        ["Month-end close", "1st of the month", "Matches invoices, reconciles expenses and lists exceptions for sign-off"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "Routines for your coding agent, too",
      text: [
        "Grok Bot routines suit work that lives in Gmail, Slack and Notion. If the work lives in a code repository, Crewmark gives your own Claude Code or Codex the same rhythm: an AI employee with a role, a goal in numbers, working hours and a heartbeat that wakes it to take the next issue from a board.",
      ],
      steps: [
        {
          title: "Hire an employee on your agent",
          text: "Run the setup command in a Claude Code or Codex conversation; that conversation becomes the employee. See [what an AI employee is](/ai-employees).",
        },
        {
          title: "Set hours and a heartbeat",
          text: "It wakes every 15 to 240 minutes during the hours you choose, even overnight. See [how to make Claude Code proactive](/proactive-claude-code) and [Codex scheduled tasks](/proactive-codex).",
        },
        {
          title: "Compare personal agents",
          text: "See the [Grok Bot guide](/personal-agent/grok-bot) and [personal AI agents compared](/personal-agent).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Create a Grok Bot routine" },
  mid: {
    title: "Want the same routine for a coding agent?",
    text: "Crewmark wakes your Claude Code or Codex on a heartbeat during working hours and hands it the next issue.",
    button: "Get started",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "How do I schedule a routine in Grok Bot?",
        a: "Ask the Bot that should own the job, in its chat, to set up a routine and say when, for example “every weekday at 8:00 AM”. On the phone, open the Bot's profile and tap Add routine. Then open the routine and check When to run and your time zone.",
      },
      {
        q: "Why isn't my Grok Bot routine running?",
        a: "Usually it's waiting for its first scheduled time, it's paused, or the time zone is off. Run Test to check it works, make sure Active is on, and read When to run. Webhook calls that don't get a 200 don't start a run.",
      },
      {
        q: "How do I trigger a Grok Bot routine with a webhook?",
        a: "Ask the Bot to add a webhook trigger, then copy the URL and key from the routine's Webhook section on desktop and send an HTTP POST with `Authorization: Bearer <key>`. A JSON body is passed to the Bot.",
      },
      {
        q: "How often can a Grok Bot routine run?",
        a: "At most every five minutes. Each routine can run up to 200 times an hour and all routines together up to 300, and a Bot can have up to 50 routines.",
      },
      {
        q: "Do routines run when my computer is off?",
        a: "Yes. Bots work on a cloud computer, so scheduled and triggered runs keep going with your laptop closed, and the Bot notifies you when it's done.",
      },
      {
        q: "Do Grok Bot routines cost usage?",
        a: "Yes. Every run, including Test runs, uses your Grok Bot usage, and frequent schedules or busy Slack triggers use it fastest.",
      },
    ],
  },
  cta: {
    title: "Give your coding agent a schedule and a job.",
    text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
    button: "Get started",
  },
  checked: "Checked against xAI's Grok Bot documentation and Cursor's Grok Bot plans page on November 10, 2026.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by xAI, SpaceX, X or Cursor. Grok is a trademark of its owner.",
};
