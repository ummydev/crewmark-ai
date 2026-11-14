import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/claude-code-deepseek; the English master is src/content/blog/claude-code-deepseek.ts.

const docs = "https://api-docs.deepseek.com/quick_start/agent_integrations/claude_code";

const env = `export ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic
export ANTHROPIC_AUTH_TOKEN=<your DeepSeek API Key>
export ANTHROPIC_MODEL=deepseek-flash[1m]
export ANTHROPIC_DEFAULT_OPUS_MODEL=deepseek-flash[1m]
export ANTHROPIC_DEFAULT_SONNET_MODEL=deepseek-flash[1m]
export ANTHROPIC_DEFAULT_HAIKU_MODEL=deepseek-flash
export CLAUDE_CODE_SUBAGENT_MODEL=deepseek-flash
export CLAUDE_CODE_EFFORT_LEVEL=max
export CLAUDE_CODE_AUTO_COMPACT_WINDOW=786432`;

const windows = `$env:ANTHROPIC_BASE_URL="https://api.deepseek.com/anthropic"
$env:ANTHROPIC_AUTH_TOKEN="<your DeepSeek API Key>"
$env:ANTHROPIC_MODEL="deepseek-flash[1m]"
$env:ANTHROPIC_DEFAULT_OPUS_MODEL="deepseek-flash[1m]"
$env:ANTHROPIC_DEFAULT_SONNET_MODEL="deepseek-flash[1m]"
$env:ANTHROPIC_DEFAULT_HAIKU_MODEL="deepseek-flash"
$env:CLAUDE_CODE_SUBAGENT_MODEL="deepseek-flash"
$env:CLAUDE_CODE_EFFORT_LEVEL="max"
$env:CLAUDE_CODE_AUTO_COMPACT_WINDOW="786432"`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code で DeepSeek V4 を使う方法：設定と料金",
    description:
      "Claude Code を DeepSeek のモデルで動かす方法。DeepSeek が公開している deepseek-flash と deepseek-v4-pro 用の環境変数、モデルの対応関係、Web 検索、料金、Codex での設定を解説します。",
  },
  breadcrumb: "Claude Code で DeepSeek を使う",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "ブログ · DeepSeek",
    title: "Claude Code で DeepSeek のモデルを使う方法",
    lead: "DeepSeek の API は Anthropic のプロトコルに対応しているため、Claude Code の接続先を `https://api.deepseek.com/anthropic` にして DeepSeek の API キーを渡せば、DeepSeek のモデルで Claude Code を動かせます。具体的な設定は DeepSeek が公開しています。普段の作業には 1M トークンのコンテキストを持つ `deepseek-flash`（DeepSeek-V4.1-Flash）を使い、Opus の名前には `deepseek-v4-pro` が割り当てられます。このガイドでは、macOS・Linux・Windows での設定手順、Claude のモデル名がどう対応付けられるか、かかる費用、そして Codex で同じことをする方法を説明します。",
    cta: "今すぐ始める",
    secondary: "設定手順へ移動",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code を DeepSeek で使う設定手順",
      steps: [
        {
          title: "DeepSeek の API キーを取得する",
          text: "platform.deepseek.com の API keys で作成し、アカウントに残高をチャージします。利用料はトークン単位で課金されます。",
        },
        {
          title: "Claude Code をまだ入れていなければインストールする",
          text: "DeepSeek のガイドでは npm でインストールします。Node.js 18 以降（Windows では Git for Windows も）を用意し、`npm install -g @anthropic-ai/claude-code` を実行して、`claude --version` で確認します。",
        },
        {
          title: "環境変数を設定する（macOS・Linux）",
          text: "これらの変数で、Claude Code の接続先を DeepSeek の Anthropic 互換エンドポイントにし、メインモデルとサブエージェントに 1M コンテキストの `deepseek-flash` を使い、effort レベルと自動圧縮ウィンドウを引き上げます。設定を残すにはシェルのプロファイルに書いておきます。",
          code: env,
        },
        {
          title: "Windows の場合（PowerShell）",
          text: "同じ設定を、現在のセッション用の PowerShell 環境変数として指定します。",
          code: windows,
        },
        {
          title: "プロジェクトで Claude Code を起動する",
          text: "`cd` でプロジェクトに移動し、`claude` を実行します。CLAUDE.md、skills、hooks、MCP サーバーなど、それ以外はいつもどおりに設定します。",
        },
      ],
      source: { label: "出典：DeepSeek API ドキュメント、Integrate with Claude Code", href: docs },
    },
    {
      kind: "table",
      title: "Claude のモデル名と DeepSeek モデルの対応",
      text: [
        "Claude Code（または Claude デスクトップアプリ）が Claude のモデル名を DeepSeek のエンドポイントに送ると、DeepSeek は次のように対応付けます。上の設定ですべてのモデル変数を `deepseek-flash` にしているのはこのためです。そうしないと、Opus を指定したリクエストはすべて V4 Pro の料金で課金されます。",
      ],
      headers: ["Claude Code が送るモデル名", "使われる DeepSeek モデル", "備考"],
      rows: [
        ["`claude-opus-*`", "`deepseek-v4-pro`", "V4 Pro の料金で課金"],
        ["`claude-sonnet-*`、`claude-haiku-*`", "`deepseek-flash`", "DeepSeek-V4.1-Flash。画像入力に対応"],
        ["`deepseek-flash[1m]`", "コンテキスト 1,048,576 トークンの `deepseek-flash`", "DeepSeek が推奨する環境変数での設定"],
      ],
    },
    {
      kind: "table",
      id: "cost",
      title: "かかる費用",
      text: [
        "DeepSeek API の料金です。単位は100万トークンあたりの米ドルで、2026年11月6日時点のものです。オフピーク料金（平日の UTC 01:00–04:00 と 06:00–10:00 以外）はピーク料金の半額です。Claude Code の Web 検索も DeepSeek の API で動きますが、検索のたびに結果の要約でモデルのトークンが追加で消費され、DeepSeek の Search API として課金されます。",
      ],
      headers: ["100万トークンあたり", "deepseek-flash、ピーク", "deepseek-flash、オフピーク", "deepseek-v4-pro、ピーク", "deepseek-v4-pro、オフピーク"],
      rows: [
        ["入力（キャッシュヒット）", "$0.006", "$0.003", "$0.044", "$0.022"],
        ["入力（キャッシュミス）", "$0.30", "$0.15", "$1.32", "$0.66"],
        ["出力", "$1.20", "$0.60", "$3.96", "$1.98"],
      ],
    },
    {
      kind: "text",
      title: "Codex で DeepSeek を使う",
      text: [
        "DeepSeek は Responses API を通じて Codex にも対応しています。ガイドにはセットアップスクリプトが用意されており、`~/.codex/config.toml` をバックアップしたうえで、`deepseek-flash` と `deepseek-v4-pro` を含む `~/.codex/models.json` カタログを書き出し、DeepSeek プロバイダーを追加します。これで 1 つの設定が Codex CLI、ChatGPT デスクトップアプリ、VS Code 拡張機能のすべてに適用されます。実行する前にスクリプトの中身を確認するか、同じガイドにある手動の手順に従ってください。組み込みの Web 検索はスクリプトによって無効になり、使えるのは `deepseek-v4-pro` のときだけです。Codex 自体の指示ファイルについては [Codex AGENTS.md ガイド](/blog/codex-agents-md)を参照してください。",
      ],
    },
    {
      kind: "text",
      title: "Claude Code × DeepSeek と DeepSeek Harness の違い",
      points: [
        "Claude Code × DeepSeek：CLAUDE.md、skills、hooks、プラグインを含め、Claude Code の画面や使い慣れたやり方はそのままで、Claude のプランの代わりに DeepSeek のトークン単価で支払います。",
        "DeepSeek Harness：プラグインを中心に作られた DeepSeek 自身のオープンソースのエージェントアプリで、デスクトップアプリと Web UI があります。Claude Code や Codex をサブエージェントとして動かすこともできます。[DeepSeek Harness ガイド](/blog/deepseek-harness)を参照してください。",
        "どちらを選んでも、モデルは同じ `deepseek-flash` と `deepseek-v4-pro` で、DeepSeek から請求されます。",
        "Anthropic のモデルに戻すには、環境変数を解除する（またはそれらのない新しいシェルを開く）と、いつもどおり Claude Code にサインインできます。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "安いモデルを、一日中働かせる",
      text: [
        "Claude Code や DeepSeek Harness を DeepSeek の料金で動かせば、エージェントを働かせ続けても負担になりません。Crewmark は、それらのセッションを職種・目標・勤務時間を持つ AI 社員に変え、ハートビートで一人ずつ起こしてボードから次の issue を取らせます。",
      ],
      steps: [
        {
          title: "今の環境をそのまま使う",
          text: "社員はあなたのマシン上の Claude Code、Codex、DeepSeek Harness、OpenCode のセッションで、あなたの環境とキーを使って動きます。",
        },
        {
          title: "ハートビートで仕事を始めさせる",
          text: "勤務時間中、社員は 15 分、30 分、60 分ごとに同じ会話の中で起き、次の issue に取りかかります。[Claude Code を能動的に動かす方法](/proactive-claude-code)を参照してください。",
        },
        {
          title: "請求額を抑える",
          text: "勤務時間を決め、一度に 1 つの issue だけを扱うことで、使用量の見通しが立ちます。[Claude Code のトークン使用量を減らす方法](/blog/reduce-claude-code-token-usage)を参照してください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code で DeepSeek のモデルを使う" },
  mid: {
    title: "DeepSeek なら Claude Code は安い。だから、もっと働かせよう。",
    text: "Crewmark は、職種・目標・issue のボードを与えて、Claude Code、Codex、DeepSeek Harness をハートビートで起こします。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Claude Code × DeepSeek のよくある質問",
    items: [
      {
        q: "Claude Code で DeepSeek のモデルは使えますか？",
        a: "使えます。DeepSeek の API は `https://api.deepseek.com/anthropic` で Anthropic 互換です。DeepSeek のガイドにあるとおり、`ANTHROPIC_BASE_URL` をこの URL に、`ANTHROPIC_AUTH_TOKEN` を DeepSeek の API キーに設定します。",
      },
      {
        q: "Claude Code ではどの DeepSeek モデルを使えばいいですか？",
        a: "DeepSeek のガイドでは、すべての役割に 1M コンテキストの `deepseek-flash`（DeepSeek-V4.1-Flash）を設定しています。Opus モデルを指定したリクエストには `deepseek-v4-pro` が使われ、料金は高くなります。",
      },
      {
        q: "Claude Code × DeepSeek の費用はいくらですか？",
        a: "かかるのは DeepSeek API の利用料だけです。`deepseek-flash` はピーク時でキャッシュミスの入力が100万トークンあたり $0.30、出力が100万トークンあたり $1.20 で、オフピークはその半額、キャッシュヒットした入力はさらに大幅に安くなります。",
      },
      {
        q: "DeepSeek で動かす Claude Code でも Web 検索は使えますか？",
        a: "使えます。DeepSeek は Claude Code の Web 検索ツールに対応しています。検索のたびに結果の要約でモデルのトークンが追加で消費され、DeepSeek の Search API として課金されます。",
      },
      {
        q: "Claude のサブスクリプションは必要ですか？",
        a: "不要です。これらの変数を設定すると、Claude Code はリクエストを DeepSeek に送り、Claude のプランではなく DeepSeek のアカウントに課金されます。",
      },
      {
        q: "Codex でも DeepSeek を使えますか？",
        a: "使えます。DeepSeek は Responses API を使った Codex の設定方法を公開しており、スクリプトを使うか、`~/.codex/config.toml` と `~/.codex/models.json` を手動で編集します。",
      },
      {
        q: "Claude Code × DeepSeek と DeepSeek Harness、どちらがいいですか？",
        a: "Claude Code のツールやワークフローが気に入っているなら、そのままモデルだけを切り替えましょう。デスクトップ UI を備えた DeepSeek 自身のプラグイン型アプリを使いたいなら、DeepSeek Harness を試してください。",
      },
    ],
  },
  cta: {
    title: "DeepSeek で動くエージェントに、勤務スケジュールを。",
    text: "Crewmark は、Claude Code、Codex、DeepSeek Harness、OpenCode のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月6日に DeepSeek の API ドキュメント（Claude Code・Codex との連携、料金）と照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、DeepSeek、Anthropic、OpenAI とは提携しておらず、その承認も受けていません。Claude と Claude Code は Anthropic の商標、Codex は OpenAI の商標です。",
};
