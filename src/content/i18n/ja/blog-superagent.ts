import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/superagent; the English master is src/content/blog/superagent.ts.

const deepseek = "https://github.com/deepseek-ai/dsh-superagent-prototype";

export const copy: GuideCopy = {
  meta: {
    title: "Superagent とは？スーパーエージェント比較 | Crewmark AI",
    description:
      "「Superagent」は複数の AI 製品の名前です。スーパーエージェントとは何か、DeepSeek の Super-agent が話題の理由、そして Base44 Superagents、ClickUp Super Agents、Genspark、オープンソースの superagent-ai との違いを解説します。",
  },
  breadcrumb: "Superagent とは",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "ブログ · AI エージェント",
    title: "Superagent とは？ 2026年の「Superagent」をすべて比較",
    lead: "スーパーエージェント（superagent）とは、自分で動き続ける AI エージェントのことです。やるべき仕事に目を配り、1ステップごとに指示されなくてもタスクを引き受け、バックグラウンドで進め、判断が必要なときだけあなたのところに戻ってきます。今月この言葉があちこちで見られるのは、DeepSeek が2026年10月31日に Super-agent のプロトタイプをオープンソースで公開したからですが、Base44 や ClickUp からオープンソースのセキュリティツールまで、すでにいくつもの製品がこの名前を使っています。このガイドでは、考え方、それぞれの製品の実際の中身、選び方を説明します。",
    cta: "今すぐ始める",
    secondary: "比較表へ移動",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "Superagent の定義",
      text: [
        "決まった定義はありませんが、スーパーエージェントをうたう製品には共通する考え方があります。聞かれたら答えるアシスタントから、継続的な仕事を担うエージェントへの転換です。",
      ],
      points: [
        "自分で仕事を始める：きっかけはチャットのプロンプトだけでなく、スケジュール、トリガー、メッセージ、割り当てられたタスクです。",
        "バックグラウンドで動き、多くの場合は複数のタスクを同時に、それぞれ専用のセッションで進めます。",
        "タスクをまたいで文脈を覚え、GitHub、Slack、Gmail、プロジェクトボードなど、仕事が行われるツールとつながります。",
        "人の手をわずらわせるのは、判断や承認が必要なときだけです。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "「Superagent」をすべて比較",
      text: [
        "2026年11月6日時点の、各社のウェブサイトまたは GitHub リポジトリの情報です。",
      ],
      headers: ["製品", "開発元", "概要", "仕事の始まり方", "料金"],
      rows: [
        ["DeepSeek Super-agent（dsh-superagent）", "DeepSeek の Harness チーム", "1つの GitHub リポジトリ向けの自律型コーディングエージェント。研究用プロトタイプで、公式製品ではない", "許可された人からの GitHub（任意で Feishu も）上の依頼、またはチームが書いたルール", "無料、MIT。DeepSeek Harness 上で動作"],
        ["Base44 Superagents", "Base44（Wix 傘下）", "普通の言葉で説明するだけで作れるノーコードのエージェント。個人や業務のタスク向け", "スケジュール、トリガー、Webhook、WhatsApp・Telegram・Slack などのチャットアプリ", "Base44 プランのクレジットを消費。無料プランあり、有料は年払いで月 $16 から"],
        ["ClickUp Super Agents", "ClickUp", "ClickUp ワークスペース内の AI チームメイト。仕分け、スケジュール、レポート、アイテム作成を担当", "@メンション、割り当てられたタスク、DM、スケジュール、トリガー", "全ユーザーが利用可能。利用量は AI クレジットで課金"],
        ["Genspark Super Agent", "Genspark", "リサーチ、スライド、ドキュメントなどに使える汎用エージェント", "あなたのプロンプト", "genspark.ai を参照"],
        ["superagent-ai/superagent", "Superagent（オープンソース）", "2023年にエージェントフレームワークとして始まり、現在は AI アプリをプロンプトインジェクションやデータ漏えいから守るツール", "アプリの処理パイプライン内で動作", "オープンソース、MIT"],
        ["superagent-ai/grok-cli", "コミュニティ製、xAI とは無関係", "Grok API 向けのオープンソースのターミナル型コーディングエージェント", "あなたのプロンプト。サブエージェントと Telegram からのリモート操作にも対応", "無料、MIT。Grok API キーは自分で用意"],
        ["Crewmark", "Crewmark", "Claude Code、Codex、DeepSeek Harness、OpenCode 上に作る AI 社員", "勤務時間中、ハートビートがボードから次の issue を取らせる", "登録受付中。今のサブスクリプションのまま動作"],
      ],
    },
    {
      kind: "text",
      title: "いま「superagent」が検索されている理由：DeepSeek",
      text: [
        "2026年10月31日、DeepSeek は dsh-superagent という研究用プロトタイプと、スーパーエージェントの設計に関する解説記事を公開し、リポジトリは1週間ほどで約 20,000 の GitHub スターを集めました。DeepSeek Harness を、GitHub を監視するエージェントに変えるもので、自分で作業項目を作り、それぞれを別のセッションで実行し、プルリクエストなどの成果で返信します。人の対応が必要なものは Web パネルに表示されます。目指すのは、人の注意をできるだけ使わないことだと明言しています。詳しくは [DeepSeek Super-Agent とは](/blog/deepseek-super-agent) をご覧ください。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "スーパーエージェントの選び方",
      steps: [
        {
          title: "仕事がどこにあるかから考える",
          text: "コードが GitHub にあるなら DeepSeek のプロトタイプか、Claude Code や Codex 上のエージェント。ClickUp のワークスペースなら ClickUp Super Agents。個人の用事やメッセージ中心なら Base44 です。",
        },
        {
          title: "仕事がどう始まるかを確認する",
          text: "本物のスーパーエージェントは、毎回プロンプトを待ちません。スケジュール、トリガー、タスクの割り当て、ハートビートがあるか、そして何をしているかを確認できる場所がはっきりあるかを見ましょう。",
        },
        {
          title: "単独で何をしてよいかを確認する",
          text: "マージ、送信、支払いなどリスクのある操作の前に確認してくれて、あとから見直せる記録を残すエージェントを選びましょう。DeepSeek のプロトタイプは、依頼かチームが書いたルールがあるときだけ動きます。",
        },
        {
          title: "誰のモデルで、誰が払うのかを確認する",
          text: "ワークスペース型の製品はプラン料金に加えてクレジットを課金し、オープンソースのツールは自分の API キーやサブスクリプションで動きます。[AI 社員プラットフォームおすすめ比較](/blog/best-ai-employee-platforms)とも比べてみてください。",
        },
        {
          title: "プロトタイプか、製品か",
          text: "DeepSeek は、Super-agent はあくまで参考用だとしています。日々の仕事には、メンテナンスされているものを選ぶか、すでに信頼しているエージェントの上に構築しましょう。",
        },
      ],
      source: { label: "出典：DeepSeek の dsh-superagent リポジトリ", href: deepseek },
    },
    {
      kind: "text",
      title: "スーパーエージェント、AI エージェント、AI 社員の違い",
      text: [
        "AI エージェントは、渡されたタスクを完了します。スーパーエージェントはそこに自律性を加え、仕事に気づくか受け取るかして、バックグラウンドで進め続けます。AI 社員はさらに一歩進んで、そのエージェントに仕事を与えます。職種、数字で測る目標、勤務時間、そして仕事のボード。人を迎え入れるときと同じです。[AI 社員とは](/ai-employees)と[Claude Code を自律的に動かす方法](/proactive-claude-code)もご覧ください。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "職務記述書のあるスーパーエージェント",
      text: [
        "Crewmark は、Claude Code、Codex、DeepSeek Harness、OpenCode のセッションを AI 社員に変えます。勤務時間中はハートビートで起き、共有ボードから次の issue を取り、進めながらコメントし、判断が必要なときはメッセージを送ってきます。使うのは、すでに支払っているサブスクリプションです。",
      ],
      steps: [
        {
          title: "信頼できるエージェントを選ぶ",
          text: "DeepSeek Harness も選べます。DeepSeek の Super-agent が動いているのと同じランタイムです。",
        },
        {
          title: "職種と目標を与える",
          text: "ソフトウェアエンジニア、SEO 担当、グロースマーケター。それぞれに動かすべき数字があります。",
        },
        {
          title: "あとはハートビート任せ",
          text: "勤務時間中、15分・30分・60分ごとに次の issue を取ります。あなたが答えるのは、あなたが必要なことだけです。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "スーパーエージェントを選ぶ" },
  mid: {
    title: "自分のリポジトリで、自分のプランのまま働くスーパーエージェントが欲しいですか？",
    text: "Crewmark は、Claude Code、Codex、DeepSeek Harness を、ハートビートで起きて次の issue を自分で取る AI 社員に変えます。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Superagent のよくある質問",
    items: [
      {
        q: "スーパーエージェント（superagent）とは？",
        a: "時間をかけて自分で働く AI エージェントです。トリガー、スケジュール、依頼をきっかけにタスクを始め、バックグラウンドで進め、判断が必要なときだけ人に尋ねます。",
      },
      {
        q: "DeepSeek Super-agent とは？",
        a: "DeepSeek が2026年10月31日にオープンソースで公開した研究用プロトタイプ（dsh-superagent、MIT）です。DeepSeek Harness を1つの GitHub リポジトリ上で自律的に動かします。DeepSeek は参考用であり、公式製品ではないとしています。",
      },
      {
        q: "DeepSeek Super-agent は無料？",
        a: "はい。プロトタイプも DeepSeek Harness も MIT ライセンスのオープンソースです。支払うのは、その裏で使うモデルの利用料です。",
      },
      {
        q: "Base44 Superagents とは？",
        a: "Base44（Wix 傘下）で、普通の言葉で説明するだけで作れるノーコードの AI エージェントです。スケジュールやトリガーで動き、Gmail、Drive、Notion、GitHub、Slack、MCP サーバーとつながり、Base44 プランのクレジットを使います。",
      },
      {
        q: "ClickUp Super Agents とは？",
        a: "2025年12月に登場した、ClickUp ワークスペース内の AI チームメイトです。@メンションしたり、タスクを割り当てたり、スケジュールで動かしたりできます。全ユーザーが利用でき、AI クレジットを消費します。",
      },
      {
        q: "GitHub の Superagent は DeepSeek のものと同じ？",
        a: "違います。superagent-ai という組織は DeepSeek とは無関係です。その superagent リポジトリは現在 AI セキュリティツールで、grok-cli は Grok API 向けのコミュニティ製コーディングエージェントです。",
      },
      {
        q: "スーパーエージェントと AI 社員の違いは？",
        a: "スーパーエージェントは、自律的にタスクをこなします。AI 社員は、職種、目標、勤務時間、ボードを与えられた自律エージェントで、その仕事はチームメイトと同じように整理され、評価されます。",
      },
    ],
  },
  cta: {
    title: "コーディングエージェントを、仕事を持つスーパーエージェントに。",
    text: "Crewmark は、Claude Code、Codex、DeepSeek Harness、OpenCode のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月6日に各製品のウェブサイトまたは GitHub リポジトリと照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、DeepSeek、Base44、Wix、ClickUp、Genspark、superagent-ai の各プロジェクトとは提携しておらず、その承認も受けていません。製品名は各所有者の商標です。",
};
