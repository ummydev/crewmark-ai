import type { LegalCopy } from "@/components/landing/legal-page";

// Traditional Chinese translation of /terms; the English master is src/content/legal.ts.
const MAIL = "[info@crewmark.ai](mailto:info@crewmark.ai)";

export const copy: LegalCopy = {
  meta: {
    title: "服務條款 | Crewmark",
    description: "使用 crewmark.ai 和 crewmark CLI 的條款：你的帳戶、你在自己電腦上執行的 AI 代理、你的內容、價格以及我們的責任。",
  },
  title: "服務條款",
  updated: "最後更新：2026 年 11 月 12 日",
  lead: `本條款適用於你對 crewmark.ai 和 crewmark CLI（合稱「Crewmark」）的使用。使用 Crewmark 即表示你同意本條款。如有疑問，請來信 ${MAIL}。`,
  sections: [
    {
      title: "服務內容",
      text: [
        "Crewmark 讓你把 AI 代理當作「員工」來管理：你為它們設定角色、目標、工作時間並指派 issue，它們透過你選擇的 AI 代理（例如 Claude Code 或 Codex）和 crewmark CLI，在你自己的電腦上完成工作。",
      ],
    },
    {
      title: "你的帳戶",
      text: [
        "你使用 Google 帳戶登入，並對該帳戶下發生的一切負責。如果你建立組織或邀請他人加入，你要對授予誰存取權限以及指派的角色負責。組織成員可以看到組織的專案、issue、員工和訊息。",
      ],
    },
    {
      title: "你的 AI 代理和你的電腦",
      points: [
        "你的員工執行在你的電腦上，擁有你在那裡授予代理的權限。它們可以讀取和修改檔案、執行指令。請謹慎選擇給它們的資料夾和權限，並檢查它們的工作。",
        "AI 代理會犯錯。Crewmark 無法控制代理做什麼或產出什麼，也不保證其工作正確、完整或可以安全使用。",
        "你透過自己在服務商（例如 Anthropic 或 OpenAI）的帳戶使用代理，這部分使用適用該服務商的條款和費用。Crewmark 不為你的代理用量付費，也不轉售。",
        "你要對員工代表你所做的事負責，包括它們發布、傳送或修改的任何內容。",
      ],
    },
    {
      title: "你的內容",
      text: [
        "你放進 Crewmark 的內容，以及員工產出的工作，仍歸你所有。你允許我們僅在為你和你所屬組織的成員運作 Crewmark 所需的範圍內儲存、處理和顯示這些內容。我們如何處理資訊，請見[隱私權政策](/privacy)。",
      ],
    },
    {
      title: "可接受的使用",
      text: ["請勿使用 Crewmark 或透過它管理的員工："],
      points: [
        "違反法律或侵害他人權利；",
        "傳送垃圾訊息，或騷擾、欺騙、傷害他人；",
        "進入你無權存取的系統或資料，或干擾 Crewmark 或其他服務；",
        "規避我們對服務設下的限制，或未經我們同意轉售服務。",
      ],
    },
    {
      title: "價格",
      text: [
        "目前 Crewmark 可以免費使用。我們計畫推出付費方案，請見[價格](/pricing)。未經你同意我們不會向你收費；在你訂閱付費方案前，我們會顯示價格和條款。",
      ],
    },
    {
      title: "變更與可用性",
      text: [
        "Crewmark 是一項新產品，變化頻繁。我們可能新增、修改或移除功能，服務有時也可能無法使用。對於顯著影響你的變更，我們會盡量事先通知。",
      ],
    },
    {
      title: "停止使用",
      text: [
        `你可以隨時停止使用 Crewmark，並來信 ${MAIL} 要求刪除你的帳戶。對於違反本條款、或使服務或他人面臨風險的帳戶，我們可能暫停或關閉；在合理可行的情況下，我們會先通知你。`,
      ],
    },
    {
      title: "免責聲明",
      text: [
        "在法律允許的範圍內，Crewmark 依「現狀」及「現有」提供，不附帶任何形式的保證。我們不承諾服務不會中斷、沒有錯誤或適合特定用途。",
      ],
    },
    {
      title: "責任限制",
      text: [
        "在法律允許的範圍內，對於因你使用 Crewmark 或你用它執行的 AI 代理而產生的間接或衍生性損失，或資料、利潤、業務的損失，Crewmark 不負責任。對於任何求償或爭議，無論原因為何，我們的總責任不超過 50 美元。有些地區不允許這些限制，因此它們可能不全然適用於你。",
      ],
    },
    {
      title: "本條款的變更",
      text: [
        "我們修改本條款時，會更新本頁頂端的日期。如果變更重大，我們會在生效前於應用程式內通知你。之後繼續使用 Crewmark，即表示你接受新條款。",
      ],
    },
    {
      title: "聯絡我們",
      text: [`關於本條款的任何問題，請來信 ${MAIL}。`],
    },
  ],
};
