import type { GuideCopy } from "@/components/landing/guide-article";

// ja translation of /personal-agent/grok-bot; the English master is src/content/personal-agents/grok-bot.ts.

const docs = "https://docs.x.ai/grok-bot/get-started";

export const copy: GuideCopy = {
  meta: {
    title: "Grok Bot とは：使い方、プラン、セットアップ",
    description:
      "xAI の Grok Bot を解説。常時稼働のエージェントにできること、利用できる X・SuperGrok・Cursor のプラン、無料トライアル、Mac・Windows・Linux・スマートフォンでのダウンロード方法、最初の Bot のセットアップ方法、活用例を紹介します。",
  },
  breadcrumb: "Grok Bot",
  parent: { name: "パーソナルエージェント", href: "/personal-agent" },
  hero: {
    kicker: "パーソナルエージェント · Grok Bot",
    title: "Grok Bot：xAI のパーソナルエージェントにできることと使い方",
    lead: "Grok Bot は xAI の常時稼働のエージェントで、xAI は「あなたの能動的な AI チームメイト」と呼んでいます。各 Bot はブラウザ、ファイル、ターミナルを備えたクラウドコンピューター上で働き、あなたが使うアプリにサインインし、仕事の進め方の好みを覚え、ノートパソコンを閉じたあとも作業を続けます。2026年8月に初期ベータとして公開されました。このガイドでは、できること、利用できるプラン、最初の Bot のセットアップ方法、ルーティンと承認の仕組み、そして活用例を紹介します。",
    cta: "今すぐ始める",
    secondary: "セットアップする",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Grok Bot とは",
      text: [
        "Grok Bot は、チャットボットの Grok でも、X の @grok アカウントでもありません。専用のコンピューターを持つエージェントです。人と同じようにアプリや Web サイトを使い、コードを書いて実行し、資料作り、キャンペーンの運用、予約、カレンダーの同期といった複数の手順がある仕事をこなします。",
      ],
      points: [
        "クラウドコンピューター：あなたの Bot は、ブラウザ、ファイルシステム、ターミナルを備えた 1 台の永続的なマシンを共有します。Bot ごとに専用の画面があり、どの Bot の作業もライブで見られます。",
        "複数の Bot で 1 つのチーム：Bot ごとに 1 つの仕事を与えます。Bot 同士はメッセージを送り合い、仕事を引き継げ、最初の Bot がほかの Bot の状況を報告できます。",
        "アプリ：Gmail、Google カレンダー、Google ドライブ、Slack、Notion、Granola、GitHub などに加え、任意の MCP サーバーや API。Cursor と同じ MCP サーバー、プラグイン、スキルを使います。",
        "記憶：各 Bot はあなたの好みについての自分用メモと、日付付きの作業ログを持ちます。名前やタイムゾーンなど一部の情報は、すべての Bot で共有されます。",
        "ルーティン：Bot はスケジュールで、または Slack でのメンションや Webhook など何かが起きたときに仕事を実行します。[Grok Bot のルーティン](/personal-agent/grok-bot-routines)をご覧ください。",
        "デスクトップ、スマートフォン、Slack、X から、テキストでも音声でも話しかけられます。",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Grok Bot を利用できるプラン",
      text: [
        "Grok Bot は Cursor のアカウントで動きます。以下は Cursor の Grok Bot プランページに載っている、Grok Bot を含むプランです。xAI も Cursor も、Grok Bot 単体の料金や週ごとの利用量を数字では示していません。",
      ],
      headers: ["プラン", "Grok Bot", "利用量"],
      rows: [
        ["The X Subscription：Premium、Super、Ultra", "含まれる。個人またはチームのシート", "共有の週ごとのプール。Super と Ultra はより大きい。超過分はプリペイドのクレジットから"],
        ["The X Subscription：Plus、Free", "含まれない", "-"],
        ["従来の Cursor プラン：Pro、Pro+、Ultra、Teams", "含まれる", "週ごとの利用量は Pro から Ultra へ増える。その後はオンにしていれば従量課金"],
        ["連携した SuperGrok、SuperGrok Plus、SuperGrok Heavy、X Premium+", "連携アカウント経由で含まれる", "Heavy が最も多い。連携と Cursor のプランは合算されない"],
        ["SuperGrok Lite", "含まれない", "-"],
        ["無料トライアル", "7 日間有効の利用クレジット", "エージェントのステップとトークンで消費。補充なし"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Grok Bot のセットアップ方法",
      steps: [
        {
          title: "アプリをダウンロードする",
          text: "x.ai/bot から入手します。macOS（Apple シリコンと Intel）、Windows（x64 と Arm64）、Linux（x64 と Arm64）に加え、iPhone（iOS 18 以降）と Android（9 以降）で動きます。",
        },
        {
          title: "サインインする",
          text: "「Sign in」を選んでブラウザで完了させます。Grok Bot は Cursor のアカウントを使うので、会社の SSO も適用されます。SuperGrok や X Premium+ 経由で使う場合は、オンボーディングページで Grok アカウントを連携します。Bot にはクラウドストレージが必要なため、Privacy Mode（Legacy）のアカウントは先に切り替える必要があります。",
        },
        {
          title: "最初の Bot に 1 つの仕事を与える",
          text: "アプリは Grok Bot という名前の Bot を作り、チャットを開きます。New Bot（Cmd/Ctrl+N）で追加できます。各 Bot には最初のメッセージで 1 つの仕事を与え、仕事の進め方を覚えておくよう頼みましょう。Bot のコンピューター上で一度操作を記録して、タスクを教えることもできます。",
        },
        {
          title: "アプリをつなぎ、ルールを決める",
          text: "必要なアプリをつなぎます。ログイン情報は Bot の Vault、次に 1Password などのパスワードマネージャー、次に安全なフォームの順で使われ、Bot がパスワードを見ることはありません。Auto Review はデフォルトでオンで、実行前に操作をチェックします。常にあなたを待つべき操作には、設定 > General > Bot で「Ask first」のルールを追加しましょう。",
        },
      ],
      source: { label: "出典：xAI の Grok Bot ドキュメント「Get started」", href: docs },
    },
    {
      kind: "text",
      id: "safety",
      title: "Grok Bot で主導権を保つ仕組み",
      points: [
        "承認カード：あなたの OK が必要な操作では、Bot がカードを表示して待ちます。xAI の例では、Slack の返信や Gmail のメッセージを下書きして承認を待ちます。",
        "Auto Review は、Bot がコマンドを実行したり、アプリを使ったり、コンピューター上で操作したりする前にチェックし、あなた自身のメッセージだけを指示として扱います。xAI は、有害なコンテンツによるリスクは下がるが、なくなるわけではないとしています。",
        "Bot は自分のアカウントを持たず、あなたとして行動するので、すべての操作はあなたにたどり着きます。",
        "すべての Bot が 1 台のコンピューターとそのサインイン状態を共有します。ある Bot があるサイトにログインすれば、ほかの Bot もそのログインを使えます。",
        "シングルサインオンやパスキーでは、「Open computer」から「Take control」を選び、その手順を自分で済ませてから、Bot に続けるよう伝えます。",
      ],
    },
    {
      kind: "table",
      id: "use-cases",
      title: "Grok Bot の活用例",
      text: ["xAI の活用例ドキュメントより。ほとんどは仕事を下書きし、何かを送る前にあなたの承認を待ちます。"],
      headers: ["活用例", "Bot がすること"],
      rows: [
        ["朝のブリーフィング", "夜の間にアプリで起きた変化をまとめる"],
        ["受信トレイ管理", "未読メールを緊急度で仕分け、返信を下書きする"],
        ["旅行の手配", "航空券とホテルの候補を 2 つずつ探し、予約はあなたに任せる"],
        ["会議の準備", "参加者、過去の議論、未解決の話題を 1 ページのブリーフにまとめる"],
        ["コンテンツマーケター", "その週にリリースしたものから、ニュースレターと投稿を下書きする"],
        ["営業開発", "問い合わせのリードを理想の顧客像に照らして見極め、返信を下書きする"],
        ["競合調査", "競合のリリースと価格変更を毎週報告する"],
        ["キャンペーンチーム", "複数の Bot が登録データを集め、ローンチ用コンテンツを下書きし、ファクトチェックする"],
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Grok Bot と Muse、Dots、Claude Duet の比較",
      headers: ["", "Grok Bot", "Meta Muse", "ChatGPT dots", "Claude Duet"],
      rows: [
        ["提供元", "xAI", "Meta", "OpenAI", "Anthropic"],
        ["動く場所", "Bot 同士で共有するクラウドコンピューター", "1 人ずつ専用のクラウド VM", "専用のクラウドコンピューターとブラウザ", "Claude Duet アプリ"],
        ["スケジュール", "スケジュール、Slack、GitHub、メール、Webhook で動くルーティン", "リマインダーと定期タスク", "予定リマインダーと定期チェック", "注意が必要なことを持ってやって来る"],
        ["利用できる人", "X Premium 以上、SuperGrok、Cursor のプラン", "米国、上限付きで無料。Power は $20/月", "ChatGPT Pro と Business Premium", "米国の Claude Pro、Max、Ultra。ウェイトリスト制"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "あなたのコードに、Grok Bot のようなチームメイトを",
      text: [
        "Grok Bot はあなたのアプリの中で働き、Crewmark はあなたのリポジトリの中で働きます。あなたの Claude Code や Codex を、職種、数字の目標、勤務時間、ハートビートを持つ AI 社員に変えます。スケジュールどおりに起き、ボードから次の issue を取り、プルリクエストを作成し、判断が必要なときにメッセージを送ってきます。",
      ],
      steps: [
        {
          title: "職種を選ぶ",
          text: "ソフトウェアエンジニアや SEO スペシャリストなど、[AI 社員の職種](/ai-employees)から始めましょう。",
        },
        {
          title: "勤務時間とハートビートを与える",
          text: "設定した時間帯に、15〜240 分ごとに起きて働きます。[Claude Code を 24 時間動かす方法](/blog/run-claude-code-24-7)もご覧ください。",
        },
        {
          title: "パーソナルエージェントを比較する",
          text: "[パーソナル AI エージェントの比較](/personal-agent)と [Meta Muse ガイド](/personal-agent/meta-muse)をご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Grok Bot をセットアップする" },
  mid: {
    title: "コードベースに能動的なチームメイトがほしいですか？",
    text: "Crewmark の社員は、ハートビートで起き、ボードから次の issue を取り、プルリクエストを作成します。",
    button: "今すぐ始める",
  },
  faq: {
    title: "よくある質問",
    items: [
      {
        q: "Grok Bot とは何ですか？",
        a: "xAI の常時稼働のエージェントです。各 Bot はクラウドコンピューター上で働き、あなたのアプリにサインインし、好みを覚え、スケジュールでルーティンを実行し、ノートパソコンを閉じたあとも作業を続けます。チャットボットの Grok や X の @grok アカウントとは別物です。",
      },
      {
        q: "Grok Bot の料金はいくらですか？",
        a: "単体の料金表では販売されていません。The X Subscription の Premium、Super、Ultra プラン、従来の Cursor の Pro、Pro+、Ultra、Teams プラン、そして連携した SuperGrok、SuperGrok Plus、SuperGrok Heavy、X Premium+ のサブスクリプションに含まれています。利用上限はプランによって異なります。",
      },
      {
        q: "Grok Bot に無料トライアルはありますか？",
        a: "はい、7 日間有効の利用クレジットがあります。エージェントのステップとトークンで消費され、補充されず、有料プランに自動で切り替わることもありません。使い切ったら、アップグレードするかアカウントを連携します。",
      },
      {
        q: "Grok Bot は Windows、Linux、Android で使えますか？",
        a: "はい。デスクトップアプリは macOS、Windows、Linux（x64 と Arm64）で動き、iPhone（iOS 18+）と Android（9+）のアプリもあります。",
      },
      {
        q: "Grok Bot にスケジュールでタスクを実行させられますか？",
        a: "はい、ルーティンで実行できます。普通の言葉で書いたスケジュールで、または Slack のメッセージ、GitHub や Linear のイベント、メール、Webhook が届いたときに動きます。[Grok Bot のルーティン](/personal-agent/grok-bot-routines)をご覧ください。",
      },
      {
        q: "Grok Bot と Meta Muse、どちらがいいですか？",
        a: "Muse は誰でも使える日常の雑務向けで、米国では無料枠があります。Grok Bot は仕事向けで、複数の Bot によるチーム、トリガー付きのルーティン、コードのための Cursor のツールを備えています。",
      },
    ],
  },
  cta: {
    title: "コーディングエージェントに、プロンプトではなく仕事を。",
    text: "Crewmark は、Claude Code と Codex のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月10日に、xAI の Grok Bot ドキュメントとガイド、Cursor の Grok Bot プランページで確認しました。",
  disclaimer:
    "Crewmark は独立した製品であり、xAI、SpaceX、X、Cursor、Meta、OpenAI、Anthropic とは提携しておらず、その承認も受けていません。製品名は各所有者の商標です。",
};
