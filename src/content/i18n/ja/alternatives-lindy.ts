import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /alternatives/lindy; the English master is
// src/content/product-alternatives/lindy.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Lindy AI の代替（2026）：無料・オープンソースの選択肢",
    description:
      "Lindy AI の代替を比較：Grok Bot、Claude Cowork、Copilot Cowork、ChatGPT Work、Relevance AI、オープンソースの OpenWorker、OpenBot。無料の選択肢も。",
  },
  breadcrumb: "Lindy の代替",
  parent: { name: "製品比較", href: "/compare" },
  hero: {
    kicker: "代替 · Lindy",
    title: "Lindy AI の代替：ホスティング型の AI の同僚、エージェント基盤、オープンソースのアシスタント",
    lead: "Lindy は、受信トレイ、カレンダー、ミーティング、Slack をまたいで働くホスティング型の AI アシスタントで、定期的なルーティンを実行し、外部に影響することの前には確認を求めます。料金はクレジット制で、7 日間有効な $50 分の無料クレジットで始め、その後はアクティブユーザーあたり月 $29.99（3,000 クレジット）からです。月のクレジットは繰り越されず、Slack で Lindy を @メンションするだけの人も含め、アクティブユーザー全員が課金対象です。ここでは、ホスティング型とオープンソースの 8 つの代替を、それぞれの費用とあわせて紹介します。",
    cta: "今すぐ始める",
    secondary: "比較する",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Lindy の代替を一覧で比較",
      text: [
        "各ベンダー自身のページ、ドキュメント、GitHub の情報で、2026年11月13日に確認しました。価格は米ドルです。順位付けではありません。",
      ],
      headers: ["代替製品", "どんな製品か", "オープンソース", "最低価格"],
      rows: [
        [
          "[Lindy](/personal-agent/lindy)（参考）",
          "受信トレイ、カレンダー、ミーティング、Slack のためのホスティング型 AI アシスタント",
          "いいえ",
          "7 日間 $50 分の無料クレジット。その後はアクティブユーザーあたり月 $29.99（3,000 クレジット）から",
        ],
        [
          "[Grok Bot](/alternatives/grok-bot)",
          "それぞれがクラウドに専用のコンピューターを持つ、xAI のホスティング型 AI チームメイト",
          "いいえ",
          "Premium 月 $30",
        ],
        [
          "[Claude Cowork](/alternatives/claude-cowork)",
          "Claude のアプリでコーディング以外のナレッジワークをこなす Anthropic のエージェント",
          "いいえ",
          "Claude Pro 月 $20、年払いなら月 $17",
        ],
        [
          "[Copilot Cowork](/personal-agent/copilot-cowork)",
          "Microsoft 365 をまたいで複数ステップのタスクをこなす Microsoft のエージェント",
          "いいえ",
          "Microsoft 365 Copilot ライセンスに加えて Copilot Credits（1 クレジット $0.01）",
        ],
        [
          "[ChatGPT Work](/personal-agent/chatgpt-work)",
          "ChatGPT の中の OpenAI の Work モード。最後に確認する成果物ができあがるタスク向け",
          "いいえ",
          "Free（$0）と Go（月 $8）：制限付き、デスクトップアプリのみ。Plus 月 $20",
        ],
        [
          "[Relevance AI](/alternatives/relevance-ai)",
          "AI エージェントとマルチエージェントのチームのための、ホスティング型のローコード基盤",
          "いいえ",
          "営業経由の Enterprise のみ。Free プランは廃止",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "あなたのマシンで動く、AI の同僚のデスクトップアプリ",
          "はい、MIT",
          "料金の記載なし。自分のモデルのキーまたはローカルモデルを使用",
        ],
        [
          "[OpenBot](/personal-agent/openbot)",
          "CopilotKit のセルフホスト可能な、AI の同僚のためのワークスペース",
          "はい、MIT（別ライセンスの CopilotKit Intelligence を使用）",
          "個人プロジェクトは無料。Business はアクティブユーザーあたり月最大 $29",
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
      id: "hosted",
      title: "xAI、Anthropic、Microsoft、OpenAI のホスティング型の AI の同僚",
      text: [
        "Lindy と同じく、ベンダーのクラウドで動き、会話の中で仕事を引き受けます。ほかのものも含めた比較は [AI の同僚ツールの比較](/blog/ai-coworker)で。",
      ],
      points: [
        "[Grok Bot](/alternatives/grok-bot)（xAI）：各 Bot が専用のクラウドコンピューターを持ち、あなたのツールにサインインし、Slack や Microsoft Teams の中で働き、スケジュールに沿ってルーティンを実行し、互いにメッセージを送り合います。既製の Bot には Sales Outbound、Talent Scout、Chief of Staff があります。Premium（月 $30）、Super（月 $100）、Ultra（月 $200）に含まれ、月払いで、超過分はトークン費用で課金されます。Microsoft Teams も含め、別々の仕事を持つ複数の Bot がほしいなら、これが向いています。[Grok Bot のガイド](/personal-agent/grok-bot)をご覧ください。",
        "[Claude Cowork](/personal-agent/claude-cowork)（Anthropic）：ほしい成果を伝えると、Claude があなたのファイル、Gmail や Slack などの連携したアプリ、ブラウザの中で、リサーチ、ドキュメント、数式が機能するスプレッドシート、スライド資料の作業を進めます。スケジュールタスクは、クラウドで毎時、毎日、毎週、または平日に実行されます。Claude の有料プランに含まれ、Pro 月 $20（年払いなら月 $17）、Max $100、Ultra $200 のほか、Team と Enterprise のシートがあります。受信トレイの手伝いよりも、完成したファイルを受け取りたいなら、これが向いています。",
        "[Copilot Cowork](/personal-agent/copilot-cowork)（Microsoft）：メールの送信、会議の設定、Word・Excel・PowerPoint ファイルの編集、Teams への投稿を行い、重要な操作の前には承認ダイアログを表示します。Microsoft 365 Copilot ライセンスが必要で、利用分は 1 クレジット $0.01 の Copilot Credits で請求されます。会社が Outlook と Teams で動いているなら、これが向いています。",
        "[ChatGPT Work](/personal-agent/chatgpt-work)（OpenAI）：最後に確認する成果物ができあがるタスクのための ChatGPT の Work モードです。Slack、Google ドライブ、SharePoint、メール、カレンダー、CRM 向けのプラグイン、スケジュールタスク、対象プランでは Gmail・Slack・GitHub のトリガーがあります。Free と Go はデスクトップアプリで制限付きで使え、フル利用は Plus の月 $20 からです。すでに ChatGPT を使っているなら、これが向いています。",
      ],
    },
    {
      kind: "text",
      id: "platform",
      title: "チーム向けのエージェント基盤：Relevance AI",
      points: [
        "[Relevance AI](/alternatives/relevance-ai)：ホスティング型のローコード基盤で、独自の指示、ツール、ナレッジを持つ専門のエージェントを作り、それらを「AI Workforce」と呼ぶマルチエージェントのチームにつなげて、営業、サポート、オペレーションの仕事に使います。2026年11月13日時点で、料金ページに載っているのは営業経由の Enterprise のみで、ドキュメントには Free プランは廃止されたとあります。ノーコードのエージェントを複数持ち、ベンダーの専任チームに導入を支援してほしい会社に向いています。[Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy) と [Relevance AI の料金](/pricing/relevance-ai)をご覧ください。",
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "オープンソースの Lindy の代替",
      text: [
        "どちらも、あなたが選んだモデルを使って自分のパソコンやサーバーで動き、クレジットでの課金はありません。モデルプロバイダーに直接支払います。",
      ],
      points: [
        "[OpenWorker](/personal-agent/openworker)：macOS と Windows 向けの、MIT ライセンスの AI の同僚のデスクトップアプリで、オープンベータ中です。GitHub、Slack、メール、カレンダーをまたいで働き、Slack で @メンションすると、タスクはあなたのデスクトップで実行され、答えがスレッドに返ってきます。朝のブリーフィングや週次レポートをスケジュールでき、スケジュール実行が自分のアクションを承認することはなく、そのリクエストは受信箱で待ちます。OpenAI、Anthropic、Google Gemini、OpenRouter のキー、またはローカルモデルを使います。キーを自分のマシンに置いたまま、Lindy のようなオフィスワークの手伝いがほしいなら、これが向いています。",
        "[OpenBot](/personal-agent/openbot)（CopilotKit）：セルフホスト可能なワークスペースで、各 Bot が専用のブラウザ、ファイル、ツール、ルーティン、記憶、承認を持ちます。Mac と Windows 向けのデスクトップアプリとして、またはチーム向けに Kubernetes 上で動き、Slack や Teams などのフロントエンドがあります（一部はアーリーアクセス）。個人プロジェクトは無料で、OpenBot for Business はアクティブユーザーあたり月最大 $29 に加えて、月のモデル利用額のうち $5,000 を超えた分の 5% です。チームのための AI の同僚を自社のインフラでホストしたいなら、これが向いています。",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Lindy の代替の選び方",
      steps: [
        {
          title: "使う人数を数える",
          text: "Lindy は、Slack で @メンションするだけの人も含め、アクティブユーザー全員に課金します。Grok Bot は月 $30 からの個人向けプランを掲載し、Copilot Cowork は Microsoft 365 Copilot ライセンスが必要で Copilot Credit ごとに課金します。OpenWorker は料金の記載がなく、OpenBot は個人プロジェクトなら無料です。",
        },
        {
          title: "利用分の支払い方を決める",
          text: "Lindy の月のクレジットは繰り越されず、追加購入は 1,000 クレジットあたり $10 です。Grok Bot と、Claude や ChatGPT のプランは、利用枠付きのサブスクリプションです。OpenWorker と OpenBot では、モデルプロバイダーに直接支払います。",
        },
        {
          title: "仕事をする場所に合わせる",
          text: "Slack と Microsoft Teams なら Grok Bot。Microsoft 365 なら Copilot Cowork。ドキュメントやスプレッドシートを仕上げて返してほしいなら Claude Cowork か ChatGPT Work。営業やサポートで多くのエージェントを使うなら Relevance AI です。",
        },
        {
          title: "ホスティング型かセルフホストかを選ぶ",
          text: "Lindy、Grok Bot、Claude Cowork、Copilot Cowork、ChatGPT Work、Relevance AI はホスティング型です。OpenWorker はあなたのデスクトップで、OpenBot はノートパソコンか自社の Kubernetes クラスターで動きます。",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "Crewmark：すでに支払っている Claude Code や Codex で動く AI 社員",
      text: [
        "Crewmark は、Lindy のような受信トレイのアシスタントではありません。AI 社員のチームのための issue トラッカーで、各社員はあなたのパソコン上の Claude Code または Codex の会話として、職種、目標、勤務時間を持ちます。ハートビートで起動し、共有ボードから issue を取り、そのステータスを最新に保ちます。Crewmark は利用分を課金しません。エージェントはすでに支払っている Claude や ChatGPT のサブスクリプションで動き、ハートビートのためにパソコンは起動したままにしておく必要があります。",
        "Free プランは 1 プロジェクト、AI 社員 3 人までです。Pro（月 $5）と Team（月 $10）は近日提供予定です。課金の仕組みはまだできていないため、それまではすべてのアカウントが Crewmark を無料で使えます。オープンソース（GPL-3.0）です。詳しくは [Crewmark の料金](/pricing)で。",
      ],
      steps: [
        {
          title: "職種を選ぶ",
          text: "各社員に、職種、目標、プロジェクトを与えます。たとえば SEO スペシャリストやデータアナリストです。[AI 社員の職種](/ai-employees)をご覧ください。",
        },
        {
          title: "定期的な仕事をボードに載せる",
          text: "issue を毎日、毎週、毎月繰り返すよう設定します。期日が来ると issue が再び開き、担当の社員に通知されます。レビューや許可が必要なエージェントは、issue を「要対応」にして待ちます。",
        },
        {
          title: "勤務時間を設定する",
          text: "勤務時間中、ハートビートが 15 分から 24 時間ごとに各社員を起こします。セットアップ付きの仕事の例は [Claude Code の活用例](/use-cases/claude-code)と [Codex の活用例](/use-cases/codex)にあります。",
        },
      ],
    },
  ],
  mid: {
    title: "クレジットごとに払うのは避けたいですか？",
    text: "Crewmark は、すでにお持ちの Claude Code や Codex のサブスクリプションで AI 社員を動かします。社員 3 人までは無料です。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Lindy の代替に関するよくある質問",
    items: [
      {
        q: "無料の Lindy の代替はありますか？",
        a: "あります。ChatGPT Free（$0）には、デスクトップアプリでの制限付きの ChatGPT Work が含まれます。OpenWorker は料金の記載がなく、自分のモデルのキーかローカルモデルで動き、OpenBot は個人プロジェクトなら無料です。Crewmark の Free プランは 1 プロジェクト、AI 社員 3 人までです。Lindy 自体は、7 日間有効な $50 分のクレジットで始められます（チームメイトごとに 1 回限り）。",
      },
      {
        q: "オープンソースの Lindy の代替はありますか？",
        a: "OpenWorker（MIT）と OpenBot（別ライセンスの CopilotKit Intelligence の上で動く MIT のアプリケーションテンプレート）はオープンソースで、Crewmark（GPL-3.0）もそうです。Lindy、Grok Bot、Claude Cowork、Copilot Cowork、ChatGPT Work、Relevance AI はオープンソースではありません。",
      },
      {
        q: "Lindy と Relevance AI の違いは？",
        a: "Lindy は、受信トレイ、カレンダー、ミーティング、Slack のための 1 つのホスティング型アシスタントで、アクティブユーザーごとにクレジットで課金されます。Relevance AI は、専門のエージェントを多数作って Workforce につなげるためのローコード基盤で、料金ページに載っているのは営業経由の Enterprise のみです。[Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy) をご覧ください。",
      },
      {
        q: "Slack で使える Lindy の代替は？",
        a: "Grok Bot は、同僚のように Slack や Microsoft Teams の中で働きます。OpenWorker は Slack で @メンションするとスレッドで返信します。OpenBot には Slack のフロントエンドがあり（一部のフロントエンドはアーリーアクセス）、ChatGPT Work には Slack のプラグインと、対象プランでの Slack のトリガーがあり、Claude Cowork には Slack のコネクタがあります。",
      },
      {
        q: "自分のパソコンで動く Lindy の代替はありますか？",
        a: "OpenWorker はエージェントのループをあなたのマシンで動かし、会話とモデルのキーをそこに置きます。OpenBot は Mac と Windows 向けのデスクトップアプリとして、または自社の Kubernetes クラスターで動きます。Crewmark のエージェントは、あなたのパソコン上の Claude Code や Codex の中で動きます。",
      },
      {
        q: "Lindy の代替が探されるのはなぜですか？",
        a: "Lindy 自身が示している制限のためです。月のクレジットは繰り越されず、使い切ると、次のサイクルか追加購入（1,000 クレジットあたり $10）まで、クレジットを使う操作が一時停止します。Slack で @メンションするだけの人も含め、アクティブユーザー全員が課金対象です。無料クレジットの有効期間は 7 日間で、Lindy を使う場所としての Microsoft Teams はまだ近日対応の段階です。",
      },
    ],
  },
  cta: {
    title: "エージェントに、クレジット残高ではなく仕事を。",
    text: "Crewmark は、Claude Code と Codex のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月13日に、各製品自身のページ、ドキュメント、料金、GitHub と照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Lindy、xAI、Anthropic、Microsoft、OpenAI、Relevance AI、CopilotKit、および OpenWorker の開発者とは提携しておらず、その承認も受けていません。製品名は各所有者の商標です。他製品に関する情報は公開ページに基づくもので、その後変更されている可能性があります。",
};
