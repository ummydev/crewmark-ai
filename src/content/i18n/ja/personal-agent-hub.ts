import type { GuideCopy } from "@/components/landing/guide-article";

// ja translation of /personal-agent; the English master is src/content/personal-agent-hub.ts.

export const copy: GuideCopy = {
  meta: {
    title: "パーソナル AI エージェント 2026：Muse、Grok Bot、Dots を比較",
    description:
      "パーソナル AI エージェントとは何か、そして注目されているエージェントを各社の公式ページをもとに比較。Meta Muse、Grok Bot、ChatGPT dots、Claude Duet、Manus Cue、Gemini のタスク、Microsoft Autopilot、OpenClaw、Hermes Agent を紹介します。",
  },
  breadcrumb: "パーソナルエージェント",
  hero: {
    kicker: "パーソナルエージェント",
    title: "2026 年のパーソナル AI エージェント：何ができて、どれを使うべきか",
    lead: "パーソナルエージェントとは、あなたと一緒に話すだけでなく、あなたのために働く AI です。自分専用のコンピューターやブラウザを持ち、あなたのアプリにサインインし、好みを覚え、アプリを閉じたあとも作業を続け、判断が必要になると戻ってきます。ここ数か月で、Meta、xAI、OpenAI、Anthropic、Google、Microsoft、Manus がそろって提供を始めました。このページでは、共通点を説明し、各社の公式ページをもとに比較し、それぞれのガイドへのリンクを紹介します。",
    cta: "今すぐ始める",
    secondary: "比較を見る",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "パーソナルエージェントとは",
      text: [
        "チャットボットは答えたら待つだけです。パーソナルエージェントは目標を受け取り、手順を計画し、Web やあなたのアプリをまたいで実行します。しかも、あなたがいない間に進めることも少なくありません。新しいエージェントには 5 つの共通点があります。",
      ],
      points: [
        "専用のコンピューター：人と同じようにクリックし、入力し、フォームを埋めるクラウドマシンやブラウザ。",
        "あなたのアプリ：メール、カレンダー、ファイル、チャットを、あなたが選んだ権限で使います。",
        "記憶：好みを学び、同じ指示を二度言う必要がありません。",
        "常時稼働：予定タスクや定期タスクがあり、アプリを閉じても作業が続きます。",
        "承認：送信、購入など、あなたが要注意とした操作の前には OK を待ちます。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "パーソナル AI エージェントの比較",
      text: ["2026年11月10日時点の各社の公式ページによります。提供状況はすぐに変わるので、登録前に確認してください。"],
      headers: ["エージェント", "提供元", "向いている用途", "利用できる人", "最も安い始め方"],
      rows: [
        ["[Meta Muse](/personal-agent/meta-muse)", "Meta", "日常のタスクと生活の雑務", "米国、18 歳以上、Meta アカウント", "週ごとの上限付きで無料。Power は $20/月"],
        ["[Grok Bot](/personal-agent/grok-bot)", "xAI", "仕事：あなたのアプリで働く Bot のチーム", "X Premium、Super、Ultra。SuperGrok。Cursor のプラン", "無料の試用クレジット"],
        ["[ChatGPT dots](/blog/chatgpt-dots)", "OpenAI", "ChatGPT の中で長期的な目標を進める", "ChatGPT Pro と Business Premium", "ChatGPT Pro"],
        ["[Claude Duet](/blog/claude-duet)", "Anthropic", "自分から声をかけてくる能動的な Claude", "米国の Claude Pro、Max、Ultra。ウェイトリスト制", "Claude Pro"],
        ["[Base44 Superagent](/personal-agent/base44-superagent)", "Base44", "WhatsApp、Telegram、Slack、ブラウザで使えるワークフロー付きのパーソナルエージェント", "Base44 アカウントがあれば誰でも", "Base44 プランのクレジット。Starter は年払いで $16/月"],
        ["[Manus Cue](/personal-agent/manus-cue)", "Manus", "専用のメール、電話、ウォレット、コンピューターを持つエージェント", "招待制のアーリーアクセス", "アーリーアクセス中は無料"],
        ["[Gemini のタスク（Spark）](/personal-agent/gemini-spark)", "Google", "Gemini からの用事、調査、ファイル作業", "Google AI Pro または Ultra。EEA、英国、スイス以外", "Google AI Pro"],
        ["Microsoft Autopilot（Scout）", "Microsoft", "Microsoft 365 と Teams での仕事", "Frontier の組織で、GitHub Copilot のライセンスがある場合", "所属組織経由"],
        ["[OpenClaw](/blog/openclaw-alternatives)", "オープンソース", "チャットアプリで使うセルフホスト型アシスタント", "誰でも。自分のコンピューターで動く", "無料。モデル代は自分で支払う"],
        ["[Hermes Agent](/blog/hermes-agent-vs-openclaw)", "Nous Research、オープンソース", "スキルを学ぶセルフホスト型エージェント", "誰でも。自分のコンピューターで動く", "無料。モデル代は自分で支払う"],
      ],
    },
    {
      kind: "text",
      id: "which",
      title: "どのパーソナルエージェントを使うべきか",
      points: [
        "生活の雑務を手伝ってほしく、まだお金は払いたくない：米国では無料の Meta Muse。[Meta Muse の活用例](/personal-agent/meta-muse-use-cases)もご覧ください。",
        "仕事のタスクを、スケジュールでエージェントのチームに任せたい：スケジュールやトリガーで動くルーティンを持つ Grok Bot。[Grok Bot のルーティン](/personal-agent/grok-bot-routines)もご覧ください。",
        "すでに ChatGPT Pro に課金している：ChatGPT dots。Claude Pro 以上なら、ウェイトリスト制の Claude Duet。",
        "Google のアプリ中心で暮らしている：Google AI Pro の Gemini のタスク。職場で Microsoft 365 を使っている：組織が Frontier に参加していれば Autopilot。",
        "予算の範囲で電話をかけたり支払ったりできるエージェントがほしい：アーリーアクセス中の Manus Cue。[Manus Cue](/personal-agent/manus-cue) をご覧ください。",
        "自分のマシンで、自分のモデルで動かしたい：どちらもオープンソースの OpenClaw か Hermes Agent。",
      ],
    },
    {
      kind: "table",
      id: "ai-coworkers",
      title: "仕事のための AI の同僚",
      text: [
        "用事ではなく仕事のタスク向けに作られたエージェントと、それぞれのガイドです。2026年11月13日時点の各提供元の公式ページによります。詳しくは [AI の同僚ツールの比較](/blog/ai-coworker)をご覧ください。",
      ],
      headers: ["AI の同僚", "提供元", "向いている用途", "最も安い始め方"],
      rows: [
        ["[Claude Cowork](/personal-agent/claude-cowork)", "Anthropic", "Claude のアプリでのリサーチ、ドキュメント、スプレッドシート、スライド", "Claude Pro、$20/月"],
        ["[Copilot Cowork](/personal-agent/copilot-cowork)", "Microsoft", "Outlook、Teams、Office ファイルをまたぐ複数ステップのタスク", "Microsoft 365 Copilot ライセンスと Copilot Credits"],
        ["[ChatGPT Work](/personal-agent/chatgpt-work)", "OpenAI", "スライド資料、スプレッドシート、分析ができあがるタスク", "ChatGPT Free ではデスクトップアプリで制限付き。Plus（$20/月）からフル利用"],
        ["[Cursor Projects](/personal-agent/cursor-projects)", "Cursor", "多数のクラウドのコーディングエージェントを動かすコーディネーターエージェント", "Cursor Premium、$30/月"],
        ["[Lindy](/personal-agent/lindy)", "Lindy", "メール、Slack、iMessage、電話で使えるアシスタント", "無料トライアル。その後はアクティブユーザーあたり $29.99/月"],
        ["[OpenWorker](/personal-agent/openworker)", "Andrew Ng、オープンソース", "行動の前に確認するデスクトップの AI の同僚", "無料。自分のモデルのキーまたはローカルモデル"],
        ["[OpenBot](/personal-agent/openbot)", "CopilotKit、オープンソース", "AI の同僚のためのセルフホスト型ワークスペース", "個人プロジェクトは無料"],
        ["[Suparagent](/personal-agent/suparagent)", "オープンソース", "Claude Code、Codex、Gemini CLI の上でルーティン付きで動く名前付きのエージェント", "セルフホストなら無料"],
      ],
    },
    {
      kind: "text",
      id: "safety",
      title: "アカウントを任せる前に",
      points: [
        "タスクに必要なものだけをつなぎ、読み取り専用のアクセスがあればそちらを選びましょう（Muse ではメールを読み取り専用にできます）。",
        "送信、購入、公開されるものについては承認をオンのままにします。Muse と Gemini はデフォルトで送信や購入の前に確認します。Auto Review でほとんどの操作が進む Grok Bot では、「Ask first」のルールを追加しましょう。",
        "ログインを誰が使えるか把握しておきます。Grok Bot は 1 台のコンピューターを共有するので、ある Bot がサインインしたサイトにはほかの Bot もアクセスできます。",
        "利用上限を確認します。バックグラウンドで働くエージェントは、あなたがいない間もトークンを消費します。",
        "ときどきアクティビティログを読みましょう。提供各社は、これらのエージェントが間違えたり予期しない操作をしたりすることがあると注意しています。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "生活にはパーソナルエージェントを、仕事には AI 社員を",
      text: [
        "パーソナルエージェントは、1 人の用事を中心に作られています。Crewmark は仕事を中心に作られています。あなたの Claude Code や Codex を、職種、数字の目標、勤務時間、ハートビートを持つ AI 社員に変えます。社員は共有ボードから次の issue を取り、作業しながらコメントし、行き詰まったらメッセージを送ってきます。",
      ],
      steps: [
        {
          title: "職種を選ぶ",
          text: "[AI 社員の職種](/ai-employees)から始めましょう。ソフトウェアエンジニア、SEO スペシャリスト、マーケティングエージェント、SNS マネージャー、デザイナーがあります。",
        },
        {
          title: "今のプランで動かす",
          text: "あなたの Claude Code や Codex の中で動くので、別途トークン代はかかりません。[料金](/pricing)をご覧ください。",
        },
        {
          title: "そのまま働かせる",
          text: "設定した時間帯に、15〜240 分ごとに起きて働きます。[Claude Code を 24 時間動かす方法](/blog/run-claude-code-24-7)もご覧ください。",
        },
      ],
    },
  ],
  mid: {
    title: "用事だけでなく、仕事を任せられるエージェントがほしいですか？",
    text: "Crewmark の社員は、すでに支払っている Claude Code や Codex のプランで、ハートビートに合わせて共有ボードの仕事を進めます。",
    button: "今すぐ始める",
  },
  faq: {
    title: "よくある質問",
    items: [
      {
        q: "パーソナル AI エージェントとは何ですか？",
        a: "答えるだけでなく、あなたの代わりにタスクを実行する AI です。専用のコンピューターやブラウザを持ち、あなたのアプリを使い、好みを覚え、予定タスクやバックグラウンドの作業をこなし、要注意の操作の前には確認します。",
      },
      {
        q: "2026 年に一番おすすめのパーソナル AI エージェントは？",
        a: "今どのサービスを使っているかによります。一番試しやすいのは Meta Muse（米国では無料）、仕事向けのルーティンが最も細かいのは Grok Bot、ChatGPT dots と Claude Duet は Pro プランに付いてきます。セルフホストしたい人には OpenClaw か Hermes Agent が向いています。",
      },
      {
        q: "無料のパーソナル AI エージェントはありますか？",
        a: "Meta Muse は米国で週ごとの上限付きで無料、Grok Bot には無料の試用クレジットがあり、Manus Cue はアーリーアクセス中は無料です。OpenClaw と Hermes Agent は無料のオープンソースソフトウェアです（モデル代は自分で支払います）。",
      },
      {
        q: "Grok Bot、Muse、Dots の違いは？",
        a: "Muse は日常のタスク向けの Meta のエージェントで、無料で始められます。Grok Bot は仕事向けの xAI のエージェントで、複数の Bot とルーティンを持ちます。ChatGPT dots は ChatGPT の中で常時稼働する OpenAI のエージェントで、Pro と Business Premium で使えます。",
      },
      {
        q: "パーソナルエージェントと AI 社員は同じものですか？",
        a: "少し違います。パーソナルエージェントは 1 人のために、その人の用事をこなします。Crewmark の言う AI 社員は、職種と目標を持ち、スケジュールに沿ってチームのボードで仕事を進め、一緒に働く人たちに報告します。",
      },
      {
        q: "パーソナル AI エージェントは安全に使えますか？",
        a: "承認、分離されたマシン、アクティビティログを備えて作られていますが、提供各社は間違えることがあると言っています。必要なものだけをつなぎ、送信と購入の承認はオンのままにし、何をしたかを見直しましょう。",
      },
    ],
  },
  cta: {
    title: "用事はパーソナルエージェントに。仕事は AI 社員に。",
    text: "Crewmark は、Claude Code と Codex のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月10日に、各社の発表、ドキュメント、ヘルプセンター、料金ページで確認しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Meta、xAI、OpenAI、Anthropic、Manus、Google、Microsoft、OpenClaw、Nous Research とは提携しておらず、その承認も受けていません。製品名は各所有者の商標です。",
};
