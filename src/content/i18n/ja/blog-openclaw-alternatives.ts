import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/openclaw-alternatives; the English master is src/content/blog/openclaw-alternatives.ts.

const openclaw = "https://github.com/openclaw/openclaw";

const sandbox = `# OpenClaw: tools run on the host for the main session
# unless you configure sandboxing (docs: gateway/sandboxing)

# NanoClaw: one Docker container per session, by design
# Hermes Agent: optional Docker or Modal isolation
# ZeroClaw: Landlock, Bubblewrap, Seatbelt or Docker
# IronClaw: WASM sandbox, plus a Docker sandbox for jobs
# NemoClaw: runs OpenClaw or Hermes inside NVIDIA OpenShell`;

export const copy: GuideCopy = {
  meta: {
    title: "OpenClaw の代替ツール：Hermes・NanoClaw など | Crewmark AI",
    description:
      "OpenClaw の代替ツールを各プロジェクトのドキュメントをもとに比較します。Hermes Agent、NanoClaw、ZeroClaw、IronClaw、NVIDIA NemoClaw の動作方式、対応モデルとサブスクリプション、セキュリティモデル、そして Crewmark のような仕事向けの選択肢が合う場面を解説します。",
  },
  breadcrumb: "OpenClaw の代替ツール",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "ブログ · AI エージェント",
    title: "OpenClaw の代替ツール：Hermes、NanoClaw、ZeroClaw、IronClaw ほか",
    lead: "OpenClaw は自分のコンピューターで動くオープンソースの AI アシスタントで、WhatsApp、Telegram、Slack、Discord など20以上のチャネルで返事をくれます。GitHub のスターは約394,000と最も有名ですが、選択肢はそれだけではありません。代替ツールを探す理由は主に3つです。デフォルトでより厳しいセキュリティがほしい、別のモデルやサブスクリプションを使いたい、もっと軽いランタイムがほしい。このガイドでは主な選択肢を各プロジェクトのドキュメントをもとに比較し、個人アシスタントが必要な場面と、チームの仕事をこなすエージェントが必要な場面を説明します。",
    cta: "今すぐ始める",
    secondary: "代替ツールを比較する",
    secondaryHref: "#alternatives",
  },
  sections: [
    {
      kind: "text",
      title: "OpenClaw の概要",
      text: [
        "OpenClaw は Clawdbot として始まり、Anthropic から商標を理由に名称変更を求められたことを受けて、2026年1月下旬に Moltbot、続いて OpenClaw へと改名されました。作者の Peter Steinberger はその後 OpenAI に入社し、プロジェクトは2026年7月に発表された独立団体 OpenClaw Foundation に移りました。同財団は OpenAI について「所有者ではなく寄付者」だと説明しています。最新リリースは2026年11月5日の v2026.11.1 です。",
      ],
      points: [
        "macOS、Linux、Windows、WSL2 上でローカルの Gateway デーモンとして動き、デスクトップ版とモバイル版のアプリがあります。",
        "モデルはプラグイン方式です。Claude（API キー、または同じマシンの Claude Code ログインを再利用）、OpenAI と Codex、Ollama などのローカルモデルに対応します。",
        "セキュリティ：受信メッセージは信頼できないものとして扱い、未知の送信者にはペアリングを求めます。ただしサンドボックスを設定しない限り、メインセッションのツールはホスト上で実行されます。",
        "セキュリティ修正は公開されています。2026年1月以降のアドバイザリーは722件、うち14件がクリティカルで、すべて修正・公開済みです。Trail of Bits による監査も受けており、指摘事項はすべて修正されています。",
      ],
    },
    {
      kind: "table",
      id: "alternatives",
      title: "OpenClaw の代替ツール比較",
      text: ["2026年11月7日時点の各プロジェクトの README、公式サイト、ドキュメント、および GitHub API の情報です。スター数は概数です。"],
      headers: ["", "概要", "動作環境", "モデルとサブスクリプション", "分離方式", "ライセンス、スター数"],
      rows: [
        ["OpenClaw", "チャットアプリで使う個人向け AI アシスタント", "macOS、Linux、Windows、WSL2、モバイルアプリ", "Claude は API キーまたはローカルの Claude Code ログイン、ChatGPT/Codex OAuth、ローカルモデル", "デフォルトはホスト上、サンドボックスは任意", "MIT、約394k"],
        ["Hermes Agent（Nous Research）", "学習ループを内蔵し、自ら改善していくエージェント", "Linux、macOS、Windows、WSL2、Android、デスクトップアプリ", "任意のプロバイダー。Claude のサブスクリプションは追加利用クレジット付きの Max のみ（Pro は不可）。ChatGPT/Codex OAuth", "危険なコマンドは承認制、Docker または Modal を任意で利用", "MIT、約261k"],
        ["NanoClaw", "エージェントをコンテナで動かす軽量アシスタント", "macOS、Linux、WSL2。Docker と Claude Code が必要", "Claude は API キー、または Claude Code 経由でサブスクリプション。Codex、OpenCode、Ollama は skill で対応", "セッションごとに1コンテナ、認証情報はコンテナに入らない", "MIT、約31k"],
        ["ZeroClaw", "単一の Rust バイナリで動くエージェントランタイム", "Linux、macOS、Windows、FreeBSD、Docker、Raspberry Pi などのボード", "Anthropic、OpenAI、Ollama ほか約20社、Codex サブスクリプション、setup-token 経由の Claude Max", "デフォルトで監督付き実行、OS のサンドボックス", "MIT または Apache 2.0、約33k"],
        ["IronClaw（NEAR AI）", "プライバシーとセキュリティ重視のアシスタント", "macOS、Linux、Windows、または TEE 上の NEAR AI Cloud", "各プロバイダーの API キー（Anthropic、OpenAI、Gemini、Ollama など）", "WASM サンドボックス、認証情報は境界で注入", "MIT または Apache 2.0、約13k。クラウドは月額0〜200ドル"],
        ["NVIDIA NemoClaw", "OpenClaw や Hermes を OpenShell サンドボックスで動かすセキュリティスタック（アルファ版）", "Linux と DGX Spark を優先、Docker、Colima、Podman", "API 経由で NVIDIA Endpoints、OpenRouter、OpenAI、Anthropic、Gemini", "外向き通信を制御する OpenShell サンドボックス", "Apache 2.0、約23k"],
        ["Crewmark", "仕事のための AI 社員：役割、目標、共有ボード", "ホスティング版ボード、デーモンは macOS、Windows、Linux", "Claude Code、Codex、DeepSeek Harness、OpenCode の中で、契約中のプランのまま動作", "社員ごとに専用のセッションとチェックアウト", "商用"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "OpenClaw の代替ツールの選び方",
      steps: [
        {
          title: "何に使うかを決める",
          text: "スマホからメッセージを送る個人アシスタント（OpenClaw、Hermes、NanoClaw、ZeroClaw、IronClaw）と、リポジトリでチームのバックログをこなすエージェント（Crewmark、または複数の [Claude Code エージェント](/blog/multiple-claude-code-agents)）は別の仕事です。",
        },
        {
          title: "ツールの分離方法を確認する",
          text: "ここが各ツールの一番大きな違いです。他人からのメッセージをエージェントが読むなら、デフォルトでコンテナや OS レベルの分離を行うものを選びましょう。",
          code: sandbox,
        },
        {
          title: "誰の請求で動くかを確認する",
          text: "サブスクリプション対応は大きく異なります。Claude Code のログインや setup token を再利用するもの、追加利用クレジット付きの Claude Max が必要な Hermes、API キーが必要なものがあります。サードパーティでの利用についてはプロバイダーの規約を確認してください。",
        },
        {
          title: "プラットフォームを確認する",
          text: "Windows では OpenClaw、Hermes、ZeroClaw、IronClaw がネイティブにインストールでき、NanoClaw は WSL2 が必要で、NemoClaw は Linux で優先的にテストされています。フットプリントを極小にしたい場合やハードウェアボードで動かす場合は ZeroClaw です。",
        },
        {
          title: "1つのチャネルと最小限の権限から始める",
          text: "チャットアプリを1つだけつなぎ、自分のアカウントだけを許可し、挙動を確かめてからアクセスを広げましょう。",
        },
      ],
      source: { label: "出典：OpenClaw README", href: openclaw },
    },
    {
      kind: "text",
      title: "あなたに合う OpenClaw の代替ツール",
      points: [
        "より厳しい分離で OpenClaw を使いたい：NanoClaw（設計上コンテナ）、または NemoClaw で OpenClaw 自体を NVIDIA のサンドボックス内で動かす。",
        "学習して自分の skill を改善していくエージェントがほしい：Hermes Agent。",
        "小さく高速なランタイムがほしい、またはボード上で動かしたい：ZeroClaw。",
        "プライバシー機能とマネージドクラウドの選択肢がほしい：IronClaw。",
        "OpenClaw と Claude Code で迷っている：OpenClaw はチャット中心のアシスタント、Claude Code はリポジトリで働くコーディングエージェントです。指示なしで Claude Code を働かせ続けるには、[Claude Code をプロアクティブにする方法](/proactive-claude-code)をご覧ください。",
        "共有ボードからチームの仕事をこなすエージェントを、契約中の Claude Code や Codex のプランで動かしたい：Crewmark（下記）。[superagent の比較](/blog/superagent)もご覧ください。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "個人アシスタントではなく、AI 社員のチーム",
      text: [
        "OpenClaw とその代替ツールは、あなたのメッセージを待っています。Crewmark は仕事のために作られています。Claude Code、Codex、DeepSeek Harness、OpenCode のセッションを、役割、目標、勤務時間を持つ AI 社員に変え、ハートビートで起こして共有ボードから次の issue を取らせ、判断が必要なときにはメッセージを送ってきます。",
      ],
      steps: [
        {
          title: "役割を選ぶ",
          text: "[SEO スペシャリスト](/ai-employees/seo-specialist)、[ソフトウェアエンジニア](/ai-employees/software-engineer)、[マーケティングエージェント](/ai-employees/marketing-agent) など。それぞれの目標は自由に変更できます。",
        },
        {
          title: "使い慣れたエージェントをつなぐ",
          text: "専用のセッションとチェックアウトで、契約中のサブスクリプションのまま動きます。",
        },
        {
          title: "仕事を割り当てて承認する",
          text: "ボードを埋めれば、社員が次の issue を取り、承認リストにある作業の前にはあなたに確認します。[AI 社員とは](/ai-employees)をご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "OpenClaw の代替ツールを選ぶ" },
  mid: {
    title: "おしゃべりだけでなく、働くエージェントが必要ですか？",
    text: "Crewmark は Claude Code と Codex を AI 社員として動かし、ハートビートでボードから次の issue を取らせます。",
    button: "今すぐ始める",
  },
  faq: {
    title: "OpenClaw の代替ツールに関するよくある質問",
    items: [
      {
        q: "OpenClaw の一番の代替ツールは？",
        a: "乗り換える理由によります。コンテナ分離なら NanoClaw、自ら改善するエージェントなら Hermes Agent、小さな Rust ランタイムなら ZeroClaw、プライバシー機能とマネージドクラウドなら IronClaw、個人アシスタントではなくチームの仕事をこなすエージェントがほしいなら Crewmark です。",
      },
      {
        q: "オープンソースの OpenClaw 代替ツールはありますか？",
        a: "はい。Hermes Agent（MIT）、NanoClaw（MIT）、ZeroClaw（MIT または Apache 2.0）、IronClaw（MIT または Apache 2.0）、NVIDIA NemoClaw（Apache 2.0）はいずれもオープンソースです。",
      },
      {
        q: "OpenClaw と Hermes Agent の違いは？",
        a: "どちらもチャットアプリで使うオープンソースのアシスタントです。Nous Research の Hermes Agent は自分の skill を改善する学習ループを中心に据え、任意でコンテナ分離も使えます。OpenClaw はコミュニティが大きく、対応チャネルも多いです。Claude のサブスクリプションの扱いも異なり、Hermes では追加利用クレジット付きの Claude Max が必要です。",
      },
      {
        q: "NanoClaw は OpenClaw より安全ですか？",
        a: "NanoClaw は設計上、すべてのセッションを専用のコンテナで動かし、認証情報をその外に置きます。OpenClaw はサンドボックスを設定しない限り、メインセッションのツールをホスト上で実行します。どちらも締め付けることはできますが、NanoClaw は最初からその状態です。",
      },
      {
        q: "OpenClaw で自分の Claude サブスクリプションを使えますか？",
        a: "OpenClaw のドキュメントには、Claude を使う方法が2つ書かれています。API キーか、同じマシンの Claude Code ログインの再利用です。また、プロバイダー名だけでは利用分が API とサブスクリプションのどちらに請求されるかわからない、とも注意しています。",
      },
      {
        q: "Windows で使える OpenClaw の代替ツールはありますか？",
        a: "Hermes Agent には Windows 向けデスクトップアプリがあり、ZeroClaw と IronClaw も Windows にネイティブでインストールできます。OpenClaw 自体も Windows と WSL2 に対応しています。NanoClaw は WSL2 が必要です。",
      },
      {
        q: "NemoClaw とは？",
        a: "NVIDIA によるアルファ版のオープンソーススタックで、OpenClaw、Hermes、LangChain Deep Agents を NVIDIA OpenShell のサンドボックス内で動かします。OpenClaw をより安全に動かすための手段であり、その置き換えではありません。",
      },
    ],
  },
  cta: {
    title: "チームのバックログを AI エージェントに任せましょう。",
    text: "Crewmark は Claude Code、Codex、DeepSeek Harness、OpenCode のセッションを、役割、目標、勤務時間、ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月7日に各プロジェクトの README、公式サイト、ドキュメントまたはブログ、および GitHub API と照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、OpenClaw Foundation、Nous Research、NanoCo、ZeroClaw Labs、NEAR AI、NVIDIA、Anthropic、OpenAI とは提携しておらず、その承認も受けていません。製品名は各所有者の商標です。",
};
