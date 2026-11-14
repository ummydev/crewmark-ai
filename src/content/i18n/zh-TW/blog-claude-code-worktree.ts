import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese (Taiwan) translation of /blog/claude-code-worktree; the English master is src/content/blog/claude-code-worktree.ts.

const docs = "https://code.claude.com/docs/en/worktrees";

const start = `# 兩個互相隔離的工作階段，各開一個終端機
claude --worktree feature-auth
claude --worktree fix-flaky-test

# 從 1234 號 pull request 建立 worktree（# 要加引號）
claude --worktree "#1234"

# 不讓 worktree 出現在 git status 裡
echo ".claude/worktrees/" >> .gitignore`;

const settings = `{
  "worktree": {
    "baseRef": "head",
    "symlinkDirectories": ["node_modules"],
    "sparsePaths": [".claude", "packages/web"]
  }
}`;

const manual = `git worktree add ../app-feature-a -b feature-a
cd ../app-feature-a && claude
git worktree list
git worktree remove ../app-feature-a`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code worktree 指南：--worktree、工作流程、清理與設定",
    description:
      "git worktree 在 Claude Code 裡如何運作：claude --worktree 用法、worktree 放在哪裡、從哪個分支建立、用 .worktreeinclude 帶上 .env 檔案、清理、subagent 隔離以及相關設定。",
  },
  breadcrumb: "Claude Code worktree 指南",
  parent: { name: "部落格", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "部落格 · Claude Code",
    title: "Claude Code worktree：平行執行多個工作階段，互不衝突",
    lead: "Claude Code worktree 是一個獨立的 git 工作目錄，有自己的檔案和分支，但與你的儲存庫共用歷史。用 `claude --worktree <name>` 啟動工作階段，Claude 就會在 worktree 裡修改程式碼，而不是在你簽出的目錄裡改，這樣兩三個工作階段可以同時進行，互不碰到對方的檔案。本文說明這個參數、worktree 放在哪裡、從哪個分支建立、怎樣把 `.env` 檔案帶進去、清理、subagent，以及相關設定。",
    cta: "開始使用",
    secondary: "跳到工作流程",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Claude Code worktree 是什麼",
      text: [
        "git 支援 worktree 已經很多年了：`git worktree add` 會把一個分支簽出到第二個目錄，背後用的是同一份 `.git` 資料。Claude Code 在此基礎上更進一步：加上 `--worktree`（或 `-w`），它會替你建立 worktree、在裡面啟動工作階段、擋下會落到主要簽出目錄的修改，並在你結束時提示清理。",
        "worktree 只隔離檔案，其他一概不管。想在一個對話裡把任務分給多個 worker，用 subagent；各種做法的比較見[多個 Claude Code 代理](/blog/multiple-claude-code-agents)。",
      ],
      points: [
        "預設位置：儲存庫根目錄下的 `.claude/worktrees/<name>/`。",
        "預設分支名稱：`worktree-<name>`。不給名稱的話，Claude Code 會自動取一個，例如 `bright-running-fox`。",
        "與簽出目錄共用的：`.git` 目錄（所以提交和分支在哪裡都看得到）、專案範圍的外掛，以及「不再詢問」的權限核准。",
        "不共用的：所有被 gitignore 的內容，例如 `.env`、`node_modules` 和建置產出。worktree 是一份全新的簽出。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "worktree 工作流程，一步一步來",
      steps: [
        {
          title: "忽略 worktree 資料夾",
          text: "把 `.claude/worktrees/` 加進 `.gitignore`，這樣 worktree 裡的檔案不會在主要簽出目錄中顯示為未追蹤。如果你從沒在這個儲存庫裡執行過 Claude，先執行一次 `claude`，接受工作區信任提示；在那之前，互動式的 `--worktree` 會直接結束。",
        },
        {
          title: "每個任務開一個工作階段",
          text: "每個任務在一個終端機裡執行 `claude --worktree <name>`。用既有的名稱再次執行，會重新開啟那個 worktree，而不是新建一個。你也可以在工作階段中途請 Claude「work in a worktree」，它會用 `EnterWorktree` 工具把自己移進一個 worktree。",
          code: start,
        },
        {
          title: "把未追蹤的檔案帶過去",
          text: "在儲存庫根目錄建立 `.worktreeinclude` 檔案，用 `.gitignore` 語法列出專案需要的被忽略檔案，例如 `.env` 和 `.env.local`。Claude Code 會把符合的檔案複製到它建立的每個 worktree，包括 subagent 和桌面應用程式的 worktree。接著在 worktree 裡安裝相依套件，或在設定裡處理好：下面的例子從你目前的工作建立分支，重複使用同一份 `node_modules`，而且只簽出 web 套件。",
          code: settings,
        },
        {
          title: "讓工作階段去做事",
          text: "工作階段處於隔離狀態時，Claude Code 會拒絕指向主要簽出目錄的檔案編輯、工作目錄在主要簽出目錄的指令，以及被導向主要簽出目錄的 git 指令（`git -C`、`--git-dir`、`GIT_DIR`）。它不會追蹤 `cp` 這類一般 shell 指令寫了什麼，所以權限和沙盒依然重要。",
        },
        {
          title: "像一般分支一樣審查和合併",
          text: "每個 worktree 都是一個一般的分支。在裡面提交、推送、開 pull request，像審查隊友的程式碼一樣審查它。所有 worktree 共用 `.git`，所以主要簽出目錄裡馬上就看得到這個分支。",
        },
        {
          title: "結束並清理",
          text: "結束時，Claude Code 會檢查 worktree。未命名工作階段的 worktree 如果是乾淨的，會連同分支自動刪除；已命名的工作階段則會先詢問。如果有變更、未追蹤的檔案或新提交，它會問你要保留還是刪除這個 worktree，並印出一行 `claude --worktree <name> --resume` 指令，方便之後回來繼續。",
        },
      ],
      source: { label: "來源：Claude Code 文件，Run parallel sessions with worktrees", href: docs },
    },
    {
      kind: "table",
      title: "Claude Code 的 worktree 設定",
      text: [
        "以下設定都寫在設定檔（`~/.claude/settings.json`、`.claude/settings.json` 或 `.claude/settings.local.json`）的 `worktree` 底下。",
      ],
      headers: ["設定", "作用", "預設值"],
      rows: [
        ["`worktree.baseRef`", "`\"fresh\"` 從遠端預設分支（`origin/main`）建立分支；`\"head\"` 從本機 HEAD 建立，包括尚未推送的提交", "`\"fresh\"`"],
        ["`worktree.symlinkDirectories`", "從主要簽出目錄以符號連結引入 `node_modules` 等目錄，而不是複製一份", "無"],
        ["`worktree.sparsePaths`", "用 sparse-checkout 只簽出列出的目錄（以及根目錄下的檔案）；記得包含 `.claude`", "整個目錄樹"],
        ["`worktree.bgIsolation`", "`\"worktree\"` 讓背景工作階段只能在 worktree 裡編輯；`\"none\"` 允許它們編輯工作副本", "`\"worktree\"`"],
        ["worktree 位置（桌面應用程式）", "在 Settings > Code 裡為本機工作階段設定自訂資料夾；SSH 連線有各自的設定", "`.claude/worktrees/`"],
        ["`.worktreeinclude`（檔案，不是設定項目）", "把符合的被忽略檔案複製到每個新 worktree", "無"],
      ],
    },
    {
      kind: "table",
      title: "Claude Code worktree、切換分支與 git worktree 比較",
      headers: ["", "切換分支", "`git worktree add` + `claude`", "`claude --worktree`"],
      rows: [
        ["磁碟上各有一份檔案", "否：一個目錄，同一時間只有一個分支", "是", "是"],
        ["同時執行多個工作階段", "否：會互相覆蓋", "是", "是"],
        ["放在哪裡", "你的簽出目錄", "任何你選的位置", "`.claude/worktrees/<name>/`，或 hook 指定的路徑"],
        ["從哪裡開始", "你切換到的分支", "任何既有或新建的分支", "`origin/<default>`、你的 HEAD 或某個 PR"],
        ["複製 `.env`", "不需要", "否", "是，透過 `.worktreeinclude`"],
        ["擋下外部編輯", "否", "否", "是"],
        ["清理", "無", "`git worktree remove`", "結束時提示"],
      ],
    },
    {
      kind: "steps",
      id: "git-worktree",
      title: "用 git worktree 手動操作",
      text: [
        "想用某個既有的分支，或把資料夾放在儲存庫之外，就用原生 git；`worktree.baseRef` 無法指定分支名稱。Claude Code 依然會和這些 worktree 共用外掛與權限核准。",
      ],
      steps: [
        {
          title: "建立 worktree、啟動 Claude，用完刪除",
          text: "把 `feature-a` 換成新分支名稱；如果要簽出既有的分支，拿掉 `-b` 即可。",
          code: manual,
        },
      ],
    },
    {
      kind: "text",
      title: "在 worktree 裡執行 subagent 和背景工作階段",
      points: [
        "請 Claude「use worktrees for your agents」，或在 `.claude/agents/` 裡自訂 subagent 的 frontmatter 中加上 `isolation: worktree`，每個 subagent 就會在各自的暫時 worktree 裡編輯。",
        "沒有變更的 subagent worktree 會在 subagent 結束時刪除。有變更的會一直保留，直到 `cleanupPeriodDays` 之後，定期清理能在不遺失工作的前提下把它刪掉。",
        "背景工作階段（`claude --bg`）預設只能在 worktree 裡編輯；可以用 `claude --bg --worktree` 啟動，或把 `worktree.bgIsolation` 設為 `\"none\"`。",
        "在桌面應用程式裡，開始工作階段前先打開輸入框下方的 Worktree 開關。",
      ],
    },
    {
      kind: "text",
      title: "worktree 清理與常見問題",
      points: [
        "`claude -p --worktree` 執行時沒有結束提示，所以會留下 worktree。用 `git worktree remove` 刪除；如果 git 顯示已鎖定，先執行 `git worktree unlock`。",
        "`Can only use --worktree in a git repository`：執行 `git init` 並做第一次提交，或為 SVN、Perforce 或 Mercurial 設定 `WorktreeCreate` hook。",
        "如果 Git LFS 是用 `--local` 安裝的，LFS 檔案會顯示為指標檔：在 worktree 裡執行 `git lfs pull`。",
        "當 `.claude` 或 `.claude/worktrees` 是符號連結時，Claude Code 不會建立 worktree。",
        "hook 裡的 `${CLAUDE_PROJECT_DIR}` 一律指向主要簽出目錄；要取得 worktree 路徑，請讀取 hook 輸入中的 `cwd` 欄位。",
        "基準為 `\"fresh\"` 且沒有自己的提交、或 PR 已經合併的 worktree，依名稱重新開啟時會重設到預設分支。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "worktree 讓工作階段互不干擾，Crewmark 讓它們一直有事做。",
      text: [
        "worktree 解決了衝突問題，但每個工作階段仍然要等你輸入才會動。Crewmark 把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 工作階段變成有職位、目標和工作時間的 AI 員工，並依心跳喚醒它，從看板上接手下一個 issue。",
      ],
      steps: [
        {
          title: "每個 worktree 一位員工",
          text: "給每位員工各自的 worktree 和職位，例如同一個儲存庫裡的一位程式設計師和一位審查者，就像[多個 Claude Code 代理](/blog/multiple-claude-code-agents)裡那樣。",
        },
        {
          title: "讓心跳啟動工作",
          text: "在工作時間內，每位員工每 15、30 或 60 分鐘在同一個對話中醒來一次；參見[如何讓 Claude Code 主動工作](/proactive-claude-code)。",
        },
        {
          title: "指派 issue，審查分支",
          text: "把工作放到看板上，每位員工接手一個 issue，在自己的分支上提交，需要你拍板時傳訊息給你。閱讀[什麼是 AI 員工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "在 git worktree 裡平行執行 Claude Code 工作階段" },
  mid: {
    title: "三個 worktree，三個工作階段，誰來告訴它們下一步做什麼？",
    text: "Crewmark 用職位、目標和 issue 看板，依心跳喚醒每個 Claude Code 工作階段，使用的就是你已經在付費的方案。",
    button: "開始使用",
  },
  faq: {
    title: "Claude Code worktree 常見問題",
    items: [
      {
        q: "Claude Code 裡的 worktree 是什麼？",
        a: "一個獨立的 git 工作目錄，有自己的檔案和分支，與你的儲存庫共用歷史。`claude --worktree <name>` 會建立一個 worktree 並在裡面執行工作階段，這樣平行的工作階段不會編輯同一批檔案。",
      },
      {
        q: "Claude Code 把 worktree 放在哪裡？",
        a: "放在儲存庫根目錄下的 `.claude/worktrees/<name>/`，分支名稱為 `worktree-<name>`。桌面應用程式可以在 Settings 裡另選資料夾，`WorktreeCreate` hook 則可以把它們放到任何地方。",
      },
      {
        q: "Claude Code worktree 從哪個分支建立？",
        a: "預設從遠端預設分支建立，通常是 `origin/main`。把 `worktree.baseRef` 設為 `\"head\"` 可以從本機 HEAD 建立，傳入 `\"#1234\"` 可以從某個 pull request 開始；其他分支則用 `git worktree add` 建立 worktree。",
      },
      {
        q: "為什麼 worktree 裡沒有我的 .env 檔案？",
        a: "worktree 是一份全新的簽出，被 gitignore 的檔案不在裡面。在儲存庫根目錄的 `.worktreeinclude` 檔案裡列出它們，Claude Code 就會把它們複製到每個新 worktree。",
      },
      {
        q: "怎麼清理 Claude Code 的 worktree？",
        a: "結束工作階段時會提示刪除它的 worktree，未命名且乾淨的會自動刪除。`-p` 執行留下的 worktree 不會自動清理：用 `git worktree list` 列出，再用 `git worktree remove` 刪除。",
      },
      {
        q: "worktree 和分支有什麼不同？",
        a: "分支是一串提交；worktree 是簽出某個分支的目錄。切換分支會改變你唯一那個目錄裡的檔案，而 worktree 讓每個分支都有自己的目錄，所以多個工作階段可以同時執行。",
      },
      {
        q: "subagent 能用 worktree 嗎？",
        a: "可以。請 Claude 為它的代理使用 worktree，或在自訂 subagent 的 frontmatter 裡加上 `isolation: worktree`。每個 subagent 都會得到一個暫時的 worktree，如果沒有變更就會被刪除。",
      },
    ],
  },
  cta: {
    title: "給每個 worktree 配一位知道下一步該做什麼的員工。",
    text: "Crewmark 把 Claude Code、Codex 和 DeepSeek Harness 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 6 日對照 Claude Code 文件（worktrees、設定、CLI 參考與桌面應用程式）查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 Anthropic 無關，也未獲其背書。Claude 和 Claude Code 是 Anthropic 的商標。",
};
