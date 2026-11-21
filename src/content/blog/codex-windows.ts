import type { GuideCopy } from "@/components/landing/guide-article";

// /blog/codex-windows, Alex's request (2026-11-14): Codex on Windows, from the download (the ChatGPT desktop app,
// which Codex is part of since July 9, 2026, or the Codex CLI) to native PowerShell with the Windows sandbox vs WSL2,
// the three sandbox types, the documented fixes when sandbox setup fails, Computer Use and remote control with a
// Windows host. Keywords from Google autocomplete (2026-11-14): "codex windows" (download, install, app, sandbox, cli,
// "setup didn't finish", sandbox setup, app download, install cli). Facts come only from docs/seo/codex-remote-facts.md
// (OpenAI's docs at learn.chatgpt.com, checked 2026-11-14) and docs/compare/facts/crewmark.md. Left out on purpose:
// prices; GitHub's docs/install.md line "Windows 11 via WSL2", which conflicts with the native installer and sandbox on
// learn.chatgpt.com (the copy follows learn.chatgpt.com); fixes for the troubleshooting entries whose content the facts
// sheet doesn't record (they're named and linked); and any fix for "setup didn't finish", a message OpenAI's docs don't
// contain, so the copy says so and points to the documented "My legacy sandbox setup failed" entry. The docs give a
// Windows build only for MXC, so the table doesn't invent one for the two legacy sandboxes.

const appDocs = "https://learn.chatgpt.com/docs/windows/windows-app";
const sandboxDocs = "https://learn.chatgpt.com/docs/windows/windows-sandbox";
const wslDocs = "https://learn.chatgpt.com/docs/windows/wsl";

const cliInstall = `# Native Windows installer (run it in a new PowerShell window)
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"

# Or with npm, if Node.js is installed
npm install -g @openai/codex

# Start Codex and sign in
codex`;

const tools = `winget install --id Git.Git
winget install --id OpenJS.NodeJS.LTS
winget install --id Python.Python.3.14
winget install --id Microsoft.DotNet.SDK.10
winget install --id GitHub.cli
gh auth login`;

const wslInstall = `# In PowerShell, run as administrator
wsl --install
wsl

# Inside WSL: the sandbox needs bubblewrap (apt or dnf), then install Codex
sudo apt install bubblewrap
curl -fsSL https://chatgpt.com/codex/install.sh | sh
codex`;

const mxcTest = `codex -c windows.sandbox=mxc sandbox --include-managed-config --permission-profile :workspace -- cmd.exe /d /c echo MXC_OK`;

const preferMxc = `# config.toml in your Codex home (%USERPROFILE%\\.codex)
[features]
prefer_mxc = true`;

const legacy = `# config.toml in your Codex home (%USERPROFILE%\\.codex)
[windows]
sandbox = "elevated"   # or "unelevated"`;

const provision = `codex sandbox setup --elevated --user 'DOMAIN\\alice' --codex-home 'C:\\Users\\alice\\.codex'`;

export const codexWindows: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Codex on Windows: App, CLI Install, Sandbox and WSL2",
      description:
        "Download Codex on Windows in the ChatGPT app or install the CLI, run it in PowerShell with the Windows sandbox or in WSL2, and fix a failed sandbox setup.",
    },
    breadcrumb: "Codex on Windows",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-14" },
    hero: {
      kicker: "Blog · Codex",
      title: "Codex on Windows: install the app or the CLI, then choose the sandbox or WSL2",
      lead: "Codex runs natively on Windows. Since July 9, 2026 the Codex app is part of the ChatGPT desktop app, so you install ChatGPT and switch to Codex inside it; for the terminal, the Codex CLI installs with one PowerShell command. By default the agent runs in PowerShell under the Windows sandbox, and you can move it to WSL2 instead. This guide covers the download and install, the three sandbox types and which Windows version each needs, the documented fixes when sandbox setup fails, Computer Use, and controlling a Windows PC from your phone.",
      cta: "Get started",
      secondary: "See the steps",
      secondaryHref: "#how-to",
    },
    sections: [
      {
        kind: "text",
        id: "what-to-install",
        title: "Which Codex to install on Windows",
        points: [
          "The ChatGPT desktop app, if you want a window. Codex has its own coding view next to Chat and Work, with worktrees, scheduled tasks, Git, a built-in browser, file previews, plugins and skills. The app is available on every ChatGPT plan, including Free.",
          "The Codex CLI, if you work in a terminal. It installs natively with a PowerShell script, or with npm.",
          "The IDE extension, if you work in an editor. OpenAI lists it next to the app and the CLI as a way to use Codex natively on Windows.",
          "Windows 11 is recommended. A recent, fully updated Windows 10 is supported without guarantees and needs version 1809 or newer, for ConPTY; older Windows 10 isn't recommended. `winget` should be available.",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "How to download and install Codex on Windows",
        steps: [
          {
            title: "Download the ChatGPT desktop app",
            text: "Get it from the Microsoft Store link on [OpenAI's Windows app page](https://learn.chatgpt.com/docs/windows/windows-app), or install it with winget from PowerShell. Open ChatGPT, sign in and select Codex.",
            code: "winget install --id 9PLM9XGG6VKS -s msstore",
          },
          {
            title: "Or install the Codex CLI",
            text: "Open a new PowerShell window and run OpenAI's installer; running it again updates Codex. With Node.js installed you can use npm instead. From the CLI, `codex app` opens the desktop app, installing it if needed, and `/app` moves the current session into it.",
            code: cliInstall,
          },
          {
            title: "Sign in",
            text: "On first run, choose Sign in with ChatGPT to use your plan, or sign in with an API key, which is billed at standard API rates. Codex cloud needs the ChatGPT sign-in. `codex login status` exits with 0 once you're signed in.",
          },
          {
            title: "Install the tools Codex will call",
            text: "Codex uses what's installed on the PC. OpenAI suggests Git, Node.js, Python, the .NET SDK and the GitHub CLI, all from winget, then signing in to GitHub.",
            code: tools,
          },
          {
            title: "Choose where the agent runs",
            text: "By default the agent runs natively in PowerShell under the Windows sandbox. To run it in WSL2 instead, open Settings, switch the agent from Windows native to WSL and restart the app. In either mode, select Ask for approval beneath the composer to get sandbox protection. For commands that need administrator rights, start the app with Run as administrator; the agent inherits it. The integrated terminal can be PowerShell, Command Prompt, Git Bash or WSL.",
          },
        ],
        source: { label: "Source: OpenAI's Codex docs, Windows app", href: appDocs },
      },
      {
        kind: "table",
        id: "native-or-wsl",
        title: "Native PowerShell or WSL2?",
        text: [
          "OpenAI's advice is to use the native sandbox by default, and to pick WSL2 when you need Linux-native tools, already work in WSL2, or the native options don't fit your setup. WSL1 isn't supported any more: it worked up to Codex 0.114, and from 0.115 the Linux sandbox uses `bubblewrap` and WSL1 support ended.",
        ],
        headers: ["", "Native (PowerShell)", "WSL2"],
        rows: [
          ["Sandbox", "The Windows sandbox: MXC, elevated or unelevated", "The Linux sandbox, which needs `bubblewrap`"],
          ["Install the CLI", "PowerShell installer or npm", "`wsl --install` from an elevated PowerShell, then the Linux install script inside WSL"],
          ["In the desktop app", "The default", "Settings: switch the agent to WSL, then restart the app"],
          ["Where to keep projects", "On the Windows drive; WSL can reach them at `/mnt/<drive>/...`", "Under the Linux home, such as `~/code`, not `/mnt/c`, for speed"],
          ["Codex home", "`%USERPROFILE%\\.codex`", "The Linux home, unless you point `CODEX_HOME` at the Windows folder"],
          ["When to pick it", "By default", "Linux-native tools, or a workflow already in WSL2"],
        ],
      },
      {
        kind: "steps",
        id: "wsl",
        title: "How to run Codex in WSL2",
        steps: [
          {
            title: "Install WSL2 and Codex inside it",
            text: "From an elevated PowerShell, run `wsl --install`, then `wsl` to open the Linux shell. Inside it, install `bubblewrap` for the sandbox (`sudo apt install bubblewrap` or `sudo dnf install bubblewrap`), run the Linux install script and start `codex`.",
            code: wslInstall,
          },
          {
            title: "Keep repositories in the Linux home",
            text: "Clone into a folder such as `~/code` rather than under `/mnt/c`, which is slower. If VS Code in WSL can't find Codex, check where it is with `which codex`.",
          },
          {
            title: "Share settings with the Windows app",
            text: "The Windows app keeps its Codex home in `%USERPROFILE%\\.codex`, while a CLI inside WSL uses the Linux home. To share one, set `CODEX_HOME` in WSL to the Windows folder.",
            code: "export CODEX_HOME=/mnt/c/Users/<windows-user>/.codex",
          },
          {
            title: "Open WSL projects in the desktop app",
            text: "Choose Add new project (or press Ctrl+O) and type `\\\\wsl$\\`. If the agent stays native, it's more reliable to keep projects on the Windows drive and reach them from WSL through `/mnt/<drive>/...`.",
          },
        ],
        source: { label: "Source: OpenAI's Codex docs, Windows and WSL", href: wslDocs },
      },
      {
        kind: "table",
        id: "sandbox",
        title: "The Codex Windows sandbox: MXC, elevated and unelevated",
        text: [
          "The Windows sandbox lets Codex run natively in PowerShell, without WSL or a virtual machine, while limiting what its commands and their child processes can touch on disk and on the network. It comes in three implementations. The desktop app picks MXC automatically for consumer accounts on devices that support it.",
        ],
        headers: ["Sandbox", "How it works", "Setup", "Windows version"],
        rows: [
          [
            "`mxc` (recommended)",
            "Microsoft Execution Containers",
            "No admin-approved setup, no extra Windows accounts, no firewall rules",
            "Windows 11 24H2 (build 26100.9278) or 25H2 (build 26200.9278); Microsoft is still rolling it out to Windows 11",
          ],
          [
            "`elevated` (legacy, the preferred fallback)",
            "Dedicated lower-privilege sandbox users and firewall rules; sandboxed commands run without admin rights",
            "Needs an admin to approve its setup",
            "No separate requirement in the docs; the general guidance applies (Windows 11 recommended, Windows 10 1809 or newer without guarantees)",
          ],
          [
            "`unelevated` (legacy fallback)",
            "Weaker network isolation, and no denied read paths",
            "The docs suggest it as a stopgap when legacy sandbox setup fails",
            "No separate requirement in the docs; same general guidance",
          ],
        ],
      },
      {
        kind: "steps",
        id: "sandbox-setup",
        title: "Codex Windows sandbox setup",
        steps: [
          {
            title: "Check whether MXC works on your PC",
            text: "With Codex CLI 0.162.0 or later, run this test. It should print `MXC_OK` and exit with code 0.",
            code: mxcTest,
          },
          {
            title: "Prefer MXC in the CLI",
            text: "The desktop app already prefers MXC for consumer accounts. For the CLI, or in an enterprise setup, turn it on in `config.toml` in your Codex home.",
            code: preferMxc,
          },
          {
            title: "Or choose a legacy sandbox",
            text: "Where MXC isn't available, set `elevated`, or `unelevated` as the last fallback. The elevated sandbox needs an admin to approve its setup. In the CLI, the `/setup-default-sandbox` command runs that setup; it appears only on Windows, when Codex is on the degraded restricted-token sandbox.",
            code: legacy,
          },
          {
            title: "Or let IT set it up ahead of time",
            text: "An administrator can provision the elevated sandbox for another user. To remove the legacy sandbox later, run `codex sandbox uninstall` as administrator.",
            code: provision,
          },
        ],
        source: { label: "Source: OpenAI's Codex docs, Windows sandbox", href: sandboxDocs },
      },
      {
        kind: "text",
        id: "troubleshooting",
        title: "Codex Windows sandbox setup failed? The documented fixes",
        text: [
          `OpenAI's [Windows sandbox page](${sandboxDocs}) has a troubleshooting list. Here is what it covers, under the docs' own headings.`,
        ],
        points: [
          "“My legacy sandbox setup failed”: the usual causes are a declined UAC or admin prompt, a policy that blocks creating local users and groups, changing the firewall or giving the sandbox user logon rights, or some other policy. Retry and approve the prompt, ask IT, or use the `unelevated` sandbox in the meantime.",
          "“I see Windows error 1385”: Windows denies the sandbox user the logon type it needs. Logon rights for the sandbox user are among the things a policy can block, so on a managed PC, ask IT. MXC creates no extra Windows accounts, so on Windows 11 24H2 or 25H2 it doesn't depend on a sandbox user.",
          "“Codex switched me to the unelevated sandbox”, “Codex warns that some folders are writable by Everyone”, “Sandboxed commands cannot reach the network” and “Sandboxing worked before and then stopped” each have their own entry on that page.",
          "For diagnostics, read `CODEX_HOME/.sandbox/sandbox.log`. Never send anyone the `CODEX_HOME/.sandbox-secrets/` folder.",
          "Searching for “setup didn't finish”? OpenAI's docs have no entry with that wording. The closest documented case is “My legacy sandbox setup failed”.",
          "If PowerShell won't run npm and says `npm.ps1 cannot be loaded because running scripts is disabled on this system.`, the common fix is `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned`.",
        ],
      },
      {
        kind: "text",
        id: "computer-use",
        title: "Computer Use on Windows takes over the screen",
        text: [
          "Computer Use lets Codex operate desktop apps by moving the pointer and typing. In the desktop app it's available on macOS and Windows, with ChatGPT Work and Codex, in supported regions. To turn it on, open Settings > Computer use, find Any App under Control, and select Install or turn the switch on.",
        ],
        points: [
          "It runs on the active desktop and can't work in the background. While a task runs it moves the pointer, types and brings windows to the front, so you can't use the PC at the same time.",
          "To let it work while you're away, keep the PC unlocked and online and check in from your phone with [remote control](/blog/codex-remote-control), or run the desktop app inside a Windows virtual machine so Computer Use takes over the VM instead of your screen.",
          "Locked use, which lets a task keep going after the computer locks, is macOS only.",
          'To save app approvals, list the apps in `$CODEX_HOME/config.toml` under `[computer_use.windows]`, for example `always_allowed_app_ids = ["mspaint.exe"]`.',
          "On every system, Computer Use can't automate terminal apps or ChatGPT itself, sign in as an administrator, or approve security and privacy prompts.",
        ],
      },
      {
        kind: "text",
        id: "remote-control",
        title: "Control Codex on your Windows PC from your phone",
        text: [
          "A Windows PC can be a remote-control host, like a Mac. The ChatGPT app on your phone sends prompts and approvals; the PC runs the commands with its own projects, files, credentials and tools. The full setup and fixes are in [Codex remote control](/blog/codex-remote-control).",
        ],
        points: [
          "On the PC, open the ChatGPT desktop app and go to Settings > Connections > Control this Mac or PC, then select Set up or Add. Scan the QR code with your phone (iOS or Android).",
          "The PC then appears under Codex in the ChatGPT app. Older app versions call it Remote.",
          "Keep the PC awake, online, signed in and running the desktop app; if it sleeps or loses its network, remote access stops until it's back. For tasks that use Computer Use, keep the Windows session unlocked.",
          "OpenAI's plan table lists mobile remote control for Plus, Pro, Business and Enterprise, not for API-key sign-in. In a ChatGPT workspace, an admin may need to turn on Remote Control access first.",
          "The PC can also open projects on a Linux server as an SSH host, so your phone drives Codex on the server through the PC. See [Codex on a VPS](/blog/codex-vps) and [Codex on Linux](/blog/codex-linux). For an always-on Mac instead, see [Codex on a Mac mini](/blog/codex-mac-mini).",
        ],
      },
      {
        kind: "steps",
        id: "crewmark",
        kicker: "With Crewmark",
        title: "Give Codex on your PC a standing job",
        text: [
          "Remote control and Computer Use still wait for you to start each task. Crewmark turns a Codex chat on your Windows PC into an AI employee with a role, goals, working hours and a heartbeat: during its hours the `crewmark` CLI, which runs on Windows as well as macOS and Linux, wakes it to take the next issue from a shared board. The PC has to stay on for that.",
        ],
        steps: [
          {
            title: "Hire an employee",
            text: "Pick a role from the [AI employee roles](/ai-employees), such as [software engineer](/ai-employees/software-engineer), and write its goals and KPIs.",
          },
          {
            title: "Connect a Codex chat on the PC",
            text: "Link a Codex chat on the PC to the employee through the `crewmark` CLI. That conversation becomes the employee. Claude Code works too.",
          },
          {
            title: "Set working hours and a heartbeat",
            text: "Weekdays only or every day, in your time zone, with hours that can run past midnight. During them the CLI wakes the employee every 15, 30, 60, 120 or 240 minutes. See [Codex long-running tasks](/blog/codex-long-running-tasks).",
          },
          {
            title: "Assign issues from anywhere",
            text: "Create and assign issues on the board at crewmark.ai from any browser; assigning one wakes the employee. When it needs a review or a decision, it sets the issue to Needs action and asks you there. Jobs to give it are in [Codex use cases](/use-cases/codex).",
          },
        ],
      },
    ],
    howTo: { section: "how-to", name: "Download and install Codex on Windows" },
    mid: {
      title: "Want Codex on your PC to keep working when you're not prompting it?",
      text: "Crewmark wakes your Codex on a heartbeat during the hours you set and hands it the next issue from a board.",
      button: "Get started",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "How do I download the Codex app on Windows?",
          a: "Codex is part of the ChatGPT desktop app. Install it from the Microsoft Store link on OpenAI's Windows app page, or run `winget install --id 9PLM9XGG6VKS -s msstore` in PowerShell, then open ChatGPT and select Codex. The app is available on every ChatGPT plan, including Free.",
        },
        {
          q: "How do I install the Codex CLI on Windows?",
          a: 'Open a new PowerShell window and run `powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"`, or `npm install -g @openai/codex` if you have Node.js. Then run `codex` and sign in with ChatGPT or an API key. Running the installer again updates Codex.',
        },
        {
          q: "Does Codex on Windows need WSL?",
          a: "No. Codex runs natively in PowerShell under the Windows sandbox, in the desktop app, the CLI and the IDE extension. WSL2 is optional, for Linux-native tools or a workflow already in WSL2. WSL1 isn't supported from Codex 0.115.",
        },
        {
          q: "What is the Codex Windows sandbox?",
          a: "It limits what Codex's commands can touch on disk and on the network while they run natively on Windows. MXC is the recommended implementation and needs Windows 11 24H2 or 25H2; `elevated` and `unelevated` are legacy fallbacks. The desktop app picks MXC automatically for consumer accounts on supported devices.",
        },
        {
          q: "Why did Codex Windows sandbox setup fail?",
          a: "OpenAI's docs don't contain a “setup didn't finish” message. For a failed legacy sandbox setup they list a declined UAC or admin prompt, or a policy that blocks local users and groups, firewall changes or the sandbox user's logon rights. Retry and approve the prompt, ask IT, or use `unelevated` meanwhile. Windows error 1385 means the sandbox user was denied the logon type it needs.",
        },
        {
          q: "Can I control Codex on a Windows PC from my phone?",
          a: "Yes. In the ChatGPT desktop app on the PC, go to Settings > Connections > Control this Mac or PC, scan the QR code with the ChatGPT app on iOS or Android, and keep the PC awake, online and signed in. Keep it unlocked for tasks that use Computer Use.",
        },
      ],
    },
    cta: {
      title: "Put Codex on your PC to work.",
      text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked:
      "Checked against OpenAI's Codex docs (Windows app, Windows sandbox, WSL, CLI, sign-in, Computer Use and remote connections) on November 14, 2026.",
    disclaimer:
      "Crewmark is an independent product, not affiliated with or endorsed by OpenAI, Microsoft or any company named on this page. Codex and ChatGPT are trademarks of OpenAI; Windows is a trademark of Microsoft.",
  },
};
