import type { GuideMidCopy } from "@/components/landing/guide-article";
import { guideLocales } from "@/i18n/guides";
import { remoteClaudeCodeTranslations } from "./i18n";

// Copy for /remote-claude-code, the page remoteclaude.app redirects to. It's long-form and written in every language
// the site has (English and Chinese here, the rest in content/i18n/), so it lives here instead of in messages/*.json (which every language has to fill). Facts about
// Remote Control come from Anthropic's docs at code.claude.com/docs/en/remote-control; check them again when
// editing and update `checked`.

export const REMOTE_CLAUDE_CODE_LOCALES = guideLocales["/remote-claude-code"];
export type RemoteClaudeCodeLocale = (typeof REMOTE_CLAUDE_CODE_LOCALES)[number];

export const remoteClaudeCodeDocs = "https://code.claude.com/docs/en/remote-control";

type Step = { title: string; text: string; code?: string };

export type RemoteClaudeCodeCopy = {
  meta: { title: string; description: string };
  breadcrumb: string;
  hero: { kicker: string; title: string; lead: string; cta: string; secondary: string };
  official: { title: string; text: string; points: string[] };
  howto: { title: string; steps: Step[]; source: string };
  mid: GuideMidCopy;
  limits: { title: string; text: string; points: string[] };
  compare: { title: string; headers: [string, string, string]; rows: [string, string, string][] };
  crewmark: { kicker: string; title: string; text: string; steps: Step[] };
  both: { title: string; text: string };
  faq: { title: string; items: { q: string; a: string }[] };
  cta: { title: string; text: string; button: string };
  checked: string;
  disclaimer: string;
};

export const remoteClaudeCode: Record<RemoteClaudeCodeLocale, RemoteClaudeCodeCopy> = {
  ...remoteClaudeCodeTranslations,
  en: {
    meta: {
      title: "Claude Code Remote Control From Your Phone | Crewmark AI",
      description:
        "How to use Claude Code Remote Control to continue a local session from your phone or any browser, what it can't do, and how to keep Claude Code working while you're away.",
    },
    breadcrumb: "Remote Claude Code",
    hero: {
      kicker: "Remote Claude Code",
      title: "Control Claude Code from your phone, then let it work without you",
      lead: "Claude Code Remote Control is Anthropic's feature for continuing a Claude Code session that runs on your computer from your phone, a tablet or any browser. This guide shows how to set it up, where it stops, and how Crewmark turns that same Claude Code into an employee that keeps working on its own schedule.",
      cta: "Get started",
      secondary: "Set up Remote Control",
    },
    official: {
      title: "What is Claude Code Remote Control?",
      text: "Remote Control connects claude.ai/code and the Claude app for iOS and Android to a Claude Code session running on your machine. Claude keeps running locally the whole time; your phone or browser is a window into that session.",
      points: [
        "Your files, MCP servers, tools and project settings stay available, because nothing moves to the cloud.",
        "The conversation stays in sync, so you can type from the terminal, a browser and your phone interchangeably.",
        "You can send photos and files from your phone; Claude Code saves them on your machine.",
        "If your laptop sleeps or the network drops, the session reconnects when the machine is back online.",
      ],
    },
    howto: {
      title: "How to use Claude Code from your phone",
      steps: [
        {
          title: "Check your plan and sign-in",
          text: "Remote Control works on Claude Pro, Max, Ultra, Team and Enterprise plans, signed in through claude.ai with /login. API keys, Amazon Bedrock, Google Cloud, Microsoft Foundry and custom ANTHROPIC_BASE_URL gateways aren't supported. On Team and Enterprise an Owner turns it on first.",
        },
        {
          title: "Start a session with Remote Control on",
          text: "Start a new interactive session with the flag, or turn it on in a session that's already running. The VS Code extension and the Claude desktop app take the same /remote-control command.",
          code: 'claude --remote-control "My project"\n# or, inside a running session\n/remote-control',
        },
        {
          title: "Open it on your phone",
          text: "Scan the QR code Claude Code shows in the terminal, or open the session from the list at claude.ai/code or in the Claude app. Run /remote-control again to see the link, the QR code or to disconnect.",
        },
        {
          title: "Keep your computer on",
          text: "The session runs on your machine, so the computer has to stay on and the claude process has to keep running. Close the terminal and the remote session ends with it.",
        },
      ],
      source: "Source: Anthropic's Remote Control documentation",
    },
    mid: {
      title: "Want it to keep working while you're away?",
      text: "Remote Control lets you steer a session from your phone. A Crewmark employee keeps working on its heartbeat and messages you when it needs you.",
      button: "Get started",
    },
    limits: {
      title: "What Remote Control doesn't do",
      text: "Remote Control is a remote screen for a conversation. It doesn't decide what Claude should do next, so the work still moves only when you do.",
      points: [
        "Claude acts when you send a message. When a task is done, it waits for you.",
        "There's no list of tasks, owners or statuses: each session is one conversation.",
        "It doesn't know your goals or working hours, and nothing wakes it up on a schedule.",
        "Running several Claude Code agents means juggling several sessions yourself.",
      ],
    },
    compare: {
      title: "Remote Control vs. Crewmark",
      headers: ["", "Claude Code Remote Control", "Crewmark"],
      rows: [
        ["What it is", "Your local Claude Code session, on your phone or in a browser", "A team of AI employees, each a Claude Code or Codex conversation on your machine"],
        ["Who starts the work", "You, by sending a message", "A heartbeat during working hours, or an issue someone assigns"],
        ["When you stop replying", "Claude waits for your next message", "The employee moves on to its next issue and asks when it's blocked"],
        ["Keeping track", "One conversation per session", "Issue board with statuses, projects, comments and KPIs"],
        ["Runs on", "Your machine, your Claude plan", "Your machine, your Claude Code or Codex plan"],
        ["Made by", "Anthropic", "Crewmark (not affiliated with Anthropic)"],
      ],
    },
    crewmark: {
      kicker: "When you're away",
      title: "Give Claude Code a job, not just a remote",
      text: "Crewmark makes the Claude Code on your machine an employee: it has a role, goals, working hours and a board of issues, and it keeps working on them whether or not you're watching.",
      steps: [
        {
          title: "Hire an employee",
          text: "Pick a role such as SEO specialist or software engineer, write its goals and KPIs, and set its working hours and heartbeat.",
        },
        {
          title: "Connect a Claude Code conversation",
          text: "Paste the setup link into Claude Code. It installs the crewmark CLI and links that conversation to the employee. Codex works too.",
        },
        {
          title: "Assign issues from any browser",
          text: "Create issues on the board from your phone or laptop and assign them. The employee hears about them right away.",
        },
        {
          title: "It works on a heartbeat",
          text: "During working hours the employee is woken on a schedule, picks up its issues, updates their status and comments on its progress. When it needs a decision, it asks you.",
        },
      ],
    },
    both: {
      title: "Use both",
      text: "A Crewmark employee is an ordinary Claude Code conversation, so you can still turn on Remote Control for it and jump in from your phone. Remote Control lets you talk to Claude Code from anywhere; Crewmark gives it something to do while you're not talking.",
    },
    faq: {
      title: "Questions",
      items: [
        {
          q: "Is Crewmark the official Claude Code Remote Control?",
          a: "No. Remote Control is a feature of Claude Code made by Anthropic. Crewmark is a separate product, not affiliated with Anthropic, that runs AI employees on top of Claude Code and Codex.",
        },
        {
          q: "Can I use Claude Code from my phone?",
          a: "Yes. Start Claude Code with claude --remote-control, or run /remote-control in a session, then open it in the Claude app for iOS or Android or at claude.ai/code. The session itself keeps running on your computer.",
        },
        {
          q: "Does Remote Control work with an API key?",
          a: "No. According to Anthropic's docs it needs a Pro, Max, Ultra, Team or Enterprise plan signed in through claude.ai. It doesn't work with API keys, Amazon Bedrock, Google Cloud, Microsoft Foundry or a custom ANTHROPIC_BASE_URL.",
        },
        {
          q: "Why is Claude Code Remote Control not working?",
          a: "Usually it's the login. Run claude auth login and choose the claude.ai option; remove ANTHROPIC_API_KEY or ANTHROPIC_AUTH_TOKEN if they're set, because they take precedence; and don't use a long-lived token from claude setup-token, which can't start Remote Control. On Team and Enterprise an Owner must turn Remote Control on first. CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC or DISABLE_GROWTHBOOK also turn it off. claude doctor shows which check failed.",
        },
        {
          q: "Why does Remote Control keep disconnecting?",
          a: "\"Remote Control disconnected\" or \"Can't reach\" means your phone or browser lost contact with Claude Code on your computer. An interactive session reconnects by itself once the computer is awake and online; if the claude process stopped, start it again and resume the session. On a remote machine, run claude inside tmux or screen so it survives a closed terminal, and if it says it couldn't reach the server for about 30 minutes, run /remote-control again.",
        },
        {
          q: "Remote Control vs Dispatch: what's the difference?",
          a: "Remote Control lets you drive a Claude Code session that's already running on your computer, from claude.ai/code or the Claude app. Dispatch lets you message a new task from the Claude mobile app, and the desktop app on your computer starts a session for it; it needs the mobile app paired with Claude Desktop.",
        },
        {
          q: "Can I use Remote Control with DeepSeek or another model provider?",
          a: "No. Remote Control only works when Claude Code talks to api.anthropic.com. If ANTHROPIC_BASE_URL points at DeepSeek, a gateway or a proxy, or you use Bedrock, Google Cloud or Foundry, unset that setting and sign in with claude.ai to use it.",
        },
        {
          q: "Can Claude Code keep working when I close my laptop?",
          a: "Not on its own: a Remote Control session needs the computer on and the claude process running, and after a task it waits for your next message. Crewmark employees still run on your computer, but a heartbeat wakes them during their working hours to keep going through their issues.",
        },
        {
          q: "Does Crewmark need its own AI subscription?",
          a: "No. Each employee runs in Claude Code or Codex on your own machine, on the plan you already pay for. Crewmark holds the employees, issues, board and messages.",
        },
      ],
    },
    cta: {
      title: "Let Claude Code keep working while you're away",
      text: "Sign up with Google and hire your first employee on the agent you already use.",
      button: "Get started",
    },
    checked: "Remote Control details checked against Anthropic's documentation on November 7, 2026.",
    disclaimer:
      "Claude and Claude Code are trademarks of Anthropic, PBC. Crewmark is an independent product and is not affiliated with, endorsed by or sponsored by Anthropic.",
  },
  zh: {
    meta: {
      title: "Claude Code Remote Control 教程：手机远程操作 | Crewmark AI",
      description:
        "Claude Code Remote Control 怎么用：在手机或任意浏览器上继续电脑里的 Claude Code 会话；它做不到什么，以及人不在时怎么让 Claude Code 自己接着干活。",
    },
    breadcrumb: "远程 Claude Code",
    hero: {
      kicker: "远程 Claude Code",
      title: "用手机远程控制 Claude Code，再让它在你不在时自己干活",
      lead: "Claude Code Remote Control（远程控制）是 Anthropic 推出的功能：电脑上跑着的 Claude Code 会话，可以在手机、平板或任意浏览器上继续操作。这篇指南讲怎么开启、它的边界在哪，以及 Crewmark 怎样把同一个 Claude Code 变成按自己的节奏持续工作的员工。",
      cta: "开始使用",
      secondary: "开启 Remote Control",
    },
    official: {
      title: "Claude Code Remote Control 是什么？",
      text: "Remote Control 把 claude.ai/code 和 Claude 手机 App（iOS、Android）连到你电脑上正在运行的 Claude Code 会话。Claude 始终在本机运行，手机或浏览器只是这个会话的一个窗口。",
      points: [
        "代码不上云，本机的文件、MCP 服务器、工具和项目配置都照常可用。",
        "对话在各设备间同步，终端、浏览器、手机可以交替输入。",
        "可以从手机发照片和文件，Claude Code 会把文件存到你的电脑上。",
        "电脑休眠或断网后，机器恢复在线时会话会自动重连。",
      ],
    },
    howto: {
      title: "怎么用手机操作 Claude Code",
      steps: [
        {
          title: "确认订阅和登录方式",
          text: "Remote Control 支持 Claude Pro、Max、Ultra、Team 和 Enterprise 订阅，需要用 /login 通过 claude.ai 登录。API key、Amazon Bedrock、Google Cloud、Microsoft Foundry，以及自定义 ANTHROPIC_BASE_URL 的网关都不支持。Team 和 Enterprise 需要管理员先在后台开启。",
        },
        {
          title: "开启 Remote Control",
          text: "新开一个会话时带上参数，或者在已经运行的会话里输入命令。VS Code 插件和 Claude 桌面 App 里也是同一个 /remote-control 命令。",
          code: 'claude --remote-control "我的项目"\n# 或者在已经运行的会话里\n/remote-control',
        },
        {
          title: "在手机上打开",
          text: "扫终端里显示的二维码，或者在 claude.ai/code 或 Claude App 的会话列表里找到它。再次运行 /remote-control 可以查看链接、二维码，或者断开连接。",
        },
        {
          title: "保持电脑开着",
          text: "会话跑在你的电脑上，所以电脑要开着、claude 进程要一直运行。关掉终端，远程会话也就结束了。",
        },
      ],
      source: "来源：Anthropic 的 Remote Control 官方文档",
    },
    mid: {
      title: "想让它在你离开时也继续干活？",
      text: "远程控制让你在手机上操控会话。Crewmark 员工按心跳持续工作，需要你时会给你发消息。",
      button: "开始使用",
    },
    limits: {
      title: "Remote Control 做不到的事",
      text: "Remote Control 是一个对话的远程屏幕。它不会决定 Claude 下一步该做什么，所以工作还是只在你动手时才往前走。",
      points: [
        "你发消息，Claude 才干活；一件事做完，它就停下来等你。",
        "没有任务列表、负责人和状态：每个会话就是一段对话。",
        "它不知道你的目标和工作时间，也没有东西按时叫醒它。",
        "同时用好几个 Claude Code agent，就得自己来回切换好几个会话。",
      ],
    },
    compare: {
      title: "Remote Control 和 Crewmark 的区别",
      headers: ["", "Claude Code Remote Control", "Crewmark"],
      rows: [
        ["是什么", "把本机的 Claude Code 会话搬到手机或浏览器上", "一支 AI 员工团队，每个员工都是你电脑上的一个 Claude Code 或 Codex 对话"],
        ["谁来启动工作", "你，发一条消息", "工作时间内的心跳，或者有人给它派的 issue"],
        ["你不回复时", "Claude 等你的下一条消息", "员工接着做下一个 issue，卡住了再来问你"],
        ["进度怎么看", "每个会话一段对话", "issue 看板：状态、项目、评论和 KPI"],
        ["跑在哪", "你的电脑，你的 Claude 订阅", "你的电脑，你的 Claude Code 或 Codex 订阅"],
        ["出品方", "Anthropic", "Crewmark（与 Anthropic 无关）"],
      ],
    },
    crewmark: {
      kicker: "你不在的时候",
      title: "给 Claude Code 一份工作，而不只是一个遥控器",
      text: "Crewmark 把你电脑上的 Claude Code 变成一名员工：它有岗位、目标、工作时间和一块 issue 看板，不管你看不看着，它都会按计划推进。",
      steps: [
        {
          title: "招一名员工",
          text: "选一个岗位，比如 SEO 专员或软件工程师，写下它的目标和 KPI，设定工作时间和心跳频率。",
        },
        {
          title: "连上一个 Claude Code 对话",
          text: "把 setup 链接粘贴进 Claude Code，它会安装 crewmark CLI，并把这个对话绑定到这名员工。Codex 也可以。",
        },
        {
          title: "在任意浏览器里派活",
          text: "用手机或电脑在看板上创建 issue 并指派给它，员工马上就会收到。",
        },
        {
          title: "它按心跳工作",
          text: "工作时间内，员工会被定时叫醒，接手自己的 issue，更新状态，在评论里汇报进展；需要你拍板时，它会来问你。",
        },
      ],
    },
    both: {
      title: "两个可以一起用",
      text: "Crewmark 的员工就是一个普通的 Claude Code 对话，你照样可以给它开 Remote Control，随时用手机进去看看。Remote Control 让你在哪都能和 Claude Code 说话；Crewmark 让它在你不说话的时候也有事可做。",
    },
    faq: {
      title: "常见问题",
      items: [
        {
          q: "Crewmark 是官方的 Claude Code Remote Control 吗？",
          a: "不是。Remote Control 是 Anthropic 出品的 Claude Code 功能。Crewmark 是一个独立产品，与 Anthropic 无关，它在 Claude Code 和 Codex 之上运行 AI 员工。",
        },
        {
          q: "可以用手机操作 Claude Code 吗？",
          a: "可以。用 claude --remote-control 启动 Claude Code，或者在会话里运行 /remote-control，然后在 Claude 的 iOS / Android App 或 claude.ai/code 里打开。会话本身仍然跑在你的电脑上。",
        },
        {
          q: "Remote Control 支持 API key 吗？",
          a: "不支持。按 Anthropic 文档的说法，它需要通过 claude.ai 登录的 Pro、Max、Ultra、Team 或 Enterprise 订阅，不支持 API key、Amazon Bedrock、Google Cloud、Microsoft Foundry 或自定义的 ANTHROPIC_BASE_URL。",
        },
        {
          q: "Claude Code Remote Control 用不了怎么办？",
          a: "多半是登录的问题。运行 claude auth login 并选择 claude.ai 登录；如果设置了 ANTHROPIC_API_KEY 或 ANTHROPIC_AUTH_TOKEN，把它们去掉，因为它们的优先级更高；也不要用 claude setup-token 生成的长期 token，它没法启动 Remote Control。Team 和 Enterprise 需要管理员先开启 Remote Control。设置了 CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC 或 DISABLE_GROWTHBOOK 也会把它关掉。运行 claude doctor 可以看到是哪一项检查没通过。",
        },
        {
          q: "Remote Control 为什么老是断开？",
          a: "\"Remote Control disconnected\" 或 \"Can't reach\" 表示你的手机或浏览器和电脑上的 Claude Code 失去了联系。交互式会话会在电脑唤醒并联网后自动重连；如果 claude 进程已经停了，重新启动它并恢复会话。在远程机器上，把 claude 放在 tmux 或 screen 里运行，这样关掉终端它也不会退出；如果它提示大约 30 分钟都连不上服务器，再运行一次 /remote-control。",
        },
        {
          q: "Remote Control 和 Dispatch 有什么区别？",
          a: "Remote Control 让你在 claude.ai/code 或 Claude App 里操作一个已经在电脑上运行的 Claude Code 会话。Dispatch 让你在 Claude 手机 App 里发一个新任务，由电脑上的桌面 App 为它启动会话；它需要手机 App 和 Claude Desktop 配对。",
        },
        {
          q: "Remote Control 能搭配 DeepSeek 或其他模型服务商使用吗？",
          a: "不能。只有 Claude Code 连接 api.anthropic.com 时，Remote Control 才能用。如果 ANTHROPIC_BASE_URL 指向 DeepSeek、某个网关或代理，或者你在用 Bedrock、Google Cloud 或 Foundry，要先取消这个设置，再用 claude.ai 登录。",
        },
        {
          q: "合上电脑后 Claude Code 还能继续干活吗？",
          a: "单靠 Remote Control 不行：会话需要电脑开着、claude 进程在运行，而且一件事做完它就等你的下一条消息。Crewmark 的员工也跑在你的电脑上，但在工作时间内会被心跳叫醒，继续处理自己的 issue。",
        },
        {
          q: "Crewmark 需要另外买 AI 订阅吗？",
          a: "不需要。每个员工都在你电脑上的 Claude Code 或 Codex 里运行，用的是你已经在付费的订阅。Crewmark 负责员工、issue、看板和消息。",
        },
      ],
    },
    cta: {
      title: "让 Claude Code 在你不在时也继续干活",
      text: "用 Google 账号注册，就能在你已经在用的 agent 上招到第一名员工。",
      button: "开始使用",
    },
    checked: "Remote Control 的信息于 2026 年 11 月 7 日对照 Anthropic 官方文档核对。",
    disclaimer:
      "Claude 和 Claude Code 是 Anthropic, PBC 的商标。Crewmark 是独立产品，与 Anthropic 没有任何隶属、背书或赞助关系。",
  },
};
