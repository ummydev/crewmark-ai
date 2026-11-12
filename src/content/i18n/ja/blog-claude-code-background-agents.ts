import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/claude-code-background-agents; the English master is
// src/content/blog/claude-code-background-agents.ts.
export const copy: GuideCopy = {
  meta: {
    title: "Claude Code のバックグラウンド実行：ヘッドレス・--bg・定期実行 | Crewmark",
    description:
      "Claude Code をバックグラウンドで動かす：バックグラウンドタスク、--bg と agent view、cron と claude -p、クラウドセッション、定期実行、必要な権限。",
  },
  breadcrumb: "Claude Code のバックグラウンドエージェント",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-02" },
  hero: {
    kicker: "ブログ · Claude Code",
    title: "Claude Code のバックグラウンドエージェントを動かす方法",
    lead: "バックグラウンドエージェントは、あなたが別のことをしている間も働き続けます。バックグラウンドに回した長いテスト、--bg で始めてターミナルを閉じたセッション、毎朝 cron が起動するヘッドレスの claude -p ジョブなどです。Claude Code には、それぞれに対応するツールがあります。このガイドでは、その使い方、それぞれが動き続ける条件、そして無人で実行するときに必要な権限を説明します。",
    cta: "早期アクセスに登録",
    secondary: "ヘッドレスモードへ移動",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      title: "Claude Code をバックグラウンドで動かす 5 つの方法",
      text: ["違いは、何を動かしたままにしておく必要があるかと、誰が仕事を始めるかです。"],
      headers: ["", "始め方", "動き続ける条件", "向いている用途"],
      rows: [
        ["バックグラウンドタスク", "Ctrl+B、または Claude がコマンドをバックグラウンドで実行", "セッションが開いている間", "1 つの会話の中での長いビルドやテスト、サブエージェント"],
        ["Agent view", "`claude --bg \"<prompt>\"`", "パソコンの電源が入っている間（ターミナルは閉じてよい）", "今始めて後で確認する複数のセッション"],
        ["ヘッドレスモード", "スクリプトや cron から `claude -p \"<prompt>\"`", "コマンドが実行されている間", "スクリプト、cron ジョブ、CI"],
        ["クラウドセッション", "`claude --cloud \"<task>\"`", "Anthropic のサーバーが実行（ノートパソコンは閉じてよい）", "GitHub リポジトリでの長いタスク"],
        ["スケジュールタスク", "`/schedule`、デスクトップアプリ、または `/loop`", "種類による：クラウド、アプリを開いている間、セッションを開いている間", "定期的な仕事。[Claude Code を自律的に動かす方法](/proactive-claude-code)を参照"],
      ],
    },
    {
      kind: "text",
      title: "セッション内のバックグラウンドタスク",
      text: [
        "Claude が Bash コマンドやサブエージェントを実行している最中に Ctrl+B を押すと、それをバックグラウンドに回せます（tmux では 2 回）。そのまま Claude と会話を続けられます。Claude が自分からコマンドをバックグラウンドで始めることもあります。Claude が起動するサブエージェントは、デフォルトでバックグラウンドで動きます。",
        "`/tasks` と入力すると、実行中のシェルとサブエージェントの一覧を表示して様子を確認できます。ローカルのターミナルのセッションでは、バックグラウンドのコマンドに時間制限はありませんが、Claude Code が終了すると止まります。複数のエージェントを並べて動かすには、[複数の Claude Code エージェントを動かす方法](/blog/multiple-claude-code-agents)をご覧ください。",
      ],
    },
    {
      kind: "text",
      title: "Agent view：ターミナルを閉じても続くセッション",
      text: [
        "`claude --bg \"<prompt>\"` はバックグラウンドでセッションを始めてすぐに戻ります。`/bg` は今いるセッションをバックグラウンドに移します。これらはスーパーバイザープロセスが実行するので、ターミナルを閉じても止まりませんが、パソコンをシャットダウンしたり再起動したりすると止まります。また、どこにもアタッチされていないアイドル状態のセッションは、およそ 1 時間で停止されます。",
        "`claude agents` で agent view を開き、`claude attach <id>`、`claude logs <id>`、`claude stop <id>` で個々のセッションを管理します。Agent view はリサーチプレビューなので、コマンドが変わる可能性があります。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "claude -p で Claude Code をヘッドレス実行する",
      steps: [
        {
          title: "プロンプトを 1 つ実行して終了する",
          text: "`-p`（または `--print`）は、対話型の画面なしで Claude Code を実行し、終わると終了します。成功時の終了コードは 0 です。入力をパイプで渡すこともできます。",
          code: 'claude -p "List the failing tests and why they fail"\ncat error.log | claude -p "Explain this error"',
        },
        {
          title: "スクリプトで読める出力を得る",
          text: "`--output-format json` は、結果をセッション ID やメタデータと一緒に返します。メタデータには、あなたのマシン上で計算された推定値である `total_cost_usd` も含まれます。`stream-json`（`--verbose` と併用）は、イベントを発生したそばからストリーミングします。",
          code: "claude -p \"Summarize this repo\" --output-format json | jq -r '.result'",
        },
        {
          title: "必要なツールだけを許可する",
          text: "ヘッドレスモードでは、プロンプトを承認する人がいません。v2.1.302 以降、モードを指定しない実行は Manual で始まり、承認が必要なものはすべて拒否されます。許可する操作は `--allowedTools` で指定し、それ以外は待たずに拒否するよう `--permission-mode dontAsk` を使いましょう。",
          code: 'claude -p "Run the test suite and summarize failures" \\\n  --permission-mode dontAsk --allowedTools "Read,Bash(npm test)"',
        },
        {
          title: "実行に上限を設ける",
          text: "`--max-turns` はエージェントのターン数で、`--max-budget-usd` は推定コストで実行を止めます（少し超えることがあります）。どちらも `-p` でのみ使えます。",
          code: 'claude -p "Fix the lint errors" --max-turns 15 --max-budget-usd 3',
        },
        {
          title: "あとで同じ会話を続ける",
          text: "JSON 出力からセッション ID を保存して `--resume` に渡すか、`--continue` でそのディレクトリの直近のセッションを続けます。",
          code: "id=$(claude -p \"Start a code review of src/\" --output-format json | jq -r '.session_id')\nclaude -p \"Now check the tests too\" --resume \"$id\"",
        },
        {
          title: "cron でスケジュール実行する",
          text: "Anthropic のドキュメントには cron の例がありません。この例はドキュメントに記載されたフラグだけを使っています。cron の PATH は最小限なので、`which claude` で調べたフルパスを使い、ログのフォルダーは先に作っておきましょう。ここで `--bare` を付けてはいけません。サブスクリプションのログインを飛ばしてしまい、API キーが必要になります。",
          code: '# crontab -e：平日の 9:00\n0 9 * * 1-5  cd /path/to/repo && /path/to/claude -p "Summarize yesterday\'s commits and list new TODO comments. Do not edit files." --permission-mode dontAsk --allowedTools "Read,Bash(git log *),Bash(git diff *)" --max-turns 10 --output-format json >> "$HOME/logs/claude-daily.log" 2>&1',
        },
      ],
      source: { label: "出典：Anthropic のヘッドレスモードのドキュメント", href: "https://code.claude.com/docs/en/headless" },
    },
    {
      kind: "text",
      title: "無人で実行するときの権限",
      points: [
        "`dontAsk` と `--allowedTools` のリストの組み合わせは、最も締め付けの強い選択肢です。リストにないものはすべて拒否します。",
        "`auto` は、あなたの代わりに分類器が各操作を審査します。Anthropic は、安全を保証するものではないと注記しています。",
        "`acceptEdits` は、ファイルの編集と簡単なファイル操作のコマンドを承認しますが、それ以外のシェルコマンドは承認しません。",
        "`bypassPermissions` は、確認プロンプトと安全チェックを飛ばします。プロンプトインジェクションに対する保護がまったくないため、Anthropic はインターネットに接続しない隔離されたコンテナや VM でのみ使うよう勧めています。",
        "プロジェクト内のすべての実行に適用するルールは、`.claude/settings.json` の `permissions.allow` と `permissions.deny` に書きます。deny のルールが常に優先されます。",
      ],
    },
    {
      kind: "text",
      title: "クラウドの選択肢：パソコンの電源が切れているとき",
      points: [
        "クラウドセッション：`claude --cloud \"<task>\"` は、あなたの GitHub のブランチをもとに Anthropic のインフラで動き、ノートパソコンを閉じても続きます。追加の指示は `claude -p \"...\" --cloud <session-id>` で送ります。",
        "クラウドのスケジュールタスク：`/schedule` または claude.ai/code で作成し、スケジュール（最短で 1 時間ごと）、API の呼び出し、GitHub のイベントで実行されます。Pro、Max、Ultra、Team、Enterprise で利用でき、リサーチプレビューです。",
        "GitHub Actions：`schedule` トリガー付きの `anthropics/claude-code-action@v1`。`claude setup-token` で得た OAuth トークンを使うとサブスクリプションが使われ、API キーを使うとトークン単位で課金されます。",
      ],
    },
    {
      kind: "steps",
      kicker: "Crewmark なら",
      title: "バックグラウンドエージェントに継続的な仕事を与える",
      text: [
        "バックグラウンドタスクも agent view も cron も、あなたがすでに決めた仕事を始めるだけです。Crewmark は代わりに、Claude Code のセッションに継続的な職務を与えます。勤務時間中はハートビートで起動し、ボードから次のタスクを取り、行き詰まったらあなたにメッセージを送ります。",
      ],
      steps: [
        {
          title: "セッションを社員にする",
          text: "職種と数字で書いた目標を選び、Crewmark が表示するセットアップ用のコマンドを Claude Code で実行します。その会話がそのまま社員になります。",
        },
        {
          title: "ハートビートに仕事を始めさせる",
          text: "Crewmark のデーモンが、勤務時間中は 15 分・30 分・60 分ごとに、すでに契約中のサブスクリプションでセッションを起こし、時間外はそっとしておきます。",
        },
        {
          title: "タスクを割り当て、メッセージに返信する",
          text: "仕事をボードにタスクとして追加すると、社員がそれに着手し、作業しながらコメントし、レビューが必要なときはあなたに相談します。[AI 社員とは何か](/ai-employees)もご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "claude -p で Claude Code をヘッドレス実行する" },
  mid: {
    title: "次のタスクも自分で選んでほしいなら",
    text: "Crewmark は、あなたが決めた勤務時間中にハートビートで Claude Code のセッションを起こし、ボードから次のタスクを渡します。",
    button: "早期アクセスに登録",
  },
  faq: {
    title: "Claude Code のバックグラウンドエージェントに関するよくある質問",
    items: [
      {
        q: "Claude Code をバックグラウンドで実行するには？",
        a: "セッション内では、Ctrl+B を押すと実行中のコマンドやサブエージェントをバックグラウンドに回せます。セッション全体をバックグラウンドで始めるには `claude --bg \"<prompt>\"` を使います。スクリプトや cron には、ヘッドレスモードの `claude -p \"<prompt>\"` を使います。",
      },
      {
        q: "Claude Code のヘッドレスモードとは何ですか？",
        a: "`-p`（または `--print`）を付けて Claude Code を実行することです。プロンプトを受け取り、対話型の画面なしで作業して終了し、結果をテキスト、JSON、JSON イベントのストリームのいずれかで出力します。",
      },
      {
        q: "ターミナルを閉じてもバックグラウンドエージェントは動き続けますか？",
        a: "セッション内のバックグラウンドタスクは、Claude Code が終了すると止まります。`--bg` で始めたセッションは、ターミナルを閉じた後も、パソコンがシャットダウンするまで動き続けます。クラウドセッションとクラウドのスケジュールタスクは、パソコンの電源が切れていても動き続けます。",
      },
      {
        q: "無人の実行にはどの権限モードを使うべきですか？",
        a: "まずは `--permission-mode dontAsk` と、そのジョブに必要なものだけを並べた `--allowedTools` のリストから始めましょう。`bypassPermissions` は、インターネットに接続しない隔離されたコンテナや VM の中でだけ使ってください。",
      },
      {
        q: "claude -p は Claude のサブスクリプションを使いますか？",
        a: "ログインしているものを使います。ただし `--bare` を渡すとログインが飛ばされ、API キーが必要になります。ヘッドレスの実行がプランの利用上限にどう計上されるかは、Anthropic のドキュメントに明記されていません。",
      },
      {
        q: "バックグラウンドエージェントの様子を確認するには？",
        a: "セッション内では `/tasks`、`--bg` で始めたセッションには `claude agents`、ヘッドレスの実行にはログファイルか JSON 出力を使います。",
      },
    ],
  },
  cta: {
    title: "Claude Code に継続的な仕事を与えましょう。",
    text: "Crewmark は、Claude Code のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "早期アクセスに登録",
  },
  checked: "2026年11月2日に Anthropic の Claude Code ドキュメントと照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Anthropic とは提携しておらず、その承認も受けていません。Claude および Claude Code は Anthropic の商標です。",
};
