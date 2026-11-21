import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/codex-remote-control, for "codex remote control" (from phone, cli, linux, windows, vscode, not working, pair,
// start) and "codex from phone" / "control codex from phone" / "use codex from phone" / "codex cli from phone" (Google
// autocomplete, 2026-11-08; the "A" page type for Codex in docs/seo/agent-keywords-2026-11-07.md). Facts come from
// OpenAI's docs at learn.chatgpt.com/docs (remote-connections, mobile, cloud), checked 2026-11-08: the docs name macOS
// and Windows hosts and no CLI command for remote control, so the copy says Linux and the CLI aren't documented rather
// than that they don't work. /remote-claude-code is the Claude Code counterpart; the two link to each other.
// 2026-11-14 (Alex's structure, added without changing the text above): Windows and Linux hosts, what Crewmark adds,
// the ChatGPT app's remote control vs Crewmark, and keeping Codex reachable 24/7 (linking /blog/codex-mac-mini,
// /blog/codex-vps, /blog/codex-windows and /blog/codex-linux), plus FAQ items for "chatgpt remote control windows",
// "codex cloud" and "chatgpt remote control ssh" (autocomplete, 2026-11-14). Facts for these come only from
// docs/seo/codex-remote-facts.md (checked 2026-11-14) and docs/compare/facts/crewmark.md. The new Crewmark section's id
// is "what-crewmark-adds" because the section above already uses "crewmark".

const docs = "https://learn.chatgpt.com/docs/remote-connections";

const ssh = `# ~/.ssh/config on the computer running the ChatGPT desktop app
Host devbox
  HostName devbox.example.com
  User me

# Check it works, then sign in to Codex on the remote host
ssh devbox
codex   # must be on the PATH of the remote user's login shell`;

export const codexRemoteControl: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Codex Remote Control in ChatGPT: Use Codex From Your Phone",
      description:
        "Control Codex on your Mac or Windows PC from the ChatGPT app: QR-code setup, SSH hosts, keeping it reachable 24/7, and fixes when remote control isn't working.",
    },
    breadcrumb: "Codex remote control",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-08" },
    hero: {
      kicker: "Blog · Codex",
      title: "Codex remote control: use Codex on your computer from your phone",
      lead: "Remote connections let you work with Codex chats that run on your Mac or Windows PC from the ChatGPT app on your phone. Your repository, files, credentials and tools stay on the computer; the phone sends prompts and approvals and shows you the results. This guide covers how to set it up, what you can do from the phone, what the computer needs, how to fix it when it isn't working, and how it compares with cloud tasks and an AI employee that works on its own.",
      cta: "Get started",
      secondary: "Set it up",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "text",
        title: "What Codex remote control is",
        text: [
          "OpenAI calls it remote connections. A computer running the ChatGPT desktop app becomes a host; your phone, or another desktop, controls it. The session uses the host's projects, chats, files, credentials, permissions, plugins and local tools, so Codex works exactly as it would if you were sitting there.",
        ],
        points: [
          "Hosts: the ChatGPT desktop app on macOS and Windows. OpenAI's docs don't list Linux as a host.",
          "Phones: the ChatGPT app on iOS and Android, kept up to date. Open Codex in the app (older versions call it Remote).",
          "The connection goes through a secure relay, so the computer doesn't need to be exposed to the internet.",
          "Setup happens in the desktop app; OpenAI says you can't set up phone access from the Codex CLI or the IDE extension.",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to set up Codex remote control",
        steps: [
          {
            title: "Turn it on in the desktop app",
            text: "On the computer, open the ChatGPT desktop app and go to Settings > Connections > Control this Mac or PC. Select Set up or Add, approve remote access and finish any verification. The app shows a QR code. In the same place you can choose to keep the computer awake.",
          },
          {
            title: "Pair your phone",
            text: "Scan the QR code with your phone; it opens ChatGPT. Confirm it's the same account and workspace, and complete any MFA, SSO or passkey step. The computer then appears under Codex. One QR code pairs one phone with one computer, so pair each combination you want.",
          },
          {
            title: "Work from the phone",
            text: "Start a new chat in one of the computer's projects or open an existing one. Send follow-ups, answer Codex's questions, approve commands, and review diffs, test results, terminal output and screenshots. You get a notification when a task finishes or needs you.",
          },
          {
            title: "Optional: control a remote machine over SSH",
            text: "The desktop app can also open projects on an SSH host. Add a Host entry to ~/.ssh/config, check `ssh <alias>` works, install and sign in to Codex on that host, then add the host under Settings > Connections and pick a project folder.",
            code: ssh,
          },
        ],
        source: { label: "Source: OpenAI's docs on remote connections", href: docs },
      },
      {
        kind: "text",
        id: "requirements",
        title: "What the computer needs",
        points: [
          "It has to be awake, online, signed in to the same account and workspace, and running the ChatGPT desktop app. Sleep stops access.",
          "A Mac laptop stays reachable with the lid open and power connected; with the lid closed, it needs an external display.",
          "On Windows, keep the session unlocked if Codex uses Computer Use, which runs in the foreground.",
          "Away from your network, use a VPN or a mesh networking tool rather than exposing the computer to the internet.",
          "Your workspace admin may need to turn on Remote Control access.",
          "You can't hand a chat off to a Codex cloud environment; for that, start a cloud task instead.",
        ],
      },
      {
        kind: "text",
        id: "windows-linux",
        title: "Remote control on Windows and Linux",
        text: [
          "The steps above are the same on a Mac and on a Windows PC, since both can be hosts. Linux is where it differs.",
        ],
        points: [
          "Windows: install the ChatGPT desktop app and turn on Settings > Connections > Control this Mac or PC as above. If Codex uses Computer Use, it works on the active desktop: it moves the pointer, types and takes the foreground, and it can't run in the background. Keep the Windows session unlocked and online while it works, and use your phone to start and check the work while the PC's screen is given over to it. OpenAI's docs also suggest running the desktop app in a Windows virtual machine, so Computer Use takes over the VM instead of your desktop. More in [Codex on Windows](/blog/codex-windows).",
          "Locked use, which lets a Computer Use task started from your phone run after the computer locks, is macOS only.",
          "Linux: OpenAI lists only macOS and Windows as hosts, so controlling a Linux computer from your phone isn't documented, even though a ChatGPT desktop app for Linux is now in preview. What works is a Linux machine as an SSH host: the desktop app on a Mac or Windows PC opens projects on it, and your phone controls that Mac or PC. More in [Codex on Linux](/blog/codex-linux) and [Codex on a VPS](/blog/codex-vps).",
        ],
      },
      {
        kind: "text",
        id: "troubleshooting",
        title: "Codex remote control not working?",
        points: [
          "The computer doesn't show up on the phone: check the desktop app is running, “Allow other devices to connect” is on, both apps use the same account and workspace, and both are up to date. Pairings unused since June 8, 2026 need to be made again.",
          "Remote Control turned off after you signed back in: signing out turns it off but keeps the pairing. Turn Remote Control back on.",
          "An error after selecting Add: restart the desktop app on the computer and try again.",
          "No approval request arrives: open Codex in the app, confirm the account and workspace, scan the QR code again, and ask your admin to confirm Remote Control access.",
          "It keeps disconnecting: the computer slept, lost its network or closed the app. Keep it awake and connected.",
        ],
      },
      {
        kind: "table",
        id: "compare",
        title: "Remote control, cloud tasks or an AI employee?",
        text: [
          "Remote control is a window into Codex on your computer: it waits for you to tell it what to do next. The other two keep working without you.",
        ],
        headers: ["", "Who starts the work", "Runs where", "Computer on?", "Best for"],
        rows: [
          ["Remote control", "You, from the phone", "Your Mac or Windows PC", "Yes, awake and online", "Steering local work while you're away from the desk"],
          ["Codex Cloud task", "You, once", "OpenAI's cloud", "No", "Handing off a task that only needs a repository"],
          ["Crewmark AI employee", "A heartbeat, during working hours", "Your computer, in your own Codex", "Yes", "A standing job: the next issue from a board, every shift"],
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Check in from your phone, let it work on its own",
        text: [
          "Remote control means you still decide every next step. Crewmark turns your Codex into an AI employee with a role, a goal, working hours and a heartbeat: it wakes on a schedule, takes the next issue from a board, and messages you when it needs a decision. Remote control is then how you look in from your phone.",
        ],
        steps: [
          {
            title: "Hire an employee on your Codex",
            text: "Run the setup command in a Codex chat; that chat becomes the employee and keeps its memory between wake-ups. See [what an AI employee is](/ai-employees).",
          },
          {
            title: "Give it working hours and a heartbeat",
            text: "During its shift, the crewmark CLI queues a message into the same Codex chat every 15 to 240 minutes so it picks up its next issue. See [Codex long-running tasks](/blog/codex-long-running-tasks).",
          },
          {
            title: "Look in from your phone when you want",
            text: "Open the employee's chat from Codex in the ChatGPT app to watch or steer it, or just answer its messages. For the Claude Code version, see [Claude Code Remote Control](/remote-claude-code).",
          },
        ],
      },
      {
        kind: "steps",
        id: "what-crewmark-adds",
        kicker: "With Crewmark",
        title: "What Crewmark adds",
        text: [
          "Remote control lets you reach Codex from anywhere, but Codex still works only when you ask. Crewmark makes the Codex on your computer an AI employee with its own job, and gives you a board at crewmark.ai to follow it from your phone.",
        ],
        steps: [
          {
            title: "A role and a goal in numbers",
            text: "Each employee is a Codex chat on your computer with a role, such as software engineer or SEO specialist, plus KPIs and projects. It reads them back with `crewmark me`, so every wake-up starts from its job instead of a blank prompt. See the [AI employee roles](/ai-employees).",
          },
          {
            title: "Working hours and a heartbeat",
            text: "Choose its hours, weekdays only or every day, in your time zone; they can run past midnight. During those hours the `crewmark` CLI wakes the same Codex chat every 15 minutes to 24 hours, so it carries on where it left off.",
          },
          {
            title: "It keeps working through issues",
            text: "Each time it wakes, it takes the issues assigned to it on the board, works on them and keeps their status current. When it needs a review, a permission or some information, it sets the issue to Needs action and asks you there.",
          },
          {
            title: "Talk to it from your phone",
            text: "Open crewmark.ai in your phone's browser and write to the employee in its Work log. The message reaches its Codex chat on your computer, and it answers there.",
          },
          {
            title: "A team on one board",
            text: "Hire more employees with different roles. They share one board, assign each other issues, comment and @mention each other, and each of those wakes the employee it concerns. For the scheduling Codex has built in and how a heartbeat differs, see [proactive Codex](/proactive-codex).",
          },
        ],
      },
      {
        kind: "table",
        id: "vs-chatgpt-app",
        title: "The ChatGPT app's remote control vs Crewmark",
        text: [
          "The ChatGPT app already covers a lot from your phone: you can start new chats in your computer's projects, continue old ones, answer questions, approve commands, review diffs and test results, and get a notification when a task finishes or needs you. Crewmark is for work that should go on when you aren't the one starting it.",
        ],
        headers: ["", "ChatGPT app remote control", "Crewmark"],
        rows: [
          ["What it is", "The ChatGPT app on your phone controlling Codex chats on your Mac or Windows PC", "A team of AI employees, each a Codex or Claude Code chat on your computer, with a board at crewmark.ai"],
          ["Who starts the work", "You: start a chat or send a follow-up from your phone", "A heartbeat during working hours, or an issue someone assigns"],
          ["From your phone", "Start and continue chats, approve actions, review diffs, test results and screenshots, get notified", "Write to an employee in its Work log, create and assign issues, answer when an issue needs action"],
          ["When you stop replying", "Codex finishes the task, notifies you and waits for your next prompt", "The employee moves on to its next issue and asks on the issue when it's blocked"],
          ["Keeping track", "Chats in the host's projects", "An issue board with statuses, priorities, comments and KPIs"],
          ["A team of agents", "You switch between hosts and chats yourself", "Several employees with different roles on one board, assigning each other issues and @mentioning each other"],
          ["Goal and hours", "None beyond the chat", "A goal in numbers and working hours for each employee"],
          ["Runs on", "Your Mac or Windows PC, on your ChatGPT plan", "Your computer, in your own Codex or Claude Code, on the plan you already pay for"],
          ["Made by", "OpenAI", "Crewmark (not affiliated with OpenAI)"],
        ],
      },
      {
        kind: "text",
        id: "always-on",
        title: "Reach Codex 24/7, from anywhere",
        text: [
          "Remote control only reaches a host that is awake, online, signed in and running the ChatGPT desktop app. If it sleeps, loses its network or the app closes, your phone can't reach it until it's back, and choosing Sleep yourself stops access too. For longer-running work, OpenAI suggests a dedicated always-on Mac or Windows PC with your projects, credentials and tools installed on it. Two setups give you one, and Codex cloud is a third option:",
        ],
        points: [
          "A Mac mini at home as the host. Keep it from sleeping, run the ChatGPT desktop app with remote control on, and pair your phone with it. As a Mac it can also run Computer Use and browser tasks through the Chrome extension, and with locked use a Computer Use task can keep going after it locks. See [how to set up Codex on a Mac mini](/blog/codex-mac-mini).",
          "A Linux server as an SSH host. Install and sign in to the Codex CLI on the server, then add it under Settings > Connections in the desktop app; chats in its projects run commands and change files on the server. Your phone still connects to the Mac or Windows PC running the desktop app, not to the server, so that computer has to stay on as well. A Mac mini at home can be that host. See [how to run Codex on a VPS](/blog/codex-vps).",
          "Codex cloud. In the ChatGPT app, open Codex and choose Cloud and an environment. The task runs on OpenAI's cloud and keeps working while your computer sleeps, but it only sees what's in its cloud environment: your local files, running processes, browser sign-ins and VPN access aren't there. A chat on your computer can't be handed off to it either.",
          "Crewmark employees run on your own computer too, so the same rule applies. On an always-on Mac mini or server, their working hours can run every day and past midnight.",
        ],
      },
    ],
    howTo: { section: "how-to", name: "Set up Codex remote control" },
    mid: {
      title: "Want Codex to keep working when you're not steering it?",
      text: "Crewmark wakes your Codex on a heartbeat during working hours and hands it the next issue from a board.",
      button: "Get started",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "What is ChatGPT remote control?",
          a: "It's what many people call OpenAI's remote connections: the ChatGPT app on your phone, or another Mac or Windows computer, controls Codex chats that run in the ChatGPT desktop app on a host computer. The host does the work; the phone sends prompts and approvals.",
        },
        {
          q: "How do I turn on remote control in ChatGPT?",
          a: "On the host computer, open the ChatGPT desktop app, go to Settings > Connections > Control this Mac or PC and select Set up or Add, then scan the QR code with the ChatGPT app on your phone. The host has to be a Mac or Windows PC that stays awake.",
        },
        {
          q: "Can I control Codex from my phone?",
          a: "Yes. Turn on Settings > Connections > Control this Mac or PC in the ChatGPT desktop app, scan the QR code with your phone, and the computer appears under Codex in the ChatGPT app, on iOS or Android.",
        },
        {
          q: "Can I remote control the Codex CLI?",
          a: "Phone access is set up only in the ChatGPT desktop app; OpenAI says you can't set it up from the CLI or the IDE extension. The CLI does have an experimental `codex remote-control` command (start, stop, pair), which OpenAI describes for managed remote-control clients and SSH workflows, but the docs don't describe pairing a phone with a CLI-only machine. To reach a machine you work on over a terminal, add it as an SSH host in the desktop app, with Codex installed and signed in there.",
        },
        {
          q: "Does Codex remote control work on Linux?",
          a: "The docs list the desktop app on macOS and Windows as hosts and don't mention Linux. A Linux machine can still be reached as an SSH host from a Mac or Windows desktop app.",
        },
        {
          q: "Does my computer need to stay on?",
          a: "Yes. The computer has to stay awake, online and signed in, with the desktop app running; sleep stops access. For work that keeps going with the computer off, use a Codex Cloud task.",
        },
        {
          q: "Is Codex remote control secure?",
          a: "It goes through a secure relay, so the computer isn't exposed to the public internet, and Codex's sandbox, security controls and approvals still apply. Only pair devices you own and trust.",
        },
        {
          q: "Why is Codex remote control not working?",
          a: "Usually the desktop app isn't running, “Allow other devices to connect” is off, the phone is on a different account or workspace, an app is out of date, or the computer went to sleep. Re-pair with the QR code if the connection hasn't been used since June 8, 2026.",
        },
        {
          q: "Does ChatGPT remote control work on Windows?",
          a: "Yes. The ChatGPT desktop app on Windows can be a host, set up the same way through Settings > Connections > Control this Mac or PC. If Codex uses Computer Use, it takes over the active desktop, so keep the Windows session unlocked and online while it works. See [Codex on Windows](/blog/codex-windows).",
        },
        {
          q: "Can I use remote control with Codex cloud?",
          a: "They're separate. Remote control drives chats on your own Mac or Windows PC. From Codex in the ChatGPT app you can also choose Cloud and an environment to start a cloud task, which runs on OpenAI's cloud and keeps going while your computer sleeps, but can't see your local files or browser sign-ins. A chat on your computer can't be handed off to a Codex cloud environment.",
        },
        {
          q: "Does ChatGPT remote control work over SSH?",
          a: "Yes, through the desktop app. Add the server to `~/.ssh/config`, install and sign in to Codex on it, then add it under Settings > Connections and choose a remote project. Your phone connects to the Mac or Windows PC running the app, which runs the chat on the server, so that computer has to stay on. See [Codex on a VPS](/blog/codex-vps).",
        },
      ],
    },
    cta: {
      title: "Let Codex work while you're away, not just answer when you look.",
      text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Checked against OpenAI's Codex docs (remote connections, mobile, Codex Cloud, CLI) on November 14, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by OpenAI. Codex and ChatGPT are trademarks of OpenAI.",
  },
};
