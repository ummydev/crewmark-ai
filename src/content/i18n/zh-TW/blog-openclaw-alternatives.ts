import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese translation of /blog/openclaw-alternatives; the English master is src/content/blog/openclaw-alternatives.ts.

const openclaw = "https://github.com/openclaw/openclaw";

const sandbox = `# OpenClaw: tools run on the host for the main session
# unless you configure sandboxing (docs: gateway/sandboxing)

# NanoClaw: one Docker container per session, by design
# Hermes Agent: optional Docker or Modal isolation
# ZeroClaw: Landlock, Bubblewrap, Seatbelt or Docker
# IronClaw: WASM sandbox, plus a Docker sandbox for jobs
# NemoClaw: runs OpenClaw or Hermes inside NVIDIA OpenShell`;

export const copy: GuideCopy = {
  meta: {
    title: "OpenClaw 替代方案：Hermes、NanoClaw、ZeroClaw、IronClaw",
    description:
      "根據各專案自己的文件，比較 OpenClaw 的替代方案：Hermes Agent、NanoClaw、ZeroClaw、IronClaw 和 NVIDIA NemoClaw。它們各自如何執行、支援哪些模型和訂閱、安全模型如何，以及什麼時候更適合 Crewmark 這類以工作為主的方案。",
  },
  breadcrumb: "OpenClaw 替代方案",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "部落格 · AI 代理",
    title: "OpenClaw 替代方案：Hermes、NanoClaw、ZeroClaw、IronClaw 等",
    lead: "OpenClaw 是一款在你自己電腦上執行的開源 AI 助理，會在 WhatsApp、Telegram、Slack、Discord 等 20 多個管道回覆你。它在 GitHub 上約有 394,000 顆星，知名度最高，但並非唯一選擇。大家想找替代品，通常有三個原因：希望預設就有更嚴格的安全設定、想換模型或訂閱，或想要更輕量的執行環境。本文根據各專案自己的文件比較主要選項，並說明什麼時候你需要的是個人助理，什麼時候需要的是替團隊做事的代理。",
    cta: "開始使用",
    secondary: "比較替代方案",
    secondaryHref: "#alternatives",
  },
  sections: [
    {
      kind: "text",
      title: "OpenClaw 簡介",
      text: [
        "OpenClaw 最早叫 Clawdbot，2026 年 1 月下旬因 Anthropic 以商標為由要求更名，先改為 Moltbot，隨後定名 OpenClaw。作者 Peter Steinberger 之後加入了 OpenAI，專案現歸屬於 2026 年 7 月宣布成立的獨立組織 OpenClaw Foundation，基金會表示 OpenAI 是「捐助者，而非擁有者」。最新版本是 2026 年 11 月 5 日發布的 v2026.11.1。",
      ],
      points: [
        "以本機 Gateway 常駐程式的形式在 macOS、Linux、Windows 或 WSL2 上執行，並提供桌面與行動應用程式。",
        "模型以外掛形式接入：Claude（透過 API key，或沿用同一台機器上的 Claude Code 登入）、OpenAI 和 Codex，以及 Ollama 等本機模型。",
        "安全方面：它把收到的訊息一律視為不可信，陌生傳送者必須先配對；但除非你設定了沙箱，主工作階段的工具都直接在主機上執行。",
        "專案公開揭露安全修正：自 2026 年 1 月以來共發布 722 則安全公告，其中 14 則為嚴重等級，全部已修正並公開；另有一次 Trail of Bits 稽核，發現的問題也已全數修正。",
      ],
    },
    {
      kind: "table",
      id: "alternatives",
      title: "OpenClaw 替代方案比較",
      text: ["資訊來自各專案自己的 README、官網或文件，以及 GitHub API，截至 2026 年 11 月 7 日。星數為約略值。"],
      headers: ["", "是什麼", "執行平台", "模型與訂閱", "隔離方式", "授權、星數"],
      rows: [
        ["OpenClaw", "住在聊天應用程式裡的個人 AI 助理", "macOS、Linux、Windows、WSL2；行動應用程式", "Claude 透過 API key 或本機 Claude Code 登入；ChatGPT/Codex OAuth；本機模型", "預設在主機執行；沙箱可選", "MIT，約 394k"],
        ["Hermes Agent（Nous Research）", "內建學習迴圈、能自我進化的代理", "Linux、macOS、Windows、WSL2、Android；桌面應用程式", "任何模型供應商；Claude 訂閱僅限開通額外用量額度的 Max（Pro 不行）；ChatGPT/Codex OAuth", "危險指令需核准；可選 Docker 或 Modal", "MIT，約 261k"],
        ["NanoClaw", "在容器中執行代理的輕量助理", "macOS、Linux、WSL2；需要 Docker 和 Claude Code", "Claude 透過 API key，或經 Claude Code 使用訂閱；Codex、OpenCode、Ollama 透過 skill 接入", "每個工作階段一個容器；憑證從不進入容器", "MIT，約 31k"],
        ["ZeroClaw", "單一 Rust 執行檔的代理執行環境", "Linux、macOS、Windows、FreeBSD、Docker；Raspberry Pi 等開發板", "Anthropic、OpenAI、Ollama 等約 20 多家；Codex 訂閱；Claude Max 透過 setup-token", "預設受監督執行；作業系統沙箱", "MIT 或 Apache 2.0，約 33k"],
        ["IronClaw（NEAR AI）", "主打隱私與安全的助理", "macOS、Linux、Windows；或在 TEE 中執行的 NEAR AI Cloud", "各供應商 API key（Anthropic、OpenAI、Gemini、Ollama 等）", "WASM 沙箱；憑證在邊界注入", "MIT 或 Apache 2.0，約 13k；雲端每月 0 至 200 美元"],
        ["NVIDIA NemoClaw", "在 OpenShell 沙箱中執行 OpenClaw 或 Hermes 的安全堆疊（alpha）", "優先支援 Linux 和 DGX Spark；Docker、Colima 或 Podman", "透過 API 使用 NVIDIA Endpoints、OpenRouter、OpenAI、Anthropic、Gemini", "具對外流量管控的 OpenShell 沙箱", "Apache 2.0，約 23k"],
        ["Crewmark", "為工作而生的 AI 員工：職位、目標和共享看板", "網頁版看板；常駐程式支援 macOS、Windows、Linux", "在 Claude Code、Codex、DeepSeek Harness 或 OpenCode 中執行，使用你現有的方案", "每名員工有自己的工作階段和檢出目錄", "商業產品"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何選擇 OpenClaw 替代方案",
      steps: [
        {
          title: "先想清楚要拿它做什麼",
          text: "在手機上傳訊息使喚的個人助理（OpenClaw、Hermes、NanoClaw、ZeroClaw、IronClaw），和在儲存庫裡替團隊消化 backlog 的代理（Crewmark，或多個 [Claude Code 代理](/blog/multiple-claude-code-agents)）是兩種不同的工作。",
        },
        {
          title: "看它如何隔離工具",
          text: "這是它們之間最主要的差異。如果代理會讀到其他人傳來的訊息，優先選擇預設就做容器或作業系統層級隔離的。",
          code: sandbox,
        },
        {
          title: "看用的是誰的帳單",
          text: "各家對訂閱的支援差異很大：有的沿用 Claude Code 登入或 setup token，Hermes 需要開通額外用量額度的 Claude Max，其他則需要 API key。也記得查看模型供應商對第三方使用的條款。",
        },
        {
          title: "看平台支援",
          text: "在 Windows 上，OpenClaw、Hermes、ZeroClaw 和 IronClaw 都能原生安裝；NanoClaw 需要 WSL2；NemoClaw 優先在 Linux 上測試。如果要極小的資源占用或在開發板上執行，選 ZeroClaw。",
        },
        {
          title: "從一個管道、最小權限開始",
          text: "只連接一個聊天應用程式，只允許你自己的帳號，觀察一陣子它的表現後再逐步放寬。",
        },
      ],
      source: { label: "來源：OpenClaw README", href: openclaw },
    },
    {
      kind: "text",
      title: "哪個 OpenClaw 替代方案適合你",
      points: [
        "你想要隔離更嚴格的 OpenClaw：選 NanoClaw（天生以容器為基礎），或用 NemoClaw 把 OpenClaw 本身放進 NVIDIA 的沙箱執行。",
        "你想要會學習、能自己改進 skill 的代理：Hermes Agent。",
        "你想要小巧快速的執行環境，或需要在開發板上執行：ZeroClaw。",
        "你重視隱私功能，也想要託管雲端選項：IronClaw。",
        "你在比較 OpenClaw 和 Claude Code：OpenClaw 是以聊天為主的助理，Claude Code 是在你儲存庫裡寫程式的代理。想讓 Claude Code 不用你提示也持續工作，請見[如何讓 Claude Code 主動工作](/proactive-claude-code)。",
        "你想要代理從共享看板接工作、替團隊完成任務，而且用的是你已經在付費的 Claude Code 或 Codex 方案：Crewmark（見下文）。另請參考 [superagent 比較](/blog/superagent)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "不是個人助理，而是一支 AI 員工團隊",
      text: [
        "OpenClaw 和它的替代方案都在等你傳訊息。Crewmark 是為工作打造的：它把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 工作階段變成一名有職位、目標和工作時間的 AI 員工，依心跳喚醒它到共享看板上接下一個 issue，需要你做決定時再傳訊息給你。",
      ],
      steps: [
        {
          title: "選一個職位",
          text: "[SEO 專員](/ai-employees/seo-specialist)、[軟體工程師](/ai-employees/software-engineer)、[行銷代理](/ai-employees/marketing-agent) 等，每個職位都有一個可以隨時修改的目標。",
        },
        {
          title: "接上你已經在用的代理",
          text: "它在自己的工作階段和檢出目錄中執行，用的就是你已經在付費的訂閱。",
        },
        {
          title: "指派工作並核准",
          text: "把看板填滿，員工會自己接下一個 issue，遇到你核准清單上的事項會先詢問你。了解[什麼是 AI 員工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "選擇 OpenClaw 替代方案" },
  mid: {
    title: "需要能做事的代理，而不只是聊天？",
    text: "Crewmark 把 Claude Code 和 Codex 變成 AI 員工，依心跳從你的看板上接下一個 issue。",
    button: "開始使用",
  },
  faq: {
    title: "OpenClaw 替代方案常見問題",
    items: [
      {
        q: "最好的 OpenClaw 替代方案是什麼？",
        a: "取決於你為什麼想換：要容器隔離，選 NanoClaw；要能自我進化的代理，選 Hermes Agent；要小巧的 Rust 執行環境，選 ZeroClaw；要隱私功能和託管雲端，選 IronClaw；如果你要的不是個人助理，而是替團隊做事的代理，選 Crewmark。",
      },
      {
        q: "有開源的 OpenClaw 替代方案嗎？",
        a: "有：Hermes Agent（MIT）、NanoClaw（MIT）、ZeroClaw（MIT 或 Apache 2.0）、IronClaw（MIT 或 Apache 2.0）和 NVIDIA NemoClaw（Apache 2.0）都是開源的。",
      },
      {
        q: "OpenClaw 和 Hermes Agent 有什麼不同？",
        a: "兩者都是接入聊天應用程式的開源助理。Nous Research 推出的 Hermes Agent 以學習迴圈為核心，能持續改進自己的 skill，並提供可選的容器隔離；OpenClaw 的社群更大，支援的管道也更多。兩者對 Claude 訂閱的規則不同：Hermes 需要開通額外用量額度的 Claude Max。",
      },
      {
        q: "NanoClaw 比 OpenClaw 更安全嗎？",
        a: "NanoClaw 在設計上就讓每個工作階段在獨立容器中執行，憑證放在容器之外。OpenClaw 則預設在主機上執行主工作階段的工具，除非你設定了沙箱。兩者都能鎖緊，只是 NanoClaw 一開始就是如此。",
      },
      {
        q: "OpenClaw 能用我的 Claude 訂閱嗎？",
        a: "OpenClaw 的文件描述了兩種接入 Claude 的方式：API key，或沿用同一台機器上的 Claude Code 登入。文件也提醒，單看供應商名稱無法判斷用量是以 API 計費還是走訂閱。",
      },
      {
        q: "有支援 Windows 的 OpenClaw 替代方案嗎？",
        a: "Hermes Agent 有 Windows 桌面應用程式，ZeroClaw 和 IronClaw 也能在 Windows 上原生安裝。OpenClaw 本身支援 Windows 和 WSL2；NanoClaw 需要 WSL2。",
      },
      {
        q: "NemoClaw 是什麼？",
        a: "NVIDIA 推出的開源技術堆疊，目前處於 alpha 階段，能把 OpenClaw、Hermes 或 LangChain Deep Agents 放進 NVIDIA OpenShell 沙箱中執行。它是讓 OpenClaw 更安全執行的一種方式，而不是 OpenClaw 的替代品。",
      },
    ],
  },
  cta: {
    title: "讓 AI 代理去消化團隊的 backlog。",
    text: "Crewmark 把 Claude Code、Codex、DeepSeek Harness 和 OpenCode 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 7 日對照各專案自己的 README、官網、文件或部落格，以及 GitHub API 查證。",
  disclaimer:
    "Crewmark 是獨立產品，與 OpenClaw Foundation、Nous Research、NanoCo、ZeroClaw Labs、NEAR AI、NVIDIA、Anthropic 或 OpenAI 無關，也未獲其背書。產品名稱均為其所有者的商標。",
};
