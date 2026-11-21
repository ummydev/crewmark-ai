import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/claude-code-mac-mini, Alex's request (2026-11-14): two ways to keep Claude Code running 24/7 so you can drive
// it from your phone anytime, anywhere. This is the first, her own setup (a Mac mini at home); /blog/claude-code-vps is
// the second. Keywords from Google autocomplete (2026-11-14): "claude code mac mini" (setup, install, reddit, local,
// remote mac mini), "claude code remote control mac mini", "claude code tailscale" (iphone), "claude code 24/7". Facts
// come only from docs/seo/remote-24-7-facts.md (Remote Control, computer use and Desktop-on-Linux docs, Apple Support,
// Tailscale) and docs/compare/facts/crewmark.md: no prices or RAM figures, which aren't verified. The founder's setup
// says "a remote desktop", so the copy doesn't claim which app she uses; Screen Sharing is the how-to. Permission
// modes, /goal and usage limits belong to /blog/run-claude-code-24-7, which this post links to.

const docs = "https://code.claude.com/docs/en/remote-control";

const remoteControl = `# Claude Code CLI: connect every new interactive session
# (add this to ~/.claude/settings.json)
{ "remoteControlAtStartup": true }

# Or run a Remote Control server that hosts several sessions at once;
# --chrome turns on Chrome integration in its sessions
claude remote-control --chrome`;

export const claudeCodeMacMini: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Claude Code Mac Mini Setup: Run It 24/7 From Your Phone",
      description:
        "Run Claude Code 24/7 on a Mac mini at home: keep it awake, turn on Remote Control, drive it from your phone and reach its desktop over Tailscale.",
    },
    breadcrumb: "Claude Code on a Mac mini",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-14" },
    hero: {
      kicker: "Blog · Claude Code",
      title: "Claude Code on a Mac mini: an always-on server you drive from your phone",
      lead: "Remote Control lets you drive Claude Code from the Claude app on your phone, but only while the computer running it is on. So give it a computer that never turns off. Our founder keeps a Mac mini at home as an always-on server: Claude Code runs on it with Remote Control, the phone drives it, and a MacBook Air reaches its desktop over Tailscale and a remote desktop. All the data stays on the Mac mini. It's the setup our founder finds works best right now, and here is how to build it.",
      cta: "Get started",
      secondary: "See the steps",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "text",
        id: "why-always-on",
        title: "Why Claude Code needs a computer that stays on",
        text: [
          "The quickest start is the computer you already have. The Claude desktop app has Remote Control built in: on the computer you want to control, open Settings, turn on Connect new sessions to Remote Control, and open the session from the Claude app on your phone. Claude keeps running on that computer; the phone is a window into it.",
          "The catch is that it only works while that computer is on. Close the laptop and your phone can't reach Claude Code until it wakes up again. A Mac mini that stays on at home removes that limit, which is what the rest of this guide sets up.",
        ],
      },
      {
        kind: "text",
        id: "setup",
        title: "The setup at a glance",
        points: [
          "A Mac mini at home, switched on and set not to sleep. It's the server: Claude Code, your repositories, logins and files live on it.",
          "Claude Code with Remote Control turned on, in the Claude desktop app or the CLI.",
          "The Claude app on your phone (iOS or Android), or claude.ai/code in any browser, to open those sessions from anywhere.",
          "Tailscale plus Screen Sharing, so you can open the Mac mini's desktop from a laptop as if you were sitting at it.",
        ],
      },
      {
        kind: "text",
        id: "why-mac-mini",
        title: "Why a Mac mini and not a Linux server",
        text: [
          "A rented Linux server stays on too, and that setup is in [Claude Code on a VPS](/blog/claude-code-vps). A Mac adds things Linux can't do:",
        ],
        points: [
          "Computer use, where Claude operates apps and the screen. In the CLI it's macOS only. In Claude Desktop it's a research preview on macOS and Windows, on Pro, Max or Ultra (not Team or Enterprise), and the app has to be running. See [Anthropic's computer use docs](https://code.claude.com/docs/en/computer-use).",
          "iOS apps. Xcode and the iOS Simulator run only on macOS, so if Claude Code works on an iPhone app, the server has to be a Mac.",
          "The full desktop app. Claude Desktop on Linux is a beta for Ubuntu and Debian, without computer use, Cowork or dictation.",
          "Your data at home. Repositories, browser logins and files stay on a machine you own instead of a provider's server.",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to set up Claude Code on a Mac mini",
        steps: [
          {
            title: "Keep the Mac mini awake",
            text: "In System Settings > Energy, turn on Prevent automatic sleeping when the display is off, so the Mac mini keeps running with its display off. Turn on Wake for network access as well, which lets it wake for shared services. See [Apple's sleep and wake settings](https://support.apple.com/guide/mac-help/set-sleep-and-wake-settings-mchle41a6ccd/mac).",
          },
          {
            title: "Install Claude Code and sign in",
            text: "Install the Claude desktop app, the Claude Code CLI or both, and sign in with your Claude account. Remote Control needs a Pro, Max, Ultra, Team or Enterprise plan. API keys don't work with it, and on Team or Enterprise an Owner has to turn it on first.",
          },
          {
            title: "Turn on Remote Control",
            text: "In the desktop app, open Settings > Code (or Settings > Claude Code) and turn on Connect new sessions to Remote Control, so every new session can be opened from your phone. For a single session, type `/remote-control` or `/rc` in the Code tab. In the CLI, set `remoteControlAtStartup` to true in `~/.claude/settings.json`, or run `claude remote-control` as a server that hosts several sessions at once.",
            code: remoteControl,
          },
          {
            title: "Open it from your phone",
            text: "Open the Claude app on iOS or Android, or claude.ai/code in a browser, and pick the session. Claude keeps running on the Mac mini; your phone sends messages and shows the results. If the network drops, Claude Code reconnects automatically when the Mac mini is back online. Setup details and fixes are in [the Remote Control guide](/remote-claude-code).",
          },
          {
            title: "Put the Mac mini and your laptop on Tailscale",
            text: "Install Tailscale on the Mac mini and on the laptop you'll work from, and add both to the same tailnet. Tailscale creates a private peer-to-peer network between your devices with encrypted WireGuard connections, and only devices on your tailnet can reach each other. See [what Tailscale is](https://tailscale.com/kb/1151/what-is-tailscale).",
          },
          {
            title: "Turn on Screen Sharing",
            text: "On the Mac mini, open System Settings > General > Sharing and turn on Screen Sharing. It can't be on at the same time as Remote Management, so turn that off first if it's on. See [Apple's Screen Sharing guide](https://support.apple.com/guide/mac-help/turn-screen-sharing-on-or-off-mh11848/mac).",
          },
          {
            title: "Work on it from your laptop",
            text: "From your laptop, connect with Screen Sharing to the Mac mini's name or address on your tailnet. You get its desktop: sign in to a website in its browser, open Xcode and the Simulator, or watch what Claude is doing, from home or anywhere else. Our founder works this way from a MacBook Air, and the files never leave the Mac mini.",
          },
        ],
        source: { label: "Source: Anthropic's Remote Control documentation", href: docs },
      },
      {
        kind: "text",
        id: "keep-running",
        title: "What keeps it running, and what stops it",
        points: [
          "The Claude Code process has to keep running. Quit the desktop app or close the terminal and the session goes offline, so leave it open on the Mac mini.",
          "Sleep and network drops are recoverable: Claude Code reconnects automatically when the machine is back online. Server mode (`claude remote-control`) is less patient. After about 10 minutes without a network it exits, so start it again.",
          "Remote Control drives a session that's already running. It doesn't start work on its own: when a task is done, Claude waits for your next message.",
          "Permission prompts and usage limits stop long runs too. [How to run Claude Code 24/7](/blog/run-claude-code-24-7) covers permission modes, `/goal` and plan limits.",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Give the always-on Mac mini a standing job",
        text: [
          "An always-on Mac mini answers whenever you message it, and waits when you don't. Crewmark turns a Claude Code conversation on it into an AI employee with a role, goals, working hours and a heartbeat: during working hours the `crewmark` CLI wakes the employee to work through its issues on a shared board. The computer it runs on has to stay on, and the Mac mini does.",
        ],
        steps: [
          {
            title: "Hire an employee",
            text: "Pick a role from the [AI employee roles](/ai-employees), such as software engineer or SEO specialist, and write its goals and KPIs.",
          },
          {
            title: "Connect Claude Code on the Mac mini",
            text: "Paste the setup link into a Claude Code conversation on the Mac mini. It installs the `crewmark` CLI and links that conversation to the employee. Codex works too.",
          },
          {
            title: "Set working hours and a heartbeat",
            text: "Choose the hours, weekdays only or every day, and how often the employee wakes: every 15, 30, 60, 120 or 240 minutes. Hours can run past midnight, so on a machine that never sleeps a night shift works too.",
          },
          {
            title: "Assign issues from your phone",
            text: "Create and assign issues on the board at crewmark.ai from any browser; assigning one wakes the employee right away. It keeps each issue's status current, and when it needs a review or a decision it sets the issue to Needs action and asks you there. Jobs to give it are in [Claude Code use cases](/use-cases/claude-code).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Set up Claude Code on a Mac mini as an always-on server" },
    mid: {
      title: "Want the Mac mini to keep working when you're not messaging it?",
      text: "Crewmark wakes Claude Code on a heartbeat during the hours you set and hands it the next issue from a board.",
      button: "Get started",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "Can Claude Code run 24/7 on a Mac mini?",
          a: "Yes, as long as the Mac mini stays awake and the Claude Code process keeps running. Turn on Prevent automatic sleeping when the display is off in System Settings > Energy, leave the Claude desktop app open (or the CLI running), and turn on Remote Control so you can reach it from your phone. Permission prompts and usage limits still apply.",
        },
        {
          q: "How do I set up Claude Code on a Mac mini?",
          a: "Keep the Mac awake in Energy settings, install Claude Code or the Claude desktop app and sign in, turn on Connect new sessions to Remote Control (or run `claude remote-control`), then open the session in the Claude app on your phone. Add Tailscale and Screen Sharing to reach its desktop from a laptop.",
        },
        {
          q: "How do I use Claude Code on my Mac mini from my iPhone?",
          a: "With Remote Control. Turn it on for the session on the Mac mini, then open the Claude app on your iPhone (or claude.ai/code) and pick the session. Claude runs on the Mac mini; the phone sends your messages and shows the results. It needs a Pro, Max, Ultra, Team or Enterprise plan.",
        },
        {
          q: "Do I need Tailscale for Claude Code?",
          a: "Not for Remote Control: you open the session in the Claude app. Tailscale is for reaching the Mac mini itself, such as its desktop through Screen Sharing from a laptop. It puts your devices on a private network, a tailnet, where only they can reach each other.",
        },
        {
          q: "Can Claude Code build iOS apps on a Mac mini?",
          a: "A Mac is what makes it possible: Xcode and the iOS Simulator run only on macOS, which is why this setup uses a Mac mini rather than a Linux server. Run Claude Code on the Mac mini in the app's project folder, and open its desktop through Screen Sharing when you want to see the Simulator yourself.",
        },
        {
          q: "Mac mini or Linux VPS for Claude Code?",
          a: "A Linux VPS is enough when Claude Code needs only a terminal and a browser: the CLI runs on any distribution and Claude in Chrome works on Linux. Pick a Mac mini for computer use, iOS development with Xcode and the Simulator, or to keep your files on a machine at home. See [Claude Code on a VPS](/blog/claude-code-vps).",
        },
      ],
    },
    cta: {
      title: "Give your Mac mini a job.",
      text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked:
      "Checked against Anthropic's Claude Code docs (Remote Control, computer use, Claude Desktop on Linux), Apple Support and Tailscale's docs on November 14, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by Anthropic, Apple or Tailscale. Claude and Claude Code are trademarks of Anthropic; Mac, Mac mini and Xcode are trademarks of Apple.",
  },
};
