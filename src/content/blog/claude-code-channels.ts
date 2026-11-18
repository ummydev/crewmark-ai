import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/claude-code-channels, for "claude code channels" (setup, telegram, discord, slack, imessage, whatsapp, "are not
// currently available", vs openclaw), "claude code telegram" (plugin, bot, official plugin, mcp, bridge), "claude code
// discord" (plugin, bot) and "claude code notifications" (when done, on phone, hook) (Google autocomplete, 2026-11-08;
// the "C" page type in docs/seo/agent-keywords-2026-11-07.md). Facts come from the Claude Code docs "Push events into
// a running session with channels" (code.claude.com/docs/en/channels), checked 2026-11-08; the notification hook comes
// from /blog/claude-code-hooks. Slack and WhatsApp aren't channels in the docs, so the copy says so instead of
// inventing a setup. /proactive-claude-code mentions channels in one step and links here.

const docs = "https://code.claude.com/docs/en/channels";

const telegram = `# In Claude Code: install the official plugin (choose user scope)
/plugin install telegram@claude-plugins-official

# Save the token BotFather gave you
/telegram:configure <token>

# Restart Claude Code with the channel turned on
claude --channels plugin:telegram@claude-plugins-official

# Message your bot, then pair with the code it replies with
/telegram:access pair <code>
/telegram:access policy allowlist`;

export const claudeCodeChannels: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Claude Code Channels: Telegram, Discord, iMessage Setup",
      description:
        "How Claude Code channels work and how to set up the official Telegram, Discord and iMessage plugins: commands, pairing, sender allowlists, requirements, why channels aren't available, and Slack.",
    },
    breadcrumb: "Claude Code channels",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-08" },
    hero: {
      kicker: "Blog · Claude Code",
      title: "Claude Code channels: message Claude Code from Telegram, Discord or iMessage",
      lead: "Channels push messages into a Claude Code session that's already running on your computer, so you can text it from your phone and get the answer back in the same chat while the work happens against your real files. Telegram, Discord and iMessage have official plugins. This guide covers how channels work, how to set up each one, how to keep strangers out, why they sometimes don't show up, and how they compare with Remote Control and Claude in Slack.",
      cta: "Get started",
      secondary: "Set up Telegram",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "text",
        title: "What Claude Code channels are",
        text: [
          "A channel is an MCP server that pushes events into your running Claude Code session. It can be two-way: Claude reads the message and replies through the same channel, like a chat bridge. Events only arrive while the session is open.",
        ],
        points: [
          "Official channel plugins: Telegram, Discord and iMessage, plus fakechat, a demo chat on localhost.",
          "Each one is a plugin from claude-plugins-official and needs Bun installed.",
          "You can also build your own channel, for example a webhook receiver for CI failures or error alerts.",
          "Channels are a research preview: the `--channels` flag isn't listed in `claude --help`, and its syntax may change.",
          "In the terminal you see the incoming message and a confirmation such as “sent”; the reply text itself appears in the chat app.",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to set up the Telegram channel",
        steps: [
          {
            title: "Create a bot",
            text: "In Telegram, open BotFather, send `/newbot`, give the bot a name and a username ending in “bot”, and copy the token.",
            code: telegram,
          },
          {
            title: "Install and configure the plugin",
            text: "In Claude Code, run `/plugin install telegram@claude-plugins-official` and choose user scope. If the marketplace isn't found, add it with `/plugin marketplace add anthropics/claude-plugins-official`. Then save the token with `/telegram:configure <token>`, or set `TELEGRAM_BOT_TOKEN` before starting Claude Code.",
          },
          {
            title: "Restart with the channel on",
            text: "Exit and start Claude Code again with `--channels plugin:telegram@claude-plugins-official`. You can pass several channel plugins, separated by spaces.",
          },
          {
            title: "Pair and lock it down",
            text: "Send your bot any message; it replies with a pairing code. Approve it with `/telegram:access pair <code>`, then run `/telegram:access policy allowlist` so only your account can reach the session.",
          },
        ],
        source: { label: "Source: Anthropic's Claude Code docs on channels", href: docs },
      },
      {
        kind: "text",
        id: "discord-imessage",
        title: "Discord and iMessage",
        points: [
          "Discord: create an application in the Discord Developer Portal, copy the bot token, turn on Message Content Intent, and invite the bot with the `bot` scope. Then `/plugin install discord@claude-plugins-official`, `/discord:configure <token>`, restart with `--channels plugin:discord@claude-plugins-official`, DM the bot and pair with `/discord:access pair <code>`.",
          "iMessage: macOS only, with no bot or token. It reads your Messages database, so give your terminal Full Disk Access. Install `imessage@claude-plugins-official`, restart with `--channels plugin:imessage@claude-plugins-official`, and text yourself. Add other people with `/imessage:access allow <phone or Apple ID email>`.",
          "Slack: not a channel. Claude in Slack starts a cloud session from an @Claude mention instead of messaging your local session.",
          "WhatsApp and other apps: no official channel plugin; you'd build your own with the channels reference.",
        ],
      },
      {
        kind: "text",
        id: "not-working",
        title: "Channels not available or not working?",
        points: [
          "Your account type: channels need sign-in through claude.ai or a Console API key. They don't work through Amazon Bedrock, Google Cloud's Agent Platform or Microsoft Foundry.",
          "Your organization: on Claude Team and Enterprise, channels stay blocked until an Owner turns them on under Organization settings > Claude Code > Channels. A startup warning says so. Pro, Max and Ultra accounts without an organization skip this check.",
          "The plugin isn't approved: during the preview, `--channels` accepts only plugins on Anthropic's allowlist (or your organization's). Anything else starts without the channel, and the startup notice tells you why.",
          "The bot doesn't answer: Claude Code has to be running with `--channels`; the bot can only reply while the channel is active.",
          "It stops mid-task: a permission prompt pauses the session until someone answers. Some channels can relay the prompt to your phone.",
        ],
      },
      {
        kind: "text",
        id: "security",
        title: "Keep strangers out",
        points: [
          "Every official channel keeps a sender allowlist; messages from anyone else are silently dropped. Telegram and Discord add you by pairing; iMessage lets your own messages through.",
          "Only servers named in `--channels` can push messages; being in `.mcp.json` isn't enough.",
          "If a channel relays permission prompts, anyone on its allowlist can approve or deny tool use in your session. Only add people you'd trust with that.",
        ],
      },
      {
        kind: "table",
        id: "compare",
        title: "Channels vs Remote Control vs Claude in Slack",
        headers: ["", "What it does", "Runs where", "Good for"],
        rows: [
          ["Channels", "Pushes chat messages, alerts and webhooks into your open session", "Your computer", "Texting the session from your phone; reacting to CI and alerts"],
          ["[Remote Control](/remote-claude-code)", "You drive your local session from claude.ai or the Claude app", "Your computer", "Steering work in progress while away from the desk"],
          ["Claude in Slack", "An @Claude mention starts a cloud session", "Anthropic's cloud", "Starting tasks from a team conversation"],
          ["Notification hook", "Runs your command, such as a desktop alert, when Claude needs you", "Your computer", "Knowing when a turn ends or needs input"],
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Let Claude Code message you, not just answer you",
        text: [
          "A channel is a way to talk to a session you've left running. Crewmark turns that session into an AI employee: it wakes on a heartbeat during working hours, takes the next issue from a board, and messages you in Crewmark when it's blocked, without you texting it first.",
        ],
        steps: [
          {
            title: "Hire an employee on your Claude Code",
            text: "Run the setup command in a Claude Code conversation; that conversation becomes the employee. See [what an AI employee is](/ai-employees).",
          },
          {
            title: "Give it hours and a heartbeat",
            text: "Pick its working hours and how often it wakes, every 15 to 240 minutes. See [how to make Claude Code proactive](/proactive-claude-code).",
          },
          {
            title: "Answer when it needs you",
            text: "Decisions arrive as direct messages; one reply and it carries on. For overnight work, see [how to run Claude Code 24/7](/blog/run-claude-code-24-7).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Set up the Claude Code Telegram channel" },
    mid: {
      title: "Want Claude Code to come to you when it's blocked?",
      text: "Crewmark employees wake on a heartbeat, work through a board and message you when they need a decision.",
      button: "Get started",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "What are Claude Code channels?",
          a: "MCP servers that push events into a Claude Code session that's already running: chat messages from Telegram, Discord or iMessage, or webhooks from CI and monitoring. Claude can reply through the same channel. They're a research preview.",
        },
        {
          q: "Is there an official Claude Code Telegram plugin?",
          a: "Yes: `telegram@claude-plugins-official`. Install it with `/plugin install`, save your BotFather token with `/telegram:configure`, start Claude Code with `--channels plugin:telegram@claude-plugins-official`, and pair your account with the code the bot sends.",
        },
        {
          q: "Can I use Claude Code channels with Slack or WhatsApp?",
          a: "There's no official channel for either. For Slack, Claude in Slack starts cloud sessions from an @Claude mention instead. For other apps you can build your own channel with the channels reference.",
        },
        {
          q: "Why are Claude Code channels not available?",
          a: "Usually because you sign in through Bedrock, Google Cloud or Foundry, your Team or Enterprise organization hasn't enabled them, or the plugin isn't on the approved list. The startup notice names the reason.",
        },
        {
          q: "Do channels work when my computer is off?",
          a: "No. Events only arrive while the session is open on your computer, so for an always-on setup run Claude Code in a background process or a persistent terminal on a machine that stays awake.",
        },
        {
          q: "How do I get a notification when Claude Code is done?",
          a: "Add a `Notification` or `Stop` hook that runs a desktop alert, such as `osascript` on macOS. See [Claude Code hooks](/blog/claude-code-hooks). To hear about it on your phone, ask Claude to reply through a channel when it finishes.",
        },
      ],
    },
    cta: {
      title: "From answering texts to working its own queue.",
      text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Checked against the Claude Code docs on channels on November 8, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by Anthropic. Claude and Claude Code are trademarks of Anthropic; Telegram, Discord and iMessage are trademarks of their owners.",
  },
};
