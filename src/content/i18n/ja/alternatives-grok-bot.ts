import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /alternatives/grok-bot; the English master is
// src/content/product-alternatives/grok-bot.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Grok Bot の代替（2026）：オープンソース、無料、ホスティング型",
    description:
      "Grok Bot の代替を比較：Claude Cowork、Copilot Cowork、ChatGPT Work、Lindy、OpenBot、OpenWorker、Hermes Agent、Crewmark をライセンスと料金で。",
  },
  breadcrumb: "Grok Bot の代替",
  parent: { name: "製品比較", href: "/compare" },
  hero: {
    kicker: "代替 · xAI Grok Bot",
    title: "Grok Bot の代替：オープンソース、無料、ホスティング型の AI チームメイト",
    lead: "Grok Bot は、xAI が提供するホスティング型の「AI チームメイト」（“AI teammates”）です。各 Bot がクラウドに専用のコンピューターを持ち、あなたのツールやアプリにサインインし、Slack や Microsoft Teams の中で働き、ルーティンを実行し、互いに仕事を引き継ぎます。2026年8月11日にベータとして公開され、現在はベータを終えています。オープンソースではなく、プランは Premium の月 $30 からで、Teams と Enterprise は営業経由です。ここでは、Claude、ChatGPT、Microsoft 365 に入っている AI の同僚から GitHub のオープンソースプロジェクトまで、8 つの代替を、ライセンス、料金、向いている人とあわせて紹介します。",
    cta: "今すぐ始める",
    secondary: "比較を見る",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Grok Bot の代替を一覧で比較",
      text: [
        "各製品のサイト、ドキュメント、料金ページの情報で、2026年11月13日に確認しました。価格は米ドルです。Grok Bot は Premium 月 $30、Super 月 $100、Ultra 月 $200（月払い）で、週ごとの利用枠が含まれ、超過分はトークン費用で課金されます。詳しくは [Grok Bot のガイド](/personal-agent/grok-bot)で。",
      ],
      headers: ["代替製品", "どんな製品か", "オープンソース", "最低価格"],
      rows: [
        [
          "[Claude Cowork](/compare/claude-cowork-vs-grok-bot)",
          "Claude のアプリでコーディング以外の仕事をこなす Anthropic のエージェント：リサーチ、ドキュメント、スプレッドシート、スライド",
          "いいえ",
          "Claude の有料プラン。Pro の月 $20（年払いなら月 $17）から。Free は対象外",
        ],
        [
          "[Copilot Cowork](/personal-agent/copilot-cowork)",
          "Outlook、Teams、Word、Excel、PowerPoint、OneDrive、SharePoint をまたいで複数ステップのタスクをこなす Microsoft 365 Copilot のエージェント",
          "いいえ",
          "Microsoft 365 Copilot ライセンスに加えて Copilot Credits（従量課金で 1 クレジット $0.01、月ごとに請求）",
        ],
        [
          "[ChatGPT Work](/personal-agent/chatgpt-work)",
          "スライド資料、スプレッドシート、分析など、最後に確認する成果物ができあがるタスクのための ChatGPT の Work モード",
          "いいえ",
          "Free（$0）と Go（月 $8）はデスクトップアプリで制限付き。Plus の月 $20 からフル利用",
        ],
        [
          "[Lindy](/personal-agent/lindy)",
          "受信トレイ、カレンダー、ミーティング、フォローアップのためのホスティング型アシスタント。Slack でチームと共有",
          "いいえ",
          "無料：7 日間 $50 分のクレジット。アクティブユーザーあたり月 $29.99 で 3,000 クレジット",
        ],
        [
          "[OpenBot](/compare/openbot-vs-grok-bot)",
          "各 Bot が専用のブラウザ、ファイル、ツールを持つ、CopilotKit のセルフホスト可能な AI の同僚のためのワークスペース",
          "はい（アプリケーションテンプレートは MIT。別ライセンスの CopilotKit Intelligence を使用）",
          "個人プロジェクトは無料。Business はアクティブユーザーあたり月最大 $29",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "「日々の仕事のための AI の同僚」（“An AI coworker for your everyday work”）をうたうデスクトップアプリ。承認と監査証跡のもとで、あなたのマシンで動く",
          "はい（MIT）",
          "料金の記載なし。自分のモデルのキーまたはローカルモデルを使用",
        ],
        [
          "[Hermes Agent](/compare/grok-bot-vs-hermes-agent)",
          "Nous Research の個人向けエージェント。独自のモデルとルーティンを持つ Bot 同士がメッセージを送り合う",
          "はい（MIT）",
          "エージェントは無料（別途モデルプロバイダーの料金）。任意の Nous Portal Plus は月 $20",
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
      kind: "text",
      id: "big-vendors",
      title: "Anthropic、Microsoft、OpenAI の AI の同僚",
      text: [
        "Grok Bot と同じくホスティング型で、多くのチームがすでに契約しているプランに含まれています。3 つとも [AI の同僚ツールの比較](/blog/ai-coworker)で比べています。",
      ],
      points: [
        "Claude Cowork：ナレッジワーク向けの Anthropic のエージェントです。ほしい成果を伝えると、あなたのファイル、連携したアプリ、ブラウザの中で、リサーチ、ドキュメント、スプレッドシート、スライドの作業を進めます。タスクは Anthropic のクラウドで動き、ノートパソコンを閉じても続きます。スケジュールタスクは毎時、毎日、毎週、または平日に実行できます。すでに Claude に支払っていて、複数ステップの仕事をファイルとして受け取りたいなら、これが向いています。[Claude Cowork vs Grok Bot](/compare/claude-cowork-vs-grok-bot) と [Claude Cowork の代替](/alternatives/claude-cowork)をご覧ください。",
        "Copilot Cowork：Microsoft 365 Copilot のエージェントで、メールの送信、会議の設定、Word・Excel・PowerPoint ファイルの編集、Teams への投稿を行い、重要な操作の前には承認ダイアログを表示します。テナントの設定によって、モデルピッカーで GPT、Claude、Grok のモデルを選べます。仕事が Outlook、Teams、OneDrive、SharePoint にあるなら、これが向いています。ガイド：[Copilot Cowork](/personal-agent/copilot-cowork)。",
        "ChatGPT Work：ChatGPT の Work モードで、タスクを計画し、あなたのファイル、プラグイン、Web、ブラウザ、コードを使って、確認用の成果物を返します。利用枠は Codex と共有です。Plus（月 $20）と Pro（月 $100 から）では、デスクトップ、Web、モバイルで使えます。成果がはっきりしていて、情報源や手順が複数あるタスクに向いています。ガイド：[ChatGPT Work](/personal-agent/chatgpt-work)。",
      ],
    },
    {
      kind: "text",
      id: "assistant",
      title: "オフィスワーク向けのホスティング型アシスタント",
      points: [
        "Lindy：複数の Bot ではなく、共有のアシスタントが 1 つです。受信トレイ、カレンダー、ミーティング、リサーチ、フォローアップを扱い、Slack、メール、iMessage、電話、Gmail で使う Chrome 拡張機能から使います。メールの送信など外部に影響することはすべてあなたの承認を待ち、Routines はスケジュールやイベントで動きます。Slack で @メンションするだけの人も含め、アクティブユーザー全員が有料シートになります。レポート、リサーチ、CRM の更新を Slack で @メンションして頼めるアシスタントがチームにほしいなら、これが向いています。ガイド：[Lindy](/personal-agent/lindy)。詳しくは [Lindy の代替](/alternatives/lindy)で。",
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "GitHub にあるオープンソースの Grok Bot の代替",
      text: ["自分で動かし、モデルのキーは自分で用意します。スター数は 2026年11月13日時点の GitHub の数字です。"],
      points: [
        "OpenBot（`github.com/CopilotKit/OpenBot`、スター 11,652）：Grok Bot と同じく、各 Bot が専用のコンピューターを持ち、ブラウザ、ファイル、ツールに加えて、ルーティン、承認、アクティビティログを備えます。Mac と Windows 向けのデスクトップアプリとして、またはチーム向けに Kubernetes 上で動き、自分のエージェントを AG-UI 経由で接続できます。MIT ライセンスのもとで、自分でホストしてカスタマイズできる AI の同僚がほしいなら、これが向いています。[OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot) をご覧ください。",
        "OpenWorker（`github.com/andrewyng/openworker`、スター 19,050）：macOS と Windows 向けにオープンベータ中のデスクトップアプリです。アクションはデフォルトで承認制で、すべてのツール呼び出しが記録され、スケジュールタスクで朝のブリーフィングや週次レポートなどを作成でき、Slack でメンションするとスレッドで返信します。ローカルモデルも含め、自分のマシンで動くエージェントがほしいなら、これが向いています。ガイド：[OpenWorker](/personal-agent/openworker)。",
        "Hermes Agent（`github.com/NousResearch/hermes-agent`、スター 262,923）：Nous Research の個人向けエージェントです。Bot Mode ではプロファイルが名前付きの Bot になり、それぞれが独自のチャット、役割、モデル、記憶、スキル、アバターを持ち、互いに直接メッセージを送り合います。Telegram、Discord、Slack、WhatsApp、Signal、メールで応答します。自分のマシンやサーバーで専門の Bot を複数動かしたいなら、これが向いています。[Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent) をご覧ください。",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Grok Bot の代替の選び方",
      steps: [
        {
          title: "すでに支払っているものから考える",
          text: "Claude の有料プランには Claude Cowork が含まれ、ChatGPT のプランには Work が含まれます（Free と Go では制限付き）。Copilot Cowork には、Microsoft 365 Copilot ライセンスと Copilot Credits が必要です。",
        },
        {
          title: "どこで動かすかを決める",
          text: "Grok Bot、Claude Cowork、Copilot Cowork、ChatGPT Work、Lindy は各ベンダーのクラウドで動きます。OpenWorker はあなたのマシンで、OpenBot はノートパソコンか Kubernetes で、Hermes Agent はあなたのマシンかサーバーで動きます。",
        },
        {
          title: "チームがやり取りする場所を確認する",
          text: "Grok Bot は Slack、Microsoft Teams、通話の中で働きます。Slack では、Lindy、OpenWorker、Hermes Agent のほか、Claude Cowork や ChatGPT Work のコネクタやプラグインも使えます。Copilot Cowork は Outlook と Teams で働きます。",
        },
        {
          title: "行動の前にどう確認するかを見る",
          text: "Grok Bot は承認が必要なときに確認し、重要な操作を Auto Review に回せます。Lindy は外部に影響することすべてで承認を待ち、OpenWorker はデフォルトでアクションを承認制にし、Claude Cowork には Manual と Auto のモードがあり、Copilot Cowork は承認ダイアログを表示します。",
        },
      ],
    },
    {
      kind: "text",
      id: "community",
      title: "Grok Bot の代替について Hacker News で語られていること",
      text: [
        "2026年11月13日に、Grok Bot を取り上げた2026年8月から11月までの Hacker News のスレッドを 7 件、1 ページずつ読みました。Reddit のスレッドは検索結果でしか見つけられなかったため、タイトルだけを載せ、要約はしていません。これは公開の場での議論から抜き出したもので、アンケート調査ではありません。",
      ],
      points: [
        "利用枠への不満は、読んだスレッドのうち 3 件で挙がりました（[2026年8月](https://news.ycombinator.com/item?id=49261514)、[2026年11月](https://news.ycombinator.com/item?id=50345698)、[2026年11月](https://news.ycombinator.com/item?id=50366117)）。ユーザーは、常に動き続ける Bot は週ごとの利用枠をすぐに使い切ると言い、11月のスレッドでは Grok Bot の上限が引き下げられたことが話し合われています。",
        "自分で動かすオープンソースのエージェントは、読んだスレッドのうち 2 件で挙がりました（[2026年8月](https://news.ycombinator.com/item?id=49261514)、[2026年11月](https://news.ycombinator.com/item?id=50366117)）。ユーザーは両方のスレッドで [Hermes Agent](/alternatives/hermes-agent) を、8月のスレッドでは OpenClaw の名前を挙げています。8月のスレッドでは、どちらもホスティング型の Bot より設定の自由度が高いと評され、OpenClaw は頻繁に修正が必要だと言う人もいます。[Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent) と [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw) をご覧ください。",
        "自前の環境を作るという案は、読んだスレッドのうち 2 件で挙がりました（[2026年8月](https://news.ycombinator.com/item?id=49261514)、[2026年11月](https://news.ycombinator.com/item?id=50366117)）。Claude Code や Codex のようなコーディングエージェントにスクリプトをいくつか組み合わせるか、OpenRouter 経由でモデルを使う方法です。これらのスレッドでユーザーは、こうした環境なら仕事のほとんどをずっと安くこなせると言います。[Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code) をご覧ください。",
        "Grok Bot ならではの価値を疑う声は、読んだスレッドのうち 2 件で挙がりました（[2026年8月](https://news.ycombinator.com/item?id=49261514)、[2026年11月](https://news.ycombinator.com/item?id=50366117)）。任せたいタスクが思いつかないというユーザーもいれば、OpenClaw のようなオープンソースのエージェントにブラウザを足したホスティング版だと見るユーザーもいます。",
        "Reddit では、[Alternative to Grok bot](https://www.reddit.com/r/GrokBot/comments/1xp0dbt/alternative_to_grok_bot/)（r/GrokBot）、[Grokbot alternative](https://www.reddit.com/r/GrokBot/comments/1wnayp2/grokbot_alternative/)（r/GrokBot）、[Is Grok Bot worth it?](https://www.reddit.com/r/cursor/comments/1vvx2fg/is_grok_bot_worth_it/)（r/cursor）というタイトルのスレッドが検索結果に出てきました。載せているのはタイトルだけで、これらのスレッドは読んでいません。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "アプリには Bot を。コードベースには AI 社員を。",
      text: [
        "Crewmark は、AI 社員のチームのための issue トラッカーです。各社員はあなたのパソコン上の Claude Code または Codex の会話で、職種、KPI、プロジェクトを持ちます。勤務時間中にハートビートで起動して共有ボードから issue を取り、レビューや許可が必要なときは、issue を「要対応」にしてそこで質問します。Slack、GitHub、Linear との連携は組み込まれておらず、エージェントは自分のパソコンにあるツールとログインを使います。",
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
    title: "コードベースに AI チームメイトがほしいですか？",
    text: "Crewmark は、あなたの Claude Code や Codex に、職種、ハートビート、共有ボードを与えます。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Grok Bot の代替に関するよくある質問",
    items: [
      {
        q: "オープンソースの Grok Bot の代替はありますか？",
        a: "あります。OpenBot はアプリケーションテンプレートが MIT で（別ライセンスの CopilotKit Intelligence を使用）、OpenWorker と Hermes Agent は MIT です。Crewmark は GPL-3.0 のオープンソースです。Grok Bot 自体はオープンソースではありません。",
      },
      {
        q: "無料の Grok Bot の代替はありますか？",
        a: "OpenBot は個人プロジェクトなら無料です。OpenWorker は料金の記載がなく、自分のモデルのキーかローカルモデルで動きます。Hermes Agent は無料で、別途モデルプロバイダーの料金がかかります。ChatGPT Work は Free プランでもデスクトップアプリで制限付きで使え、Lindy の Free プランでは 7 日間有効な $50 分のクレジットがもらえ、Crewmark は 1 プロジェクト・AI 社員 3 人までは無料です。Claude Cowork は Claude の Free プランでは使えません。",
      },
      {
        q: "GitHub にある Grok Bot の代替は？",
        a: "OpenBot（`github.com/CopilotKit/OpenBot`、スター 11,652）、OpenWorker（`github.com/andrewyng/openworker`、スター 19,050）、Hermes Agent（`github.com/NousResearch/hermes-agent`、スター 262,923）、Crewmark（`github.com/ummydev/crewmark-ai`）です。スター数は 2026年11月13日時点のものです。",
      },
      {
        q: "Claude は Grok Bot の代わりになりますか？",
        a: "Claude のアプリに入っている Claude Cowork は、ナレッジワーク向けの Anthropic のエージェントです。タスクを Anthropic のクラウドで、スケジュールに沿って実行し、Claude の有料プランに Pro の月 $20 から含まれています。コードなら、Anthropic のコーディングエージェントである Claude Code があります。[Claude Cowork vs Grok Bot](/compare/claude-cowork-vs-grok-bot) と [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code) をご覧ください。",
      },
      {
        q: "Grok Bot の料金はいくらですか？",
        a: "Premium は月 $30、Super は月 $100（Premium の 3.5 倍の利用枠）、Ultra は月 $200（Premium の 12 倍の利用枠）で、月払いです。週ごとの Grok Bot の利用枠が含まれ、超過分はトークン費用で課金されます。Teams と Enterprise は営業経由です。",
      },
      {
        q: "Slack で使える Grok Bot の代替は？",
        a: "Lindy は Slack でチームメイトとして働きます。OpenWorker は Slack のスレッドでメンションすると応答します。Hermes Agent はゲートウェイ経由で Slack につながります。Claude Cowork と ChatGPT Work は、コネクタやプラグインとして Slack につながります。OpenBot はフロントエンドの 1 つとして Slack を挙げており、一部はアーリーアクセスです。",
      },
    ],
  },
  cta: {
    title: "コーディングエージェントに、チャットだけでなく仕事を。",
    text: "Crewmark は、Claude Code と Codex のセッションを、職種・KPI・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月13日に、各製品のサイト、ドキュメント、料金ページと照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、xAI をはじめ、このページで名前を挙げたいずれの企業とも提携しておらず、その承認も受けていません。製品名は各所有者の商標です。他製品に関する情報は公開ページに基づくもので、その後変更されている可能性があります。",
};
