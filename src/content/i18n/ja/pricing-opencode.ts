import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /pricing/opencode; the English master is src/content/product-pricing/opencode.ts.

export const copy: GuideCopy = {
  meta: {
    title: "OpenCode の料金（2026年）：無料、Go $10、Go Plus $40",
    description:
      "OpenCode の料金：MIT のエージェントは無料で、無料モデルも。OpenCode Go は月 $10、Go Plus は $40。100 万トークン単位の従量課金や自分のキーも使えます。",
  },
  breadcrumb: "OpenCode の料金",
  parent: { name: "製品比較", href: "/compare" },
  hero: {
    kicker: "料金 · OpenCode",
    title: "OpenCode の料金：無料のエージェントと、モデル代の 4 つの払い方",
    lead: "OpenCode は、無料でオープンソース（MIT）のコーディングエージェントです。アカウント不要の無料モデルが付いていて、1 日のリクエスト上限の範囲で使えます。それ以上は、エージェントではなくモデルに支払います。月 $10 の OpenCode Go か月 $40 の Go Plus、100 万トークン単位で課金される従量課金のモデル、または ChatGPT Plus や Pro、GitHub Copilot など、すでに持っているプランや API キーです。Enterprise は営業経由です。それぞれの選択肢とその費用、そして Claude Code、Codex、Hermes Agent、OpenClaw との比較を紹介します。",
    cta: "今すぐ始める",
    secondary: "実際にかかる費用",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "OpenCode のプランと料金",
      text: [
        "[opencode.ai](https://opencode.ai) と、Go、モデル、Enterprise に関するコンソールのページをもとに、2026年11月13日に確認しました。価格は米ドルです。",
      ],
      headers: ["プラン", "料金", "含まれるもの"],
      rows: [
        [
          "OpenCode（オープンソース）",
          "無料、MIT ライセンス",
          "ターミナル UI、デスクトップアプリ、Web アプリ、SDK として使えるエージェント。ローカルモデルを含む 200 以上のプロバイダーのモデル",
        ],
        ["無料モデル", "$0、アカウント不要", "1 日のリクエスト上限付きの無料モデル一式"],
        [
          "OpenCode Go",
          "月 $10",
          "厳選されたモデル。5 時間、1 週間、1 か月ごとの利用枠。クレジットの追加購入。いつでも解約可能",
        ],
        [
          "Go Plus",
          "月 $40",
          "厳選されたモデル。5 時間、1 週間、1 か月ごとの利用枠。クレジットの追加購入。いつでも解約可能",
        ],
        ["従量課金", "100 万トークンあたり", "使った分だけ残高から課金されるモデル"],
        [
          "自分のプランやキー",
          "その提供元にすでに払っている料金",
          "ChatGPT Plus や Pro、GitHub Copilot でログイン、または自分の API キーを使用",
        ],
        ["Enterprise", "営業に問い合わせ", "OpenCode の営業チームを通じた料金"],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "OpenCode で実際にかかる費用",
      points: [
        "エージェントは無料：OpenCode は MIT ライセンスで、macOS、Windows、Linux 向けの CLI バイナリと、デスクトップアプリ（README ではベータと表記）があります。",
        "無料モデルには 1 日のリクエスト上限：アカウントは不要です。",
        "Go の利用枠はモデルによって異なる：Go と Go Plus では、利用枠が 5 時間、1 週間、1 か月の単位でリセットされます。クレジットを追加購入でき、いつでも解約できます。",
        "従量課金はトークン単位：従量課金のモデルは、100 万トークンあたりの料金で残高から課金されます。",
        "すでに払っているプランも使える：ChatGPT Plus や Pro、GitHub Copilot でログインできます。自分の API キーを使う場合、利用分はその提供元から請求されます。OpenCode は Models.dev を通じて、ローカルモデルを含む 200 以上の LLM プロバイダーに対応しています。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "OpenCode と他のコーディングエージェントの料金比較",
      text: [
        "各製品のサイトに載っている最低価格で、2026年11月13日に確認しました。価格は米ドルです。",
        "並べて比較：[OpenCode vs Claude Code](/compare/opencode-vs-claude-code)、[OpenClaw vs OpenCode](/compare/openclaw-vs-opencode)、[Hermes Agent vs Claude Code](/compare/hermes-agent-vs-claude-code)。ほかの選択肢は [OpenCode の代替ツール](/blog/opencode-alternatives) で紹介しています。",
      ],
      headers: ["製品", "最低価格", "無料の選択肢"],
      rows: [
        [
          "OpenCode",
          "エージェントは無料。OpenCode Go 月 $10",
          "あり：エージェント（MIT）と、1 日のリクエスト上限付きの無料モデル",
        ],
        [
          "[Claude Code](/compare/opencode-vs-claude-code)",
          "Claude Pro に含まれる：月 $20、年払いなら月 $17",
          "なし：Claude Free には含まれない。従量課金の API クレジットでも利用可",
        ],
        [
          "Codex",
          "ChatGPT Plus（月 $20）に含まれる。または OpenAI の API キーで API 料金",
          "CLI はオープンソース（Apache-2.0）。利用分は ChatGPT のプランか API キーから",
        ],
        [
          "[Hermes Agent](/pricing/hermes-agent)",
          "エージェントは無料。任意の Nous Portal Plus は月 $20",
          "あり：エージェント（MIT）と、$0 の Nous Portal Free（従量課金、無料モデルのみ）",
        ],
        [
          "[OpenClaw](/pricing/openclaw)",
          "無料。有料プランやホスティングサービスはなし",
          "あり：プロジェクト全体（MIT）。支払うのはモデルプロバイダーへの料金",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "OpenCode はエージェント。Crewmark はエージェントに仕事とボードを与えます。",
      text: [
        "Crewmark は、AI 社員のチームのための issue トラッカーです。社員の一人ひとりが、Claude Code、Codex、OpenCode など、あなたのパソコンで動くエージェントの会話で、職種、KPI、勤務時間を持ちます。ハートビートで起動し、共有ボードから issue を引き受けます。OpenCode と同じく、Crewmark もモデルの利用料は請求しません。支払いはエージェントの提供元に対して行います。",
        "Crewmark の料金：Free は $0（1 プロジェクト、AI 社員 3 人まで、利用者 1 人）。月 $5 の Pro と月 $10 の Team は近日公開予定です。課金の仕組みはまだできていないため、それまではすべてのアカウントで Crewmark を無料でお使いいただけます。オープンソース（GPL-3.0）で、セルフホストもできます。",
      ],
      steps: [
        {
          title: "職種を選ぶ",
          text: "[AI 社員の職種](/ai-employees) から選びます。たとえばソフトウェアエンジニア、SEO スペシャリスト、データアナリストなどです。",
        },
        {
          title: "仕事をボードに載せる",
          text: "issue を割り当て、定期的なものは繰り返すよう設定します。ハートビートが社員を起こし、次の issue に取りかからせます。",
        },
        {
          title: "プランを見る",
          text: "[Crewmark の料金](/pricing) のほか、セットアップ付きの仕事の例を [Claude Code の活用例](/use-cases/claude-code) と [Codex の活用例](/use-cases/codex) で紹介しています。",
        },
      ],
    },
  ],
  mid: {
    title: "コーディングエージェントに働き続けてほしいですか？",
    text: "Crewmark は、Claude Code や Codex に職種、ハートビート、共有ボードを与えます。1 プロジェクト、AI 社員 3 人までは無料です。",
    button: "今すぐ始める",
  },
  faq: {
    title: "OpenCode の料金に関するよくある質問",
    items: [
      {
        q: "OpenCode は無料ですか？",
        a: "はい。エージェントは MIT ライセンスのオープンソースで、無料です。アカウント不要で、1 日のリクエスト上限がある無料モデルも付いています。",
      },
      {
        q: "OpenCode Go の料金はいくらですか？",
        a: "OpenCode Go は月 $10、Go Plus は月 $40 です。どちらも厳選されたモデルが使え、利用枠は 5 時間、1 週間、1 か月の単位で、クレジットの追加購入ができ、いつでも解約できます。",
      },
      {
        q: "OpenCode の料金体系は？",
        a: "エージェントは無料で、モデルの料金を次の 4 つのいずれかで支払います。無料モデル、Go または Go Plus のサブスクリプション、残高から 100 万トークン単位で課金される従量課金、またはすでに持っているプランや API キーです。Enterprise は営業経由です。",
      },
      {
        q: "OpenCode のモデルごとの料金は？",
        a: "OpenCode Go の利用枠はモデルによって異なります。従量課金のモデルは 100 万トークン単位で課金されます。自分の API キーを使う場合、利用分はその提供元から請求されます。",
      },
      {
        q: "ChatGPT や GitHub Copilot のサブスクリプションで OpenCode を使えますか？",
        a: "はい。ChatGPT Plus や Pro、GitHub Copilot でログインするか、自分の API キーを使えます。",
      },
      {
        q: "OpenCode はローカルモデルで使えますか？",
        a: "はい。OpenCode は Models.dev を通じて、ローカルモデルを含む 200 以上の LLM プロバイダーに対応しており、エージェント自体も無料です。",
      },
    ],
  },
  cta: {
    title: "モデルを選んだら、エージェントに仕事を。",
    text: "Crewmark は、Claude Code と Codex のセッションを、職種、KPI、勤務時間、ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked:
    "2026年11月13日に opencode.ai と OpenCode のコンソールのページで確認しました。他製品の料金は、同じ日に各製品のサイトで確認したものです。",
  disclaimer:
    "Crewmark は独立した製品であり、OpenCode の開発元である Anomaly やこのページで名前を挙げたその他の企業とは提携しておらず、その承認も受けていません。製品名は各所有者の商標です。",
};
