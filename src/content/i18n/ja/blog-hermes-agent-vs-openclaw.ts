import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/hermes-agent-vs-openclaw; the English master is src/content/blog/hermes-agent-vs-openclaw.ts.

const hermes = "https://github.com/NousResearch/hermes-agent";

const install = `# OpenClaw (macOS, Linux, WSL2)
curl -fsSL https://openclaw.ai/install.sh | bash

# Hermes Agent (Linux, macOS, WSL2)
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash

# Move an OpenClaw setup to Hermes: preview first
hermes import-agent openclaw --dry-run`;

export const copy: GuideCopy = {
  meta: {
    title: "Hermes Agent vs OpenClaw vs Claude Code 比較 | Crewmark AI",
    description:
      "Hermes Agent と OpenClaw の違い、そして両者と Claude Code の比較。用途、モデルとサブスクリプション、メモリと skill、セキュリティ、OpenClaw から Hermes への移行方法を、各プロジェクトのドキュメントをもとに解説します。",
  },
  breadcrumb: "Hermes Agent と OpenClaw の比較",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "ブログ · AI エージェント",
    title: "Hermes Agent、OpenClaw、Claude Code を比較：必要なのはどれ？",
    lead: "OpenClaw と Hermes Agent は、オープンソースの個人向け AI エージェントの二大勢力です。どちらも自分のマシンで動き、Telegram、Slack、WhatsApp などのチャットアプリで返事をくれます。コミュニティが大きいのは OpenClaw（GitHub のスター約394,000）。Nous Research の Hermes Agent（約261,000）は、経験を skill に変える学習ループを中心に作られています。Claude Code はそれとは別の種類のツールで、リポジトリの中で働くコーディングエージェントです。このガイドでは3つをそれぞれのドキュメントをもとに比較し、最適なツール、あるいは最適な組み合わせを選べるようにします。",
    cta: "今すぐ始める",
    secondary: "比較表を見る",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "結論から",
      points: [
        "チャネルと連携の幅広さ、最大のコミュニティを求めるなら OpenClaw。Discord、iMessage、Slack、Teams、Telegram、WhatsApp、Signal ほか20以上に対応します。",
        "学習するアシスタントが欲しいなら Hermes Agent。経験から skill を作り、使いながら改善し、メモリを自分で整理します。cron スケジューラーも内蔵しています。",
        "リポジトリでのソフトウェア開発なら Claude Code。コードを読んで変更し、テストを実行し、pull request を作成します。",
        "Claude Code や Codex に、指示を待たずチームのボードから仕事を続けてほしいなら、それは AI 社員です。このページの最後をご覧ください。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Hermes Agent、OpenClaw、Claude Code の比較",
      text: ["2026年11月7日時点の各プロジェクトの README、ドキュメント、および GitHub API の情報です。"],
      headers: ["", "OpenClaw", "Hermes Agent", "Claude Code"],
      rows: [
        ["開発元", "Peter Steinberger とコミュニティ、OpenClaw Foundation", "Nous Research", "Anthropic"],
        ["概要", "チャットアプリで使う個人向け AI アシスタント", "学習ループで自ら改善していく個人向けエージェント", "リポジトリで働くコーディングエージェント"],
        ["どこで話しかけるか", "20以上のチャットチャネル、Control UI、CLI、各種アプリ", "Telegram、Discord、Slack、WhatsApp、Signal、メール、CLI、デスクトップアプリ", "ターミナル、IDE、デスクトップアプリ、スマートフォンから Remote Control"],
        ["モデル", "切り替え可能：Claude、OpenAI と Codex、ローカルモデル", "任意のプロバイダー：Nous Portal、OpenRouter、OpenAI、カスタムエンドポイント", "Claude のモデル"],
        ["Claude のサブスクリプション", "API キー、または同じマシンの Claude Code ログインを再利用", "追加利用枠を購入した Claude Max のみ。Pro は不可", "Claude の各プランに含まれる"],
        ["メモリと skill", "ローカルメモリ。skill とプラグインは ClawHub で共有", "エージェント自身が整理するメモリ。skill を作成・改善（agentskills.io 標準）", "CLAUDE.md、skill、hook、サブエージェント"],
        ["スケジュール実行", "Gateway がデーモンとして常駐", "cron スケジューラーを内蔵", "`/loop` とスケジュールタスク"],
        ["分離", "サンドボックスを設定しない限りツールはホストで実行", "危険なコマンドは承認制。Docker や Modal も選択可", "権限モードとルール、サンドボックス"],
        ["ライセンス、スター数", "MIT、約394k", "MIT、約261k", "商用"],
      ],
    },
    {
      kind: "text",
      title: "Hermes Agent と OpenClaw の本当の違い",
      points: [
        "学習：Hermes の目玉は学習ループです。複雑なタスクのあとに skill を書き、使いながら磨いていきます。OpenClaw の強みは幅の広さで、チャネルが多く、ClawHub のプラグインも多く、デスクトップとモバイルにネイティブアプリがあります。",
        "セキュリティの初期設定：OpenClaw は受信メッセージを信頼できないものとして扱い、未知の送信者にはペアリングを求めますが、サンドボックスを設定しない限りメインセッションのツールはホストで実行します。Hermes は初期設定で危険なコマンドの前に確認を求め、ツールを Docker や Modal に分離することもできます。OpenClaw はセキュリティ修正を公開しており、2026年1月以降のアドバイザリーは722件、クリティカルなものはすべて修正済みです。",
        "サブスクリプション：OpenClaw はローカルの Claude Code ログインを再利用できます。Hermes が Claude のサブスクリプションを使えるのは、追加利用枠を購入した Max プランのみです。どちらも ChatGPT/Codex でのサインインに対応しています。",
        "運営：OpenClaw は独立した OpenClaw Foundation が運営し、OpenAI は寄付者という立場です。Hermes Agent は Nous Research が開発しています。",
        "乗り換え：Hermes には OpenClaw の設定（ペルソナ、メモリ、skill、メッセージング設定）をコマンド1つで取り込むインポーターがあります。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "両方を試す方法、OpenClaw から Hermes へ移行する方法",
      steps: [
        {
          title: "並べてインストールする",
          text: "どちらもコマンド1つでインストールでき、それぞれ独自の gateway を動かすので、同じマシンで別々のチャットアカウントを使って試せます。",
          code: install,
        },
        {
          title: "まず1つのチャネルだけつなぐ",
          text: "チャットアプリを1つだけ選び、自分のアカウントだけを許可しましょう。どちらも未知の送信者にはペアリングか許可リストを求めます。",
        },
        {
          title: "移行内容をプレビューする",
          text: "`hermes import-agent openclaw --dry-run` で移行される内容を確認できます。API キーもコピーしたい場合にだけ `--migrate-secrets` を付けてください。",
        },
        {
          title: "実際のアカウントを渡す前に分離方法を決める",
          text: "エージェントが他人からのメッセージを読む前に、OpenClaw のサンドボックスか Hermes の Docker バックエンドを有効にしましょう。コンテナ前提の選択肢は [OpenClaw の代替ツール](/blog/openclaw-alternatives) をご覧ください。",
        },
      ],
      source: { label: "出典：Hermes Agent README", href: hermes },
    },
    {
      kind: "text",
      title: "OpenClaw と Claude Code、Hermes と Claude Code の違い",
      text: [
        "解決する問題が違います。OpenClaw と Hermes はメッセージで頼むアシスタントで、受信トレイ、カレンダー、リサーチ、リマインダー、アプリをまたいだタスクを担当します。Claude Code はソフトウェアを作る場所で、コードベースを読み、ファイルを編集し、コマンドやテストを実行し、pull request を作成します。両方を使う人も多く、日常はチャットアシスタント、リポジトリでの仕事は Claude Code（または Codex）という分担です。OpenClaw は同じマシンの Claude Code ログインを再利用することもできます。Claude Code を自分のスケジュールで動かすには [Claude Code を自律的に動かす方法](/proactive-claude-code)、複数を同時に動かすには [複数の Claude Code エージェント](/blog/multiple-claude-code-agents) をご覧ください。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "アシスタントではなく、仕事を持つエージェントが欲しいとき",
      text: [
        "OpenClaw と Hermes はメッセージを送ると応答します。Crewmark は Claude Code、Codex、DeepSeek Harness、OpenCode を AI 社員に変えます。各社員には役割、目標、勤務時間があり、ハートビートで起動して共有ボードから次の issue を取り、判断が必要なときにはあなたにメッセージを送ります。使うのは契約中のサブスクリプションのままです。",
      ],
      steps: [
        {
          title: "役割を選ぶ",
          text: "[SEO スペシャリスト](/ai-employees/seo-specialist)、[ソフトウェアエンジニア](/ai-employees/software-engineer)、[マーケティングエージェント](/ai-employees/marketing-agent) など。",
        },
        {
          title: "使い慣れたエージェントをつなぐ",
          text: "社員はそれぞれ専用のセッションとチェックアウトで働きます。",
        },
        {
          title: "ボードを埋める",
          text: "issue を割り当て、あなたが必要なことにだけ答えます。[AI 社員とは](/ai-employees)をご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Hermes Agent と OpenClaw を並べて試す" },
  mid: {
    title: "バックログを片付けてくれるエージェントが必要ですか？",
    text: "Crewmark は Claude Code と Codex を AI 社員として動かし、ハートビートごとにボードから次の issue を取らせます。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Hermes Agent と OpenClaw に関するよくある質問",
    items: [
      {
        q: "Hermes Agent は OpenClaw より優れていますか？",
        a: "何を重視するかによります。Hermes Agent は学習（自ら skill を作って改善すること）に重点を置き、初期設定で危険なコマンドの前に確認します。OpenClaw はチャネル、アプリ、コミュニティのプラグインが豊富です。",
      },
      {
        q: "OpenClaw から Hermes Agent に移行できますか？",
        a: "できます。Hermes には `hermes import-agent openclaw` があり、ペルソナ、メモリ、skill、メッセージング設定を取り込めます。まず `--dry-run` 付きで実行してください。",
      },
      {
        q: "自分の Claude サブスクリプションで使えるのはどちらですか？",
        a: "OpenClaw は同じマシンの Claude Code ログインを再利用するか、API キーを使えます。Hermes Agent が Claude のサブスクリプションを使えるのは追加利用枠を購入した Claude Max のみで、Pro ユーザーは API キーが必要です。",
      },
      {
        q: "OpenClaw と Hermes Agent は無料ですか？",
        a: "どちらも MIT ライセンスのオープンソースです。使うモデルの料金はかかります。Nous Research は Hermes 向けにオプションの Nous Portal サブスクリプションも提供しています。",
      },
      {
        q: "OpenClaw と Claude Code、どちらを使うべきですか？",
        a: "OpenClaw はチャットアプリで使う個人アシスタント、Claude Code はリポジトリで働くコーディングエージェントです。両者は補い合う関係で、OpenClaw は同じマシンの Claude Code ログインを再利用できます。",
      },
      {
        q: "Hermes Agent と Codex の違いは？",
        a: "Codex は OpenAI のコーディングエージェントで、リポジトリで働きます。Hermes は汎用の個人向けエージェントで、ChatGPT/Codex でサインインして OpenAI のモデルを使えます。",
      },
    ],
  },
  cta: {
    title: "コーディングエージェントに、チャットではなく仕事を。",
    text: "Crewmark は Claude Code、Codex、DeepSeek Harness、OpenCode のセッションを、役割、目標、勤務時間、ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月7日に OpenClaw と Hermes Agent の README とドキュメント、および GitHub API と照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、OpenClaw Foundation、Nous Research、Anthropic、OpenAI とは提携しておらず、その承認も受けていません。製品名は各所有者の商標です。",
};
