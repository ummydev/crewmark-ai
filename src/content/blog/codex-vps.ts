import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/codex-vps, Alex's request (2026-11-14): Codex on a rented Linux server, reached from your phone. Companion to
// /blog/codex-mac-mini (an always-on Mac as the desktop app host); /blog/claude-code-vps is the Claude Code version.
// Keywords from Google autocomplete (2026-11-14): "codex vps", "codex vps login", "vps codex cli", "codex remote vps",
// "codex install vps", "codex app vps", "codex connect to vps". Facts come only from docs/seo/codex-remote-facts.md
// (OpenAI's docs at learn.chatgpt.com: remote connections and SSH hosts, CLI install and auth, sandboxing, the Linux
// app, Codex cloud, plans; the CLI's GitHub install guide for Ubuntu/Debian and RAM), docs/seo/remote-24-7-facts.md
// (Tailscale) and docs/compare/facts/crewmark.md (the crewmark CLI runs on Linux). The architecture is exact: the phone
// controls a Mac or Windows PC running the desktop app, which runs chats on the server over SSH, so that PC stays on.
// Left out as unverified: pairing a phone with a CLI-only server via `codex remote-control pair`, a Linux remote-control
// host, the desktop app on a server with no desktop environment, VPS providers, prices and RAM for the desktop app.
// tmux is generic Linux advice, not from OpenAI's docs.

const docs = "https://learn.chatgpt.com/docs/remote-connections";

const install = `# On the server: install the Codex CLI (run it again to update)
curl -fsSL https://chatgpt.com/codex/install.sh | sh
# or: npm install -g @openai/codex

# Codex's sandbox on Linux uses bubblewrap
sudo apt install bubblewrap   # Fedora: sudo dnf install bubblewrap`;

const login = `# Headless sign-in (beta; turn on device code login in ChatGPT first)
codex login --device-auth

# Or forward the browser callback from your computer, then run codex login
ssh -L 1455:localhost:1455 you@devbox.example.com

# Exits 0 once you're signed in
codex login status`;

const ssh = `# ~/.ssh/config on the Mac or PC running the ChatGPT desktop app
Host devbox
  HostName devbox.example.com
  User you
  IdentityFile ~/.ssh/id_ed25519

# Check it works before adding it in the app
ssh devbox`;

const tmux = `# On the server: run Codex inside tmux so it outlives your SSH connection
tmux new -s codex
cd ~/my-project
codex

# Detach with Ctrl+B, then D. Reattach later with:
tmux attach -t codex`;

export const codexVps: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Codex VPS Setup: Install, Log In and Connect Over SSH",
      description:
        "Install the Codex CLI on a Linux VPS, log in with device auth, add the server as an SSH host in the ChatGPT desktop app and reach it from your phone.",
    },
    breadcrumb: "Codex on a VPS",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-14" },
    hero: {
      kicker: "Blog · Codex",
      title: "Codex on a VPS: install it on a Linux server and connect over SSH",
      lead: "A rented Linux server, a VPS, never sleeps, and the Codex CLI runs on Linux. The part to get right is how you reach it from your phone: the ChatGPT app doesn't connect to the server itself. It connects to the ChatGPT desktop app on a Mac or Windows PC, and that app runs chats on the server over SSH. This guide covers installing and signing in to Codex on the server, adding it as an SSH host, controlling it from your phone, a terminal-only setup with tmux, keeping the server safe, and Codex cloud if you'd rather not run a server at all.",
      cta: "Get started",
      secondary: "See the steps",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "text",
        id: "how-it-works",
        title: "How Codex on a VPS fits together",
        text: ["Three machines are involved, and each has one job:"],
        points: [
          "The Linux server runs Codex. Chats in its projects run commands, read files and write changes there, with the server's dependencies, security policies and compute. The desktop app starts Codex on it over SSH, in the remote user's login shell.",
          "A Mac or Windows PC runs the ChatGPT desktop app, which holds the SSH connection. It's the host your phone talks to, so it has to stay awake and online too.",
          "Your phone runs the ChatGPT app and controls that host through remote control. It sends prompts and approvals and shows you diffs, terminal output and notifications.",
          "OpenAI documents only macOS and Windows as remote-control hosts, so pairing a phone straight with a Linux server isn't documented. Pair your phone with the Mac or PC instead, ideally [an always-on Mac mini](/blog/codex-mac-mini).",
        ],
      },
      {
        kind: "text",
        id: "what-you-need",
        title: "What you need",
        points: [
          "A Linux server you can reach with SSH. The Codex CLI's install guide on GitHub lists Ubuntu 20.04+ or Debian 10+, with 4 GB of RAM as the minimum and 8 GB recommended; release builds exist for x86_64 and ARM64.",
          "A Mac or Windows PC with the ChatGPT desktop app, to add the server as an SSH host. If you want to reach the server from your phone, this computer has to stay on.",
          "A ChatGPT account for Codex. OpenAI's plan table lists SSH remote connections on Plus, Pro, Business and Enterprise and with an API key, and mobile remote control on Plus, Pro, Business and Enterprise but not with an API key.",
          "The ChatGPT app on your phone, iOS or Android.",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to set up Codex on a Linux VPS",
        steps: [
          {
            title: "Rent a server and check SSH",
            text: "Create a Linux server and make sure you can log in with SSH from the Mac or PC that will run the desktop app. Use key-based login and an account with only the rights Codex needs, not root.",
          },
          {
            title: "Install the Codex CLI on the server",
            text: "Run OpenAI's install script on the server; the same command updates it later, and npm works too. Install bubblewrap for Codex's sandbox: without `bwrap` on the PATH, Codex falls back to a bundled helper that needs unprivileged user namespaces, and warns when it starts. Ubuntu 24.04 may keep warning until you load the `bwrap-userns-restrict` AppArmor profile.",
            code: install,
          },
          {
            title: "Log in on a headless server",
            text: "The server has no browser, so use device code login: run `codex login --device-auth`, or choose Sign in with Device Code, and follow the prompt. It's in beta, and device code login has to be turned on first in your ChatGPT security settings or by your workspace admin. If you can't use it, forward the login callback with `ssh -L 1455:localhost:1455` and run `codex login` on the server, or copy `~/.codex/auth.json` from a computer where you're signed in and treat that file like a password.",
            code: login,
          },
          {
            title: "Add the server to your SSH config",
            text: "On the Mac or PC, add a Host entry to `~/.ssh/config` and check that `ssh devbox` works. Codex reads concrete host aliases from that file and ignores pattern-only entries. The desktop app starts Codex in the remote user's login shell, so `codex` has to be on the PATH there.",
            code: ssh,
          },
          {
            title: "Add it as an SSH host in the desktop app",
            text: "In the ChatGPT desktop app, open Settings > Connections, add or enable the SSH host, then choose a project folder on the server. Chats in that project run commands, read files and write changes on the server.",
          },
          {
            title: "Control it from your phone",
            text: "On the same Mac or PC, open Settings > Connections > Control this Mac or PC, select Set up or Add, and scan the QR code with the ChatGPT app. Open Codex on your phone, pick that computer and the server's project, and start a chat. The chat runs on the server through the Mac or PC, so keep that computer awake and online; [a Mac mini at home](/blog/codex-mac-mini) can do that job. Setup details and fixes are in [Codex remote control](/blog/codex-remote-control).",
          },
        ],
        source: { label: "Source: OpenAI's docs on remote connections and SSH hosts", href: docs },
      },
      {
        kind: "steps",
        id: "terminal-only",
        title: "Terminal only: the Codex CLI over SSH in tmux",
        text: [
          "If a terminal is all you need, you can skip the desktop app. SSH into the server, run the Codex CLI inside tmux, and detach: Codex keeps running after you disconnect, and you reattach from any computer that can SSH in.",
        ],
        steps: [
          {
            title: "Start Codex inside tmux",
            text: "Install tmux from your distribution's packages if it isn't there, start a session, and run `codex` in your project folder.",
            code: tmux,
          },
          {
            title: "Know what it doesn't do",
            text: "This setup isn't connected to your phone. OpenAI says mobile setup starts from the desktop app and can't be set up from the CLI. The CLI has an experimental `codex remote-control` command, which the docs tie to managed remote-control clients and SSH workflows, but they don't describe pairing a phone with a server that only runs the CLI.",
          },
        ],
      },
      {
        kind: "text",
        id: "security",
        title: "Keep the server safe",
        points: [
          "Treat it like any SSH server: trusted keys, a least-privilege account, and no unauthenticated services listening on the public internet.",
          "Don't expose Codex's app server. `codex app-server --listen` and `codex --remote` are mainly for development and debugging, and OpenAI warns against opening app-server transports on a shared or public network.",
          "To reach the server from outside its network, use a VPN or a mesh network such as Tailscale, which connects only your own devices over encrypted WireGuard links.",
          "Keep `~/.codex/auth.json` private; OpenAI says to treat it like a password.",
          "Sandbox settings, security controls and approvals apply to chats on the server as they do locally, and the sandbox on Linux needs bubblewrap.",
        ],
      },
      {
        kind: "text",
        id: "handoff",
        title: "Move a chat between your computer and the server",
        text: [
          "The desktop app can hand a chat off, with its Git state, between your computer and a connected SSH host. Both need a saved project for the same Git repository. In the chat footer, pick where it runs now, choose the destination host (This computer brings it back), review and select Hand off. Codex creates or reuses a worktree there. A response that's still running is interrupted, and a chat can't be handed off to Codex cloud.",
        ],
      },
      {
        kind: "text",
        id: "codex-cloud",
        title: "No server at all: Codex cloud",
        points: [
          "Codex cloud runs coding tasks on OpenAI's cloud. Each task gets its own workspace and keeps working while your computer is asleep.",
          "Start from the web, from the desktop app (Work in > Cloud) or from the ChatGPT app on your phone (open Codex, choose Cloud and an environment). With the default environment you can start without picking a repository, and Codex can check out repositories from your connected GitHub or GitLab account.",
          "A cloud task only sees its cloud environment: your local files, running processes, browser sign-ins and VPN access aren't carried over. Reusable setups live under Work in > Cloud > Select environment > Create environment.",
          "It needs a ChatGPT sign-in, not an API key. From a terminal, `codex cloud` opens a picker of your cloud chats and `codex cloud exec` submits a task.",
        ],
      },
      {
        kind: "table",
        id: "compare",
        title: "Mac mini host vs Linux SSH host vs Codex cloud",
        headers: ["", "Mac mini host", "Linux SSH host", "Codex cloud"],
        rows: [
          ["Where Codex runs", "On the Mac mini, in the ChatGPT desktop app", "On the server; the desktop app on a Mac or PC starts it over SSH", "On OpenAI's cloud, in a workspace per task"],
          ["What your phone connects to", "The Mac mini", "The Mac or Windows PC running the desktop app", "OpenAI's cloud: open Codex and choose Cloud"],
          ["What has to stay on", "The Mac mini", "The server and the Mac or PC", "Nothing of yours"],
          ["Files, sign-ins and VPN", "Everything on the Mac mini", "What's on the server", "Only the cloud environment; local files, browser sign-ins and VPN access aren't carried over"],
          ["Suits", "Computer Use and browser tasks through the Chrome extension, iOS development, files kept at home", "Terminal work on a server, with its compute and dependencies", "Coding tasks that only need a repository"],
          ["Plans (OpenAI's table)", "Mobile remote control: Plus, Pro, Business, Enterprise", "SSH connections: those plans and an API key; phone control of the host still needs one of those plans", "Plus, Pro, Business, Enterprise; not with an API key"],
          ["Setup", "Desktop app, keep-awake settings, remote control", "CLI on the server, SSH config, SSH host in the desktop app", "Pick or create a cloud environment"],
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Give the server a standing job",
        text: [
          "A server that never sleeps still waits for your next prompt. Crewmark turns a Codex chat on it into an AI employee with a role, a goal in numbers, working hours and a heartbeat: during working hours the `crewmark` CLI, which runs on Linux as well as macOS and Windows, wakes the employee to work through its issues on a shared board. The computer it runs on has to stay on, and a VPS does.",
        ],
        steps: [
          {
            title: "Hire an employee",
            text: "Pick a role from the [AI employee roles](/ai-employees), such as software engineer or SEO specialist, and write its goals and KPIs.",
          },
          {
            title: "Connect Codex on the server",
            text: "Paste the setup link into a Codex chat on the server. It installs the `crewmark` CLI and links that chat to the employee. Claude Code works too; see [Claude Code on a VPS](/blog/claude-code-vps).",
          },
          {
            title: "Set working hours and a heartbeat",
            text: "Weekdays only or every day, hours that can run past midnight, and a wake-up every 15, 30, 60, 120 or 240 minutes. Each wake-up goes into the same Codex chat, so it carries on where it left off. Codex's own scheduling options are compared in [proactive Codex](/proactive-codex).",
          },
          {
            title: "Assign issues and talk to it from your phone",
            text: "Open crewmark.ai in your phone's browser to create and assign issues, or write to the employee in its Work log; the message reaches the Codex chat on the server, and it answers there. Assigning an issue wakes it right away, and when it needs a review or a decision it sets the issue to Needs action and asks you there. Jobs to give it are in [Codex use cases](/use-cases/codex).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Set up Codex on a Linux VPS as an SSH host" },
    mid: {
      title: "Want the server to keep working when you're not prompting it?",
      text: "Crewmark wakes Codex on a heartbeat during the hours you set and hands it the next issue from a board.",
      button: "Get started",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "Can I run Codex on a VPS?",
          a: "Yes. The Codex CLI runs on Linux: install it with `curl -fsSL https://chatgpt.com/codex/install.sh | sh`, sign in with `codex login --device-auth`, then either use it over SSH in tmux or add the server as an SSH host in the ChatGPT desktop app on a Mac or Windows PC, which you can control from your phone.",
        },
        {
          q: "How do I log in to Codex on a VPS without a browser?",
          a: "Run `codex login --device-auth`, or choose Sign in with Device Code, and follow the prompt. It's in beta and has to be turned on in your ChatGPT security settings or by a workspace admin. Otherwise, forward the callback with `ssh -L 1455:localhost:1455 user@server` and run `codex login` there, or copy `~/.codex/auth.json` from a computer where you're signed in.",
        },
        {
          q: "How do I connect Codex to a VPS?",
          a: "Add the server to `~/.ssh/config` on the Mac or PC running the ChatGPT desktop app and check that `ssh <alias>` works. Make sure `codex` is installed, signed in and on the PATH of the remote user's login shell, then add the host in Settings > Connections and choose a remote project folder.",
        },
        {
          q: "Can I control Codex on a VPS from my phone?",
          a: "Yes, through a Mac or Windows PC. Your phone controls the ChatGPT desktop app on that computer, and the app runs the chat on the server over SSH, so the computer has to stay awake and online. OpenAI doesn't document pairing a phone directly with a Linux server or with the CLI alone.",
        },
        {
          q: "Does the ChatGPT desktop app run on a Linux server?",
          a: "There is a ChatGPT desktop app for Linux, in preview, for desktop versions of Ubuntu, Debian, Fedora and Arch Linux, without Computer Use yet. OpenAI's docs don't cover a server with no desktop environment, and Linux isn't listed as a remote-control host. On a VPS, use the Codex CLI.",
        },
        {
          q: "Is it safe to run Codex on a VPS?",
          a: "Treat it like any SSH server: key-based login, a least-privilege account and no unauthenticated public listeners. Don't expose Codex's app server on a public network, use a VPN or mesh network to reach the server from outside, keep `~/.codex/auth.json` private, and install bubblewrap so the sandbox works.",
        },
      ],
    },
    cta: {
      title: "Put your server to work.",
      text: "Crewmark turns Codex and Claude Code sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked:
      "Checked against OpenAI's docs (remote connections, Codex CLI, authentication, sandboxing, the Linux app, Codex cloud, plans), the Codex README and install guide on GitHub, and Tailscale's docs on November 14, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by OpenAI or any company named on this page. Codex and ChatGPT are trademarks of OpenAI.",
  },
};
