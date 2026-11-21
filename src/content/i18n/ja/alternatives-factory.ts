import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /alternatives/factory; the English master is
// src/content/product-alternatives/factory.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Factory AI の代替（2026）：コーディングエージェントを比較",
    description:
      "Factory AI の代替を比較：Devin、Claude Code、Codex、オープンソースの OpenCode、Cursor Projects、Conductor の料金、制限、向いている人。",
  },
  breadcrumb: "Factory の代替",
  parent: { name: "製品比較", href: "/compare" },
  hero: {
    kicker: "代替 · Factory",
    title: "Factory AI の代替：Devin、Claude Code、Codex、OpenCode などを比較",
    lead: "Factory は、Droids と呼ばれるコーディングエージェントを提供しています。Droids は、デスクトップの Factory App、Droid CLI、CI でのヘッドレス実行、Factory がホストするクラウドコンピューターで動きます。個人向けプランは、Free（推論を自分で用意）から月 $200 までです。Pro、Plus、Max には 5 時間・7 日間・30 日間のローリング方式のレート制限があり、Teams は 10 シートが上限で、Droid CLI と Factory App にはオープンソースのライセンスがありません。ここでは、Devin や Claude Code からオープンソースの OpenCode まで、7 つの代替を、それぞれの費用とあわせて紹介します。",
    cta: "今すぐ始める",
    secondary: "比較する",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Factory の代替を一覧で比較",
      text: [
        "各ベンダー自身のページ、ドキュメント、GitHub の情報で、2026年11月13日に確認しました。価格は米ドルです。順位付けではありません。Factory 自身のプランは [Factory の料金](/pricing/factory)にあります。",
      ],
      headers: ["代替製品", "どんな製品か", "オープンソース", "最低価格"],
      rows: [
        [
          "[Factory](/pricing/factory)（参考）",
          "Droids：デスクトップアプリ、CLI、CI、Factory がホストするクラウドコンピューターで動くコーディングエージェント",
          "いいえ",
          "推論を自分で用意すれば Free 月 $0。Pro 月 $20",
        ],
        [
          "[Devin](/pricing/devin)",
          "Cognition の AI ソフトウェアエンジニア：セッションごとのクラウド VM と、Devin Desktop、Devin CLI",
          "いいえ",
          "Free $0（少なめの利用枠）。Pro 月 $20",
        ],
        [
          "[Claude Code](/compare/factory-vs-claude-code)",
          "ターミナル、IDE、デスクトップアプリ、Web、モバイルで使える Anthropic のコーディングエージェント",
          "いいえ（リポジトリは公開、著作権はすべて留保）",
          "Claude の有料プランに含まれる：Pro 月 $20、年払いなら月 $17",
        ],
        [
          "[Codex](/blog/claude-code-vs-codex)",
          "OpenAI のコーディングエージェント：CLI、IDE 拡張機能、ChatGPT デスクトップアプリ、Codex Cloud",
          "一部：CLI、SDK、App Server は Apache-2.0",
          "ChatGPT のプラン（Plus 月 $20 から）に含まれる、または OpenAI の API キーで利用",
        ],
        [
          "[OpenCode](/pricing/opencode)",
          "ローカルモデルを含む 200 以上のモデルプロバイダーで動くコーディングエージェント",
          "はい、MIT",
          "無料（無料モデルあり）。OpenCode Go 月 $10",
        ],
        [
          "[Cursor Projects](/personal-agent/cursor-projects)",
          "コーディング作業を計画し、Cursor のクラウドエージェントを並列に動かすコーディネーターエージェント",
          "いいえ",
          "Cursor Premium 月 $30、または年 $300",
        ],
        [
          "[Conductor](/pricing/conductor)",
          "Claude Code、Codex、Cursor、OpenCode を git worktree で並べて動かす Mac アプリ",
          "いいえ",
          "無料で利用可能。2026年11月4日から新規登録とダウンロードを停止",
        ],
        [
          "[Crewmark](/ai-employees)",
          "あなたのパソコン上の Claude Code や Codex として動く AI 社員のための issue ボード",
          "はい、GPL-3.0",
          "無料（1 プロジェクト、AI 社員 3 人まで）。Pro 月 $5 は近日提供",
        ],
      ],
    },
    {
      kind: "text",
      id: "cloud",
      title: "Droids のようなクラウドのコーディングエージェント",
      text: [
        "Factory の Droid Computers と同じく、ベンダーのクラウドでエージェントを動かすので、ノートパソコンを閉じても作業が続きます。",
      ],
      points: [
        "[Devin](/pricing/devin)（Cognition）：コードを書き、実行・テストし、プルリクエストを作成する AI ソフトウェアエンジニアです。クラウドのセッションはそれぞれ専用の仮想マシンで動き、ローカルでは Devin Desktop と Devin CLI も使えます。Linear と Jira のチケットを受け付け、スケジュールやイベントで Automations を実行し、コーディネーターのセッションが子の Devin を起動してメッセージを送れます。Free $0（少なめの利用枠）、Pro 月 $20、Max 月 $200 で、Teams は「チームプランが月 $80、フル開発者シートごとに月 $40」で最大 100 ユーザーです。チケットをエージェントに渡してプルリクエストを受け取りたい場合や、10 シートを超えるチームプランが必要な場合に向いています。詳しくは [Devin の代替ツール](/blog/devin-alternatives)、[Devin vs Claude Code](/compare/devin-vs-claude-code) で。",
        "[Cursor Projects](/personal-agent/cursor-projects)：Cursor の機能で、コーディネーターエージェントが機能、移行、アプリ全体といった仕事を計画し、Cursor の Cloud Agents 上で並列に動くエージェントに任せ、完成した仕事をあなたの確認のために持ち帰ります。Project にはタスクボードと共有のメモがあり、スケジュール、Slack チャンネル、あなたのプルリクエストをきっかけに動けます。Cursor Premium（月 $30、または年 $300）以上、Teams、Enterprise で使え、Free と Plus には含まれません。すでに Cursor で仕事をしていて、1 つのコーディネーターに多数のクラウドエージェントを動かさせたいなら、これが向いています。",
      ],
    },
    {
      kind: "text",
      id: "labs",
      title: "Anthropic と OpenAI のコーディングエージェント",
      text: [
        "Factory の Free プランは、ChatGPT のサインインや自分の API キーで使えます。すでに Anthropic や OpenAI に支払っているなら、それぞれのコーディングエージェントがそのプランに含まれています。並べて比較：[Factory vs Claude Code](/compare/factory-vs-claude-code)、[Claude Code vs Codex](/blog/claude-code-vs-codex)、[ChatGPT Work vs Codex](/compare/chatgpt-work-vs-codex)。",
      ],
      points: [
        "[Claude Code](/compare/factory-vs-claude-code)（Anthropic）：ターミナル、IDE 拡張機能、デスクトップアプリ、Web、Claude のモバイルアプリから、Claude モデルを使ってコードベースを読み、ファイルを編集し、コマンドを実行します。クラウドのスケジュールタスク、デスクトップのスケジュールタスク、`/loop` があり、サブエージェントと実験的な agent teams も備えています。Claude の有料プランに含まれ、Free にはありません。Pro 月 $20（年払いなら月 $17）、Max $100、Ultra $200 のほか、2 人から 150 人向けの Team シートがあります。すでに Claude に支払っているなら、これが向いています。",
        "[Codex](/blog/claude-code-vs-codex)（OpenAI）：ターミナルの CLI、IDE 拡張機能、ChatGPT デスクトップアプリ、Codex Cloud で使えるコーディングエージェントで、スクリプトや CI 向けに `codex exec` があります。CLI、SDK、App Server は Apache-2.0 のオープンソースです。ChatGPT のプランに含まれ、Plus は月 $20 から、Pro は月 $100 から、Business は年払いで 1 ユーザーあたり月 $20 からです。OpenAI の API キーでも使えます（CLI、SDK、IDE 拡張機能のみ）。すでに ChatGPT に支払っている場合や、オープンソースの CLI がほしい場合に向いています。[Devin vs Codex](/compare/devin-vs-codex) をご覧ください。",
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "オープンソースの Factory の代替：OpenCode",
      points: [
        "[OpenCode](/pricing/opencode)：ローカルモデルを含む 200 以上のモデルプロバイダーで動く、MIT ライセンスのコーディングエージェントで、ターミナル UI、デスクトップアプリ、Web アプリ、SDK として使えます。アカウント不要の無料モデル（1 日あたりのリクエスト数に上限あり）で始めることも、ChatGPT Plus や Pro、GitHub Copilot でログインすることも、自分の API キーを持ち込むことも、OpenCode Go（月 $10）や Go Plus（月 $40）に支払うこともできます。カスタムエージェントとサブエージェントはリポジトリ内のファイルで、アクションごとに allow、ask、deny のルールを設定できます。スケジュール実行は実験的なオプトイン機能です。ほぼどんなモデルでも使えるオープンソースのエージェントがほしいなら、これが向いています。詳しくは [OpenCode の代替ツール](/blog/opencode-alternatives)、[OpenCode vs Claude Code](/compare/opencode-vs-claude-code) で。",
      ],
    },
    {
      kind: "text",
      id: "parallel",
      title: "複数のエージェントを並べて動かす：Conductor",
      points: [
        "[Conductor](/pricing/conductor)：Claude Code、Codex、Cursor、OpenCode のエージェントを、タスクごとに専用の git worktree で並べて動かす Mac アプリで、diff のレビュー、プルリクエストの作成、マージを手助けします。2026年11月4日に Meta への合流を発表し、新規登録とダウンロードを締め切りました。Conductor Cloud は 2026年11月13日に読み取り専用になり、2026年11月20日に終了します。ローカルアプリには 2027年初めまで新しいモデルと重大なバグの修正が提供されます。すでに Mac にインストールしている場合に限って選びましょう。詳しくは [Conductor の代替ツール](/blog/conductor-alternatives)、[Vibe Kanban vs Conductor](/compare/vibe-kanban-vs-conductor) で。",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Factory の代替の選び方",
      steps: [
        {
          title: "エージェントを動かす場所を決める",
          text: "Devin と Cursor Projects は、Droid Computers と同じくベンダーのクラウドで動きます。Claude Code と Codex は、あなたのマシンと各社のクラウドで動きます。OpenCode はあなたのマシンで動きます。Conductor は Mac 上でローカルに動きます。",
        },
        {
          title: "シート数を数える",
          text: "Factory Teams は 10 シートが上限です。Devin Teams は最大 100 ユーザー、Claude Code の Team プランは 2 人から 150 人まで、Codex Business は 2 ユーザーから、Cursor Teams はシート単位の料金です。",
        },
        {
          title: "利用量の制限方法を確認する",
          text: "Factory の Pro、Plus、Max には、5 時間・7 日間・30 日間のローリング方式の制限と、前払いの Extra Usage があります。Devin は 1 日ごと、1 週間ごと、またはその両方の利用枠と、前払いのクレジットを使います。Claude Code は 5 時間と 1 週間の制限を Claude のチャットと共有します。OpenCode の無料モデルには 1 日あたりのリクエスト数の上限があります。",
        },
        {
          title: "オープンソースが必要かを決める",
          text: "OpenCode は MIT、Codex の CLI は Apache-2.0 です。Factory、Devin、Claude Code、Cursor Projects、Conductor は、製品自体にオープンソースのライセンスを公開していません。",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "Crewmark：Claude Code や Codex に職種とスケジュールを",
      text: [
        "Crewmark はコーディングエージェントではありません。AI 社員のチームのための issue トラッカーで、各社員はあなたのパソコン上の Claude Code または Codex の会話として、職種、目標、勤務時間を持ちます。すでに支払っているエージェントのサブスクリプションのまま、ハートビートで起動し、共有ボードから issue を取り、そのステータスを最新に保ちます。ハートビートのためにパソコンは起動したままにしておく必要があります。",
        "オープンソース（GPL-3.0）で、セルフホストもできます。Free プランは 1 プロジェクト、AI 社員 3 人までです。Pro（月 $5）と Team（月 $10）は近日提供予定で、課金の仕組みはまだできていないため、それまではすべてのアカウントが Crewmark を無料で使えます。エージェントの利用料はエージェントのプロバイダーに支払います。詳しくは [Crewmark の料金](/pricing)で。",
      ],
      steps: [
        {
          title: "職種を選ぶ",
          text: "各社員に、職種、目標、プロジェクトを与えます。たとえばソフトウェアエンジニアです。[AI 社員の職種](/ai-employees)をご覧ください。",
        },
        {
          title: "仕事をボードに載せる",
          text: "ステータスと優先度を付けて issue を割り当て、定期的なものは繰り返すよう設定します。エージェント同士が issue を割り当て合い、@メンションし合います。レビューや許可が必要になると、エージェントは issue を「要対応」にして待ちます。",
        },
        {
          title: "勤務時間を設定する",
          text: "勤務時間中、ハートビートが 15 分から 24 時間ごとに各社員を起こします。セットアップ付きの仕事の例は [Claude Code の活用例](/use-cases/claude-code)と [Codex の活用例](/use-cases/codex)にあります。",
        },
      ],
    },
  ],
  mid: {
    title: "すでに Claude Code や Codex に支払っていますか？",
    text: "Crewmark はそれらに職種、ハートビート、共有ボードを与え、プロンプトがなくても働き続けるようにします。社員 3 人までは無料です。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Factory の代替に関するよくある質問",
    items: [
      {
        q: "無料の Factory AI の代替はありますか？",
        a: "OpenCode は無料で、アカウント不要の無料モデルがあります（1 日あたりのリクエスト数に上限あり）。Devin には少なめの利用枠付きの Free プランがあります。Crewmark の Free プランは 1 プロジェクト、AI 社員 3 人までです。Factory 自体にも、推論を自分で用意すれば月 $0 の Free プランがあります。ChatGPT、GitHub Copilot、OpenRouter でサインインするか、自分の API キーを接続します。",
      },
      {
        q: "Factory の Droids のオープンソースの代替はありますか？",
        a: "OpenCode（MIT）は完全にオープンソースのコーディングエージェントで、Codex の CLI、SDK、App Server は Apache-2.0 です。Crewmark（GPL-3.0）もオープンソースですが、独自のエージェントではなく Claude Code や Codex を動かします。Factory は Droid CLI と Factory App にオープンソースのライセンスを公開しておらず、github.com/Factory-AI/factory リポジトリにあるのは README とドキュメントだけです。",
      },
      {
        q: "Factory と Devin の違いは？",
        a: "どちらもクラウドとローカルで動き、Linear と Jira の issue を受け付け、自動化を実行します。Factory の Droids は Factory App、Droid CLI、CI、Droid Computers で動き、Devin はクラウドのセッションをそれぞれ専用の VM で動かすほか、Devin Desktop と Devin CLI もあります。どちらも Pro は月 $20 です。Factory Teams はチームあたり月 $60 に加えて個人あたり月 $40 で最大 10 シート、Devin Teams は「チームプランが月 $80、フル開発者シートごとに月 $40」で最大 100 ユーザーです。",
      },
      {
        q: "Factory と Claude Code の違いは？",
        a: "Claude Code は Claude モデルで動く Anthropic 自身のエージェントで、Claude の有料プランに含まれます。Factory の Droids は GPT-5、Claude Opus と Sonnet、Gemini、オープンウェイトモデル、または自分のキーで動き、ホスティング型の Droid Computers、Slack・Linear・Jira からの委任、スケジュールされた自動化を加えています。[Factory vs Claude Code](/compare/factory-vs-claude-code) をご覧ください。",
      },
      {
        q: "Factory に払う代わりに、ChatGPT のサブスクリプションを使えますか？",
        a: "Codex は、Plus の月 $20 からの ChatGPT のプランに含まれます。OpenCode には ChatGPT Plus や Pro でログインでき、Devin の Pro、Max、Teams プランでは、連携した ChatGPT のプランを GPT モデルの利用に使えます。Factory 自身の Free プランでも ChatGPT でサインインできます。Crewmark は、あなたの ChatGPT のサブスクリプションで Codex を動かします。",
      },
      {
        q: "複数のエージェントを並列に動かせる Factory の代替は？",
        a: "Devin のコーディネーターのセッションは、子の Devin を起動してメッセージを送ります。Cursor Projects は、Cursor のクラウドでコーディネーターとワーカーエージェントを動かします。Claude Code にはサブエージェントと実験的な agent teams があり、Codex はサブエージェントを並列に起動し、OpenCode は同じプロジェクトで複数のエージェントを起動できます。Crewmark は、1 つの共有ボードから AI 社員のチームを動かします。",
      },
    ],
  },
  cta: {
    title: "コーディングエージェントに、プロンプトだけでなく仕事を。",
    text: "Crewmark は、Claude Code と Codex のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月13日に、各製品自身のページ、ドキュメント、料金、GitHub と照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Factory、Cognition、Anthropic、OpenAI、Anomaly、Cursor、Conductor、Meta とは提携しておらず、その承認も受けていません。製品名は各所有者の商標です。他製品に関する情報は公開ページに基づくもので、その後変更されている可能性があります。",
};
