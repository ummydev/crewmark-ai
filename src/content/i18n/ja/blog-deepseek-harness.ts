import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/deepseek-harness; the English master is src/content/blog/deepseek-harness.ts.

const repo = "https://github.com/deepseek-ai/deepseek-harness";

const install = `# Node.js で Web UI を起動
npx @deepseek-ai/dsh web
# その後 http://127.0.0.1:3080 を開く

# またはソースからビルド
git clone https://github.com/deepseek-ai/deepseek-harness.git
cd deepseek-harness && pnpm install && pnpm run build && pnpm dsh web`;

const headless = `# UI なしで1つのタスクを、権限モードを指定して実行
dsh headless "Add tests for src/auth" --permission-mode workspace-write

# イベントを JSON でストリーミング（スクリプト用など）
dsh headless "Summarize open TODOs" --json

# プロファイルにプラグインを追加
dsh plugin --profile default add <package>`;

export const copy: GuideCopy = {
  meta: {
    title: "DeepSeek Harness とは？ インストール・料金 | Crewmark AI",
    description:
      "DeepSeek Harness（dsh）を解説。DeepSeek のオープンソースのエージェントハーネスについて、デスクトップアプリと CLI、インストール方法、DeepSeek API の料金、プラグインと Super-Agent、Claude Code・Codex・OpenCode との比較までまとめました。",
  },
  breadcrumb: "DeepSeek Harness ガイド",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "ブログ · DeepSeek",
    title: "DeepSeek Harness とは？ インストール方法と他ツールとの比較",
    lead: "DeepSeek Harness（`dsh`）は、DeepSeek のオープンソースのエージェントハーネスです。日常のタスク、コーディング、リサーチ、バックグラウンド作業をこなす AI エージェントを動かすアプリで、ツールからインターフェースまで、ほぼすべてがプラグインとして作られています。MIT ライセンスで、開発者向けプレビュー版。GitHub で最もスターの多いリポジトリの1つでもあり、2026年10月31日に DeepSeek の Super-agent プロトタイプが登場してから検索数が伸び続けています。このガイドでは、DeepSeek Harness の概要、デスクトップアプリと CLI、インストール方法、費用、主な機能、そして Claude Code、Codex、OpenCode との比較を説明します。",
    cta: "今すぐ始める",
    secondary: "インストール手順へ移動",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "at-a-glance",
      title: "DeepSeek Harness の概要",
      headers: ["", "DeepSeek Harness"],
      rows: [
        ["開発元", "DeepSeek AI"],
        ["概要", "「すべてがプラグイン」というアーキテクチャのオープンソースのエージェントハーネス。Cordis フレームワーク上に構築"],
        ["ライセンス", "MIT。2026年11月6日時点で GitHub スター約 275,000"],
        ["ステータス", "開発者向けプレビュー版。DeepSeek は互換性を壊す変更があると注意しており、リリースはすべてプレリリース扱い（最新は v0.2.2-rc.1、2026年11月4日）"],
        ["使い方", "デスクトップアプリ（macOS Apple シリコン、Windows x64）、Web UI（`dsh web`）、ヘッドレス CLI、ACP モード、SDK モード"],
        ["デフォルトのモデル", "`deepseek-flash`（DeepSeek-V4.1-Flash）と `deepseek-v4-pro`。どちらもコンテキストは 1,048,576 トークン"],
        ["その他のプロバイダ", "Anthropic、OpenAI、Kimi、GLM、または OpenAI／Anthropic 互換の任意のエンドポイント（セルフホストのサーバーを含む）"],
        ["料金", "ソフトウェアは無料。DeepSeek API（または他のプロバイダ）の利用料を支払います"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "DeepSeek Harness のインストールと使い方",
      steps: [
        {
          title: "デスクトップ版か Web 版を選ぶ",
          text: "deepseek.com/en/harness から macOS（Apple シリコン）または Windows（64ビット）向けのデスクトップアプリをダウンロードします。macOS では `dsh` コマンドもインストールできます。Node.js が入っているマシンなら、npx で Web UI を起動するか、ソースからビルドできます。",
          code: install,
        },
        {
          title: "サインインするか API キーを追加する",
          text: "初回起動時に、ブラウザで DeepSeek アカウントにサインインするか、Settings → Models（設定 → モデル）で platform.deepseek.com の API キーを貼り付けます。キーは `~/.dsh/.credentials.yaml`（`$DSH_HOME`）に保存されます。",
        },
        {
          title: "プロジェクトの指示を渡す",
          text: "DeepSeek Harness は、プロジェクト内の `AGENTS.md` または `CLAUDE.md`（と `.local.md` の派生ファイル）、そしてグローバルな `~/.dsh/AGENTS.md` を読み込みます。Claude Code や Codex 向けに書いた既存の指示はそのまま使えます。[CLAUDE.md ガイド](/blog/claude-md)と [Codex AGENTS.md ガイド](/blog/codex-agents-md)も参考にしてください。",
        },
        {
          title: "どこまで任せるかを決める",
          text: "サンドボックスモード（`read-only`、`workspace-write`、`danger-full-access`）と承認ポリシー（`ask` または `never`）を選びます。DeepSeek の安全面の注意書きによると、このハーネスは実験的で、セキュリティ監査を受けておらず、サンドボックスも隔離を保証しません。大事なコードではまず read-only から始めましょう。",
        },
        {
          title: "ヘッドレスでタスクを実行し、プラグインを追加する",
          text: "スクリプトから単発のタスクを実行するには `dsh headless`、セッションを続けるには `--resume` か `--session-id`、スケジュールタスク、サブエージェント、エージェントチームなどのプラグインを追加するには `dsh plugin` を使います。",
          code: headless,
        },
      ],
      source: { label: "出典：DeepSeek Harness のリポジトリとドキュメント", href: repo },
    },
    {
      kind: "table",
      id: "pricing",
      title: "DeepSeek Harness の料金：動かすのにかかる費用",
      text: [
        "ハーネス自体は無料のオープンソースです。利用料は DeepSeek API が以下の料金で請求します。単位は100万トークンあたりの米ドルです（api-docs.deepseek.com、2026年11月6日）。オフピーク料金はピーク料金の半額で、ピーク時間帯は平日の UTC 01:00–04:00 と 06:00–10:00（中国の祝日を除く）です。DeepSeek は無料枠を公開していないため、「無料で使う」とは実質的に、無料のソフトウェアと手持ちの API クレジットで使うことを意味します。",
      ],
      headers: ["100万トークンあたり", "deepseek-flash、ピーク", "deepseek-flash、オフピーク", "deepseek-v4-pro、ピーク", "deepseek-v4-pro、オフピーク"],
      rows: [
        ["入力（キャッシュヒット）", "$0.006", "$0.003", "$0.044", "$0.022"],
        ["入力（キャッシュミス）", "$0.30", "$0.15", "$1.32", "$0.66"],
        ["出力", "$1.20", "$0.60", "$3.96", "$1.98"],
      ],
    },
    {
      kind: "text",
      title: "主な機能",
      points: [
        "すべてがプラグイン：ツール、モデル、インターフェース、振る舞いはすべてプラグインです。プロファイルごとにインストールでき、チャットで頼んで作ってもらうこともできます（「Creator mode」）。コミュニティのプラグインには GitHub トピック `dsh-plugin` が付いています。",
        "DeepSeek が挙げる公式・実験的プラグインには、エージェントチーム、自動承認レビュー、スケジュールタスク、音声入力、ターミナル、エージェントループ、サブエージェントがあります。",
        "Skills（`SKILL.md` フォルダ）、MCP サーバー、hooks。既存の Claude Code hooks を動かす実験的なブリッジもあります。",
        "サブエージェントはプロセス内で動かすほか、ACP、Codex、Claude Code、別の Harness をバックエンドにすることもできます。",
        "再開できるセッション、コンパクション、JSON イベントを出力するヘッドレスモード、その上に構築するための SDK。",
        "Super-agent：別の MIT バンドル dsh-superagent を使うと、ハーネスが GitHub リポジトリ上で自律的に動きます。DeepSeek は研究用プロトタイプと位置づけています。[DeepSeek Super-Agent の解説](/blog/deepseek-super-agent)をご覧ください。",
        "よく一緒に紹介される論文「A Programming Paradigm for Spatiotemporal Composability」（arXiv、2026年8月）は、ハーネスそのものではなく、土台となる Cordis フレームワークについての論文です。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "DeepSeek Harness vs Claude Code vs Codex vs OpenCode",
      text: [
        "DeepSeek は比較を公開していません。これは2026年11月6日時点の各ツールのドキュメントをもとにした私たちの整理です。DeepSeek は Claude Code、Codex、OpenCode の中で自社モデルを使う方法も案内しているので、組み合わせて使うこともできます。",
      ],
      headers: ["", "DeepSeek Harness", "Claude Code", "Codex", "OpenCode"],
      rows: [
        ["開発元", "DeepSeek", "Anthropic", "OpenAI", "Anomaly（オープンソース）"],
        ["ライセンス", "MIT", "プロプライエタリ", "CLI は Apache-2.0", "MIT"],
        ["支払い方法", "DeepSeek API の利用料（または他のプロバイダ）", "月 $20 からの Claude プラン、または API", "ChatGPT プラン（Free 以上）、または API", "自分の API キー、または Copilot か ChatGPT でサインイン"],
        ["インターフェース", "デスクトップ（macOS、Windows）、Web UI、ヘッドレス CLI", "ターミナル、IDE、デスクトップ、Web、モバイル", "CLI、IDE、デスクトップ、Web、モバイル", "ターミナル、デスクトップ、IDE、Web"],
        ["指示ファイル", "AGENTS.md または CLAUDE.md", "CLAUDE.md（フォールバックとして AGENTS.md）", "AGENTS.md", "AGENTS.md"],
        ["拡張方法", "すべてがプラグイン、skills、MCP、hooks", "Skills、プラグイン、MCP、hooks", "Skills、プラグイン、MCP、hooks", "プラグイン、MCP"],
        ["成熟度", "開発者向けプレビュー版、破壊的変更あり", "一般提供", "一般提供", "活発なオープンソース"],
      ],
    },
    {
      kind: "text",
      title: "よく検索される疑問",
      points: [
        "Linux：Linux 向けのデスクトップ版はまだありません。Linux では `npx @deepseek-ai/dsh web` で Web UI を起動するか、ソースからビルドします。",
        "VS Code：DeepSeek は VS Code 拡張機能を提供していません。エディタと並べてデスクトップ版か Web UI を使うか、DeepSeek が手順を公開している Claude Code や Codex などのエディタ向けエージェントで DeepSeek のモデルを使います。",
        "Ollama とローカルモデル：ドキュメントはありません。ハーネスはセルフホストのサーバー向けに OpenAI／Anthropic 互換のカスタムエンドポイントを受け付けており、これが自前のモデルを使う公式の方法です。",
        "TUI：ターミナル UI は標準では付属しません。カスタムプロファイルか、実験的なターミナルプラグインが公式に案内されている選択肢です。",
        "論文：上記の Cordis の論文を参照してください。DeepSeek は、ハーネス自体を引用する場合は「DeepSeek Harness: Everything is a Plugin」とするよう求めています。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "DeepSeek Harness に、タスクではなく仕事を任せよう",
      text: [
        "Crewmark は Claude Code、Codex、OpenCode に加えて DeepSeek Harness にも対応しています。セッションを職種・目標・勤務時間を持つ AI 社員に変え、ハートビートで起こして共有ボードから次の issue を取らせます。",
      ],
      steps: [
        {
          title: "エージェントに DeepSeek Harness を選ぶ",
          text: "プロジェクトでセットアップコマンドを実行します。社員はあなたのマシン上の DeepSeek Harness セッションで動き、費用はあなたの DeepSeek API アカウントに請求されます。",
        },
        {
          title: "職種と目標を与える",
          text: "ソフトウェアエンジニア、SEO スペシャリスト、グロースマーケター。それぞれに動かすべき数字があります。[AI 社員とは](/ai-employees)をご覧ください。",
        },
        {
          title: "ハートビートで仕事を始めさせる",
          text: "勤務時間中は15分、30分、60分ごとに起きて次の issue を取り、判断が必要なときはメッセージを送ってきます。他のアプローチとの比較は[スーパーエージェントとは](/blog/superagent)で。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "DeepSeek Harness をインストールして使う" },
  mid: {
    title: "DeepSeek Harness を使っていますか？ ボードに載せましょう。",
    text: "Crewmark は、職種・目標・issue のボードを与えて、DeepSeek Harness、Claude Code、Codex をハートビートで起こします。",
    button: "今すぐ始める",
  },
  faq: {
    title: "DeepSeek Harness のよくある質問",
    items: [
      {
        q: "DeepSeek Harness とは何ですか？",
        a: "DeepSeek AI のオープンソースのエージェントハーネス（`dsh`、MIT ライセンス）です。日常のタスク、コーディング、リサーチ、バックグラウンド作業向けで、プラグインを中心に作られています。現在は開発者向けプレビュー版です。",
      },
      {
        q: "DeepSeek Harness は無料ですか？",
        a: "ソフトウェアは無料のオープンソースです。動かすにはモデルの API（デフォルトは DeepSeek）を使い、トークン単位で課金されます。DeepSeek は無料枠を公開していません。",
      },
      {
        q: "DeepSeek Harness はどうやってインストールしますか？",
        a: "deepseek.com/en/harness から macOS（Apple シリコン）または Windows 向けのデスクトップアプリをダウンロードするか、Node.js 環境で `npx @deepseek-ai/dsh web` を実行して http://127.0.0.1:3080 を開きます。",
      },
      {
        q: "DeepSeek Harness は Linux で使えますか？",
        a: "Linux 向けのデスクトップ版はありませんが、Web UI と CLI は npx またはソースからのビルドで Linux でも動きます。",
      },
      {
        q: "DeepSeek Harness と Claude Code、どちらがいいですか？",
        a: "向いている用途が違います。DeepSeek Harness はオープンソースで、DeepSeek のモデルならトークン単価が安く、プラグインで拡張できますが、開発者向けプレビュー版です。Claude Code は Claude のプランに含まれる成熟した製品です。DeepSeek のモデルを Claude Code の中で動かすこともできます。",
      },
      {
        q: "DeepSeek Harness で Claude や GPT のモデルは使えますか？",
        a: "はい。Anthropic、OpenAI、Kimi、GLM のプロバイダが組み込まれており、OpenAI／Anthropic 互換の任意のエンドポイントも使えます。",
      },
      {
        q: "DeepSeek super agent とは何ですか？",
        a: "dsh-superagent のことで、2026年10月31日に公開された DeepSeek Harness 向けの研究用プロトタイプのバンドルです。ハーネスが GitHub リポジトリ上で自律的に動くようになります。[DeepSeek Super-Agent の解説](/blog/deepseek-super-agent)をご覧ください。",
      },
    ],
  },
  cta: {
    title: "DeepSeek Harness を AI 社員に。",
    text: "Crewmark は、DeepSeek Harness、Claude Code、Codex、OpenCode のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月6日に deepseek.com、deepseek-ai/deepseek-harness リポジトリ、DeepSeek の API ドキュメント、arXiv と照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、DeepSeek、Anthropic、OpenAI とは提携しておらず、その承認も受けていません。製品名は各所有者の商標です。",
};
