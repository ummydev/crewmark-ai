import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/deepseek-v4-1-flash; the English master is src/content/blog/deepseek-v4-1-flash.ts.

const card = "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017";

const api = `curl https://api.deepseek.com/chat/completions \\
  -H "Authorization: Bearer $DEEPSEEK_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model": "deepseek-flash", "messages": [{"role": "user", "content": "Hello"}]}'`;

export const copy: GuideCopy = {
  meta: {
    title: "DeepSeek V4.1 Flash（1017）：料金と V4 Pro 比較",
    description:
      "DeepSeek-V4.1-Flash-1017 を解説。2026年10月17日の更新内容、API 料金、1M コンテキスト、Hugging Face の公開ウェイト、DeepSeek 公表のベンチマーク、V4 Pro を使うべき場面をまとめました。",
  },
  breadcrumb: "DeepSeek V4.1 Flash",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "ブログ · DeepSeek",
    title: "DeepSeek V4.1 Flash（1017）：料金、コンテキスト、ベンチマーク、V4 Pro との比較",
    lead: "DeepSeek-V4.1-Flash-1017 は、DeepSeek V4.1 Flash の2026年10月17日のアップデートです。V4.1 Flash は DeepSeek の最新アーキテクチャで最も小さいモデルで、画像を理解でき、1M トークンのコンテキストを持ちます。API の `deepseek-flash` も、DeepSeek のウェブサイトとアプリも、DeepSeek Harness のデフォルトもこのモデルで、ウェイトは MIT ライセンスで公開されています。DeepSeek によれば、9月のリリースよりスコアが高く、出力は短く、タスクを速く終えます。このガイドでは、概要、料金、V4 Pro との比較、使い方を説明します。",
    cta: "今すぐ始める",
    secondary: "料金へ移動",
    secondaryHref: "#pricing",
  },
  sections: [
    {
      kind: "table",
      title: "DeepSeek V4.1 Flash の概要",
      headers: ["", "DeepSeek-V4.1-Flash-1017"],
      rows: [
        ["リリース", "V4.1 Flash は2026年9月10日、1017 アップデートは2026年10月17日"],
        ["API のモデル名", "`deepseek-flash`（旧名の `deepseek-v4-flash` と `deepseek-v4-flash-vision-exp` もこのモデルで提供）"],
        ["入力", "テキストと画像"],
        ["コンテキスト長", "1M トークン。DeepSeek は `max_tokens` を 256K 以上にすることを推奨"],
        ["ウェイト", "Hugging Face で公開、MIT ライセンス"],
        ["使える場所", "DeepSeek の API、ウェブサイト、アプリ。DeepSeek Harness のデフォルト"],
        ["最適化の対象", "DeepSeek によると、DeepSeek Harness（v0.2.1-rc.1 以降）、Tencent の CodeBuddy と WorkBuddy"],
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "DeepSeek V4.1 Flash の料金と V4 Pro との比較",
      text: [
        "DeepSeek API の料金です。単位は100万トークンあたりの米ドルで、2026年11月6日時点のものです。オフピーク料金は平日の UTC 01:00–04:00 と 06:00–10:00 以外の時間帯に適用され、ピーク料金の半額です。1017 アップデートで料金は変わっていません。DeepSeek の Search API と Fetch API は、それぞれ 1,000 回の呼び出しごとに $0.75 です。",
      ],
      headers: ["100万トークンあたり", "Flash、ピーク", "Flash、オフピーク", "V4 Pro、ピーク", "V4 Pro、オフピーク"],
      rows: [
        ["入力（キャッシュヒット）", "$0.006", "$0.003", "$0.044", "$0.022"],
        ["入力（キャッシュミス）", "$0.30", "$0.15", "$1.32", "$0.66"],
        ["出力", "$1.20", "$0.60", "$3.96", "$1.98"],
      ],
    },
    {
      kind: "table",
      id: "benchmarks",
      title: "DeepSeek V4.1 Flash のベンチマーク（DeepSeek 公表値）",
      text: [
        "モデルカードに掲載された DeepSeek 自身の数値で、1017 アップデートと9月の V4.1 Flash を比較しています。DeepSeek は Terminal-Bench 4.0 を Claude Code のハーネスで、DeepSWE を Mini-SWE-V2 で実行しました。ベンダーのベンチマークは自社モデルに有利になりがちなので、乗り換える前に自分のタスクで試してください。",
      ],
      headers: ["ベンチマーク", "V4.1 Flash 1017", "V4.1 Flash（9月版）"],
      rows: [
        ["Terminal-Bench 4.0", "42.3", "31.2"],
        ["DeepSWE v1.1", "77.0", "74.2"],
        ["ProgramBench", "29.1", "20.3"],
        ["NL2Repo-Bench", "68.2", "65.4"],
        ["Automation-Bench v1.0.6", "60.5", "54.8"],
        ["Agents' Last Exam", "35.4", "31.8"],
        ["HLE（ツールなし）", "42.6", "36.8"],
      ],
    },
    {
      kind: "text",
      title: "V4.1 Flash と V4 Pro、どちらを使うか",
      points: [
        "V4 Pro（`deepseek-v4-pro`、2026年8月13日に一般提供開始）は、入力トークンあたり Flash の 4.4 倍、出力トークンあたり 3.3 倍の料金で、テキストのみ対応です。Flash は画像入力にも対応しています。",
        "どちらも 1M トークンのコンテキストを持ち、推論の強さ（low、high、max）を調整できます。",
        "DeepSeek 自身のコーディングエージェント向け構成は Flash がデフォルトです。DeepSeek Harness も、DeepSeek が推奨する Claude Code の設定もそうで、後者では Sonnet と Haiku が Flash に、Opus だけが V4 Pro に割り当てられます。",
        "実用的な使い分け：普段のエージェント作業とサブエージェントには Flash、難しいタスクで Flash が失敗し続けるときは V4 Pro。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "DeepSeek V4.1 Flash の使い方",
      steps: [
        {
          title: "API から使う",
          text: "platform.deepseek.com で API キーを取得し、モデル名 `deepseek-flash` で呼び出します。API は OpenAI 互換・Anthropic 互換です。",
          code: api,
        },
        {
          title: "コーディングエージェントで使う",
          text: "デフォルトで使われる DeepSeek Harness で動かすか、Claude Code や Codex の接続先を DeepSeek にします。[DeepSeek Harness ガイド](/blog/deepseek-harness)と[Claude Code で DeepSeek を使う](/blog/claude-code-deepseek)を参照してください。",
        },
        {
          title: "公開ウェイトでローカル実行する",
          text: "Hugging Face から DeepSeek-V4.1-Flash-1017 をダウンロードします。リポジトリにはチャットテンプレートの代わりに、参照用のプロンプトエンコーダーと推論手順が含まれています。DeepSeek の推奨は temperature 1.0、top_p 1.0 です。",
        },
      ],
      source: { label: "出典：Hugging Face の DeepSeek-V4.1-Flash-1017", href: card },
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "安くて有能なモデルに、バックログを片づけさせる",
      text: [
        "Flash の料金なら、エージェントを一日中働かせても負担になりません。Crewmark は DeepSeek Harness、Claude Code、Codex、OpenCode のセッションを、職種・目標・勤務時間を持つ AI 社員に変え、ハートビートで起こしてボードから次の issue を取らせます。",
      ],
      steps: [
        {
          title: "エージェントとモデルを選ぶ",
          text: "DeepSeek Harness はデフォルトで V4.1 Flash を使います。Claude Code と Codex は DeepSeek のエンドポイント経由で使えます。",
        },
        {
          title: "職種と目標を与える",
          text: "[AI 社員とは](/ai-employees)、そして[スーパーエージェント](/blog/superagent)との違いをご覧ください。",
        },
        {
          title: "ハートビートで仕事を始めさせる",
          text: "勤務時間中は 15 分、30 分、60 分ごとに起きて次の issue に取りかかります。[Claude Code を能動的に動かす方法](/proactive-claude-code)を参照してください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "DeepSeek V4.1 Flash を使う" },
  mid: {
    title: "これほど安いモデルなら、一日中働かせよう。",
    text: "Crewmark は、職種・目標・issue のボードを与えて、DeepSeek Harness、Claude Code、Codex をハートビートで起こします。",
    button: "今すぐ始める",
  },
  faq: {
    title: "DeepSeek V4.1 Flash のよくある質問",
    items: [
      {
        q: "DeepSeek V4.1 Flash 1017 とは何ですか？",
        a: "DeepSeek の最新アーキテクチャで最も小さいモデル、DeepSeek V4.1 Flash の2026年10月17日のアップデートです。テキストと画像を入力でき、コンテキストは 1M トークンで、`deepseek-flash` として提供されています。",
      },
      {
        q: "DeepSeek V4.1 Flash の料金はいくらですか？",
        a: "API ではピーク時、入力がキャッシュミスで100万トークンあたり $0.30（キャッシュヒットなら $0.006）、出力が100万トークンあたり $1.20 です。オフピークはその半額です。",
      },
      {
        q: "DeepSeek V4.1 Flash のコンテキスト長は？",
        a: "1M トークンです。DeepSeek は `max_tokens` を 256K 以上にすることを推奨しています。",
      },
      {
        q: "DeepSeek V4.1 Flash はオープンソースですか？",
        a: "ウェイトは MIT ライセンスで Hugging Face に公開されており、参照用のプロンプトエンコーダーと推論手順も付いています。",
      },
      {
        q: "DeepSeek V4.1 Flash と V4 Pro の違いは？",
        a: "V4 Pro は入力トークンあたり 4.4 倍、出力トークンあたり 3.3 倍の料金で、テキストのみ対応です。Flash は画像を受け付け、DeepSeek のコーディングエージェント向け構成のデフォルトです。どちらもコンテキストは 1M です。",
      },
      {
        q: "V4.1 Flash から 1017 で何が変わりましたか？",
        a: "DeepSeek によると、エージェントとコーディングのベンチマークでスコアが上がり、出力が短くなり、タスクを速く終えるようになりました。料金とモデル名は変わっていません。",
      },
      {
        q: "Claude Code で DeepSeek V4.1 Flash は使えますか？",
        a: "使えます。DeepSeek は、Claude Code の接続先を Anthropic 互換エンドポイントにして `deepseek-flash` を使うための環境変数を公開しています。[Claude Code で DeepSeek を使う](/blog/claude-code-deepseek)を参照してください。",
      },
    ],
  },
  cta: {
    title: "DeepSeek V4.1 Flash を AI 社員に。",
    text: "Crewmark は、DeepSeek Harness、Claude Code、Codex、OpenCode のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月6日に DeepSeek の API ドキュメント（変更履歴、ニュース、料金）と Hugging Face のモデルカードと照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、DeepSeek とは提携しておらず、その承認も受けていません。ベンチマークの数値は DeepSeek 自身によるものです。製品名は各所有者の商標です。",
};
