import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/reduce-claude-code-token-usage; the English master is src/content/blog/reduce-claude-code-token-usage.ts.

const docs = "https://code.claude.com/docs/en/costs";

const compact = `# Compact instructions

compact を使うときは、テスト出力とコードの変更を重点的に残してください。`;

const hook = `{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          { "type": "command", "command": "~/.claude/hooks/filter-test-output.sh" }
        ]
      }
    ]
  }
}`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code のトークン使用量を減らす 12 のコツ | Crewmark AI",
    description:
      "Claude Code がトークンを大量に使う理由と減らし方。/usage と /context で使用量を確認し、clear と compact を使い分け、モデルと effort を選び、CLAUDE.md と MCP を絞り込み、フック、スキル、サブエージェントを活用します。",
  },
  breadcrumb: "Claude Code のトークン使用量を減らす",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "ブログ · Claude Code",
    title: "Claude Code のトークン使用量を減らす方法（もう上限に悩まない）",
    lead: "Claude Code はリクエストのたびに会話全体を送るので、トークン使用量はコンテキストとともに増えていきます。長いセッションの終盤に投げる一行の質問は、新しいセッションで同じ質問をするよりはるかに高くつきます。このガイドでは、まずトークンがどこに使われているかを確認する方法を紹介し、続いて Anthropic 自身のドキュメントにある 12 の削減策を解説します。`/clear` と `/compact` から、モデルと effort の選び方、CLAUDE.md と MCP サーバーの整理、出力の多い作業をフック、スキル、サブエージェントに移す方法まで扱います。",
    cta: "今すぐ始める",
    secondary: "コツへ移動",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "measure",
      title: "まず、トークンの使い道を確認する",
      headers: ["ツール", "わかること"],
      rows: [
        ["`/usage`", "セッションのトークン数と推定コスト。Pro、Max、Ultra、Team、Enterprise では、プランの使用量バー、スキル・サブエージェント・プラグイン・MCP サーバー別の内訳、改善の提案、負荷の大きい `/loop` タスクも表示"],
        ["`/context`", "いまコンテキストウィンドウを何が占めているか"],
        ["ステータスライン", "設定すれば、コンテキスト使用量を常に表示"],
        ["スピナーのカウント", "現在のターンの出力トークン（例：`↓ 5.5k tokens`）。コンテキストは含まない"],
        ["`/insights`", "最近のセッションでの作業の進め方をまとめた HTML レポート。つまずきポイントと提案つき"],
      ],
    },
    {
      kind: "text",
      title: "長いセッションで使用量が膨らむ理由",
      points: [
        "長いコンテキスト：リクエストのたびに会話全体が送られ、ツール呼び出しが一巡するごとに新たなリクエストが発生します。キャッシュで再読み込みは安くなりますが、無料にはなりません。",
        "キャッシュミス：キャッシュの有効期間より長く席を外したあとの最初のメッセージは、コンテキスト全体を処理し直します。",
        "放置中に動くもの：セッション単位のスケジュールタスクと `/loop`、ほかのセッションからのメッセージ、ゴールのチェックイン、セッションの振り返り、アイドル時の自動 compact。",
        "並列で動くワーカー：サブエージェント、ワークフローエージェント、agent team のチームメイトは、それぞれ独自にリクエストを送ります。チームメイトがプランモードで動く場合、agent teams は通常のセッションの約 7x のトークンを使います。",
        "compact そのもの：`/compact` は要約対象の会話を読む必要があります。`/clear` はコストゼロです。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code のトークン使用量を減らす 12 の方法",
      steps: [
        {
          title: "無関係なタスクの間でクリアする",
          text: "`/clear` で新しい会話を始めれば、古いコンテキストを引きずらずに済みます。あとで `/resume` で戻りたいなら、先に `/rename` を実行しておきましょう。",
        },
        {
          title: "指示を添えて compact する",
          text: "`/compact Focus on code samples and API usage` のように、残すべき内容を Claude に伝えます。常に使う compact の指示を CLAUDE.md に書いておくこともできます。",
          code: compact,
        },
        {
          title: "適切なモデルを使う",
          text: "Sonnet はほとんどのコーディングをこなせて、Opus より安価です。Opus はアーキテクチャや難しい推論のために取っておきましょう。`/model` で切り替え、単純なサブエージェントには `model: haiku` を指定します。",
        },
        {
          title: "簡単な作業では effort を下げる",
          text: "思考トークンは出力として課金され、1 回のリクエストで数万に達することもあります。定型的なタスクでは `/effort` でレベルを下げましょう。",
        },
        {
          title: "CLAUDE.md を短く保つ",
          text: "CLAUDE.md は毎セッション丸ごと読み込まれます。200 行程度に抑え、特定のワークフロー向けの指示は、使うときだけ読み込まれるスキルに移しましょう。[CLAUDE.md ガイド](/blog/claude-md)と [Claude Code のスキル](/blog/claude-code-skills)も参照してください。",
        },
        {
          title: "MCP サーバーを絞り込む",
          text: "ツール定義はデフォルトで遅延読み込みされますが、サーバーごとに名前と説明は追加されます。使っていないサーバーは `/mcp` で無効にし、ツールごとの一覧を追加しない `gh`、`aws`、`gcloud` などの CLI を優先しましょう。",
        },
        {
          title: "フックでノイズの多い出力をフィルタする",
          text: "PreToolUse フックでテストコマンドを書き換えて失敗だけを残せば、数万トークンのログが数百トークンになります。Anthropic のドキュメントには、そのまま使えるフィルタスクリプトが載っています。",
          code: hook,
        },
        {
          title: "冗長な作業はサブエージェントに任せる",
          text: "テストの実行、ドキュメントの読み込み、ログの処理をサブエージェントで行えば、出力はそのコンテキストにとどまり、戻ってくるのは要約だけです。こうしたサブエージェントには小さめのモデルを割り当てましょう。",
        },
        {
          title: "コードインテリジェンスのプラグインを入れる",
          text: "型のある言語では、言語サーバーのプラグインが「定義へ移動」を 1 回の呼び出しで済ませます。grep して複数のファイルを読む必要がなくなります。",
        },
        {
          title: "具体的なプロンプトを書く",
          text: "「auth.ts の login 関数に入力バリデーションを追加して」なら数ファイルを読むだけですが、「このコードベースを改善して」ではすべてを走査します。",
        },
        {
          title: "まず計画し、早めに止める",
          text: "大きな変更には[プランモード](/blog/claude-code-plan-mode)を使い、コードを書く前に方向違いに気づけるようにします。Claude が脱線したらすぐ Escape を押し、`/rewind` でチェックポイントに戻しましょう。",
        },
        {
          title: "席を外している間に動くものに注意する",
          text: "スケジュールタスク、`/loop` の実行、アイドル中のメッセージは、どれもコンテキスト全体を送ります。不要なループは止め、`crossSessionInbound` を `hold` にしてほかのセッションからのメッセージをキューに溜め、`/usage` の Loops の行を確認しましょう。",
        },
      ],
      source: { label: "出典：Claude Code ドキュメント、Manage costs effectively", href: docs },
    },
    {
      kind: "text",
      title: "使用量の上限とチームのコスト",
      text: [
        "Pro、Max、Ultra では、使用量は請求額ではなくプランの上限に対してカウントされます。5時間の制限と週間の制限の仕組みは [Claude Code と Codex の比較](/blog/claude-code-vs-codex)を参照してください。API では、Anthropic によると企業での平均は開発者 1 人あたり稼働日 1 日で約 $13、月 $150〜$250 で、90% のユーザーは 1 日 $30 未満です。",
        "管理者はチームに支出上限を設定できます。また、マネージド設定に `modelPricing` テーブルを入れると、`/usage` に定価ではなく契約料金が表示されます。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "スケジュールどおりに働き、夜通しトークンを燃やさないエージェント",
      text: [
        "セッションを起こすものはすべてコンテキスト全体を送るので、常時稼働のエージェントには歯止めが必要です。Crewmark は、Claude Code、Codex、DeepSeek Harness、OpenCode のセッションを AI 社員に変え、あなたが決めた勤務時間の間だけハートビートで起こします。",
      ],
      steps: [
        {
          title: "勤務時間とリズムを決める",
          text: "15 分、30 分、60 分ごとの間隔と、勤務する時間帯を選びます。それ以外の時間は眠っています。[Claude Code をプロアクティブにする方法](/proactive-claude-code)を参照してください。",
        },
        {
          title: "一度にひとつの issue",
          text: "ハートビートのたびにボードから次の issue を取るので、セッションは際限のない探索ではなく、焦点の定まったタスクに取り組みます。",
        },
        {
          title: "契約中のプランのままで",
          text: "AI 社員は既存のサブスクリプションで動き、使用量はプランの上限に対してカウントされます。[AI 社員とは](/ai-employees)をお読みください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code のトークン使用量を減らす" },
  mid: {
    title: "トークンは待ち時間ではなく、仕事に使おう。",
    text: "Crewmark は、職種・目標・ボードの次の issue を持たせて、勤務時間中に Claude Code を起こします。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Claude Code のトークン使用量に関するよくある質問",
    items: [
      {
        q: "Claude Code はなぜこんなにトークンを使うのですか？",
        a: "リクエストのたびに会話全体を送り、ツール呼び出しが一巡するたびに新たなリクエストが発生するからです。長いセッション、休憩後のキャッシュミス、サブエージェント、放置中に動くものが積み重なります。",
      },
      {
        q: "Claude Code のトークン使用量はどう確認しますか？",
        a: "`/usage` でセッションのトークン、プランの使用量、提案つきの内訳を、`/context` でコンテキストウィンドウを占めているものを確認できます。ステータスラインを使えば、コンテキスト使用量を常に表示できます。",
      },
      {
        q: "いちばん手っ取り早くトークンを節約する方法は？",
        a: "無関係なタスクの間で `/clear` を実行し、Opus が必要なとき以外は Sonnet を使い、CLAUDE.md を短く保つことです。この 3 つで無駄の大半を防げます。",
      },
      {
        q: "/compact でトークンは節約できますか？",
        a: "以降のメッセージのコンテキストは小さくなりますが、compact 自体が会話全体を読むので、大きなリクエストになります。会話を引き継ぐ必要がなければ、`/clear` ならコストゼロです。",
      },
      {
        q: "MCP サーバーはトークンを使いますか？",
        a: "ツール定義は使うまで遅延読み込みされますが、サーバーごとにツール名と説明は追加されます。使っていないサーバーは無効にし、CLI ツールがあればそちらを優先しましょう。",
      },
      {
        q: "なぜすぐに使用量の上限に達してしまうのですか？",
        a: "たいていは長いセッション、何度かのキャッシュミス、または `/loop`、スケジュールタスク、サブエージェント、agent teams といったバックグラウンドの作業が原因です。有料プランなら、`/usage` で最近の使用量の原因がどれかを確認できます。",
      },
      {
        q: "サブエージェントでトークンは節約できますか？",
        a: "冗長な出力をメインの会話から切り離すので、以降のリクエストは小さく保てます。ただし、サブエージェント自身のリクエストもカウントされます。小さめのモデルを割り当てれば、使う量を抑えられます。",
      },
    ],
  },
  cta: {
    title: "あなたが決めたスケジュールで Claude Code を働かせよう。",
    text: "Crewmark は、Claude Code、Codex、DeepSeek Harness のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月6日に Claude Code のドキュメント（Manage costs effectively）と照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Anthropic とは提携しておらず、その承認も受けていません。Claude と Claude Code は Anthropic の商標です。",
};
