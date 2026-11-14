import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /blog/claude-code-mcp; the English master is src/content/blog/claude-code-mcp.ts.

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
    title: "Claude Code MCP：新增伺服器、設定檔位置、.mcp.json 與範圍",
    description:
      "如何在 Claude Code 設定 MCP 伺服器：用 claude mcp add 新增 HTTP 與 stdio 伺服器，local、project、user 三種範圍，設定檔放在哪裡，搭配環境變數的 .mcp.json，OAuth 登入與疑難排解。",
  },
  breadcrumb: "Claude Code MCP 指南",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "部落格 · Claude Code",
    title: "Claude Code MCP：如何新增伺服器，設定存在哪裡",
    lead: "MCP（Model Context Protocol，模型上下文協定）伺服器把 Claude Code 連接到外部工具和資料，例如 Notion、GitHub、Sentry、資料庫或你自己的 API。你用 `claude mcp add` 新增伺服器，決定每個伺服器是只給自己用還是與團隊共享，之後 Claude 就能呼叫它們提供的工具。本文介紹如何新增 HTTP 和 stdio 伺服器、三種範圍（scope）及其背後的設定檔、搭配環境變數的 `.mcp.json`、用 OAuth 登入，以及伺服器連不上時該檢查什麼。",
    cta: "開始使用",
    secondary: "直接看設定步驟",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "steps",
      id: "how-to",
      title: "如何為 Claude Code 新增 MCP 伺服器",
      steps: [
        {
          title: "選擇傳輸方式",
          text: "遠端、雲端託管的伺服器用 HTTP；這是建議的傳輸方式，如果伺服器只提供已棄用的 SSE 傳輸，Claude Code 會退回使用 SSE。以本機程序執行的伺服器用 stdio。對於 stdio，`--` 之後的所有內容都會原封不動傳給伺服器。",
          code: add,
        },
        {
          title: "選擇範圍",
          text: "不加 `--scope` 時，伺服器的範圍是 local：只有你、只在目前的專案。加上 `--scope project` 會把它寫進 `.mcp.json` 供團隊共用，加上 `--scope user` 則套用到你的所有專案。詳見下表。",
        },
        {
          title: "需要時登入",
          text: "許多遠端伺服器使用 OAuth。在 Claude Code 裡執行 `/mcp` 並選擇要驗證的伺服器，或在 shell 裡執行 `claude mcp login <name>`。無頭模式的 `-p` 執行無法開啟登入流程，所以要先以互動方式登入。",
        },
        {
          title: "確認已連線",
          text: "執行 `/mcp` 查看每個伺服器的狀態和工具，或在 shell 裡執行 `claude mcp list`。接著請 Claude 依名稱使用這個工具。",
        },
        {
          title: "管理你的伺服器",
          text: "在命令列中列出、檢視、移除或匯入伺服器。不常用的伺服器可以在 `/mcp` 裡停用，不必移除。",
          code: manage,
        },
      ],
      source: { label: "來源：Claude Code 文件，Connect Claude Code to tools via MCP", href: docs },
    },
    {
      kind: "table",
      id: "scopes",
      title: "MCP 範圍與設定檔位置",
      text: [
        "Claude Code 把 MCP 設定存放在以下位置。注意，MCP 的 local 範圍存在 `~/.claude.json` 裡，而不是 `.claude/settings.local.json`。",
      ],
      headers: ["範圍", "在哪裡載入", "是否共享", "存放位置"],
      rows: [
        ["local（預設）", "僅目前專案", "否", "`~/.claude.json`，在該專案路徑下"],
        ["project", "僅目前專案", "是，提交到儲存庫", "專案根目錄的 `.mcp.json`"],
        ["user", "你的所有專案", "否", "`~/.claude.json`，最上層"],
        ["外掛（plugin）", "外掛啟用的地方", "隨外掛發布", "外掛本身的設定"],
        ["claude.ai 連接器（connectors）", "以該 claude.ai 帳號登入的工作階段", "依帳號", "你的 claude.ai 設定"],
      ],
    },
    {
      kind: "steps",
      id: "mcp-json",
      title: "用 .mcp.json 共享伺服器",
      text: [
        "`.mcp.json` 讓整個團隊使用同一組伺服器。用環境變數把機密擋在檔案之外：`${VAR}` 會展開為變數的值，`${VAR:-default}` 在變數未設定時使用預設值。展開在 `command`、`args`、`env`、`url` 和 `headers` 中都有效。",
      ],
      steps: [
        {
          title: "引用變數，而不是寫入機密",
          text: "每個人第一次使用 `.mcp.json` 裡的專案伺服器時，Claude Code 都會請對方核准；`claude mcp reset-project-choices` 可以重設這些選擇。帶有 `url` 的 JSON 項目也必須有 `type`，例如 `http`。",
          code: project,
        },
      ],
    },
    {
      kind: "text",
      title: "優先順序、連接器與其他細節",
      points: [
        "同一個伺服器被定義兩次時，Claude Code 只連線一次，依下列順序取第一個：local、project、user、外掛、claude.ai 連接器。項目不會合併；組織的受管伺服器優先於以上所有。",
        "如果你用 claude.ai 帳號登入 Claude Code，你在 claude.ai 新增的連接器會自動出現。",
        "Claude Code 本身也可以當作 MCP 伺服器：`claude mcp serve` 會把它的工具提供給其他用戶端，例如 Claude Desktop。",
        "伺服器也可以提供以斜線指令形式出現的提示詞；參見 [Claude Code 斜線指令](/blog/claude-code-slash-commands)。",
        "移除遠端伺服器會刪除 Claude Code 儲存的權杖，但不會撤銷它們；要撤銷，請先執行 `claude mcp logout <name>`。",
      ],
    },
    {
      kind: "text",
      title: "MCP 與 token 用量",
      text: [
        "工具定義預設會延後載入：在 Claude 使用某個工具之前，上下文裡只有工具名稱和伺服器說明，所以設定一長串伺服器比以前便宜。但每個伺服器仍會占用一些上下文，所以請在 `/mcp` 裡停用沒在用的伺服器；如果有對應的 CLI，例如 `gh`、`aws` 或 `gcloud`，優先用 CLI，因為它完全不會增加工具清單。更多內容請見[如何減少 Claude Code 的 token 用量](/blog/reduce-claude-code-token-usage)。",
      ],
    },
    {
      kind: "text",
      title: "疑難排解：伺服器連不上時",
      points: [
        "顯示需要驗證：開啟 `/mcp` 選擇 Re-authenticate，或執行 `claude mcp login <name>`。",
        "出現 \"has a url but no type\"：在 JSON 項目中加上 `\"type\": \"http\"`（或 `sse`、`ws`）；沒有 type 時，Claude Code 會把它當成 stdio。",
        "stdio 伺服器的參數被吃掉了：在伺服器指令前加上 `--`，這樣 Claude Code 就不會把它們當成自己的參數解析。",
        "`claude mcp list` 出現變數缺少的警告：設定該變數，或幫它加上 `:-default` 預設值。",
        "專案伺服器在 `claude -p` 中一直沒有載入：無頭模式下沒有核准提示，所以請檢查你的設定，或用 `--mcp-config` 和 `--strict-mcp-config` 明確傳入伺服器。",
        "用 `claude mcp` 新增的伺服器名稱只能包含字母、數字、連字號和底線。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "讓你的 AI 員工用上和你一樣的工具",
      text: [
        "Claude Code 透過 MCP 連到你的 issue 追蹤系統、資料庫或分析工具。Crewmark 把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 工作階段變成有職位、目標和工作時間的 AI 員工，並依心跳喚醒它，從看板上接手下一個 issue，同時可以使用你專案裡的 MCP 伺服器。",
      ],
      steps: [
        {
          title: "提交 .mcp.json",
          text: "project 範圍的伺服器會像在你的工作階段中一樣，在員工的工作階段中載入；需要 OAuth 的伺服器，請先以互動方式登入一次。",
        },
        {
          title: "讓心跳啟動工作",
          text: "在工作時間內，員工每 15、30 或 60 分鐘在同一個對話裡醒來一次；參見[如何讓 Claude Code 主動工作](/proactive-claude-code)。",
        },
        {
          title: "每個職位只給它需要的",
          text: "SEO 員工拿到 Search Console；程式設計師拿到 GitHub 和 Sentry。閱讀[什麼是 AI 員工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "為 Claude Code 新增 MCP 伺服器" },
  mid: {
    title: "工具已經連好，你不在的時候誰來用？",
    text: "Crewmark 用職位、目標和 issue 看板，依心跳喚醒 Claude Code，使用的就是你已經在付費的方案。",
    button: "開始使用",
  },
  faq: {
    title: "Claude Code MCP 常見問題",
    items: [
      {
        q: "如何為 Claude Code 新增 MCP 伺服器？",
        a: "遠端伺服器執行 `claude mcp add --transport http <name> <url>`，本機伺服器執行 `claude mcp add --transport stdio <name> -- <command>`。接著在 Claude Code 裡執行 `/mcp`，視需要登入並確認已連線。",
      },
      {
        q: "Claude Code 的 MCP 設定檔在哪裡？",
        a: "local 和 user 範圍的伺服器存放在 `~/.claude.json`（local 的在該專案路徑下）。project 範圍的伺服器在專案根目錄的 `.mcp.json` 裡，可以提交到儲存庫。",
      },
      {
        q: "local、project 和 user 範圍有什麼差別？",
        a: "local 是只有你、只在一個專案裡（預設）；project 透過 `.mcp.json` 與團隊共享；user 是只有你、在所有專案裡。",
      },
      {
        q: "如何避免把 API 金鑰寫進 .mcp.json？",
        a: "在 `command`、`args`、`env`、`url` 或 `headers` 中用 `${VAR}` 或 `${VAR:-default}` 引用環境變數，並在每台機器上設定這些變數。",
      },
      {
        q: "如何在 Claude Code 中使用 Claude Desktop 的 MCP 伺服器？",
        a: "執行 `claude mcp add-from-claude-desktop`，選擇要匯入的伺服器。它支援 macOS 和 WSL；加上 `--scope user` 就能讓它們在所有專案中使用。",
      },
      {
        q: "MCP 伺服器會用掉很多 token 嗎？",
        a: "比以前少：工具定義只在 Claude 使用工具時才載入。但每個伺服器仍會加入名稱和說明，所以請停用沒在用的伺服器，有 CLI 時優先用 CLI。",
      },
      {
        q: "Claude Code 可以當作 MCP 伺服器嗎？",
        a: "可以。`claude mcp serve` 會把它當作 stdio MCP 伺服器啟動，讓 Claude Desktop 等其他用戶端連線。",
      },
    ],
  },
  cta: {
    title: "工具連好了，再配一位會用它們的員工。",
    text: "Crewmark 把 Claude Code、Codex 和 DeepSeek Harness 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 6 日對照 Claude Code 文件（MCP 與成本）查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 Anthropic 無關，也未獲其背書。Claude 和 Claude Code 是 Anthropic 的商標。",
};
