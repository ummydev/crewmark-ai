import type { GuideCopy } from "@/components/landing/guide-article";

// ja translation of /blog/gemini-4-hydrogen; the English master is src/content/blog/gemini-4-hydrogen.ts.

const blog = "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/";

const api = `# Gemini API：モデルコードは gemini-4-hydrogen
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-4-hydrogen:generateContent" \\
  -H "x-goog-api-key: $GEMINI_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"contents": [{"parts": [{"text": "この diff で失敗しているテストを見つけて修正して"}]}]}'`;

export const copy: GuideCopy = {
  meta: {
    title: "Gemini 4 Hydrogen：料金、ベンチマーク、Argon 比較",
    description:
      "Google の高速モデル Gemini 4 Hydrogen の料金（$1.50 / $7.50）、1M コンテキスト、ベンチマーク、Argon・Carbon・3.8 Flash・Claude との比較。",
  },
  breadcrumb: "Gemini 4 Hydrogen",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "ブログ · 新モデル",
    title: "Gemini 4 Hydrogen：料金、ベンチマーク、ほかのモデルとの比較",
    lead: "Google は 2026年11月12日に Gemini 4 Hydrogen をリリースしました。日常的なコーディングとエージェント作業向けの高速な Gemini 4 モデルで、料金は 100万トークンあたり入力 $1.50、出力 $7.50 です。この料金は 100万トークンのコンテキスト全体で変わりません。Google が深く長期的な推論向けとしている Gemini 4 Carbon と Argon の下に位置し、多くの人が普段使うモデルとして Gemini 3.8 Flash に代わります。この記事では、新機能、Google が公表した数値、Argon・Carbon・3.8 Flash・Claude との料金比較、使える場所をまとめます。",
    cta: "今すぐ始める",
    secondary: "料金を見る",
    secondaryHref: "#pricing",
  },
  sections: [
    {
      kind: "table",
      id: "at-a-glance",
      title: "Gemini 4 Hydrogen の概要",
      headers: ["", "Gemini 4 Hydrogen"],
      rows: [
        ["リリース", "2026年11月12日、Google が公開"],
        ["モデルコード", "`gemini-4-hydrogen`"],
        ["用途", "コーディングとエージェント型ワークフローでの高速な実行"],
        ["コンテキスト", "入力 100万トークン、出力は最大 100万トークン"],
        ["思考レベル", "low、medium、high（デフォルト）と、新しい xhigh"],
        ["API 料金", "100万トークンあたり入力 $1.50、出力 $7.50。コンテキストの長さによらず一律で、Gemini API には無料枠あり"],
        ["使える場所", "Gemini API、Google AI Studio、Android Studio、Gemini for business、Gemini アプリ、Google 検索、有料の Google AI Pro・Ultra 加入者向けの Google Antigravity"],
      ],
    },
    {
      kind: "text",
      id: "whats-new",
      title: "Gemini 4 Hydrogen の新機能",
      points: [
        "Gemini 4 ファミリーの高速モデル：Google は Carbon と Argon を深く長期的な推論向けとし、Hydrogen を素早い実行向けに位置づけています。単独でも、それらの横で動くワーカーとしても使えます。",
        "Google Antigravity の Orchestrator は、1 つのセッションの中で Carbon と Hydrogen を切り替えます。Google によると、Terminal-Bench 4.0 で Carbon に近い成功率を出しながら、クォータの消費は 24% 少なく、19% 速く完了しました。",
        "Google によると、Gemini 3.8 Flash から大きく向上しています。デフォルトの high 設定で 2.5 倍速く、Terminal-Bench 4.1 は 18.2% から 57% に上がり、事実と異なる内容の生成は 5 分の 1 未満に減りました。",
        "大規模なリポジトリをまとめて探索：ファイルを 1 つずつではなく並列に読み、検索します。パートナー企業の検証では、3.8 Flash より 2〜2.8 倍速く、トークンは 12%〜23% 少なく済みました。",
        "新しい xhigh を含む 4 段階の思考レベルがあり、タスクに必要な分の推論にだけ料金を払えます。",
        "エージェント作業の安全性：Google は、ツール使用とコーディングの評価で、指示の範囲を超える行動（overreach）が最大 81% 減り、意図に沿わない行動や手抜きが 12 分の 1 になったと報告しています。社内のエージェント評価での誠実性（honesty）は 96.7% です。",
      ],
    },
    {
      kind: "table",
      id: "benchmarks",
      title: "Gemini 4 Hydrogen のベンチマーク",
      text: [
        "Google が発表で公開した数値です。第三者による結果はこれから出てきます。Google が比較対象を示している場合は、最後の列に記載しています。",
      ],
      headers: ["ベンチマーク", "Gemini 4 Hydrogen", "比較対象"],
      rows: [
        ["Artificial Analysis Intelligence Index", "high で 51、xhigh で 54", "Gemini 4 Argon：50"],
        ["Terminal-Bench 4.1", "57%", "Gemini 3.8 Flash：18.2%"],
        ["HLE-Diamond", "58.8%", "同クラスでトップ"],
        ["Vals Tax Agent Bench", "52.3%", "総合 1 位"],
        ["Vals Legal Research Bench", "55.8%", "1 位タイ"],
        ["Multimodal Knowledge Agent（MKA）", "53.4%", "Google によると他のモデルを上回る"],
        ["Agents' Last Exam v1.1", "71.6%", "Google によると他のモデルを上回る"],
        ["Agent Arena（arena.ai）", "5 位", "ライブランキング"],
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "Gemini 4 Hydrogen の料金",
      text: [
        "Gemini API の 100万トークンあたりの料金（米ドル）で、2026年11月13日時点の Google の料金ページによるものです。出力料金には思考トークンも含まれます。Carbon と Argon は 11月30日までローンチ価格で、その後 2 倍になります。3.8 Flash の料金は 2027年1月1日に 2 倍になります。Claude の料金は Anthropic のもので、[Claude Fable 5.2](/blog/claude-fable-5-2) の記事から引用しています。",
      ],
      headers: ["モデル", "入力", "出力", "バッチ（入力 / 出力）", "無料枠"],
      rows: [
        ["Gemini 4 Hydrogen", "$1.50", "$7.50", "$0.75 / $3.75", "あり"],
        ["Gemini 4 Argon", "11月30日まで $2.00、その後 $4.00", "11月30日まで $10.00、その後 $20.00", "$1.00 / $5.00、その後 $2.00 / $10.00", "なし"],
        ["Gemini 4 Carbon", "11月30日まで $2.00、その後 $4.00", "11月30日まで $10.00、その後 $20.00", "$1.00 / $5.00、その後 $2.00 / $10.00", "なし"],
        ["Gemini 3.8 Flash", "12月31日まで $0.75、その後 $1.50", "12月31日まで $3.75、その後 $7.50", "-", "あり"],
        ["Claude Sonnet 5.5", "$2", "$10", "$1 / $5", "-"],
        ["Claude Opus 5.5", "$4", "$20", "$2 / $10", "-"],
      ],
    },
    {
      kind: "text",
      id: "vs-argon-carbon",
      title: "Gemini 4 Hydrogen と Argon、Carbon の比較",
      text: [
        "Google は推論の深さで役割を分けています。Carbon は最も高性能な推論モデルで、複雑なソフトウェアエンジニアリング、高度な数学や科学、複数のステップを自律的にこなすエージェント向けです。Argon は効率を重視したフロンティアモデルで、Carbon より応答が速く、トークンの消費も少なめです。Hydrogen は日常的なコーディングとエージェント作業を素早くこなすためのモデルで、Carbon が全体を調整する間、ワーカーや検証役として動かすこともできます。",
        "料金面では、Hydrogen は現時点で Argon や Carbon より安く、両者のローンチ価格が終わる 12月1日以降は差がさらに広がります。Google の数値では、Artificial Analysis Intelligence Index でも Argon をわずかに上回っています（high で 51 対 50）。Gemini API では Carbon と Argon に無料枠はありませんが、Hydrogen にはあります。",
      ],
    },
    {
      kind: "text",
      id: "vs-flash",
      title: "Gemini 4 Hydrogen と Gemini 3.8 Flash の比較",
      text: [
        "3.8 Flash を使っているなら、Google は Hydrogen をそのアップグレード先として打ち出しています。デフォルト設定で速く、Terminal-Bench 4.1 のスコアは 3 倍以上、事実と異なる内容の生成も大幅に減っています。トークン単価は 12月31日までは 3.8 Flash の 2 倍ですが、2027年1月1日からはどちらも $1.50 と $7.50 で同じになります。Google のパートナーはタスクあたりのトークンが 12%〜23% 減ったと報告しており、差の一部はこれで相殺されます。",
      ],
    },
    {
      kind: "text",
      id: "vs-claude",
      title: "Gemini 4 Hydrogen と Claude Sonnet 5.5、Opus 5.5 の比較",
      text: [
        "Google の発表は Hydrogen を Claude と比較していないため、ここでは比較できる事実だけを並べます。100万トークンあたり $1.50 と $7.50 という Hydrogen の定価は、Claude Sonnet 5.5（$2 と $10）より安く、Opus 5.5（$4 と $20）よりかなり安くなっています。コンテキストは 100万トークンで、出力も最大 100万トークンです。Claude Code と Codex はそれぞれ自社のモデルで動くため、モデルの選択はふつう使っているエージェントで決まります。この 2 つの比較は [Claude Code と Codex の比較](/blog/claude-code-vs-codex)をご覧ください。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Gemini 4 Hydrogen の使い方",
      steps: [
        {
          title: "Google AI Studio で試す",
          text: "AI Studio で Gemini 4 Hydrogen を選びます。無料を含むすべての AI Studio のティアで使えます。",
        },
        {
          title: "Gemini API から呼び出す",
          text: "モデルコード `gemini-4-hydrogen` を指定します。思考レベルはデフォルトの high のままにし、深さより速さが大事なときは medium や low に下げます。",
          code: api,
        },
        {
          title: "Google Antigravity でコーディングする",
          text: "有料の Google AI Pro と Ultra の加入者は Antigravity で使えます。Antigravity では、Orchestrator が 1 つのセッションの中で Carbon と Hydrogen を切り替えられます。",
        },
        {
          title: "ほかのエージェントで使う",
          text: "Gemini API キーを受け付けるコーディングエージェントなら、モデル一覧に追加されれば `gemini-4-hydrogen` を呼び出せます。お使いのエージェントのモデル一覧を確認してください。",
        },
      ],
      source: { label: "出典：Google「Introducing Gemini 4 Hydrogen」", href: blog },
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "速いモデルだけでは半分。もう半分は、任せる仕事です。",
      text: [
        "モデルはどんどん速く安くなっていますが、それを使うエージェントは相変わらず次のプロンプトを待っています。Crewmark はコーディングエージェントのセッションを、職種、数値の目標、勤務時間、ハートビートを持つ AI 社員に変え、ボードから次の issue を自分で取らせます。",
      ],
      steps: [
        {
          title: "職種を選ぶ",
          text: "[AI 社員の職種](/ai-employees)から選びます。たとえば [AI ソフトウェアエンジニア](/ai-employees/software-engineer)。",
        },
        {
          title: "仕事をボードに置く",
          text: "issue を割り当て、定期的な仕事は繰り返し設定にし、ハートビートで社員を起こして次の仕事を取らせます。",
        },
        {
          title: "できることを見る",
          text: "エージェントごとのセットアップとルール付きの仕事は、[Claude Code の活用例](/use-cases/claude-code)と [Codex の活用例](/use-cases/codex)にまとめています。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Gemini 4 Hydrogen を使う" },
  mid: {
    title: "エージェントに、スケジュールどおり issue を片付けてほしいですか？",
    text: "Crewmark は各エージェントに職種、ハートビート、共有ボードを与えるので、エージェントが次の仕事を自分で取ります。",
    button: "今すぐ始める",
  },
  faq: {
    title: "よくある質問",
    items: [
      {
        q: "Gemini 4 Hydrogen とは何ですか？",
        a: "2026年11月12日にリリースされた、日常的なコーディングとエージェント作業向けの Google の高速な Gemini 4 モデルです。Gemini 4 Carbon と Argon の下に位置し、コンテキストは 100万トークン、出力は最大 100万トークンです。",
      },
      {
        q: "Gemini 4 Hydrogen の料金は？",
        a: "Gemini API では、入力 100万トークンあたり $1.50、出力 100万トークンあたり $7.50 で、コンテキストの長さによらず一律です。バッチは $0.75 と $3.75 です。無料枠があり、Gemini アプリでは誰でも使えます。",
      },
      {
        q: "Gemini 4 Hydrogen は Argon より優れていますか？",
        a: "Google は両者を別の用途に位置づけています。Argon と Carbon は深く長期的な推論向け、Hydrogen は高速な実行向けです。Artificial Analysis Intelligence Index では、Google はデフォルト設定の Hydrogen を 51、Argon を 50 と報告しており、料金は Hydrogen のほうが安くなっています。",
      },
      {
        q: "Gemini 4 Hydrogen と 3.8 Flash、乗り換えるべきですか？",
        a: "Google によると、Hydrogen はデフォルト設定で 2.5 倍速く、Terminal-Bench 4.1 は 57%（3.8 Flash は 18.2%）で、事実と異なる内容の生成も大幅に少なくなっています。トークン単価は 2026年12月31日までは 3.8 Flash の 2 倍ですが、2027年1月1日からはどちらも $1.50 と $7.50 です。",
      },
      {
        q: "Gemini 4 Hydrogen のモデルコードは？",
        a: "Gemini API と Google AI Studio では `gemini-4-hydrogen` です。",
      },
      {
        q: "Gemini 4 Hydrogen のモデルカードはどこにありますか？",
        a: "Google が PDF で公開しています：[Gemini 4 Hydrogen のモデルカード](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-4-Hydrogen-Model-Card.pdf)。",
      },
    ],
  },
  cta: {
    title: "最新のモデルに、継続的な仕事を。",
    text: "Crewmark はコーディングエージェントのセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月13日に Google の発表、Gemini API の料金ページとモデルページで確認。",
  disclaimer:
    "Crewmark は独立した製品であり、Google や Anthropic と提携・承認関係にはありません。Gemini と Claude は各所有者の商標です。",
};
