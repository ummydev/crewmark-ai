import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /personal-agent/openbot; the English master is
// src/content/personal-agents/openbot.ts.

const repo = "https://github.com/CopilotKit/OpenBot";

export const copy: GuideCopy = {
  meta: {
    title: "OpenBot：CopilotKit のオープンソース AI の同僚と料金",
    description:
      "OpenBot は CopilotKit のセルフホスト可能なオープンソースの AI の同僚ワークスペース。機能、Business 版の料金、設定、GitHub、Grok Bot との違い。",
  },
  breadcrumb: "OpenBot",
  parent: { name: "パーソナルエージェント", href: "/personal-agent" },
  hero: {
    kicker: "パーソナルエージェント · オープンソース",
    title: "OpenBot：CopilotKit のオープンソースの AI の同僚のワークスペース",
    lead: "OpenBot は、CopilotKit のオープンソースでセルフホスト可能な、AI の同僚のためのワークスペースです。各 Bot はブラウザ、ファイル、ツールを備えた専用のコンピューターを持ち、承認とアクティビティログのもとで働きます。ノートパソコン上のデスクトップアプリとして、またはチーム向けに Kubernetes 上で動かし、モデルは自分で持ち込み、すでに作ったエージェントを AG-UI 経由で接続できます。このガイドでは、できること、OpenBot for Business の料金、セットアップ方法、主導権を保つ仕組み、ほかの AI の同僚との比較を紹介します。",
    cta: "今すぐ始める",
    secondary: "セットアップする",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "OpenBot とは",
      points: [
        "Bot ごとのコンピューター：各 Bot は専用のブラウザ、ファイル、ツールを持ち、会話、ルーティン、記憶、スキル、アプリ、承認、アクティビティも備えます。",
        "動く場所：ノートパソコン上で Docker バックエンドとともに動く Mac・Windows 向けのデスクトップアプリ、またはチーム向けに Helm で Kubernetes 上に。CopilotKit がホストする版はアーリーアクセス中です。",
        "あなたのモデル：OpenAI、Claude、Gemini、または OpenAI 互換のエンドポイント経由のオープンモデル。モデルプロバイダーには直接支払います。",
        "あなたのエージェント：組み込みの Bot を使うか、ほかのスタックで作ったエージェントを AG-UI 経由で接続します。",
        "ルーティン：ルーティンワーカーが実行する定期的な仕事。",
        "ツールとフロントエンド：MCP ツールと、Mac、Windows、Web、iOS、Android、Slack、Teams 向けのフロントエンド。一部はアーリーアクセスです。",
      ],
    },
    {
      kind: "text",
      id: "github",
      title: "GitHub の OpenBot と CopilotKit Intelligence",
      text: [
        `コードは [github.com/CopilotKit/OpenBot](${repo}) にあります。リポジトリは 2026年8月17日に作成され、2026年11月13日時点でスターは約 11,652 でした。`,
      ],
      points: [
        "アプリケーションテンプレートは MIT ライセンスなので、セルフホストしてカスタマイズできます。",
        "独自のライセンスを持つ CopilotKit Intelligence を使います。ノートパソコンでは無料のローカルライセンス、Kubernetes ではトライアルまたは本番用のライセンスです。",
        "Kubernetes で本番運用するには、評価用を超える CopilotKit Intelligence のライセンスが必要です。",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "OpenBot の料金と OpenBot for Business",
      text: [
        "2026年11月13日時点の open.bot/pricing による価格（米ドル）です。どのプランでも、モデルプロバイダーには直接支払います。",
      ],
      headers: ["プランまたはライセンス", "料金"],
      rows: [
        ["個人プロジェクト", "無料"],
        ["OpenBot for Business、従量課金", "アクティブユーザーあたり月最大 $29。加えて、月のモデル利用額が $5,000 を超えた分の 5%"],
        ["年間契約", "個別見積もり"],
        ["CopilotKit Intelligence", "ノートパソコンでは無料のローカルライセンス。Kubernetes ではトライアルまたは本番用のライセンス"],
        ["モデル", "モデルプロバイダーに直接支払う"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "OpenBot のセットアップ方法",
      steps: [
        {
          title: "動かす場所を選ぶ",
          text: "ノートパソコンでは、Docker バックエンドで動く Mac または Windows 向けのデスクトップアプリ。チームでは、Helm で Kubernetes に。CopilotKit がホストする版はアーリーアクセス中です。",
        },
        {
          title: "モデルをつなぐ",
          text: "OpenAI、Claude、Gemini、または OpenAI 互換のエンドポイント経由のオープンモデルを使います。プロバイダーには直接支払います。",
        },
        {
          title: "Bot を選ぶか、エージェントを持ち込む",
          text: "組み込みの Bot から始めるか、すでに作ったエージェントを AG-UI 経由で接続します。各 Bot は、ブラウザ、ファイル、ツールを備えた専用のコンピューターを持ちます。",
        },
        {
          title: "ツールとルーティンを追加する",
          text: "Bot に MCP ツールを与え、定期的な仕事のために Routines を設定します。ルーティンワーカーがそれを実行します。",
        },
        {
          title: "仕事をする場所から使う",
          text: "フロントエンドは Mac、Windows、Web、iOS、Android、Slack、Teams に対応し、一部はアーリーアクセスです。",
        },
      ],
      source: { label: "出典：GitHub の OpenBot README", href: repo },
    },
    {
      kind: "text",
      id: "safety",
      title: "OpenBot で主導権を保つ仕組み",
      points: [
        "承認：Bot は操作の前に確認します。",
        "アクティビティ：各 Bot がアクティビティログを残します。",
        "チーム版：会社のアカウントでのサインイン、ロール、ツールの権限、監査。",
        "セルフホスト：あなたのノートパソコンか自社の Kubernetes クラスターで、選んだモデルプロバイダーとともに動きます。",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "OpenBot と OpenWorker、Suparagent、Claude Cowork の比較",
      text: [
        "2026年11月13日に確認した各プロジェクトの README またはベンダー自身のページの情報で、GitHub のスター数も同日のものです。ほかの AI の同僚は [AI の同僚ツールの比較](/blog/ai-coworker)で比べています。Grok Bot については [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot) をご覧ください。",
        "ガイド：[OpenWorker](/personal-agent/openworker)、[Suparagent](/personal-agent/suparagent)、[Claude Cowork](/personal-agent/claude-cowork)。",
      ],
      headers: ["", "OpenBot", "OpenWorker", "Suparagent", "Claude Cowork"],
      rows: [
        ["提供元", "CopilotKit", "Andrew Ng（GitHub の andrewyng）", "GitHub の Anil-matcha", "Anthropic"],
        ["オープンソース", "MIT のテンプレート、CopilotKit Intelligence は別ライセンス。スター約 11,652", "MIT。スター約 19,050", "Apache 2.0。スター約 7,050", "いいえ"],
        ["動く場所", "デスクトップアプリ（Mac、Windows、Docker バックエンド）または Kubernetes。ホスティング版はアーリーアクセス", "自分のコンピューター（macOS、Windows）。コネクタのサインインは小さなクラウドサービスが仲介", "デスクトップアプリ、セルフホストの Linux サーバー、またはホスティング版の Web アプリ", "Anthropic のクラウド。ローカルの作業は Claude Desktop 経由"],
        ["モデル", "OpenAI、Claude、Gemini、オープンモデル。AG-UI 経由で自前のエージェント", "OpenAI、Anthropic、Gemini、OpenRouter などの自分のキー、またはローカルモデル", "Claude Code、Codex、Gemini CLI、Cursor などのエンジン。モデルは含まれない", "Claude モデル"],
        ["料金", "個人プロジェクトは無料。Business はアクティブユーザーあたり月最大 $29", "価格の記載なし。モデルは自分で用意", "セルフホストの料金の記載なし。ホスティング版は月 $0〜$99", "Claude の有料プラン。Pro は月 $20"],
        ["定期的な仕事", "ルーティンワーカーが実行するルーティン", "スケジュールで動くブリーフ、レポートなどの繰り返しのタスク", "スケジュール、Webhook、オンデマンドで動くルーティン", "毎時、毎日、毎週、平日に、クラウドで"],
        ["承認", "操作の前に確認。チーム版では監査", "デフォルトでオン。任意でレビュアーのモデル", "Ask first、Accept edits、Approve for me、Plan only", "Manual、Auto、Skip"],
        ["タスクボード", "記載なし", "記載なし", "タスクボードとカレンダー", "issue ボードはなし。タスクリストと Scheduled ページ"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "Bot はワークスペースに。AI 社員はコーディングエージェントの上に。",
      text: [
        "OpenBot は、あなたがホストするワークスペースで、各 Bot に専用のコンピューターを与えます。Crewmark は、あなたの Claude Code や Codex のセッションを、職種、数字の目標、勤務時間、ハートビートを持つ AI 社員に変え、それぞれが共有ボードから issue を取ります。",
      ],
      steps: [
        { title: "職種を選ぶ", text: "[AI 社員の職種](/ai-employees)から始め、目標を数字で設定します。" },
        { title: "仕事をボードに載せる", text: "共有ボードで issue を割り当てます。勤務時間中は、ハートビートが社員を起こし、次の issue に取りかからせます。" },
        { title: "できることを見る", text: "セットアップ付きの仕事の例は [Claude Code の活用例](/use-cases/claude-code)にあります。" },
      ],
    },
  ],
  howTo: { section: "how-to", name: "OpenBot をセットアップする" },
  mid: {
    title: "すでに使っているコーディングエージェントで AI 社員を動かしたいですか？",
    text: "Crewmark は、あなたの Claude Code や Codex のセッションに、職種、勤務時間、ハートビート、共有ボードを与えます。",
    button: "今すぐ始める",
  },
  faq: {
    title: "OpenBot のよくある質問",
    items: [
      {
        q: "OpenBot とは何ですか？",
        a: "CopilotKit のオープンソースでセルフホスト可能な、AI の同僚のためのワークスペースです。各 Bot は、ブラウザ、ファイル、ツールを備えた専用のコンピューターを持ち、承認とアクティビティログも備えます。ノートパソコン上のデスクトップアプリとして、またはチーム向けに Kubernetes 上で、持ち込んだモデルを使って動きます。",
      },
      {
        q: "OpenBot は CopilotKit が作ったものですか？",
        a: "はい。github.com/CopilotKit/OpenBot にあります。OpenBot の MIT のテンプレートとは別ライセンスの CopilotKit Intelligence を使い、既存のエージェントを AG-UI 経由で接続します。",
      },
      {
        q: "OpenBot は無料でオープンソースですか？",
        a: "アプリケーションテンプレートは MIT ライセンスで、個人プロジェクトなら無料です。OpenBot が使う CopilotKit Intelligence には、ノートパソコンでの無料のローカルライセンスと、Kubernetes でのトライアルまたは本番用のライセンスがあります。モデルプロバイダーには直接支払います。",
      },
      {
        q: "OpenBot for Business の料金はいくらですか？",
        a: "従量課金はアクティブユーザーあたり月最大 $29 で、月のモデル利用額が $5,000 を超えた分の 5% が加わります。年間契約は個別見積もりです。Kubernetes で本番運用するには、評価用を超える CopilotKit Intelligence のライセンスも必要です。",
      },
      {
        q: "OpenBot と Grok Bot の違いは？",
        a: "OpenBot はオープンソースでセルフホスト可能です。ノートパソコンか Kubernetes で動かし、モデルやエージェントは自分で持ち込みます。Grok Bot との詳しい比較は [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot) をご覧ください。",
      },
      {
        q: "GitHub の OpenBot はどこにありますか？",
        a: "github.com/CopilotKit/OpenBot です。リポジトリは 2026年8月17日に作成され、2026年11月13日時点でスターは約 11,652 でした。",
      },
    ],
  },
  cta: {
    title: "Bot は自分でホスト。コーディングエージェントにも仕事を。",
    text: "Crewmark は、Claude Code と Codex のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked:
    "2026年11月13日に、GitHub の OpenBot README と open.bot/pricing で確認しました。比較の情報は、同日に各製品自身のページで確認しています。",
  disclaimer:
    "Crewmark は独立した製品であり、CopilotKit とは提携しておらず、その承認も受けていません。製品名は各所有者の商標です。",
};
