import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /personal-agent/suparagent; the English master is
// src/content/personal-agents/suparagent.ts.

const repo = "https://github.com/Anil-matcha/suparagent";

export const copy: GuideCopy = {
  meta: {
    title: "Suparagent とは：オープンソースの AI の同僚、料金と設定",
    description:
      "Suparagent は、Claude Code、Codex、Gemini CLI、Cursor で動く AI の同僚のためのオープンソースのワークスペース。概要、料金、設定、比較を紹介。",
  },
  breadcrumb: "Suparagent",
  parent: { name: "パーソナルエージェント", href: "/personal-agent" },
  hero: {
    kicker: "パーソナルエージェント · オープンソース",
    title: "Suparagent：AI の同僚のためのオープンソースのワークスペース",
    lead: "Suparagent は、オープンソースの「AI の同僚のためのワークスペース」（“workspace for AI coworkers”）です。それぞれに仕事、ワークスペース、記憶、ルーティン、承認の設定を持つ名前付きのエージェントを作り、Claude Code、Codex、Gemini CLI、Cursor など、すでに使っているエンジンの上で動かします。デスクトップアプリとして、または自分のサーバーで動き、suparagent.ai のホスティングサービスは別の製品です。アプリは Open Dots、その後 Open Duet と呼ばれ、2026年11月9日のバージョン 0.8.5 で Suparagent という名前になりました。",
    cta: "今すぐ始める",
    secondary: "セットアップする",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Suparagent とは",
      points: [
        "名前付きの同僚：各エージェントは名前、役割、エンジン、ワークスペース、記憶、承認の設定を持ち、テンプレートとスキルから始められます。",
        "すでに使っているエンジン：Claude Code または Codex CLI、Gemini CLI、Antigravity 経由の Google Gemini、Cursor、Agent Client Protocol（ACP）経由のほかの CLI エージェント、OpenRouter、または Ollama や LM Studio などの OpenAI 互換 API。モデルは含まれていません。",
        "仕事とスケジュール：仕事の割り当て、1 回限りの実行の予約、試行結果の確認ができるタスクボードとカレンダーに加え、バックエンドが動いている間、スケジュール、Webhook、オンデマンドで動くルーティンがあります。",
        "エージェントのチーム：リーダーのエージェント（Claude または Codex）が専門のエージェントに仕事を任せ、エージェント同士は共有のルームで連携します。",
        "承認：Ask first、Accept edits、Approve for me（Claude、Codex、Cursor）、Plan only。ルーティンが自分で操作を承認することはなく、Today ビューに承認、質問、ルーティンの結果が集まります。",
        `Apache 2.0 のオープンソースで、[github.com/Anil-matcha/suparagent](${repo}) にあります。リポジトリは 2023年5月に作成され、2026年11月13日時点でスターは約 7,050 でした。まだ初期段階で変化が続いており、セルフホストのサーバー、Docker のコンピューター、ブラウザツール、macOS ネイティブのデスクトッププレビューは実験的な機能です。`,
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Suparagent の料金",
      text: [
        "デスクトップアプリやセルフホストのサーバーについては、Suparagent の料金は記載されていません。ホスティング版のプランは、2026年11月13日時点の README の記載によるものです（米ドル）。どのプランでも、自分の AI プロバイダーのアカウントを使います。",
      ],
      headers: ["プラン", "料金", "内容"],
      rows: [
        ["デスクトップアプリまたはセルフホストのサーバー", "Suparagent の料金の記載なし", "自分のエンジンを使用。モデルプロバイダーに支払う"],
        ["ホスティング版：Free preview", "$0", "サンドボックスの計算資源は Boat アカウントに請求"],
        ["ホスティング版：Starter", "$15/月", "計算時間 100 時間、51 GB"],
        ["ホスティング版：Standard", "$49/月", "計算時間 300 時間、51 GB"],
        ["ホスティング版：Pro", "$99/月", "計算時間 720 時間、111 GB"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Suparagent のセットアップ方法",
      steps: [
        {
          title: "動かす場所を選ぶ",
          text: "ソースのチェックアウトからデスクトップアプリを動かす（GitHub Releases のインストーラーは実験的で未署名）、セルフホストの Linux サーバーを用意する、または suparagent.ai のホスティング版の Web アプリを使います。",
        },
        {
          title: "エージェントを作る",
          text: "名前、役割、Claude Code、Codex、Gemini CLI、Cursor などのエンジン、ワークスペース、承認モードを設定するか、テンプレートから始めます。",
        },
        {
          title: "仕事を与える",
          text: "ボードでタスクを割り当てるか、スケジュール、Webhook、オンデマンドで動くルーティンを設定します。バックエンドは動かし続ける必要があります。承認、質問、結果は Today ビューに集まります。",
        },
      ],
      source: { label: "出典：GitHub の Suparagent README", href: repo },
    },
    {
      kind: "table",
      id: "vs",
      title: "Suparagent と OpenWorker、OpenBot、Claude Cowork の比較",
      text: [
        "2026年11月13日に確認した各プロジェクトの README またはベンダー自身のページの情報で、GitHub のスター数も同日のものです。ほかの AI の同僚は [AI の同僚ツールの比較](/blog/ai-coworker)で比べています。",
        "ガイド：[OpenWorker](/personal-agent/openworker)、[OpenBot](/personal-agent/openbot)、[Claude Cowork](/personal-agent/claude-cowork)。",
      ],
      headers: ["", "Suparagent", "OpenWorker", "OpenBot", "Claude Cowork"],
      rows: [
        ["提供元", "GitHub の Anil-matcha", "Andrew Ng（GitHub の andrewyng）", "CopilotKit", "Anthropic"],
        ["オープンソース", "Apache 2.0。スター約 7,050", "MIT。スター約 19,050", "MIT のテンプレート、CopilotKit Intelligence は別ライセンス。スター約 11,652", "いいえ"],
        ["動く場所", "デスクトップアプリ、セルフホストの Linux サーバー、またはホスティング版の Web アプリ", "自分のコンピューター（macOS、Windows）。コネクタのサインインは小さなクラウドサービスが仲介", "デスクトップアプリ（Mac、Windows、Docker バックエンド）または Kubernetes。ホスティング版はアーリーアクセス", "Anthropic のクラウド。ローカルの作業は Claude Desktop 経由"],
        ["モデル", "Claude Code、Codex、Gemini CLI、Cursor などのエンジン。モデルは含まれない", "OpenAI、Anthropic、Gemini、OpenRouter などの自分のキー、またはローカルモデル", "OpenAI、Claude、Gemini、オープンモデル。AG-UI 経由で自前のエージェント", "Claude モデル"],
        ["料金", "セルフホストの料金の記載なし。ホスティング版は月 $0〜$99", "価格の記載なし。モデルは自分で用意", "個人プロジェクトは無料。Business はアクティブユーザーあたり月最大 $29", "Claude の有料プラン。Pro は月 $20"],
        ["タスクボード", "タスクボードとカレンダー", "記載なし", "記載なし", "issue ボードはなし。タスクリストと Scheduled ページ"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "目標、勤務時間、ハートビートを持つ AI 社員",
      text: [
        "Suparagent は、選んだエンジンの上で名前付きの同僚を動かします。Crewmark は、あなたの Claude Code や Codex のセッションを、職種、数字の目標、勤務時間、ハートビートを持つ AI 社員に変え、それぞれが共有ボードから issue を取ります。",
      ],
      steps: [
        { title: "職種を選ぶ", text: "[AI 社員の職種](/ai-employees)から始め、目標を数字で設定します。" },
        { title: "仕事をボードに載せる", text: "共有ボードで issue を割り当てます。勤務時間中は、ハートビートが社員を起こし、次の issue に取りかからせます。" },
        { title: "できることを見る", text: "セットアップ付きの仕事の例は [Claude Code の活用例](/use-cases/claude-code)にあります。" },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Suparagent をセットアップする" },
  mid: {
    title: "すでに使っているコーディングエージェントで AI 社員を動かしたいですか？",
    text: "Crewmark は、あなたの Claude Code や Codex のセッションに、職種、勤務時間、ハートビート、共有ボードを与えます。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Suparagent のよくある質問",
    items: [
      {
        q: "Suparagent とは何ですか？",
        a: "AI の同僚のためのオープンソースのワークスペースです。役割、記憶、ルーティン、承認の設定を持つ名前付きのエージェントを作り、Claude Code、Codex、Gemini CLI、Cursor など、すでに使っているエンジンの上で動かします。2026年11月9日に名前が変わるまでは、Open Dots、その後 Open Duet と呼ばれていました。",
      },
      {
        q: "Suparagent は無料ですか？",
        a: "コードは Apache 2.0 で、デスクトップアプリやセルフホストのサーバーについて Suparagent の料金は記載されていません。モデルプロバイダーへの支払いは必要です。README にはホスティング版のプランとして、$0 の Free preview（サンドボックスの計算資源は Boat アカウントに請求）、月 $15 の Starter、$49 の Standard、$99 の Pro が載っています。",
      },
      {
        q: "Suparagent はどの AI エージェントで使えますか？",
        a: "Claude Code または Codex CLI、Gemini CLI、Antigravity 経由の Google Gemini、Cursor、Agent Client Protocol（ACP）経由のほかの CLI エージェント、OpenRouter、そして Ollama や LM Studio などの OpenAI 互換 API です。チームのリーダーのエージェントは Claude か Codex である必要があり、連携アプリは Claude と Codex のエージェントでのみ使えます。",
      },
    ],
  },
  cta: {
    title: "コーディングエージェントに、プロンプトだけでなく仕事を。",
    text: "Crewmark は、Claude Code と Codex のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked:
    "2026年11月13日に、GitHub の Suparagent README、変更履歴、ライセンス、そして suparagent.ai で確認しました。比較の情報は、同日に各製品自身のページで確認しています。",
  disclaimer:
    "Crewmark は独立した製品であり、Suparagent プロジェクトや Vadoo Internet Services Private Limited とは提携しておらず、その承認も受けていません。製品名は各所有者の商標です。",
};
