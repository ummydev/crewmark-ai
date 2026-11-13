import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /blog/claude-code-hooks; the English master is src/content/blog/claude-code-hooks.ts.

const docs = "https://code.claude.com/docs/en/hooks-guide";

const notify = `{
  "hooks": {
    "Notification": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "osascript -e 'display notification \\"Claude Code needs your attention\\" with title \\"Claude Code\\"'"
          }
        ]
      }
    ]
  }
}`;

const format = `{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          { "type": "command", "command": "jq -r '.tool_input.file_path' | xargs npx prettier --write" }
        ]
      }
    ]
  }
}`;

const block = `#!/bin/bash
# .claude/hooks/block-drop-table.sh，作為 Bash 的 PreToolUse hook 執行
INPUT=$(cat)
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command')

if echo "$COMMAND" | grep -q "drop table"; then
  echo "Blocked: dropping tables is not allowed" >&2  # 會成為給 Claude 的回饋
  exit 2                                               # 2 = 阻擋這個動作
fi

exit 0  # 不做決定：照一般權限流程處理`;

const stop = `{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "prompt",
            "prompt": "Check if all tasks are complete. If not, respond with {\\"ok\\": false, \\"reason\\": \\"what remains to be done\\"}."
          }
        ]
      }
    ]
  }
}`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code Hooks：事件、範例與運作方式 | Crewmark",
    description:
      "Claude Code hooks（掛鉤）完整說明：生命週期事件、hook 設定位置、結束代碼與 JSON 輸出，以及可直接複製的範例：桌面通知、自動格式化、阻擋指令和 Stop hook。",
  },
  breadcrumb: "Claude Code hooks 指南",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "部落格 · Claude Code",
    title: "Claude Code hooks：事件、範例與運作方式",
    lead: "Claude Code hooks（掛鉤）是在工作階段中固定時間點自動執行的指令：工具執行之前、檔案編輯之後、Claude 回覆結束時、需要你輸入時。CLAUDE.md 裡的指示 Claude 通常會遵守，而 hook 則每次都一定會執行，所以它是強制落實規則、自動處理瑣事的方法。本文介紹有哪些事件、hook 設定在哪裡、結束代碼和 JSON 如何決定接下來發生什麼、四個拿來就能用的範例，以及較新的 prompt、agent 和 HTTP 類型的 hook。",
    cta: "申請搶先體驗",
    secondary: "直接看範例",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "events",
      title: "Claude Code hook 事件",
      text: [
        "官方參考文件列出了 30 多個事件，下面是大多數 hook 會用到的幾個；`matcher` 可以把 hook 限定在特定的工具、檔案或來源上。",
      ],
      headers: ["事件", "觸發時機", "常見用途"],
      rows: [
        ["`SessionStart`", "工作階段開始或恢復時", "載入上下文、檢查環境"],
        ["`UserPromptSubmit`", "你送出提示詞後、Claude 看到之前", "補充上下文、阻擋敏感提示詞"],
        ["`PreToolUse`", "工具呼叫執行之前；可以阻擋它", "阻擋危險指令、保護檔案"],
        ["`PermissionRequest`", "工具呼叫需要權限決定時", "自動核准或拒絕特定請求"],
        ["`PostToolUse`", "工具呼叫成功之後", "對編輯過的檔案做格式化、lint 或測試"],
        ["`Notification`", "Claude Code 發出通知時", "Claude 需要你時跳出桌面提醒"],
        ["`SubagentStart`, `SubagentStop`", "subagent 啟動或結束時", "記錄或檢查委派出去的工作"],
        ["`Stop`", "Claude 回覆結束時", "檢查任務是否真的完成"],
        ["`PreCompact`, `PostCompact`", "上下文壓縮前後", "保存或重新注入關鍵上下文"],
        ["`FileChanged`, `CwdChanged`", "受監看的檔案或工作目錄變動時", "重新載入環境、重新格式化檔案"],
        ["`SessionEnd`", "工作階段結束時", "清理、寫入記錄"],
      ],
    },
    {
      kind: "table",
      title: "hook 要放在哪裡",
      headers: ["位置", "作用範圍", "是否共用"],
      rows: [
        ["`~/.claude/settings.json`", "你的所有專案", "否"],
        ["`.claude/settings.json`", "單一專案", "是，提交到儲存庫"],
        ["`.claude/settings.local.json`", "單一專案", "否，已被 gitignore"],
        ["受管政策設定（managed policy settings）", "整個組織", "由管理員控管"],
        ["外掛的 `hooks/hooks.json`", "外掛啟用期間", "是，隨外掛發佈"],
        ["skill 或 subagent 的 frontmatter", "skill 被呼叫後，或 subagent 執行期間", "是，寫在檔案裡"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code hook 範例，一步一步來",
      text: [
        "把每段設定放到設定檔的 `hooks` 鍵下；如果檔案裡已經有 `hooks` 物件，就把事件當作同層的鍵加進去，不要整個取代。執行 `/hooks` 確認 Claude Code 已經載入。你也可以直接請 Claude 幫你寫 hook。",
      ],
      steps: [
        {
          title: "Claude 需要你時收到桌面通知",
          text: "在 `~/.claude/settings.json` 加入一個 `Notification` hook。這裡在 macOS 上用的是 `osascript`；Linux 上用 `notify-send`，Windows 上用 PowerShell。",
          code: notify,
        },
        {
          title: "自動格式化 Claude 編輯的每個檔案",
          text: "一個比對 `Edit|Write` 的 `PostToolUse` hook，用 `jq` 從 stdin 的 JSON 讀出被編輯檔案的路徑，再對它執行 Prettier。把它放進 `.claude/settings.json`，整個團隊就都能共用。",
          code: format,
        },
        {
          title: "阻擋危險指令",
          text: "一個針對 `Bash` 的 `PreToolUse` hook 會執行這支腳本。結束代碼 2 會阻擋這次呼叫，寫到 stderr 的內容會成為給 Claude 的回饋，讓它調整方向。結束代碼 0 表示不做決定，照一般權限流程處理。",
          code: block,
        },
        {
          title: "讓 Claude 持續工作到任務完成",
          text: "一個 `prompt` 類型的 `Stop` hook 會問模型是否全部完成。如果回答是 `ok: false`，Claude 會把 `reason` 當作下一個指示繼續工作。這就是經典的 Stop hook 範例。",
          code: stop,
        },
      ],
      source: { label: "來源：Claude Code 文件，Automate actions with hooks", href: docs },
    },
    {
      kind: "text",
      title: "hook 如何決定接下來發生什麼",
      points: [
        "輸入：每個 hook 都會從 stdin 收到 JSON 格式的事件，例如工具名稱和 `tool_input`、工作階段 ID 以及 `cwd`。",
        "結束代碼 0：沒有異議。對少數事件（例如 `SessionStart` 和 `UserPromptSubmit`），一般的 stdout 會加入 Claude 的上下文。",
        "結束代碼 2：在事件允許的情況下阻擋。stderr 會依事件不同，回傳給 Claude 或顯示給你。",
        "stdout 輸出 JSON：更精細的控制，例如帶有權限決定的 `hookSpecificOutput`、用來改寫工具輸入的 `updatedInput`，或 `additionalContext`。",
        "其他結束代碼：通常視為不阻擋的錯誤，除非 hook 設定了 `onFailure: \"block\"`。",
        "同一事件下比對到的多個 hook 會平行執行。",
      ],
    },
    {
      kind: "table",
      title: "command、prompt、agent 和 HTTP 類型的 hook",
      headers: ["類型", "執行什麼", "預設逾時"],
      rows: [
        ["`command`", "一道 shell 指令", "10 分鐘"],
        ["`http`", "把事件 JSON 以 POST 送到一個 URL；回應內容的作用和指令輸出相同", "10 分鐘"],
        ["`mcp_tool`", "已設定的 MCP 伺服器上的一個工具", "10 分鐘"],
        ["`prompt`", "一次模型呼叫，回答 `ok` 與否", "30 秒"],
        ["`agent`", "一個能先讀檔案、執行工具再做決定的 subagent（實驗性）", "60 秒"],
      ],
    },
    {
      kind: "text",
      title: "hook、skill 與 CLAUDE.md 的差異，以及其他注意事項",
      points: [
        "CLAUDE.md 和 [skill](/blog/claude-code-skills) 是 Claude 通常會遵守的指示；hook 則每次都會執行。任何絕不能跳過的事情都應該放進 hook。",
        "`PostToolUse` 無法撤銷已經執行的動作；要阻止它，請用 `PreToolUse`。",
        "`Stop` 在 Claude 每次結束回覆時都會觸發，不只是在任務結束時，而且使用者中斷時不會觸發。",
        "hook 本身不能執行斜線指令，也不能呼叫工具；它們只能透過結束代碼、stdout、stderr 或 JSON 回傳資訊。",
        "`\"disableAllHooks\": true` 會關閉 hook；但受管 hook 仍會執行，除非受管設定也把它們關掉。",
        "hook 只作用於你本機的 Claude Code 環境。涵蓋所有 Claude 產品的組織層級檢查是另一項功能：[Claude inference hooks](/blog/claude-inference-hooks)。",
        "用 PreToolUse hook 過濾測試輸出，也是[減少 token 用量](/blog/reduce-claude-code-token-usage)最有效的方法之一。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "hook 讓 Claude Code 守規矩，Crewmark 讓它持續工作。",
      text: [
        "hook 是讓無人看管的 agent 變得安全的關鍵：格式化、測試和防護規則每次都會執行。Crewmark 把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 工作階段變成有職位、目標和工作時間的 AI 員工，並依心跳喚醒它，從看板上接手下一個 issue，同時載入你專案裡的 hook。",
      ],
      steps: [
        {
          title: "把 hook 提交到儲存庫",
          text: "`.claude/settings.json` 裡的 hook 會像在你的工作階段中一樣，在員工的工作階段中載入，所以它的編輯會被格式化，有風險的指令會被阻擋。",
        },
        {
          title: "讓心跳啟動工作",
          text: "在工作時間內，員工每 15、30 或 60 分鐘在同一個對話中醒來一次；參見[如何讓 Claude Code 主動工作](/proactive-claude-code)。",
        },
        {
          title: "只回答需要你的問題",
          text: "它會在自己的 issue 下留言，需要你拍板時傳訊息給你。閱讀[什麼是 AI 員工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "為 Claude Code 加入 hook" },
  mid: {
    title: "你的 hook 每次都會執行，你的 agent 呢？",
    text: "Crewmark 用職位、目標和 issue 看板，依心跳喚醒 Claude Code，使用的就是你已經在付費的方案。",
    button: "申請搶先體驗",
  },
  faq: {
    title: "Claude Code hooks 常見問題",
    items: [
      {
        q: "Claude Code hooks 是什麼？",
        a: "由使用者定義的指令、HTTP 呼叫或模型檢查，Claude Code 會在生命週期事件發生時自動執行它們，例如工具執行之前或 Claude 回覆結束時。它們提供確定性的控制，而不是指望 Claude 記得某個指示。",
      },
      {
        q: "Claude Code hooks 要在哪裡設定？",
        a: "寫在 `~/.claude/settings.json`（所有專案）、`.claude/settings.json`（與團隊共用）或 `.claude/settings.local.json`（只有你自己）的 `hooks` 下。外掛、skill 和 subagent 也可以自帶 hook。執行 `/hooks` 查看已載入的內容。",
      },
      {
        q: "怎樣用 hook 阻擋一道指令？",
        a: "用一個比對 `Bash` 的 `PreToolUse` hook。從 stdin 的 JSON 讀出指令，要阻擋時以結束代碼 2 結束，並在 stderr 寫明原因；Claude 會看到原因並做出調整。",
      },
      {
        q: "Stop hook 是什麼？",
        a: "掛在 `Stop` 事件上的 hook，在 Claude 回覆結束時觸發。prompt 類型的 Stop hook 可以檢查任務是否完成，如果沒有，就附上原因讓 Claude 回去繼續工作。",
      },
      {
        q: "hook 和 skill 有什麼不同？",
        a: "skill 是 Claude 在相關時載入、通常會遵守的指示和檔案。hook 是每次事件觸發時 Claude Code 都會執行的程式碼，不論 Claude 怎麼決定。",
      },
      {
        q: "為什麼我的 hook 沒有觸發？",
        a: "檢查它是否出現在 `/hooks` 裡、事件名稱和 matcher 是否拼寫完全正確、腳本是否有執行權限，以及 shell 設定檔的輸出有沒有破壞它的 JSON。用除錯記錄啟動 Claude Code，就能看到每個 hook 做了什麼。",
      },
      {
        q: "Claude Code hooks 和 inference hooks 是同一個東西嗎？",
        a: "不是。Claude Code hooks 在你的電腦上為你的工作階段執行。inference hooks 是 Claude Enterprise 的功能，會在 Claude 執行之前把組織內的每則提示詞送到安全伺服器。",
      },
    ],
  },
  cta: {
    title: "防護規則交給 hook，工作交給看板。",
    text: "Crewmark 把 Claude Code、Codex 和 DeepSeek Harness 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "申請搶先體驗",
  },
  checked: "已於 2026 年 11 月 6 日對照 Claude Code 文件（hooks 指南與 hooks 參考）查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 Anthropic 無關，也未獲其背書。Claude 和 Claude Code 是 Anthropic 的商標。",
};
