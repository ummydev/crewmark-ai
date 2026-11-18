import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/codex-remote-control, for "codex remote control" (from phone, cli, linux, windows, vscode, not working, pair,
// start) and "codex from phone" / "control codex from phone" / "use codex from phone" / "codex cli from phone" (Google
// autocomplete, 2026-11-08; the "A" page type for Codex in docs/seo/agent-keywords-2026-11-07.md). Facts come from
// OpenAI's docs at learn.chatgpt.com/docs (remote-connections, mobile, cloud), checked 2026-11-08: the docs name macOS
// and Windows hosts and no CLI command for remote control, so the copy says Linux and the CLI aren't documented rather
// than that they don't work. /remote-claude-code is the Claude Code counterpart; the two link to each other.

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
      title: "Codex Remote Control: Use Codex From Your Phone",
      description:
        "How to control Codex on your Mac or Windows PC from the ChatGPT app: setup with a QR code, SSH hosts, what you can do from the phone, what the host needs, and fixes when remote control isn't working.",
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
          "Setup happens in the desktop app; the docs give no command to start it from the Codex CLI or the IDE extension.",
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
          q: "Can I control Codex from my phone?",
          a: "Yes. Turn on Settings > Connections > Control this Mac or PC in the ChatGPT desktop app, scan the QR code with your phone, and the computer appears under Codex in the ChatGPT app, on iOS or Android.",
        },
        {
          q: "Can I remote control the Codex CLI?",
          a: "OpenAI's docs describe setup only from the ChatGPT desktop app and give no remote-control command for the CLI or the IDE extension. To reach a machine you work on over a terminal, add it as an SSH host in the desktop app, with Codex installed and signed in there.",
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
      ],
    },
    cta: {
      title: "Let Codex work while you're away, not just answer when you look.",
      text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Checked against OpenAI's Codex docs (remote connections, mobile, Codex Cloud) on November 8, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by OpenAI. Codex and ChatGPT are trademarks of OpenAI.",
  },
};
