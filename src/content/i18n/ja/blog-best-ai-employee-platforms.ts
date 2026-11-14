import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/best-ai-employee-platforms; the English master is src/content/blog/best-ai-employee-platforms.ts.

export const copy: GuideCopy = {
  meta: {
    title: "AI 社員プラットフォームおすすめ比較 2026 | Crewmark AI",
    description:
      "Lindy、Sintra、Marblism、Artisan、Ema、Devin、オープンソースの ai-employees、Crewmark を比較。対応する職種、仕事の始まり方、使うモデル、無料プラン、料金をまとめました。",
  },
  breadcrumb: "おすすめの AI 社員プラットフォーム",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "ブログ · AI 社員",
    title: "2026年のおすすめ AI 社員プラットフォームを比較",
    lead: "AI 社員プラットフォームは、AI エージェントをスタッフとして設定するサービスです。それぞれが職種を持ち、目標に向かって働き、毎回指示されなくても自分で仕事を始めます。以下の製品はどれもこの考え方を売りにしていますが、担当できる仕事、仕事の受け取り方、使うモデル、課金方法はそれぞれ違います。自社製品を含む 8 製品を、各ベンダーが公開している情報だけで比較しました。",
    cta: "今すぐ始める",
    secondary: "比較表へ移動",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "AI 社員プラットフォーム早見表",
      text: [
        "価格は 2026年11月6日時点で各ベンダーの料金ページに掲載されていたエントリープランで、米ドル表記です。AI 社員とは何か、AI エージェントとどう違うかは [AI 社員とは](/ai-employees) をご覧ください。",
      ],
      headers: ["プラットフォーム", "向いている用途", "仕事の始まり方", "動くモデル", "無料の選択肢", "有料プラン"],
      rows: [
        ["Lindy", "約 17 の職能にわたる事務作業：受信トレイ、カレンダー、営業、サポート、採用", "スケジュール（Routines）、Slack や iMessage、電話", "Lindy が選んだ主要モデル", "無料：7 日間で $50 分のクレジット", "1 ユーザーあたり $49.99/月（Team）"],
        ["Sintra", "中小企業：サポート、コピー、SEO、SNS、営業を担う 12 人以上の名前付きヘルパー", "ヘルパーとチャットするか、ワンクリックのタスクを実行", "Sintra のモデル（Claude Sonnet ベース）", "無料プランなし", "$48.50/月、年払いならさらに割安"],
        ["Marblism", "中小企業：アシスタントから受付、法務まで 7 職種", "目標を設定すると毎日それに向けて働き、承認を求めてくる", "記載なし", "無料プランなし", "年払いで $24/月、月払いで $44"],
        ["Artisan（Ava）", "アウトバウンド営業：AI のビジネスデベロップメント担当", "自律的に動き、承認とエスカレーションのルールあり", "記載なし", "記載なし", "クレジット制、デモの予約が必要"],
        ["Ema", "大企業の人事・IT・経理", "Teams、Slack、音声。250 以上の連携", "Ema が組み合わせる 100 以上のモデル", "無料トライアル", "成果報酬型、価格非公開"],
        ["Devin", "ソフトウェア開発", "Slack や Teams での @メンション、Linear や Jira のチケット、定期ワークフロー", "Devin のモデル（複数のプロバイダー）", "少量の枠がある無料プラン", "$20/月（Pro）"],
        ["ai-employees（オープンソース）", "8 つの業務職種を、定期ルーティンをまとめたフォルダとして提供", "各職種の SCHEDULE.md に書かれたスケジュール", "自分のエージェント：Claude Code、Codex、OpenCode など", "無料、MIT ライセンス", "無料"],
        ["Crewmark", "コーディングエージェント上で、自分で定義した任意の職種：開発、SEO、マーケティング、デザイン", "勤務時間中、ハートビートが各社員を起こし、ボードから次の issue を取らせる", "自分の Claude Code、Codex、DeepSeek Harness、OpenCode のサブスクリプション", "あり：1 プロジェクト、社員 3 名まで", "月 $5（Pro、近日提供）"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "AI 社員プラットフォームの選び方",
      steps: [
        {
          title: "ツールからではなく、仕事から考える",
          text: "職種を 1 つと、それで動かしたい数字を書き出します。たとえば獲得した商談数、Search Console のクリック数、マージされた pull request の数などです。1 つの仕事に特化したプラットフォーム（アウトバウンド営業なら Artisan、コードなら Devin）は、その仕事では汎用型より強いことがほとんどです。",
        },
        {
          title: "仕事がどう始まるかを確認する",
          text: "チャットアシスタントはあなたの指示を待ちますが、AI 社員は自分で動き出します。スケジュール、トリガー、ハートビートがあるか、そしてボード、チケット、Slack チャンネルのように仕事を割り当てる場所があるかを確認しましょう。",
        },
        {
          title: "誰のモデルで、誰が払うのかを確認する",
          text: "多くのプラットフォームは、モデルの利用分をクレジットやシートとして再販しています。すでに Claude Code や Codex にお金を払っているなら、そのサブスクリプション上で動くツール（オープンソースの ai-employees、Crewmark）ならモデル費用はほとんど増えません。",
        },
        {
          title: "行動する前に確認してくれるかを見る",
          text: "メールを送ったり、投稿したり、お金を使ったりする社員は、先に確認を取るべきです。承認、エスカレーションのルール、そして何をしたかのログがあるかを見ましょう。",
        },
        {
          title: "まず 1 職種を 2 週間試す",
          text: "無料プランやトライアルがあれば使い、書き出した数字を測ってから、職種を増やしましょう。",
        },
      ],
    },
    {
      kind: "text",
      title: "各プラットフォームの詳細",
      points: [
        "Lindy：「価格以上に働くチームメイト」（\"the teammate that punches above its price\"）を謳っています。Routines はスケジュールで動き、Slack や iMessage でメッセージを送ることができ、「Watch and Learn」は一度見せたタスクを記録します。料金：[lindy.ai/pricing](https://www.lindy.ai/pricing)。",
        "Sintra：サポート担当の Cassie、SEO 担当の Seomi、SNS 担当の Soshie など、名前の付いた 12 人以上のヘルパーがいて、それぞれ話しかけて使うチャットボットとして働きます。ヘルパー 1 人だけなら $39/月です。料金：[sintra.ai/pricing](https://sintra.ai/pricing)。",
        "Marblism：7 人の AI 社員（Eva、Sonny、Stan、Walter、Penny、Rachel、Linda）が、目標を設定すると「毎日、自分で目標に向けて働く」（\"work toward it every day, on their own\"）とされています。プランには月 50 時間分の AI の作業が含まれます。料金：[marblism.com/pricing](https://www.marblism.com/pricing)。",
        "Artisan：「市場開拓チームのための AI 社員」（\"AI employees for go-to-market teams\"）。Ava がリードを探し、情報を補完し、アプローチ文を書き、返信に対応して商談を設定します。人による承認も挟めます。詳しくは [artisan.co](https://www.artisan.co)。",
        "Ema：「汎用 AI 社員」（\"Universal AI Employee\"）で、目標を普通の言葉で説明するだけで設定でき、人事、IT、経理などに使えます。詳しくは [ema.ai](https://www.ema.ai)。",
        "Devin：「チームの自律型ソフトウェアエンジニア」（\"your team's autonomous software engineer\"）。チケットを割り当てると pull request が返ってきます。Max は $200/月、Teams は $80/月に加えて 1 シートあたり $40 です。料金：[devin.ai/pricing](https://devin.ai/pricing)。",
        "ai-employees：MIT ライセンスの GitHub プロジェクトで、「AI 社員とは、1 つの業務職種をカバーする定期ルーティンのフォルダである」（\"an AI Employee is a folder of scheduled routines that covers one business role\"）と定義し、手元のコーディングエージェントで動かします。詳しくは [github.com/markfulton/ai-employees](https://github.com/markfulton/ai-employees)。",
        "Crewmark：Claude Code、Codex、DeepSeek Harness、OpenCode のセッションを、職種・目標・勤務時間・issue のボードを持つ社員に変えます。担当の issue にコメントし、判断が必要なときはあなたにメッセージを送ります。[Claude Code を自律的に動かす方法](/proactive-claude-code) もご覧ください。",
      ],
    },
    {
      kind: "text",
      title: "無料の AI 社員と、GitHub のオープンソース AI 社員",
      text: [
        "無料プランはありますが、どれも小規模です。Lindy は 7 日間で $50 分のクレジット、Devin は少量の枠、Ema はトライアルです。オープンソースはお金はかかりませんが、セットアップに時間がかかります。markfulton/ai-employees など GitHub のプロジェクトは手持ちのエージェントのサブスクリプションで動き、Claude Pro や Max プランなら追加のドルではなくプランの利用枠を使います。",
        "完成品の社員ではなくオープンソースのエージェントフレームワークを比べたい場合は、[CrewAI](/alternatives/crewai)、[Paperclip](/alternatives/paperclip)、[Multica](/alternatives/multica) との比較をご覧ください。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "すでにお金を払っているコーディングエージェントで AI 社員を",
      text: [
        "Crewmark は、すでに Claude Code や Codex で仕事を回しているチームのためのツールです。新しい AI とそのクレジットを買う代わりに、今のエージェントに仕事を与えます。",
      ],
      steps: [
        {
          title: "職種と目標を選ぶ",
          text: "ソフトウェアエンジニア、SEO スペシャリスト、グロースマーケター、または自分で書いた職種を選び、目標を数字で書きます。",
        },
        {
          title: "セッションをつなぐ",
          text: "プロジェクトでセットアップコマンドを 1 つ実行します。社員はあなたのマシン上の Claude Code、Codex、DeepSeek Harness、OpenCode のセッションで、あなたのプランを使って動きます。",
        },
        {
          title: "issue を割り当てれば、あとはハートビート任せ",
          text: "勤務時間中、社員は 15 分、30 分、60 分ごとに起動して次の issue を取り、進めながらコメントし、判断が必要なときはあなたにメッセージを送ります。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "AI 社員プラットフォームを選ぶ" },
  mid: {
    title: "すでに Claude Code や Codex にお金を払っていますか？",
    text: "Crewmark なら、それを職種・目標・勤務時間・issue のボードを持つ AI 社員に変えられます。AI の請求書が 2 つになることはありません。",
    button: "今すぐ始める",
  },
  faq: {
    title: "AI 社員プラットフォームのよくある質問",
    items: [
      {
        q: "おすすめの AI 社員プラットフォームは？",
        a: "仕事によります。多くの職能にまたがる事務作業なら Lindy、中小企業のマーケティングやサポートなら Sintra か Marblism、アウトバウンド営業なら Artisan、大企業の人事や IT なら Ema、コードなら Devin。すでに Claude Code や Codex を使っているなら、オープンソースの ai-employees か Crewmark です。",
      },
      {
        q: "無料の AI 社員はありますか？",
        a: "小規模な無料プランやトライアルがあるプラットフォームもあります。Lindy（7 日間で $50 分のクレジット）、Devin（少量の枠）、Ema（トライアル）です。markfulton/ai-employees などのオープンソースプロジェクトは無料で、手持ちのエージェントのサブスクリプションで動きます。",
      },
      {
        q: "AI 社員の費用はどのくらいですか？",
        a: "2026年11月6日時点のエントリープランは、月約 $20（Devin Pro）から 1 ユーザーあたり $49.99（Lindy Team）まででした。Artisan と Ema は営業経由の見積もりです。自分の Claude Code や Codex のプランで動くツールなら、モデル費用はほとんど増えません。",
      },
      {
        q: "AI 社員と AI エージェントの違いは？",
        a: "AI エージェントは頼まれたときにタスクをこなします。AI 社員は職種・目標・スケジュールを与えられたエージェントなので、自分で仕事を始め、続けていきます。詳しくは [AI 社員とは](/ai-employees) をご覧ください。",
      },
      {
        q: "中小企業でも AI 社員を使えますか？",
        a: "使えます。Sintra と Marblism は中小企業向けに作られていて、サポート、SNS、SEO、営業を担う名前付きの社員がいます。価格は月約 $24〜$49 です。",
      },
      {
        q: "GitHub にオープンソースの AI 社員はありますか？",
        a: "あります。markfulton/ai-employees（MIT）は 8 つの業務職種を、Claude Code、Codex、OpenCode などのエージェント向けの定期ルーティンとしてまとめています。ほかに OpenCompany や eggent もあります。",
      },
      {
        q: "AI 社員はどうやって採用すればいいですか？",
        a: "職種を 1 つと動かしたい数字を決め、自分で仕事を始め、リスクのある行動の前には確認してくれるプラットフォームを選び、2 週間動かして、数字が動いたときだけ使い続けましょう。",
      },
    ],
  },
  cta: {
    title: "すでにお金を払っているエージェントに、仕事を与えましょう。",
    text: "Crewmark は、Claude Code、Codex、DeepSeek Harness のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月6日に各ベンダーのウェブサイトと料金ページと照合しました。価格は変わるため、最新の価格はリンク先でご確認ください。",
  disclaimer:
    "Crewmark は比較対象の製品の 1 つです。製品名は各所有者の商標であり、このページはどのベンダーのレビューや承認も受けていません。",
};
