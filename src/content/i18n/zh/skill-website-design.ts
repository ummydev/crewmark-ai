import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /skills/website-design; the English master is
// src/content/skill-pages/website-design.ts.

const anthropic = "https://github.com/anthropics/skills/tree/main/skills/frontend-design";

const install = `# Anthropic's official frontend-design (Claude Code)
/plugin install frontend-design@claude-plugins-official

# Taste Skill
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"

# Impeccable
npx impeccable install

# UI UX Pro Max (Claude Code, Cursor, Codex and more)
npm install -g ui-ux-pro-max-cli && uipro init --ai claude

# unslop (Claude Code)
git clone https://github.com/heydamir/unslop
mkdir -p ~/.claude/skills && cp -r unslop/skills/unslop ~/.claude/skills/`;

export const copy: GuideCopy = {
  meta: {
    title: "最好用的 Claude 设计 Skills：网站与 UI 设计（2026）",
    description:
      "最好用的网站与 UI 设计 Claude Code skill，信息来自各项目自己的仓库：Anthropic 的 frontend-design、Taste Skill、Impeccable、UI UX Pro Max、unslop、Emil Kowalski 的 skill、shadcn 等横向对比，附安装命令。",
  },
  breadcrumb: "网站与 UI 设计 skill",
  parent: { name: "Claude Skills", href: "/skills" },
  hero: {
    kicker: "Claude Skills · 设计",
    title: "最好用的网站与 UI 设计 Claude skill",
    lead: "设计 skill 是一个 SKILL.md 文件，教 Claude Code（以及 Codex、Cursor 等 agent）怎么做设计：选什么颜色和字体，避开哪些一看就是 AI 做的默认样式，交付之前又该怎么检查效果。没有它，agent 往往会交出千篇一律的渐变加卡片页面。下面是 2026 年值得安装的设计 skill、各自最擅长什么，以及怎么安装，信息都来自各项目自己的仓库。",
    cta: "开始使用",
    secondary: "对比这些 skill",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "快速推荐",
      points: [
        "做新的落地页或公司官网：Taste Skill。它会先定设计方向，用真实照片，交付前还会在浏览器里按四种宽度检查页面。",
        "打磨已有的 UI：Impeccable（提供 polish、critique、audit 等命令，外加基于规则的 AI 味检测器）或 unslop（按顺序修间距、颜色、图标、文案和字体）。",
        "想要 Anthropic 出品的稳妥默认选项：官方 skill frontend-design，帮你避开千篇一律的 AI 设计。",
        "为任意平台挑风格、配色和字体：UI UX Pro Max，一个覆盖网页、移动端和桌面端的可搜索设计数据库。",
        "动效和细节：Emil Kowalski 的 skill。",
        "按无障碍和 UX 规则审查代码：Vercel 的 web-design-guidelines。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "网站与 UI 设计 skill 对比",
      text: [
        "Star 数和许可证来自 2026 年 11 月 8 日的 GitHub API，已取整。包含多个 skill 的仓库，Star 数按整个仓库计算。",
      ],
      headers: ["Skill", "最适合", "支持的工具", "Star", "许可证"],
      rows: [
        ["[frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design)（Anthropic）", "为任何新 UI 做出有辨识度的设计；先规划一套 token 体系", "Claude Code、Claude.ai", "~189k（整个仓库）", "Apache 2.0"],
        ["[UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)", "网页、移动端和桌面端的风格、配色、字体搭配和 UX 规则", "Claude Code、Cursor、Codex 及另外约 20 种", "~147k", "MIT"],
        ["[Taste Skill](https://github.com/Leonxlnx/taste-skill)", "公司官网和营销网站，在真实浏览器里检查效果", "Claude Code、Codex、skills CLI", "~112k", "MIT"],
        ["[Impeccable](https://github.com/pbakaus/impeccable)", "评审和打磨已有界面；AI 味检测器", "Claude Code、Codex、Cursor 等", "~105k", "Apache 2.0"],
        ["[Emil Kowalski 的 skill](https://github.com/emilkowalski/skills)", "动画、打磨和组件细节", "通过 skills CLI 支持任意 agent", "~54k", "MIT"],
        ["[web-design-guidelines](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines)（Vercel）", "按 100 多条无障碍和 UX 规则审查 UI 代码", "通过 skills CLI 支持任意 agent", "~34k（整个仓库）", "MIT（据 README）"],
        ["[shadcn](https://github.com/shadcn-ui/ui/tree/main/skills/shadcn)", "在 React 应用里正确使用 shadcn/ui 组件", "通过 skills CLI 支持任意 agent", "~128k（整个仓库）", "MIT"],
        ["[Huashu Design](https://github.com/alchaincyf/huashu-design)（花叔）", "一句提示词生成网页、App 原型、演示文稿和动效；用中文写成", "Claude Code、Cursor、Codex 等", "~29k", "MIT"],
        ["[unslop](https://github.com/heydamir/unslop)", "一轮一轮把 AI 味的 UI 改成真正经过设计的界面", "Claude Code、Codex", "~11k", "CC BY 4.0"],
        ["[Stitch skills](https://github.com/google-labs-code/stitch-skills)（Google）", "先在 Stitch 里设计，再构建 React 或 React Native", "Claude Code、Cursor、Codex；需要 Stitch MCP", "~9k", "Apache 2.0"],
        ["[Figma skills](https://github.com/figma/mcp-server-guide)", "把 Figma 设计稿转成代码，以及在 Figma 里搭建设计系统（beta）", "Claude Code、Cursor；需要 Figma MCP", "~2k", "Figma Developer Terms"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何安装和使用设计 skill",
      steps: [
        {
          title: "装一两个就够，别全装",
          text: "几个都想主导设计方向的 skill 会互相打架。挑一个负责设计的（frontend-design、Taste Skill 或 UI UX Pro Max），需要的话再加一个负责审查的（Impeccable、unslop 或 web-design-guidelines）。",
          code: install,
        },
        {
          title: "把需求讲清楚",
          text: "说明页面是做什么的、给谁看，再给出一两个你喜欢的网站。这些 skill 大多会先问设计方向，需求写得多具体，结果就有多具体。",
        },
        {
          title: "让它自己检查",
          text: "Taste Skill 会按四种宽度渲染页面，并运行收尾检查（finish gate）；Impeccable 的检测器用 `npx impeccable detect src/` 跑 62 条规则。把这些检查开着，截图也要自己看一遍。",
        },
        {
          title: "把结果存成设计系统",
          text: "好几个 skill 都会写一份 DESIGN.md（Impeccable、Taste Skill、Stitch）。把它留在仓库里，之后的会话和其他 agent 就会沿用同样的颜色、字体和间距。参见 [CLAUDE.md 指南](/blog/claude-md)。",
        },
      ],
      source: { label: "来源：Anthropic 的 frontend-design skill", href: anthropic },
    },
    {
      kind: "text",
      title: "安装前需要知道的事",
      points: [
        "有些 skill 会添加 hook 或下载引擎：Impeccable 会安装命令 hook，并默认开启遥测（设置 `DO_NOT_TRACK=1` 即可关闭）；Taste Skill 以 Stop hook 的形式运行收尾检查，需要 Node 22+ 和 Chrome。",
        "据 Taste Skill 的 README，完整构建一次可能要 30–45 分钟，消耗几十万 token。",
        "UI UX Pro Max 需要 Python 3，另有付费高级版；开源的 skill 采用 MIT 许可。",
        "unslop 采用 CC BY 4.0：复用它的文字时要注明作者。别把它和同名、但针对文字的仓库搞混。",
        "Stitch 和 Figma 的 skill 需要各自的 MCP 服务器和账号；Figma 的画布写入功能还在 beta 阶段，免费席位有限制。",
        "我们团队的经验：我们用 Taste Skill 做过 Crewmark 自己的产品界面，也给 unslop 做过一条短视频。我们的姊妹项目 [pretty-ui](https://github.com/ummydev/pretty-ui) 是一个更新、更小的 skill，做的是同一件事。做手机 App 请看[最好用的移动 App 设计 Claude skill](/skills/mobile-app-design)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "给这些 skill 配一位每天上班的设计师",
      text: [
        "一个 skill 能让一个会话的设计做得更好。Crewmark 把 Claude Code 或 Codex 变成一位 AI UI 设计师：有目标（比如每周打磨好三个界面）、有工作时间，还有一块待修界面的看板；它按心跳醒来，提交附带前后对比截图的 Pull Request。",
      ],
      steps: [
        {
          title: "招聘 UI 设计师岗位",
          text: "岗位说明、目标和日常流程都已配好；参见 [AI UI 设计师](/ai-employees/ui-designer) 和 [AI App 设计师](/ai-employees/app-designer)。",
        },
        {
          title: "把设计 skill 装进仓库",
          text: "员工会像任何会话一样，使用 `.claude/skills` 里的 skill。",
        },
        {
          title: "评审 Pull Request，而不是写提示词",
          text: "批准你喜欢的界面；要改的地方在看板上提出来。阅读[什么是 AI 员工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "安装并使用 Claude 设计 skill" },
  mid: {
    title: "想要一位每天运行这些 skill 的设计师？",
    text: "Crewmark 的 AI UI 设计师按心跳在你的代码里工作，提交附带截图的 Pull Request。",
    button: "开始使用",
  },
  faq: {
    title: "Claude 设计 skill 常见问题",
    items: [
      {
        q: "做网站设计，最好用的 Claude skill 是哪个？",
        a: "做新网站，用 Taste Skill 或 Anthropic 的 frontend-design；打磨已有 UI，用 Impeccable 或 unslop；跨平台挑风格和配色，用 UI UX Pro Max。大多数人会装一个负责设计的，再装一个负责审查的。",
      },
      {
        q: "有官方的 Claude 设计 skill 吗？",
        a: "有。Anthropic 在 anthropics/skills 里发布了 frontend-design，也在 claude-plugins-official 里以插件形式提供。它采用 Apache 2.0 许可，重点是避开千篇一律的 AI 设计默认样式。",
      },
      {
        q: "怎样在 Claude Code 里安装 skill？",
        a: "用插件市场（先 `/plugin marketplace add owner/repo`，再 `/plugin install`）、skills CLI（`npx skills add owner/repo`），或者把 skill 的文件夹复制到 `.claude/skills/`。",
      },
      {
        q: "这些 skill 能在 Codex 和 Cursor 里用吗？",
        a: "大多数可以：UI UX Pro Max、Impeccable、Taste Skill 和 Huashu Design 都写明了 Codex 的用法，skills CLI 也能把 SKILL.md 格式的 skill 装进 Cursor、Codex 和另外约 75 种 agent。",
      },
      {
        q: "Claude 设计 skill 免费吗？",
        a: "这里列出的 skill 都是开源的（MIT、Apache 2.0 或 CC BY 4.0）。围绕它们的部分产品要付费：UI UX Pro Max 有付费高级版，Stitch 和 Figma 也需要各自的账号。",
      },
      {
        q: "Impeccable 和 Taste Skill 有什么区别？",
        a: "Taste Skill 用来做新的公司官网和营销网站，并在真实浏览器里检查；Impeccable 最擅长处理已有的界面，提供评审、审计和打磨命令，以及基于规则的 AI 味检测器。",
      },
    ],
  },
  cta: {
    title: "给你的看板配一位设计师，用上你信得过的 skill。",
    text: "Crewmark 把 Claude Code、Codex、DeepSeek Harness 和 OpenCode 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 8 日对照各 skill 的 GitHub 仓库和 GitHub API 查证。",
  disclaimer:
    "Crewmark 是独立产品，与 Anthropic 及文中所列 skill 的作者无关，也未获其背书。产品名称是其各自所有者的商标。",
};
