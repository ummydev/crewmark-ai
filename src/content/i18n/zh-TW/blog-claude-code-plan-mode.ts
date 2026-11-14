import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /blog/claude-code-plan-mode; the English master is src/content/blog/claude-code-plan-mode.ts.

const docs = "https://code.claude.com/docs/en/permission-modes";

const enter = `# 以 plan mode 啟動工作階段
claude --permission-mode plan

# 或在工作階段中，只為這一則提示詞做規劃
/plan 為公開 API 加上流量限制`;

const settings = `{
  "permissions": {
    "defaultMode": "plan"
  }
}`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code plan mode：快捷鍵、運作方式及與 auto mode 比較",
    description:
      "Claude Code 的 plan mode（規劃模式）怎麼用：Shift+Tab 快捷鍵與 /plan、規劃期間 Claude 能做什麼、如何核准計畫、如何設為預設，以及 plan mode 與 auto、accept edits 和 manual 模式的比較。",
  },
  breadcrumb: "Claude Code plan mode",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "部落格 · Claude Code",
    title: "Claude Code plan mode：運作方式與使用時機",
    lead: "plan mode（規劃模式）是 Claude Code 的一種權限模式：Claude 只研究、提出變更方案，但不實際動手。它會讀取檔案、執行指令來了解狀況，然後寫出計畫，在你核准之前不會編輯你的原始碼。按 `Shift+Tab` 循環切換到這個模式，或在提示詞開頭加上 `/plan`。本文介紹進入和離開的所有方式、規劃期間允許做什麼、核准時的選項、如何設為預設，以及它與 auto mode、accept edits 和 manual 模式的比較。",
    cta: "開始使用",
    secondary: "直接看步驟",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "modes",
      title: "plan mode、auto mode、accept edits 與 manual 比較",
      text: [
        "plan mode 是 Claude Code 的權限模式之一。每種模式都在便利與監督之間取捨；下表列出每種模式下 Claude 不必問你就能做的事。",
      ],
      headers: ["模式", "不需詢問即可執行", "適合"],
      rows: [
        ["Manual（`default`）", "只能讀取", "逐一審核每個動作、敏感工作"],
        ["Accept edits（`acceptEdits`）", "讀取、編輯檔案，以及 `mkdir`、`mv` 等常用檔案指令", "快速迭代程式碼，事後用 `git diff` 檢查"],
        ["Plan（`plan`）", "讀取；auto mode 可用時，還包括經 auto mode 分類器核准的探索性指令。核准前不做任何編輯", "先摸清程式碼庫、談定做法，再動手修改"],
        ["Auto（`auto`）", "所有動作，搭配背景安全檢查", "長時間任務，減少確認提示"],
        ["Don't ask（`dontAsk`）", "只有事先核准的工具；其他一律拒絕", "嚴格管控的 CI 和指令碼"],
        ["Bypass（`bypassPermissions`）", "所有動作", "僅限隔離的容器與虛擬機器"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何在 Claude Code 中使用 plan mode",
      steps: [
        {
          title: "進入 plan mode",
          text: "在終端機按 `Shift+Tab` 循環切換模式，直到狀態列顯示 `⏸ plan mode on`；從 Manual 開始，順序是 accept edits，然後是 plan。也可以在單一提示詞開頭加上 `/plan`。在 VS Code 中，點選輸入框下方的模式指示器並選擇 Plan；在桌面應用程式中，使用模式選擇器。",
          code: enter,
        },
        {
          title: "描述變更，讓 Claude 去探索",
          text: "說明你想做的功能或要修的問題。Claude 會讀程式碼、執行指令來調查，然後寫出計畫。auto mode 可用時，這些指令由分類器審核，不必問你；否則，內建唯讀指令以外的任何指令都會先徵求你的同意。",
        },
        {
          title: "檢視並修改計畫",
          text: "回答 Claude 的問題、提出異議，或按 `Ctrl+G` 在文字編輯器中開啟計畫，自己動手改。計畫會以檔案形式儲存在 `~/.claude/plans/`，或 `plansDirectory` 設定指定的資料夾。",
        },
        {
          title: "核准，或繼續規劃",
          text: "選擇 Yes, and use auto mode（核准並使用 auto mode；auto mode 無法使用時為 Yes, auto-accept edits，即自動接受編輯），讓 Claude 去實作；選擇 Yes, manually approve edits（逐一手動核准編輯）來檢查每一處編輯；或選擇 No, keep planning（繼續規劃）。核准後會離開 plan mode，並以計畫為工作階段命名。",
        },
        {
          title: "不核准直接離開",
          text: "再按一次 `Shift+Tab`，不帶計畫離開 plan mode。要為下一個變更做規劃，就切換回來，或在提示詞開頭加上 `/plan`。",
        },
      ],
      source: { label: "來源：Claude Code 文件，Choose a permission mode", href: docs },
    },
    {
      kind: "steps",
      id: "default",
      title: "把 plan mode 設為預設",
      text: [
        "只針對一個工作階段，就用 `claude --permission-mode plan` 啟動。要讓某個專案的所有終端機工作階段都預設使用，在 `.claude/settings.json` 中把 `defaultMode` 設為 `plan`；要對這台電腦上的所有專案生效，就寫進 `~/.claude/settings.json`。",
      ],
      steps: [
        {
          title: "寫進設定",
          text: "VS Code 中的對話不會從專案設定讀取起始模式：請改在 VS Code 使用者設定中把 `claudeCode.initialPermissionMode` 設為 `plan`。",
          code: settings,
        },
      ],
    },
    {
      kind: "text",
      title: "什麼時候值得用 plan mode",
      points: [
        "牽動很多檔案，或第一個想法常常不對的變更：資料遷移、重構、橫跨前後端的新功能。",
        "你還不熟悉的程式碼：先讓 Claude 理清結構、說明做法，再動任何東西。",
        "出錯代價高的地方：資料庫 schema、驗證、付款、公開 API。",
        "一行就能修好的問題，或你描述任務的方式和計畫本身差不多時，就不必用了；這時 manual 或 accept edits 模式更快。",
        "搭配乾淨的上下文：開啟 `showClearContextOnPlanAccept` 後，核准時還能清除規劃階段的對話，讓實作只從計畫開始。",
      ],
    },
    {
      kind: "text",
      title: "注意事項",
      points: [
        "plan mode 擋的是編輯，而不是一切：auto mode 可用時，經核准的 shell 指令會在規劃期間執行，所以有副作用的指令仍可能被執行。",
        "在開啟了 bypass permissions 的互動式終端機工作階段中，plan mode 的阻擋不會強制執行；Claude 只是被指示不要編輯。",
        "無頭執行（`claude -p`）、Agent SDK 工作階段和 VS Code 聊天面板會保留 plan mode 的阻擋。",
        "在 VS Code 中選擇 Plan 只對目前的對話有效；新對話會回到你平常的起始模式。",
        "deny 規則在每種模式下都有效，plan mode 也不例外。`/plan`、`/permissions` 等指令請參見 [Claude Code 斜線指令](/blog/claude-code-slash-commands)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "plan mode 讓 Claude 謹慎行事，Crewmark 讓它一直有事做。",
      text: [
        "plan mode 讓你在大型變更前掌握主導權，但工作階段仍要等你來啟動下一件事。Crewmark 把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 工作階段變成有職位、目標和工作時間的 AI 員工，並依心跳喚醒它，從看板上接手下一個 issue。",
      ],
      steps: [
        {
          title: "把計畫貼在 issue 留言裡",
          text: "員工可以在進行有風險的變更前，先把計畫貼到 issue 上，等你同意再動手，這樣你在看板上核准就好，不必守著終端機。",
        },
        {
          title: "讓心跳啟動工作",
          text: "在工作時間內，員工每 15、30 或 60 分鐘在同一個對話中醒來一次，接手下一個 issue；參見[如何讓 Claude Code 主動工作](/proactive-claude-code)。",
        },
        {
          title: "多位員工，一個儲存庫",
          text: "給每位員工各自的 [worktree](/blog/claude-code-worktree) 和職位。閱讀[什麼是 AI 員工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "在 Claude Code 中使用 plan mode" },
  mid: {
    title: "計畫已經核准了，下一個任務由誰接手？",
    text: "Crewmark 用職位、目標和 issue 看板，依心跳喚醒 Claude Code，使用的就是你已經在付費的方案。",
    button: "開始使用",
  },
  faq: {
    title: "Claude Code plan mode 常見問題",
    items: [
      {
        q: "Claude Code 的 plan mode 是什麼？",
        a: "一種權限模式：Claude 研究並寫出計畫，但不編輯你的原始碼。在你核准計畫之前，編輯會一直被擋下。",
      },
      {
        q: "plan mode 的快捷鍵是什麼？",
        a: "在終端機用 `Shift+Tab` 循環切換權限模式，狀態列顯示 `⏸ plan mode on` 時停下。也可以在提示詞開頭加上 `/plan`，或用 `claude --permission-mode plan` 啟動。",
      },
      {
        q: "plan mode 和 auto mode 有什麼不同？",
        a: "plan mode 只探索並提出方案，不做編輯。auto mode 直接做事，編輯檔案、執行指令，並在背景進行安全檢查。常見的流程是先規劃，再選 Yes, and use auto mode 核准。",
      },
      {
        q: "plan mode 和 accept edits 有什麼不同？",
        a: "accept edits 讓 Claude 不經詢問就修改檔案，你事後再檢查。plan mode 在你核准計畫前什麼都不改；核准後，你可以選擇自動接受編輯。",
      },
      {
        q: "如何在 VS Code 或桌面應用程式中使用 plan mode？",
        a: "在 VS Code 中，點選輸入框下方的模式指示器並選擇 Plan，或把 `claudeCode.initialPermissionMode` 設為 `plan`。在桌面應用程式中，在模式選擇器裡選擇它。",
      },
      {
        q: "Claude Code 的計畫儲存在哪裡？",
        a: "以檔案形式儲存在 `~/.claude/plans/`，除非你用 `plansDirectory` 設定指定了其他資料夾。按 `Ctrl+G` 可以在編輯器中修改目前的計畫。",
      },
      {
        q: "如何離開 plan mode？",
        a: "核准計畫，它會切換到你選擇的模式；或按 `Shift+Tab` 不核准直接離開。",
      },
    ],
  },
  cta: {
    title: "讓 Claude Code 自己規劃、動手，再接手下一個 issue。",
    text: "Crewmark 把 Claude Code、Codex 和 DeepSeek Harness 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 6 日對照 Claude Code 文件（permission modes 與 settings）查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 Anthropic 無關，也未獲其背書。Claude 和 Claude Code 是 Anthropic 的商標。",
};
