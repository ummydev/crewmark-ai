import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /blog/claude-code-mcp; the English master is src/content/blog/claude-code-mcp.ts.

const docs = "https://code.claude.com/docs/en/mcp";

const add = `# Remote HTTP server (recommended for cloud services)
claude mcp add --transport http notion https://mcp.notion.com/mcp

# With a bearer token
claude mcp add --transport http secure-api https://api.example.com/mcp \\
  --header "Authorization: Bearer your-token"

# Local stdio server: everything after -- is the server's own command
claude mcp add --env AIRTABLE_API_KEY=YOUR_KEY --transport stdio airtable \\
  -- npx -y airtable-mcp-server`;

const manage = `claude mcp list            # every configured server
claude mcp get notion      # one server's details
claude mcp remove notion   # remove it (run claude mcp logout notion first to revoke tokens)
claude mcp add-from-claude-desktop   # import from Claude Desktop (macOS, WSL)`;

const project = `{
  "mcpServers": {
    "api-server": {
      "type": "http",
      "url": "\${API_BASE_URL:-https://api.example.com}/mcp",
      "headers": {
        "Authorization": "Bearer \${API_KEY}"
      }
    }
  }
}`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code MCP：添加服务器与 .mcp.json 配置 | Crewmark AI",
    description:
      "如何在 Claude Code 中配置 MCP 服务器：用 claude mcp add 添加 HTTP 和 stdio 服务器，local、project、user 三种作用域，配置文件在哪里，带环境变量的 .mcp.json，OAuth 登录与故障排查。",
  },
  breadcrumb: "Claude Code MCP 指南",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "博客 · Claude Code",
    title: "Claude Code MCP：如何添加服务器，配置存在哪里",
    lead: "MCP（Model Context Protocol，模型上下文协议）服务器把 Claude Code 连接到外部工具和数据，比如 Notion、GitHub、Sentry、数据库或你自己的 API。你用 `claude mcp add` 添加服务器，决定每个服务器是只给自己用还是与团队共享，之后 Claude 就能调用它们提供的工具。本文介绍如何添加 HTTP 和 stdio 服务器、三种作用域（scope）及其背后的配置文件、带环境变量的 `.mcp.json`、用 OAuth 登录，以及服务器连不上时该检查什么。",
    cta: "开始使用",
    secondary: "直接看配置步骤",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "steps",
      id: "how-to",
      title: "如何为 Claude Code 添加 MCP 服务器",
      steps: [
        {
          title: "选择传输方式",
          text: "远程、云端托管的服务器用 HTTP；这是推荐的传输方式，如果服务器只提供已弃用的 SSE 传输，Claude Code 会退回使用 SSE。以本地进程运行的服务器用 stdio。对于 stdio，`--` 之后的所有内容都会原样传给服务器。",
          code: add,
        },
        {
          title: "选择作用域",
          text: "不加 `--scope` 时，服务器的作用域是 local：只有你、只在当前项目。加上 `--scope project` 会把它写进 `.mcp.json` 供团队共用，加上 `--scope user` 则对你的所有项目生效。详见下表。",
        },
        {
          title: "需要时登录",
          text: "很多远程服务器使用 OAuth。在 Claude Code 里运行 `/mcp` 并选择要认证的服务器，或者在 shell 里运行 `claude mcp login <name>`。无头模式的 `-p` 运行无法打开登录流程，所以要先以交互方式登录。",
        },
        {
          title: "确认已连接",
          text: "运行 `/mcp` 查看每个服务器的状态和工具，或在 shell 里运行 `claude mcp list`。然后让 Claude 按名字使用这个工具。",
        },
        {
          title: "管理你的服务器",
          text: "在命令行里列出、查看、删除或导入服务器。不常用的服务器可以在 `/mcp` 里禁用，不必删除。",
          code: manage,
        },
      ],
      source: { label: "来源：Claude Code 文档，Connect Claude Code to tools via MCP", href: docs },
    },
    {
      kind: "table",
      id: "scopes",
      title: "MCP 作用域与配置文件位置",
      text: [
        "Claude Code 把 MCP 配置存放在以下位置。注意，MCP 的 local 作用域存在 `~/.claude.json` 里，而不是 `.claude/settings.local.json`。",
      ],
      headers: ["作用域", "在哪里加载", "是否共享", "存放位置"],
      rows: [
        ["local（默认）", "仅当前项目", "否", "`~/.claude.json`，在该项目路径下"],
        ["project", "仅当前项目", "是，提交到仓库", "项目根目录的 `.mcp.json`"],
        ["user", "你的所有项目", "否", "`~/.claude.json`，顶层"],
        ["插件（plugin）", "插件启用的地方", "随插件分发", "插件自己的配置"],
        ["claude.ai 连接器（connectors）", "用该 claude.ai 账号登录的会话", "按账号", "你的 claude.ai 设置"],
      ],
    },
    {
      kind: "steps",
      id: "mcp-json",
      title: "用 .mcp.json 共享服务器",
      text: [
        "`.mcp.json` 让整个团队使用同一组服务器。用环境变量把密钥挡在文件之外：`${VAR}` 会展开为变量的值，`${VAR:-default}` 在变量未设置时使用默认值。展开在 `command`、`args`、`env`、`url` 和 `headers` 中都有效。",
      ],
      steps: [
        {
          title: "引用变量，而不是写入密钥",
          text: "每个人第一次使用 `.mcp.json` 里的项目服务器时，Claude Code 都会请他确认；`claude mcp reset-project-choices` 可以重置这些选择。带 `url` 的 JSON 条目还必须有 `type`，比如 `http`。",
          code: project,
        },
      ],
    },
    {
      kind: "text",
      title: "优先级、连接器及其他细节",
      points: [
        "同一个服务器被定义两次时，Claude Code 只连接一次，按以下顺序取第一个：local、project、user、插件、claude.ai 连接器。条目不会合并；组织的托管服务器优先级高于以上所有。",
        "如果你用 claude.ai 账号登录 Claude Code，你在 claude.ai 里添加的连接器会自动出现。",
        "Claude Code 本身也可以作为 MCP 服务器：`claude mcp serve` 把它的工具提供给其他客户端，比如 Claude Desktop。",
        "服务器还可以提供以斜杠命令形式出现的提示词；参见 [Claude Code 斜杠命令](/blog/claude-code-slash-commands)。",
        "删除远程服务器会删掉 Claude Code 保存的令牌，但不会吊销它们；要吊销，先运行 `claude mcp logout <name>`。",
      ],
    },
    {
      kind: "text",
      title: "MCP 与 token 用量",
      text: [
        "工具定义默认延迟加载：在 Claude 使用某个工具之前，上下文里只有工具名和服务器说明，所以配置一长串服务器比以前便宜。但每个服务器仍会占用一些上下文，所以在 `/mcp` 里禁用不用的服务器；如果有对应的 CLI，比如 `gh`、`aws` 或 `gcloud`，优先用 CLI，因为它完全不会增加工具列表。更多内容见[如何减少 Claude Code 的 token 用量](/blog/reduce-claude-code-token-usage)。",
      ],
    },
    {
      kind: "text",
      title: "故障排查：服务器连不上时",
      points: [
        "显示需要认证：打开 `/mcp` 选择 Re-authenticate，或运行 `claude mcp login <name>`。",
        "出现 \"has a url but no type\"：在 JSON 条目里加上 `\"type\": \"http\"`（或 `sse`、`ws`）；没有 type 时，Claude Code 会把它当作 stdio。",
        "stdio 服务器的参数被吞掉了：在服务器命令前加 `--`，这样 Claude Code 就不会把它们当成自己的参数解析。",
        "`claude mcp list` 中出现变量缺失警告：设置该变量，或给它加上 `:-default` 默认值。",
        "项目服务器在 `claude -p` 中始终不加载：无头模式下没有确认提示，所以检查你的设置，或者用 `--mcp-config` 和 `--strict-mcp-config` 显式传入服务器。",
        "用 `claude mcp` 添加的服务器名只能包含字母、数字、连字符和下划线。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "让你的 AI 员工用上和你一样的工具",
      text: [
        "Claude Code 通过 MCP 连接你的 issue 跟踪系统、数据库或分析工具。Crewmark 把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 会话变成有岗位、目标和工作时间的 AI 员工，并按心跳唤醒它，从看板上接手下一个 issue，同时可以使用你项目里的 MCP 服务器。",
      ],
      steps: [
        {
          title: "提交 .mcp.json",
          text: "project 作用域的服务器会像在你的会话中一样，在员工的会话中加载；需要 OAuth 的服务器，先以交互方式登录一次。",
        },
        {
          title: "让心跳启动工作",
          text: "在工作时间内，员工每 15、30 或 60 分钟在同一个对话里醒来一次；参见[如何让 Claude Code 主动工作](/proactive-claude-code)。",
        },
        {
          title: "每个岗位只给它需要的",
          text: "SEO 员工拿到 Search Console；程序员拿到 GitHub 和 Sentry。阅读[什么是 AI 员工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "为 Claude Code 添加 MCP 服务器" },
  mid: {
    title: "工具已经连好，你不在的时候谁来用？",
    text: "Crewmark 用岗位、目标和 issue 看板，按心跳唤醒 Claude Code，用的就是你已经在付费的套餐。",
    button: "开始使用",
  },
  faq: {
    title: "Claude Code MCP 常见问题",
    items: [
      {
        q: "怎样给 Claude Code 添加 MCP 服务器？",
        a: "远程服务器运行 `claude mcp add --transport http <name> <url>`，本地服务器运行 `claude mcp add --transport stdio <name> -- <command>`。然后在 Claude Code 里运行 `/mcp`，按需登录并确认已连接。",
      },
      {
        q: "Claude Code 的 MCP 配置文件在哪里？",
        a: "local 和 user 作用域的服务器存放在 `~/.claude.json` 中（local 的在该项目路径下）。project 作用域的服务器在项目根目录的 `.mcp.json` 里，可以提交到仓库。",
      },
      {
        q: "local、project 和 user 作用域有什么区别？",
        a: "local 是只有你、只在一个项目里（默认）；project 通过 `.mcp.json` 与团队共享；user 是只有你、在所有项目里。",
      },
      {
        q: "怎样避免把 API 密钥写进 .mcp.json？",
        a: "在 `command`、`args`、`env`、`url` 或 `headers` 中用 `${VAR}` 或 `${VAR:-default}` 引用环境变量，并在每台机器上设置这些变量。",
      },
      {
        q: "怎样在 Claude Code 中使用 Claude Desktop 的 MCP 服务器？",
        a: "运行 `claude mcp add-from-claude-desktop`，选择要导入的服务器。它适用于 macOS 和 WSL；加上 `--scope user` 可以让它们在所有项目中可用。",
      },
      {
        q: "MCP 服务器会消耗很多 token 吗？",
        a: "比以前少：工具定义只在 Claude 使用工具时才加载。但每个服务器仍会加入名称和说明，所以禁用不用的服务器，有 CLI 时优先用 CLI。",
      },
      {
        q: "Claude Code 能当 MCP 服务器吗？",
        a: "可以。`claude mcp serve` 会把它作为 stdio MCP 服务器启动，供 Claude Desktop 等其他客户端连接。",
      },
    ],
  },
  cta: {
    title: "工具连好了，再配一个会用它们的员工。",
    text: "Crewmark 把 Claude Code、Codex 和 DeepSeek Harness 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "开始使用",
  },
  checked: "已于 2026 年 11 月 6 日对照 Claude Code 文档（MCP 和成本）查证。",
  disclaimer:
    "Crewmark 是独立产品，与 Anthropic 无关，也未获其背书。Claude 和 Claude Code 是 Anthropic 的商标。",
};
