import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/codex-mac-mini, Alex's request (2026-11-14): keep Codex reachable 24/7 from your phone with a dedicated
// always-on Mac mini as the ChatGPT desktop app host. /blog/codex-vps (a Linux server as an SSH host) is the companion
// post; /blog/claude-code-mac-mini and /blog/claude-code-vps are the Claude Code versions. Keywords from Google
// autocomplete (2026-11-14): "codex mac mini", "install codex mac mini", "run codex on mac mini", "codex mac minimum
// requirements", "codex minimum mac os", "codex remote control" (from phone), "codex 24/7". Facts come only from
// docs/seo/codex-remote-facts.md (OpenAI's docs at learn.chatgpt.com: remote connections, Computer Use, Codex CLI,
// settings, plans; the CLI's GitHub install guide for macOS 12+ and RAM), docs/seo/remote-24-7-facts.md (Apple Support
// for Energy and Screen Sharing, Tailscale, Xcode on macOS only) and docs/compare/facts/crewmark.md. OpenAI's docs say
// "a dedicated always-on Mac", not Mac mini: the Mac mini is our pick. Left out as unverified: the label of the
// keep-awake option under Settings > Connections (so the copy doesn't name it), desktop app requirements, prices, and
// Remote Control on Free and Go plans.

const docs = "https://learn.chatgpt.com/docs/remote-connections";

const install = `# Codex CLI on macOS (either one; the script also updates it)
curl -fsSL https://chatgpt.com/codex/install.sh | sh
brew install --cask codex

# Open the ChatGPT desktop app, installing it if it's missing
codex app

# Sign in to the CLI with your ChatGPT account
codex login`;

export const codexMacMini: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Codex Mac Mini Setup: Run Codex 24/7 From Your Phone",
      description:
        "Run Codex 24/7 on a Mac mini: install the ChatGPT desktop app and CLI, keep the Mac awake, turn on remote control, pair your phone and add Computer Use.",
    },
    breadcrumb: "Codex on a Mac mini",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-14" },
    hero: {
      kicker: "Blog · Codex",
      title: "Codex on a Mac mini: an always-on host you control from your phone",
      lead: "Remote control lets you use Codex from the ChatGPT app on your phone, but only while the computer running it is awake and online. Close a laptop and your phone loses it. For longer-running work OpenAI suggests a dedicated always-on Mac, and a Mac mini at home fits: it stays on, keeps your projects, logins and tools on a machine you own, and can run Computer Use and browser tasks. This guide covers installing Codex on it, keeping it awake, setting up remote control, pairing your phone, and reaching its desktop from a laptop.",
      cta: "Get started",
      secondary: "See the steps",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "text",
        id: "why-mac-mini",
        title: "Why a Mac mini as the Codex host",
        text: [
          "Your phone doesn't run Codex. It sends prompts, approvals and follow-ups, and the host supplies everything else: projects, chats, files, credentials, plugins, MCP servers, skills, Computer Use, the browser and local tools. So the host decides what Codex can do from your phone, and whether it's reachable at all. A Mac mini that never sleeps makes a good one:",
        ],
        points: [
          "It stays on. A host that sleeps, loses its network or closes the app cuts remote access until it's back.",
          "Computer Use and browser tasks. The ChatGPT desktop app runs Computer Use on macOS and Windows; the Linux preview doesn't have it yet. On Windows, Computer Use takes over the active desktop and needs the session unlocked. A Mac has locked use, so a Computer Use task you start from your phone can run after the Mac locks.",
          "iOS apps. Xcode and the iOS Simulator run only on macOS, so if Codex works on an iPhone app, the host has to be a Mac.",
          "Your data at home. Repositories, browser sign-ins and credentials stay on a machine you own, and signed-in websites and desktop apps work because the host can reach them.",
          "A base for servers too. The same desktop app can add Linux servers as SSH hosts, so the Mac mini can be the always-on computer your phone connects to while chats run on a server.",
        ],
      },
      {
        kind: "text",
        id: "what-you-need",
        title: "What you need",
        points: [
          "A Mac mini you can leave switched on and connected to the internet.",
          "A ChatGPT account with Codex access. OpenAI's plan table lists mobile remote control on Plus, Pro, Business and Enterprise; it isn't available with an API key. In a ChatGPT workspace, an admin may need to turn on Remote Control access first.",
          "The latest ChatGPT app on your phone, iOS or Android, signed in to the same account and workspace as the Mac mini.",
          "Optionally, Tailscale on the Mac mini and your laptop, to reach the Mac mini's desktop from anywhere.",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to set up Codex on a Mac mini",
        steps: [
          {
            title: "Install the ChatGPT desktop app and the Codex CLI",
            text: "Since July 9, 2026, Codex lives in the ChatGPT desktop app, next to Chat and Work. Install the app for macOS, sign in with the account and workspace you use on your phone, and select Codex. The Codex CLI is optional but handy when you SSH in: install it with OpenAI's script or Homebrew, run `codex` and choose Sign in with ChatGPT. `codex app` opens the desktop app, and installs it if it's missing.",
            code: install,
          },
          {
            title: "Keep the Mac mini awake",
            text: "In System Settings > Energy, turn on Prevent automatic sleeping when the display is off, so the Mac mini keeps running with its display off; Wake for network access lets it wake for shared services (see [Apple's sleep and wake settings](https://support.apple.com/guide/mac-help/set-sleep-and-wake-settings-mchle41a6ccd/mac)). Then, in the desktop app, turn on Settings > General > Prevent sleep while running, so local chats keep going while you're away.",
          },
          {
            title: "Turn on remote control",
            text: "In the desktop app, open Settings > Connections > Control this Mac or PC and select Set up or Add. Approve remote access and finish any verification; the app shows a QR code. Settings > Connections is also where you choose to keep the computer awake, enable Computer Use, install the Chrome extension and manage connected devices.",
          },
          {
            title: "Pair your phone",
            text: "Scan the QR code with your phone; it opens ChatGPT. Confirm the account and workspace and complete any MFA, SSO or passkey step. The Mac mini then shows up under Codex in the ChatGPT app (Remote in older versions), and you can start chats in its projects, approve commands and review diffs. A QR code pairs one phone with one host, so pair each phone you'll use. To control it from a laptop too, use Settings > Connections > Control other devices on the laptop, where that option is available.",
          },
          {
            title: "Turn on Computer Use and the Chrome extension",
            text: "For browser and desktop tasks the host needs both. With Codex selected, open Settings > Computer use, find Any App under Control and select Install or turn the switch on, and install the Chrome extension from Settings > Connections. Computer Use is available only in some regions. To let a Computer Use task you start from your phone run while the Mac is locked, turn on locked use in Settings > Computer Use. It installs an Apple authorization plug-in, unlocks only for an active Computer Use turn, and locks again if someone uses the Mac mini's keyboard or pointer.",
          },
          {
            title: "Add SSH hosts if your code lives on a server",
            text: "Settings > Connections can also add a Linux server from `~/.ssh/config` as an SSH host; you then choose a project folder on it. Chats in that project run on the server, while your phone keeps connecting to the Mac mini. The setup is in [Codex on a VPS](/blog/codex-vps).",
          },
          {
            title: "Reach the Mac mini's desktop with Tailscale and Screen Sharing",
            text: "Install Tailscale on the Mac mini and your laptop and add both to the same tailnet, a private network where only your devices can reach each other over encrypted WireGuard connections (see [what Tailscale is](https://tailscale.com/kb/1151/what-is-tailscale)). On the Mac mini, turn on System Settings > General > Sharing > Screen Sharing; it can't be on at the same time as Remote Management. Then connect from your laptop to the Mac mini's name on your tailnet to sign in to websites, answer security or privacy prompts that Computer Use can't approve, or watch Codex work (see [Apple's Screen Sharing guide](https://support.apple.com/guide/mac-help/turn-screen-sharing-on-or-off-mh11848/mac)).",
          },
        ],
        source: { label: "Source: OpenAI's docs on remote connections", href: docs },
      },
      {
        kind: "text",
        id: "keep-running",
        title: "What keeps it reachable, and what stops it",
        points: [
          "The Mac mini has to stay awake, online and signed in to the same account and workspace, with the desktop app open. If it sleeps, loses its network or the app closes, your phone can't reach it until it's back. Choosing Sleep yourself stops access too.",
          "Signing out of the desktop app turns Remote Control off but keeps your pairings. After you sign back in, turn Remote Control on again.",
          "If an error appears after you select Add, restart the desktop app on the Mac mini and try again. Pairings not used since June 8, 2026 need both apps updated and pairing again.",
          "Remote control doesn't start work by itself. When a task is done, Codex notifies you and waits for your next prompt. For scheduled tasks and other ways to start work without you, see [proactive Codex](/proactive-codex) and [Codex long-running tasks](/blog/codex-long-running-tasks).",
          "More fixes are in [Codex remote control](/blog/codex-remote-control#troubleshooting).",
        ],
      },
      {
        kind: "text",
        id: "other-setups",
        title: "Other ways to keep Codex reachable",
        points: [
          "A Linux server as an SSH host runs Codex on the server, but your phone still connects to a Mac or Windows PC running the desktop app, so that computer has to stay on as well. The Mac mini can be it. See [Codex on a VPS](/blog/codex-vps).",
          "Codex cloud runs tasks on OpenAI's cloud and keeps working while your computer sleeps. It only sees its cloud environment, so your local files, browser sign-ins and VPN access aren't there.",
          "For Claude Code, the same always-on Mac mini setup is in [Claude Code on a Mac mini](/blog/claude-code-mac-mini), and Anthropic's version of remote control in [Claude Code Remote Control](/remote-claude-code).",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Give the always-on Mac mini a standing job",
        text: [
          "An always-on Mac mini answers whenever you message it from your phone, and waits when you don't. Crewmark turns a Codex chat on it into an AI employee with a role, a goal in numbers, working hours and a heartbeat: during working hours the `crewmark` CLI wakes the employee to work through its issues on a shared board. The computer it runs on has to stay on, and the Mac mini does.",
        ],
        steps: [
          {
            title: "Hire an employee",
            text: "Pick a role from the [AI employee roles](/ai-employees), such as software engineer or SEO specialist, and write its goals and KPIs.",
          },
          {
            title: "Connect Codex on the Mac mini",
            text: "Paste the setup link into a Codex chat on the Mac mini. It installs the `crewmark` CLI and links that chat to the employee. Claude Code works too.",
          },
          {
            title: "Set working hours and a heartbeat",
            text: "Choose the hours, weekdays only or every day, and how often the employee wakes: every 15, 30, 60, 120 or 240 minutes. Hours can run past midnight, so on a machine that never sleeps a night shift works too. Each wake-up goes into the same Codex chat, so it carries on where it left off.",
          },
          {
            title: "Assign issues and talk to it from your phone",
            text: "Open crewmark.ai in your phone's browser to create and assign issues, or write to the employee in its Work log; it answers there. Assigning an issue wakes it right away, and when it needs a review or a decision it sets the issue to Needs action and asks you there. Jobs to give it are in [Codex use cases](/use-cases/codex).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Set up Codex on a Mac mini as an always-on host" },
    mid: {
      title: "Want the Mac mini to keep working when you're not messaging it?",
      text: "Crewmark wakes Codex on a heartbeat during the hours you set and hands it the next issue from a board.",
      button: "Get started",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "Can Codex run 24/7 on a Mac mini?",
          a: "Yes, as long as the Mac mini stays awake, online and signed in with the ChatGPT desktop app open. Turn on Prevent automatic sleeping when the display is off in System Settings > Energy and Prevent sleep while running in the app's Settings > General, then set up remote control so you can reach it from your phone. After each task Codex waits for your next prompt unless something else starts the work.",
        },
        {
          q: "How do I install Codex on a Mac mini?",
          a: "Install the ChatGPT desktop app for macOS and select Codex in it. For the terminal, install the Codex CLI with `curl -fsSL https://chatgpt.com/codex/install.sh | sh` or `brew install --cask codex`, then run `codex` and choose Sign in with ChatGPT. `codex app` opens the desktop app and installs it if it's missing.",
        },
        {
          q: "How do I use Codex on my Mac mini from my iPhone?",
          a: "In the desktop app on the Mac mini, open Settings > Connections > Control this Mac or PC, select Set up or Add, and scan the QR code with your iPhone. The Mac mini then shows up under Codex in the ChatGPT app, where you can start chats, approve commands and review diffs. The ChatGPT app on Android works too.",
        },
        {
          q: "What are the minimum requirements for Codex on a Mac?",
          a: "For the Codex CLI, OpenAI's install guide on GitHub lists macOS 12 or later, with 4 GB of RAM as the minimum and 8 GB recommended. The OpenAI docs we checked don't give separate requirements for the ChatGPT desktop app. For remote control you also need Codex access on your account and the latest ChatGPT app on your phone.",
        },
        {
          q: "Do I need Tailscale for Codex remote control?",
          a: "No. Remote control goes through OpenAI's secure relay, so the Mac mini isn't exposed to the public internet. Tailscale is for reaching the Mac mini itself, such as its desktop through Screen Sharing or SSH from a laptop away from home; OpenAI's docs recommend a VPN or mesh network for reaching machines outside your network.",
        },
        {
          q: "Mac mini or Linux VPS for Codex?",
          a: "A Linux server is enough when Codex only needs a terminal: the CLI runs on Linux, and the desktop app can open projects on it over SSH. But your phone still connects to a Mac or Windows PC running the desktop app, so you need that computer on anyway. Pick a Mac mini for Computer Use, browser tasks through the Chrome extension, iOS development or keeping files at home. See [Codex on a VPS](/blog/codex-vps).",
        },
      ],
    },
    cta: {
      title: "Give your Mac mini a job.",
      text: "Crewmark turns Codex and Claude Code sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked:
      "Checked against OpenAI's docs (remote connections, Computer Use, Codex CLI, settings, plans), Apple Support and Tailscale's docs on November 14, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by OpenAI, Apple or Tailscale. Codex and ChatGPT are trademarks of OpenAI; Mac, Mac mini and Xcode are trademarks of Apple.",
  },
};
