import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/codex-linux, Alex's request (2026-11-14): Codex on Linux, the ChatGPT desktop app preview (distros and
// architectures), the Codex CLI with `bubblewrap` for the sandbox, sign-in on a headless machine, no Computer Use on
// Linux yet, no Linux host for phone remote control but a Linux machine as an SSH host for the desktop app on a Mac or
// PC, and Codex cloud. Keywords from Google autocomplete (2026-11-14): "codex linux" (install, desktop, app, computer
// use, download, cli, desktop app, install cli, gui); "codex linux gui" is answered with the desktop app preview. Facts
// come only from docs/seo/codex-remote-facts.md (OpenAI's docs at learn.chatgpt.com, checked 2026-11-14) and
// docs/compare/facts/crewmark.md. Left out on purpose: prices; anything on the Linux app's Settings > Connections or SSH
// hosts, phone control of a Linux host, the Chrome extension on Linux and running the app without a desktop
// environment, all unverified in the facts sheet; and Homebrew, which the docs don't place on Linux.

const linuxAppDocs = "https://learn.chatgpt.com/docs/linux/linux-app";
const cliDocs = "https://learn.chatgpt.com/docs/codex/cli";
const sandboxingDocs = "https://learn.chatgpt.com/docs/sandboxing";
const remoteDocs = "https://learn.chatgpt.com/docs/remote-connections";
const cloudDocs = "https://learn.chatgpt.com/docs/cloud";

const appInstall = `# Ubuntu or Debian (ARM64: chatgpt_arm64.deb)
sudo apt install ./chatgpt_amd64.deb

# Fedora (ARM64: chatgpt.aarch64.rpm)
sudo dnf install ./chatgpt.x86_64.rpm

# Arch Linux: download install-arch.sh from
# https://persistent.oaistatic.com/codex-app-prod/linux/install-arch.sh
# then run it (it does a full system upgrade)
sudo bash install-arch.sh`;

const appUpdate = `# Ubuntu or Debian
sudo apt update
sudo apt install --only-upgrade chatgpt

# Fedora
sudo dnf upgrade --refresh chatgpt

# Arch Linux
sudo pacman -Syu`;

const bubblewrap = `# Ubuntu or Debian
sudo apt install bubblewrap

# Fedora
sudo dnf install bubblewrap

# Ubuntu 24.04, if Codex still warns: copy the bwrap-userns-restrict
# profile to /etc/apparmor.d/, then load it
sudo apt install apparmor-profiles apparmor-utils
sudo apparmor_parser -r /etc/apparmor.d/bwrap-userns-restrict`;

const headless = `# On the server, with device code login turned on in ChatGPT
codex login --device-auth

# Or forward the sign-in callback from your own computer, then sign in on the server
ssh -L 1455:localhost:1455 user@remote
codex login`;

const sshConfig = `# ~/.ssh/config on the Mac or PC running the ChatGPT desktop app
Host devbox
  HostName devbox.example.com
  User you
  IdentityFile ~/.ssh/id_ed25519`;

export const codexLinux: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Codex on Linux: Desktop App, CLI Install and Sandbox",
      description:
        "Install Codex on Linux: the ChatGPT desktop app preview for Ubuntu, Debian, Fedora and Arch, or the CLI with bubblewrap. Plus headless sign-in and SSH hosts.",
    },
    breadcrumb: "Codex on Linux",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-14" },
    hero: {
      kicker: "Blog · Codex",
      title: "Codex on Linux: the desktop app preview, the CLI, and what Linux can't do yet",
      lead: "There are two ways to run Codex on a Linux machine. The ChatGPT desktop app, which includes Codex, has been in preview on Linux since August 2026, for Ubuntu, Debian, Fedora and Arch on x64 and ARM64. The Codex CLI installs with one command and uses `bubblewrap` for its sandbox. This guide covers both installs, signing in on a headless server, what Linux doesn't have yet (Computer Use, and phone control of a Linux host), how a Linux machine still works as an SSH host for the desktop app on a Mac or PC, and Codex cloud.",
      cta: "Get started",
      secondary: "See the steps",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "text",
        id: "options",
        title: "Which Codex to use on Linux",
        points: [
          "The ChatGPT desktop app, in preview: a window with Codex next to Chat and Work. This is the Codex GUI on Linux. OpenAI's guide covers desktop Linux; on a server without a desktop, use the CLI.",
          "The Codex CLI: runs in a terminal, on a desktop or on a headless server you reach over SSH.",
          "The IDE extension, for VS Code, Cursor or Windsurf, if you'd rather stay in your editor.",
          "Codex cloud: tasks run on OpenAI's servers, so nothing of yours has to stay on. See [Codex cloud](#cloud) below.",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to install the Codex desktop app on Linux",
        steps: [
          {
            title: "Check your distribution and architecture",
            text: "The preview supports Ubuntu 24.04 LTS and 26.04 LTS, Debian 13, Fedora 43 and 44, and current, fully updated Arch Linux. Other distributions may work but aren't formally supported. Packages come for x64 and ARM64: run `uname -m`; `x86_64` means x64, and `aarch64` or `arm64` means ARM64.",
            code: "uname -m",
          },
          {
            title: "Download and install the package",
            text: `Get the package for your distribution and architecture (see [OpenAI's Linux app guide](${linuxAppDocs})) and install it from the folder you saved it in. On Arch, OpenAI's install script also runs a full system upgrade.`,
            code: appInstall,
          },
          {
            title: "Open it and select Codex",
            text: "Open ChatGPT from your applications menu, or run `chatgpt` in a terminal, sign in and select Codex. On Wayland the app uses XWayland when it's available; native Wayland is experimental, and you can force it with `chatgpt --ozone-platform=wayland`.",
          },
          {
            title: "Keep it updated",
            text: "Updates come through your package manager.",
            code: appUpdate,
          },
          {
            title: "Keep long chats running",
            text: "Turn on Settings > General > Prevent sleep while running, which exists on macOS and Linux, so local chats keep going while you're away from the computer.",
          },
        ],
        source: { label: "Source: OpenAI's Codex docs, ChatGPT app for Linux", href: linuxAppDocs },
      },
      {
        kind: "steps",
        id: "cli",
        title: "How to install the Codex CLI on Linux",
        steps: [
          {
            title: "Run the install script",
            text: "The same command installs and updates Codex; `codex update` also applies an update when the installed release supports it. With Node.js installed, `npm install -g @openai/codex` works too. OpenAI publishes Linux builds for x86_64 and aarch64.",
            code: "curl -fsSL https://chatgpt.com/codex/install.sh | sh",
          },
          {
            title: "Install bubblewrap for the sandbox",
            text: `Codex's Linux sandbox needs \`bubblewrap\`. Without a \`bwrap\` on the PATH, Codex falls back to a bundled helper that needs unprivileged user namespaces, and warns when it starts. On Ubuntu 25.04 the packaged bubblewrap works as is; on Ubuntu 24.04 it may still warn until you load the \`bwrap-userns-restrict\` AppArmor profile (see [OpenAI's sandboxing docs](${sandboxingDocs})).`,
            code: bubblewrap,
          },
          {
            title: "Sign in",
            text: "Run `codex` and choose Sign in with ChatGPT to use your plan, or sign in with an API key, which is billed at standard API rates. Codex cloud needs the ChatGPT sign-in. `codex login status` exits with 0 once you're signed in.",
          },
          {
            title: "On a headless server, sign in with a device code",
            text: "With no browser on the machine, choose Sign in with Device Code or run `codex login --device-auth`, which is in beta. Device code login has to be turned on first, in your ChatGPT security settings or by a workspace admin. Two other ways: copy `~/.codex/auth.json` from a computer where browser sign-in worked, and treat that file like a password; or forward the sign-in callback over SSH and run `codex login` on the server.",
            code: headless,
          },
        ],
        source: { label: "Source: OpenAI's Codex docs, Codex CLI", href: cliDocs },
      },
      {
        kind: "text",
        id: "computer-use",
        title: "No Computer Use on Linux yet",
        text: [
          "Computer Use lets Codex operate desktop apps by moving the pointer and typing. It isn't in the Linux preview of the desktop app; OpenAI's Linux guide says a future release will add it. For now it runs in the desktop app on macOS and Windows.",
        ],
        points: [
          "Work that happens in a terminal still runs on Linux: Codex runs commands and edits files there, inside its `bubblewrap` sandbox.",
          "For tasks that need desktop apps, use a Mac or a Windows PC. On Windows, Computer Use takes over the screen while it works: see [Codex on Windows](/blog/codex-windows). For an always-on Mac, see [Codex on a Mac mini](/blog/codex-mac-mini).",
        ],
      },
      {
        kind: "steps",
        id: "ssh",
        title: "Use a Linux machine from the desktop app on a Mac or PC",
        text: [
          "OpenAI's remote connections docs list only Mac and Windows computers as hosts the ChatGPT phone app can control, so phone control of the Linux desktop app isn't documented. A Linux machine can still be an SSH host: the desktop app on a Mac or Windows PC opens projects on it, and Codex runs commands, reads files and writes changes there. You then drive it from your phone through that Mac or PC.",
        ],
        steps: [
          {
            title: "Add the Linux machine to your SSH config",
            text: "On the Mac or PC that runs the desktop app, add a host to `~/.ssh/config`. Codex reads concrete host aliases from that file and ignores entries that are only patterns. Check that `ssh devbox` works from that computer. Treat it like any SSH access: trusted keys, a least-privilege account and nothing unauthenticated listening on a public network; to reach a machine outside your network, use a VPN or a mesh networking tool.",
            code: sshConfig,
          },
          {
            title: "Install and sign in to Codex on the Linux machine",
            text: "The app starts Codex on the remote machine over SSH, in the remote user's login shell, so `codex` has to be on the PATH there. Install it with the script above and sign in, with `codex login --device-auth` on a headless server.",
          },
          {
            title: "Add the host in the desktop app",
            text: "Go to Settings > Connections, add or enable the SSH host, and choose a project folder on it. When the same Git repository is saved as a project on both sides, you can hand a chat off between your computer and the Linux host from the chat footer.",
          },
          {
            title: "Control it from your phone",
            text: "Pair your phone with the Mac or PC as described in [Codex remote control](/blog/codex-remote-control). The phone talks to that computer, which has to stay on, and Codex does the work on the Linux machine. For a rented server, see [Codex on a VPS](/blog/codex-vps).",
          },
        ],
        source: { label: "Source: OpenAI's Codex docs, remote connections", href: remoteDocs },
      },
      {
        kind: "text",
        id: "cloud",
        title: "Or let Codex cloud run the task",
        text: [
          `If you don't want to keep a machine on at all, [Codex cloud](${cloudDocs}) runs tasks on OpenAI's servers. Each task gets its own workspace and keeps going while your computer sleeps.`,
        ],
        points: [
          "Start a task from the web or the desktop app with Work in > Cloud, or from Codex in the ChatGPT mobile app. From a Linux terminal, `codex cloud` opens a picker of cloud chats, `codex cloud exec` submits a task and `codex cloud list` lists recent ones.",
          "It needs a ChatGPT sign-in and isn't available with an API key. OpenAI's plan table lists it for Plus, Pro, Business and Enterprise.",
          "A cloud task sees only its cloud environment. Your machine's local files, running processes, browser sign-ins and VPN access don't carry over, and a chat can't be handed off from your computer to it.",
          "For a reusable setup, create an environment under Work in > Cloud > Select environment > Create environment, with full public internet access or an allow list.",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Give Codex on your Linux machine a standing job",
        text: [
          "The desktop app, the CLI and SSH all wait for you to start the next task. Crewmark turns a Codex chat on your Linux machine into an AI employee with a role, goals, working hours and a heartbeat: during its hours the `crewmark` CLI, which runs on Linux as well as macOS and Windows, wakes it to take the next issue from a shared board. The machine has to stay on, which a Linux server does anyway.",
        ],
        steps: [
          {
            title: "Hire an employee",
            text: "Pick a role from the [AI employee roles](/ai-employees), such as [software engineer](/ai-employees/software-engineer), and write its goals and KPIs.",
          },
          {
            title: "Connect a Codex chat on the machine",
            text: "Link a Codex chat on the Linux desktop or server to the employee through the `crewmark` CLI. That conversation becomes the employee. Claude Code works too.",
          },
          {
            title: "Set working hours and a heartbeat",
            text: "Weekdays only or every day, in your time zone, with hours that can run past midnight. During them the CLI wakes the employee every 15, 30, 60, 120 or 240 minutes. See [how to make Codex proactive](/proactive-codex).",
          },
          {
            title: "Assign issues from any browser",
            text: "Create and assign issues on the board at crewmark.ai; assigning one wakes the employee. When it needs a review or a decision, it sets the issue to Needs action and asks you there. Jobs to give it are in [Codex use cases](/use-cases/codex).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Install the ChatGPT desktop app on Linux and use Codex" },
    mid: {
      title: "Want Codex on Linux to keep working when you're not prompting it?",
      text: "Crewmark wakes your Codex on a heartbeat during the hours you set and hands it the next issue from a board.",
      button: "Get started",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "Is there a Codex GUI for Linux?",
          a: "Yes. The ChatGPT desktop app, which includes Codex, is in preview on Linux for Ubuntu 24.04 and 26.04, Debian 13, Fedora 43 and 44, and Arch Linux, on x64 and ARM64. If you'd rather stay in an editor, the Codex IDE extension works in VS Code, Cursor and Windsurf.",
        },
        {
          q: "How do I download the Codex desktop app for Linux?",
          a: "Download the .deb (Ubuntu, Debian) or .rpm (Fedora) package for your architecture, as OpenAI's Linux app guide describes, and install it with `sudo apt install ./chatgpt_amd64.deb` or `sudo dnf install ./chatgpt.x86_64.rpm`; on Arch, run OpenAI's `install-arch.sh` script. Then open ChatGPT, or run `chatgpt`, and select Codex.",
        },
        {
          q: "How do I install the Codex CLI on Linux?",
          a: "Run `curl -fsSL https://chatgpt.com/codex/install.sh | sh`, or `npm install -g @openai/codex`. Install `bubblewrap` for the sandbox (`sudo apt install bubblewrap` or `sudo dnf install bubblewrap`), then run `codex` and sign in.",
        },
        {
          q: "Does Codex Computer Use work on Linux?",
          a: "Not yet. Computer Use isn't in the Linux preview of the desktop app, and OpenAI says a future release will add it. Today it's available in the desktop app on macOS and Windows.",
        },
        {
          q: "How do I sign in to Codex on a headless Linux server?",
          a: "Turn on device code login in your ChatGPT security settings (or ask your workspace admin to), then run `codex login --device-auth`, which is in beta. You can also copy `~/.codex/auth.json` from a computer where you signed in, or connect with `ssh -L 1455:localhost:1455 user@remote` and run `codex login` on the server.",
        },
        {
          q: "Can I control Codex on Linux from my phone?",
          a: "Not directly: OpenAI's docs list only Mac and Windows computers as remote-control hosts. Add the Linux machine as an SSH host in the ChatGPT desktop app on a Mac or Windows PC, then control that computer from the ChatGPT app on your phone; Codex runs on the Linux machine.",
        },
      ],
    },
    cta: {
      title: "Put Codex on your Linux machine to work.",
      text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked:
      "Checked against OpenAI's Codex docs (ChatGPT app for Linux, CLI, sign-in, sandboxing, Computer Use, remote connections and Codex cloud) on November 14, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by OpenAI or any company named on this page. Codex and ChatGPT are trademarks of OpenAI.",
  },
};
