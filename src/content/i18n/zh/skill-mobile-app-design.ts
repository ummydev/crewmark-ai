import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /skills/mobile-app-design; the English master is
// src/content/skill-pages/mobile-app-design.ts.

const expo = "https://github.com/expo/skills";

const install = `# Expo 官方 skill（Claude Code 插件）
/plugin install expo@claude-plugins-official

# Vercel 的 React Native 规则
npx skills add vercel-labs/agent-skills --skill vercel-react-native-skills

# SwiftUI Pro（Paul Hudson）
npx skills add https://github.com/twostraws/swiftui-agent-skill --skill swiftui-pro

# SwiftUI Expert（Antoine van der Lee）
/plugin marketplace add AvdLee/SwiftUI-Agent-Skill
/plugin install swiftui-expert@swiftui-expert-skill

# Flutter 团队的 skill
npx skills add flutter/agent-plugins

# 适用于任何框架的 Apple 设计审查
npx skills add dickwu/apple-design-skill

# 适用于 React Native 和 Expo 的 Mobile Taste Skill
/plugin marketplace add draftbit/mobile-taste-skill
/plugin install mobile-taste-skill`;

export const copy: GuideCopy = {
  meta: {
    title: "最好用的 Claude 移动 App Skills：设计与开发（2026）",
    description:
      "2026 年最好用的移动 App Claude Code skill，按平台分类：React Native 用 Expo 和 Vercel，iOS 用 SwiftUI Pro 和 SwiftUI Expert，还有 Flutter 团队的 skill、Apple 设计审查等，附安装命令。",
  },
  breadcrumb: "移动 App skill",
  parent: { name: "Claude Skills", href: "/skills" },
  hero: {
    kicker: "Claude Skills · 移动 App",
    title: "最好用的移动 App 设计与开发 Claude skill",
    lead: "移动 skill 是一个 SKILL.md 文件，教 Claude Code（以及 Codex、Cursor 等 agent）怎么为手机开发：平台的设计规范、模型训练之后发生变化的 API，以及 agent 在 SwiftUI、React Native 或 Flutter 里常犯的错误。大多数 skill 只针对一个平台，所以按你要发布的平台来选。下面是 2026 年值得安装的移动 skill，按平台分组，信息都来自各项目自己的仓库。",
    cta: "开始使用",
    secondary: "对比这些 skill",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "快速推荐",
      points: [
        "React Native 和 Expo：用 Expo 官方 skill 来构建和发布，用 Vercel 的 react-native-skills 或 Callstack 的 skill 优化性能，用 Mobile Taste Skill 做出不像 AI 做的界面。",
        "SwiftUI 和 iOS：想写现代、无障碍的 SwiftUI，用 Paul Hudson 的 SwiftUI Pro；处理状态和性能，用 Antoine van der Lee 的 SwiftUI Expert；从想法一路做到上架 App Store，用 Claude Code Apple Skills。",
        "Flutter：Flutter 团队自己的 skill，覆盖架构、布局、路由和测试。",
        "适用于任何框架的设计：Apple Design Skill 对照 Apple 的人机界面指南（HIG）审查设计，支持 SwiftUI、Flutter、React Native 等；UI UX Pro Max 负责挑风格、配色和字体。",
        "提交审核之前：App Store Review 会对照 App Store 和 Google Play 的规则检查项目。",
        "想让 Web 应用用起来像 App：Emil Kowalski 的 mobile-native 会修好那些在手机上露馅的 CSS 和 meta 标签。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "移动 App skill 对比",
      text: [
        "Star 数和许可证来自 2026 年 11 月 8 日的 GitHub API，已取整。包含多个 skill 的仓库，Star 数按整个仓库计算。",
      ],
      headers: ["Skill", "平台", "最适合", "Star", "许可证"],
      rows: [
        ["[UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)", "网页、移动端、桌面端", "风格、配色、字体搭配和 UX 规则", "~147k", "MIT"],
        ["[mobile-native](https://github.com/emilkowalski/skills/tree/main/skills/mobile-native)（Emil Kowalski）", "移动网页、PWA", "让 Web 应用在手机上用起来像原生 App", "~54k（整个仓库）", "MIT"],
        ["[react-native-skills](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-native-skills)（Vercel）", "React Native、Expo", "列表、动画、导航和 UI 的性能规则", "~34k（整个仓库）", "MIT（据 README）"],
        ["[SwiftUI Pro](https://github.com/twostraws/SwiftUI-Agent-Skill)（Paul Hudson）", "SwiftUI、iOS 26+", "纠正 LLM 在 SwiftUI 里常犯的错误；无障碍", "~6.5k", "MIT"],
        ["[Expo skills](https://github.com/expo/skills)（Expo）", "React Native、Expo", "构建、设计和发布 Expo App：路由、原生 UI、动画、EAS", "~4.1k", "MIT"],
        ["[SwiftUI Expert](https://github.com/AvdLee/SwiftUI-Agent-Skill)（Antoine van der Lee）", "SwiftUI、iOS、macOS", "状态、性能、导航和 Liquid Glass；Instruments trace 工具", "~3.9k", "MIT"],
        ["[Flutter agent plugins](https://github.com/flutter/agent-plugins)（Flutter 团队）", "Flutter", "架构、响应式布局、布局修复、路由、测试、本地化", "~3.2k", "BSD 3-Clause"],
        ["[Apple Design Skill](https://github.com/dickwu/apple-design-skill)", "SwiftUI、UIKit、Flutter、React Native、Tauri、Electron", "对照 123 页 Apple 设计指南审查设计", "~3k", "未注明"],
        ["[agent-skills](https://github.com/callstackincubator/agent-skills)（Callstack）", "React Native", "性能、导航、升级、迁移和在设备上测试", "~1.7k", "MIT"],
        ["[Claude Code Apple Skills](https://github.com/rshankras/claude-code-apple-skills)", "iOS、macOS、watchOS、visionOS", "从想法到 App Store 的 165 个 skill，其中 8 个与设计相关", "~870", "MIT"],
        ["[Sleek](https://github.com/sleekdotdesign/agent-skills)", "React Native、HTML", "先由 Sleek 的 AI 服务设计界面，再用代码实现", "~600", "MIT"],
        ["[Mobile App UI Design](https://github.com/ceorkm/mobile-app-ui-design)", "任意（用 React 和 Tailwind 做原型图）", "来自知名 App 的设计规则：颜色、8 点网格、拇指热区", "~500", "未注明"],
        ["[Apple Skills](https://github.com/Prisma-Labs-Dev/apple-skills)（Prisma Labs）", "iOS 26+", "最新的 Apple API：SwiftUI、UIKit、HIG、Liquid Glass、StoreKit", "~360", "MIT"],
        ["[App Store Review](https://github.com/devsemih/appstore-review-skill)", "任意", "提交审核前对照 App Store 和 Google Play 的规则检查 App", "~100", "MIT"],
        ["[Mobile Taste Skill](https://github.com/draftbit/mobile-taste-skill)（Draftbit）", "React Native、Expo", "不像 AI 生成的界面、导航和设计系统", "~10", "见仓库"],
      ],
    },
    {
      kind: "text",
      id: "installs",
      title: "安装量最高的移动 skill",
      text: [
        "以下是通过 skills CLI 的安装量，数据来自 2026 年 11 月 8 日的 skills.sh 注册表。用 `/plugin install` 安装的插件大多不计入这里，所以这些数字只是下限。",
      ],
      points: [
        "ui-ux-pro-max（网页和移动端）：约 44 万",
        "vercel-react-native-skills：约 27 万",
        "mobile-native（Emil Kowalski）：约 11.6 万",
        "expo-dev-client（Expo 的 skill 里安装量最高的）：约 7.4 万",
        "flutter-apply-architecture-best-practices（Flutter 团队的 skill 里安装量最高的）：约 4.5 万",
        "swiftui-pro（Paul Hudson）：约 3.7 万",
        "swiftui-expert-skill（Antoine van der Lee）：约 3.6 万",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何配置 Claude Code 来开发移动 App",
      steps: [
        {
          title: "按平台选：一个负责构建，一个负责设计",
          text: "Expo 用 Expo 的 skill 加 Mobile Taste Skill；SwiftUI 用 SwiftUI Pro 或 SwiftUI Expert，加 Apple Design Skill；Flutter 用 Flutter 团队的 skill，加 Apple Design Skill 或 UI UX Pro Max。两个都想定风格的 skill 会互相打架。",
          code: install,
        },
        {
          title: "给出需求和一个参考 App",
          text: "说明 App 给谁用、最重要的三四个界面，再举一个你喜欢它那种感觉的 App。Mobile Taste Skill 会让 agent 先定下对这个 App 的判断（类型、用户、感觉），规划好导航，然后才写代码。",
        },
        {
          title: "在模拟器上检查，而不是看代码",
          text: "在 iOS Simulator、Android 模拟器或 Expo Go 里运行 App，按不止一种屏幕尺寸查看真实界面。Callstack 的 agent-device skill 能让 agent 操作设备，自己检查自己的成果。",
        },
        {
          title: "把设计系统存进仓库",
          text: "Mobile Taste Skill 会写一份 MOBILE-DESIGN.md，Expo 也有一个 expo-design-system skill。把结果留在仓库里，之后的会话和其他 agent 就会沿用同样的颜色、字体和间距。参见 [CLAUDE.md 指南](/blog/claude-md)。",
        },
      ],
      source: { label: "来源：Expo 的 agent skill", href: expo },
    },
    {
      kind: "text",
      title: "安装前需要知道的事",
      points: [
        "Sleek 真正用起来需要付费账号：据它的 skill 说明，免费账号的试用额度大约只够跑一次设计，Pro 版每月 69 美元。每一份需求都会发到 sleek.design。",
        "Expo 的 EAS skill 会用到 Expo 托管的构建和更新服务，而且每个 Expo skill 都会让 agent 通过 Expo 的 agent CLI 发送反馈。",
        "SwiftUI Expert 的 trace 工具需要 Xcode 的 xctrace 和 Python 3；它们在你本机上录制和分析 Instruments trace。",
        "Claude Code Apple Skills 跟随 main 分支更新，没有固定版本；它自己的免责声明也说，这些 skill 是在 Claude Code 的帮助下写成的，可能有不准确的地方。",
        "Emil Kowalski 的 mobile-native 针对的是手机上的 Web 应用和 PWA，不适用于原生 App。",
        "这些 skill 都不是 Apple 或 Google 出品的，App Store Review 也不能保证通过审核。注册表里还列出了 Sleek 的 design-mobile-apps，约 130 万次安装，但所在仓库 Star 很少；我们没法核实这个数字，所以没有放进上面的列表。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "给这些 skill 配一位每天上班的 App 设计师",
      text: [
        "一个 skill 能让一个会话更擅长移动开发。Crewmark 把 Claude Code 或 Codex 变成一位 AI App 设计师：有目标（比如每周打磨好三个界面）、有工作时间，还有一块待修界面的看板；它按心跳醒来，提交附带模拟器截图的 Pull Request。",
      ],
      steps: [
        {
          title: "招聘 App 设计师岗位",
          text: "岗位说明、目标和日常流程都已配好；参见 [AI App 设计师](/ai-employees/app-designer) 和 [AI 软件工程师](/ai-employees/software-engineer)。",
        },
        {
          title: "把移动 skill 装进仓库",
          text: "员工会像任何会话一样，使用 `.claude/skills` 里的 skill。网页和 UI 方面的工作，参见[最好用的网站设计 Claude skill](/skills/website-design)。",
        },
        {
          title: "评审 Pull Request，而不是写提示词",
          text: "批准你喜欢的界面；要改的地方在看板上提出来。阅读[什么是 AI 员工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "用 skill 配置 Claude Code 来开发移动 App" },
  mid: {
    title: "想要一位每天运行这些 skill 的 App 设计师？",
    text: "Crewmark 的 AI App 设计师按心跳在你的代码里工作，提交附带截图的 Pull Request。",
    button: "开始使用",
  },
  faq: {
    title: "Claude 移动 App skill 常见问题",
    items: [
      {
        q: "做移动 App 设计，最好用的 Claude skill 是哪个？",
        a: "看平台。React Native 和 Expo 用 Mobile Taste Skill 加 Expo 自己的 skill；SwiftUI 用 SwiftUI Pro 或 SwiftUI Expert 加 Apple Design Skill；任何框架的视觉部分，都可以用 Apple Design Skill 或 UI UX Pro Max。",
      },
      {
        q: "有官方的 React Native 或 Expo Claude skill 吗？",
        a: "Expo 发布了 expo/skills，也在 claude-plugins-official 里以插件形式提供；Vercel 和 Callstack 也发布了 React Native skill。它们都不是 Anthropic 出品的。",
      },
      {
        q: "SwiftUI 和 iOS 开发，最好用的 Claude Code skill 是哪个？",
        a: "Paul Hudson 的 SwiftUI Pro 面向 iOS 26 和 Swift 6.4，专门纠正 LLM 在 SwiftUI 里常犯的错误；Antoine van der Lee 的 SwiftUI Expert 覆盖状态、性能和 Liquid Glass。两者都可以作为插件安装，也可以用 skills CLI 安装。",
      },
      {
        q: "有适用于 Claude Code 的 Flutter skill 吗？",
        a: "有。Flutter 团队发布了 flutter/agent-plugins，包含架构、响应式布局、布局修复、路由、本地化和测试方面的 skill，还附带 Dart 和 Flutter 的 MCP 工具。",
      },
      {
        q: "Claude Code 能设计移动 App 的 UI 吗？",
        a: "装上设计 skill 后，效果比不装好得多：skill 带来了平台的规范和设计方向。界面要在模拟器或手机上检查，因为光看代码发现不了间距和触控区域的问题。",
      },
      {
        q: "这些移动 skill 能在 Codex 和 Cursor 里用吗？",
        a: "大多数可以。Expo、SwiftUI Pro、SwiftUI Expert、Apple Design Skill 和 Callstack 的 skill 都写明了 Codex 或 Cursor 的用法，skills CLI 也能把 SKILL.md 格式的 skill 装进几十种 agent。",
      },
    ],
  },
  cta: {
    title: "给你的看板配一位 App 设计师，用上你信得过的 skill。",
    text: "Crewmark 把 Claude Code、Codex、DeepSeek Harness 和 OpenCode 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 8 日对照各 skill 的 GitHub 仓库、GitHub API 和 skills.sh 注册表查证。",
  disclaimer:
    "Crewmark 是独立产品，与 Anthropic、Apple、Google 及文中所列 skill 的作者无关，也未获其背书。产品名称是其各自所有者的商标。",
};
