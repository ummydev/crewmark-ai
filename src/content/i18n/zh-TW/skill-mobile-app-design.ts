import type { GuideCopy } from "@/components/landing/guide-article";

// Traditional Chinese translation of /skills/mobile-app-design; the English master is src/content/skill-pages/mobile-app-design.ts.

const expo = "https://github.com/expo/skills";

const install = `# Expo 官方 skill（Claude Code 外掛）
/plugin install expo@claude-plugins-official

# Vercel 的 React Native 規則
npx skills add vercel-labs/agent-skills --skill vercel-react-native-skills

# SwiftUI Pro（Paul Hudson）
npx skills add https://github.com/twostraws/swiftui-agent-skill --skill swiftui-pro

# SwiftUI Expert（Antoine van der Lee）
/plugin marketplace add AvdLee/SwiftUI-Agent-Skill
/plugin install swiftui-expert@swiftui-expert-skill

# Flutter 團隊的 skill
npx skills add flutter/agent-plugins

# 適用於任何框架的 Apple 設計審查
npx skills add dickwu/apple-design-skill

# 適用於 React Native 和 Expo 的 Mobile Taste Skill
/plugin marketplace add draftbit/mobile-taste-skill
/plugin install mobile-taste-skill`;

export const copy: GuideCopy = {
  meta: {
    title: "最好用的 Claude 行動 App Skills：設計與開發（2026）",
    description:
      "2026 年最好用的行動 App Claude Code skill，依平台分類：React Native 用 Expo 和 Vercel，iOS 用 SwiftUI Pro 和 SwiftUI Expert，還有 Flutter 團隊的 skill、Apple 設計審查等，附安裝指令。",
  },
  breadcrumb: "行動 App skill",
  parent: { name: "Claude Skills", href: "/skills" },
  hero: {
    kicker: "Claude Skills · 行動 App",
    title: "最好用的行動 App 設計與開發 Claude skill",
    lead: "行動 skill 是一個 SKILL.md 檔案，教 Claude Code（以及 Codex、Cursor 等 agent）怎麼為手機開發：平台的設計規範、模型訓練之後才改變的 API，以及 agent 在 SwiftUI、React Native 或 Flutter 裡常犯的錯誤。大多數 skill 只針對一個平台，所以依你要上架的平台來選。以下是 2026 年值得安裝的行動 skill，依平台分組，資訊都來自各專案自己的儲存庫。",
    cta: "開始使用",
    secondary: "比較這些 skill",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "快速推薦",
      points: [
        "React Native 和 Expo：用 Expo 官方 skill 來建構和上架，用 Vercel 的 react-native-skills 或 Callstack 的 skill 調校效能，用 Mobile Taste Skill 做出不像 AI 做的畫面。",
        "SwiftUI 和 iOS：想寫現代、具無障礙設計的 SwiftUI，用 Paul Hudson 的 SwiftUI Pro；處理狀態和效能，用 Antoine van der Lee 的 SwiftUI Expert；從構想一路做到上架 App Store，用 Claude Code Apple Skills。",
        "Flutter：Flutter 團隊自己的 skill，涵蓋架構、版面配置、路由和測試。",
        "適用於任何框架的設計：Apple Design Skill 對照 Apple 的人機介面指南（HIG）審查設計，支援 SwiftUI、Flutter、React Native 等；UI UX Pro Max 負責挑選風格、配色和字型。",
        "送審之前：App Store Review 會對照 App Store 和 Google Play 的規則檢查專案。",
        "想讓網頁應用程式用起來像 App：Emil Kowalski 的 mobile-native 會修好那些在手機上露出破綻的 CSS 和 meta 標籤。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "行動 App skill 比較",
      text: [
        "Star 數和授權來自 2026 年 11 月 8 日的 GitHub API，已取整數。包含多個 skill 的儲存庫，Star 數以整個儲存庫計算。",
      ],
      headers: ["Skill", "平台", "最適合", "Star", "授權"],
      rows: [
        ["[UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)", "網頁、行動裝置、桌面", "風格、配色、字型搭配和 UX 規則", "~147k", "MIT"],
        ["[mobile-native](https://github.com/emilkowalski/skills/tree/main/skills/mobile-native)（Emil Kowalski）", "行動網頁、PWA", "讓網頁應用程式在手機上用起來像原生 App", "~54k（整個儲存庫）", "MIT"],
        ["[react-native-skills](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-native-skills)（Vercel）", "React Native、Expo", "清單、動畫、導覽和 UI 的效能規則", "~34k（整個儲存庫）", "MIT（依 README）"],
        ["[SwiftUI Pro](https://github.com/twostraws/SwiftUI-Agent-Skill)（Paul Hudson）", "SwiftUI、iOS 26+", "修正 LLM 在 SwiftUI 裡常犯的錯誤；無障礙設計", "~6.5k", "MIT"],
        ["[Expo skills](https://github.com/expo/skills)（Expo）", "React Native、Expo", "建構、設計和上架 Expo App：路由、原生 UI、動畫、EAS", "~4.1k", "MIT"],
        ["[SwiftUI Expert](https://github.com/AvdLee/SwiftUI-Agent-Skill)（Antoine van der Lee）", "SwiftUI、iOS、macOS", "狀態、效能、導覽和 Liquid Glass；Instruments trace 工具", "~3.9k", "MIT"],
        ["[Flutter agent plugins](https://github.com/flutter/agent-plugins)（Flutter 團隊）", "Flutter", "架構、響應式版面、版面修正、路由、測試、在地化", "~3.2k", "BSD 3-Clause"],
        ["[Apple Design Skill](https://github.com/dickwu/apple-design-skill)", "SwiftUI、UIKit、Flutter、React Native、Tauri、Electron", "對照 123 頁 Apple 設計指南審查設計", "~3k", "未註明"],
        ["[agent-skills](https://github.com/callstackincubator/agent-skills)（Callstack）", "React Native", "效能、導覽、升級、遷移和在裝置上測試", "~1.7k", "MIT"],
        ["[Claude Code Apple Skills](https://github.com/rshankras/claude-code-apple-skills)", "iOS、macOS、watchOS、visionOS", "從構想到 App Store 的 165 個 skill，其中 8 個與設計相關", "~870", "MIT"],
        ["[Sleek](https://github.com/sleekdotdesign/agent-skills)", "React Native、HTML", "先由 Sleek 的 AI 服務設計畫面，再用程式碼實作", "~600", "MIT"],
        ["[Mobile App UI Design](https://github.com/ceorkm/mobile-app-ui-design)", "任何平台（用 React 和 Tailwind 做線框圖）", "來自知名 App 的設計規則：顏色、8 點網格、拇指操作區", "~500", "未註明"],
        ["[Apple Skills](https://github.com/Prisma-Labs-Dev/apple-skills)（Prisma Labs）", "iOS 26+", "最新的 Apple API：SwiftUI、UIKit、HIG、Liquid Glass、StoreKit", "~360", "MIT"],
        ["[App Store Review](https://github.com/devsemih/appstore-review-skill)", "任何平台", "送審前對照 App Store 和 Google Play 的規則檢查 App", "~100", "MIT"],
        ["[Mobile Taste Skill](https://github.com/draftbit/mobile-taste-skill)（Draftbit）", "React Native、Expo", "不像 AI 產生的畫面、導覽和設計系統", "~10", "見儲存庫"],
      ],
    },
    {
      kind: "text",
      id: "installs",
      title: "安裝次數最多的行動 skill",
      text: [
        "以下是透過 skills CLI 的安裝次數，資料來自 2026 年 11 月 8 日的 skills.sh 登錄表。用 `/plugin install` 安裝的外掛大多不會算進這裡，所以這些數字只是下限。",
      ],
      points: [
        "ui-ux-pro-max（網頁和行動裝置）：約 44 萬",
        "vercel-react-native-skills：約 27 萬",
        "mobile-native（Emil Kowalski）：約 11.6 萬",
        "expo-dev-client（Expo 的 skill 中安裝次數最多的）：約 7.4 萬",
        "flutter-apply-architecture-best-practices（Flutter 團隊的 skill 中安裝次數最多的）：約 4.5 萬",
        "swiftui-pro（Paul Hudson）：約 3.7 萬",
        "swiftui-expert-skill（Antoine van der Lee）：約 3.6 萬",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "如何設定 Claude Code 來開發行動 App",
      steps: [
        {
          title: "依平台挑選：一個負責建構，一個負責設計",
          text: "Expo 用 Expo 的 skill 加 Mobile Taste Skill；SwiftUI 用 SwiftUI Pro 或 SwiftUI Expert，加 Apple Design Skill；Flutter 用 Flutter 團隊的 skill，加 Apple Design Skill 或 UI UX Pro Max。兩個都想決定風格的 skill 會互相打架。",
          code: install,
        },
        {
          title: "提供需求和一個參考 App",
          text: "說明 App 給誰用、最重要的三四個畫面，再舉一個你喜歡它那種感覺的 App。Mobile Taste Skill 會讓 agent 先確立對這個 App 的判斷（類型、使用者、感覺），規劃好導覽，然後才寫程式碼。",
        },
        {
          title: "在模擬器上檢查，而不是看程式碼",
          text: "在 iOS Simulator、Android 模擬器或 Expo Go 裡執行 App，用不只一種螢幕尺寸查看真實畫面。Callstack 的 agent-device skill 能讓 agent 操作裝置，自己檢查自己的成果。",
        },
        {
          title: "把設計系統存進儲存庫",
          text: "Mobile Taste Skill 會寫一份 MOBILE-DESIGN.md，Expo 也有一個 expo-design-system skill。把成果留在儲存庫裡，之後的工作階段和其他 agent 就會沿用同樣的顏色、字型和間距。參見 [CLAUDE.md 指南](/blog/claude-md)。",
        },
      ],
      source: { label: "來源：Expo 的 agent skill", href: expo },
    },
    {
      kind: "text",
      title: "安裝前需要知道的事",
      points: [
        "Sleek 真正用起來需要付費帳號：根據它的 skill 說明，免費帳號的試用點數大約只夠跑一次設計，Pro 方案每月 69 美元。每一份需求都會送到 sleek.design。",
        "Expo 的 EAS skill 會用到 Expo 託管的建構和更新服務，而且每個 Expo skill 都會讓 agent 透過 Expo 的 agent CLI 送出意見回饋。",
        "SwiftUI Expert 的 trace 工具需要 Xcode 的 xctrace 和 Python 3；它們在你的電腦上錄製和分析 Instruments trace。",
        "Claude Code Apple Skills 跟著 main 分支更新，沒有固定版本；它自己的免責聲明也說，這些 skill 是在 Claude Code 協助下寫成的，可能有不準確之處。",
        "Emil Kowalski 的 mobile-native 針對的是手機上的網頁應用程式和 PWA，不適用於原生 App。",
        "這些 skill 都不是 Apple 或 Google 出品的，App Store Review 也無法保證通過審核。登錄表裡還列出 Sleek 的 design-mobile-apps，約 130 萬次安裝，但所在儲存庫 Star 很少；我們無法核實這個數字，所以沒有放進上面的列表。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "使用 Crewmark",
      title: "幫這些 skill 配一位每天上班的 App 設計師",
      text: [
        "一個 skill 能讓一個工作階段更擅長行動開發。Crewmark 把 Claude Code 或 Codex 變成一位 AI App 設計師：有目標（例如每週打磨好三個畫面）、有工作時間，還有一塊待修畫面的看板；它依心跳醒來，提交附上模擬器截圖的 Pull Request。",
      ],
      steps: [
        {
          title: "聘用 App 設計師職位",
          text: "職位說明、目標和日常流程都已設定好；參見 [AI App 設計師](/ai-employees/app-designer) 和 [AI 軟體工程師](/ai-employees/software-engineer)。",
        },
        {
          title: "把行動 skill 裝進儲存庫",
          text: "員工會像任何工作階段一樣，使用 `.claude/skills` 裡的 skill。網頁和 UI 方面的工作，參見[最好用的網站設計 Claude skill](/skills/website-design)。",
        },
        {
          title: "審查 Pull Request，而不是寫提示詞",
          text: "核准你喜歡的畫面；要修改的地方在看板上提出。閱讀[什麼是 AI 員工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "用 skill 設定 Claude Code 來開發行動 App" },
  mid: {
    title: "想要一位每天執行這些 skill 的 App 設計師？",
    text: "Crewmark 的 AI App 設計師依心跳在你的程式碼裡工作，提交附上截圖的 Pull Request。",
    button: "開始使用",
  },
  faq: {
    title: "Claude 行動 App skill 常見問題",
    items: [
      {
        q: "做行動 App 設計，最好用的 Claude skill 是哪一個？",
        a: "看平台。React Native 和 Expo 用 Mobile Taste Skill 加 Expo 自己的 skill；SwiftUI 用 SwiftUI Pro 或 SwiftUI Expert 加 Apple Design Skill；任何框架的視覺部分，都可以用 Apple Design Skill 或 UI UX Pro Max。",
      },
      {
        q: "有官方的 React Native 或 Expo Claude skill 嗎？",
        a: "Expo 發布了 expo/skills，也在 claude-plugins-official 裡以外掛形式提供；Vercel 和 Callstack 也發布了 React Native skill。它們都不是 Anthropic 出品的。",
      },
      {
        q: "SwiftUI 和 iOS 開發，最好用的 Claude Code skill 是哪一個？",
        a: "Paul Hudson 的 SwiftUI Pro 針對 iOS 26 和 Swift 6.4，專門修正 LLM 在 SwiftUI 裡常犯的錯誤；Antoine van der Lee 的 SwiftUI Expert 涵蓋狀態、效能和 Liquid Glass。兩者都可以作為外掛安裝，也可以用 skills CLI 安裝。",
      },
      {
        q: "有適用於 Claude Code 的 Flutter skill 嗎？",
        a: "有。Flutter 團隊發布了 flutter/agent-plugins，包含架構、響應式版面、版面修正、路由、在地化和測試方面的 skill，還附帶 Dart 和 Flutter 的 MCP 工具。",
      },
      {
        q: "Claude Code 能設計行動 App 的 UI 嗎？",
        a: "裝上設計 skill 後，效果比不裝好得多：skill 帶來平台的規範和設計方向。畫面要在模擬器或手機上檢查，因為光看程式碼發現不了間距和觸控區域的問題。",
      },
      {
        q: "這些行動 skill 能在 Codex 和 Cursor 裡使用嗎？",
        a: "大多數可以。Expo、SwiftUI Pro、SwiftUI Expert、Apple Design Skill 和 Callstack 的 skill 都寫明了 Codex 或 Cursor 的用法，skills CLI 也能把 SKILL.md 格式的 skill 裝進幾十種 agent。",
      },
    ],
  },
  cta: {
    title: "幫你的看板配一位 App 設計師，用上你信得過的 skill。",
    text: "Crewmark 把 Claude Code、Codex、DeepSeek Harness 和 OpenCode 工作階段變成有職位、目標、工作時間和心跳的 AI 員工。",
    button: "開始使用",
  },
  checked: "已於 2026 年 11 月 8 日對照各 skill 的 GitHub 儲存庫、GitHub API 和 skills.sh 登錄表查核。",
  disclaimer:
    "Crewmark 是獨立產品，與 Anthropic、Apple、Google 及文中所列 skill 的作者無關，也未獲其背書。產品名稱是其各自所有者的商標。",
};
