import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/claude-code-vps, Alex's request (2026-11-14): two ways to keep Claude Code running 24/7 so you can drive it
// from your phone anytime, anywhere. This is the second, a rented Linux server; /blog/claude-code-mac-mini (her own
// setup) is the first. Keywords from Google autocomplete (2026-11-14): "claude code vps" (setup, install, hosting,
// server, ssh, reddit, requirements, telegram), "claude code on a server" / "on a linux server" / "on ubuntu server" /
// "on headless server", "install claude code linux server", "claude code remote control linux", "claude code remote
// server". Facts come only from docs/seo/remote-24-7-facts.md (Remote Control, Claude Desktop on Linux, computer use,
// Chrome integration, Tailscale) and docs/compare/facts/crewmark.md: no prices, RAM figures or install commands, which
// that file doesn't verify, and no claim either way on Claude Desktop without a desktop environment. Hostinger shows up
// in autocomplete but isn't named. Telegram links to /blog/claude-code-channels instead of repeating its setup.

const docs = "https://code.claude.com/docs/en/remote-control";

const server = `# Start a tmux session, so the server keeps running after you close SSH
tmux new -s claude

# Inside tmux, from your project folder: run the Remote Control server and
# restart it whenever it exits (it gives up after ~10 minutes offline)
cd ~/my-project
while true; do claude remote-control; sleep 10; done

# Detach with Ctrl+B, then D. Reattach later with:
tmux attach -t claude`;

export const claudeCodeVps: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Claude Code VPS Setup: Run It 24/7 on a Linux Server",
      description:
        "Install Claude Code on a Linux VPS or Ubuntu server, run Remote Control in server mode, keep it going in tmux and drive it from your phone. Plus its limits.",
    },
    breadcrumb: "Claude Code on a VPS",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-14" },
    hero: {
      kicker: "Blog · Claude Code",
      title: "Claude Code on a VPS: run it on a Linux server and drive it from your phone",
      lead: "Remote Control lets you drive Claude Code from the Claude app on your phone, but only while the computer running it is on. A rented Linux server, a VPS, doesn't switch off. Install Claude Code on it, run Remote Control in server mode, and you can open its sessions from your phone wherever you are. This guide covers the setup on Ubuntu, Debian or any other distribution, how to keep it running, how to add a desktop for signing in to websites, and what a Linux server can't do compared with [a Mac mini at home](/blog/claude-code-mac-mini).",
      cta: "Get started",
      secondary: "See the steps",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "text",
        id: "what-you-need",
        title: "What you need",
        points: [
          "A Linux server you can SSH into, from a provider such as DigitalOcean or OVHcloud. Any distribution works for the Claude Code CLI; Claude Desktop needs Ubuntu 22.04 or later, or Debian 12 or later.",
          "A Claude Pro, Max, Ultra, Team or Enterprise plan. Remote Control doesn't work with API keys, and on Team or Enterprise an Owner turns it on first.",
          "The Claude app on your phone (iOS or Android), or claude.ai/code in a browser.",
          "Optionally, a desktop environment and a remote desktop on the server, for the times Claude needs a website you have to sign in to.",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to set up Claude Code on a Linux VPS",
        steps: [
          {
            title: "Rent a server and connect to it",
            text: "Create a Linux server with a provider such as DigitalOcean or OVHcloud and connect to it with SSH. Choosing Ubuntu 22.04+ or Debian 12+ keeps Claude Desktop as an option; on any other distribution you use the CLI.",
          },
          {
            title: "Install Claude Code and sign in",
            text: "Install the Claude Code CLI with Anthropic's install script. It runs in a terminal (Anthropic lists Ubuntu 20.04+ and Debian 10+ among the supported systems), so it suits a headless server you only reach over SSH. On Ubuntu 22.04+ or Debian 12+ you can install Claude Desktop instead, with apt; it's in beta on Linux (see [Claude Desktop on Linux](https://code.claude.com/docs/en/desktop-linux)). Then run `claude` and sign in with your Claude account, not an API key.",
            code: "curl -fsSL https://claude.ai/install.sh | bash",
          },
          {
            title: "Start Remote Control in server mode",
            text: "From your project folder, run `claude remote-control`. It starts a server that can host several Claude Code sessions at once, and you can open each of them from your phone. Add `--chrome` to turn on Chrome integration in those sessions. To have every interactive session connect instead, set `remoteControlAtStartup` to true in `~/.claude/settings.json`.",
            code: server,
          },
          {
            title: "Keep it running after you log out",
            text: "Remote Control only works while the claude process runs: close the terminal and its sessions go offline. Run it inside tmux or screen so it survives the SSH connection closing, or as a service. Server mode also exits after about 10 minutes without a network, so restart it automatically, as the loop above does. For permission modes and usage limits on long runs, see [how to run Claude Code 24/7](/blog/run-claude-code-24-7).",
          },
          {
            title: "Open it from your phone",
            text: "Open the Claude app on iOS or Android, or claude.ai/code, and pick a session. Claude runs on the server; the phone shows the conversation and sends your messages. Setup details and fixes are in [the Remote Control guide](/remote-claude-code). To message Claude Code from Telegram instead, see [Claude Code channels](/blog/claude-code-channels).",
          },
        ],
        source: { label: "Source: Anthropic's Remote Control documentation", href: docs },
      },
      {
        kind: "text",
        id: "desktop",
        title: "Add a desktop for signing in to websites",
        text: [
          "A server you reach over SSH has no screen, which is fine until Claude needs a site you have to sign in to. Add a remote desktop and you can do that sign-in yourself, then let Claude use the browser.",
        ],
        points: [
          "Install a desktop environment and a remote desktop server on the VPS, and connect from your laptop when you need to sign in somewhere.",
          "Install Google Chrome or Microsoft Edge with the Claude in Chrome extension, and sign in to the sites Claude should use. Claude in Chrome works on Linux; it isn't supported in WSL.",
          "Start the server with `claude remote-control --chrome` so its sessions can use that browser.",
          "Reach the remote desktop over Tailscale, which puts your devices on a private network, a tailnet, where only they can reach each other. See [what Tailscale is](https://tailscale.com/kb/1151/what-is-tailscale).",
          "With a desktop on Ubuntu or Debian, Claude Desktop is an option as well as the CLI.",
        ],
      },
      {
        kind: "text",
        id: "limits",
        title: "What a Linux server can't do",
        text: [
          "If any of these matter, use [a Mac mini at home](/blog/claude-code-mac-mini) instead, the setup our founder uses.",
        ],
        points: [
          "No computer use. Claude can't operate apps and the screen on Linux: in the CLI computer use is macOS only, and in Claude Desktop it's a research preview on macOS and Windows.",
          "No iOS development. Xcode and the iOS Simulator run only on macOS, so a Linux server can't build or run an iPhone app.",
          "A smaller desktop app. Claude Desktop on Linux is a beta for Ubuntu and Debian, without computer use, Cowork or dictation.",
          "A process that has to stay up. As with any Remote Control setup, the sessions are reachable only while claude runs on the server.",
        ],
      },
      {
        kind: "table",
        id: "mac-mini-vs-vps",
        title: "Mac mini vs Linux VPS for Claude Code",
        headers: ["", "Mac mini at home", "Linux VPS"],
        rows: [
          ["Where it runs", "A Mac you own, at home; files stay on it", "A rented server at a provider such as DigitalOcean or OVHcloud"],
          ["Remote Control from your phone", "Yes: Claude Desktop or the CLI", "Yes: the CLI on any distribution, or Claude Desktop (beta) on Ubuntu 22.04+ and Debian 12+"],
          ["Computer use", "Yes: CLI on macOS; Desktop as a research preview on Pro, Max or Ultra", "No"],
          ["iOS development (Xcode, iOS Simulator)", "Yes", "No: needs a Mac"],
          ["Claude in Chrome", "Yes", "Yes, with Chrome or Edge"],
          ["Remote desktop", "Screen Sharing, reached over Tailscale", "A desktop environment and remote desktop you add"],
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Give the server a standing job",
        text: [
          "A server that never sleeps answers whenever you message it, and waits when you don't. Crewmark turns a Claude Code conversation on it into an AI employee with a role, goals, working hours and a heartbeat: during working hours the `crewmark` CLI, which runs on Linux as well as macOS and Windows, wakes the employee to work through its issues on a shared board. The computer it runs on has to stay on, and a VPS does.",
        ],
        steps: [
          {
            title: "Hire an employee",
            text: "Pick a role from the [AI employee roles](/ai-employees), such as software engineer or SEO specialist, and write its goals and KPIs.",
          },
          {
            title: "Connect Claude Code on the server",
            text: "Paste the setup link into a Claude Code conversation on the VPS. It installs the `crewmark` CLI and links that conversation to the employee. Codex works too.",
          },
          {
            title: "Set working hours and a heartbeat",
            text: "Weekdays only or every day, hours that can run past midnight, and a wake-up every 15, 30, 60, 120 or 240 minutes.",
          },
          {
            title: "Assign issues from your phone",
            text: "Create and assign issues on the board at crewmark.ai from any browser; assigning one wakes the employee right away. When it needs a review or a decision it sets the issue to Needs action and asks you there. Jobs to give it are in [Claude Code use cases](/use-cases/claude-code).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Set up Claude Code on a Linux VPS with Remote Control" },
    mid: {
      title: "Want the server to keep working when you're not messaging it?",
      text: "Crewmark wakes Claude Code on a heartbeat during the hours you set and hands it the next issue from a board.",
      button: "Get started",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "Can I run Claude Code on a VPS?",
          a: "Yes. Install the Claude Code CLI on a Linux server, sign in with a Pro, Max, Ultra, Team or Enterprise plan, and run `claude remote-control` inside tmux so it keeps running after you log out. Then open its sessions from the Claude app on your phone or at claude.ai/code.",
        },
        {
          q: "How do I install Claude Code on a Linux server?",
          a: "Install the Claude Code CLI, which works on any distribution, including a headless server you reach over SSH, and sign in with your Claude account. On Ubuntu 22.04+ or Debian 12+ you can also install Claude Desktop with apt; it's in beta on Linux and doesn't include computer use, Cowork or dictation.",
        },
        {
          q: "Does Claude Code Remote Control work on Linux?",
          a: "Yes. Run `claude remote-control` for a server that hosts several sessions, or turn on Remote Control for one session with `/remote-control`. It needs a claude.ai sign-in on a Pro, Max, Ultra, Team or Enterprise plan; API keys aren't supported.",
        },
        {
          q: "How do I keep Claude Code running on a server after I close SSH?",
          a: "Run it inside tmux or screen, or as a service. Closing the terminal stops the claude process and takes its Remote Control sessions offline. Server mode exits after about 10 minutes without a network, so wrap it in a loop or a service that restarts it.",
        },
        {
          q: "Can Claude Code use computer use on a Linux server?",
          a: "No. Computer use isn't available on Linux, in the CLI or in Claude Desktop. Claude in Chrome does work on Linux, so Claude can still use websites in a browser. For computer use or iOS development, use a Mac, such as [a Mac mini at home](/blog/claude-code-mac-mini).",
        },
        {
          q: "What do I need to run Claude Code on a VPS?",
          a: "A Linux server you can SSH into, a Claude plan that includes Remote Control (Pro, Max, Ultra, Team or Enterprise) and the Claude app on your phone. Any distribution works for the CLI; Claude Desktop needs Ubuntu 22.04+ or Debian 12+.",
        },
      ],
    },
    cta: {
      title: "Put your server to work.",
      text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked:
      "Checked against Anthropic's Claude Code docs (Remote Control, Claude Desktop on Linux, computer use, Chrome integration) and Tailscale's docs on November 14, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by Anthropic or any company named on this page. Claude and Claude Code are trademarks of Anthropic.",
  },
};
