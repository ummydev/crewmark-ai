import type { BlogIndexCopy } from "@/content/blog";

// zh-TW translation of /blog; the English master is blogIndex.en in src/content/blog/index.ts.

export const copy: BlogIndexCopy = {
  meta: {
    title: "Crewmark 部落格：Claude Code 與 Codex AI agent 教學",
    description: "把 Claude Code 和 Codex 當成 agent 來用的實作教學：headless 執行、排程、背景工作、多個 agent 平行執行和目標設定。",
  },
  kicker: "部落格",
  title: "執行 AI agent 的實作教學",
  lead: "Claude Code 和 Codex 的實用指南：如何以 headless 模式、依排程、在背景執行它們，以及如何給它們一份長期的工作。每篇都有可以照著執行的步驟。",
  read: "閱讀教學",
};
