import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /alternatives/hermes-agent; the English master is
// src/content/product-alternatives/hermes-agent.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Hermes Agent の代替（2026）：オープンソースとホスティング型",
    description:
      "Hermes Agent の代替を比較：OpenClaw、OpenCode、OpenWorker、OpenBot、Claude Code、Grok Bot、Crewmark のライセンス、料金、Windows 対応。",
  },
  breadcrumb: "Hermes Agent の代替",
  parent: { name: "製品比較", href: "/compare" },
  hero: {
    kicker: "代替 · Nous Research Hermes Agent",
    title: "Hermes Agent の代替：オープンソースのエージェント、コーディングエージェント、ホスティング型の Bot",
    lead: "Hermes Agent は、Nous Research のオープンソース（MIT）の個人向け AI エージェントです。ターミナル、デスクトップアプリ、チャットアプリから使い、経験からスキルを書き、自分の記憶を持ち、内蔵の cron スケジューラーでルーティンを実行します。Nous Portal の有料プランでエージェントを 1 つホストしてもらう場合を除き、自分のマシンやサーバーで自分で動かします。Claude のサブスクリプションで使うには、Claude Max に加えて追加使用量の購入が必要で、Claude Pro のユーザーは API キーが必要です。ここでは 7 つの代替を、ライセンス、料金、Windows を含む対応プラットフォームとあわせて紹介します。",
    cta: "今すぐ始める",
    secondary: "比較を見る",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Hermes Agent の代替を一覧で比較",
      text: [
        "各製品の README、ドキュメント、料金ページの情報で、2026年11月13日に確認しました。価格は米ドルです。Hermes Agent 自体は無料で、別途モデルプロバイダーの料金がかかります。Nous Portal のプランは Plus 月 $20、Super 月 $100、Ultra 月 $200 です。詳しくは [Hermes Agent の料金](/pricing/hermes-agent)で。",
      ],
      headers: ["代替製品", "どんな製品か", "オープンソース", "最低価格"],
      rows: [
        [
          "[OpenClaw](/blog/hermes-agent-vs-openclaw)",
          "あなたのパソコンで動き、チャットアプリで応答する個人向け AI アシスタント",
          "はい（MIT）",
          "無料。有料プランやホスティングサービスはなし。支払うのはモデルプロバイダーへの料金のみ",
        ],
        [
          "[OpenCode](/pricing/opencode)",
          "ローカルモデルを含む 200 以上のプロバイダーのモデルで動くコーディングエージェント。ターミナル UI、デスクトップアプリ、Web アプリ、SDK として利用",
          "はい（MIT）",
          "無料。無料モデルあり（1 日あたりのリクエスト数に上限）。OpenCode Go は月 $10",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "「日々の仕事のための AI の同僚」（“An AI coworker for your everyday work”）をうたうデスクトップアプリと、エージェント型アプリを作るための Harness SDK",
          "はい（MIT）",
          "料金の記載なし。自分のモデルのキーまたはローカルモデルを使用",
        ],
        [
          "[OpenBot](/personal-agent/openbot)",
          "各 Bot が専用のブラウザ、ファイル、ツールを持つ、CopilotKit のセルフホスト可能な AI の同僚のためのワークスペース",
          "はい（アプリケーションテンプレートは MIT。別ライセンスの CopilotKit Intelligence を使用）",
          "個人プロジェクトは無料。Business はアクティブユーザーあたり月最大 $29",
        ],
        [
          "[Claude Code](/compare/hermes-agent-vs-claude-code)",
          "Anthropic のコーディングエージェント。ターミナル、IDE 拡張機能、デスクトップアプリ、Web、モバイルで利用",
          "いいえ",
          "Claude の有料プラン。Pro の月 $20（年払いなら月 $17）から",
        ],
        [
          "[Grok Bot](/compare/grok-bot-vs-hermes-agent)",
          "xAI のホスティング型 AI チームメイト。各 Bot がクラウドに専用のコンピューターを持つ",
          "いいえ",
          "Premium 月 $30（月払い）",
        ],
        [
          "[Crewmark](/ai-employees)",
          "AI 社員のチームのための issue トラッカー。各社員はあなたのパソコン上の Claude Code または Codex の会話で、ハートビートで起動する",
          "はい（GPL-3.0）",
          "無料（1 プロジェクト、AI 社員 3 人まで）。Pro 月 $5 は近日提供。エージェントの利用料はエージェントのプロバイダーに支払い",
        ],
      ],
    },
    {
      kind: "table",
      id: "windows",
      title: "Windows で使える Hermes Agent の代替",
      text: [
        "Hermes Agent 自体は、ネイティブの Windows（PowerShell）と WSL2 で動き、デスクトップアプリは Windows 10 と 11 に対応しています。各代替が挙げている対応状況は次のとおりです。",
      ],
      headers: ["製品", "Windows", "そのほかのプラットフォーム"],
      rows: [
        [
          "Hermes Agent",
          "ネイティブの Windows（PowerShell）と WSL2。Windows 10/11 向けのデスクトップアプリ（Microsoft Store または .exe）",
          "Linux、macOS、Termux 経由の Android。macOS 12 以降と Linux 向けのデスクトップアプリ",
        ],
        ["OpenClaw", "Windows（PowerShell）と WSL2 向けのインストーラー。ネイティブの Windows アプリ", "macOS と Linux。macOS、iOS、Android、Linux 向けのアプリ"],
        [
          "OpenCode",
          "Windows 向けの CLI バイナリ（x64、ARM64）。デスクトップアプリ（ベータ表記）。Windows のパッケージマネージャーには非対応",
          "macOS と Linux 向けの CLI とデスクトップアプリ。TestFlight 経由の iPhone アプリ",
        ],
        ["OpenWorker", "Windows 10/11 x64。ビルドはまだコード署名されていないため、SmartScreen が警告を表示", "macOS 12 以降（Apple シリコン）。Linux 版のダウンロードは記載なし"],
        ["OpenBot", "Windows 向けのデスクトップアプリ（Docker バックエンド）", "macOS 向けのデスクトップアプリ。チーム向けには Kubernetes"],
        [
          "Claude Code",
          "Windows 10 1809 以降または Windows Server 2019 以降で CLI。Windows 向けのデスクトップアプリ（x64 と ARM64）",
          "macOS、Linux、Web、iOS、Android",
        ],
        [
          "Grok Bot",
          "x.ai のガイドには Mac、Windows、Linux、スマートフォンが記載。各 Bot は専用のクラウドコンピューターで作業",
          "x.ai/bot で macOS（Apple シリコン）版をダウンロード可能。iOS",
        ],
        ["Crewmark", "Windows 向けの `crewmark` CLI", "macOS と Linux 向けの CLI。Web アプリ"],
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "そのほかのオープンソースの個人向けエージェント",
      text: ["Hermes Agent と同じく、自分で管理するハードウェア上で、自分で選んだモデルで動きます。"],
      points: [
        "OpenClaw：MIT ライセンスのアシスタントで、あなたのパソコン上で Gateway として動き、WhatsApp、Telegram、Slack、Discord、iMessage などのチャットアプリで応答します。1 つの Gateway で複数のエージェントを動かし、Automations スケジューラーを内蔵しており、有料プランやホスティングサービスはありません。Claude は、API キーか、同じホストの Claude Code のログインを再利用して使います。普段のチャットアプリからメッセージを送れるアシスタントを、モデルプロバイダーを切り替えながら使いたいなら、これが向いています。比較は [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw)、詳しくは [OpenClaw の代替ツール](/blog/openclaw-alternatives)で。",
        "OpenWorker：Andrew Ng の GitHub アカウントにある MIT ライセンスのデスクトップアプリで、macOS と Windows 向けにオープンベータ中です。アクションはデフォルトで承認が必要で、すべてのツール呼び出しが記録され、朝のブリーフィングや週次レポートをスケジュールできます。Slack でメンションすると、スレッドで返信もします。自分のモデルのキーかローカルモデルを使って自分のマシンでエージェントを動かし、どのアクションに承認が必要かを自分で決めたいなら、これが向いています。ガイド：[OpenWorker](/personal-agent/openworker)。",
        "OpenBot：CopilotKit の、セルフホスト可能な AI の同僚のためのワークスペースです。各 Bot が専用のコンピューター（ブラウザ、ファイル、ツール）、ルーティン、記憶、承認、アクティビティログを持ちます。アプリケーションテンプレートは MIT で、別ライセンスの CopilotKit Intelligence を使います（ノートパソコンでは無料、Kubernetes での本番利用にはライセンスが必要）。自分でホストしてカスタマイズできる AI の同僚を、自分のモデルや、ほかのスタックで作ったエージェントとともに使いたいなら、これが向いています。ガイド：[OpenBot](/personal-agent/openbot)。",
      ],
    },
    {
      kind: "text",
      id: "coding",
      title: "コーディングエージェント",
      text: [
        "Hermes Agent に任せている仕事の大半がコードなら、こちらはそのために作られています。比較：[OpenCode vs Claude Code](/compare/opencode-vs-claude-code)。",
      ],
      points: [
        "OpenCode：ローカルモデルを含む 200 以上のプロバイダーのモデルで動く、MIT ライセンスのコーディングエージェントです。無料モデルはアカウントなしで使え（1 日あたりのリクエスト数に上限あり）、OpenCode Go は月 $10 です。ChatGPT Plus や Pro、GitHub Copilot でサインインすることも、自分の API キーを持ち込むこともできます。リポジトリ内のファイルとしてカスタムエージェントとサブエージェントを定義し、アクションごとに権限ルールを設けたいなら、これが向いています。詳しくは [OpenCode の代替ツール](/blog/opencode-alternatives)で。",
        "Claude Code：Anthropic のコーディングエージェントで、サブエージェント、実験的な agent teams、クラウドで動くスケジュールタスクを備えています。オープンソースではなく、Claude の有料プランに含まれ、Pro の月 $20 からです。すでに Claude のプランに支払っているなら、これが向いています。Hermes Agent で Claude のサブスクリプションを使えるのは、追加使用量を購入した Max の場合だけです。[Hermes Agent vs Claude Code](/compare/hermes-agent-vs-claude-code) をご覧ください。",
      ],
    },
    {
      kind: "text",
      id: "hosted",
      title: "ホスティング型の選択肢",
      points: [
        "Grok Bot：xAI のホスティング型 AI チームメイトです。各 Bot はクラウドに専用のコンピューターを持ち、ノートパソコンを閉じても作業を続けます。Bot はあなたのツールにサインインし、Slack、Microsoft Teams、ビデオ通話の中で働き、スケジュールに沿ってルーティンを実行し、互いにメッセージを送り合います。オープンソースではなく、プランは Premium の月 $30 からです。サーバーを運用せずに、チームがすでに使っているアプリの中で働く Bot がほしいなら、これが向いています。[Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent) と [Grok Bot の代替](/alternatives/grok-bot)をご覧ください。",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Hermes Agent の代替の選び方",
      steps: [
        {
          title: "オープンソースにこだわりますか？",
          text: "OpenClaw、OpenCode、OpenWorker は MIT です。OpenBot はアプリケーションテンプレートが MIT で、エンジンは別ライセンスです。Crewmark は GPL-3.0 です。Claude Code と Grok Bot はオープンソースではありません。",
        },
        {
          title: "Windows を使っていますか？",
          text: "Hermes Agent はすでにネイティブの Windows で動きます。代替のうち、OpenClaw、OpenCode、OpenWorker、OpenBot、Claude Code、Crewmark の CLI は、いずれも Windows 対応を挙げています。バージョンは上の表をご覧ください。",
        },
        {
          title: "すでに Claude に支払っていますか？",
          text: "Hermes Agent で Claude のサブスクリプションを使えるのは、追加使用量を購入した Max の場合だけです。OpenClaw は同じホストの Claude Code のログインを再利用でき、Claude Code は Claude の有料プランに含まれ、Crewmark はあなた自身のサブスクリプションで Claude Code を動かします。",
        },
        {
          title: "サーバーを運用したくないですか？",
          text: "Grok Bot は xAI がホストしています。Hermes Agent の Nous Portal の有料プランにはクラウドホストのエージェントが 1 つ含まれ、CopilotKit は OpenBot をアーリーアクセスでホストしています。",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "個人向けエージェントはあなたのために。AI 社員のチームはリポジトリのために。",
      text: [
        "Crewmark は、AI 社員のチームのための issue トラッカーです。各社員はあなたのパソコン上の Claude Code または Codex の会話で、職種、KPI、プロジェクトを持ちます。勤務時間中にハートビートで起動して共有ボードから issue を取り、レビューや許可が必要なときは、issue を「要対応」にしてそこで質問します。エージェント同士は issue を通じて協力し、issue を割り当て、コメントし、互いに @メンションします。",
        "GPL-3.0 のオープンソースで、1 プロジェクト・AI 社員 3 人までは無料です。エージェントのプロバイダーへの支払いはこれまでどおりで、ハートビートのためにパソコンは起動したままにしておく必要があります。プランは[料金ページ](/pricing)をご覧ください。",
      ],
      steps: [
        {
          title: "職種を選ぶ",
          text: "ソフトウェアエンジニアや SEO スペシャリストなど、[AI 社員の職種](/ai-employees)から始めて、KPI とプロジェクトを書きます。",
        },
        {
          title: "仕事をボードに載せる",
          text: "issue を社員または人に割り当て、定期的なものは毎日、毎週、毎月繰り返すよう設定します。",
        },
        {
          title: "勤務時間を設定する",
          text: "勤務時間と、15 分から 24 時間までのハートビートを選びます。セットアップ付きの仕事の例は [Claude Code の活用例](/use-cases/claude-code)と [Codex の活用例](/use-cases/codex)にあります。",
        },
      ],
    },
  ],
  mid: {
    title: "Claude Code や Codex をスケジュールどおりに働かせる",
    text: "Crewmark は、勤務時間中にハートビートでエージェントを起こし、共有ボードから次の issue を渡します。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Hermes Agent の代替に関するよくある質問",
    items: [
      {
        q: "Hermes Agent のオープンソースの代替は？",
        a: "OpenClaw、OpenCode、OpenWorker は MIT ライセンスです。OpenBot はアプリケーションテンプレートが MIT で、別ライセンスの CopilotKit Intelligence を使います。Crewmark は GPL-3.0 のオープンソースです。",
      },
      {
        q: "Windows で使える Hermes Agent の代替はありますか？",
        a: "いくつかあります。OpenClaw には Windows 向けのインストーラーとネイティブの Windows アプリがあり、OpenCode には Windows 向けの CLI バイナリとベータ版のデスクトップアプリがあります。OpenWorker は Windows 10/11 x64 で動き（まだコード署名なし）、OpenBot には Windows 向けのデスクトップアプリがあり、Claude Code は Windows 10 1809 以降で動きます。Hermes Agent 自体もネイティブの Windows で動きます。",
      },
      {
        q: "Hermes Agent と OpenClaw はどちらを使うべきですか？",
        a: "どちらも MIT ライセンスの個人向けエージェントで、自分で動かし、チャットアプリから使えます。Hermes Agent は自分のスキルと記憶を書いて改良していくことに重点を置いており、クラウドホストのエージェントが 1 つ付く有料の Nous Portal プランを任意で選べます。OpenClaw はローカルの Gateway として動き、有料プランやホスティングサービスはありません。[Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw) をご覧ください。",
      },
      {
        q: "Hermes Agent は無料ですか？",
        a: "エージェントは MIT ライセンスで無料で、支払うのはモデルプロバイダーへの料金です。Nous Portal は任意で、Free は $0（従量課金、無料モデルのみ）、Plus は月 $20、Super は $100、Ultra は $200 です。詳しくは [Hermes Agent の料金](/pricing/hermes-agent)で。",
      },
      {
        q: "Hermes Agent やその代替で、Claude のサブスクリプションを使えますか？",
        a: "Hermes Agent では、追加使用量を購入した Claude Max の場合のみ使えます。Claude Pro のユーザーは API キーが必要です。OpenClaw は同じホストの Claude Code のログインを再利用できます。Claude Code は Claude のすべての有料プランに含まれ、Crewmark はあなた自身のサブスクリプションで Claude Code を動かします。",
      },
      {
        q: "ホスティング型の Hermes Agent の代替はありますか？",
        a: "Grok Bot は xAI がホストしており、Bot ごとにクラウドコンピューターがあり、月 $30 からです。Hermes Agent 自身の Nous Portal の有料プランにはクラウドホストのエージェントが 1 つ含まれ、CopilotKit は OpenBot をアーリーアクセスでホストしています。",
      },
    ],
  },
  cta: {
    title: "コーディングエージェントに、職種とボードを。",
    text: "Crewmark は、Claude Code と Codex のセッションを、職種・KPI・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月13日に、各製品の README、ドキュメント、料金ページと照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Nous Research をはじめ、このページで名前を挙げたいずれの企業とも提携しておらず、その承認も受けていません。製品名は各所有者の商標です。他製品に関する情報は公開ページに基づくもので、その後変更されている可能性があります。",
};
